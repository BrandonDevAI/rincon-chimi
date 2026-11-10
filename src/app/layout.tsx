import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rincón Chami · Comida criolla en Miraflores",
  description:
    "Más de 40 años sirviendo cocina casera peruana en Miraflores, Lima. Ají de gallina, lomo saltado, tacu tacu y más, a pasos del Parque Kennedy.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${fraunces.variable} ${jakarta.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
