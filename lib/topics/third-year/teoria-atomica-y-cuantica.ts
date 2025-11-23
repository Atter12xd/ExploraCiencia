import { Brain } from "lucide-react";

import type { TopicContent } from "./types";

export const teoriaAtomicaYCuanticaTopic: TopicContent = {
  id: "teoria-atomica-y-cuantica",
  nombre: "La Teoría Atómica y la Teoría Cuántica",
  resumen:
    "Repasa la evolución de los modelos atómicos desde Demócrito hasta el modelo mecánico cuántico actual, comprendiendo los principios fundamentales de la teoría cuántica.",
  progreso: 0,
  color: "from-violet-500 via-purple-500 to-fuchsia-500",
  icono: Brain,
  contexto: {
    etiqueta: "EXPLORAMOS",
    titulo: "La evolución del pensamiento atómico",
    icono: Brain,
    parrafos: [
      "Aunque todos quisiéramos estar ubicados lo más cerca posible del escenario durante un concierto, solo unos pocos tienen ese privilegio, ya que existe una distribución determinada para quienes asisten. Si tomamos en cuenta que el lugar donde se realiza el concierto alberga personas, de la misma manera que un átomo contiene electrones, podríamos hacernos una idea del modelo mecánico cuántico.",
      "La evolución de los modelos atómicos comenzó con Demócrito (460-370 a.C.), quien sostenía que toda la materia estaba constituida por componentes llamados átomos. Dalton (1803) fue el primero en aplicar el concepto de átomo basándose en experimentos.",
      "Thomson (1898) descubrió los electrones y propuso el modelo del pudín de pasas. Rutherford (1911) descubrió el núcleo atómico. Bohr (1913) propuso órbitas estacionarias con niveles de energía.",
      "La era cuántica comenzó con De Broglie (1924) y su principio de dualidad, Heisenberg (1927) con el principio de incertidumbre, y Schrödinger (1926) con su modelo de orbitales. El modelo mecánico cuántico actual describe electrones en orbitales, regiones de probabilidad en la nube electrónica.",
    ],
    reflexiones: [
      "¿Por qué el modelo mecánico cuántico es más preciso que los modelos anteriores?",
      "¿Qué significa que los electrones tengan comportamiento dual (onda-partícula)?",
      "¿Cómo afecta el principio de incertidumbre a nuestra capacidad de medir los electrones?",
    ],
  },
  subtemas: [
    "Modelo de Demócrito",
    "Modelo de Dalton",
    "Modelo de Thomson",
    "Modelo de Rutherford",
    "Modelo de Bohr",
    "Principio de dualidad de De Broglie",
    "Principio de incertidumbre de Heisenberg",
    "Modelo de Schrödinger",
    "Modelo mecánico cuántico actual",
  ],
  recursos: [
    "Evolución de modelos atómicos",
    "Teoría cuántica",
    "Microscopio electrónico",
  ],
  comic: {
    titulo: "La Teoría Atómica y la Teoría Cuántica",
    personaje: "Dr. Evolución",
    paneles: [
      {
        personaje: "🏛️",
        texto:
          "¡Hola! Soy el Dr. Evolución. La teoría atómica ha evolucionado mucho. Empezó con Demócrito (460-370 a.C.), quien propuso que la materia estaba formada por átomos indivisibles.",
        fondo: "from-violet-600 to-purple-600",
        challenge: {
          pregunta: "¿Quién fue el primer filósofo en proponer la idea de los átomos?",
          opciones: ["Dalton", "Demócrito", "Thomson"],
          respuesta: "Demócrito",
          explicacion: "Demócrito, filósofo griego del siglo V a.C., fue el primero en proponer la idea de átomos.",
        },
      },
      {
        personaje: "🔬",
        texto:
          "Dalton (1803) fue el primero en aplicar el concepto de átomo basándose en experimentos. Propuso que toda la materia está constituida por átomos indivisibles e indestructibles.",
        fondo: "from-purple-600 to-fuchsia-600",
        challenge: {
          pregunta: "¿Qué aportó Dalton a la teoría atómica?",
          opciones: [
            "Solo ideas filosóficas",
            "Fue el primero en aplicar el concepto de átomo basándose en experimentos de laboratorio",
            "Descubrió los electrones",
          ],
          respuesta: "Fue el primero en aplicar el concepto de átomo basándose en experimentos de laboratorio",
          explicacion: "Dalton fundamentó la teoría atómica con evidencia experimental.",
        },
      },
      {
        personaje: "🍰",
        texto:
          "Thomson (1898) descubrió los electrones usando rayos catódicos. Propuso el modelo del 'pudín de pasas': una masa positiva con electrones insertados en ella.",
        fondo: "from-fuchsia-600 to-pink-600",
        challenge: {
          pregunta: "¿Qué descubrió Thomson y qué modelo propuso?",
          opciones: [
            "El núcleo, modelo planetario",
            "Los electrones, modelo del pudín de pasas",
            "Los neutrones, modelo esférico",
          ],
          respuesta: "Los electrones, modelo del pudín de pasas",
          explicacion: "Thomson descubrió los electrones y propuso el modelo del pudín de pasas.",
        },
      },
      {
        personaje: "⚛️",
        texto:
          "Rutherford (1911) descubrió el núcleo atómico bombardeando láminas de oro con rayos alfa. El átomo tiene núcleo pequeño (protones) y corteza con electrones girando alrededor.",
        fondo: "from-pink-600 to-rose-600",
        challenge: {
          pregunta: "¿Qué descubrió Rutherford y cómo lo hizo?",
          opciones: [
            "Los electrones, con rayos X",
            "El núcleo atómico, bombardeando oro con rayos alfa",
            "Los neutrones, con electricidad",
          ],
          respuesta: "El núcleo atómico, bombardeando oro con rayos alfa",
          explicacion: "Rutherford descubrió el núcleo mediante su famoso experimento con láminas de oro.",
        },
      },
      {
        personaje: "🌌",
        texto:
          "Bohr (1913) propuso órbitas estacionarias. Los electrones ocupan niveles de energía a distancias fijas del núcleo. Mientras no cambien de órbita, su energía no varía.",
        fondo: "from-rose-600 to-red-600",
        challenge: {
          pregunta: "¿Qué propuso Bohr sobre las órbitas de los electrones?",
          opciones: [
            "Que pueden estar a cualquier distancia",
            "Que ocupan órbitas estacionarias a distancias fijas (niveles de energía)",
            "Que no giran",
          ],
          respuesta: "Que ocupan órbitas estacionarias a distancias fijas (niveles de energía)",
          explicacion: "Bohr propuso que los electrones solo pueden estar en ciertas órbitas permitidas.",
        },
      },
      {
        personaje: "🌊",
        texto:
          "De Broglie (1924) postuló el principio de dualidad: los electrones actúan como ondas y como partículas. Esto permitió crear el microscopio electrónico.",
        fondo: "from-red-600 to-orange-600",
        challenge: {
          pregunta: "¿Qué establece el principio de dualidad de De Broglie?",
          opciones: [
            "Que los electrones son solo partículas",
            "Que los electrones tienen comportamiento dual: actúan como ondas y como partículas",
            "Que los electrones son solo ondas",
          ],
          respuesta: "Que los electrones tienen comportamiento dual: actúan como ondas y como partículas",
          explicacion: "De Broglie propuso que las partículas tienen propiedades tanto de onda como de partícula.",
        },
      },
      {
        personaje: "❓",
        texto:
          "Heisenberg (1927) estableció el principio de incertidumbre: es imposible conocer simultáneamente la posición y velocidad de un electrón con precisión absoluta.",
        fondo: "from-orange-600 to-amber-600",
        challenge: {
          pregunta: "¿Qué establece el principio de incertidumbre de Heisenberg?",
          opciones: [
            "Que podemos conocer todo con exactitud",
            "Que es imposible conocer simultáneamente la posición y velocidad de un electrón con precisión",
            "Que los electrones no existen",
          ],
          respuesta: "Que es imposible conocer simultáneamente la posición y velocidad de un electrón con precisión",
          explicacion: "Heisenberg demostró que hay límites fundamentales a la precisión de nuestras mediciones.",
        },
      },
      {
        personaje: "☁️",
        texto:
          "Schrödinger (1926) sustituyó las trayectorias definidas por orbitales: regiones donde la probabilidad de encontrar un electrón es muy alta. ¡No podemos saber exactamente dónde está!",
        fondo: "from-amber-600 to-yellow-500",
        challenge: {
          pregunta: "¿Qué propuso Schrödinger sobre los electrones?",
          opciones: [
            "Trayectorias exactas",
            "Orbitales: regiones donde la probabilidad de encontrar un electrón es muy alta",
            "Que están quietos",
          ],
          respuesta: "Orbitales: regiones donde la probabilidad de encontrar un electrón es muy alta",
          explicacion: "Schrödinger propuso que los electrones se describen como ondas de probabilidad en orbitales.",
        },
      },
      {
        personaje: "🌟",
        texto:
          "El modelo mecánico cuántico actual tiene dos zonas: el núcleo (protones y neutrones) y la nube electrónica (electrones en orbitales dentro de niveles y subniveles de energía).",
        fondo: "from-yellow-500 to-lime-500",
        challenge: {
          pregunta: "¿Qué dos zonas tiene el átomo según el modelo mecánico cuántico actual?",
          opciones: [
            "Solo el núcleo",
            "El núcleo (protones y neutrones) y la nube electrónica (electrones en orbitales)",
            "Solo electrones",
          ],
          respuesta: "El núcleo (protones y neutrones) y la nube electrónica (electrones en orbitales)",
          explicacion: "El modelo actual describe el átomo con núcleo central y nube electrónica con orbitales.",
        },
      },
      {
        personaje: "🎯",
        texto:
          "El modelo mecánico cuántico es el más preciso porque describe los electrones como ondas de probabilidad en orbitales, explicando el comportamiento real del átomo. ¡Es la mejor descripción que tenemos!",
        fondo: "from-lime-500 to-green-500",
        challenge: {
          pregunta: "¿Por qué el modelo mecánico cuántico es el más preciso?",
          opciones: [
            "Porque es más simple",
            "Porque describe electrones como ondas de probabilidad en orbitales, explicando el comportamiento real",
            "Porque no usa matemáticas",
          ],
          respuesta: "Porque describe electrones como ondas de probabilidad en orbitales, explicando el comportamiento real",
          explicacion: "El modelo cuántico explica mejor el comportamiento de los electrones usando probabilidad y mecánica cuántica.",
        },
      },
    ],
  },
  laboratorio: {
    titulo: "Laboratorio de Teoría Atómica y Cuántica",
    introduccion:
      "Domina la evolución de los modelos atómicos desde Demócrito hasta el modelo mecánico cuántico actual mediante ejercicios interactivos que ponen a prueba tu comprensión de esta evolución.",
    consejos: [
      "Recuerda: Demócrito propuso la idea filosófica, Dalton la fundamentó experimentalmente.",
      "Thomson descubrió los electrones, Rutherford el núcleo, Bohr las órbitas estacionarias.",
      "De Broglie propuso la dualidad onda-partícula.",
      "Heisenberg estableció el principio de incertidumbre.",
      "Schrödinger describió los electrones como ondas de probabilidad en orbitales.",
    ],
    ejercicios: [
      {
        id: 1,
        subtema: "Modelo de Demócrito",
        descripcion: "Comprende las ideas de Demócrito",
        dificultad: "Básico",
        pregunta: "¿Qué propuso Demócrito sobre la materia?",
        respuestaCorrecta: "Que toda la materia estaba constituida por componentes llamados átomos, partículas indivisibles",
        pistas: "Fue un filósofo griego del siglo V a.C. que propuso la idea filosófica de los átomos.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 2,
        subtema: "Modelo de Dalton",
        descripcion: "Comprende el modelo de Dalton",
        dificultad: "Básico",
        pregunta: "¿Qué aportó Dalton a la teoría atómica en 1803?",
        respuestaCorrecta: "Fue el primero en aplicar el concepto de átomo basándose en experimentos de laboratorio, proponiendo que toda la materia está constituida por átomos",
        pistas: "Dalton fundamentó la teoría atómica con evidencia experimental.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 3,
        subtema: "Modelo de Thomson",
        descripcion: "Comprende el modelo de Thomson",
        dificultad: "Intermedio",
        pregunta: "¿Qué descubrió Thomson y qué modelo atómico propuso?",
        respuestaCorrecta: "Descubrió los electrones usando rayos catódicos y propuso el modelo del pudín de pasas (masa positiva con electrones insertados)",
        pistas: "Thomson descubrió partículas con carga negativa que llamó electrones.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 4,
        subtema: "Modelo de Rutherford",
        descripcion: "Comprende el modelo de Rutherford",
        dificultad: "Intermedio",
        pregunta: "¿Qué descubrió Rutherford y cómo describió la estructura del átomo?",
        respuestaCorrecta: "Descubrió el núcleo atómico bombardeando oro con rayos alfa. Describió el átomo con núcleo pequeño (protones) y corteza con electrones girando alrededor",
        pistas: "Rutherford realizó el famoso experimento de la lámina de oro.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 5,
        subtema: "Modelo de Bohr",
        descripcion: "Comprende el modelo de Bohr",
        dificultad: "Intermedio",
        pregunta: "¿Qué propuso Bohr sobre las órbitas de los electrones?",
        respuestaCorrecta: "Que los electrones ocupan órbitas estacionarias a distancias fijas del núcleo (niveles de energía). Mientras no cambien de órbita, su energía no varía",
        pistas: "Bohr limitó las órbitas a ciertos niveles permitidos con energía fija.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 6,
        subtema: "Principio de dualidad",
        descripcion: "Comprende el principio de De Broglie",
        dificultad: "Intermedio",
        pregunta: "¿Qué establece el principio de dualidad de De Broglie y qué aplicación tiene?",
        respuestaCorrecta: "Que los electrones tienen comportamiento dual: actúan como ondas y como partículas. Esto permitió crear el microscopio electrónico",
        pistas: "Este principio explica que las partículas tienen propiedades tanto de onda como de partícula.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 7,
        subtema: "Principio de incertidumbre",
        descripcion: "Comprende el principio de Heisenberg",
        dificultad: "Intermedio",
        pregunta: "¿Qué establece el principio de incertidumbre de Heisenberg?",
        respuestaCorrecta: "Que es imposible conocer simultáneamente la posición y velocidad (momento) de un electrón con precisión absoluta",
        pistas: "Este principio establece límites fundamentales a la precisión de nuestras mediciones.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 8,
        subtema: "Modelo mecánico cuántico",
        descripcion: "Comprende el modelo actual",
        dificultad: "Avanzado",
        pregunta: "¿Qué propuso Schrödinger y cómo describe el modelo mecánico cuántico actual la estructura del átomo?",
        respuestaCorrecta: "Schrödinger sustituyó las trayectorias por orbitales (regiones de probabilidad). El modelo actual describe el átomo con núcleo (protones y neutrones) y nube electrónica (electrones en orbitales dentro de niveles y subniveles)",
        pistas: "El modelo cuántico describe electrones como ondas de probabilidad en orbitales.",
        placeholder: "Escribe tu respuesta...",
      },
    ],
  },
};

