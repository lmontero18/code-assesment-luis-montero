import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Formik, Form } from "formik";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "@/components/ui/Checkbox";

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <Formik initialValues={{ remember: false }} onSubmit={() => {}}>
    <Form>{children}</Form>
  </Formik>
);

describe("Checkbox", () => {
  it("renders with label", () => {
    render(
      <TestWrapper>
        <Checkbox name="remember" label="Remember me" />
      </TestWrapper>
    );

    const checkbox = screen.getByLabelText("Remember me");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it("applies custom className", () => {
    render(
      <TestWrapper>
        <Checkbox
          name="remember"
          label="Remember me"
          className="custom-class"
        />
      </TestWrapper>
    );

    const label = screen.getByText("Remember me").closest("label");
    expect(label).toHaveClass("flex", "items-center", "custom-class");
  });

  it("can be checked and unchecked", async () => {
    render(
      <TestWrapper>
        <Checkbox name="remember" label="Remember me" />
      </TestWrapper>
    );

    const checkbox = screen.getByLabelText("Remember me");

    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it("has correct default classes", () => {
    render(
      <TestWrapper>
        <Checkbox name="remember" label="Remember me" />
      </TestWrapper>
    );

    const checkbox = screen.getByLabelText("Remember me");
    expect(checkbox).toHaveClass(
      "mr-2",
      "rounded",
      "border-gray-300",
      "text-blue-600",
      "focus:ring-blue-500"
    );
  });
});
