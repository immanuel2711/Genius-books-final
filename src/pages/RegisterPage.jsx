import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthHeader from "../components/AuthHeader";
import SEO from "../components/SEO";

const RULES = {
  contactName: {
    regex: /^[a-zA-Z\s.''-]{2,60}$/,
    message: "Name must be 2–60 letters. No numbers or symbols.",
  },
  schoolName: {
    regex: /^.{2,120}$/,
    message: "School name must be 2–120 characters.",
    optional: true,
  },
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    message: "Enter a valid email address.",
  },
  password: {
    regex: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
    message: "Min 8 characters with at least one letter and one number.",
  },
};

function validateField(name, value, form) {
  const rule = RULES[name];
  if (rule?.optional && !value.trim()) return "";
  if (!value.trim()) return "This field is required.";
  if (name === "confirmPassword") {
    return value !== form.password ? "Passwords do not match." : "";
  }
  if (rule && !rule.regex.test(value)) return rule.message;
  return "";
}

export default function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ contactName: "", schoolName: "", email: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value, { ...form, [name]: value }) }));
    }
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value, form) }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};
    for (const key of Object.keys(form)) {
      newErrors[key] = validateField(key, form[key], form);
    }
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    setSubmitError("");
    setLoading(true);
    const result = await register(form.contactName, form.schoolName, form.email, form.password);
    setLoading(false);
    if (result.success) {
      navigate("/login", { state: { registered: true } });
    } else {
      setSubmitError(result.error || "Registration failed. Please try again.");
    }
  }

  function field(name, props) {
    const id = `register-${name}`;
    return (
      <div className="field-group">
        <input
          id={id}
          name={name}
          value={form[name]}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-label={props.placeholder}
          aria-invalid={errors[name] ? "true" : undefined}
          className={errors[name] ? "input-invalid" : ""}
          {...props}
        />
        {errors[name] && <p className="field-error" role="alert">{errors[name]}</p>}
      </div>
    );
  }

  return (
    <>
      <SEO title="Register Free" description="Register your school with Genius Books for free access to the digital library — LKG and UKG video lessons for Tamil Nadu schools." noindex />
      <AuthHeader mode="register" />
      <div className="auth-shell">
        <div className="auth-left">
          <h1 className="auth-left-heading">
            Your <span>digital library</span> awaits
          </h1>
          <p className="auth-left-sub">
            Create a free account to unlock interactive video lessons for every page — LKG and UKG,
            all three terms, crafted for Tamil Nadu.
          </p>
          <div className="auth-trust-row">
            <div className="auth-trust-item"><strong>10+</strong><span>Digital Books</span></div>
            <div className="auth-trust-item"><strong>All Terms</strong><span>LKG &amp; UKG</span></div>
            <div className="auth-trust-item"><strong>Free</strong><span>Always</span></div>
          </div>
        </div>

        <div className="auth-right">
          <div className="auth-form-wrap">
            <p className="auth-eyebrow">Free Registration</p>
            <h2 className="auth-form-title">Create your account</h2>
            <p className="auth-form-sub">Takes 30 seconds. No card required.</p>
            {submitError && <p className="auth-error">{submitError}</p>}
            <form className="auth-form" onSubmit={handleSubmit} noValidate>
              {field("contactName", { placeholder: "Your Full Name", autoComplete: "name", type: "text", required: true })}
              {field("schoolName", { placeholder: "School Name (optional)", autoComplete: "organization", type: "text" })}
              {field("email", { placeholder: "Email Address", autoComplete: "email", type: "email", required: true })}
              <div className="auth-form-row">
                {field("password", { placeholder: "Password (min. 8)", autoComplete: "new-password", type: "password", required: true })}
                {field("confirmPassword", { placeholder: "Confirm Password", autoComplete: "new-password", type: "password", required: true })}
              </div>
              <button className="auth-submit" type="submit" disabled={loading}>
                {loading ? "Creating account…" : "Create Account →"}
              </button>
            </form>
            <p className="auth-footer-link" style={{ marginTop: "1rem" }}>
              Already registered? <Link to="/login">Sign in here</Link>
            </p>
            <p className="auth-footer-link" style={{ marginTop: "0.5rem" }}>
              <Link to="/" style={{ color: "var(--muted)" }}>← Back to home</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
