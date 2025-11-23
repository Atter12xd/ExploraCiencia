import { Activity } from "lucide-react";

import type { TopicContent } from "./types";

export const aplicacionesIsotoposRadiactivosTopic: TopicContent = {
  id: "aplicaciones-isotopos-radiactivos",
  nombre: "Aplicaciones de Isótopos Radiactivos",
  resumen:
    "Explora las aplicaciones de los isótopos radiactivos en energía, medicina, investigación científica y datación, así como la gestión de residuos radiactivos.",
  progreso: 0,
  color: "from-lime-500 via-green-500 to-emerald-500",
  icono: Activity,
  contexto: {
    etiqueta: "EXPLORAMOS",
    titulo: "Isótopos radiactivos al servicio de la humanidad",
    icono: Activity,
    parrafos: [
      "A partir de los procesos que sufren los isótopos radiactivos, es posible señalar algunas aplicaciones principales: fuente de energía, investigaciones científicas y tratamientos médicos.",
      "En las centrales nucleares se obtienen grandes cantidades de energía aprovechando la fisión de isótopos radiactivos como uranio-235 y plutonio-239. También se fabrican pilas de muy larga duración con plutonio-238 para marcapasos, sondas espaciales y estaciones en lugares de difícil acceso.",
      "Los isótopos radiactivos se usan en investigación para determinar la antigüedad de hallazgos arqueológicos (carbono-14), como rastreadores en reacciones químicas y en investigaciones forenses.",
      "En medicina, los radioisótopos se emplean para diagnosticar enfermedades (medicina nuclear) y para tratar ciertos tipos de cáncer mediante radioterapia. El Instituto Peruano de Energía Nuclear (IPEN) produce radiofármacos para diagnóstico a nivel nacional.",
    ],
    reflexiones: [
      "¿Qué medidas de seguridad se deben tomar al trabajar con radioisótopos?",
      "¿Cómo se gestionan los residuos radiactivos de manera segura?",
      "¿Cuál ha sido el impacto de las aplicaciones nucleares en la sociedad?",
    ],
  },
  subtemas: [
    "Energía nuclear",
    "Pilas de larga duración",
    "Datación con carbono-14",
    "Rastreadores en investigación",
    "Investigación forense",
    "Diagnóstico médico",
    "Radioterapia",
    "Residuos radiactivos",
  ],
  recursos: [
    "Centrales nucleares",
    "Radiofármacos del IPEN",
    "Medicina nuclear",
  ],
  comic: {
    titulo: "Aplicaciones de Isótopos Radiactivos",
    personaje: "Dr. Aplicaciones",
    paneles: [
      {
        personaje: "⚡",
        texto:
          "¡Hola! Soy el Dr. Aplicaciones. Los isótopos radiactivos tienen muchas aplicaciones útiles: energía, medicina, investigación y más. ¡Explorémoslas!",
        fondo: "from-lime-600 to-green-600",
        challenge: {
          pregunta: "¿En qué áreas principales se aplican los isótopos radiactivos?",
          opciones: [
            "Solo medicina",
            "Energía, medicina, investigación científica y datación",
            "Solo energía",
          ],
          respuesta: "Energía, medicina, investigación científica y datación",
          explicacion: "Los radioisótopos tienen aplicaciones en múltiples campos de la ciencia y tecnología.",
        },
      },
      {
        personaje: "🏭",
        texto:
          "En centrales nucleares, la fisión de uranio-235 y plutonio-239 genera grandes cantidades de energía eléctrica. ¡Es una fuente de energía muy potente!",
        fondo: "from-green-600 to-emerald-600",
        challenge: {
          pregunta: "¿Qué isótopos se usan como combustible en centrales nucleares?",
          opciones: ["Carbono-14 y oxígeno-16", "Uranio-235 y plutonio-239", "Solo hidrógeno"],
          respuesta: "Uranio-235 y plutonio-239",
          explicacion: "Estos isótopos experimentan fisión nuclear liberando gran cantidad de energía.",
        },
      },
      {
        personaje: "🔋",
        texto:
          "El plutonio-238 se usa en pilas de muy larga duración para marcapasos, sondas espaciales y estaciones en lugares remotos. ¡Funcionan durante años sin recarga!",
        fondo: "from-emerald-600 to-teal-600",
        challenge: {
          pregunta: "¿Para qué se usa el plutonio-238?",
          opciones: [
            "Solo en centrales nucleares",
            "En pilas de larga duración para marcapasos, sondas espaciales y estaciones remotas",
            "Solo en medicina",
          ],
          respuesta: "En pilas de larga duración para marcapasos, sondas espaciales y estaciones remotas",
          explicacion: "El plutonio-238 genera energía durante años, ideal para dispositivos que no se pueden recargar.",
        },
      },
      {
        personaje: "🕰️",
        texto:
          "El carbono-14 permite determinar la antigüedad de restos arqueológicos. Midiendo cuánto carbono-14 queda, podemos saber hace cuánto tiempo vivió un organismo.",
        fondo: "from-teal-600 to-cyan-600",
        challenge: {
          pregunta: "¿Para qué se usa el carbono-14?",
          opciones: [
            "Solo para energía",
            "Para determinar la antigüedad de restos arqueológicos e históricos",
            "Solo para medicina",
          ],
          respuesta: "Para determinar la antigüedad de restos arqueológicos e históricos",
          explicacion: "La datación con carbono-14 permite conocer la edad de materiales orgánicos antiguos.",
        },
      },
      {
        personaje: "🔬",
        texto:
          "Los radioisótopos se usan como rastreadores en investigación. Permiten seguir exactamente cómo se transforma una sustancia en una reacción química o en organismos vivos.",
        fondo: "from-cyan-600 to-blue-600",
        challenge: {
          pregunta: "¿Qué son los rastreadores radiactivos?",
          opciones: [
            "Solo marcadores",
            "Isótopos radiactivos que permiten seguir el camino de una sustancia en reacciones químicas o organismos",
            "Solo para datación",
          ],
          respuesta: "Isótopos radiactivos que permiten seguir el camino de una sustancia en reacciones químicas o organismos",
          explicacion: "Los rastreadores permiten detectar y seguir sustancias mediante la radiación que emiten.",
        },
      },
      {
        personaje: "🏥",
        texto:
          "En medicina nuclear, los radioisótopos se usan para diagnosticar enfermedades. Se introducen en el paciente y se fijan en el órgano a analizar, permitiendo observarlo.",
        fondo: "from-blue-600 to-indigo-600",
        challenge: {
          pregunta: "¿Cómo se usan los radioisótopos en diagnóstico médico?",
          opciones: [
            "Solo externamente",
            "Se introducen en el paciente y se fijan en el órgano a analizar, emitiendo radiación que permite observarlo",
            "Solo para cirugía",
          ],
          respuesta: "Se introducen en el paciente y se fijan en el órgano a analizar, emitiendo radiación que permite observarlo",
          explicacion: "Los radiofármacos se acumulan en órganos específicos y emiten radiación detectable.",
        },
      },
      {
        personaje: "💊",
        texto:
          "La radioterapia usa radioisótopos como Au-198, Sr-90 o Co-60 para tratar cáncer. La radiación elimina más células cancerosas que normales porque estas se reproducen más rápido.",
        fondo: "from-indigo-600 to-purple-600",
        challenge: {
          pregunta: "¿Cómo funciona la radioterapia contra el cáncer?",
          opciones: [
            "Solo mata células normales",
            "La radiación elimina más células cancerosas porque se reproducen más rápido que las normales",
            "No funciona",
          ],
          respuesta: "La radiación elimina más células cancerosas porque se reproducen más rápido que las normales",
          explicacion: "Las células cancerosas son más sensibles a la radiación por su rápida división.",
        },
      },
      {
        personaje: "🇵🇪",
        texto:
          "El IPEN (Instituto Peruano de Energía Nuclear) produce radiofármacos para diagnóstico de enfermedades en riñones, hígado, corazón, huesos y tiroides a nivel nacional.",
        fondo: "from-purple-600 to-pink-600",
        challenge: {
          pregunta: "¿Qué produce el IPEN y para qué se usa?",
          opciones: [
            "Solo energía",
            "Radiofármacos para diagnóstico de enfermedades en diferentes órganos",
            "Solo bombas",
          ],
          respuesta: "Radiofármacos para diagnóstico de enfermedades en diferentes órganos",
          explicacion: "El IPEN produce radioisótopos médicos para diagnóstico en medicina nuclear.",
        },
      },
      {
        personaje: "⚠️",
        texto:
          "Los residuos radiactivos son muy peligrosos y duraderos. Algunos emiten radiación durante miles de años. Deben almacenarse en lugares seguros, alejados de poblaciones.",
        fondo: "from-pink-600 to-rose-600",
        challenge: {
          pregunta: "¿Por qué los residuos radiactivos son peligrosos?",
          opciones: [
            "Solo por su olor",
            "Porque emiten radiación peligrosa y algunos duran miles de años",
            "Solo porque son pesados",
          ],
          respuesta: "Porque emiten radiación peligrosa y algunos duran miles de años",
          explicacion: "Los residuos radiactivos requieren manejo especial debido a su peligrosidad y duración.",
        },
      },
      {
        personaje: "🌟",
        texto:
          "Los isótopos radiactivos tienen aplicaciones beneficiosas cuando se usan con seguridad: energía, medicina, investigación. ¡Son herramientas poderosas para el bienestar humano!",
        fondo: "from-rose-600 to-red-600",
        challenge: {
          pregunta: "¿Por qué son importantes las aplicaciones de radioisótopos?",
          opciones: [
            "No tienen importancia",
            "Proporcionan energía, permiten diagnósticos médicos, investigación científica y datación cuando se usan con seguridad",
            "Solo son peligrosas",
          ],
          respuesta: "Proporcionan energía, permiten diagnósticos médicos, investigación científica y datación cuando se usan con seguridad",
          explicacion: "Los radioisótopos tienen múltiples aplicaciones beneficiosas cuando se manejan adecuadamente.",
        },
      },
    ],
  },
  laboratorio: {
    titulo: "Laboratorio de Aplicaciones de Radioisótopos",
    introduccion:
      "Domina las aplicaciones de los isótopos radiactivos en energía, medicina, investigación y datación mediante ejercicios interactivos que ponen a prueba tu comprensión de estos usos.",
    consejos: [
      "Recuerda: uranio-235 y plutonio-239 se usan en centrales nucleares.",
      "El plutonio-238 se usa en pilas de larga duración para dispositivos remotos.",
      "El carbono-14 se usa para datar materiales arqueológicos.",
      "Los radioisótopos médicos se usan para diagnóstico y tratamiento de cáncer.",
      "Los residuos radiactivos requieren almacenamiento seguro durante miles de años.",
    ],
    ejercicios: [
      {
        id: 1,
        subtema: "Energía nuclear",
        descripcion: "Comprende el uso de radioisótopos en energía",
        dificultad: "Básico",
        pregunta: "¿Qué isótopos se usan como combustible en centrales nucleares y qué proceso utilizan?",
        respuestaCorrecta: "Uranio-235 y plutonio-239, que experimentan fisión nuclear para generar energía eléctrica",
        pistas: "Estos isótopos se rompen en núcleos más pequeños liberando gran cantidad de energía.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 2,
        subtema: "Pilas de larga duración",
        descripcion: "Comprende las pilas nucleares",
        dificultad: "Intermedio",
        pregunta: "¿Para qué se usa el plutonio-238 y en qué dispositivos se aplica?",
        respuestaCorrecta: "En pilas de muy larga duración para marcapasos, sondas espaciales y estaciones en lugares remotos",
        pistas: "Este isótopo genera energía durante años sin necesidad de recarga.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 3,
        subtema: "Datación con carbono-14",
        descripcion: "Comprende la datación radiactiva",
        dificultad: "Intermedio",
        pregunta: "¿Cómo se usa el carbono-14 para determinar la antigüedad de restos arqueológicos?",
        respuestaCorrecta: "Midiendo la cantidad de carbono-14 que queda en el material, ya que se desintegra a un ritmo conocido (vida media)",
        pistas: "La cantidad de carbono-14 disminuye con el tiempo, permitiendo calcular la edad.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 4,
        subtema: "Rastreadores",
        descripcion: "Comprende el uso de rastreadores",
        dificultad: "Intermedio",
        pregunta: "¿Qué son los rastreadores radiactivos y para qué se usan en investigación?",
        respuestaCorrecta: "Isótopos radiactivos que permiten seguir el camino y transformación de una sustancia en reacciones químicas o organismos vivos",
        pistas: "Permiten detectar y rastrear sustancias mediante la radiación que emiten.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 5,
        subtema: "Diagnóstico médico",
        descripcion: "Comprende el diagnóstico con radioisótopos",
        dificultad: "Intermedio",
        pregunta: "¿Cómo funcionan los radioisótopos en el diagnóstico médico?",
        respuestaCorrecta: "Se introducen en el paciente, se fijan en el órgano a analizar y emiten radiación que permite observarlo y detectar problemas",
        pistas: "Los radiofármacos se acumulan en órganos específicos y emiten radiación detectable.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 6,
        subtema: "Radioterapia",
        descripcion: "Comprende el tratamiento del cáncer",
        dificultad: "Intermedio",
        pregunta: "¿Cómo funciona la radioterapia para tratar el cáncer y qué radioisótopos se usan?",
        respuestaCorrecta: "La radiación elimina más células cancerosas que normales porque las cancerosas se reproducen más rápido. Se usan Au-198, Sr-90 o Co-60",
        pistas: "Las células que se dividen rápidamente son más sensibles a la radiación.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 7,
        subtema: "IPEN y radiofármacos",
        descripcion: "Comprende la producción de radiofármacos",
        dificultad: "Intermedio",
        pregunta: "¿Qué produce el IPEN y para qué órganos se usan los radiofármacos?",
        respuestaCorrecta: "Produce radiofármacos para diagnóstico de enfermedades en riñones, hígado, corazón, huesos y tiroides a nivel nacional",
        pistas: "El IPEN es el Instituto Peruano de Energía Nuclear que produce radioisótopos médicos.",
        placeholder: "Escribe tu respuesta...",
      },
      {
        id: 8,
        subtema: "Residuos radiactivos",
        descripcion: "Comprende la gestión de residuos",
        dificultad: "Avanzado",
        pregunta: "¿Por qué los residuos radiactivos son peligrosos y cómo deben manejarse?",
        respuestaCorrecta: "Son peligrosos porque emiten radiación peligrosa y algunos duran miles de años. Deben almacenarse en lugares seguros, alejados de poblaciones, con medidas de protección",
        pistas: "Los residuos requieren almacenamiento especial debido a su peligrosidad y duración.",
        placeholder: "Escribe tu respuesta...",
      },
    ],
  },
};

