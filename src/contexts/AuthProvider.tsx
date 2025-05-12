import { useState, useEffect, ReactNode } from "react";
import axios from "axios";
import { AuthContext, AuthContextType } from "./AuthContext";
import { Navigate } from "react-router-dom";
import { registerFormData } from "@/utils/registerFormSchema";

interface Props {
  children: ReactNode;
}

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<AuthContextType["user"]>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get<registerFormData>("/api/user/current-user", {
        withCredentials: true,
      }) // Read user session from cookie
      .then((res) => setUser(res.data))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
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
      <Navigate to="/" />;
    });
  };

  // handle site exit
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
