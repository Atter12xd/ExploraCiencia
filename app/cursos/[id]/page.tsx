"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Play,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  Search,
  X,
  BookOpen,
} from "lucide-react";
import { thirdYearTopics } from "@/lib/topics/third-year";

export default function CursoDetallePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Cerrar resultados al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node) &&
        searchQuery
      ) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchQuery]);

  const filteredTopics = useMemo(() => {
    if (!searchQuery.trim()) return thirdYearTopics;
    
    const query = searchQuery.toLowerCase().trim();
    return thirdYearTopics.filter(
      (topic) =>
        topic.nombre.toLowerCase().includes(query) ||
        topic.resumen.toLowerCase().includes(query) ||
        topic.subtemas?.some((subtema) =>
          subtema.toLowerCase().includes(query)
        )
    );
  }, [searchQuery]);

  const handleTopicClick = () => {
    setSearchQuery("");
    setShowSearchResults(false);
  };
  return (
    <div className="min-h-screen py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/cursos"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a cursos</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient">
            Tercer Año
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Explora los fundamentos de la química a través de cómics interactivos y experiencias 3D
          </p>
        </motion.div>

        {/* Buscador de Temas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 relative"
          ref={searchRef}
        >
          <div className="relative max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar temas..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSearchResults(true);
                }}
                onFocus={() => setShowSearchResults(true)}
                className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-4 text-white placeholder-gray-400 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all text-sm sm:text-base md:text-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setShowSearchResults(false);
                  }}
                  className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors p-1"
                  aria-label="Limpiar búsqueda"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              )}
            </div>

            {/* Resultados de búsqueda */}
            <AnimatePresence>
              {showSearchResults && searchQuery && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 right-0 mt-2 glass-morphism rounded-xl sm:rounded-2xl border border-white/10 p-3 sm:p-4 max-h-[60vh] sm:max-h-[500px] overflow-y-auto z-50 shadow-2xl"
                >
                  {filteredTopics.length > 0 ? (
                    <div className="space-y-2">
                      <div className="text-xs uppercase tracking-wide text-gray-400 mb-3 px-1 sm:px-2">
                        {filteredTopics.length} tema{filteredTopics.length !== 1 ? "s" : ""} encontrado{filteredTopics.length !== 1 ? "s" : ""}
                      </div>
                      {filteredTopics.map((topic, index) => {
                        const IconComponent = topic.icono;
                        return (
                          <motion.div
                            key={topic.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                          >
                            <Link
                              href={`/comic/${topic.id}`}
                              onClick={handleTopicClick}
                              className="block group"
                            >
                              <div className="flex items-center gap-2 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/30 transition-all cursor-pointer">
                                <div
                                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${topic.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                                >
                                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h3 className="text-sm sm:text-base font-semibold text-white mb-1 group-hover:text-primary transition-colors line-clamp-1">
                                    {topic.nombre}
                                  </h3>
                                  <p className="text-xs sm:text-sm text-gray-400 line-clamp-1 sm:line-clamp-2">
                                    {topic.resumen}
                                  </p>
                                </div>
                                <div className="flex items-center gap-1 sm:gap-2 text-primary opacity-0 sm:group-hover:opacity-100 transition-opacity flex-shrink-0">
                                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                                  <span className="text-xs sm:text-sm font-medium hidden sm:inline">Ir</span>
                                </div>
                              </div>
                            </Link>
                          </motion.div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="text-center py-6 sm:py-8">
                      <div className="text-3xl sm:text-4xl mb-3">🔍</div>
                      <p className="text-sm sm:text-base text-gray-400">No se encontraron temas</p>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        Intenta con otras palabras clave
                      </p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Botón para mostrar todos los temas */}
          {!searchQuery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-4"
            >
              <button
                onClick={() => {
                  setShowSearchResults(!showSearchResults);
                  // Scroll suave hacia los temas cuando se muestran
                  if (!showSearchResults) {
                    setTimeout(() => {
                      document
                        .querySelector('[data-topics-section]')
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }, 100);
                  }
                }}
                className="text-xs sm:text-sm text-gray-400 hover:text-primary transition-colors inline-flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/5"
              >
                <BookOpen className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-center">
                  {showSearchResults
                    ? "Ocultar lista"
                    : `Ver todos (${thirdYearTopics.length})`}
                </span>
              </button>
            </motion.div>
          )}

          {/* Lista completa de temas (cuando no hay búsqueda) */}
          <AnimatePresence>
            {showSearchResults && !searchQuery && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mt-4 sm:mt-6 glass-morphism rounded-xl sm:rounded-2xl border border-white/10 p-4 sm:p-6 max-h-[70vh] sm:max-h-[600px] overflow-y-auto"
              >
                <div className="text-xs sm:text-sm uppercase tracking-wide text-gray-400 mb-3 sm:mb-4">
                  Todos los temas ({thirdYearTopics.length})
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {thirdYearTopics.map((topic, index) => {
                    const IconComponent = topic.icono;
                    return (
                      <motion.div
                        key={topic.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                      >
                        <Link
                          href={`/comic/${topic.id}`}
                          onClick={handleTopicClick}
                          className="block group"
                        >
                          <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-primary/30 transition-all cursor-pointer h-full">
                            <div
                              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br ${topic.color} flex items-center justify-center mb-2 sm:mb-3 group-hover:scale-110 transition-transform`}
                            >
                              <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                            </div>
                            <h3 className="text-xs sm:text-sm font-semibold text-white mb-1 group-hover:text-primary transition-colors line-clamp-2">
                              {topic.nombre}
                            </h3>
                            <p className="text-xs text-gray-400 line-clamp-2 sm:line-clamp-3">
                              {topic.resumen}
                            </p>
                            <div className="mt-2 sm:mt-3 flex items-center gap-1 sm:gap-2 text-primary opacity-0 sm:group-hover:opacity-100 transition-opacity">
                              <Play className="w-3 h-3" />
                              <span className="text-xs font-medium">Explorar</span>
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Temas (se ocultan cuando hay búsqueda activa con resultados) */}
        {(!showSearchResults || !searchQuery) && (
          <div className="space-y-12 sm:space-y-16" data-topics-section>
          {thirdYearTopics.map((topic, index) => {
            const IconComponent = topic.icono;
            const ContextIcon = topic.contexto.icono;
            return (
              <motion.section
                key={topic.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute -right-24 -top-24 h-72 w-72 bg-gradient-to-br from-primary/30 to-secondary/20 blur-3xl" />
                <div className="glass-morphism rounded-3xl p-6 sm:p-8 lg:p-10 relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-primary font-semibold mb-3">
                        <IconComponent className="w-5 h-5" />
                        Tema
                      </div>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                        {topic.nombre}
                      </h2>
                      <p className="text-base sm:text-lg text-gray-300 max-w-2xl">
                        {topic.resumen}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 self-start lg:self-auto">
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white">
                          {topic.progreso}%
                        </div>
                        <div className="text-xs text-gray-400 uppercase tracking-wide">
                          avance estimado
                        </div>
                      </div>
                      <div className={`h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-gradient-to-br ${topic.color} flex items-center justify-center text-white text-xl sm:text-2xl font-bold`}
                      >
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 sm:gap-8 mt-8">
                    <div className="space-y-6">
                      <div className="glass-morphism rounded-2xl p-6 border border-white/10">
                        <div className="flex items-center gap-3 text-sm uppercase tracking-wide text-secondary mb-4">
                          <span className="inline-flex items-center justify-center rounded-full bg-secondary/20 text-secondary px-4 py-1 font-semibold">
                            {topic.contexto.etiqueta}
                          </span>
                          <ContextIcon className="w-5 h-5" />
                          <span>{topic.contexto.titulo}</span>
                        </div>
                        <div className="space-y-3 text-gray-200 leading-relaxed">
                          {topic.contexto.parrafos.map((paragraph, paragraphIndex) => (
                            <p key={paragraphIndex}>{paragraph}</p>
                          ))}
                        </div>
                      </div>

                      {topic.subtemas && topic.subtemas.length > 0 && (
                        <div className="glass-morphism rounded-2xl p-6 border border-white/10">
                          <div className="flex items-center gap-2 text-sm uppercase tracking-wide text-gray-400 mb-4">
                            <CheckCircle2 className="w-4 h-4 text-accent" />
                            Contenido clave
                          </div>
                          <div className="space-y-3 text-gray-200">
                            {topic.subtemas.map((subtema) => (
                              <div key={subtema} className="flex items-start gap-3">
                                <span className="text-accent">•</span>
                                <span>{subtema}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                        <Link
                          href={`/comic/${topic.id}`}
                          className={`flex-1 min-w-[220px] bg-gradient-to-r ${topic.color} text-white px-6 py-4 rounded-xl font-semibold hover:scale-[1.02] transition-transform flex items-center justify-center gap-2`}
                        >
                          <Play className="w-5 h-5" />
                          Ver Cómic Interactivo
                        </Link>
                        <Link
                          href={`/laboratorio/${topic.id}`}
                          className="flex-1 min-w-[220px] bg-white/10 border border-white/10 text-white px-6 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                        >
                          <Sparkles className="w-5 h-5 text-secondary" />
                          Abrir Laboratorio 3D
                        </Link>
                      </div>
                    </div>

                    <div className="glass-morphism rounded-2xl p-6 border border-white/10 h-fit">
                      <h3 className="text-sm uppercase tracking-wide text-secondary mb-3">
                        Ideas para reflexionar
                      </h3>
                      <ul className="space-y-3 text-gray-300 text-sm">
                        {topic.contexto.reflexiones.map((idea) => (
                          <li key={idea} className="flex items-start gap-2">
                            <span className="text-secondary">•</span>
                            <span>{idea}</span>
                          </li>
                        ))}
                      </ul>

                      {topic.recursos && topic.recursos.length > 0 && (
                        <div className="mt-6 border-t border-white/10 pt-4">
                          <div className="flex items-center gap-2 text-sm uppercase tracking-wide text-gray-400 mb-3">
                            <ExternalLink className="w-4 h-4 text-primary" />
                            Recursos sugeridos
                          </div>
                          <ul className="space-y-2 text-gray-200 text-sm">
                            {topic.recursos.map((recurso) => (
                              <li key={recurso} className="flex items-start gap-2">
                                <span className="text-primary">•</span>
                                <span>{recurso}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.section>
            );
          })}
          </div>
        )}

        {/* Course Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto mt-12 sm:mt-16 glass-morphism rounded-2xl p-6 sm:p-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Tu Progreso en Tercer Año
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">
                {Math.round(
                  thirdYearTopics.reduce((acc, topic) => acc + topic.progreso, 0) /
                    thirdYearTopics.length
                )}%
              </div>
              <div className="text-gray-400 text-sm">Progreso Total</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-1">
                {thirdYearTopics.length}
              </div>
              <div className="text-gray-400 text-sm">Cómics Leídos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-1">
                {thirdYearTopics.length}
              </div>
              <div className="text-gray-400 text-sm">Laboratorios</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-500 mb-1">120</div>
              <div className="text-gray-400 text-sm">Puntos Acumulados</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}





