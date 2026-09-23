import { HomeFooter } from "@/components/sites/accesstimber.com-16361fa1/root-8a5edab2/HomeFooter";
import { FloatingActions } from "@/components/sites/accesstimber.com-16361fa1/shared/FloatingActions";
import { LanguageProvider } from "@/components/sites/accesstimber.com-16361fa1/shared/i18n";
import { assetPath } from "@/lib/site";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/Inter-VariableFont_slnt,wght.woff2",
  variable: "--font-inter",
  weight: "300 900",
  style: "normal",
  display: "fallback",
});

const cardo = localFont({
  src: [
    { path: "./fonts/cardo_normal_400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/cardo_italic_400.woff2", weight: "400", style: "italic" },
    { path: "./fonts/cardo_normal_700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-cardo",
  display: "fallback",
});

export const metadata: Metadata = {
  title: "Okoumé okan. Dabema. Azobe. movingui (& other African hardwoods) Sawn Timber okoume okan. Dabema. Azobe. movingui (& other African hardwoods) plywood Supplier | ZHONG XIN WOOD – Gabon",
  description:
    "ZHONG XIN WOOD is a professional Okoumé okan. Dabema. Azobe. movingui (& other African hardwoods) (Aucoumea klaineana Pierre) sawn timber okoume okan. Dabema. Azobe. movingui (& other African hardwoods) plywood manufacturer in GSEZ Nkok, Gabon. Kiln-dried, FAS grade, direct processing.",
  icons: {
    icon: assetPath("/my-self/logo.jpg"),
    shortcut: assetPath("/my-self/logo.jpg"),
    apple: assetPath("/my-self/logo.jpg"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${cardo.variable}`}>
      <body>
        <LanguageProvider>
          {children}
          <HomeFooter />
          <FloatingActions />
        </LanguageProvider>
      </body>
    </html>
  );
}
