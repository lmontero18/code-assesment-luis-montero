import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button } from "@/components/ui/Button";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  it("renders children correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("shows loading state", () => {
    render(<Button isLoading>Submit</Button>);
    expect(screen.getByText("Please wait...")).toBeInTheDocument();
    const svg = document.querySelector("svg");
    expect(svg).toHaveClass("animate-spin");
  });

  it("is disabled when loading", () => {
    render(<Button isLoading>Submit</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveClass("bg-blue-400", "cursor-not-allowed");
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Submit</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("calls onClick handler when clicked", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    await userEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", async () => {
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>
        Click me
      </Button>
    );

    await userEvent.click(screen.getByText("Click me"));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
