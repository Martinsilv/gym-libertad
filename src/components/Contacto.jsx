import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const Contacto = () => {
  const [formData, setFormData] = useState({
    name: "",

    service: "",
    message: "",
  });

  const whatsappNumber = "5493794286202"; // REEMPLAZA CON TU NÚMERO REAL

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que los campos requeridos estén llenos
    if (!formData.name || !formData.phone) {
      toast.error("Por favor, completa al menos tu nombre y teléfono");
      return;
    }

    // Crear el mensaje para WhatsApp
    let message = `¡Hola! Me contacto desde el sitio web del gimnasio.

📝 *Datos de contacto:*
• Nombre: ${formData.name}
• Teléfono: ${formData.phone}`;

    // Agregar servicio si se seleccionó
    if (formData.service) {
      const serviceNames = {
        musculacion: "Musculación",
        funcional: "Funcional",
      };
      message += `\n• Servicio de interés: ${serviceNames[formData.service]}`;
    }

    // Agregar mensaje si hay
    if (formData.message) {
      message += `\n\n💬 *Mensaje:*\n${formData.message}`;
    }

    message += `\n\n¡Espero tu respuesta!`;

    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);

    // Detectar si es dispositivo móvil
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    // Crear el link de WhatsApp según el dispositivo
    const whatsappUrl = isMobile
      ? `https://wa.me/${whatsappNumber}?text=${encodedMessage}` // Móvil: App nativa
      : `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`; // Desktop: WhatsApp Web

    // Debug: mostrar la URL y dispositivo
    console.log("Dispositivo móvil:", isMobile);
    console.log("URL de WhatsApp:", whatsappUrl);
    console.log("Número:", whatsappNumber);

    // Abrir WhatsApp
    window.open(whatsappUrl, "_blank");

    // Mostrar toast de éxito
    toast.success("¡Mensaje enviado! Te redirigimos a WhatsApp");

    // Limpiar formulario
    setFormData({
      name: "",

      service: "",
      message: "",
    });
  };

  return (
    <section className="py-12  px-4 md:px-20">
      <h3
        id="contacto"
        style={{ fontFamily: "Bebas Neue, sans-serif" }}
        className="text-4xl  text-center mb-6"
      >
        Contáctanos
      </h3>
      <div className="max-w-xl mx-auto flex flex-col gap-4">
        <input
          className="p-3 rounded bg-zinc-700 text-white placeholder-gray-400"
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleInputChange}
        />

        <select
          name="service"
          id="service"
          className="p-3 rounded bg-zinc-700 text-white"
          value={formData.service}
          onChange={handleInputChange}
        >
          <option value="" disabled className="text-gray-400">
            Selecciona un servicio en el que estas interesado
          </option>
          <option value="musculacion">Musculación</option>
          <option value="funcional">Funcional</option>
        </select>
        <textarea
          className="p-3 rounded bg-zinc-700 text-white placeholder-gray-400"
          name="message"
          placeholder="Mensaje o día que querés venir"
          value={formData.message}
          onChange={handleInputChange}
        />
        <button
          className="bg-red-600 hover:bg-red-700 py-2 rounded text-white font-semibold transition-colors"
          onClick={handleSubmit}
        >
          Enviar
        </button>
      </div>
      <Toaster />
    </section>
  );
};
