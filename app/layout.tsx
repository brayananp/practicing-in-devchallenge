import type { Metadata } from "next";
import "./globals.css";
import {
  sora,
  lato,
  poppins,
  beVietnamPro,
  inter,
  outfit,
  dmSans,
} from "@/utils/typographies";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "DevChallenges Portfolio | VJ",
  description: "Una colección de desafíos de desarrollo web de devchallenges.io",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${sora.variable} ${lato.variable} ${poppins.variable} ${beVietnamPro.variable} ${inter.variable} ${outfit.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className={`${poppins.className} min-h-screen flex flex-col`}>
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
