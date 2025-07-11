import { useState } from "react";
import { Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import galeria1 from "../assets/1.jpg";
import galeria2 from "../assets/2.jpg";
import galeria3 from "../assets/3.jpg";
import galeria4 from "../assets/4.jpg";
const instagramUrl =
  "https://www.instagram.com/gimnasio_libertad?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

export const Galeria = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array de imágenes - puedes agregar más aquí
  const images = [
    galeria1,
    galeria2,
    galeria3,
    galeria4,
    // Puedes agregar más imágenes aquí
  ];

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };
  const handleInstagramClick = () => {
    window.open(instagramUrl, "_blank");
  };
  return (
    <section className="py-12 px-4 md:px-20">
      <h3
        style={{ fontFamily: "Bebas Neue, sans-serif" }}
        className="text-4xl  text-center mb-6"
      >
        Galería
      </h3>

      {/* Grid de imágenes original */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mb-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-xl"
            onClick={() => openModal(index)}
          >
            <img
              src={image}
              alt={`Galería ${index + 1}`}
              className="rounded-xl object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
        ))}
      </div>

      {/* Botón Ver Fotos */}
      <div className="text-center">
        <button
          onClick={() => openModal(0)}
          className="inline-flex items-center px-6 py-3 bg-red-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <Eye className="w-5 h-5 mr-2" />
          Ver Fotos
        </button>
      </div>
      <div className="flex justify-center  pt-26">
        <div
          onClick={handleInstagramClick}
          className="bg-zinc-800 hover:bg-zinc-700 rounded-lg p-4 cursor-pointer transition-colors duration-200 flex items-center gap-3"
        >
          <svg
            className="w-6 h-6 text-pink-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          <span className="text-white font-medium">
            Seguinos en nuestras redes
          </span>
        </div>
      </div>

      {/* Modal del Carrusel */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="relative max-w-4xl max-h-full w-full">
            {/* Botón Cerrar */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Imagen Principal */}
            <div className="relative">
              <img
                src={images[currentImageIndex]}
                alt={`Galería ${currentImageIndex + 1}`}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />

              {/* Botones de navegación */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="flex justify-center mt-4 space-x-2 overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToImage(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImageIndex
                      ? "border-orange-500 opacity-100"
                      : "border-transparent opacity-60 hover:opacity-80"
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Contador */}
            <div className="text-center mt-4 text-white">
              <span className="text-sm">
                {currentImageIndex + 1} de {images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
