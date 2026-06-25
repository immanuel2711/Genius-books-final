const BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

async function req(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json", ...options.headers },
    ...options,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Request failed");
  return data;
}

export const authApi = {
  register: (name, schoolName, email, password) =>
    req("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({ name, schoolName, email, password }),
    }),

  login: (email, password) =>
    req("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),

  logout: () => req("/api/auth/logout", { method: "POST" }),

  getMe: () => req("/api/auth/me"),
};

export const contentApi = {
  getCatalog: () => req("/api/content"),

  getVideoUrl: (classGroup, term, filename) =>
    req(
      `/api/content/url?classGroup=${encodeURIComponent(classGroup)}&term=${term}&filename=${encodeURIComponent(filename)}`
    ),
};
