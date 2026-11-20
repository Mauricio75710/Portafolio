import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Mail,
  Terminal,
  Database,
  Code2,
  Gamepad2,
  BookOpen,
  Globe,
  ChevronRight,
  Menu,
  X,
  Check,
  Copy,
} from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

const PROJECTS = [
  {
    id: "01",
    title: "Mini_DBeaver",
    category: "Herramienta de Base de Datos",
    year: "2026",
    summary:
      "Cliente ligero de gestión y consulta de bases de datos inspirado en DBeaver. Diseñado para ejecutar sentencias SQL, explorar esquemas y visualizar registros con una interfaz limpia y enfocada en la productividad.",
    highlights: [
      "Explorador jerárquico de bases de datos, tablas y estructuras de columnas.",
      "Editor de consultas SQL con ejecución directa y visualización tabular de resultados.",
      "Arquitectura modular orientada al manejo eficiente de conexiones y metadatos.",
    ],
    tech: ["SQL", "Bases de Datos", "Interfaz de Escritorio / Web", "Git"],
    repoUrl: "https://github.com/Mauricio75710/Mini_DBeaver",
    icon: Database,
  },
  {
    id: "02",
    title: "LIFEINVADER",
    category: "Aplicación Web · Red Social",
    year: "2026",
    summary:
      "Plataforma web de red social inspirada en el universo de Grand Theft Auto V. Combina diseño de interfaz moderno con dinámicas interactivas de publicación, perfiles de usuario e interacción en tiempo real.",
    highlights: [
      "Feed dinámico de publicaciones con diseño responsivo y jerarquía visual clara.",
      "Sistema de perfiles, navegación fluida entre vistas e identidad visual coherente.",
      "Maquetación estructurada con separación clara entre lógica, estilos y componentes.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Diseño Web"],
    repoUrl: "https://github.com/65020-dev/Dise-o_Web-RedS",
    icon: Globe,
  },
  {
    id: "03",
    title: "Escapa de Epstein",
    category: "Videojuego · Lógica Interactiva",
    year: "2026",
    summary:
      "Videojuego web de evasión y supervivencia con mecánicas de movimiento ágil, detección de colisiones y progresión de dificultad diseñada para poner a prueba los reflejos del jugador.",
    highlights: [
      "Motor de juego con bucle de renderizado fluido y control de estados.",
      "Sistema de colisiones, puntuación dinámica y escalado progresivo de obstáculos.",
      "Diseño de controles intuitivos y retroalimentación visual inmediata.",
    ],
    tech: ["JavaScript", "Lógica de Juegos", "Canvas / DOM", "CSS"],
    repoUrl: "https://github.com/Mauricio75710/Escapa_de_Beyonce",
    icon: Gamepad2,
  },
  {
    id: "04",
    title: "Guía de Baldur's Gate 3",
    category: "Sitio Web Informativo",
    year: "2026",
    summary:
      "Compendio web editorial sobre Baldur's Gate 3. Organiza mecánicas de juego, clases, razas y consejos estratégicos mediante una arquitectura de información clara y de fácil lectura.",
    highlights: [
      "Estructura de navegación intuitiva para consultar guías y mecánicas sin fricción.",
      "Tipografía cuidada y distribución equilibrada del contenido extenso.",
      "Diseño adaptable a dispositivos móviles y pantallas de escritorio.",
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "Arquitectura de Información"],
    repoUrl: "https://github.com/Mauricio75710/Gu-a-informativa",
    icon: BookOpen,
  },
];

const CAPABILITIES = [
  {
    group: "Lenguajes de Programación",
    items: ["Java", "Python", "C++", "JavaScript (ES6+)", "SQL"],
  },
  {
    group: "Desarrollo Frontend",
    items: ["React", "HTML5 Semántico", "CSS3 Moderno", "Tailwind CSS", "Diseño Responsivo"],
  },
  {
    group: "Software y Datos",
    items: ["Bases de Datos Relacionales", "Programación Orientada a Objetos", "Estructuras de Datos"],
  },
  {
    group: "Flujo de Trabajo",
    items: ["Git & GitHub", "Vite", "Despliegue en Vercel / GitHub Pages", "Código Limpio"],
  },
];

