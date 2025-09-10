import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ErrorAlert } from "@/components/ui/ErrorAlert";

describe("ErrorAlert", () => {
  it("displays error message when provided", () => {
    const message = "Test error message";
    render(<ErrorAlert message={message} />);

    expect(screen.getByText(message)).toBeInTheDocument();
    expect(screen.getByText(message)).toBeInTheDocument();
    const alertDiv = screen.getByText(message);
    expect(alertDiv).toHaveClass(
      "p-4",
      "bg-red-50",
      "border",
      "border-red-200",
      "rounded-lg",
      "text-red-600"
    );
  });

  it("returns null when no message is provided", () => {
    const { container } = render(<ErrorAlert message={null} />);
    expect(container.firstChild).toBeNull();
  });
});
