import { Copy } from "lucide-react";

import type { TopicContent } from "./types";

export const losIsotoposTopic: TopicContent = {
  id: "los-isotopos",
  nombre: "Los Isótopos",
  resumen:
    "Explora qué son los isótopos, cómo se diferencian de los isóbaros e isótonos, y comprende la formación de iones cuando los átomos ganan o pierden electrones.",
  progreso: 0,
  color: "from-emerald-500 via-green-500 to-teal-500",
  icono: Copy,
  contexto: {
    etiqueta: "EXPLORAMOS",
    titulo: "Átomos del mismo elemento con diferencias",
    icono: Copy,
    parrafos: [
      "La observación y análisis de las características de muchos elementos ha demostrado que algunos átomos del mismo elemento tienen diferente número de neutrones y, por ello, diferente número másico.",
      "Los isótopos son átomos que tienen el mismo número de protones y se diferencian en el número de neutrones. Por lo tanto, se representan con el mismo símbolo y tendrán el mismo Z, pero diferente A.",
      "La mayoría de los elementos químicos presentan isótopos. Cuando hablamos de la masa atómica de un elemento químico, nos referimos a la masa promedio de los átomos de ese elemento, teniendo en cuenta la masa de cada isótopo y su abundancia en la naturaleza.",
      "Los átomos también pueden ganar o perder electrones, convirtiéndose en iones. Cuando pierden electrones se convierten en cationes (carga positiva), y cuando ganan electrones se convierten en aniones (carga negativa).",
    ],
    reflexiones: [
      "¿Por qué los isótopos del mismo elemento tienen propiedades químicas similares?",
      "¿Qué medidas de seguridad se deben tomar al trabajar con radioisótopos?",
      "¿Cómo afecta la ganancia o pérdida de electrones a las propiedades de un átomo?",
    ],
  },
  subtemas: [
    "Definición de isótopos",
    "Isótopos del cloro",
    "Isótopos del hidrógeno",
    "Masa atómica promedio",
    "Isóbaros",
    "Isótonos",
    "Iones: cationes y aniones",
    "Aplicaciones de radioisótopos",
  ],
  recursos: [
    "Isótopos interactivos",
    "Datación con carbono-14",
    "Aplicaciones médicas de radioisótopos",
  ],
  comic: {
    titulo: "Los Isótopos",
    personaje: "Dr. Isótopo",
    paneles: [
      {
        personaje: "🔬",
        texto:
          "¡Hola! Soy el Dr. Isótopo. Los isótopos son átomos del mismo elemento que tienen el mismo número de protones pero diferente número de neutrones.",
        fondo: "from-emerald-600 to-green-600",
        challenge: {
          pregunta: "¿Qué son los isótopos?",
          opciones: [
            "Átomos de diferentes elementos",
            "Átomos del mismo elemento con mismo número de protones pero diferente número de neutrones",
            "Átomos con mismo número de neutrones",
          ],
          respuesta: "Átomos del mismo elemento con mismo número de protones pero diferente número de neutrones",
          explicacion: "Los isótopos comparten el mismo número atómico (Z) pero difieren en el número de masa (A).",
        },
      },
      {
        personaje: "🧪",
        texto:
          "El cloro tiene dos isótopos: cloro-35 (Cl-35) con 18 neutrones y cloro-37 (Cl-37) con 20 neutrones. Ambos tienen Z=17 (17 protones), pero diferente A.",
        fondo: "from-green-600 to-teal-600",
        challenge: {
          pregunta: "¿Qué tienen en común los isótopos cloro-35 y cloro-37?",
          opciones: ["El mismo número de neutrones", "El mismo número de protones (Z=17)", "El mismo número de masa"],
          respuesta: "El mismo número de protones (Z=17)",
          explicacion: "Los isótopos comparten el mismo número atómico, es decir, el mismo número de protones.",
        },
      },
      {
        personaje: "💧",
        texto:
          "El hidrógeno tiene tres isótopos con nombres propios: protio (H-1, sin neutrones), deuterio (H-2, 1 neutrón) y tritio (H-3, 2 neutrones).",
        fondo: "from-teal-600 to-cyan-600",
        challenge: {
          pregunta: "¿Cuántos neutrones tiene el deuterio (H-2)?",
          opciones: ["0", "1", "2"],
          respuesta: "1",
          explicacion: "El deuterio tiene 1 protón y 1 neutrón, por lo tanto A=2.",
        },
      },
      {
        personaje: "📊",
        texto:
          "La masa atómica de un elemento es el promedio de las masas de sus isótopos, considerando su abundancia en la naturaleza. ¡No es un número entero!",
        fondo: "from-cyan-600 to-blue-600",
        challenge: {
          pregunta: "¿Qué es la masa atómica de un elemento?",
          opciones: [
            "La masa del isótopo más pesado",
            "El promedio de las masas de sus isótopos considerando su abundancia",
            "Solo un número entero",
          ],
          respuesta: "El promedio de las masas de sus isótopos considerando su abundancia",
          explicacion: "La masa atómica es un promedio ponderado que considera la abundancia de cada isótopo.",
        },
      },
      {
        personaje: "⚖️",
        texto:
          "Los isóbaros son átomos de diferentes elementos que tienen el mismo número de masa (A) pero diferente número atómico (Z). Por ejemplo: Ca-40 y Ar-40.",
        fondo: "from-blue-600 to-indigo-600",
        challenge: {
          pregunta: "¿Qué son los isóbaros?",
          opciones: [
            "Átomos del mismo elemento",
            "Átomos de diferentes elementos con el mismo número de masa pero diferente Z",
            "Átomos con mismo número de neutrones",
          ],
          respuesta: "Átomos de diferentes elementos con el mismo número de masa pero diferente Z",
          explicacion: "Los isóbaros tienen el mismo A pero diferente Z, por lo tanto son elementos diferentes.",
        },
      },
      {
        personaje: "🔢",
        texto:
          "Los isótonos son átomos de diferentes elementos que tienen el mismo número de neutrones pero diferente número de protones. Por ejemplo: C-12 y B-11 tienen 6 neutrones cada uno.",
        fondo: "from-indigo-600 to-purple-600",
        challenge: {
          pregunta: "¿Qué son los isótonos?",
          opciones: [
            "Átomos del mismo elemento",
            "Átomos de diferentes elementos con el mismo número de neutrones pero diferente Z",
            "Átomos con mismo número de masa",
          ],
          respuesta: "Átomos de diferentes elementos con el mismo número de neutrones pero diferente Z",
          explicacion: "Los isótonos comparten el mismo número de neutrones pero tienen diferente número atómico.",
        },
      },
      {
        personaje: "⚡",
        texto:
          "Cuando un átomo neutro pierde electrones, adquiere carga positiva y se convierte en un catión. Por ejemplo: Ca → Ca²⁺ (perdió 2 electrones).",
        fondo: "from-purple-600 to-pink-600",
        challenge: {
          pregunta: "¿Qué es un catión?",
          opciones: [
            "Un átomo con carga negativa",
            "Un ion con carga positiva formado cuando un átomo pierde electrones",
            "Un átomo neutro",
          ],
          respuesta: "Un ion con carga positiva formado cuando un átomo pierde electrones",
          explicacion: "Los cationes tienen carga positiva porque tienen más protones que electrones.",
        },
      },
      {
        personaje: "🔋",
        texto:
          "Cuando un átomo neutro gana electrones, adquiere carga negativa y se convierte en un anión. Por ejemplo: Cl → Cl⁻ (ganó 1 electrón).",
        fondo: "from-pink-600 to-rose-600",
        challenge: {
          pregunta: "¿Qué es un anión?",
          opciones: [
            "Un átomo con carga positiva",
            "Un ion con carga negativa formado cuando un átomo gana electrones",
            "Un átomo neutro",
          ],
          respuesta: "Un ion con carga negativa formado cuando un átomo gana electrones",
          explicacion: "Los aniones tienen carga negativa porque tienen más electrones que protones.",
        },
      },
      {
        personaje: "🏥",
        texto:
          "Los radioisótopos se usan en medicina para terapias y diagnósticos. El carbono-14 se usa para datar fósiles. ¡Requieren medidas de seguridad especiales!",
        fondo: "from-rose-600 to-red-600",
        challenge: {
          pregunta: "¿Para qué se usa el carbono-14?",
          opciones: ["Solo para medicina", "Para datar materiales que contienen carbono", "Solo para energía"],
          respuesta: "Para datar materiales que contienen carbono",
          explicacion: "El carbono-14 se usa en la datación de fósiles y materiales orgánicos antiguos.",
        },
      },
      {
        personaje: "🌟",
        texto:
          "Los iones como Ca²⁺, Na⁺, K⁺, Cl⁻ y Fe²⁺ cumplen funciones esenciales en los seres vivos. ¡El ion Fe²⁺ está presente en la hemoglobina de la sangre!",
        fondo: "from-red-600 to-orange-600",
        challenge: {
          pregunta: "¿Por qué son importantes los iones en los seres vivos?",
          opciones: [
            "No tienen importancia",
            "Cumplen funciones esenciales como el transporte de oxígeno en la hemoglobina",
            "Solo son peligrosos",
          ],
          respuesta: "Cumplen funciones esenciales como el transporte de oxígeno en la hemoglobina",
          explicacion: "Los iones participan en procesos vitales como el transporte de oxígeno, contracción muscular y transmisión nerviosa.",
        },
      },
    ],
  },
  laboratorio: {
    titulo: "Laboratorio de Isótopos",
    introduccion:
      "Domina los conceptos de isótopos, isóbaros, isótonos e iones mediante ejercicios interactivos que ponen a prueba tu comprensión de estas variaciones atómicas.",
    consejos: [
      "Recuerda: isótopos = mismo Z, diferente A (diferente número de neutrones).",
      "Isóbaros = mismo A, diferente Z (diferentes elementos).",
      "Isótonos = mismo número de neutrones, diferente Z.",
      "Cationes = iones positivos (pierden electrones).",
      "Aniones = iones negativos (ganan electrones).",
    ],
    ejercicios: [
      {
        id: 1,
        subtema: "Definición de isótopos",
        descripcion: "Comprende qué son los isótopos",
        dificultad: "Básico",
        pregunta: "¿Qué son los isótopos y qué tienen en común?",
        respuestaCorrecta: "Átomos del mismo elemento con el mismo número de protones (Z) pero diferente número de neutrones (diferente A)",
        pistas: "Los isótopos comparten el número atómico pero difieren en el número de masa.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 2,
        subtema: "Isótopos del cloro",
        descripcion: "Identifica isótopos del cloro",
        dificultad: "Básico",
        pregunta: "El cloro-35 tiene 17 protones y 18 neutrones. El cloro-37 tiene 17 protones y 20 neutrones. ¿Por qué son isótopos?",
        respuestaCorrecta: "Porque tienen el mismo número de protones (Z=17) pero diferente número de neutrones y por tanto diferente número de masa",
        pistas: "Los isótopos comparten el número atómico pero difieren en neutrones.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 3,
        subtema: "Isótopos del hidrógeno",
        descripcion: "Comprende los isótopos del hidrógeno",
        dificultad: "Intermedio",
        pregunta: "¿Cuántos neutrones tiene cada uno de los tres isótopos del hidrógeno: protio, deuterio y tritio?",
        respuestaCorrecta: "Protio (H-1): 0 neutrones, Deuterio (H-2): 1 neutrón, Tritio (H-3): 2 neutrones",
        pistas: "El protio es el más común y no tiene neutrones. El deuterio tiene 1 y el tritio tiene 2.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 4,
        subtema: "Masa atómica promedio",
        descripcion: "Comprende la masa atómica promedio",
        dificultad: "Intermedio",
        pregunta: "¿Qué es la masa atómica de un elemento y cómo se calcula?",
        respuestaCorrecta: "Es el promedio de las masas de sus isótopos considerando su abundancia en la naturaleza",
        pistas: "No es un número entero, sino un promedio ponderado por la abundancia de cada isótopo.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 5,
        subtema: "Isóbaros",
        descripcion: "Identifica isóbaros",
        dificultad: "Intermedio",
        pregunta: "¿Qué son los isóbaros? Da un ejemplo.",
        respuestaCorrecta: "Átomos de diferentes elementos con el mismo número de masa (A) pero diferente número atómico (Z). Ejemplo: Ca-40 y Ar-40",
        pistas: "Los isóbaros tienen el mismo A pero diferente Z, por lo tanto son elementos diferentes.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 6,
        subtema: "Isótonos",
        descripcion: "Identifica isótonos",
        dificultad: "Intermedio",
        pregunta: "¿Qué son los isótonos? Da un ejemplo.",
        respuestaCorrecta: "Átomos de diferentes elementos con el mismo número de neutrones pero diferente número atómico. Ejemplo: C-12 y B-11 (ambos con 6 neutrones)",
        pistas: "Los isótonos comparten el número de neutrones pero tienen diferente Z.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 7,
        subtema: "Cationes",
        descripcion: "Comprende la formación de cationes",
        dificultad: "Intermedio",
        pregunta: "¿Qué es un catión y cómo se forma? Da un ejemplo.",
        respuestaCorrecta: "Un ion con carga positiva formado cuando un átomo neutro pierde electrones. Ejemplo: Ca → Ca²⁺ (perdió 2 electrones)",
        pistas: "Los cationes tienen más protones que electrones, por lo tanto carga positiva.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 8,
        subtema: "Aniones",
        descripcion: "Comprende la formación de aniones",
        dificultad: "Intermedio",
        pregunta: "¿Qué es un anión y cómo se forma? Da un ejemplo.",
        respuestaCorrecta: "Un ion con carga negativa formado cuando un átomo neutro gana electrones. Ejemplo: Cl → Cl⁻ (ganó 1 electrón)",
        pistas: "Los aniones tienen más electrones que protones, por lo tanto carga negativa.",
        placeholder: "Escribe tu respuesta...",
      },
    ],
  },
};

