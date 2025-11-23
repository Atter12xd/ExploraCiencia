import { Radio } from "lucide-react";

import type { TopicContent } from "./types";

export const laRadiactividadTopic: TopicContent = {
  id: "la-radiactividad",
  nombre: "La Radiactividad",
  resumen:
    "Explora qué es la radiactividad, los tipos de radiación (alfa, beta, gamma), la fisión y fusión nuclear, y sus aplicaciones en energía, medicina y ciencia.",
  progreso: 0,
  color: "from-yellow-500 via-amber-500 to-orange-500",
  icono: Radio,
  contexto: {
    etiqueta: "EXPLORAMOS",
    titulo: "La energía del núcleo",
    icono: Radio,
    parrafos: [
      "En 1896, Henri A. Becquerel descubrió que un mineral de uranio emitía continua y espontáneamente una radiación desconocida muy penetrante. Este fenómeno fue bautizado por los esposos Curie con el nombre de radiactividad.",
      "La radiactividad es la propiedad que poseen los átomos de algunos elementos de emitir radiaciones. Debido a que las radiaciones son partículas subatómicas, los elementos radiactivos se transforman en otros elementos, pues la constitución interna de sus átomos cambia.",
      "La radiactividad puede ser de origen natural (isótopos que se desintegran espontáneamente como el radón, carbono o uranio) o artificial (producida al bombardear isótopos con neutrones o partículas alfa).",
      "La fisión nuclear ocurre cuando núcleos grandes como el uranio se rompen para dar núcleos más pequeños, liberando gran cantidad de energía. La fusión nuclear ocurre cuando núcleos pequeños se unen para formar núcleos mayores, como en el Sol.",
    ],
    reflexiones: [
      "¿Qué medidas de seguridad se deben tomar al trabajar con materiales radiactivos?",
      "¿Cuáles son las ventajas y desventajas de la energía nuclear?",
      "¿Por qué es importante gestionar adecuadamente los residuos radiactivos?",
    ],
  },
  subtemas: [
    "Descubrimiento de la radiactividad",
    "Radiactividad natural y artificial",
    "Radiación alfa (α)",
    "Radiación beta (β)",
    "Radiación gamma (γ)",
    "Vida media de radioisótopos",
    "Fisión nuclear",
    "Fusión nuclear",
    "Aplicaciones de la radiactividad",
  ],
  recursos: [
    "Centrales nucleares",
    "Aplicaciones médicas",
    "Datación con radioisótopos",
  ],
  comic: {
    titulo: "La Radiactividad",
    personaje: "Dr. Radiación",
    paneles: [
      {
        personaje: "🔬",
        texto:
          "¡Hola! Soy el Dr. Radiación. En 1896, Henri Becquerel descubrió que el uranio emitía radiación espontáneamente. Los esposos Curie lo llamaron 'radiactividad'.",
        fondo: "from-yellow-600 to-amber-600",
        challenge: {
          pregunta: "¿Quién descubrió la radiactividad y qué elemento la emite naturalmente?",
          opciones: ["Rutherford, hierro", "Becquerel, uranio", "Bohr, carbono"],
          respuesta: "Becquerel, uranio",
          explicacion: "Henri Becquerel descubrió que el uranio emitía radiación espontáneamente.",
        },
      },
      {
        personaje: "⚛️",
        texto:
          "La radiactividad es la propiedad de algunos átomos de emitir radiaciones. Los elementos radiactivos se transforman en otros elementos porque cambia su constitución interna.",
        fondo: "from-amber-600 to-orange-600",
        challenge: {
          pregunta: "¿Qué es la radiactividad?",
          opciones: [
            "La emisión de luz",
            "La propiedad de algunos átomos de emitir radiaciones, transformándose en otros elementos",
            "Solo el calor",
          ],
          respuesta: "La propiedad de algunos átomos de emitir radiaciones, transformándose en otros elementos",
          explicacion: "La radiactividad implica la emisión de radiaciones que transforman los átomos.",
        },
      },
      {
        personaje: "🌍",
        texto:
          "La radiactividad natural proviene de isótopos que se desintegran espontáneamente (uranio, radón, carbono). La artificial se produce bombardeando isótopos con neutrones.",
        fondo: "from-orange-600 to-red-600",
        challenge: {
          pregunta: "¿Cuál es la diferencia entre radiactividad natural y artificial?",
          opciones: [
            "No hay diferencia",
            "Natural: desintegración espontánea. Artificial: se produce bombardeando isótopos",
            "Solo existe la natural",
          ],
          respuesta: "Natural: desintegración espontánea. Artificial: se produce bombardeando isótopos",
          explicacion: "La natural ocurre espontáneamente, la artificial requiere intervención humana.",
        },
      },
      {
        personaje: "⚡",
        texto:
          "Radiación alfa (α): partículas con 2 protones y 2 neutrones (núcleos de helio). Carga +2, poco poder de penetración. Se desvían hacia el polo negativo en campos magnéticos.",
        fondo: "from-red-600 to-pink-600",
        challenge: {
          pregunta: "¿Qué son las partículas alfa?",
          opciones: [
            "Electrones",
            "Núcleos de helio con 2 protones y 2 neutrones, carga +2",
            "Fotones sin masa",
          ],
          respuesta: "Núcleos de helio con 2 protones y 2 neutrones, carga +2",
          explicacion: "Las partículas alfa son núcleos de helio con carga positiva.",
        },
      },
      {
        personaje: "🔋",
        texto:
          "Radiación beta (β): electrones de alta velocidad. Carga -1, masa muy pequeña. Mayor poder de penetración que las alfa. Se desvían hacia el polo positivo.",
        fondo: "from-pink-600 to-rose-600",
        challenge: {
          pregunta: "¿Qué son las partículas beta?",
          opciones: ["Protones", "Electrones de alta velocidad con carga -1", "Neutrones"],
          respuesta: "Electrones de alta velocidad con carga -1",
          explicacion: "Las partículas beta son electrones emitidos a alta velocidad.",
        },
      },
      {
        personaje: "💫",
        texto:
          "Radiación gamma (γ): radiación electromagnética como la luz, pero muy energética. Sin carga ni masa. Gran poder de penetración. No se desvía en campos magnéticos.",
        fondo: "from-rose-600 to-purple-600",
        challenge: {
          pregunta: "¿Qué son los rayos gamma?",
          opciones: [
            "Partículas con carga",
            "Radiación electromagnética sin carga ni masa, con gran poder de penetración",
            "Solo luz visible",
          ],
          respuesta: "Radiación electromagnética sin carga ni masa, con gran poder de penetración",
          explicacion: "Los rayos gamma son radiación electromagnética muy energética.",
        },
      },
      {
        personaje: "⏱️",
        texto:
          "La vida media es el tiempo que tarda la mitad de un radioisótopo en desintegrarse. El cesio-137 tiene vida media de 30 años. ¡Cada radioisótopo tiene su propia vida media!",
        fondo: "from-purple-600 to-indigo-600",
        challenge: {
          pregunta: "¿Qué es la vida media de un radioisótopo?",
          opciones: [
            "El tiempo total de existencia",
            "El tiempo que tarda la mitad del radioisótopo en desintegrarse",
            "Solo un número",
          ],
          respuesta: "El tiempo que tarda la mitad del radioisótopo en desintegrarse",
          explicacion: "La vida media es el tiempo necesario para que se desintegre la mitad de la muestra.",
        },
      },
      {
        personaje: "💥",
        texto:
          "Fisión nuclear: núcleos grandes como uranio-235 se rompen en núcleos más pequeños, liberando energía y neutrones que pueden iniciar una reacción en cadena.",
        fondo: "from-indigo-600 to-blue-600",
        challenge: {
          pregunta: "¿Qué es la fisión nuclear?",
          opciones: [
            "Unión de núcleos pequeños",
            "Ruptura de núcleos grandes en núcleos más pequeños, liberando energía",
            "Solo emisión de radiación",
          ],
          respuesta: "Ruptura de núcleos grandes en núcleos más pequeños, liberando energía",
          explicacion: "La fisión es la división de núcleos pesados en núcleos más ligeros con liberación de energía.",
        },
      },
      {
        personaje: "☀️",
        texto:
          "Fusión nuclear: núcleos pequeños como hidrógeno se unen para formar núcleos mayores como helio, liberando energía. ¡Es el proceso que ocurre en el Sol!",
        fondo: "from-blue-600 to-cyan-600",
        challenge: {
          pregunta: "¿Qué es la fusión nuclear?",
          opciones: [
            "Ruptura de núcleos",
            "Unión de núcleos pequeños para formar núcleos mayores, liberando energía",
            "Solo emisión de luz",
          ],
          respuesta: "Unión de núcleos pequeños para formar núcleos mayores, liberando energía",
          explicacion: "La fusión es la unión de núcleos ligeros para formar núcleos más pesados.",
        },
      },
      {
        personaje: "🏥",
        texto:
          "La radiactividad se usa en medicina (diagnóstico y terapia), generación de energía eléctrica, datación de fósiles y experimentos científicos. ¡Requiere medidas de seguridad!",
        fondo: "from-cyan-600 to-teal-600",
        challenge: {
          pregunta: "¿Cuáles son algunas aplicaciones de la radiactividad?",
          opciones: [
            "Solo medicina",
            "Medicina, generación de energía, datación de fósiles y experimentos científicos",
            "Solo energía",
          ],
          respuesta: "Medicina, generación de energía, datación de fósiles y experimentos científicos",
          explicacion: "La radiactividad tiene múltiples aplicaciones beneficiosas cuando se usa con seguridad.",
        },
      },
    ],
  },
  laboratorio: {
    titulo: "Laboratorio de Radiactividad",
    introduccion:
      "Domina los conceptos de radiactividad, tipos de radiación, fisión y fusión nuclear mediante ejercicios interactivos que ponen a prueba tu comprensión de estos fenómenos nucleares.",
    consejos: [
      "Recuerda: radiación alfa = núcleos de helio (carga +2), poco penetrante.",
      "Radiación beta = electrones (carga -1), más penetrante que alfa.",
      "Radiación gamma = radiación electromagnética (sin carga), muy penetrante.",
      "Fisión = ruptura de núcleos grandes. Fusión = unión de núcleos pequeños.",
      "La vida media es el tiempo para que se desintegre la mitad de la muestra.",
    ],
    ejercicios: [
      {
        id: 1,
        subtema: "Descubrimiento de la radiactividad",
        descripcion: "Comprende el descubrimiento de la radiactividad",
        dificultad: "Básico",
        pregunta: "¿Quién descubrió la radiactividad y qué elemento la emite naturalmente?",
        respuestaCorrecta: "Henri Becquerel descubrió que el uranio emitía radiación espontáneamente",
        pistas: "Fue descubierto en 1896 y los esposos Curie le dieron el nombre de radiactividad.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 2,
        subtema: "Radiactividad natural y artificial",
        descripcion: "Distingue entre radiactividad natural y artificial",
        dificultad: "Intermedio",
        pregunta: "¿Cuál es la diferencia entre radiactividad natural y artificial?",
        respuestaCorrecta: "Natural: desintegración espontánea de isótopos. Artificial: se produce bombardeando isótopos con neutrones o partículas alfa",
        pistas: "La natural ocurre sin intervención, la artificial requiere bombardeo de partículas.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 3,
        subtema: "Radiación alfa",
        descripcion: "Comprende la radiación alfa",
        dificultad: "Intermedio",
        pregunta: "¿Qué son las partículas alfa y qué características tienen?",
        respuestaCorrecta: "Núcleos de helio con 2 protones y 2 neutrones, carga +2, poco poder de penetración",
        pistas: "Son partículas pesadas con carga positiva que se desvían hacia el polo negativo.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 4,
        subtema: "Radiación beta",
        descripcion: "Comprende la radiación beta",
        dificultad: "Intermedio",
        pregunta: "¿Qué son las partículas beta y qué características tienen?",
        respuestaCorrecta: "Electrones de alta velocidad con carga -1, masa muy pequeña, mayor poder de penetración que las alfa",
        pistas: "Son partículas ligeras con carga negativa que se desvían hacia el polo positivo.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 5,
        subtema: "Radiación gamma",
        descripcion: "Comprende la radiación gamma",
        dificultad: "Intermedio",
        pregunta: "¿Qué son los rayos gamma y qué características tienen?",
        respuestaCorrecta: "Radiación electromagnética sin carga ni masa, con gran poder de penetración, no se desvía en campos magnéticos",
        pistas: "Es radiación similar a la luz pero muy energética, requiere plomo o hormigón para detenerla.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 6,
        subtema: "Vida media",
        descripcion: "Comprende la vida media",
        dificultad: "Intermedio",
        pregunta: "¿Qué es la vida media de un radioisótopo? Da un ejemplo.",
        respuestaCorrecta: "El tiempo que tarda la mitad del radioisótopo en desintegrarse. Ejemplo: cesio-137 tiene vida media de 30 años",
        pistas: "Después de una vida media, queda la mitad de la muestra original.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 7,
        subtema: "Fisión nuclear",
        descripcion: "Comprende la fisión nuclear",
        dificultad: "Intermedio",
        pregunta: "¿Qué es la fisión nuclear y qué elementos la experimentan?",
        respuestaCorrecta: "Ruptura de núcleos grandes en núcleos más pequeños liberando energía. Elementos como uranio-235 y plutonio",
        pistas: "Es el proceso usado en centrales nucleares y bombas atómicas.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 8,
        subtema: "Fusión nuclear",
        descripcion: "Comprende la fusión nuclear",
        dificultad: "Intermedio",
        pregunta: "¿Qué es la fusión nuclear y dónde ocurre naturalmente?",
        respuestaCorrecta: "Unión de núcleos pequeños para formar núcleos mayores liberando energía. Ocurre naturalmente en el Sol",
        pistas: "Es el proceso que alimenta las estrellas, requiere temperaturas muy altas.",
        placeholder: "Escribe tu respuesta...",
      },
    ],
  },
};

