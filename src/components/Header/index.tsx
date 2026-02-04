import Logo from "../Logo";
import Menu from "../Menu";

export default function Header() {
  return (
    <header className="
      flex items-center justify-between
      w-full h-12 bg-white dark:bg-gray-900
    ">
      <Logo />
      <Menu />
    </header>
  )
}