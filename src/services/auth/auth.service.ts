import { AppError } from "@/utils/error";
import { storageService } from "../storage/storage.service";
import type {
  AuthResponse,
  LoginCredentials,
  AuthErrorCode,
} from "./auth.types";

const AUTH_TOKEN_KEY = "auth_token";
const USER_KEY = "auth_user";

class AuthService {
  private createAuthError(message: string, code: AuthErrorCode, status = 401) {
    return new AppError(message, code, status);
  }

  async login(
    credentials: LoginCredentials,
    remember: boolean
  ): Promise<AuthResponse> {
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));

      if (
        credentials.email !== "test@test.com" ||
        credentials.password !== "password"
      ) {
        throw this.createAuthError(
          "Invalid email or password",
          "AUTH_INVALID_CREDENTIALS"
        );
      }

      const authResponse: AuthResponse = {
        token: "mock-jwt-token",
        user: {
          email: credentials.email,
          name: "Test User",
        },
      };

      const storageType = remember ? "local" : "session";
      storageService.set(AUTH_TOKEN_KEY, authResponse.token, storageType);
      storageService.set(USER_KEY, authResponse.user, storageType);

      return authResponse;
    } catch (error) {
      if (error instanceof AppError) throw error;

      throw this.createAuthError(
        "Network error occurred",
        "AUTH_NETWORK_ERROR",
        503
      );
    }
  }

  logout(): void {
    storageService.remove(AUTH_TOKEN_KEY, "local");
    storageService.remove(USER_KEY, "local");
    storageService.remove(AUTH_TOKEN_KEY, "session");
    storageService.remove(USER_KEY, "session");
  }

  isAuthenticated(): boolean {
    const localToken = storageService.get<string>(AUTH_TOKEN_KEY, "local");
    const sessionToken = storageService.get<string>(AUTH_TOKEN_KEY, "session");
    return Boolean(localToken || sessionToken);
  }

  getUser() {
    return (
      storageService.get<AuthResponse["user"]>(USER_KEY, "local") ||
      storageService.get<AuthResponse["user"]>(USER_KEY, "session")
    );
  }
}

export const authService = new AuthService();
