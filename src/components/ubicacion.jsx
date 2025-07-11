import { motion } from "framer-motion";

export const Ubicacion = () => {
  // Coordenadas de ejemplo - reemplaza con las reales
  const direccion = "Calle Ejemplo 123, frente a la Facultad de Derecho";
  const googleMapsUrl =
    "https://www.google.com/maps/place/Gimnasio+Libertad/@-27.4643886,-58.7809824,20.61z/data=!4m6!3m5!1s0x94456b26d525d453:0x9d9b0ff693ec67dd!8m2!3d-27.4642004!4d-58.7809181!16s%2Fg%2F11pcnyv6vd?entry=ttu&g_ep=EgoyMDI1MDcwOC4wIKXMDSoASAFQAw%3D%3D"; // Reemplaza con tus coordenadas

  const handleMapClick = () => {
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <section className="py-12 px-4 md:px-20">
      <div id="ubicacion" className="max-w-6xl mx-auto">
        <h3
          style={{ fontFamily: "Bebas Neue, sans-serif" }}
          className="text-4xl text-center mb-8"
        >
          Nuestra Ubicación
        </h3>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Información de ubicación */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-red-600 p-2 rounded-full flex-shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h4
                  style={{ fontFamily: "Bebas Neue, sans-serif" }}
                  className="text-xl mb-2"
                >
                  Nos encontrás en:
                </h4>
                <p className="text-gray-300 text-lg">{direccion}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-red-600 p-2 rounded-full flex-shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h4
                  style={{ fontFamily: "Bebas Neue, sans-serif" }}
                  className="text-xl  mb-2"
                >
                  Horarios:
                </h4>
                <p className="text-gray-300">
                  Lunes a Viernes: 8:00 - 22:00
                  <br />
                </p>
              </div>
            </div>

            <motion.button
              onClick={handleMapClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              Cómo llegar
            </motion.button>
          </div>

          {/* Mapa */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div
              onClick={handleMapClick}
              className="bg-zinc-800 rounded-xl overflow-hidden cursor-pointer group hover:shadow-lg transition-all duration-300"
            >
              {/* Iframe del mapa */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.164887390193!2d-58.78338779887333!3d-27.464125591010287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94456b26d525d453%3A0x9d9b0ff693ec67dd!2sGimnasio%20Libertad!5e0!3m2!1ses!2sar!4v1752197918767!5m2!1ses!2sar"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="pointer-events-none group-hover:pointer-events-auto transition-all duration-300"
                title="Ubicación del gimnasio"
              ></iframe>

              {/* Overlay para hacer click */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                <div className="bg-white bg-opacity-90 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <svg
                    className="w-6 h-6 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-400 text-sm mt-2">
              Hacé click en el mapa para abrir en Google Maps
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
