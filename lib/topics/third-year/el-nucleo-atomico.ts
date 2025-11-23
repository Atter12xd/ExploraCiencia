import { CircleDot } from "lucide-react";

import type { TopicContent } from "./types";

export const elNucleoAtomicoTopic: TopicContent = {
  id: "el-nucleo-atomico",
  nombre: "El Núcleo Atómico",
  resumen:
    "Explora la estructura del núcleo atómico, el número atómico, el número de masa, y cómo calcular la masa atómica y molecular de los elementos y compuestos.",
  progreso: 0,
  color: "from-sky-500 via-blue-500 to-indigo-500",
  icono: CircleDot,
  contexto: {
    etiqueta: "EXPLORAMOS",
    titulo: "El corazón del átomo",
    icono: CircleDot,
    parrafos: [
      "Todos los átomos presentan la misma estructura del núcleo y la corteza que acabamos de estudiar. Pero el número de partículas que forman los átomos de los elementos químicos son diferentes.",
      "El átomo es una estructura que tiene un núcleo muy pequeño en relación con el tamaño total del átomo. En el núcleo se encuentran los protones y los neutrones. Alrededor de este núcleo, se mueven los electrones a una distancia muy grande en comparación con el tamaño del átomo. Es decir, la mayor parte del átomo está vacía.",
      "Para representar un átomo, se utilizan un símbolo y dos números: el número atómico (Z) que indica la cantidad de protones, y el número de masa (A) que indica la suma de protones y neutrones.",
      "La masa de un átomo es similar a la suma de las masas de los protones y los neutrones, ya que los electrones tienen masa despreciable. Se expresa en unidades de masa atómica (uma).",
    ],
    reflexiones: [
      "¿Por qué el número atómico determina a qué elemento pertenece un átomo?",
      "¿Cómo se relacionan el número atómico y el número de masa?",
      "¿Qué importancia tiene la masa atómica en la química?",
    ],
  },
  subtemas: [
    "Estructura del núcleo",
    "Número atómico (Z)",
    "Número de masa (A)",
    "Relación A = Z + n",
    "Masa atómica",
    "Masa atómica relativa",
    "Masa fórmula",
    "Quarks y partículas subatómicas",
  ],
  recursos: [
    "Núcleo atómico interactivo",
    "Cálculo de masa atómica",
    "Nanotecnología",
  ],
  comic: {
    titulo: "El Núcleo Atómico",
    personaje: "Dr. Núcleo",
    paneles: [
      {
        personaje: "⚛️",
        texto:
          "¡Hola! Soy el Dr. Núcleo. El átomo tiene un núcleo muy pequeño donde están los protones y neutrones. Alrededor giran los electrones. ¡La mayor parte del átomo está vacía!",
        fondo: "from-sky-600 to-blue-600",
        challenge: {
          pregunta: "¿Qué partículas se encuentran en el núcleo del átomo?",
          opciones: ["Solo electrones", "Protones y neutrones", "Solo protones"],
          respuesta: "Protones y neutrones",
          explicacion: "El núcleo contiene protones (carga positiva) y neutrones (sin carga).",
        },
      },
      {
        personaje: "🔢",
        texto:
          "El número atómico (Z) indica la cantidad de protones en el núcleo. En un átomo neutro, también es igual al número de electrones. ¡El número atómico determina el elemento!",
        fondo: "from-blue-600 to-indigo-600",
        challenge: {
          pregunta: "¿Qué indica el número atómico (Z)?",
          opciones: ["La cantidad de neutrones", "La cantidad de protones en el núcleo", "La masa total"],
          respuesta: "La cantidad de protones en el núcleo",
          explicacion: "El número atómico Z indica cuántos protones tiene el átomo y determina a qué elemento pertenece.",
        },
      },
      {
        personaje: "⚖️",
        texto:
          "El número de masa (A) indica la suma de protones y neutrones en el núcleo. Se calcula con la fórmula: A = Z + n, donde n es el número de neutrones.",
        fondo: "from-indigo-600 to-purple-600",
        challenge: {
          pregunta: "¿Cómo se calcula el número de masa (A)?",
          opciones: ["A = Z - n", "A = Z + n", "A = Z × n"],
          respuesta: "A = Z + n",
          explicacion: "El número de masa es la suma del número atómico (protones) y el número de neutrones.",
        },
      },
      {
        personaje: "🧮",
        texto:
          "Si un átomo tiene Z = 6 (carbono) y n = 6 neutrones, entonces A = 6 + 6 = 12. ¡El número de masa del carbono-12 es 12!",
        fondo: "from-purple-600 to-pink-600",
        challenge: {
          pregunta: "Un átomo tiene 8 protones y 8 neutrones. ¿Cuál es su número de masa?",
          opciones: ["8", "16", "64"],
          respuesta: "16",
          explicacion: "A = Z + n = 8 + 8 = 16.",
        },
      },
      {
        personaje: "📊",
        texto:
          "La masa de un átomo es similar a la suma de las masas de protones y neutrones. Los electrones tienen masa despreciable. Se expresa en unidades de masa atómica (uma).",
        fondo: "from-pink-600 to-rose-600",
        challenge: {
          pregunta: "¿Por qué la masa del átomo es similar a la suma de protones y neutrones?",
          opciones: ["Porque los electrones no tienen masa", "Porque los electrones tienen masa despreciable", "Porque solo importan los protones"],
          respuesta: "Porque los electrones tienen masa despreciable",
          explicacion: "La masa de los electrones es mucho menor que la de protones y neutrones, por lo que se desprecia.",
        },
      },
      {
        personaje: "📏",
        texto:
          "La masa atómica relativa se calcula comparándola con el átomo de carbono-12, que tiene 12 uma. Una uma equivale a 1/12 de la masa del carbono-12.",
        fondo: "from-rose-600 to-red-600",
        challenge: {
          pregunta: "¿Cuál es la unidad patrón para la masa atómica relativa?",
          opciones: ["El hidrógeno", "El carbono-12", "El oxígeno"],
          respuesta: "El carbono-12",
          explicacion: "El átomo de carbono-12 con 12 uma es la unidad patrón para medir masas atómicas relativas.",
        },
      },
      {
        personaje: "🧪",
        texto:
          "La masa fórmula es la suma de las masas atómicas de los átomos en una fórmula química. Por ejemplo, H₂O: masa H (1 uma × 2) + masa O (16 uma × 1) = 18 uma.",
        fondo: "from-red-600 to-orange-600",
        challenge: {
          pregunta: "¿Cuál es la masa fórmula del CO₂? (C = 12 uma, O = 16 uma)",
          opciones: ["28 uma", "44 uma", "60 uma"],
          respuesta: "44 uma",
          explicacion: "Masa C (12 × 1) + masa O (16 × 2) = 12 + 32 = 44 uma.",
        },
      },
      {
        personaje: "🔬",
        texto:
          "En 1964 se descubrió que protones y neutrones están formados por quarks, partículas aún más pequeñas. Hay seis tipos: up, down, charm, strange, top y bottom.",
        fondo: "from-orange-600 to-amber-600",
        challenge: {
          pregunta: "¿De qué están formados los protones y neutrones?",
          opciones: ["De electrones", "De quarks", "De átomos"],
          respuesta: "De quarks",
          explicacion: "Los protones y neutrones están constituidos por quarks, partículas subatómicas más pequeñas.",
        },
      },
      {
        personaje: "💻",
        texto:
          "La nanotecnología manipula la materia a escala atómica. En medicina, chips nanométricos pueden ingresar al cuerpo para diagnósticos rápidos. ¡Las propiedades cambian a escala nanométrica!",
        fondo: "from-amber-600 to-yellow-500",
        challenge: {
          pregunta: "¿Qué es la nanotecnología?",
          opciones: ["Tecnología de grandes objetos", "Técnica de manipulación de la materia a escala atómica", "Solo computadoras"],
          respuesta: "Técnica de manipulación de la materia a escala atómica",
          explicacion: "La nanotecnología trabaja con materiales a escala nanométrica, donde las propiedades cambian.",
        },
      },
      {
        personaje: "🌟",
        texto:
          "Conocer el núcleo atómico nos permite entender desde la estructura básica de la materia hasta aplicaciones avanzadas como la nanotecnología. ¡El núcleo es el corazón del átomo!",
        fondo: "from-yellow-500 to-lime-500",
        challenge: {
          pregunta: "¿Por qué es importante estudiar el núcleo atómico?",
          opciones: ["Solo por curiosidad", "Para entender la estructura de la materia y desarrollar aplicaciones tecnológicas", "No tiene importancia"],
          respuesta: "Para entender la estructura de la materia y desarrollar aplicaciones tecnológicas",
          explicacion: "El conocimiento del núcleo es fundamental para la química, física y tecnologías como la nanotecnología.",
        },
      },
    ],
  },
  laboratorio: {
    titulo: "Laboratorio del Núcleo Atómico",
    introduccion:
      "Domina los conceptos del núcleo atómico: número atómico, número de masa, y aprende a calcular masas atómicas y moleculares mediante ejercicios interactivos.",
    consejos: [
      "Recuerda: Z = número de protones = número de electrones (en átomo neutro).",
      "A = Z + n, donde n es el número de neutrones.",
      "La masa del átomo es similar a la suma de masas de protones y neutrones.",
      "La unidad de masa atómica (uma) se basa en el carbono-12.",
      "Para calcular masa fórmula, suma las masas atómicas de todos los átomos en la fórmula.",
    ],
    ejercicios: [
      {
        id: 1,
        subtema: "Número atómico",
        descripcion: "Comprende el número atómico",
        dificultad: "Básico",
        pregunta: "¿Qué indica el número atómico (Z) y qué relación tiene con los electrones en un átomo neutro?",
        respuestaCorrecta: "Indica la cantidad de protones en el núcleo. En un átomo neutro, Z = número de protones = número de electrones",
        pistas: "El número atómico determina a qué elemento pertenece el átomo.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 2,
        subtema: "Número de masa",
        descripcion: "Calcula el número de masa",
        dificultad: "Básico",
        pregunta: "Un átomo tiene 17 protones y 18 neutrones. ¿Cuál es su número de masa (A)?",
        respuestaCorrecta: "35",
        pistas: "Usa la fórmula A = Z + n.",
        placeholder: "Escribe el número...",
      },
      {
        id: 3,
        subtema: "Cálculo de neutrones",
        descripcion: "Calcula el número de neutrones",
        dificultad: "Intermedio",
        pregunta: "Un átomo de hierro tiene Z = 26 y A = 56. ¿Cuántos neutrones tiene?",
        respuestaCorrecta: "30",
        pistas: "Despeja n de la fórmula A = Z + n.",
        placeholder: "Escribe el número...",
      },
      {
        id: 4,
        subtema: "Masa atómica",
        descripcion: "Comprende la masa atómica",
        dificultad: "Intermedio",
        pregunta: "¿Por qué la masa de un átomo es similar a la suma de las masas de protones y neutrones?",
        respuestaCorrecta: "Porque los electrones tienen masa despreciable comparada con protones y neutrones",
        pistas: "La masa de los electrones es mucho menor que la de las partículas del núcleo.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 5,
        subtema: "Masa atómica relativa",
        descripcion: "Comprende la masa atómica relativa",
        dificultad: "Intermedio",
        pregunta: "¿Cuál es la unidad patrón para la masa atómica relativa y cuánto vale?",
        respuestaCorrecta: "El átomo de carbono-12, que tiene 12 uma. Una uma equivale a 1/12 de la masa del carbono-12",
        pistas: "El carbono-12 es el estándar internacional para medir masas atómicas.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 6,
        subtema: "Masa fórmula",
        descripcion: "Calcula la masa fórmula",
        dificultad: "Intermedio",
        pregunta: "Calcula la masa fórmula del agua (H₂O). Masa H = 1 uma, masa O = 16 uma.",
        respuestaCorrecta: "18 uma",
        pistas: "Suma: (1 uma × 2) + (16 uma × 1) = 2 + 16 = 18 uma.",
        placeholder: "Escribe el número con unidad...",
      },
      {
        id: 7,
        subtema: "Quarks",
        descripcion: "Comprende las partículas subatómicas",
        dificultad: "Intermedio",
        pregunta: "¿De qué están formados los protones y neutrones?",
        respuestaCorrecta: "De quarks, partículas subatómicas más pequeñas",
        pistas: "Los quarks son las partículas fundamentales que forman protones y neutrones.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 8,
        subtema: "Aplicación completa",
        descripcion: "Aplica todos los conceptos",
        dificultad: "Avanzado",
        pregunta: "Un átomo tiene número atómico 19 y número de masa 39. Calcula: número de protones, electrones (en estado neutro) y neutrones.",
        respuestaCorrecta: "Protones: 19, Electrones: 19, Neutrones: 20",
        pistas: "Z = 19 (protones), en neutro electrones = protones, n = A - Z = 39 - 19 = 20.",
        placeholder: "Escribe tu respuesta...",
      },
    ],
  },
};

