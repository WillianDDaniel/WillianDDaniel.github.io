import { useLoaderData } from "react-router";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Educations from "@/components/Educations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export async function loader() {
  try {
    const url = import.meta.env.VITE_API_URL;

    const [projectsRes, educationsRes] = await Promise.all([
      fetch(`${url}/api/projects`),
      fetch(`${url}/api/educations`)
    ]);

    const projects = await projectsRes.json();
    const educations = await educationsRes.json();

    return { projects, educations };

  } catch (error) {
    console.error("Erro ao buscar dados do Hono no build:", error);
    return { projects: [], educations: [] };
  }
}

export default function Home() {
  // Puxa os dados que o loader embutiu no HTML
  const { projects, educations } = useLoaderData<typeof loader>();

  return (
    <div className="flex min-h-screen flex-col text-white bg-linear-to-b from-white/5 to-black/20 backdrop-blur-sm">
      <Header />
      <Hero />
      <About />

      <Projects projects={projects} />
      <Educations educations={educations} />

      <Contact />
      <Footer />
    </div>
  );
}