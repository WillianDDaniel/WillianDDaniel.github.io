import { useEffect, useState } from "react";

export default function Background() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    // Container principal: fundo branco sólido
    <div className="fixed inset-0 -z-10 w-full h-full bg-white overflow-hidden">

      {/* 1. O Grid: Um padrão de pontos cinza super claros (zinc-200)
        Aumente ou diminua o 24px para mudar o espaçamento dos pontos 
      */}
      <div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:24px_24px]" />

      {/* 2. O Spotlight (Interativo): Uma aura muito suave usando sua cor secundária (zinc-900).
        rgba(24, 24, 27) é o valor hexadecimal do zinc-900. 
        A opacidade em 0.03 garante que seja apenas uma "sombra" elegante.
      */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(24, 24, 27, 0.03), transparent 40%)`,
        }}
      />

      {/* 3. Gradiente de Fade Inferior (Opcional, mas recomendado): 
        Faz o grid sumir suavemente no final da tela para um acabamento limpo.
      */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white pointer-events-none" />
    </div>
  );
}