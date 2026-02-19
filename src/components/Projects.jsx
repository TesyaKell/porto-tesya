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
    category: "Mobile & Web App",
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
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-900 py-20 text-slate-100"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-40 h-72 bg-gradient-to-b from-primary/20 via-transparent to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -left-40 top-40 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
            Selected Projects
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            Projects
          </h2>

          <p className="mt-2 max-w-xl text-sm text-slate-300">
            A snapshot of web and mobile interfaces I&apos;ve helped design,
            prototype, and build with focus on usability and business needs.
          </p>
        </motion.div>

        <div className="mb-10 flex flex-wrap gap-2 text-xs">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-3 py-1 transition ${
                activeCategory === category
                  ? "border-primary bg-primary text-white"
                  : "border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project, index) => {
            const currentIndex = activeImageIndex[project.title] ?? 0;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="group rounded-2xl border border-slate-700 bg-slate-800/70 backdrop-blur p-6 transition hover:-translate-y-1 hover:border-primary"
              >
                <div className="relative aspect-video overflow-hidden rounded-xl">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={project.images[currentIndex]}
                      src={project.images[currentIndex]}
                      className="h-full w-full object-cover"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    />
                  </AnimatePresence>

                  <button
                    onClick={() => handlePrev(project.title)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-2"
                  >
                    ‹
                  </button>

                  <button
                    onClick={() => handleNext(project.title)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-2"
                  >
                    ›
                  </button>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-300">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-700 px-3 py-1 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="mt-3 text-xs text-slate-400">
                    {project.role}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
