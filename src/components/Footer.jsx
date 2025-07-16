import { Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  const phoneNumber = "5493794286202";
  const instagramUrl =
    "https://www.instagram.com/gimnasio_libertad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

  return (
    <footer className="bg-zinc-950 text-gray-300 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3
              className="text-2xl  text-white mb-1"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              Gimnasio Libertad
            </h3>
            <p
              className="text-sm text-gray-400"
              style={{ fontFamily: "Bebas Neue, sans-serif" }}
            >
              Tu entrenamiento, nuestra pasión
            </p>
          </div>

          {/* Contacto */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors duration-200"
            >
              <MessageCircle size={16} />
              <span className="text-sm">WhatsApp</span>
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-pink-400 transition-colors duration-200"
            >
              <Instagram size={16} />
              <span className="text-sm">@gimnasio_libertad</span>
            </a>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-700 mt-6 pt-4">
          <p className="text-center text-xs text-gray-500">
            © 2025 Gimnasio Libertad. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
