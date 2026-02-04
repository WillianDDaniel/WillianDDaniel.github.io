import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {

  return (
    <>
      <div className="
        flex min-h-screen flex-col text-white
        bg-linear-to-b from-blue-500 to-blue-800
      ">
        <Header />
        <Hero />
        <About />
        <Footer />
      </div>
    </>
  )
}
