import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <div className="relative overflow-hidden bg-slate-950">
      
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-40 w-[600px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      </div>

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="mx-auto h-[2px] w-full max-w-5xl origin-left 
        bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
      />

      <div className="relative flex justify-center gap-4 py-8">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.2 }}
            className="h-2 w-2 rounded-full bg-yellow-400/80"
          />
        ))}
      </div>
    <div className="absolute bottom-6 left-1/2 h-24 w-[500px] -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />
      <svg
        viewBox="0 0 1440 120"
        className="block w-full"
        xmlns="http://www.w3.org/2000/svg"
        >
        <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.25" />
            </linearGradient>
        </defs>

        <path
            fill="url(#waveGradient)"
            d="M0,72C120,96,240,96,360,80C480,64,600,32,720,32C840,32,960,64,1080,80C1200,96,1320,96,1440,72L1440,120L0,120Z"
        />
        </svg>
    </div>
  );
}
