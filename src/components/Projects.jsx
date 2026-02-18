import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "SIMBA Web App",
    category: "Web App",
    description:
      "A web-based inventory and loan management system designed to record inter-department equipment borrowing, featuring scheduling and return reminders to ensure organized tracking and proper item placement.",
    stack: ["React", "Laravel", "Tailwind"],
    role: "Front-End Implementation & UI Design",
    images: [
      "/projects/SIMBA1.png",
      "/projects/SIMBA2.png",
      "/projects/SIMBA3.png",
    ],
  },
  {
    title: "ReUseMart E-Commerce",
    category: "E-Commerce",
    description:
      "A mobile and web-based e-commerce platform for buying and selling pre-owned items in good condition, featuring delivery services to simplify transactions between sellers and buyers.",
    stack: ["Laravel", "Bootstrap", "Flutter", "REST API"],
    role: "Prototype & UX Flow",
    images: [
      "/projects/reusemart1.png",
      "/projects/reusemart2.png",
      "/projects/reusemart3.png",
      "/projects/reusemart4.png",
      "/projects/reusemart5.png",
      "/projects/reusemart6.png",
      "/projects/reusemart7.png",
    ],
  },
  {
    title: "Desain UI/UX MentalKu App",
    category: "UI/UX Design",
    description:
      "A UI/UX design project for a mental health self-care application, created in Figma to help users manage and improve their mental well-being independently.",
    stack: ["Figma"],
    role: "Prototype & UX Flow",
    images: [
      "/projects/mentalku1.png",
      "/projects/mentalku2.png",
      "/projects/mentalku3.png",
    ],
  },

  {
    title: "Math Psychotest",
    category: "Web App",
    description:
      "A web-based psychotest application that helps users assess their mathematical abilities through interactive tests.",
    stack: ["React", "Bootstrap CSS"],
    role: "Prototype & UX Flow",
    images: [
      "/projects/math1.png",
      "/projects/math2.png",
      "/projects/math3.png",
      "/projects/math4.png",
    ],
  },

  {
    title: "Atma Salon [Salon Booking App]",
    category: "Mobile & Web App",
    description:
      "Mobile & web-based reservation platform that makes it easier for customers to book salon services.",
    stack: ["Flutter", "REST API"],
    role: "Prototype & UX Flow",
    images: [
      "/projects/salon1.png",
      "/projects/salon2.png",
      "/projects/salon3.png",
    ],
  },

  {
    title: "Apotek Atma",
    category: "Web App",
    description:
      "A web-based reservation platform that allows customers to purchase medicines online and book pharmacy services more conveniently.",
    stack: ["Laravel", "Bootstrap CSS"],
    role: "Prototype & UX Flow",
    images: [
      "/projects/apotek1.png",
      "/projects/apotek5.png",
      "/projects/apotek3.png",
      "/projects/apotek6.png",
    ],
  },
];

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [activeImageIndex, setActiveImageIndex] = useState(() =>
    Object.fromEntries(projects.map((project) => [project.title, 0]))
  );
  const [activeCategory, setActiveCategory] = useState("All");

  const handleNext = (projectTitle) => {
    setActiveImageIndex((prev) => {
      const project = projects.find((p) => p.title === projectTitle);
      if (!project) return prev;

      const total = project.images.length;
      const current = prev[projectTitle] ?? 0;

      return {
        ...prev,
        [projectTitle]: (current + 1) % total,
      };
    });
  };

  const handlePrev = (projectTitle) => {
    setActiveImageIndex((prev) => {
      const project = projects.find((p) => p.title === projectTitle);
      if (!project) return prev;

      const total = project.images.length;
      const current = prev[projectTitle] ?? 0;

      return {
        ...prev,
        [projectTitle]: (current - 1 + total) % total,
      };
    });
  };

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white py-20"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-72 bg-gradient-to-b from-primary/10 via-transparent to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -left-40 top-40 -z-10 h-80 w-80 rounded-full bg-gradient-to-tr from-sky-100 via-primary/5 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-gradient-to-tl from-amber-100 via-pink-50 to-transparent blur-3xl" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              Projects
            </h2>
            <p className="mt-1 text-sm text-slate-600 max-w-xl">
              Selected work that showcases how I translate ideas into usable,
              visually pleasant, and responsive products.
            </p>
          </div>
          <p className="text-xs text-slate-500">
            More projects coming soon.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap items-center gap-2 text-xs">
          <span className="mr-1 text-[11px] uppercase tracking-[0.18em] text-slate-400">
            Filter by
          </span>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-3 py-1 text-[11px] font-medium transition ${
                activeCategory === category
                  ? "border-slate-900 bg-slate-900 text-slate-50 shadow-sm shadow-slate-400/40"
                  : "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300 hover:bg-slate-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-300 via-amber-400 to-indigo-700 p-[1px] shadow-2xl ">
          <div className="relative rounded-3xl bg-white/95 p-6 md:p-8">
            <div className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-primary/5 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-32 -left-24 h-64 w-64 rounded-full bg-sky-100 blur-3xl" />

            <div className="relative grid gap-6 md:grid-cols-2">
              {filteredProjects.map((project, index) => {
                const currentIndex = activeImageIndex[project.title] ?? 0;

                return (
                  <motion.article
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/60 p-[1px] shadow-sm shadow-slate-200 transition hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/15"
                  >
                    <div className="flex h-full flex-col gap-4 rounded-2xl bg-white/90 p-6">
                      <div className="relative overflow-hidden rounded-xl border border-slate-200/80 bg-slate-900/90">
                        <div className="relative aspect-video w-full">
                          <AnimatePresence mode="wait" initial={false}>
                            <motion.img
                              key={project.images[currentIndex]}
                              src={project.images[currentIndex]}
                              alt={`${project.title} preview`}
                              className="h-full w-full object-cover"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -20 }}
                              transition={{ duration: 0.35 }}
                            />
                          </AnimatePresence>
                        </div>

                        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
                          <button
                            type="button"
                            onClick={() => handlePrev(project.title)}
                            className="pointer-events-auto inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/70 text-slate-100 shadow-sm shadow-black/40 transition hover:bg-slate-800"
                          >
                            ‹
                          </button>
                          <button
                            type="button"
                            onClick={() => handleNext(project.title)}
                            className="pointer-events-auto inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/70 text-slate-100 shadow-sm shadow-black/40 transition hover:bg-slate-800"
                          >
                            ›
                          </button>
                        </div>

                        <div className="pointer-events-none absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                          {project.images.map((img, imgIndex) => (
                            <button
                              key={img}
                              type="button"
                              onClick={() =>
                                setActiveImageIndex((prev) => ({
                                  ...prev,
                                  [project.title]: imgIndex,
                                }))
                              }
                              className={`pointer-events-auto h-2.5 rounded-full transition ${
                                currentIndex === imgIndex
                                  ? "w-5 bg-yellow-300"
                                  : "w-2 bg-white/40 hover:bg-white/70"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col justify-between gap-4">
                        <div>
                          <div className="mb-3 flex items-center justify-between gap-2">
                            <h3 className="text-lg font-semibold text-slate-900">
                              {project.title}
                            </h3>
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary">
                              {project.category}
                            </span>
                          </div>
                          <p className="mb-4 text-sm text-slate-600">
                            {project.description}
                          </p>
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                          <div className="flex flex-wrap gap-2">
                            {project.stack.map((tech) => (
                              <span
                                key={tech}
                                className="rounded-full bg-slate-100 px-3 py-1 font-medium text-slate-700"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <p className="text-[11px] text-slate-500">
                            {project.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
