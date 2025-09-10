import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Spinner } from "@/components/ui/Spinner";

describe("Spinner", () => {
  it("renders correctly", () => {
    const { container } = render(<Spinner />);

    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();

    expect(svg).toHaveClass("animate-spin", "h-5", "w-5", "text-white");
  });
});