export default function App() {
  const [activeProject, setActiveProject] = useState("01");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);

  const contactEmail = "al075710@uacam.mx";
  const githubProfile = "https://github.com/Mauricio75710";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleProject = (id) => {
    setActiveProject((prev) => (prev === id ? null : id));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-[#F3F4F6] font-sans antialiased">
      {/* Navegación superior */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "bg-[#0B0C0E]/90 backdrop-blur-md border-b border-[#1F2228]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-5xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
          <a
            href="#inicio"
            className="flex items-center gap-2.5 text-sm font-medium tracking-tight text-[#F3F4F6] hover:text-[#D4A373] transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#D4A373]" />
            <span>Mauricio</span>
            <span className="text-[#525866] font-mono text-xs">/ dev</span>
          </a>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-xs tracking-wide uppercase text-[#9CA3AF]">
            <a href="#proyectos" className="hover:text-[#F3F4F6] transition-colors">
              Proyectos
            </a>
            <a href="#perfil" className="hover:text-[#F3F4F6] transition-colors">
              Perfil Técnico
            </a>
            <a href="#contacto" className="hover:text-[#F3F4F6] transition-colors">
              Contacto
            </a>
            <a
              href={githubProfile}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-[#F3F4F6] border border-[#262A32] px-3 py-1.5 rounded hover:border-[#D4A373] hover:text-[#D4A373] transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </nav>

          {/* Botón menú móvil */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú de navegación"
            className="md:hidden p-2 text-[#9CA3AF] hover:text-[#F3F4F6]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Menú desplegable móvil */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0F1115] border-b border-[#1F2228] px-6 py-5 space-y-4">
            <a
              href="#proyectos"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-[#9CA3AF] hover:text-[#F3F4F6]"
            >
              Proyectos
            </a>
            <a
              href="#perfil"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-[#9CA3AF] hover:text-[#F3F4F6]"
            >
              Perfil Técnico
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-[#9CA3AF] hover:text-[#F3F4F6]"
            >
              Contacto
            </a>
            <a
              href={githubProfile}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#D4A373] pt-2"
            >
              <GithubIcon className="w-4 h-4" />
              <span>github.com/Mauricio75710</span>
            </a>
          </div>
        )}
      </header>

      <main className="max-w-5xl mx-auto px-6 sm:px-10">
        {/* Hero */}
        <section id="inicio" className="pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-[#1F2228]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#9CA3AF] mb-6">
              <Terminal className="w-3.5 h-3.5 text-[#D4A373]" />
              <span>PORTAFOLIO DE DESARROLLO · SEMESTRE 2026</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-[3.35rem] leading-[1.12] tracking-tight text-[#F3F4F6] font-normal">
              Sobre mí
            </h1>

            <p className="mt-6 text-base sm:text-lg text-[#9CA3AF] leading-relaxed max-w-2xl font-normal">
              Soy <span className="text-[#F3F4F6]">Mauricio</span>, estudiante de ingeniería y
              desarrollador enfocando cada proyecto en código limpio, arquitectura ordenada y una
              experiencia de usuario directa. Aquí reúno una selección de trabajos desarrollados a
              lo largo del semestre.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 bg-[#F3F4F6] text-[#0B0C0E] text-sm font-medium px-5 py-2.5 rounded hover:bg-[#D4A373] transition-colors"
              >
                <span>Explorar proyectos</span>
                <ChevronRight className="w-4 h-4" />
              </a>

              <a
                href={githubProfile}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-[#F3F4F6] border border-[#262A32] hover:border-[#3E4451] px-5 py-2.5 rounded transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Ver repositorios</span>
              </a>
            </div>
          </div>
        </section>

        {/* Proyectos */}
        <section id="proyectos" className="py-20 sm:py-28 border-b border-[#1F2228]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#D4A373]">
                01 / Selección de Trabajos
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F3F4F6] mt-2 font-normal">
                Proyectos del Semestre
              </h2>
            </div>
            <p className="text-sm text-[#7A8291] max-w-sm">
              Selecciona un proyecto para inspeccionar su enfoque técnico, características y enlace
              al código fuente.
            </p>
          </div>

          <div className="border-t border-[#1F2228]">
            {PROJECTS.map((project) => {
              const isOpen = activeProject === project.id;
              const IconComponent = project.icon;

              return (
                <article
                  key={project.id}
                  className="border-b border-[#1F2228] transition-colors duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleProject(project.id)}
                    aria-expanded={isOpen}
                    className="w-full py-6 sm:py-7 flex items-center justify-between text-left group focus:outline-none"
                  >
                    <div className="flex items-baseline sm:items-center gap-4 sm:gap-8">
                      <span className="font-mono text-xs text-[#525866] group-hover:text-[#D4A373] transition-colors">
                        {project.id}
                      </span>

                      <div>
                        <h3 className="text-lg sm:text-xl font-medium text-[#F3F4F6] group-hover:text-[#D4A373] transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#7A8291] mt-0.5 sm:hidden">
                          {project.category}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <span className="hidden sm:inline-block text-sm text-[#7A8291]">
                        {project.category}
                      </span>
                      <span className="hidden md:inline-block font-mono text-xs text-[#525866]">
                        {project.year}
                      </span>
                      <span
                        className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-200 ${
                          isOpen
                            ? "border-[#D4A373] text-[#D4A373] rotate-90"
                            : "border-[#262A32] text-[#7A8291] group-hover:border-[#525866] group-hover:text-[#F3F4F6]"
                        }`}
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pb-8 pt-1 pl-0 sm:pl-12 pr-2">
                      <div className="bg-[#111317] border border-[#1F2228] rounded-md p-6 sm:p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                          <div className="lg:col-span-7 space-y-5">
                            <div className="flex items-center gap-2.5 text-xs font-mono text-[#D4A373]">
                              <IconComponent className="w-4 h-4" />
                              <span>DESCRIPCIÓN DEL PROYECTO</span>
                            </div>

                            <p className="text-sm sm:text-[15px] text-[#D1D5DB] leading-relaxed">
                              {project.summary}
                            </p>

                            <ul className="space-y-2.5 pt-1">
                              {project.highlights.map((item, idx) => (
                                <li
                                  key={idx}
                                  className="flex items-start gap-2.5 text-xs sm:text-sm text-[#9CA3AF]"
                                >
                                  <span className="text-[#D4A373] mt-1.5 w-1 h-1 rounded-full bg-[#D4A373] shrink-0" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#1F2228] pt-6 lg:pt-0 lg:pl-8">
                            <div>
                              <span className="block font-mono text-[11px] uppercase tracking-wider text-[#7A8291] mb-3">
                                Tecnologías y enfoque
                              </span>
                              <div className="flex flex-wrap gap-2">
                                {project.tech.map((tag) => (
                                  <span
                                    key={tag}
                                    className="font-mono text-xs text-[#D1D5DB] bg-[#181B20] border border-[#262A32] px-2.5 py-1 rounded"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="mt-8 pt-5 border-t border-[#1F2228] flex items-center justify-between">
                              <span className="text-xs text-[#7A8291]">Código fuente</span>
                              <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#F3F4F6] hover:text-[#D4A373] transition-colors"
                              >
                                <GithubIcon className="w-4 h-4" />
                                <span>Abrir en GitHub</span>
                                <ArrowUpRight className="w-4 h-4" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </section>

        {/* Perfil Técnico */}
        <section id="perfil" className="py-20 sm:py-28 border-b border-[#1F2228]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <span className="font-mono text-xs uppercase tracking-widest text-[#D4A373]">
                02 / Perfil Técnico
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F3F4F6] mt-2 font-normal">
                Enfoque y Herramientas
              </h2>
              <p className="mt-4 text-sm sm:text-[15px] text-[#9CA3AF] leading-relaxed">
                Cada desarrollo parte de fundamentos sólidos: separación clara de
                responsabilidades, nombres descriptivos, control de versiones disciplinado e
                interfaces que priorizan la legibilidad sobre el adorno innecesario.
              </p>

              <div className="mt-8 inline-flex items-center gap-3 text-xs font-mono text-[#7A8291] border border-[#1F2228] bg-[#0F1115] px-4 py-3 rounded">
                <Code2 className="w-4 h-4 text-[#D4A373]" />
                <span>Disponible para prácticas profesionales y proyectos</span>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {CAPABILITIES.map((cap) => (
                <div key={cap.group} className="border-t border-[#1F2228] pt-4">
                  <h3 className="font-mono text-xs uppercase tracking-wider text-[#F3F4F6] mb-3.5">
                    {cap.group}
                  </h3>
                  <ul className="space-y-2">
                    {cap.items.map((item) => (
                      <li key={item} className="text-sm text-[#9CA3AF] flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#3E4451]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="py-20 sm:py-28">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#D4A373]">
              03 / Contacto
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#F3F4F6] mt-3 font-normal">
              Hablemos
            </h2>

            <p className="mt-5 text-base sm:text-[17px] text-[#9CA3AF] leading-relaxed">
              Si te interesa conocer más a fondo alguno de mis proyectos, colaborar en un desarrollo
              o ponerte en contacto conmigo por oportunidades profesionales, puedes revisar mi
              actividad directamente en{" "}
              <a
                href={githubProfile}
                target="_blank"
                rel="noreferrer"
                className="text-[#F3F4F6] underline decoration-[#D4A373] underline-offset-4 hover:text-[#D4A373] transition-colors"
              >
                GitHub
              </a>{" "}
              o escribirme un correo a{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="text-[#F3F4F6] underline decoration-[#D4A373] underline-offset-4 hover:text-[#D4A373] transition-colors"
              >
                {contactEmail}
              </a>
              . Estaré encantado de responder.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${contactEmail}`}
                className="inline-flex items-center gap-2 bg-[#F3F4F6] text-[#0B0C0E] text-sm font-medium px-5 py-2.5 rounded hover:bg-[#D4A373] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Enviar correo</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-[#F3F4F6] border border-[#262A32] hover:border-[#3E4451] px-4 py-2.5 rounded transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#D4A373]" />
                    <span className="text-[#F3F4F6]">Correo copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>{contactEmail}</span>
                  </>
                )}
              </button>

              <a
                href={githubProfile}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-[#F3F4F6] border border-[#262A32] hover:border-[#3E4451] px-4 py-2.5 rounded transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Mauricio75710</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#1F2228]">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#525866]">
          <p>© {new Date().getFullYear()} Mauricio · Desarrollado en React</p>
          <p className="font-mono">Diseño editorial oscuro · Código limpio</p>
        </div>
      </footer>
    </div>
  );
}