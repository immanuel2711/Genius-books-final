import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthHeader from "../components/AuthHeader";
import SEO from "../components/SEO";

const RULES = {
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    message: "Enter a valid email address.",
  },
  password: {
    regex: /.{1,}/,
    message: "Password is required.",
  },
};

function validateField(name, value) {
  if (!value.trim()) return "This field is required.";
  const rule = RULES[name];
  if (rule && !rule.regex.test(value)) return rule.message;
  return "";
}

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const justRegistered = location.state?.registered === true;
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  }

  function handleBlur(e) {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const newErrors = {};
    for (const key of Object.keys(form)) {
      newErrors[key] = validateField(key, form[key]);
    }
    setErrors(newErrors);
    if (Object.values(newErrors).some(Boolean)) return;

    setSubmitError("");
    setLoading(true);
    const result = await login(form.email, form.password);
    setLoading(false);
    if (result.success) {
      navigate("/library");
    } else {
      setSubmitError(result.error || "Invalid email or password.");
    }
  }

  function field(name, props) {
    const id = `login-${name}`;
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
      <SEO title="Sign In" description="Sign in to your Genius Books school digital library account." noindex />
      <AuthHeader mode="login" />
      <div className="auth-shell">
        <div className="auth-left">
          <h1 className="auth-left-heading">
            Welcome <span>back.</span>
          </h1>
          <p className="auth-left-sub">
            Sign back in to access your Genius Books digital library — interactive video lessons for
            LKG and UKG, all three terms.
          </p>
          <div className="auth-trust-row">
            <div className="auth-trust-item"><strong>10+</strong><span>Digital Books</span></div>
            <div className="auth-trust-item"><strong>All Terms</strong><span>LKG &amp; UKG</span></div>
            <div className="auth-trust-item"><strong>Free</strong><span>Always</span></div>
          </div>
        </div>

        <div className="auth-right">
          <div className="auth-form-wrap">
            <p className="auth-eyebrow">Your Account</p>
            <h2 className="auth-form-title">Sign in to your library</h2>
            <p className="auth-form-sub">Enter your email and password.</p>
            {justRegistered && (
              <p className="auth-success">Account created! Sign in to access your library.</p>
            )}
            {submitError && <p className="auth-error">{submitError}</p>}
            <form className="auth-form" onSubmit={handleSubmit} noValidate>
              {field("email", { placeholder: "Email Address", autoComplete: "email", type: "email", required: true })}
              {field("password", { placeholder: "Password", autoComplete: "current-password", type: "password", required: true })}
              <button className="auth-submit" type="submit" disabled={loading}>
                {loading ? "Signing in…" : "Sign In →"}
              </button>
            </form>
            <p className="auth-footer-link" style={{ marginTop: "1rem" }}>
              Don't have an account? <Link to="/register">Create one free</Link>
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
