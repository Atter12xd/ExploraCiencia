import { Sparkles } from "lucide-react";

import type { TopicContent } from "./types";

export const modeloAtomicoActualTopic: TopicContent = {
  id: "modelo-atomico-actual",
  nombre: "El Modelo Atómico Actual",
  resumen:
    "Explora el modelo mecánico-cuántico del átomo, los principios de dualidad onda-corpúsculo e incertidumbre, y cómo los electrones se organizan en niveles, subniveles y orbitales.",
  progreso: 0,
  color: "from-rose-500 via-pink-500 to-fuchsia-500",
  icono: Sparkles,
  contexto: {
    etiqueta: "EXPLORAMOS",
    titulo: "El átomo según la mecánica cuántica",
    icono: Sparkles,
    parrafos: [
      "El modelo de Bohr tampoco es suficientemente preciso para indicar dónde se encuentra cada electrón de un átomo. Investigaciones avanzadas sobre los espectros de los átomos demostraron que algunos niveles de energía tenían, a su vez, subniveles.",
      "El científico austriaco Erwin Schrödinger estableció un nuevo modelo atómico basándose en dos principios de la mecánica cuántica: el principio de dualidad onda-corpúsculo de Louis de Broglie y el principio de incertidumbre de Werner Heisenberg.",
      "El modelo mecánico-cuántico plantea que el átomo está constituido por un núcleo (protones y neutrones) y una nube electrónica donde se mueven los electrones en niveles, subniveles y orbitales.",
      "Los orbitales son regiones de la nube electrónica donde la posibilidad de encontrar un electrón es máxima. Como no se puede conocer con exactitud la posición de los electrones, se establece que giran en una región del espacio donde, estadísticamente, es más probable encontrarlos.",
    ],
    reflexiones: [
      "¿Por qué el modelo de Bohr no era suficientemente preciso?",
      "¿Qué significa que un electrón tenga comportamiento dual (onda-corpúsculo)?",
      "¿Por qué es importante el principio de incertidumbre en la descripción del átomo?",
    ],
  },
  subtemas: [
    "Modelo mecánico-cuántico",
    "Principio de dualidad onda-corpúsculo",
    "Principio de incertidumbre",
    "Niveles de energía",
    "Subniveles de energía (s, p, d, f)",
    "Orbitales atómicos",
    "Espectroscopia",
    "Configuración electrónica",
  ],
  recursos: [
    "Modelo de Schrödinger",
    "Espectroscopia y espectros",
    "Orbitales atómicos interactivos",
  ],
  comic: {
    titulo: "El Modelo Atómico Actual",
    personaje: "Dr. Cuántico",
    paneles: [
      {
        personaje: "🌌",
        texto:
          "¡Hola! Soy el Dr. Cuántico. El modelo de Bohr no era suficientemente preciso. Erwin Schrödinger creó el modelo mecánico-cuántico, el más preciso hasta ahora.",
        fondo: "from-rose-600 to-pink-600",
        challenge: {
          pregunta: "¿Quién desarrolló el modelo mecánico-cuántico del átomo?",
          opciones: ["Bohr", "Schrödinger", "Rutherford"],
          respuesta: "Schrödinger",
          explicacion: "Erwin Schrödinger estableció el modelo mecánico-cuántico basado en principios cuánticos.",
        },
      },
      {
        personaje: "🌊",
        texto:
          "Louis de Broglie propuso el principio de dualidad onda-corpúsculo: toda partícula que se mueve lleva asociada una onda. ¡Los electrones tienen comportamiento dual!",
        fondo: "from-pink-600 to-fuchsia-600",
        challenge: {
          pregunta: "¿Qué establece el principio de dualidad onda-corpúsculo?",
          opciones: ["Que las partículas son solo ondas", "Que toda partícula en movimiento lleva asociada una onda", "Que las ondas no existen"],
          respuesta: "Que toda partícula en movimiento lleva asociada una onda",
          explicacion: "De Broglie propuso que las partículas tienen propiedades tanto de onda como de partícula.",
        },
      },
      {
        personaje: "❓",
        texto:
          "Werner Heisenberg enunció el principio de incertidumbre: es imposible conocer a la vez y con exactitud la posición y el momento lineal del electrón. ¡Hay límites a nuestro conocimiento!",
        fondo: "from-fuchsia-600 to-purple-600",
        challenge: {
          pregunta: "¿Qué establece el principio de incertidumbre de Heisenberg?",
          opciones: ["Que podemos conocer todo con exactitud", "Que es imposible conocer posición y momento del electrón simultáneamente", "Que los electrones no existen"],
          respuesta: "Que es imposible conocer posición y momento del electrón simultáneamente",
          explicacion: "Heisenberg demostró que hay un límite fundamental a la precisión de nuestras mediciones.",
        },
      },
      {
        personaje: "☁️",
        texto:
          "El modelo actual describe el átomo con un núcleo (protones y neutrones) y una nube electrónica donde se mueven los electrones en niveles, subniveles y orbitales.",
        fondo: "from-purple-600 to-indigo-600",
        challenge: {
          pregunta: "¿Qué dos partes principales tiene el átomo según el modelo actual?",
          opciones: ["Solo el núcleo", "Núcleo y nube electrónica", "Solo electrones"],
          respuesta: "Núcleo y nube electrónica",
          explicacion: "El átomo tiene un núcleo central y una nube electrónica donde se mueven los electrones.",
        },
      },
      {
        personaje: "📊",
        texto:
          "Los niveles de energía (n) son regiones de la nube electrónica donde los electrones tienen similar energía. En cada nivel puede haber como máximo 2n² electrones.",
        fondo: "from-indigo-600 to-blue-600",
        challenge: {
          pregunta: "¿Cuántos electrones como máximo puede alojar el tercer nivel de energía?",
          opciones: ["6", "18", "32"],
          respuesta: "18",
          explicacion: "Para n=3, el máximo es 2(3)² = 2(9) = 18 electrones.",
        },
      },
      {
        personaje: "🔤",
        texto:
          "Cada nivel tiene subniveles designados por letras: s (2 electrones), p (6 electrones), d (10 electrones), f (14 electrones). ¡Cada subnivel tiene capacidad fija!",
        fondo: "from-blue-600 to-cyan-600",
        challenge: {
          pregunta: "¿Cuántos electrones puede alojar el subnivel p?",
          opciones: ["2", "6", "10"],
          respuesta: "6",
          explicacion: "El subnivel p puede alojar como máximo 6 electrones.",
        },
      },
      {
        personaje: "🎯",
        texto:
          "Los orbitales son regiones donde la probabilidad de encontrar un electrón es máxima. No podemos saber exactamente dónde está, pero sí dónde es más probable encontrarlo.",
        fondo: "from-cyan-600 to-teal-600",
        challenge: {
          pregunta: "¿Qué es un orbital atómico?",
          opciones: ["La trayectoria exacta del electrón", "La región donde es más probable encontrar un electrón", "El núcleo del átomo"],
          respuesta: "La región donde es más probable encontrar un electrón",
          explicacion: "Los orbitales son regiones de probabilidad, no trayectorias exactas.",
        },
      },
      {
        personaje: "🔬",
        texto:
          "La espectroscopia estudia la absorción o emisión de radiación. Cuando las sustancias se calientan, emiten luz que forma un espectro característico de cada elemento.",
        fondo: "from-teal-600 to-green-600",
        challenge: {
          pregunta: "¿Qué estudia la espectroscopia?",
          opciones: ["Solo la masa", "La absorción o emisión de radiación electromagnética", "Solo el color"],
          respuesta: "La absorción o emisión de radiación electromagnética",
          explicacion: "La espectroscopia analiza cómo las sustancias absorben o emiten radiación.",
        },
      },
      {
        personaje: "⚛️",
        texto:
          "Un orbital puede albergar como máximo 2 electrones, que se diferencian por el sentido del giro sobre su eje (espín). Pueden estar apareados o desapareados.",
        fondo: "from-green-600 to-emerald-600",
        challenge: {
          pregunta: "¿Cuántos electrones como máximo puede contener un orbital?",
          opciones: ["1", "2", "4"],
          respuesta: "2",
          explicacion: "Cada orbital puede contener máximo 2 electrones con espines opuestos.",
        },
      },
      {
        personaje: "🌟",
        texto:
          "El modelo mecánico-cuántico es el más preciso actualmente. Describe los electrones como ondas de probabilidad en orbitales, explicando el comportamiento real del átomo.",
        fondo: "from-emerald-600 to-yellow-500",
        challenge: {
          pregunta: "¿Por qué el modelo mecánico-cuántico es más preciso que el de Bohr?",
          opciones: ["Porque es más simple", "Porque describe electrones como ondas de probabilidad en orbitales", "Porque no usa matemáticas"],
          respuesta: "Porque describe electrones como ondas de probabilidad en orbitales",
          explicacion: "El modelo cuántico explica mejor el comportamiento real de los electrones usando probabilidad.",
        },
      },
    ],
  },
  laboratorio: {
    titulo: "Laboratorio del Modelo Atómico Actual",
    introduccion:
      "Domina el modelo mecánico-cuántico del átomo, comprende los principios fundamentales de la mecánica cuántica y analiza cómo los electrones se organizan en niveles, subniveles y orbitales.",
    consejos: [
      "Recuerda: el modelo cuántico describe electrones como ondas de probabilidad.",
      "Cada nivel n puede alojar máximo 2n² electrones.",
      "Los subniveles son: s (2e), p (6e), d (10e), f (14e).",
      "Un orbital puede contener máximo 2 electrones con espines opuestos.",
      "El principio de incertidumbre limita nuestra capacidad de medir posición y momento simultáneamente.",
    ],
    ejercicios: [
      {
        id: 1,
        subtema: "Modelo mecánico-cuántico",
        descripcion: "Comprende el modelo de Schrödinger",
        dificultad: "Básico",
        pregunta: "¿Quién desarrolló el modelo mecánico-cuántico del átomo y en qué se basa?",
        respuestaCorrecta: "Schrödinger, basado en principios de la mecánica cuántica",
        pistas: "Este modelo es más preciso que el de Bohr y se basa en principios cuánticos.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 2,
        subtema: "Dualidad onda-corpúsculo",
        descripcion: "Comprende el principio de de Broglie",
        dificultad: "Intermedio",
        pregunta: "¿Qué establece el principio de dualidad onda-corpúsculo de Louis de Broglie?",
        respuestaCorrecta: "Que toda partícula en movimiento lleva asociada una onda",
        pistas: "Este principio explica que las partículas tienen propiedades tanto de onda como de partícula.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 3,
        subtema: "Principio de incertidumbre",
        descripcion: "Comprende el principio de Heisenberg",
        dificultad: "Intermedio",
        pregunta: "¿Qué establece el principio de incertidumbre de Heisenberg?",
        respuestaCorrecta: "Que es imposible conocer simultáneamente la posición y el momento del electrón con exactitud",
        pistas: "Este principio establece límites fundamentales a la precisión de nuestras mediciones.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 4,
        subtema: "Niveles de energía",
        descripcion: "Calcula la capacidad de los niveles",
        dificultad: "Intermedio",
        pregunta: "¿Cuántos electrones como máximo puede alojar el cuarto nivel de energía (n=4)?",
        respuestaCorrecta: "32",
        pistas: "Usa la fórmula 2n². Para n=4: 2(4)² = 2(16) = 32.",
        placeholder: "Escribe el número...",
      },
      {
        id: 5,
        subtema: "Subniveles de energía",
        descripcion: "Identifica la capacidad de los subniveles",
        dificultad: "Intermedio",
        pregunta: "¿Cuántos electrones puede alojar cada subnivel: s, p, d y f?",
        respuestaCorrecta: "s: 2 electrones, p: 6 electrones, d: 10 electrones, f: 14 electrones",
        pistas: "Cada subnivel tiene una capacidad fija: s=2, p=6, d=10, f=14.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 6,
        subtema: "Orbitales atómicos",
        descripcion: "Comprende qué son los orbitales",
        dificultad: "Intermedio",
        pregunta: "¿Qué es un orbital atómico según el modelo mecánico-cuántico?",
        respuestaCorrecta: "La región de la nube electrónica donde es máxima la probabilidad de encontrar un electrón",
        pistas: "Los orbitales son regiones de probabilidad, no trayectorias exactas.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 7,
        subtema: "Espectroscopia",
        descripcion: "Comprende la espectroscopia",
        dificultad: "Intermedio",
        pregunta: "¿Qué estudia la espectroscopia y cómo se relaciona con los niveles de energía?",
        respuestaCorrecta: "Estudia la absorción o emisión de radiación electromagnética, relacionada con transiciones entre niveles de energía",
        pistas: "La espectroscopia analiza cómo los electrones saltan entre niveles emitiendo o absorbiendo energía.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 8,
        subtema: "Capacidad de orbitales",
        descripcion: "Analiza la capacidad de los orbitales",
        dificultad: "Avanzado",
        pregunta: "¿Cuántos electrones como máximo puede contener un orbital y cómo se diferencian?",
        respuestaCorrecta: "Máximo 2 electrones, que se diferencian por el sentido del giro (espín)",
        pistas: "Los dos electrones en un orbital tienen espines opuestos (apareados).",
        placeholder: "Escribe tu respuesta...",
      },
    ],
  },
};

