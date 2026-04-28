import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const mockChangeLanguage = vi.fn();

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    i18n: {
      language: "pt-BR",
      changeLanguage: mockChangeLanguage,
    },
  }),
}));

describe("LanguageSwitcher Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render with default language PT-BR", () => {
    render(<LanguageSwitcher />);

    const displayLanguage = screen.getByText("PT-BR");
    expect(displayLanguage).toBeInTheDocument();
  });

  it("should toggle the dropdown visibility when the button is clicked", () => {
    render(<LanguageSwitcher />);

    const toggleButton = screen.getByRole("button", { name: /PT-BR/i });
    expect(screen.queryByText("English (US)")).not.toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(screen.getByText("English (US)")).toBeInTheDocument();

    fireEvent.click(toggleButton);
    expect(screen.queryByText("English (US)")).not.toBeInTheDocument();
  });

  it("should call changeLanguage and close dropdown when an option is selected", () => {
    render(<LanguageSwitcher />);

    const toggleButton = screen.getByRole("button", { name: /PT-BR/i });
    fireEvent.click(toggleButton);

    const englishOption = screen.getByText("English (US)");
    fireEvent.click(englishOption);

    expect(mockChangeLanguage).toHaveBeenCalledWith("en-US");
    expect(mockChangeLanguage).toHaveBeenCalledTimes(1);

    expect(screen.queryByText("English (US)")).not.toBeInTheDocument();
  });

  it("should close the dropdown when clicking outside the component", () => {
    render(<LanguageSwitcher />);

    const toggleButton = screen.getByRole("button", { name: /PT-BR/i });
    fireEvent.click(toggleButton);

    expect(screen.getByText("English (US)")).toBeInTheDocument();

    fireEvent.mouseDown(document.body);

    expect(screen.queryByText("English (US)")).not.toBeInTheDocument();
  });
});
