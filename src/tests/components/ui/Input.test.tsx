import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Formik, Form } from "formik";
import userEvent from "@testing-library/user-event";
import Input from "@/components/ui/Input";
import { MailIcon } from "@/components/icons";

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <Formik initialValues={{ email: "" }} onSubmit={() => {}}>
    <Form>{children}</Form>
  </Formik>
);

describe("Input", () => {
  it("renders correctly with basic props", () => {
    render(
      <TestWrapper>
        <Input
          id="email"
          name="email"
          placeholder="Enter email"
          data-testid="email-input"
        />
      </TestWrapper>
    );

    const input = screen.getByTestId("email-input");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "Enter email");
  });

  it("shows label when provided", () => {
    render(
      <TestWrapper>
        <Input id="email" name="email" label="Email Address" />
      </TestWrapper>
    );

    expect(screen.getByText("Email Address")).toBeInTheDocument();
  });

  it("renders icon when provided", () => {
    render(
      <TestWrapper>
        <Input id="email" name="email" icon={<MailIcon />} />
      </TestWrapper>
    );

    const iconContainer = screen.getByTestId("icon-container");
    expect(iconContainer.querySelector("svg")).toBeInTheDocument();
  });

  it("shows error message when error prop is provided", () => {
    const errorMessage = "Email is required";
    render(
      <TestWrapper>
        <Input id="email" name="email" error={errorMessage} />
      </TestWrapper>
    );

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("border-red-500");
  });

  it("uses password type when specified", () => {
    render(
      <TestWrapper>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
        />
      </TestWrapper>
    );

    const input = screen.getByPlaceholderText("Enter password");
    expect(input).toHaveAttribute("type", "password");
  });

  it("allows text input", async () => {
    render(
      <TestWrapper>
        <Input id="email" name="email" data-testid="email-input" />
      </TestWrapper>
    );

    const input = screen.getByTestId("email-input");
    await userEvent.type(input, "test@example.com");
    expect(input).toHaveValue("test@example.com");
  });
});
