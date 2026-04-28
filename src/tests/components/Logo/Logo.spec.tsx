import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Logo from "@/components/Logo";

describe("Logo Component", () => {
  it("should render the logo image with correct alt text and source", () => {
    render(<Logo />);

    const imageElement = screen.getByRole("img", { name: /Willian Daniel Logo/i });

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "/logo.png");
  });

  it("should render the name parts correctly", () => {
    render(<Logo />);

    const firstName = screen.getByText("Willian");
    const middleInitial = screen.getByText("D");
    const lastName = screen.getByText("Daniel");

    expect(firstName).toBeInTheDocument();
    expect(middleInitial).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
  });
});