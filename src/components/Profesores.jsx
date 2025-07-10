import { motion } from "framer-motion";
import { useState } from "react";
import profe1 from "../assets/1.jpg";
import profe2 from "../assets/2.jpg";

export const Profesores = () => {
  const [mostrarTodos, setMostrarTodos] = useState(false);

  const profesores = [
    {
      nombre: "Carlos Pérez",
      area: "Musculación",
      horarios: "Lunes a Viernes 8:00 - 12:00",
      foto: profe1,
    },
    {
      nombre: "Laura Gómez",
      area: "Funcional y Cross",
      horarios: "Lunes a Viernes 17:00 - 21:00",
      foto: profe2,
    },
    {
      nombre: "Pedro Martínez",
      area: "Entrenamiento Deportivo",
      horarios: "Lunes a Viernes 9:00 - 13:00",
      foto: profe1,
    },
    {
      nombre: "Ana Torres",
      area: "Nutrición",
      horarios: "Martes y Jueves 10:00 - 12:00",
      foto: profe2,
    },
    {
      nombre: "Juan Pérez",
      area: "Entrenamiento Personal",
      horarios: "Lunes a Sábado 8:00 - 14:00",
      foto: profe1,
    },
    {
      nombre: "María López",
      area: "Yoga y Pilates",
      horarios: "Miércoles y Viernes 18:00 - 20:00",
      foto: profe2,
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
            <img src={p.foto} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h4 className="text-xl font-semibold">{p.nombre}</h4>
              <p className="text-sm text-zinc-300">{p.area}</p>
              <p className="text-sm text-zinc-400">{p.horarios}</p>
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
