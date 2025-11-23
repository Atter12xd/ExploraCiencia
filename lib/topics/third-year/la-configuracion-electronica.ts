import { Layers } from "lucide-react";

import type { TopicContent } from "./types";

export const laConfiguracionElectronicaTopic: TopicContent = {
  id: "la-configuracion-electronica",
  nombre: "La Configuración Electrónica",
  resumen:
    "Aprende cómo se distribuyen los electrones en los átomos siguiendo los principios de mínima energía, exclusión de Pauli y máxima multiplicidad de Hund.",
  progreso: 0,
  color: "from-teal-500 via-cyan-500 to-blue-500",
  icono: Layers,
  contexto: {
    etiqueta: "EXPLORAMOS",
    titulo: "La distribución de electrones en el átomo",
    icono: Layers,
    parrafos: [
      "La configuración electrónica en el átomo es el modo como están distribuidos los electrones alrededor del núcleo. La distribución de electrones en los átomos con un estado de energía basal o mínimo se rige por tres principios fundamentales.",
      "El principio de mínima energía establece que los electrones se colocan en el orbital de menor energía disponible. El orden de energía de los orbitales no coincide con el de los niveles, por lo que se aplica la regla de las diagonales o diagrama de Moeller.",
      "El principio de exclusión de Pauli indica que en un átomo no pueden haber dos electrones que tengan los cuatro números cuánticos iguales. En consecuencia, en un orbital solo puede haber dos electrones con espines opuestos.",
      "El principio de máxima multiplicidad de Hund establece que los electrones de un determinado subnivel no se aparean en un orbital hasta que todos los orbitales del subnivel tengan por lo menos un electrón cada uno.",
    ],
    reflexiones: [
      "¿Por qué el orden de energía de los orbitales no coincide con el de los niveles?",
      "¿Qué importancia tiene la regla de Hund en la estabilidad del átomo?",
      "¿Cómo se relacionan los electrones de valencia con las propiedades químicas?",
    ],
  },
  subtemas: [
    "Principio de mínima energía",
    "Regla de las diagonales (diagrama de Moeller)",
    "Principio de exclusión de Pauli",
    "Principio de máxima multiplicidad de Hund",
    "Configuración electrónica",
    "Electrones de valencia",
    "Electrón diferencial",
    "Configuración kernel",
  ],
  recursos: [
    "Diagrama de Moeller",
    "Configuración electrónica interactiva",
    "Electrones de valencia",
  ],
  comic: {
    titulo: "La Configuración Electrónica",
    personaje: "Dr. Configuración",
    paneles: [
      {
        personaje: "📋",
        texto:
          "¡Hola! Soy el Dr. Configuración. La configuración electrónica es cómo se distribuyen los electrones alrededor del núcleo. Se rige por tres principios fundamentales.",
        fondo: "from-teal-600 to-cyan-600",
        challenge: {
          pregunta: "¿Qué es la configuración electrónica?",
          opciones: ["La forma del núcleo", "El modo como están distribuidos los electrones alrededor del núcleo", "Solo el número de protones"],
          respuesta: "El modo como están distribuidos los electrones alrededor del núcleo",
          explicacion: "La configuración electrónica describe cómo se distribuyen los electrones en los orbitales del átomo.",
        },
      },
      {
        personaje: "⚡",
        texto:
          "El principio de mínima energía: los electrones se colocan en el orbital de menor energía disponible. ¡Siempre buscan el estado más estable!",
        fondo: "from-cyan-600 to-blue-600",
        challenge: {
          pregunta: "¿Qué establece el principio de mínima energía?",
          opciones: ["Que los electrones se colocan en orbitales de mayor energía", "Que los electrones se colocan en el orbital de menor energía disponible", "Que los electrones no tienen energía"],
          respuesta: "Que los electrones se colocan en el orbital de menor energía disponible",
          explicacion: "Los electrones siempre ocupan primero los orbitales de menor energía para alcanzar el estado más estable.",
        },
      },
      {
        personaje: "🔀",
        texto:
          "El orden de energía no coincide con el de los niveles. Para recordarlo, usamos la regla de las diagonales o diagrama de Moeller. ¡Sigue las flechas!",
        fondo: "from-blue-600 to-indigo-600",
        challenge: {
          pregunta: "¿Para qué sirve la regla de las diagonales o diagrama de Moeller?",
          opciones: ["Para calcular la masa", "Para recordar el orden de energía de los orbitales", "Para medir el tamaño"],
          respuesta: "Para recordar el orden de energía de los orbitales",
          explicacion: "El diagrama de Moeller ayuda a recordar que el orden de energía no coincide con el orden de los niveles.",
        },
      },
      {
        personaje: "🚫",
        texto:
          "El principio de exclusión de Pauli: en un átomo no pueden haber dos electrones con los cuatro números cuánticos iguales. ¡Cada electrón es único!",
        fondo: "from-indigo-600 to-purple-600",
        challenge: {
          pregunta: "¿Qué establece el principio de exclusión de Pauli?",
          opciones: ["Que todos los electrones son iguales", "Que no pueden haber dos electrones con los cuatro números cuánticos iguales", "Que los electrones no tienen números cuánticos"],
          respuesta: "Que no pueden haber dos electrones con los cuatro números cuánticos iguales",
          explicacion: "Este principio garantiza que cada electrón tenga una identidad única en el átomo.",
        },
      },
      {
        personaje: "🔁",
        texto:
          "En un orbital solo puede haber dos electrones con espines opuestos (+1/2 y -1/2). ¡Es como una habitación que solo admite dos personas!",
        fondo: "from-purple-600 to-pink-600",
        challenge: {
          pregunta: "¿Cuántos electrones como máximo puede contener un orbital y por qué?",
          opciones: ["Uno, porque se repelen", "Dos, con espines opuestos, debido al principio de exclusión de Pauli", "Tres, porque hay espacio"],
          respuesta: "Dos, con espines opuestos, debido al principio de exclusión de Pauli",
          explicacion: "Solo hay dos valores posibles de espín, por lo tanto un orbital puede contener máximo 2 electrones.",
        },
      },
      {
        personaje: "🎯",
        texto:
          "La regla de Hund: los electrones de un subnivel no se aparean hasta que todos los orbitales tengan al menos un electrón. ¡Primero se llenan todos los orbitales!",
        fondo: "from-pink-600 to-rose-600",
        challenge: {
          pregunta: "¿Qué establece el principio de máxima multiplicidad de Hund?",
          opciones: ["Que los electrones se aparean primero", "Que los electrones no se aparean hasta que todos los orbitales del subnivel tengan al menos un electrón", "Que no importa el orden"],
          respuesta: "Que los electrones no se aparean hasta que todos los orbitales del subnivel tengan al menos un electrón",
          explicacion: "La regla de Hund maximiza el número de electrones desapareados, lo que aumenta la estabilidad.",
        },
      },
      {
        personaje: "⭐",
        texto:
          "Los electrones de valencia son los ubicados en el último nivel de energía. Son muy importantes porque determinan las propiedades químicas del elemento.",
        fondo: "from-rose-600 to-red-600",
        challenge: {
          pregunta: "¿Qué son los electrones de valencia?",
          opciones: ["Todos los electrones del átomo", "Los electrones ubicados en el último nivel de energía", "Solo los del núcleo"],
          respuesta: "Los electrones ubicados en el último nivel de energía",
          explicacion: "Los electrones de valencia están en el nivel más externo y participan en las reacciones químicas.",
        },
      },
      {
        personaje: "🔑",
        texto:
          "El electrón diferencial es el que hace que un elemento sea diferente al que está antes y después de él. ¡Es como la huella digital del elemento!",
        fondo: "from-red-600 to-orange-600",
        challenge: {
          pregunta: "¿Qué es el electrón diferencial?",
          opciones: ["Cualquier electrón", "El electrón que hace que un elemento sea diferente al anterior y siguiente", "Solo el del núcleo"],
          respuesta: "El electrón que hace que un elemento sea diferente al anterior y siguiente",
          explicacion: "El electrón diferencial es el último electrón agregado y caracteriza a cada elemento.",
        },
      },
      {
        personaje: "💎",
        texto:
          "Para simplificar, usamos la configuración kernel: reemplazamos los electrones internos por el símbolo del gas noble entre corchetes. Por ejemplo: K = [Ar] 4s¹",
        fondo: "from-orange-600 to-amber-600",
        challenge: {
          pregunta: "¿Qué es la configuración kernel?",
          opciones: ["La configuración completa", "Una forma simplificada que reemplaza electrones internos por el símbolo del gas noble", "Solo los electrones de valencia"],
          respuesta: "Una forma simplificada que reemplaza electrones internos por el símbolo del gas noble",
          explicacion: "La configuración kernel simplifica la escritura usando el gas noble que antecede al elemento.",
        },
      },
      {
        personaje: "🌟",
        texto:
          "Con estos tres principios podemos escribir la configuración electrónica de cualquier elemento. ¡Es como armar un rompecabezas siguiendo reglas precisas!",
        fondo: "from-amber-600 to-yellow-500",
        challenge: {
          pregunta: "¿Cuáles son los tres principios que rigen la configuración electrónica?",
          opciones: [
            "Solo el principio de mínima energía",
            "Principio de mínima energía, principio de exclusión de Pauli y principio de máxima multiplicidad de Hund",
            "Solo la regla de Hund",
          ],
          respuesta: "Principio de mínima energía, principio de exclusión de Pauli y principio de máxima multiplicidad de Hund",
          explicacion: "Estos tres principios trabajan juntos para determinar cómo se distribuyen los electrones en el átomo.",
        },
      },
    ],
  },
  laboratorio: {
    titulo: "Laboratorio de Configuración Electrónica",
    introduccion:
      "Domina la escritura de configuraciones electrónicas aplicando los principios de mínima energía, exclusión de Pauli y máxima multiplicidad de Hund mediante ejercicios interactivos.",
    consejos: [
      "Recuerda: los electrones se colocan en el orbital de menor energía disponible.",
      "Usa el diagrama de Moeller para recordar el orden de energía de los orbitales.",
      "En un orbital solo pueden haber 2 electrones con espines opuestos.",
      "Aplica la regla de Hund: primero llena todos los orbitales con un electrón antes de aparearlos.",
      "Los electrones de valencia están en el último nivel y determinan las propiedades químicas.",
    ],
    ejercicios: [
      {
        id: 1,
        subtema: "Principio de mínima energía",
        descripcion: "Comprende el principio de mínima energía",
        dificultad: "Básico",
        pregunta: "¿Qué establece el principio de mínima energía en la configuración electrónica?",
        respuestaCorrecta: "Que los electrones se colocan en el orbital de menor energía disponible",
        pistas: "Los electrones siempre buscan el estado más estable posible.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 2,
        subtema: "Regla de las diagonales",
        descripcion: "Comprende el diagrama de Moeller",
        dificultad: "Intermedio",
        pregunta: "¿Para qué sirve la regla de las diagonales o diagrama de Moeller?",
        respuestaCorrecta: "Para recordar el orden de energía de los orbitales, que no coincide con el orden de los niveles",
        pistas: "Este diagrama ayuda a recordar que el orbital 4s se llena antes que el 3d.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 3,
        subtema: "Principio de exclusión de Pauli",
        descripcion: "Comprende el principio de exclusión de Pauli",
        dificultad: "Intermedio",
        pregunta: "¿Qué establece el principio de exclusión de Pauli y cuántos electrones puede contener un orbital?",
        respuestaCorrecta: "Establece que no pueden haber dos electrones con los cuatro números cuánticos iguales. Un orbital puede contener máximo 2 electrones con espines opuestos",
        pistas: "Este principio garantiza que cada electrón sea único en el átomo.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 4,
        subtema: "Regla de Hund",
        descripcion: "Comprende el principio de máxima multiplicidad de Hund",
        dificultad: "Intermedio",
        pregunta: "¿Qué establece el principio de máxima multiplicidad de Hund (regla de Hund)?",
        respuestaCorrecta: "Que los electrones de un subnivel no se aparean hasta que todos los orbitales del subnivel tengan al menos un electrón",
        pistas: "Esta regla maximiza el número de electrones desapareados, aumentando la estabilidad.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 5,
        subtema: "Electrones de valencia",
        descripcion: "Identifica electrones de valencia",
        dificultad: "Intermedio",
        pregunta: "¿Qué son los electrones de valencia y por qué son importantes?",
        respuestaCorrecta: "Son los electrones ubicados en el último nivel de energía. Son importantes porque determinan las propiedades químicas del elemento",
        pistas: "Estos electrones participan en las reacciones químicas y en la formación de enlaces.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 6,
        subtema: "Electrón diferencial",
        descripcion: "Comprende el electrón diferencial",
        dificultad: "Intermedio",
        pregunta: "¿Qué es el electrón diferencial?",
        respuestaCorrecta: "El electrón que hace que un elemento sea diferente al que está antes y después de él en la tabla periódica",
        pistas: "Es el último electrón agregado y caracteriza a cada elemento.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 7,
        subtema: "Configuración kernel",
        descripcion: "Usa la configuración kernel",
        dificultad: "Intermedio",
        pregunta: "¿Qué es la configuración kernel y cómo se escribe?",
        respuestaCorrecta: "Una forma simplificada que reemplaza los electrones internos por el símbolo del gas noble entre corchetes. Ejemplo: K = [Ar] 4s¹",
        pistas: "Se usa el gas noble que antecede al elemento en la tabla periódica.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 8,
        subtema: "Aplicación de principios",
        descripcion: "Aplica los tres principios",
        dificultad: "Avanzado",
        pregunta: "Al escribir la configuración electrónica del fósforo (Z=15), ¿cómo se distribuyen los 3 electrones en el subnivel 3p según la regla de Hund?",
        respuestaCorrecta: "Cada uno de los 3 electrones ocupa un orbital diferente (3px, 3py, 3pz) con el mismo espín, antes de aparearse",
        pistas: "La regla de Hund establece que primero se llenan todos los orbitales con un electrón antes de aparearlos.",
        placeholder: "Escribe tu respuesta...",
      },
    ],
  },
};

