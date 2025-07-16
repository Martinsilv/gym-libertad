import { Clock, Calendar, Dumbbell, Zap, Target } from "lucide-react";
import { ScrollLink } from "../components/ScrollLink";
export const Horarios = () => {
  const activities = [
    {
      name: "Musculación",
      icon: <Dumbbell className="w-6 h-6" />,
      days: "Lunes a Viernes",
      time: "08:00 - 22:00",
      color: "from-red-400 to-orange-500",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
    },
    {
      name: "Funcional por la mañana",
      icon: <Zap className="w-6 h-6" />,
      days: "Lunes a Viernes",
      time: "08:00 - 09:00 / 09:00 - 10:00 ",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      name: "Funcional por la tarde/noche",
      icon: <Zap className="w-6 h-6" />,
      days: "Lunes a Viernes",
      time: "16:00 - 17:00 / 17:00 - 18:00 / 19:00 - 20:00 / 20:00 - 21:00 / 21:00 - 22:00",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
    },
  ];

  return (
    <section className="py-12 px-4 md:py-16 md:px-8 lg:px-20 bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div
            id="horarios"
            className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4"
          >
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h2
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
            className="text-2xl md:text-4xl  text-gray-800 mb-2"
          >
            Horarios y Actividades
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestras actividades y encuentra el horario perfecto para
            tu rutina de entrenamiento
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`h-2 bg-gradient-to-r ${activity.color}`}></div>
              <div className="p-6">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${activity.bgColor} mb-4`}
                >
                  <div className={activity.textColor}>{activity.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {activity.name}
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{activity.days}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{activity.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-8 md:mt-12 text-center">
          <div
            style={{ fontFamily: "Bebas Neue, sans-serif" }}
            className="inline-flex items-center justify-center px-6 py-3 text-lg bg-zinc-800 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Clock className="w-5 h-5 mr-2" />
            <ScrollLink to="contacto">
              ¿Dudas sobre los horarios? ¡Consúltanos!
            </ScrollLink>
          </div>
        </div>
      </div>
    </section>
  );
};
