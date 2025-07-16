import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Profesores } from "./components/Profesores";
import { Horarios } from "./components/Horarios";
import { Contacto } from "./components/Contacto";
import { Galeria } from "./components/Galeria";

import "./fonts/bebasFont.css";
import { Ubicacion } from "./components/ubicacion";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <Hero />
      <Horarios />
      <Profesores />
      <Contacto />
      <Ubicacion />
      <Galeria />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
