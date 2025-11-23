import { Target } from "lucide-react";

import type { TopicContent } from "./types";

export const modelosRutherfordBohrTopic: TopicContent = {
  id: "modelos-rutherford-bohr",
  nombre: "Modelos de Rutherford y Bohr",
  resumen:
    "Explora los modelos atómicos de Rutherford y Bohr, el descubrimiento del núcleo atómico, y cómo los electrones se organizan en niveles de energía según órbitas permitidas.",
  progreso: 0,
  color: "from-indigo-500 via-blue-500 to-cyan-500",
  icono: Target,
  contexto: {
    etiqueta: "EXPLORAMOS",
    titulo: "La estructura del átomo revelada",
    icono: Target,
    parrafos: [
      "Los inicios del siglo XX fueron épocas de efervescencia científica. En pocas décadas, se descubrió que los átomos no eran indivisibles, sino que estaban formados por varios tipos de partículas diferentes en masa y propiedades.",
      "A principios del siglo XX, Ernest Rutherford continuó con el estudio del átomo y optó por el bombardeo de átomos con radiaciones penetrantes para averiguar qué había en su interior. Sometió láminas muy delgadas de oro a la acción de rayos alfa.",
      "Posteriores experimentos permitieron a Rutherford descubrir el protón, una partícula que tiene la misma carga que el electrón, pero positiva. Además, su masa es unas 1840 veces mayor que la del electrón.",
      "En 1931, James Chadwick descubrió que en los átomos había una tercera partícula que no tenía carga eléctrica, pero cuya masa era similar a la del protón. La llamó neutrón.",
      "En 1913, Niels Bohr perfeccionó el modelo de Rutherford, proponiendo que los electrones giran alrededor del núcleo solamente en determinadas órbitas circulares 'permitidas', donde no pierden energía.",
    ],
    reflexiones: [
      "¿Por qué fue importante el experimento de Rutherford con la lámina de oro?",
      "¿Qué diferencias hay entre el modelo de Rutherford y el de Bohr?",
      "¿Cómo explica el modelo de Bohr que los electrones no caen hacia el núcleo?",
    ],
  },
  subtemas: [
    "Modelo atómico de Rutherford",
    "Experimento de la lámina de oro",
    "Descubrimiento del núcleo atómico",
    "Descubrimiento del protón",
    "Descubrimiento del neutrón",
    "Modelo atómico de Bohr",
    "Órbitas permitidas",
    "Niveles de energía",
    "Postulados de Bohr",
  ],
  recursos: [
    "Experimento de Rutherford",
    "Modelo planetario del átomo",
    "Niveles de energía electrónicos",
  ],
  comic: {
    titulo: "Modelos de Rutherford y Bohr",
    personaje: "Dr. Núcleo",
    paneles: [
      {
        personaje: "🎯",
        texto:
          "¡Hola! Soy el Dr. Núcleo. A principios del siglo XX, Ernest Rutherford bombardeó láminas de oro con rayos alfa para descubrir qué había dentro del átomo.",
        fondo: "from-indigo-600 to-blue-600",
        challenge: {
          pregunta: "¿Qué usó Rutherford para bombardear las láminas de oro?",
          opciones: ["Rayos X", "Rayos alfa (núcleos de helio)", "Electrones"],
          respuesta: "Rayos alfa (núcleos de helio)",
          explicacion: "Rutherford usó rayos alfa, que son núcleos de helio con carga positiva.",
        },
      },
      {
        personaje: "🔬",
        texto:
          "Rutherford observó algo sorprendente: la mayoría de las partículas alfa atravesaban la lámina, algunas se desviaban y muy pocas rebotaban. ¡Esto reveló que el átomo tenía un núcleo pequeño!",
        fondo: "from-blue-600 to-cyan-600",
        challenge: {
          pregunta: "¿Qué dedujo Rutherford al ver que la mayoría de partículas alfa atravesaban la lámina?",
          opciones: ["Que el átomo era sólido", "Que la mayor parte del átomo es espacio vacío", "Que no había nada dentro"],
          respuesta: "Que la mayor parte del átomo es espacio vacío",
          explicacion: "Si la mayoría atravesaba, significa que el átomo es mayormente espacio vacío.",
        },
      },
      {
        personaje: "⚛️",
        texto:
          "Rutherford dedujo que había un núcleo muy pequeño con carga positiva que rechazaba las partículas alfa. Alrededor del núcleo giran los electrones, pero están muy alejados de él.",
        fondo: "from-cyan-600 to-teal-600",
        challenge: {
          pregunta: "¿Qué características tiene el núcleo según el modelo de Rutherford?",
          opciones: ["Es grande y ocupa todo el átomo", "Es muy pequeño, con carga positiva y concentra casi toda la masa", "No existe"],
          respuesta: "Es muy pequeño, con carga positiva y concentra casi toda la masa",
          explicacion: "El núcleo es diminuto pero contiene casi toda la masa del átomo.",
        },
      },
      {
        personaje: "➕",
        texto:
          "Rutherford descubrió el protón: una partícula con carga positiva igual a la del electrón, pero con masa 1840 veces mayor. Los protones están en el núcleo.",
        fondo: "from-teal-600 to-green-600",
        challenge: {
          pregunta: "¿Qué características tiene el protón?",
          opciones: ["Carga negativa y masa pequeña", "Carga positiva y masa 1840 veces mayor que el electrón", "Sin carga y masa grande"],
          respuesta: "Carga positiva y masa 1840 veces mayor que el electrón",
          explicacion: "El protón tiene carga positiva y es mucho más pesado que el electrón.",
        },
      },
      {
        personaje: "⚪",
        texto:
          "En 1931, James Chadwick descubrió el neutrón: una partícula sin carga eléctrica pero con masa similar al protón. Los neutrones también están en el núcleo.",
        fondo: "from-green-600 to-emerald-600",
        challenge: {
          pregunta: "¿Qué descubrió James Chadwick en 1931?",
          opciones: ["El protón", "El neutrón", "El electrón"],
          respuesta: "El neutrón",
          explicacion: "Chadwick descubrió el neutrón, partícula sin carga pero con masa similar al protón.",
        },
      },
      {
        personaje: "🌌",
        texto:
          "En 1913, Niels Bohr perfeccionó el modelo de Rutherford. Propuso que los electrones giran en órbitas circulares 'permitidas' donde no pierden energía, como planetas alrededor del Sol.",
        fondo: "from-emerald-600 to-yellow-500",
        challenge: {
          pregunta: "¿Qué propuso Bohr sobre las órbitas de los electrones?",
          opciones: ["Pueden estar a cualquier distancia", "Solo giran en órbitas permitidas donde no pierden energía", "No giran, están quietos"],
          respuesta: "Solo giran en órbitas permitidas donde no pierden energía",
          explicacion: "Bohr propuso que los electrones solo pueden estar en ciertas órbitas permitidas.",
        },
      },
      {
        personaje: "⚡",
        texto:
          "En el modelo de Bohr, los electrones se organizan en niveles de energía. Cada nivel tiene una energía determinada. Mientras el electrón no cambie de órbita, su energía no varía.",
        fondo: "from-yellow-500 to-orange-500",
        challenge: {
          pregunta: "¿Qué son los niveles de energía en el modelo de Bohr?",
          opciones: ["Distancias aleatorias", "Órbitas permitidas donde cada electrón tiene una energía determinada", "Solo el núcleo"],
          respuesta: "Órbitas permitidas donde cada electrón tiene una energía determinada",
          explicacion: "Cada nivel de energía corresponde a una órbita permitida con energía específica.",
        },
      },
      {
        personaje: "📈",
        texto:
          "Cuando un electrón absorbe energía, se excita y salta a una órbita superior (mayor energía). Cuando emite energía, regresa a una órbita inferior (menor energía).",
        fondo: "from-orange-500 to-red-500",
        challenge: {
          pregunta: "¿Qué ocurre cuando un electrón absorbe energía?",
          opciones: ["Se acerca al núcleo", "Salta a una órbita superior de mayor energía", "Se detiene"],
          respuesta: "Salta a una órbita superior de mayor energía",
          explicacion: "Al absorber energía, el electrón se excita y pasa a un nivel de mayor energía.",
        },
      },
      {
        personaje: "🔄",
        texto:
          "La principal diferencia: en Rutherford, los electrones pueden estar a cualquier distancia. En Bohr, solo en órbitas permitidas con energía fija. ¡Esto explica por qué no caen al núcleo!",
        fondo: "from-red-500 to-pink-500",
        challenge: {
          pregunta: "¿Cuál es la principal diferencia entre los modelos de Rutherford y Bohr?",
          opciones: ["No hay diferencia", "Rutherford: órbitas a cualquier distancia. Bohr: solo órbitas permitidas", "Bohr no creía en órbitas"],
          respuesta: "Rutherford: órbitas a cualquier distancia. Bohr: solo órbitas permitidas",
          explicacion: "Bohr limitó las órbitas a niveles permitidos, mientras Rutherford permitía cualquier distancia.",
        },
      },
      {
        personaje: "🌟",
        texto:
          "El modelo de Bohr explicó por qué los electrones no caen al núcleo: giran en órbitas estables donde no pierden energía. ¡Fue un gran avance en la comprensión del átomo!",
        fondo: "from-pink-500 to-purple-500",
        challenge: {
          pregunta: "¿Por qué los electrones no caen al núcleo según Bohr?",
          opciones: ["Porque no hay atracción", "Porque giran en órbitas estables donde no pierden energía", "Porque están muy lejos"],
          respuesta: "Porque giran en órbitas estables donde no pierden energía",
          explicacion: "En las órbitas permitidas, los electrones mantienen energía constante y no caen.",
        },
      },
    ],
  },
  laboratorio: {
    titulo: "Laboratorio de Rutherford y Bohr",
    introduccion:
      "Domina los modelos atómicos de Rutherford y Bohr, comprende el experimento de la lámina de oro, y analiza cómo los electrones se organizan en niveles de energía.",
    consejos: [
      "Recuerda: Rutherford descubrió el núcleo bombardeando oro con rayos alfa.",
      "El núcleo es muy pequeño pero concentra casi toda la masa del átomo.",
      "Bohr propuso que los electrones solo pueden estar en órbitas permitidas.",
      "Cada nivel de energía corresponde a una órbita permitida.",
      "Los electrones pueden saltar entre niveles absorbiendo o emitiendo energía.",
    ],
    ejercicios: [
      {
        id: 1,
        subtema: "Experimento de Rutherford",
        descripcion: "Comprende el experimento de la lámina de oro",
        dificultad: "Básico",
        pregunta: "¿Qué observó Rutherford al bombardear láminas de oro con rayos alfa?",
        respuestaCorrecta: "La mayoría atravesaba, algunas se desviaban y pocas rebotaban",
        pistas: "Rutherford observó tres comportamientos diferentes de las partículas alfa.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 2,
        subtema: "Núcleo atómico",
        descripcion: "Identifica las características del núcleo",
        dificultad: "Básico",
        pregunta: "¿Qué características tiene el núcleo según el modelo de Rutherford?",
        respuestaCorrecta: "Muy pequeño, con carga positiva y concentra casi toda la masa",
        pistas: "El núcleo es diminuto pero contiene la mayor parte de la masa del átomo.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 3,
        subtema: "Protón",
        descripcion: "Comprende el descubrimiento del protón",
        dificultad: "Intermedio",
        pregunta: "¿Qué características tiene el protón descubierto por Rutherford?",
        respuestaCorrecta: "Carga positiva y masa 1840 veces mayor que el electrón",
        pistas: "El protón tiene carga opuesta al electrón pero es mucho más pesado.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 4,
        subtema: "Neutrón",
        descripcion: "Identifica el descubrimiento del neutrón",
        dificultad: "Intermedio",
        pregunta: "¿Qué descubrió James Chadwick en 1931 y qué características tiene?",
        respuestaCorrecta: "El neutrón: sin carga eléctrica pero con masa similar al protón",
        pistas: "Chadwick descubrió una partícula neutra pero con masa considerable.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 5,
        subtema: "Modelo de Bohr",
        descripcion: "Comprende los postulados de Bohr",
        dificultad: "Intermedio",
        pregunta: "¿Qué propuso Bohr sobre las órbitas de los electrones?",
        respuestaCorrecta: "Que solo giran en órbitas permitidas donde no pierden energía",
        pistas: "Bohr limitó las órbitas a ciertos niveles permitidos con energía fija.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 6,
        subtema: "Niveles de energía",
        descripcion: "Analiza los niveles de energía",
        dificultad: "Intermedio",
        pregunta: "¿Qué son los niveles de energía en el modelo de Bohr?",
        respuestaCorrecta: "Órbitas permitidas donde cada electrón tiene una energía determinada",
        pistas: "Cada nivel corresponde a una órbita permitida con energía específica.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 7,
        subtema: "Transiciones electrónicas",
        descripcion: "Comprende los saltos de energía",
        dificultad: "Avanzado",
        pregunta: "¿Qué ocurre cuando un electrón absorbe o emite energía?",
        respuestaCorrecta: "Al absorber energía salta a una órbita superior, al emitir regresa a una inferior",
        pistas: "Los electrones pueden cambiar de nivel absorbiendo o emitiendo energía.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 8,
        subtema: "Diferencias entre modelos",
        descripcion: "Compara Rutherford y Bohr",
        dificultad: "Avanzado",
        pregunta: "¿Cuál es la principal diferencia entre los modelos de Rutherford y Bohr?",
        respuestaCorrecta: "Rutherford permite órbitas a cualquier distancia, Bohr solo órbitas permitidas",
        pistas: "Bohr limitó las órbitas a niveles específicos, mientras Rutherford permitía cualquier distancia.",
        placeholder: "Escribe tu respuesta...",
      },
    ],
  },
};

