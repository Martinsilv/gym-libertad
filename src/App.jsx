import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Profesores } from "./components/Profesores";
import { Horarios } from "./components/Horarios";
import { Contacto } from "./components/Contacto";
import { Galeria } from "./components/Galeria";

import "./fonts/bebasFont.css";

export default function App() {
  return (
    <div className="bg-black text-white font-sans">
      <Navbar />
      <Hero />
      <Profesores />
      <Horarios />
      <Contacto />

      <Galeria />
      <footer className="text-center text-sm text-zinc-400 py-6">
        © 2025 Gimnasio Libertad. Todos los derechos reservados.
      </footer>
    </div>
  );
}
