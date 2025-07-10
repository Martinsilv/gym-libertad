import { useState } from "react";
import { Eye, X, ChevronLeft, ChevronRight } from "lucide-react";
import galeria1 from "../assets/1.jpg";
import galeria2 from "../assets/2.jpg";
import galeria3 from "../assets/3.jpg";
import galeria4 from "../assets/4.jpg";

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

  return (
    <section className="py-12 px-4 md:px-20">
      <h3 className="text-3xl font-bold text-center mb-6">Galería</h3>

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
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <Eye className="w-5 h-5 mr-2" />
          Ver Fotos
        </button>
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
