export class AppError extends Error {
  readonly code?: string;
  readonly status?: number;

  constructor(message: string, code?: string, status?: number) {
    super(message);
    this.name = "AppError";
    this.code = code;
    this.status = status;
  }

  static fromError(error: Error, code?: string, status?: number): AppError {
    return new AppError(error.message, code, status);
  }
}

interface ErrorResponse {
  message: string;
  code?: string;
  status?: number;
}

export const parseError = (error: unknown): ErrorResponse => {
  // Handle our custom AppError
  if (error instanceof AppError) {
    return {
      message: error.message,
      code: error.code,
      status: error.status,
    };
  }

  // Handle standard Error objects
  if (error instanceof Error) {
    return {
      message: error.message,
      code: "UNKNOWN_ERROR",
    };
  }

  // Handle string errors
  if (typeof error === "string") {
    return {
      message: error,
      code: "STRING_ERROR",
    };
  }

  // Handle API error responses
  if (error && typeof error === "object" && "message" in error) {
    return {
      message: String(error.message),
      code: "API_ERROR",
      status: "status" in error ? Number(error.status) : undefined,
    };
  }

  // Default case
  return {
    message: "An unexpected error occurred",
    code: "UNKNOWN_ERROR",
  };
};
