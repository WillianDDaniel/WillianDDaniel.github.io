import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import Header from "@/components/Header";

vi.mock("@/components/Logo", () => ({
  default: () => <div data-testid="mock-logo">Logo</div>
}));

vi.mock("@/components/Menu", () => ({
  default: ({ mobile, onClose }: { mobile?: boolean; onClose?: () => void }) => (
    <div
      data-testid={mobile ? "mock-mobile-menu" : "mock-desktop-menu"}
      onClick={onClose}
    >
      Menu
    </div>
  )
}));

describe("Header Component", () => {
  it("should render logo and desktop menu by default", () => {
    render(<Header />);

    const logoElement = screen.getByTestId("mock-logo");
    expect(logoElement).toBeInTheDocument();

    const desktopMenuElement = screen.getByTestId("mock-desktop-menu");
    expect(desktopMenuElement).toBeInTheDocument();
  });

  it("should start with the mobile menu hidden", () => {
    render(<Header />);

    const mobileMenuElement = screen.getByTestId("mock-mobile-menu");
    const containerDiv = mobileMenuElement.parentElement;

    expect(containerDiv).toHaveClass("-translate-x-full");
  });

  it("should open mobile menu when toggle button is clicked", () => {
    render(<Header />);

    const toggleButton = screen.getByRole("button", { name: /toggle menu/i });
    fireEvent.click(toggleButton);

    const mobileMenuElement = screen.getByTestId("mock-mobile-menu");
    const containerDiv = mobileMenuElement.parentElement;

    expect(containerDiv).toHaveClass("translate-x-0");
  });

  it("should lock body scroll when mobile menu is open and unlock when closed", () => {
    render(<Header />);

    expect(document.body.style.overflow).toBe("unset");

    const toggleButton = screen.getByRole("button", { name: /toggle menu/i });
    fireEvent.click(toggleButton);

    expect(document.body.style.overflow).toBe("hidden");

    const mobileMenuElement = screen.getByTestId("mock-mobile-menu");
    fireEvent.click(mobileMenuElement);

    expect(document.body.style.overflow).toBe("unset");
  });
});