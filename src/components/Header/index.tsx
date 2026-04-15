import { useState, useEffect } from "react";
import Logo from "@/components/Logo";
import Menu from "@/components/Menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 left-0 z-50 w-full bg-zinc-950 shadow-sm shadow-zinc-900">
      <div className="flex items-center justify-between px-6 md:px-16 h-14 relative z-50 bg-zinc-950">
        <Logo />

        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-gray-200 transition-transform duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-gray-200 transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-gray-200 transition-transform duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>

        <div className="hidden md:flex">
          <Menu />
        </div>
      </div>

      <div
        className={`
          md:hidden fixed top-14 left-0 w-full bg-zinc-950/95 backdrop-blur-md transition-all duration-300 z-40 flex flex-col
          ${isOpen ? "h-[calc(100vh-3.5rem)] opacity-100 visible" : "h-0 opacity-0 invisible"}
        `}
      >
        <Menu mobile onClose={() => setIsOpen(false)} />
      </div>
    </header>
  );
}
