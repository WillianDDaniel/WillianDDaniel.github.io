import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import ThemeToggle from "@/components/ToggleTheme";

const mockMatchMedia = (matches: boolean) => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
};

describe("ThemeToggle Component", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.classList.remove("dark");
    vi.clearAllMocks();
  });

  it("should initialize with light theme by default if no OS preference or saved theme exists", () => {
    mockMatchMedia(false);
    render(<ThemeToggle />);

    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(window.localStorage.getItem("theme")).toBe("light");
  });

  it("should initialize with dark theme if OS preference is dark", () => {
    mockMatchMedia(true);
    render(<ThemeToggle />);

    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(window.localStorage.getItem("theme")).toBe("dark");
  });

  it("should prioritize saved theme from localStorage over OS preference", () => {
    mockMatchMedia(true);
    window.localStorage.setItem("theme", "light");

    render(<ThemeToggle />);

    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });

  it("should toggle the theme class and update localStorage when button is clicked", () => {
    mockMatchMedia(false);
    render(<ThemeToggle />);

    const toggleButton = screen.getByRole("button", { name: /alternar tema/i });

    expect(document.documentElement.classList.contains("dark")).toBe(false);

    fireEvent.click(toggleButton);
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(window.localStorage.getItem("theme")).toBe("dark");

    fireEvent.click(toggleButton);
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(window.localStorage.getItem("theme")).toBe("light");
  });
});