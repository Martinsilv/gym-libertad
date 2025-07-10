import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { NavItem } from "../components/ui/navBarItem";
import { ScrollLink } from "../components/ScrollLink";

import logo from "../assets/logo.png"; // Importa tu logo si es necesario
import "../App.css";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col items-center justify-between p-4 md:px-10 md:flex-row  z-50">
      {/* Encabezado con logo y botón hamburguesa */}
      <div className="flex justify-between items-center w-full md:w-auto gap-4">
        <img src={logo} alt="Logo Gimnasio Libertad" className="h-14  w-14" />
        <h1 className="text-2xl  font-bold">Gimnasio Libertad</h1>
        <button
          className="md:hidden z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Menú escritorio */}
      <ul className="hidden md:flex gap-6 text-medium ">
        <ScrollLink to="inicio">
          <li className="hover:scale-105 transition-transform duration-300">
            Inicio
          </li>
        </ScrollLink>
        <ScrollLink to="profesores">
          <li className="hover:scale-105 transition-transform duration-300">
            Profesores
          </li>
        </ScrollLink>
        <ScrollLink to="horarios">
          <li className="hover:scale-105  transition-transform duration-300">
            Horarios
          </li>
        </ScrollLink>
        <ScrollLink to="contacto">
          <li className="hover:scale-105 transition-transform duration-300">
            Contacto
          </li>
        </ScrollLink>
      </ul>

      {/* Menú mobile con overlay */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/95 text-4xl text-white z-40 border-l-[20px] border-red-700 flex flex-col justify-between items-center h-full py-10"
        >
          <div>
            <img
              src={logo}
              alt="Logo Gimnasio Libertad"
              className="h-20 w-20"
            />
          </div>
          <ul className="flex flex-col items-center gap-11 ">
            <ScrollLink to="inicio" onClick={() => setMenuOpen(false)}>
              <NavItem delay={0.1}>Inicio</NavItem>
            </ScrollLink>
            <ScrollLink to="profesores" onClick={() => setMenuOpen(false)}>
              <NavItem delay={0.2} className="font-bebas text-4xl">
                Profesores
              </NavItem>
            </ScrollLink>
            <ScrollLink to="horarios" onClick={() => setMenuOpen(false)}>
              <NavItem delay={0.3}>Horarios</NavItem>
            </ScrollLink>
            <ScrollLink to="contacto" onClick={() => setMenuOpen(false)}>
              <NavItem delay={0.4}>Contacto</NavItem>
            </ScrollLink>
          </ul>

          {/* Parte de abajo */}
          <div className="text-lg text-gray-300 font-bold">
            Gimnasio Libertad
          </div>
        </motion.div>
      )}
    </nav>
  );
};
