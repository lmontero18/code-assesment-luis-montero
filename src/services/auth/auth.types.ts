export type AuthErrorCode =
  | "AUTH_INVALID_CREDENTIALS"
  | "AUTH_SESSION_EXPIRED"
  | "AUTH_NETWORK_ERROR"
  | "AUTH_UNKNOWN_ERROR";

export interface User {
  email: string;
  name: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface LoginCredentials {
  email: string;
  password: string;
  remember?: boolean;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
}
