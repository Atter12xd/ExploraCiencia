import { Hash } from "lucide-react";

import type { TopicContent } from "./types";

export const losNumerosCuanticosTopic: TopicContent = {
  id: "los-numeros-cuanticos",
  nombre: "Los Números Cuánticos",
  resumen:
    "Aprende a describir la ubicación y propiedades de los electrones usando los cuatro números cuánticos: principal, secundario, magnético y espín.",
  progreso: 0,
  color: "from-slate-500 via-gray-500 to-zinc-500",
  icono: Hash,
  contexto: {
    etiqueta: "EXPLORAMOS",
    titulo: "La dirección de los electrones",
    icono: Hash,
    parrafos: [
      "La ciencia va evolucionando y experiencias posteriores llevaron a abandonar la idea de las órbitas estacionarias de Bohr, que se regían según las leyes de la mecánica clásica para establecer la mecánica cuántica.",
      "Gracias a la mecánica cuántica, se define el orbital como una zona del espacio donde la probabilidad de encontrar al electrón es máxima.",
      "Los números cuánticos de un electrón se emplean para describir matemáticamente un modelo tridimensional del átomo y, por lo tanto, pueden representarse gráficamente. Se necesitan cuatro números cuánticos: el principal, el secundario, el cuántico magnético y el espín.",
      "El número cuántico principal (n) indica el nivel de energía principal que el electrón ocupa. El secundario (l) indica el subnivel energético y describe la forma del orbital. El magnético (m) describe la orientación del orbital en el espacio. El espín (ms) hace referencia al giro del electrón sobre su propio eje.",
    ],
    reflexiones: [
      "¿Por qué se necesitan cuatro números cuánticos para describir completamente un electrón?",
      "¿Qué información proporciona cada número cuántico?",
      "¿Cómo se relacionan los números cuánticos entre sí?",
    ],
  },
  subtemas: [
    "Número cuántico principal (n)",
    "Número cuántico secundario (l)",
    "Número cuántico magnético (m)",
    "Número cuántico espín (ms)",
    "Relación entre números cuánticos",
    "Configuración electrónica",
    "Orbitales y orientaciones",
  ],
  recursos: [
    "Números cuánticos interactivos",
    "Configuración electrónica",
    "Orbitales atómicos",
  ],
  comic: {
    titulo: "Los Números Cuánticos",
    personaje: "Dr. Cuántico",
    paneles: [
      {
        personaje: "🔢",
        texto:
          "¡Hola! Soy el Dr. Cuántico. Para describir completamente un electrón necesitamos cuatro números cuánticos. ¡Cada uno nos da información diferente!",
        fondo: "from-slate-600 to-gray-600",
        challenge: {
          pregunta: "¿Cuántos números cuánticos se necesitan para describir completamente un electrón?",
          opciones: ["Dos", "Tres", "Cuatro"],
          respuesta: "Cuatro",
          explicacion: "Se necesitan cuatro números cuánticos: principal, secundario, magnético y espín.",
        },
      },
      {
        personaje: "📏",
        texto:
          "El número cuántico principal (n) indica el nivel de energía y la distancia promedio del electrón al núcleo. Sus valores son números enteros positivos: 1, 2, 3, 4...",
        fondo: "from-gray-600 to-zinc-600",
        challenge: {
          pregunta: "¿Qué indica el número cuántico principal (n)?",
          opciones: ["La forma del orbital", "El nivel de energía y distancia promedio al núcleo", "La orientación del orbital"],
          respuesta: "El nivel de energía y distancia promedio al núcleo",
          explicacion: "El número cuántico principal describe el nivel de energía principal del electrón.",
        },
      },
      {
        personaje: "🔤",
        texto:
          "El número cuántico secundario (l) indica el subnivel energético y la forma del orbital. Sus valores van de 0 a (n-1) y se designan con letras: s (l=0), p (l=1), d (l=2), f (l=3).",
        fondo: "from-zinc-600 to-neutral-600",
        challenge: {
          pregunta: "¿Qué valores puede tomar el número cuántico secundario (l) y qué representan?",
          opciones: ["Solo 0 y 1", "De 0 a (n-1), representan el subnivel y forma del orbital", "Solo números negativos"],
          respuesta: "De 0 a (n-1), representan el subnivel y forma del orbital",
          explicacion: "El valor de l depende de n y va de 0 a (n-1), describiendo el subnivel y la forma del orbital.",
        },
      },
      {
        personaje: "🧭",
        texto:
          "El número cuántico magnético (m) describe la orientación del orbital en el espacio. Para cada valor de l, m puede tomar valores enteros de -l a +l, incluyendo el cero.",
        fondo: "from-neutral-600 to-stone-600",
        challenge: {
          pregunta: "¿Qué describe el número cuántico magnético (m)?",
          opciones: ["La distancia al núcleo", "La orientación del orbital en el espacio", "El giro del electrón"],
          respuesta: "La orientación del orbital en el espacio",
          explicacion: "El número cuántico magnético describe cómo está orientado el orbital en el espacio tridimensional.",
        },
      },
      {
        personaje: "🌀",
        texto:
          "El número cuántico espín (ms) hace referencia al giro del electrón sobre su propio eje. Solo puede tomar dos valores: +1/2 (giro horario) o -1/2 (giro antihorario).",
        fondo: "from-stone-600 to-red-600",
        challenge: {
          pregunta: "¿Qué valores puede tomar el número cuántico espín (ms)?",
          opciones: ["Cualquier número", "+1/2 o -1/2", "Solo 0"],
          respuesta: "+1/2 o -1/2",
          explicacion: "El espín solo puede tener dos valores: +1/2 (horario) o -1/2 (antihorario).",
        },
      },
      {
        personaje: "📊",
        texto:
          "Para el subnivel s (l=0), hay 1 orbital (m=0). Para p (l=1), hay 3 orbitales (m=-1, 0, +1). Para d (l=2), hay 5 orbitales (m=-2, -1, 0, +1, +2).",
        fondo: "from-red-600 to-orange-600",
        challenge: {
          pregunta: "¿Cuántos orbitales hay en el subnivel p (l=1)?",
          opciones: ["1", "3", "5"],
          respuesta: "3",
          explicacion: "Para l=1, m puede ser -1, 0, +1, por lo tanto hay 3 orbitales p.",
        },
      },
      {
        personaje: "⚛️",
        texto:
          "Cada orbital puede contener máximo 2 electrones con espines opuestos. Por ejemplo, un orbital 2p puede tener un electrón con ms=+1/2 y otro con ms=-1/2.",
        fondo: "from-orange-600 to-amber-600",
        challenge: {
          pregunta: "¿Por qué un orbital puede contener máximo 2 electrones?",
          opciones: ["Porque solo hay dos valores posibles de espín (+1/2 y -1/2)", "Porque es una regla arbitraria", "Porque los electrones se repelen"],
          respuesta: "Porque solo hay dos valores posibles de espín (+1/2 y -1/2)",
          explicacion: "Los dos electrones en un orbital deben tener espines opuestos para cumplir el principio de exclusión de Pauli.",
        },
      },
      {
        personaje: "🎯",
        texto:
          "Los números cuánticos nos permiten identificar exactamente dónde está cada electrón. Por ejemplo, un electrón con n=2, l=1, m=0, ms=+1/2 está en el orbital 2pz.",
        fondo: "from-amber-600 to-yellow-500",
        challenge: {
          pregunta: "¿Para qué sirven los números cuánticos?",
          opciones: ["Solo para cálculos", "Para identificar exactamente dónde está cada electrón en el átomo", "Solo para teoría"],
          respuesta: "Para identificar exactamente dónde está cada electrón en el átomo",
          explicacion: "Los cuatro números cuánticos identifican de manera única la ubicación y propiedades de cada electrón.",
        },
      },
      {
        personaje: "🔬",
        texto:
          "El espín es el principal responsable de las propiedades magnéticas de los átomos y moléculas. Un electrón en rotación puede considerarse como un pequeño imán.",
        fondo: "from-yellow-500 to-lime-500",
        challenge: {
          pregunta: "¿Qué importancia tiene el número cuántico espín?",
          opciones: ["Ninguna", "Es responsable de las propiedades magnéticas", "Solo afecta el color"],
          respuesta: "Es responsable de las propiedades magnéticas",
          explicacion: "El espín del electrón genera propiedades magnéticas en átomos y moléculas.",
        },
      },
      {
        personaje: "🌟",
        texto:
          "Con los cuatro números cuánticos podemos describir matemáticamente cualquier electrón en cualquier átomo. ¡Es como tener la dirección completa de cada electrón!",
        fondo: "from-lime-500 to-green-500",
        challenge: {
          pregunta: "¿Por qué son importantes los números cuánticos en química?",
          opciones: ["Solo para matemáticas", "Permiten describir y predecir el comportamiento de los electrones y las propiedades de los átomos", "No tienen importancia"],
          respuesta: "Permiten describir y predecir el comportamiento de los electrones y las propiedades de los átomos",
          explicacion: "Los números cuánticos son fundamentales para entender la estructura electrónica y las propiedades químicas.",
        },
      },
    ],
  },
  laboratorio: {
    titulo: "Laboratorio de Números Cuánticos",
    introduccion:
      "Domina el uso de los cuatro números cuánticos para describir la ubicación y propiedades de los electrones en los átomos mediante ejercicios interactivos.",
    consejos: [
      "Recuerda: n (principal) = nivel de energía, valores: 1, 2, 3, 4...",
      "l (secundario) = subnivel, valores: 0 a (n-1). s=0, p=1, d=2, f=3.",
      "m (magnético) = orientación, valores: -l a +l, incluyendo el cero.",
      "ms (espín) = giro, valores: +1/2 o -1/2.",
      "Cada orbital puede contener máximo 2 electrones con espines opuestos.",
    ],
    ejercicios: [
      {
        id: 1,
        subtema: "Número cuántico principal",
        descripcion: "Comprende el número cuántico principal",
        dificultad: "Básico",
        pregunta: "¿Qué indica el número cuántico principal (n) y qué valores puede tomar?",
        respuestaCorrecta: "Indica el nivel de energía y distancia promedio al núcleo. Valores: números enteros positivos (1, 2, 3, 4...)",
        pistas: "Este número describe el nivel principal de energía del electrón.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 2,
        subtema: "Número cuántico secundario",
        descripcion: "Comprende el número cuántico secundario",
        dificultad: "Intermedio",
        pregunta: "¿Qué indica el número cuántico secundario (l) y qué valores puede tomar?",
        respuestaCorrecta: "Indica el subnivel energético y forma del orbital. Valores: de 0 a (n-1). s=0, p=1, d=2, f=3",
        pistas: "Este número depende de n y describe el subnivel y la forma del orbital.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 3,
        subtema: "Número cuántico magnético",
        descripcion: "Comprende el número cuántico magnético",
        dificultad: "Intermedio",
        pregunta: "¿Qué describe el número cuántico magnético (m) y qué valores puede tomar para l=2?",
        respuestaCorrecta: "Describe la orientación del orbital en el espacio. Para l=2, m puede ser: -2, -1, 0, +1, +2",
        pistas: "Este número describe la orientación y depende del valor de l.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 4,
        subtema: "Número cuántico espín",
        descripcion: "Comprende el número cuántico espín",
        dificultad: "Intermedio",
        pregunta: "¿Qué valores puede tomar el número cuántico espín (ms) y qué representa?",
        respuestaCorrecta: "Puede tomar +1/2 o -1/2. Representa el giro del electrón sobre su propio eje",
        pistas: "Solo hay dos valores posibles para el espín.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 5,
        subtema: "Número de orbitales",
        descripcion: "Calcula el número de orbitales",
        dificultad: "Intermedio",
        pregunta: "¿Cuántos orbitales hay en el subnivel d (l=2)?",
        respuestaCorrecta: "5 orbitales",
        pistas: "Para l=2, m puede tomar 5 valores: -2, -1, 0, +1, +2.",
        placeholder: "Escribe el número...",
      },
      {
        id: 6,
        subtema: "Capacidad de orbitales",
        descripcion: "Comprende la capacidad de los orbitales",
        dificultad: "Intermedio",
        pregunta: "¿Cuántos electrones como máximo puede contener un orbital y por qué?",
        respuestaCorrecta: "Máximo 2 electrones, porque solo hay dos valores posibles de espín (+1/2 y -1/2)",
        pistas: "Los dos electrones en un orbital deben tener espines opuestos.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 7,
        subtema: "Propiedades magnéticas",
        descripcion: "Comprende la importancia del espín",
        dificultad: "Intermedio",
        pregunta: "¿Por qué es importante el número cuántico espín?",
        respuestaCorrecta: "Es responsable de las propiedades magnéticas de átomos y moléculas",
        pistas: "El espín del electrón genera propiedades magnéticas.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 8,
        subtema: "Identificación de electrones",
        descripcion: "Usa los números cuánticos para identificar electrones",
        dificultad: "Avanzado",
        pregunta: "Si un electrón tiene n=3, l=1, m=0, ms=-1/2, ¿en qué orbital está?",
        respuestaCorrecta: "En el orbital 3pz",
        pistas: "n=3 indica nivel 3, l=1 indica subnivel p, m=0 indica orbital z, ms=-1/2 es el espín.",
        placeholder: "Escribe tu respuesta...",
      },
    ],
  },
};

