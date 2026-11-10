"use client";

import { useEffect, useState } from "react";
import { restaurante } from "@/data/restaurante";

const links = [
  { href: "#historia", label: "Nuestra historia" },
  { href: "#carta", label: "La carta" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#visitanos", label: "Visítanos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-crema/90 shadow-[0_1px_0_rgba(31,23,20,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#inicio" className="group flex items-center gap-3" aria-label="Rincón Chami, inicio">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-vino font-display text-lg font-bold text-crema transition-transform group-hover:rotate-12">
            RC
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-carbon">
            Rincón <span className="italic text-terracota">Chami</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-carbon/80 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="relative transition-colors hover:text-terracota">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={restaurante.telefonoHref}
          className="hidden rounded-full bg-carbon px-5 py-2.5 text-sm font-semibold text-crema transition hover:bg-terracota lg:inline-flex"
        >
          Reservar · {restaurante.telefono}
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-carbon/15 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 h-0.5 w-5 bg-carbon transition-all ${open ? "top-1.5 rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 bg-carbon transition-all ${open ? "top-1.5 -rotate-45" : "top-3"}`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-carbon/10 px-5 pb-6 lg:hidden">
          <ul className="flex flex-col gap-1 pt-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-2xl text-carbon"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={restaurante.telefonoHref}
            className="mt-4 flex justify-center rounded-full bg-terracota px-5 py-3 font-semibold text-crema"
          >
            Llamar y reservar
          </a>
        </div>
      )}
    </header>
  );
}
