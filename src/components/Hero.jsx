import { motion } from "framer-motion";
import imagenHero from "../assets/3.jpg";
import { ScrollLink } from "../components/ScrollLink";

export const Hero = () => (
  <div className="relative h-[90vh] overflow-hidden">
    <img
      src={imagenHero}
      alt="fondo"
      className="absolute inset-0 w-full h-full object-cover opacity-60"
    />
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
    >
      <h2 className="text-4xl font-bold mb-4">
        ¡Superá tus límites con nosotros!
      </h2>
      <button
        style={{ fontFamily: "Bebas Neue, sans-serif" }}
        className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full text-white font-normal text-lg"
      >
        <ScrollLink to="contacto">Inscríbete ahora</ScrollLink>
      </button>
    </motion.div>
  </div>
);
