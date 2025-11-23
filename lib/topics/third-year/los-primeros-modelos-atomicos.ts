import { History } from "lucide-react";

import type { TopicContent } from "./types";

export const losPrimerosModelosAtomicosTopic: TopicContent = {
  id: "los-primeros-modelos-atomicos",
  nombre: "Los Primeros Modelos Atómicos",
  resumen:
    "Descubre cómo evolucionó nuestra comprensión del átomo desde las ideas filosóficas de Demócrito hasta los modelos experimentales de Dalton y Thomson.",
  progreso: 0,
  color: "from-amber-500 via-orange-500 to-red-500",
  icono: History,
  contexto: {
    etiqueta: "EXPLORAMOS",
    titulo: "La evolución del pensamiento atómico",
    icono: History,
    parrafos: [
      "Las investigaciones de físicos y químicos acerca de la composición de la materia nos muestran que hay poco más de un centenar de distintas sustancias simples o elementos que forman determinados tipos de átomos, las partículas más pequeñas de la materia.",
      "La mayor parte de la materia conocida está formada por sustancias compuestas. En ellas se encuentran átomos de dos o más clases, combinados siempre en proporciones exactas y fijas.",
      "Las sustancias simples, como hidrógeno, oxígeno, carbono, silicio, se pueden dividir en partes cada vez más pequeñas, hasta el momento en que la partícula no puede hacerse más pequeña sin perder sus propiedades características. A esta partícula la llamamos átomo.",
      "A lo largo de la historia, diferentes científicos propusieron modelos para explicar la estructura del átomo, desde las ideas filosóficas de Demócrito hasta los experimentos de Thomson que descubrieron los electrones.",
    ],
    reflexiones: [
      "¿Por qué fue importante que Dalton basara su teoría en resultados experimentales?",
      "¿Cómo cambió el modelo de Thomson nuestra comprensión del átomo?",
      "¿Qué importancia tienen los experimentos con tubos de descarga en el descubrimiento de los electrones?",
    ],
  },
  subtemas: [
    "De Demócrito a Dalton",
    "Modelo atómico de Dalton",
    "Teoría atómica de Dalton",
    "Modelo de Thomson",
    "Descubrimiento de los electrones",
    "Tubos de descarga",
    "Modelo del pudín con pasas",
  ],
  recursos: [
    "Historia de los modelos atómicos",
    "Experimentos de Thomson",
    "Teoría atómica de Dalton",
  ],
  comic: {
    titulo: "Los Primeros Modelos Atómicos",
    personaje: "Dr. Historia",
    paneles: [
      {
        personaje: "🏛️",
        texto:
          "¡Hola! Soy el Dr. Historia. Hace más de 2000 años, el filósofo griego Demócrito propuso que la materia estaba formada por partículas indivisibles llamadas átomos.",
        fondo: "from-amber-600 to-yellow-600",
        challenge: {
          pregunta: "¿Quién fue el primer filósofo en proponer la idea de los átomos?",
          opciones: ["Dalton", "Demócrito", "Thomson"],
          respuesta: "Demócrito",
          explicacion: "Demócrito de Abdera, en el siglo V a.C., fue el primero en plantear la idea de átomos.",
        },
      },
      {
        personaje: "🧠",
        texto:
          "Demócrito imaginó que había distintos tipos de átomos: redondos, lisos, irregulares y torcidos. Esta diversidad daba origen a diferentes tipos de materia.",
        fondo: "from-yellow-600 to-orange-600",
        challenge: {
          pregunta: "Según Demócrito, ¿qué caracterizaba a los diferentes tipos de átomos?",
          opciones: ["Solo su tamaño", "Sus formas y características (redondos, lisos, irregulares)", "Solo su color"],
          respuesta: "Sus formas y características (redondos, lisos, irregulares)",
          explicacion: "Demócrito postuló que la diversidad de formas de los átomos originaba diferentes tipos de materia.",
        },
      },
      {
        personaje: "🔬",
        texto:
          "Dos mil años después, el científico inglés John Dalton retomó la idea de los griegos. Se basó en resultados de laboratorio para inferir la existencia de los átomos, según él, indivisibles.",
        fondo: "from-orange-600 to-red-600",
        challenge: {
          pregunta: "¿Qué diferencia principal había entre las ideas de Demócrito y Dalton?",
          opciones: ["Ninguna diferencia", "Dalton se basó en experimentos de laboratorio", "Dalton no creía en los átomos"],
          respuesta: "Dalton se basó en experimentos de laboratorio",
          explicacion: "Dalton fue el primero en fundamentar la teoría atómica con evidencia experimental.",
        },
      },
      {
        personaje: "📋",
        texto:
          "La teoría atómica de Dalton establece: 1) La materia está formada por átomos indivisibles. 2) Los átomos de un mismo elemento son iguales. 3) Los compuestos se forman por combinaciones de átomos en proporciones constantes.",
        fondo: "from-red-600 to-pink-600",
        challenge: {
          pregunta: "Según Dalton, ¿cómo se forman los compuestos?",
          opciones: ["Por mezclas aleatorias", "Por combinaciones de átomos en proporciones constantes", "Por división de átomos"],
          respuesta: "Por combinaciones de átomos en proporciones constantes",
          explicacion: "Dalton propuso que los compuestos se forman cuando átomos de diferentes elementos se combinan en proporciones fijas.",
        },
      },
      {
        personaje: "⚡",
        texto:
          "En 1897, Joseph John Thomson realizó experimentos con tubos de descarga. Comprobó que en los átomos existen partículas con carga eléctrica negativa: los electrones.",
        fondo: "from-pink-600 to-purple-600",
        challenge: {
          pregunta: "¿Qué descubrió Thomson en sus experimentos con tubos de descarga?",
          opciones: ["Los protones", "Los electrones", "Los neutrones"],
          respuesta: "Los electrones",
          explicacion: "Thomson descubrió los electrones, partículas con carga negativa que parten del cátodo.",
        },
      },
      {
        personaje: "🧪",
        texto:
          "En los tubos de descarga, Thomson aplicó altos voltajes (30,000 voltios) entre un ánodo (positivo) y un cátodo (negativo). Los electrones viajaban del cátodo al ánodo en línea recta.",
        fondo: "from-purple-600 to-indigo-600",
        challenge: {
          pregunta: "En un tubo de descarga, ¿hacia dónde viajan los electrones?",
          opciones: ["Del ánodo al cátodo", "Del cátodo al ánodo", "En todas las direcciones"],
          respuesta: "Del cátodo al ánodo",
          explicacion: "Los electrones, con carga negativa, son atraídos por el ánodo positivo.",
        },
      },
      {
        personaje: "🍰",
        texto:
          "Thomson propuso el modelo del 'pudín con pasas': el átomo era una gran masa de carga positiva, con electrones insertados en ella, como pasas en un pudín.",
        fondo: "from-indigo-600 to-blue-600",
        challenge: {
          pregunta: "¿Cómo describía Thomson la estructura del átomo?",
          opciones: ["Como un sistema planetario", "Como un pudín con pasas (masa positiva con electrones insertados)", "Como esferas sólidas"],
          respuesta: "Como un pudín con pasas (masa positiva con electrones insertados)",
          explicacion: "Thomson imaginó el átomo como una esfera de carga positiva con electrones incrustados.",
        },
      },
      {
        personaje: "⚖️",
        texto:
          "En el modelo de Thomson, la carga negativa de los electrones compensaba la carga positiva, para que el átomo fuera eléctricamente neutro. ¡Un átomo neutro!",
        fondo: "from-blue-600 to-cyan-600",
        challenge: {
          pregunta: "¿Por qué el átomo en el modelo de Thomson es eléctricamente neutro?",
          opciones: ["Porque no tiene carga", "Porque las cargas negativas de los electrones compensan la carga positiva", "Porque solo tiene electrones"],
          respuesta: "Porque las cargas negativas de los electrones compensan la carga positiva",
          explicacion: "El átomo es neutro porque las cargas positivas y negativas se equilibran.",
        },
      },
      {
        personaje: "🔍",
        texto:
          "Los electrones pueden ser desviados por campos magnéticos y eléctricos. Esto demostró que tenían carga y masa, aunque muy pequeña comparada con el átomo completo.",
        fondo: "from-cyan-600 to-teal-600",
        challenge: {
          pregunta: "¿Qué demostró que los electrones pueden ser desviados por campos magnéticos?",
          opciones: ["Que no tienen carga", "Que tienen carga eléctrica y masa", "Que son partículas muy grandes"],
          respuesta: "Que tienen carga eléctrica y masa",
          explicacion: "La desviación por campos magnéticos y eléctricos prueba que los electrones tienen carga y masa.",
        },
      },
      {
        personaje: "🎯",
        texto:
          "Los modelos de Dalton y Thomson fueron fundamentales para entender el átomo. Aunque hoy sabemos que no son completamente correctos, abrieron el camino a modelos más precisos.",
        fondo: "from-teal-600 to-green-600",
        challenge: {
          pregunta: "¿Por qué son importantes los modelos de Dalton y Thomson aunque no sean completamente correctos?",
          opciones: ["Porque son perfectos", "Porque abrieron el camino a modelos más precisos", "Porque no tienen importancia"],
          respuesta: "Porque abrieron el camino a modelos más precisos",
          explicacion: "Estos modelos históricos fueron fundamentales para el desarrollo de la teoría atómica moderna.",
        },
      },
    ],
  },
  laboratorio: {
    titulo: "Laboratorio de Modelos Atómicos",
    introduccion:
      "Domina los conceptos fundamentales de los primeros modelos atómicos: desde las ideas filosóficas hasta los experimentos que llevaron al descubrimiento de los electrones.",
    consejos: [
      "Recuerda: Demócrito propuso la idea filosófica, Dalton la fundamentó experimentalmente.",
      "El modelo de Dalton describe átomos indivisibles e indestructibles.",
      "Thomson descubrió los electrones usando tubos de descarga.",
      "El modelo de Thomson es conocido como 'pudín con pasas'.",
      "Los electrones tienen carga negativa y pueden ser desviados por campos magnéticos.",
    ],
    ejercicios: [
      {
        id: 1,
        subtema: "Demócrito",
        descripcion: "Comprende las ideas de Demócrito",
        dificultad: "Básico",
        pregunta: "¿En qué siglo vivió Demócrito y qué propuso sobre la materia?",
        respuestaCorrecta: "Siglo V a.C., propuso que la materia estaba formada por átomos",
        pistas: "Fue un filósofo griego que vivió hace más de 2000 años.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 2,
        subtema: "Modelo de Dalton",
        descripcion: "Identifica los postulados de Dalton",
        dificultad: "Básico",
        pregunta: "Según la teoría atómica de Dalton, ¿cómo son los átomos de un mismo elemento?",
        respuestaCorrecta: "Iguales en masa, tamaño y características",
        pistas: "Dalton propuso que todos los átomos de un mismo elemento son idénticos.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 3,
        subtema: "Teoría atómica",
        descripcion: "Aplica los postulados de Dalton",
        dificultad: "Intermedio",
        pregunta: "¿Qué establece la teoría atómica de Dalton sobre la formación de compuestos?",
        respuestaCorrecta: "Se forman por combinaciones de átomos en proporciones constantes",
        pistas: "Los compuestos tienen composición definida según Dalton.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 4,
        subtema: "Descubrimiento de electrones",
        descripcion: "Comprende los experimentos de Thomson",
        dificultad: "Intermedio",
        pregunta: "¿Qué partícula descubrió Thomson en 1897 usando tubos de descarga?",
        respuestaCorrecta: "Los electrones",
        pistas: "Son partículas con carga eléctrica negativa que parten del cátodo.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 5,
        subtema: "Tubos de descarga",
        descripcion: "Analiza los experimentos con tubos de descarga",
        dificultad: "Intermedio",
        pregunta: "En un tubo de descarga, ¿hacia dónde viajan los electrones y por qué?",
        respuestaCorrecta: "Del cátodo al ánodo porque son atraídos por la carga positiva",
        pistas: "Los electrones tienen carga negativa y son atraídos por el polo positivo.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 6,
        subtema: "Modelo de Thomson",
        descripcion: "Describe el modelo del pudín con pasas",
        dificultad: "Intermedio",
        pregunta: "¿Cómo describía Thomson la estructura del átomo en su modelo?",
        respuestaCorrecta: "Como una gran masa de carga positiva con electrones insertados",
        pistas: "Este modelo es conocido como 'pudín con pasas'.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 7,
        subtema: "Carga eléctrica",
        descripcion: "Comprende la neutralidad del átomo",
        dificultad: "Intermedio",
        pregunta: "¿Por qué el átomo en el modelo de Thomson es eléctricamente neutro?",
        respuestaCorrecta: "Porque las cargas negativas de los electrones compensan la carga positiva",
        pistas: "El átomo tiene igual cantidad de cargas positivas y negativas.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 8,
        subtema: "Campos magnéticos",
        descripcion: "Analiza el comportamiento de los electrones",
        dificultad: "Avanzado",
        pregunta: "¿Qué demostró que los electrones pueden ser desviados por campos magnéticos y eléctricos?",
        respuestaCorrecta: "Que tienen carga eléctrica y masa",
        pistas: "La desviación de partículas por campos prueba que tienen propiedades físicas específicas.",
        placeholder: "Escribe tu respuesta...",
      },
    ],
  },
};

