import { useState, useCallback, useEffect } from "react";
import { authService } from "@/services/auth/auth.service";
import type { AuthState, AuthErrorCode } from "@/services/auth/auth.types";
import { parseError } from "@/utils/error";
import { AppError } from "@/utils/error";

interface AuthContextValue extends AuthState {
  login: (email: string, password: string, remember: boolean) => Promise<void>;
  logout: () => void;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: true,
};

export const useAuth = (): AuthContextValue => {
  const [state, setState] = useState<AuthState>(initialState);

  useEffect(() => {
    const initAuth = () => {
      const isAuthenticated = authService.isAuthenticated();
      const user = authService.getUser();
      setState({
        isAuthenticated,
        user: user || null,
        loading: false,
      });
    };

    initAuth();
  }, []);

  const login = useCallback(
    async (email: string, password: string, remember: boolean) => {
      setState((prev) => ({ ...prev, loading: true }));

      try {
        const response = await authService.login({ email, password }, remember);
        setState({
          isAuthenticated: true,
          user: response.user,
          loading: false,
        });
      } catch (error) {
        setState((prev) => ({ ...prev, loading: false }));
        const parsedError = parseError(error);
        throw new AppError(
          parsedError.message,
          parsedError.code as AuthErrorCode,
          parsedError.status
        );
      }
    },
    []
  );

  const logout = useCallback(() => {
    authService.logout();
    setState({
      isAuthenticated: false,
      user: null,
      loading: false,
    });
  }, []);

  return {
    ...state,
    login,
    logout,
  };
};
