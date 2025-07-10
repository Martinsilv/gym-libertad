import { Clock, Calendar, Dumbbell, Zap, Target } from "lucide-react";
import { ScrollLink } from "../components/ScrollLink";
export const Horarios = () => {
  const activities = [
    {
      name: "Musculación",
      icon: <Dumbbell className="w-6 h-6" />,
      days: "Lunes a Viernes",
      time: "8:00 - 22:00",
      color: "from-red-400 to-orange-500",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
    },
    {
      name: "Funcional",
      icon: <Zap className="w-6 h-6" />,
      days: "Lunes, Miércoles y Viernes",
      time: "18:00 - 19:00",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
    },
    {
      name: "Funcional",
      icon: <Target className="w-6 h-6" />,
      days: "Martes y Jueves",
      time: "19:00 - 20:00",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
    },
    {
      name: "Entrenamiento deportivo",
      icon: <Dumbbell className="w-6 h-6" />,
      days: "Sábados",
      time: "10:00 - 11:00",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
    },
  ];

  const weekDays = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const timeSlots = [
    "8:00",
    "10:00",
    "12:00",
    "14:00",
    "16:00",
    "18:00",
    "20:00",
    "22:00",
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

        {/* Weekly Schedule Table */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 md:p-6">
            <h3 className="text-xl md:text-2xl font-bold text-white flex items-center">
              <Clock className="w-6 h-6 mr-3" />
              Horario Semanal
            </h3>
          </div>

          {/* Mobile Schedule */}
          <div className="md:hidden">
            {weekDays.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className="border-b border-gray-200 last:border-b-0"
              >
                <div className="bg-gray-50 p-4 font-bold text-gray-800">
                  {day === "Lun" && "Lunes"}
                  {day === "Mar" && "Martes"}
                  {day === "Mié" && "Miércoles"}
                  {day === "Jue" && "Jueves"}
                  {day === "Vie" && "Viernes"}
                </div>
                <div className="p-4 space-y-2">
                  {day !== "Sáb" ? (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Musculación</span>
                      <span className="text-sm font-medium text-gray-800">
                        8:00 - 22:00
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between"></div>
                  )}
                  {(day === "Lun" || day === "Mié" || day === "Vie") && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Funcional</span>
                      <span className="text-sm font-medium text-gray-800">
                        18:00 - 19:00
                      </span>
                    </div>
                  )}
                  {(day === "Mar" || day === "Jue") && (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Funcional</span>
                      <span className="text-sm font-medium text-gray-800">
                        19:00 - 20:00
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Schedule */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 text-left font-bold text-gray-800">
                    Horario
                  </th>
                  {weekDays.map((day, index) => (
                    <th
                      key={index}
                      className="p-4 text-center font-bold text-gray-800"
                    >
                      {day === "Lun" && "Lunes"}
                      {day === "Mar" && "Martes"}
                      {day === "Mié" && "Miércoles"}
                      {day === "Jue" && "Jueves"}
                      {day === "Vie" && "Viernes"}
                      {day === "Sáb" && "Sábado"}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timeSlots.map((time, timeIndex) => (
                  <tr
                    key={timeIndex}
                    className="border-b border-gray-200 hover:bg-gray-50"
                  >
                    <td className="p-4 font-medium text-gray-700">{time}</td>
                    {weekDays.map((day, dayIndex) => (
                      <td key={dayIndex} className="p-4 text-center">
                        {day !== "Sáb" && (
                          <span className="inline-block px-3 py-1 bg-orange-200 text-orange-500  rounded-full text-sm font-medium">
                            Musculación
                          </span>
                        )}
                        {day === "Sáb" && time === "10:00" && (
                          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                            Yoga
                          </span>
                        )}
                        {(day === "Lun" || day === "Mié" || day === "Vie") &&
                          time === "18:00" && (
                            <div className="space-y-1">
                              <span className="block px-3 py-1 bg-orange-200 text-orange-500 rounded-full text-sm font-medium">
                                Musculación
                              </span>
                              <span className="block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                Funcional
                              </span>
                            </div>
                          )}
                        {(day === "Mar" || day === "Jue") &&
                          time === "19:00" && (
                            <div className="space-y-1">
                              <span className="block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                                Musculación
                              </span>
                              <span className="block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                                CrossFit
                              </span>
                            </div>
                          )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
