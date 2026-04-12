import Background from "@/components/Background";
import Terminal from "@/components/Terminal";
import Copy from "@/components/Copy";

export default function Hero() {

  return (
    <section id="hero" className="flex items-stretch justify-center px-16 py-10
      text-zinc-900 w-full min-h-[calc(100vh-3.5rem)] relative gap-10
    ">

      <Background />
      <Copy />
      <Terminal />

    </section>
  )
}