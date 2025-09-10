import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { useAuth } from "@/hooks/useAuth";
import type { AuthState } from "@/services/auth/auth.types";

interface AuthContextType extends AuthState {
  login: (email: string, password: string, remember: boolean) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
}
