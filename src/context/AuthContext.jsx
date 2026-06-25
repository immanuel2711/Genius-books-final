import { createContext, useContext, useState, useEffect } from "react";
import { authApi } from "../api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    authApi
      .getMe()
      .then(({ data }) => setUser(data.user))
      .catch(() => {})
      .finally(() => setAuthLoading(false));
  }, []);

  async function register(name, schoolName, email, password) {
    try {
      await authApi.register(name, schoolName, email, password);
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }

  async function login(email, password) {
    try {
      const { data } = await authApi.login(email, password);
      setUser(data.user);
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }

  async function logout() {
    try {
      await authApi.logout();
    } catch {
      // best-effort
    }
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, authLoading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
