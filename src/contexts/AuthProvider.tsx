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
    axios
      .get<AuthContextType["user"]>("/api/user/current-user", {
        withCredentials: true,
      })
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
    axios.post("/api/logout").finally(() => {
      setUser(null);
      <Navigate to="/login" />;
    });
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
