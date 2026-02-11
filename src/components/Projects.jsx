import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "SIMBA Web App",
    description:
      "Inventory management system to help track stock, suppliers, and transactions in a more organized way.",
    stack: ["React", "Laravel", "Tailwind"],
    role: "Front-End Implementation & UI Design",
    images: [
      "/projects/simba-1.png",
      "/projects/simba-2.png",
      "/projects/simba-3.png",
    ],
  },
  {
    title: "ReUseMart E-Commerce",
    description:
      "Mobile & web-based reservation platform that makes it easier for customers to book salon services.",
    stack: ["Flutter", "REST API"],
    role: "Prototype & UX Flow",
    images: [
      "/projects/reusemart1.jpg",
      "/projects/reusemart2.jpg",
      "/projects/reusemart3.jpg",
    ],
  },
  {
    title: "Desain UI/UX MentalKu App",
    description:
      "Mobile & web-based reservation platform that makes it easier for customers to book salon services.",
    stack: ["Flutter", "REST API"],
    role: "Prototype & UX Flow",
    images: [
      "/projects/mentalku1.png",
      "/projects/mentalku2.png",
      "/projects/mentalku3.png",
    ],
  },

  {
    title: "Math Psychotest",
    description:
      "Mobile & web-based reservation platform that makes it easier for customers to book salon services.",
    stack: ["Flutter", "REST API"],
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
    description:
      "Mobile & web-based reservation platform that makes it easier for customers to book salon services.",
    stack: ["Flutter", "REST API"],
    role: "Prototype & UX Flow",
    images: [
      "/projects/salon-1.png",
      "/projects/salon-2.png",
      "/projects/salon-3.png",
    ],
  },

  {
    title: "Apotek Atma",
    description:
      "Mobile & web-based reservation platform that makes it easier for customers to book salon services.",
    stack: ["Flutter", "REST API"],
    role: "Prototype & UX Flow",
    images: [
      "/projects/apotek-1.png",
      "/projects/apotek-2.png",
      "/projects/apotek-3.png",
    ],
  },
];

export default function Projects() {
  const [activeImageIndex, setActiveImageIndex] = useState(
    projects.map(() => 0)
  );

  const handleNext = (projectIndex) => {
    setActiveImageIndex((prev) => {
      const copy = [...prev];
      const total = projects[projectIndex].images.length;
      copy[projectIndex] = (copy[projectIndex] + 1) % total;
      return copy;
    });
  };

  const handlePrev = (projectIndex) => {
    setActiveImageIndex((prev) => {
      const copy = [...prev];
      const total = projects[projectIndex].images.length;
      copy[projectIndex] =
        (copy[projectIndex] - 1 + total) % total;
      return copy;
    });
  };

  return (
    <section id="projects" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
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

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/60 p-[1px] shadow-sm shadow-slate-200 transition hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/15"
            >
              <div className="flex h-full flex-col gap-4 rounded-2xl bg-white/90 p-6">
                {/* Image gallery */}
                <div className="relative overflow-hidden rounded-xl border border-slate-200/80 bg-slate-900/90">
                  <div className="relative aspect-video w-full">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.img
                        key={project.images[activeImageIndex[index]]}
                        src={project.images[activeImageIndex[index]]}
                        alt={`${project.title} preview`}
                        className="h-full w-full object-cover"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.35 }}
                      />
                    </AnimatePresence>
                  </div>

                  {/* Controls */}
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
                    <button
                      type="button"
                      onClick={() => handlePrev(index)}
                      className="pointer-events-auto inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/70 text-slate-100 shadow-sm shadow-black/40 transition hover:bg-slate-800"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      onClick={() => handleNext(index)}
                      className="pointer-events-auto inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/70 text-slate-100 shadow-sm shadow-black/40 transition hover:bg-slate-800"
                    >
                      ›
                    </button>
                  </div>

                  {/* Dots */}
                  <div className="pointer-events-none absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                    {project.images.map((img, imgIndex) => (
                      <button
                        key={img}
                        type="button"
                        onClick={() =>
                          setActiveImageIndex((prev) => {
                            const copy = [...prev];
                            copy[index] = imgIndex;
                            return copy;
                          })
                        }
                        className={`pointer-events-auto h-2.5 rounded-full transition ${
                          activeImageIndex[index] === imgIndex
                            ? "w-5 bg-yellow-300"
                            : "w-2 bg-white/40 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Text content */}
                <div className="flex flex-1 flex-col justify-between gap-4">
                  <div>
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <h3 className="text-lg font-semibold text-slate-900">
                        {project.title}
                      </h3>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-[11px] font-medium text-primary">
                        Case Study
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
          ))}
        </div>
      </div>
    </section>
  );
}
