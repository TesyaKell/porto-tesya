import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#about");

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-xl transition-colors duration-300 ${
        scrolled
        ? "border-b border-white bg-slate-950/85 shadow-lg shadow-black/30"
        : "border-b border-transparent bg-white/30"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-yellow-300/80 via-amber-400/70 to-indigo-500/80 p-[2px] shadow-sm shadow-amber-300/40">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950 text-yellow-300 text-lg font-bold">
              T
            </div>
          </div>

          <div className="leading-tight">
            <p className="text-sm font-semibold text-white">
              Tesya Rakhel
            </p>
            <p className="text-[11px] uppercase tracking-[0.2em] text-yellow-400">
              Front-End Developer
            </p>
          </div>
        </a>

        <div className="relative hidden items-center gap-1 rounded-full border border-white/20 bg-white/10 p-1 shadow-sm shadow-slate-100 md:flex">
          {links.map((link) => {
            const isActive = active === link.href;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300
                  ${
                    isActive
                      ? "text-primary"
                      : "text-slate-600 hover:text-primary"
                  }`}
              >
                {isActive && (
                  <span className="absolute inset-0 -z-10 rounded-full bg-white shadow-sm transition-all duration-300" />
                )}

                {link.label}
              </a>
            );
          })}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full border border-slate-200 bg-white p-2 shadow-sm md:hidden"
        >
          <svg
            className="h-5 w-5 text-slate-700"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M4 7H20M4 12H20M4 17H20"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-3">
            {links.map((link) => {
              const isActive = active === link.href;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition
                  ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-slate-700 hover:bg-primary/10"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
