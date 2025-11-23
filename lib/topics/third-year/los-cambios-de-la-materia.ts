import { Zap } from "lucide-react";

import type { TopicContent } from "./types";

export const losCambiosDeLaMateriaTopic: TopicContent = {
  id: "los-cambios-de-la-materia",
  nombre: "Los Cambios de la Materia",
  resumen:
    "Explora cómo la materia puede transformarse mediante cambios físicos y químicos, identificando las diferencias y ejemplos de cada tipo.",
  progreso: 0,
  color: "from-orange-500 via-red-500 to-pink-500",
  icono: Zap,
  contexto: {
    etiqueta: "EXPLORAMOS",
    titulo: "Transformaciones de la Materia",
    icono: Zap,
    parrafos: [
      "Con mucha frecuencia, las sustancias experimentan transformaciones o cambios al ser sometidas a diferentes condiciones. Estos cambios pueden ser físicos o químicos, y cada uno tiene características distintivas.",
      "En los cambios físicos, la materia mantiene su composición química original. En los cambios químicos, se forman nuevas sustancias con propiedades diferentes.",
      "La ley de conservación de la masa se cumple tanto en cambios físicos como químicos: la masa total antes y después de la transformación permanece constante.",
    ],
    reflexiones: [
      "¿Cómo podemos distinguir entre un cambio físico y uno químico?",
      "¿Por qué algunos cambios son reversibles y otros no?",
      "¿Qué papel juega la energía en las transformaciones de la materia?",
    ],
  },
  subtemas: [
    "Cambios físicos",
    "Cambios químicos",
    "Ley de conservación de la masa",
    "Ejemplos de transformaciones",
    "Reversibilidad de los cambios",
  ],
  recursos: [
    "Página interactiva sobre cambios físicos y químicos",
    "Actividades de identificación de cambios",
    "Experimentos virtuales",
  ],
  comic: {
    titulo: "Los Cambios de la Materia",
    personaje: "Dr. Transformación",
    paneles: [
      {
        personaje: "⚡",
        texto:
          "¡Hola! Soy el Dr. Transformación. Hoy descubrirás que la materia puede cambiar de dos formas: físicamente o químicamente. ¡Vamos a explorarlo!",
        fondo: "from-orange-600 to-red-600",
        challenge: {
          pregunta: "¿Cuántos tipos principales de cambios experimenta la materia?",
          opciones: ["Uno: solo físicos", "Dos: físicos y químicos", "Tres: físicos, químicos y biológicos"],
          respuesta: "Dos: físicos y químicos",
          explicacion: "La materia experimenta principalmente cambios físicos y químicos.",
        },
      },
      {
        personaje: "🧊",
        texto:
          "Cuando el hielo se derrite, se convierte en agua líquida. ¿Qué le pasa al hielo al cabo de un tiempo? ¡Se transforma sin cambiar su composición química!",
        fondo: "from-cyan-600 to-blue-600",
        challenge: {
          pregunta: "La fusión del hielo es un ejemplo de...",
          opciones: ["Cambio físico", "Cambio químico", "Cambio biológico"],
          respuesta: "Cambio físico",
          explicacion: "El hielo y el agua tienen la misma fórmula química (H₂O), solo cambia su estado.",
        },
      },
      {
        personaje: "🍷",
        texto:
          "Si calentamos alcohol, hierve y se convierte en vapor. ¿Podríamos recuperar el alcohol si recogemos y enfriamos el gas? ¡Sí! Es un cambio físico reversible.",
        fondo: "from-purple-600 to-indigo-600",
        challenge: {
          pregunta: "¿Qué caracteriza a un cambio físico reversible?",
          opciones: ["Se puede revertir fácilmente", "Genera nuevas sustancias", "Requiere mucha energía"],
          respuesta: "Se puede revertir fácilmente",
          explicacion: "Los cambios físicos pueden revertirse sin alterar la composición química.",
        },
      },
      {
        personaje: "🧲",
        texto:
          "Al acercar un imán a una mezcla de hierro y azufre, las partículas de hierro se separan. Esto es un cambio físico: podemos recuperar los componentes originales.",
        fondo: "from-gray-600 to-slate-600",
        challenge: {
          pregunta: "La separación magnética de hierro y azufre es un cambio...",
          opciones: ["Físico", "Químico", "Nuclear"],
          respuesta: "Físico",
          explicacion: "Los componentes mantienen sus propiedades y pueden separarse por métodos físicos.",
        },
      },
      {
        personaje: "💧",
        texto:
          "Cuando disolvemos sal en agua, las partículas se dispersan en el líquido. La disolución es un cambio físico: podemos recuperar la sal por evaporación.",
        fondo: "from-blue-500 to-cyan-500",
        challenge: {
          pregunta: "¿Qué ocurre en una disolución?",
          opciones: ["Se forman nuevas sustancias", "Las partículas se dispersan sin cambiar químicamente", "Se produce una reacción química"],
          respuesta: "Las partículas se dispersan sin cambiar químicamente",
          explicacion: "En una disolución, los componentes mantienen su identidad química.",
        },
      },
      {
        personaje: "⚗️",
        texto:
          "En la electrólisis del agua, aparecen burbujas de hidrógeno. El agua se descompone en hidrógeno y oxígeno: ¡esto es un cambio químico!",
        fondo: "from-green-600 to-emerald-600",
        challenge: {
          pregunta: "La electrólisis del agua es un cambio...",
          opciones: ["Físico", "Químico", "Biológico"],
          respuesta: "Químico",
          explicacion: "Se forman nuevas sustancias (H₂ y O₂) diferentes al agua original.",
        },
      },
      {
        personaje: "🔥",
        texto:
          "Al calentar una mezcla de hierro y azufre, se produce un sólido negro que no es atraído por el imán. ¡Se ha formado sulfuro de hierro, un cambio químico!",
        fondo: "from-red-600 to-orange-600",
        challenge: {
          pregunta: "¿Por qué el sólido negro ya no es atraído por el imán?",
          opciones: ["Porque cambió de temperatura", "Porque se formó una nueva sustancia química", "Porque perdió sus propiedades magnéticas naturalmente"],
          respuesta: "Porque se formó una nueva sustancia química",
          explicacion: "El sulfuro de hierro (FeS) es una sustancia nueva con propiedades diferentes al hierro puro.",
        },
      },
      {
        personaje: "💨",
        texto:
          "Cuando el alcohol arde, se desprenden vapores y se produce dióxido de carbono. ¿Podríamos recuperar el alcohol original? ¡No! Es un cambio químico irreversible.",
        fondo: "from-yellow-600 to-amber-600",
        challenge: {
          pregunta: "La combustión del alcohol es irreversible porque...",
          opciones: ["Se forman nuevas sustancias", "Requiere mucha energía", "Es un proceso lento"],
          respuesta: "Se forman nuevas sustancias",
          explicacion: "En la combustión se forman CO₂ y H₂O, sustancias diferentes al alcohol original.",
        },
      },
      {
        personaje: "🧪",
        texto:
          "Al mezclar nitrato de plomo (Pb(NO₃)₂) con yoduro de potasio (KI), se deposita un sólido amarillo de yoduro de plomo (PbI₂). ¡Cambio químico con formación de precipitado!",
        fondo: "from-pink-600 to-rose-600",
        challenge: {
          pregunta: "La formación de un precipitado indica...",
          opciones: ["Un cambio físico", "Un cambio químico", "Una mezcla simple"],
          respuesta: "Un cambio químico",
          explicacion: "La formación de un precipitado es evidencia de que se formó una nueva sustancia.",
        },
      },
      {
        personaje: "🎯",
        texto:
          "Cuando añades un ácido fuerte a algunos metales, se libera gas hidrógeno (H₂). Esto ocurre porque el metal reacciona químicamente con el ácido, formando nuevas sustancias.",
        fondo: "from-violet-600 to-purple-600",
        challenge: {
          pregunta: "La liberación de gas hidrógeno al reaccionar un metal con ácido es...",
          opciones: ["Un cambio físico", "Un cambio químico", "Una mezcla"],
          respuesta: "Un cambio químico",
          explicacion: "Se produce una reacción química donde se forman nuevas sustancias, incluyendo el gas H₂.",
        },
      },
    ],
  },
  laboratorio: {
    titulo: "Laboratorio de Cambios de la Materia",
    introduccion:
      "Identifica y diferencia cambios físicos y químicos mediante ejercicios interactivos que ponen a prueba tu comprensión de las transformaciones de la materia.",
    consejos: [
      "Recuerda: en un cambio físico, la composición química no cambia.",
      "En un cambio químico, se forman nuevas sustancias con propiedades diferentes.",
      "Observa si puedes recuperar los materiales originales: si es fácil, probablemente es físico.",
      "La formación de gases, precipitados o cambios de color suelen indicar cambios químicos.",
    ],
    ejercicios: [
      {
        id: 1,
        subtema: "Cambios físicos",
        descripcion: "Identifica ejemplos de cambios físicos",
        dificultad: "Básico",
        pregunta: "¿Cuál de los siguientes es un ejemplo de cambio físico?",
        respuestaCorrecta: "Derretir hielo",
        pistas: "Piensa en cambios donde la sustancia mantiene su composición química original.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 2,
        subtema: "Cambios químicos",
        descripcion: "Reconoce transformaciones químicas",
        dificultad: "Básico",
        pregunta: "¿Cuál es una característica de un cambio químico?",
        respuestaCorrecta: "Se forman nuevas sustancias",
        pistas: "En un cambio químico, la materia se transforma en algo diferente.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 3,
        subtema: "Ley de conservación",
        descripcion: "Comprende la conservación de la masa",
        dificultad: "Intermedio",
        pregunta: "Según la ley de conservación de la masa, ¿qué ocurre con la masa total en un cambio químico?",
        respuestaCorrecta: "Se mantiene constante",
        pistas: "La masa total antes y después de una reacción química es la misma.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 4,
        subtema: "Electrólisis",
        descripcion: "Analiza la descomposición del agua",
        dificultad: "Intermedio",
        pregunta: "En la electrólisis del agua, ¿qué sustancias se forman?",
        respuestaCorrecta: "Hidrógeno y oxígeno",
        pistas: "El agua (H₂O) se descompone en sus elementos constituyentes.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 5,
        subtema: "Combustión",
        descripcion: "Estudia las reacciones de combustión",
        dificultad: "Intermedio",
        pregunta: "¿Por qué la combustión del alcohol es un cambio químico?",
        respuestaCorrecta: "Se forman nuevas sustancias como CO₂ y H₂O",
        pistas: "En la combustión, el alcohol reacciona con oxígeno formando productos diferentes.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 6,
        subtema: "Precipitados",
        descripcion: "Identifica la formación de precipitados",
        dificultad: "Avanzado",
        pregunta: "¿Qué indica la formación de un precipitado amarillo al mezclar Pb(NO₃)₂ con KI?",
        respuestaCorrecta: "Se formó yoduro de plomo (PbI₂) por cambio químico",
        pistas: "Un precipitado es un sólido que se forma cuando dos soluciones reaccionan químicamente.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 7,
        subtema: "Reversibilidad",
        descripcion: "Distingue cambios reversibles e irreversibles",
        dificultad: "Intermedio",
        pregunta: "¿Cuál es la diferencia principal entre un cambio físico y uno químico en términos de reversibilidad?",
        respuestaCorrecta: "Los cambios físicos suelen ser reversibles, los químicos generalmente no",
        pistas: "Piensa si puedes recuperar fácilmente los materiales originales después del cambio.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 8,
        subtema: "Reacciones con metales",
        descripcion: "Comprende reacciones de metales con ácidos",
        dificultad: "Avanzado",
        pregunta: "Cuando un metal reacciona con un ácido y se libera gas hidrógeno, ¿qué tipo de cambio ocurre?",
        respuestaCorrecta: "Cambio químico",
        pistas: "La liberación de gas es evidencia de que se formaron nuevas sustancias.",
        placeholder: "Escribe tu respuesta...",
      },
    ],
  },
};

