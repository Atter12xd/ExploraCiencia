import { Atom } from "lucide-react";

import type { TopicContent } from "./types";

export const elAtomoTopic: TopicContent = {
  id: "el-atomo",
  nombre: "El Átomo",
  resumen:
    "Explora la estructura básica del átomo, los modelos atómicos históricos, el número atómico, número másico, isótopos y la organización de los electrones según el modelo actual.",
  progreso: 0,
  color: "from-violet-500 via-purple-500 to-fuchsia-500",
  icono: Atom,
  contexto: {
    etiqueta: "LEEMOS",
    titulo: "Una visión íntima de la materia",
    icono: Atom,
    parrafos: [
      "Las enfermedades como el cáncer pueden ser tratadas de distintas maneras, por ejemplo, con quimioterapia o radioterapia. Isótopos radiactivos, como el tecnecio-99 y el yodo-131, son usados para diagnosticar enfermedades óseas y tratar cáncer de tiroides, respectivamente.",
      "En Carabayllo, Lima, contamos con la Central Nuclear Óscar Miró Quesada de la Guerra (Racso). Este centro nuclear de investigación ha contribuido a la producción científica e innovación tecnológica para la salud y el desarrollo del país por casi 30 años.",
      "El lugar tiene medidas de seguridad especiales, como celdas construidas con ladrillos de plomo de 50 y 100 mm de espesor, pinzas o telemanipuladores y visores de vidrio plomado. Para producir estos radioisótopos, primero se irradian las sustancias de interés por horas dentro del reactor y luego son sometidas a procesos de control de calidad físicos, químicos y biológicos.",
      "El electromagnetismo, la mecánica cuántica y la radiactividad han sido fundamentales para explicar el comportamiento de los átomos. Gracias a este conocimiento, podemos explicar fenómenos que ocurren en nuestra vida cotidiana y desarrollar aplicaciones médicas y tecnológicas.",
    ],
    reflexiones: [
      "¿Por qué es necesario proteger con ladrillos de plomo y visores plomados a los trabajadores del reactor nuclear?",
      "¿Qué ventajas para el desarrollo del Perú conlleva contar con nuestra propia planta nuclear?",
      "¿Qué aplicaciones comerciales tienen los radioisótopos y la irradiación de distintos productos?",
    ],
  },
  subtemas: [
    "Estructura básica del átomo",
    "Número atómico y número másico",
    "Isótopos y masa atómica",
    "Modelos atómicos históricos",
    "Modelo actual del átomo",
    "Organización de electrones",
    "Números cuánticos",
    "Radiactividad y radioisótopos",
  ],
  recursos: [
    "Central Nuclear Racso (Carabayllo, Lima)",
    "Aplicaciones médicas de radioisótopos",
    "Modelos atómicos interactivos",
  ],
  comic: {
    titulo: "El Átomo",
    personaje: "Dr. Átomo",
    paneles: [
      {
        personaje: "⚛️",
        texto:
          "¡Hola! Soy el Dr. Átomo. Todo lo que nos rodea está formado por átomos: partículas increíblemente pequeñas que son la base de toda la materia.",
        fondo: "from-violet-600 to-purple-600",
        challenge: {
          pregunta: "¿Qué son los átomos?",
          opciones: ["Partículas grandes visibles", "Partículas pequeñas que forman la materia", "Solo energía pura"],
          respuesta: "Partículas pequeñas que forman la materia",
          explicacion: "Los átomos son las unidades fundamentales que constituyen toda la materia.",
        },
      },
      {
        personaje: "🔬",
        texto:
          "El átomo tiene una estructura: un núcleo central con protones y neutrones, rodeado por electrones que giran en órbitas. ¡Es como un sistema solar en miniatura!",
        fondo: "from-purple-600 to-indigo-600",
        challenge: {
          pregunta: "¿Qué partículas se encuentran en el núcleo del átomo?",
          opciones: ["Electrones y protones", "Protones y neutrones", "Solo electrones"],
          respuesta: "Protones y neutrones",
          explicacion: "El núcleo contiene protones (carga positiva) y neutrones (sin carga).",
        },
      },
      {
        personaje: "📊",
        texto:
          "El número atómico (Z) indica cuántos protones tiene un átomo. El número másico (A) es la suma de protones y neutrones. ¡Estos números identifican cada elemento!",
        fondo: "from-indigo-600 to-blue-600",
        challenge: {
          pregunta: "¿Qué representa el número atómico (Z)?",
          opciones: ["La suma de protones y neutrones", "El número de protones en el núcleo", "El número de electrones"],
          respuesta: "El número de protones en el núcleo",
          explicacion: "El número atómico identifica al elemento y es igual al número de protones.",
        },
      },
      {
        personaje: "🔢",
        texto:
          "Los isótopos son átomos del mismo elemento que tienen diferente número de neutrones. Por ejemplo, el carbono-12 y carbono-14 son isótopos del carbono.",
        fondo: "from-blue-600 to-cyan-600",
        challenge: {
          pregunta: "¿Qué caracteriza a los isótopos de un mismo elemento?",
          opciones: ["Tienen diferente número de protones", "Tienen el mismo número atómico pero diferente número másico", "Son elementos completamente diferentes"],
          respuesta: "Tienen el mismo número atómico pero diferente número másico",
          explicacion: "Los isótopos comparten el mismo número de protones pero difieren en neutrones.",
        },
      },
      {
        personaje: "🧪",
        texto:
          "A lo largo de la historia, los científicos propusieron diferentes modelos atómicos: desde la esfera indivisible de Dalton hasta el modelo actual basado en la mecánica cuántica.",
        fondo: "from-cyan-600 to-teal-600",
        challenge: {
          pregunta: "¿Qué modelo atómico propuso que el átomo era una esfera indivisible?",
          opciones: ["Modelo de Bohr", "Modelo de Dalton", "Modelo mecánico cuántico"],
          respuesta: "Modelo de Dalton",
          explicacion: "Dalton propuso que los átomos eran esferas sólidas e indivisibles.",
        },
      },
      {
        personaje: "⚡",
        texto:
          "El modelo actual describe electrones en orbitales, regiones donde hay mayor probabilidad de encontrarlos. Los números cuánticos describen su ubicación y energía.",
        fondo: "from-teal-600 to-green-600",
        challenge: {
          pregunta: "¿Qué describe un orbital atómico?",
          opciones: ["La trayectoria exacta del electrón", "La región de mayor probabilidad de encontrar un electrón", "El núcleo del átomo"],
          respuesta: "La región de mayor probabilidad de encontrar un electrón",
          explicacion: "Los orbitales son regiones tridimensionales donde es probable encontrar electrones.",
        },
      },
      {
        personaje: "☢️",
        texto:
          "Algunos átomos son radiactivos: sus núcleos se desintegran espontáneamente emitiendo radiación. Los radioisótopos como el tecnecio-99 se usan en medicina para diagnósticos.",
        fondo: "from-green-600 to-emerald-600",
        challenge: {
          pregunta: "¿Qué son los radioisótopos?",
          opciones: ["Átomos estables que no emiten radiación", "Isótopos radiactivos que emiten radiación", "Solo protones aislados"],
          respuesta: "Isótopos radiactivos que emiten radiación",
          explicacion: "Los radioisótopos son isótopos inestables que se desintegran emitiendo radiación.",
        },
      },
      {
        personaje: "🏥",
        texto:
          "En la Central Nuclear Racso de Carabayllo, se producen radioisótopos para tratar cáncer. Se usan medidas de seguridad como ladrillos de plomo para proteger de la radiación.",
        fondo: "from-emerald-600 to-yellow-500",
        challenge: {
          pregunta: "¿Por qué se usan ladrillos de plomo en instalaciones nucleares?",
          opciones: ["Porque son más baratos", "Para proteger de la radiación", "Solo por estética"],
          respuesta: "Para proteger de la radiación",
          explicacion: "El plomo es un material denso que bloquea eficazmente la radiación nuclear.",
        },
      },
      {
        personaje: "🔋",
        texto:
          "Los números cuánticos describen la ubicación y energía de los electrones: n (nivel), l (subnivel), m (orbital) y s (espín). ¡Cada electrón tiene una identidad única!",
        fondo: "from-yellow-500 to-orange-500",
        challenge: {
          pregunta: "¿Cuántos números cuánticos se necesitan para describir completamente un electrón?",
          opciones: ["Dos", "Tres", "Cuatro"],
          respuesta: "Cuatro",
          explicacion: "Se requieren cuatro números cuánticos: n, l, m y s para describir un electrón.",
        },
      },
      {
        personaje: "🌟",
        texto:
          "Comprender el átomo nos permite explicar desde reacciones químicas hasta aplicaciones médicas. ¡El conocimiento atómico transforma nuestra vida diaria!",
        fondo: "from-orange-500 to-red-500",
        challenge: {
          pregunta: "¿Por qué es importante estudiar la estructura del átomo?",
          opciones: ["Solo por curiosidad científica", "Para comprender reacciones químicas y desarrollar aplicaciones tecnológicas", "No tiene importancia práctica"],
          respuesta: "Para comprender reacciones químicas y desarrollar aplicaciones tecnológicas",
          explicacion: "El conocimiento atómico es fundamental para la química, medicina, tecnología y más.",
        },
      },
    ],
  },
  laboratorio: {
    titulo: "Laboratorio del Átomo",
    introduccion:
      "Domina los conceptos fundamentales del átomo: estructura, número atómico, número másico, isótopos y modelos atómicos mediante ejercicios interactivos.",
    consejos: [
      "Recuerda: número atómico (Z) = número de protones.",
      "Número másico (A) = protones + neutrones.",
      "Los isótopos tienen el mismo Z pero diferente A.",
      "El modelo actual describe electrones en orbitales, no en órbitas fijas.",
      "Los radioisótopos son útiles en medicina pero requieren medidas de seguridad.",
    ],
    ejercicios: [
      {
        id: 1,
        subtema: "Estructura del átomo",
        descripcion: "Identifica las partículas del átomo",
        dificultad: "Básico",
        pregunta: "¿Qué partículas se encuentran en el núcleo del átomo?",
        respuestaCorrecta: "Protones y neutrones",
        pistas: "El núcleo contiene partículas con masa, mientras que los electrones están fuera.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 2,
        subtema: "Número atómico",
        descripcion: "Comprende el número atómico",
        dificultad: "Básico",
        pregunta: "Si un átomo tiene 6 protones, ¿cuál es su número atómico?",
        respuestaCorrecta: "6",
        pistas: "El número atómico es igual al número de protones.",
        placeholder: "Escribe el número...",
      },
      {
        id: 3,
        subtema: "Número másico",
        descripcion: "Calcula el número másico",
        dificultad: "Intermedio",
        pregunta: "Un átomo tiene 8 protones y 8 neutrones. ¿Cuál es su número másico?",
        respuestaCorrecta: "16",
        pistas: "El número másico es la suma de protones y neutrones.",
        placeholder: "Escribe el número...",
      },
      {
        id: 4,
        subtema: "Isótopos",
        descripcion: "Identifica isótopos",
        dificultad: "Intermedio",
        pregunta: "¿Qué tienen en común los isótopos carbono-12 y carbono-14?",
        respuestaCorrecta: "El mismo número de protones",
        pistas: "Los isótopos son del mismo elemento, por lo tanto tienen el mismo número atómico.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 5,
        subtema: "Modelos atómicos",
        descripcion: "Reconoce modelos históricos",
        dificultad: "Intermedio",
        pregunta: "¿Qué científico propuso que el átomo tenía un núcleo central con electrones orbitando?",
        respuestaCorrecta: "Rutherford",
        pistas: "Este modelo se conoce como modelo planetario o nuclear.",
        placeholder: "Escribe el nombre del científico...",
      },
      {
        id: 6,
        subtema: "Orbitales",
        descripcion: "Comprende los orbitales atómicos",
        dificultad: "Avanzado",
        pregunta: "¿Qué describe un orbital atómico según el modelo mecánico cuántico?",
        respuestaCorrecta: "La región de mayor probabilidad de encontrar un electrón",
        pistas: "Los orbitales no son trayectorias fijas, sino regiones de probabilidad.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 7,
        subtema: "Radioisótopos",
        descripcion: "Aplica conocimientos sobre radiactividad",
        dificultad: "Intermedio",
        pregunta: "¿Qué es el tecnecio-99 y para qué se usa?",
        respuestaCorrecta: "Un radioisótopo usado para diagnosticar enfermedades óseas",
        pistas: "Se menciona en el contexto sobre aplicaciones médicas de radioisótopos.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 8,
        subtema: "Números cuánticos",
        descripcion: "Identifica números cuánticos",
        dificultad: "Avanzado",
        pregunta: "¿Cuántos números cuánticos se necesitan para describir completamente la ubicación y energía de un electrón?",
        respuestaCorrecta: "Cuatro",
        pistas: "Los números cuánticos son: n, l, m y s.",
        placeholder: "Escribe el número...",
      },
    ],
  },
};

