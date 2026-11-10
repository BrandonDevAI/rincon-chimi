"use client";

import Image from "next/image";
import { useState } from "react";
import { carta } from "@/data/restaurante";

const categorias = Object.keys(carta);

export default function Carta() {
  const [activa, setActiva] = useState(categorias[0]);
  const platos = carta[activa];

  return (
    <div>
      <div role="tablist" aria-label="Categorías de la carta" className="flex flex-wrap gap-2">
        {categorias.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={c === activa}
            onClick={() => setActiva(c)}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
              c === activa
                ? "border-aji bg-aji text-carbon"
                : "border-crema/25 text-crema/80 hover:border-crema/60 hover:text-crema"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <ul key={activa} className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {platos.map((p, i) => (
          <li
            key={p.nombre}
            className="group overflow-hidden rounded-3xl bg-[#5c1a1e] ring-1 ring-crema/10 transition hover:-translate-y-1 hover:ring-aji/40"
            style={{ animation: `aparecer .5s ${i * 70}ms both` }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              {p.foto ? (
                <Image
                  src={p.foto}
                  alt={p.nombre}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="textil grid h-full place-items-center bg-terracota text-vino/40">
                  <span className="rounded-full bg-vino px-5 py-2 font-display text-lg italic text-crema">
                    {p.nombre}
                  </span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#5c1a1e] via-transparent to-transparent" />
              {p.tag && (
                <span className="absolute left-4 top-4 rounded-full bg-aji px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-carbon shadow">
                  {p.tag}
                </span>
              )}
              <span className="absolute bottom-3 right-4 font-display text-sm text-crema/70 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="p-6 pt-3">
              <h3 className="font-display text-2xl text-crema">{p.nombre}</h3>
              <p className="mt-2 leading-relaxed text-crema/70">{p.descripcion}</p>
            </div>
          </li>
        ))}
      </ul>
      <style>{`@keyframes aparecer{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}`}</style>
    </div>
  );
}
