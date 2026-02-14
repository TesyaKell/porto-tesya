import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-500 bg-yellow-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-500">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-blue-300">
            A little bit about
            <span className="text-yellow-300"> who I am</span>
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base text-slate-500">
            Informatics student who loves turning ideas into beautiful, responsive
            interfaces. I enjoy blending clean code with thoughtful design to
            create experiences that feel intuitive and delightful.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-300 via-amber-400 to-indigo-700 p-[1px] shadow-2xl"
        >
          <div className="relative grid gap-10 bg-slate-950/90 p-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.5fr)]">
            <div className="flex flex-col items-center justify-center gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, type: "spring" }}
                whileHover={{ y: -6 }}
                className="relative inline-block"
              >
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-yellow-300/60 via-amber-400/40 to-indigo-500/60 blur-2xl" />
                <div className="relative rounded-3xl bg-slate-900/80 p-3 ring-1 ring-white/10">
                  <img
                    src="/about.png"
                    alt="Profile"
                    className="w-56 h-56 md:w-64 md:h-64 rounded-2xl object-cover shadow-xl shadow-black/40"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-2xl bg-slate-900/90 px-4 py-2 text-xs text-slate-100 shadow-lg shadow-black/40 backdrop-blur"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400/90 text-slate-900 font-semibold text-sm">
                    2+
                  </span>
                  <span className="leading-tight">
                    Completed
                    <br />
                    Front-end projects
                  </span>
                </motion.div>
              </motion.div>

              <div className="grid w-full grid-cols-2 gap-4 text-xs md:text-sm text-slate-200/90">
                <div className="rounded-2xl border border-white/5 bg-slate-900/40 px-4 py-3">
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-50">
                    Focus Area
                  </p>
                  <p className="font-semibold text-white">Front-end Development</p>
                  <p className="font-semibold text-white">Business Analyst</p>
                </div>
                <div className="rounded-2xl border border-white/5 bg-slate-900/40 px-4 py-3">
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
                    Currently Learning
                  </p>
                  <p className="font-semibold">Modern UI & Animations</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-6 text-slate-50">
              <div className="space-y-3">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                  Building experiences, not just interfaces.
                </h3>
                <p className="text-sm md:text-base text-slate-200/90 leading-relaxed">
                  I enjoy working with modern tools like Laravel, React, Bootstrap CSS, and Tailwind CSS to
                  craft responsive layouts, reusable components, and smooth
                  interactions. For me, a good product is not only visually
                  appealing, but also accessible, fast, and pleasant to use.
                </p>
                <p className="text-sm md:text-base text-slate-200/80 leading-relaxed">
                  Outside of coding, I like exploring UI/UX concepts, learning new
                  design patterns, and experimenting with micro-interactions that
                  make an interface feel alive.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2 rounded-2xl border border-white/5 bg-slate-900/50 p-4">
                  <p className="text-[0.7rem] uppercase tracking-[0.19em] text-yellow-300">
                    What I love working with
                  </p>
                  <ul className="space-y-1 text-sm text-slate-200/90">
                    <li>• Component-based front-end architecture</li>
                    <li>• Clean, semantic, and maintainable code</li>
                    <li>• Smooth, subtle motion & transitions</li>
                  </ul>
                </div>
                <div className="space-y-2 rounded-2xl border border-white/5 bg-slate-900/50 p-4">
                  <p className="text-[0.7rem] uppercase tracking-[0.19em] text-yellow-300">
                    Currently focusing on
                  </p>
                  <ul className="space-y-1 text-sm text-slate-200/90">
                    <li>• React ecosystem & best practices</li>
                    <li>• Responsive design for all devices</li>
                    <li>• UX that feels simple & intuitive</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 md:gap-4">
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs md:text-sm font-medium text-slate-50 backdrop-blur">
                  Laravel
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs md:text-sm font-medium text-slate-50 backdrop-blur">
                  React & JSX
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs md:text-sm font-medium text-slate-50 backdrop-blur">
                  Tailwind CSS
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs md:text-sm font-medium text-slate-50 backdrop-blur">
                  Bootstrap CSS
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs md:text-sm font-medium text-slate-50 backdrop-blur">
                  Figma
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs md:text-sm font-medium text-slate-50 backdrop-blur">
                  Framer Motion
                </span>
                <span className="rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs md:text-sm font-medium text-slate-50 backdrop-blur">
                  UI/UX Thinking
                </span>
              </div>

              <div className="mt-2 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-full bg-yellow-300 px-6 py-2.5 text-xs md:text-sm font-semibold text-slate-900 shadow-lg shadow-yellow-500/40 transition hover:-translate-y-0.5 hover:bg-yellow-200"
                >
                  View my projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-blue-500/50 px-6 py-2.5 text-xs md:text-sm font-semibold text-slate-50 shadow-sm transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Let&apos;s collaborate
                </a>
              </div>
            </div>

            <div className="pointer-events-none absolute -top-24 -right-20 h-64 w-64 rounded-full bg-yellow-400/25 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-indigo-900/40 blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
