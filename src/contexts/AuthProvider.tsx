import { useState, useEffect, ReactNode } from "react";
import axios from "axios";
import { AuthContext, AuthContextType } from "./AuthContext";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}
const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<AuthContextType["user"]>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setLoading(false);
    } else {
      axios
        .get<AuthContextType["user"]>("/api/user/current-user", {
          withCredentials: true,
        })
        .then((res) => {
          setUser(res.data);
          localStorage.setItem("user", JSON.stringify(res.data)); // Store user
        })
        .catch(() => setUser(null))
        .finally(() => setLoading(false));
    }
  }, []);

  const login = (token: string) => {
    document.cookie = `token=${token}; path=/`;
    axios
      .get<AuthContextType["user"]>("/api/user/current-user", {
        withCredentials: true,
      })
      .then((res) => setUser(res.data));
  };

  const logout = () => {
    axios.get("/api/auth/logout").finally(() => {
      setUser(null);
      <Navigate to="/login" />;
    });
  };

  // handle back and forth navigation
  useEffect(() => {
    const handleBackForwardNavigation = () => {
      if (!window.location.pathname.startsWith("/dashboard")) {
        logout();
      }
    };

    window.addEventListener("popstate", handleBackForwardNavigation);

    return () => {
      window.removeEventListener("popstate", handleBackForwardNavigation);
    };
  }, []);

  // handle site exist
  useEffect(() => {
    const handleSiteExit = () => logout();

    window.addEventListener("beforeunload", handleSiteExit);
    return () => window.removeEventListener("beforeunload", handleSiteExit);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
