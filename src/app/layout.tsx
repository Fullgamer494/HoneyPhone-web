import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://honeyphone.myuspot.org"),
  title: "HoneyPhone — entiende tu red, sin adivinar",
  description:
    "Una herramienta Android para comprender señales de tu red Wi-Fi con comprobaciones acotadas, explicaciones claras y control del usuario.",
  applicationName: "HoneyPhone",
  alternates: { canonical: "/" },
  openGraph: {
    title: "HoneyPhone — entiende tu red, sin adivinar",
    description:
      "Seguridad de red desde Android, con transparencia, comprobaciones acotadas y control del usuario.",
    url: "https://honeyphone.myuspot.org",
    siteName: "HoneyPhone",
    locale: "es_MX",
    type: "website",
  },
  icons: { icon: "/honeyphone-logo.jpeg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
