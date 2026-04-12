export default function Logo() {
  return (
    <div className="text-2xl font-bold flex items-base">
      <img src="public/logo.png" alt="Willian Daniel Logo"
        className="w-7 h-7 inline-block mr-2"
      />

      <span>Willian</span>

      <span className="text-amber-300">D</span>

      <span>Daniel</span>
    </div>
  )
}