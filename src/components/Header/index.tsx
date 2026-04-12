import Logo from "@/components/Logo";
import Menu from "@/components/Menu";

export default function Header() {
  return (
    <header className="
      top-0 left-0 z-50
      flex items-center justify-between px-16
      w-full h-14 bg-white dark:bg-zinc-950
      shadow-sm dark:shadow-zinc-900 sticky
    ">
      <Logo />
      <Menu />
    </header>
  )
}