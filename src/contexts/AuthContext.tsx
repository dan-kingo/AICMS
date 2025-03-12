import { registerFormData } from "@/utils/registerFormSchema";
import { createContext } from "react";

export interface AuthContextType {
  user: registerFormData | null;
  loading: boolean;
  login: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);
