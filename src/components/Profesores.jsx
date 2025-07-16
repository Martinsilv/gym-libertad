import { motion } from "framer-motion";
import { useState } from "react";
import profe1 from "../assets/profe1.jpeg";
import profe2 from "../assets/profe2.jpeg";
import profe3 from "../assets/profe3.jpeg";
import profe4 from "../assets/profe4.jpeg";
import profe5 from "../assets/profe5.jpeg";
import profe6 from "../assets/profe6.jpeg";
import { Instagram } from "lucide-react";

export const Profesores = () => {
  const [mostrarTodos, setMostrarTodos] = useState(false);

  const profesores = [
    {
      nombre: "Jorge González",
      area: "Funcional",
      horarios: "Lunes a Viernes 19:00 a 20:00",
      foto: profe1,
      instagram: "https://instagram.com/jorgedaniel.gonzalez.944",
    },

    {
      nombre: "Nicolás Larroca",
      area: "Funcional",
      horarios: "Lunes a Viernes 20:00 - 21:00/ 21:00 - 22:00",
      foto: profe3,
      instagram: "https://instagram.com/nicolas_larrocapf",
    },
    {
      nombre: "Lourdes Calvano",
      area: "Funcional",
      horarios: "Lunes a Viernes 9:00 - 10:00",
      foto: profe4,
      instagram: "https://instagram.com/lulu_.calvano",
    },
    {
      nombre: "Gustavo Pizzutti",
      area: "Musculación",
      horarios: "Lunes a Viernes 19:00 -22:00",
      foto: profe5,
      instagram: "https://instagram.com/gustavo_pizzu",
    },
    {
      nombre: "Marilyn Rodríguez",
      area: "Funcional",
      horarios: "Lunes a Viernes 08:00 - 09:00/ 16:00 - 17:00/ 17:00 - 18:00",
      foto: profe2,
      instagram: "https://instagram.com/marilynrodriguez870",
    },
    {
      nombre: "Rosalía Blanco",
      area: "Musculación",
      horarios: "Lunes y Viernes 16:00 - 22:00",
      foto: profe6,
      instagram: "https://instagram.com/rosi.blanco.7",
    },
  ];

  // Mostrar solo los primeros 4 profesores si mostrarTodos es false
  const profesoresVisibles = mostrarTodos ? profesores : profesores.slice(0, 4);

  return (
    <section className="py-12 px-4 md:px-20">
      <h3
        id="profesores"
        style={{ fontFamily: "Bebas Neue, sans-serif" }}
        className="text-4xl  text-center mb-8"
      >
        Nuestros Profesores
      </h3>
      <div className="grid gap-3 grid-cols-2 lg:grid-cols-4">
        {profesoresVisibles.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="bg-zinc-800 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <img src={p.foto} className="w-full lg:h-72 md:h-40 object-cover" />
            <div className="p-4">
              <h4 className="text-lg  font-semibold">{p.nombre}</h4>
              <p className="text-base text-zinc-300 ">{p.area}</p>
              <p className="text-sm  text-zinc-400">{p.horarios}</p>
              {p.instagram && (
                <a
                  href={p.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline mt-2 inline-block "
                >
                  <Instagram className="inline-block mr-1" />
                  Instagram
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Botón Ver más - solo se muestra si hay más de 4 profesores */}
      {profesores.length > 4 && (
        <div className="text-center mt-8">
          <motion.button
            onClick={() => setMostrarTodos(!mostrarTodos)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            {mostrarTodos ? "Ver menos" : "Ver más"}
          </motion.button>
        </div>
      )}
    </section>
  );
};
