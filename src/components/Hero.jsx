import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-32 pb-24 text-white"
    >
      <div className="pointer-events-none absolute inset-x-0 top-10 -z-10 mx-auto h-72 max-w-3xl rounded-full bg-primary/20 blur-3xl" />

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 text-center md:flex-row md:items-center md:text-left">
        <div className="flex-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.22em] text-emerald-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            Available for collaboration
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="text-4xl font-extrabold tracking-tight md:text-5xl lg:text-[3.3rem]"
          >
            Hi, I&apos;m Tesya
            <span className="inline-block align-middle text-3xl md:text-4xl">
              
              <span className="ml-2 inline-block animate-bounce">👋</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="max-w-xl text-base text-slate-200/90 md:text-lg"
          >
            Front-End Developer &amp; Informatics Student who loves crafting
            clean, responsive interfaces and smooth user experiences using Laravel, React,
            and modern web technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3 md:gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-yellow-300 px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-yellow-500/40 transition hover:-translate-y-0.5 hover:bg-yellow-200"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-2.5 text-sm font-semibold text-slate-50 shadow-sm transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              Get in touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28 }}
            className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-300/90"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Focused on front-end, UI, business analyst
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
              ✨ Laravel · React · Tailwind · Bootstrap 
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="mt-4 space-y-2 text-xs text-slate-300/90"
          >
            <p className="uppercase tracking-[0.22em] text-[10px] text-slate-400">
              Tech & Tools
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <img
                src="https://cdn.simpleicons.org/laravel/FF2D20"
                alt="Laravel"
                className="h-6 w-6 rounded-full bg-white/5 p-1"
              />
              <img
                src="https://cdn.simpleicons.org/react/61DAFB"
                alt="React"
                className="h-6 w-6 rounded-full bg-white/5 p-1"
              />
              <img
                src="https://cdn.simpleicons.org/tailwindcss/06B6D4"
                alt="Tailwind CSS"
                className="h-6 w-6 rounded-full bg-white/5 p-1"
              />
              <img
                src="https://cdn.simpleicons.org/bootstrap/7952B3"
                alt="Bootstrap"
                className="h-6 w-6 rounded-full bg-white/5 p-1"
              />
              <img
                src="https://cdn.simpleicons.org/php/777BB4"
                alt="PHP"
                className="h-6 w-6 rounded-full bg-white/5 p-1"
              />
              <img
                src="https://cdn.simpleicons.org/html5/E34F26"
                alt="HTML5"
                className="h-6 w-6 rounded-full bg-white/5 p-1"
              />
              <img
                src="https://cdn.simpleicons.org/javascript/F7DF1E"
                alt="JavaScript"
                className="h-6 w-6 rounded-full bg-white/5 p-1"
              />
              <img
                src="https://cdn.simpleicons.org/dart/0175C2"
                alt="Dart"
                className="h-6 w-6 rounded-full bg-white/5 p-1"
              />
              <img
                src="https://cdn.simpleicons.org/flutter/02569B"
                alt="Flutter"
                className="h-6 w-6 rounded-full bg-white/5 p-1"
              />
              <img
                src="https://cdn.simpleicons.org/selenium/43B02A"
                alt="Selenium"
                className="h-6 w-6 rounded-full bg-white/5 p-1"
              />
              <img
                src="https://cdn.simpleicons.org/postman/FF6C37"
                alt="Postman"
                className="h-6 w-6 rounded-full bg-white/5 p-1"
              />
              <img
                src="https://cdn.simpleicons.org/mysql/4479A1"
                alt="SQL / MySQL"
                className="h-6 w-6 rounded-full bg-white/5 p-1"
              />
              <img
                src="https://cdn.simpleicons.org/jupyter/F37626"
                alt="Jupyter"
                className="h-6 w-6 rounded-full bg-white/5 p-1"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15, type: "spring" }}
          className="relative mt-6 flex flex-1 justify-center md:mt-0"
        >
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-yellow-300/50 via-amber-400/40 to-indigo-500/60 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-2xl shadow-black/40">
              <div className="mb-4 flex items-center justify-between text-xs text-slate-300/90">
                <span className="inline-flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-400/90 text-slate-900 text-xs font-semibold">
                    TR
                  </span>
                  <span className="font-medium">Portfolio Snapshot</span>
                </span>
                <span className="rounded-full bg-slate-800/80 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  Front-End
                </span>
              </div>

              <div className="space-y-3 text-left text-sm text-slate-200/90">
                <p>
                  Passionate about building interfaces that feel modern, polished,
                  and easy to use.
                </p>
                <div className="grid grid-cols-3 gap-2 text-[11px]">
                  <div className="rounded-2xl bg-slate-900/80 px-3 py-2">
                    <p className="text-slate-400">Main Stack</p>
                    <p className="font-semibold">Laravel · React · Tailwind</p>
                  </div>
                  <div className="rounded-2xl bg-slate-900/80 px-3 py-2">
                    <p className="text-slate-400">Experience</p>
                    <p className="font-semibold">IT System Support · OOP</p>
                  </div>
                  <div className="rounded-2xl bg-slate-900/80 px-3 py-2">
                    <p className="text-slate-400">Focus</p>
                    <p className="font-semibold">UI · UX · Motion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
