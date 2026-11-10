import Navbar from "@/components/Navbar";
import Carta from "@/components/Carta";
import Image from "next/image";
import { restaurante as r, resenas, creditosFotos } from "@/data/restaurante";

const galeria = [
  { src: "/fotos/lomo-saltado.webp", alt: "Lomo saltado", clase: "md:col-span-2 md:row-span-2" },
  { src: "/fotos/causa.webp", alt: "Causa limeña", clase: "" },
  { src: "/fotos/chicha-morada.webp", alt: "Chicha morada", clase: "md:row-span-2" },
  { src: "/fotos/papa-huancaina.webp", alt: "Papa a la huancaína", clase: "" },
  { src: "/fotos/tacu-tacu.webp", alt: "Tacu tacu a lo pobre", clase: "md:col-span-2" },
  { src: "/fotos/mazamorra.webp", alt: "Mazamorra morada", clase: "" },
];

const palabras = ["Ají de gallina", "Lomo saltado", "Tacu tacu", "Papa a la huancaína", "Tallarines verdes", "Cabrito", "Chicha morada"];

function Estrellas({ valor }: { valor: number }) {
  return (
    <span className="flex gap-0.5" aria-label={`${valor} de 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.min(Math.max(valor - i, 0), 1);
        return (
          <svg key={i} viewBox="0 0 20 20" className="h-4 w-4">
            <defs>
              <linearGradient id={`s${i}`}>
                <stop offset={`${fill * 100}%`} stopColor="currentColor" />
                <stop offset={`${fill * 100}%`} stopColor="currentColor" stopOpacity=".25" />
              </linearGradient>
            </defs>
            <path fill={`url(#s${i})`} d="M10 1.5l2.6 5.5 6 .7-4.4 4.1 1.2 5.9L10 14.8 4.6 17.7l1.2-5.9L1.4 7.7l6-.7z" />
          </svg>
        );
      })}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="inicio">
        {/* HERO */}
        <section className="grano relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
          <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-aji/25 blur-3xl" />
          <div className="pointer-events-none absolute -left-32 bottom-0 h-[380px] w-[380px] rounded-full bg-terracota/15 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.1fr_1fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-carbon/15 bg-white/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-carbon/70">
                <span className="h-1.5 w-1.5 rounded-full bg-terracota" />
                Miraflores · Lima · desde hace {r.anios} años
              </p>
              <h1 className="mt-6 font-display text-[clamp(3rem,8vw,6.5rem)] font-semibold leading-[0.92] tracking-tight text-carbon">
                El sabor criollo
                <br />
                <span className="italic text-terracota">de siempre</span>,
                <br />
                en tu rincón.
              </h1>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-carbon/70">
                Cocina casera peruana, porciones generosas y la sazón de toda la vida. Una tradición miraflorina
                a pasos del Parque Kennedy, donde comen los limeños de verdad.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#carta" className="rounded-full bg-terracota px-7 py-3.5 font-semibold text-crema shadow-lg shadow-terracota/25 transition hover:-translate-y-0.5 hover:bg-vino">
                  Ver la carta
                </a>
                <a href={r.mapsUrl} target="_blank" rel="noreferrer" className="rounded-full border border-carbon/20 px-7 py-3.5 font-semibold text-carbon transition hover:border-carbon hover:bg-carbon hover:text-crema">
                  Cómo llegar →
                </a>
              </div>

              <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-carbon/10 pt-6">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-carbon/50">Tripadvisor</dt>
                  <dd className="mt-1 flex items-center gap-2 font-display text-2xl font-semibold">
                    {r.rating}
                    <span className="text-aji"><Estrellas valor={r.rating} /></span>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-carbon/50">Reseñas</dt>
                  <dd className="mt-1 font-display text-2xl font-semibold">{r.resenas}+</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-carbon/50">Tradición</dt>
                  <dd className="mt-1 font-display text-2xl font-semibold">{r.anios} años</dd>
                </div>
              </dl>
            </div>

            <div className="relative mx-auto w-full max-w-[520px]">
              {/* anillo de texto giratorio */}
              <svg viewBox="0 0 500 500" className="absolute inset-0 h-full w-full animate-[spin_40s_linear_infinite] motion-reduce:animate-none" aria-hidden>
                <defs>
                  <path id="circulo" d="M250,250 m-232,0 a232,232 0 1,1 464,0 a232,232 0 1,1 -464,0" />
                </defs>
                <text className="fill-vino font-display text-[19px] font-semibold uppercase tracking-[0.42em]">
                  <textPath href="#circulo">Cocina casera peruana · Comida criolla · Rincón Chami · Miraflores ·</textPath>
                </text>
              </svg>
              <div className="flotar p-[11%]">
                <div className="relative aspect-square overflow-hidden rounded-full shadow-2xl shadow-vino/30 ring-8 ring-crema">
                  <Image
                    src="/fotos/aji-de-gallina.webp"
                    alt="Plato de ají de gallina con arroz, huevo y aceituna"
                    fill
                    priority
                    sizes="(min-width:1024px) 420px, 80vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="absolute right-2 top-[14%] grid h-24 w-24 place-items-center overflow-hidden rounded-full shadow-xl ring-4 ring-crema md:h-28 md:w-28">
                <Image src="/fotos/chicha-morada.webp" alt="Vaso de chicha morada" fill sizes="112px" className="object-cover" />
              </div>
              <div className="absolute -bottom-2 left-0 rotate-[-6deg] rounded-2xl bg-carbon px-5 py-4 text-crema shadow-xl md:left-4">
                <p className="text-[11px] uppercase tracking-widest text-aji">El favorito de la casa</p>
                <p className="font-display text-xl">Ají de gallina</p>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUESINA */}
        <div className="overflow-hidden border-y border-carbon bg-aji py-4" aria-hidden>
          <div className="marquee flex w-max gap-10 whitespace-nowrap font-display text-2xl italic text-carbon md:text-3xl">
            {[...palabras, ...palabras, ...palabras, ...palabras].map((p, i) => (
              <span key={i} className="flex items-center gap-10">
                {p}
                <span className="not-italic text-terracota">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* HISTORIA */}
        <section id="historia" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <div className="textil rounded-[2.75rem] bg-terracota p-2 text-vino/40">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem]">
                <Image
                  src="/fotos/cabrito.webp"
                  alt="Seco de cabrito con frejoles y arroz"
                  fill
                  sizes="(min-width:1024px) 600px, 100vw"
                  className="object-cover"
                />
                <div className="relative flex h-full flex-col justify-between bg-gradient-to-t from-vino via-vino/50 to-transparent p-10 text-crema">
                  <span className="self-start rounded-full bg-crema/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest backdrop-blur">
                    Calle Esperanza 154
                  </span>
                  <div>
                    <p className="font-display text-[7rem] leading-none font-semibold text-aji md:text-[9rem]">{r.anios}</p>
                    <p className="mt-2 max-w-xs font-display text-2xl leading-snug">años sirviendo la mesa limeña en Miraflores.</p>
                  </div>
                </div>
              </div>
              </div>
              <div className="absolute -top-6 right-2 grid h-28 w-28 rotate-12 place-items-center rounded-full bg-aji text-center font-display text-sm font-semibold leading-tight text-carbon shadow-lg md:-right-8">
                Hecho
                <br />
                en casa
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-terracota">Nuestra historia</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Un rincón de barrio que se volvió <span className="italic text-terracota">tradición</span>.
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-carbon/70">
                <p>
                  Hace más de cuatro décadas abrimos nuestras puertas en la Calle Esperanza, a un par de cuadras del
                  Óvalo de Miraflores, con una idea simple: cocinar como se cocina en casa.
                </p>
                <p>
                  Sin pretensiones y con mucho cariño, servimos los clásicos de la comida criolla limeña: guisos de
                  olla, saltados al fuego y postres de la abuela. Por eso aquí encontrarás, sobre todo, a vecinos y
                  familias que vuelven una y otra vez.
                </p>
              </div>

              <ul className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ["Casero", "Recetas de toda la vida"],
                  ["Generoso", "Porciones que llenan"],
                  ["Rápido", "Atención ágil y cálida"],
                ].map(([t, d]) => (
                  <li key={t} className="rounded-2xl border border-carbon/10 bg-white/60 p-5">
                    <p className="font-display text-xl font-semibold">{t}</p>
                    <p className="mt-1 text-sm text-carbon/60">{d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CARTA */}
        <section id="carta" className="grano relative overflow-hidden bg-vino py-24 text-crema md:py-32">
          <div className="textil pointer-events-none absolute inset-x-0 top-0 h-3 text-aji" />
          <div className="relative mx-auto max-w-7xl px-5 md:px-8">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-aji">La carta</p>
                <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                  Los clásicos que nos <span className="italic text-aji">hicieron famosos</span>.
                </h2>
              </div>
              <p className="max-w-sm text-crema/70">
                Platos a la carta desde <strong className="text-crema">{r.precio}</strong> aprox. También servimos
                desayunos. Pregunta por el menú del día.
              </p>
            </div>
            <div className="mt-12">
              <Carta />
            </div>
          </div>
        </section>

        {/* GALERÍA */}
        <section aria-label="Galería de platos" className="mx-auto max-w-7xl px-5 pt-24 md:px-8 md:pt-32">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
              Se come con los <span className="italic text-terracota">ojos</span>.
            </h2>
            <p className="max-w-xs text-carbon/60">Sabores que llegan a la mesa calientitos, servidos como en casa.</p>
          </div>
          <div className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
            {galeria.map((g) => (
              <figure key={g.src} className={`group relative overflow-hidden rounded-3xl ${g.clase}`}>
                <Image
                  src={g.src}
                  alt={g.alt}
                  fill
                  sizes="(min-width:768px) 50vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-3 bottom-3 translate-y-2 rounded-full bg-crema/90 px-4 py-1.5 text-center text-sm font-semibold opacity-0 backdrop-blur transition group-hover:translate-y-0 group-hover:opacity-100">
                  {g.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* RESEÑAS */}
        <section id="resenas" className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-terracota">Lo que dicen</p>
              <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-6xl">
                {r.rating} <span className="text-carbon/30">/ 5</span>
              </h2>
              <div className="mt-3 flex items-center gap-3 text-aji">
                <Estrellas valor={r.rating} />
                <span className="text-sm text-carbon/60">Más de {r.resenas} opiniones en Tripadvisor</span>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {resenas.map((x, i) => (
              <figure
                key={i}
                className={`flex flex-col justify-between rounded-3xl p-8 ${
                  i === 1 ? "bg-terracota text-crema md:-translate-y-6" : "border border-carbon/10 bg-white/70"
                }`}
              >
                <span className={`font-display text-6xl leading-none ${i === 1 ? "text-aji" : "text-terracota"}`}>“</span>
                <blockquote className="mt-2 font-display text-xl leading-snug">{x.texto}</blockquote>
                <figcaption className={`mt-8 text-sm ${i === 1 ? "text-crema/70" : "text-carbon/50"}`}>— {x.autor}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* VISÍTANOS */}
        <section id="visitanos" className="mx-auto max-w-7xl px-5 pb-24 md:px-8 md:pb-32">
          <div className="grid overflow-hidden rounded-[2.5rem] bg-carbon text-crema lg:grid-cols-2">
            <div className="p-10 md:p-14">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-aji">Visítanos</p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Te esperamos con la mesa servida.
              </h2>

              <dl className="mt-10 space-y-7">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-crema/50">Dirección</dt>
                  <dd className="mt-1 text-lg">{r.direccion}</dd>
                  <dd className="text-sm text-crema/60">{r.referencia}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-crema/50">Reservas y pedidos</dt>
                  <dd className="mt-1">
                    <a href={r.telefonoHref} className="font-display text-3xl text-aji hover:underline">
                      {r.telefono}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-crema/50">Horario</dt>
                  <dd className="mt-1 text-lg">Desayuno, almuerzo y cena</dd>
                  <dd className="text-sm text-crema/60">Llámanos para confirmar el horario del día.</dd>
                </div>
              </dl>

              <div className="mt-10 flex flex-wrap gap-3">
                <a href={r.mapsUrl} target="_blank" rel="noreferrer" className="rounded-full bg-aji px-6 py-3 font-semibold text-carbon transition hover:bg-crema">
                  Abrir en Google Maps
                </a>
                <a href={r.telefonoHref} className="rounded-full border border-crema/25 px-6 py-3 font-semibold transition hover:border-crema">
                  Llamar ahora
                </a>
              </div>
            </div>
            <div className="min-h-[360px]">
              <iframe
                title="Ubicación de Rincón Chami en Google Maps"
                src={r.mapsEmbed}
                className="h-full min-h-[360px] w-full grayscale-[40%] sepia-[20%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-carbon/10">
        <div className="textil h-2 text-terracota" />
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-10 text-sm text-carbon/60 md:flex-row md:px-8">
          <p className="font-display text-lg text-carbon">
            Rincón <span className="italic text-terracota">Chami</span>
          </p>
          <p>{r.eslogan} · {r.direccion}</p>
          <p>© {new Date().getFullYear()} Rincón Chami</p>
        </div>
        <details className="mx-auto max-w-7xl px-5 pb-8 text-xs text-carbon/50 md:px-8">
          <summary className="cursor-pointer hover:text-carbon">Créditos de fotografías</summary>
          <p className="mt-3 leading-relaxed">
            Fotos referenciales vía Wikimedia Commons:{" "}
            {creditosFotos.map((c, i) => (
              <span key={c.url}>
                <a href={c.url} target="_blank" rel="noreferrer" className="underline hover:text-terracota">
                  {c.plato}
                </a>{" "}
                © {c.autor} ({c.licencia}){i < creditosFotos.length - 1 ? " · " : "."}
              </span>
            ))}
          </p>
        </details>
      </footer>

      {/* Botón flotante de llamada (móvil) */}
      <a
        href={r.telefonoHref}
        className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-terracota text-crema shadow-xl shadow-terracota/30 lg:hidden"
        aria-label="Llamar a Rincón Chami"
      >
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden>
          <path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 013 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z" />
        </svg>
      </a>
    </>
  );
}
