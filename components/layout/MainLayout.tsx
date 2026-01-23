"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      {isHome && <Header />}
      <main className="flex-grow">{children}</main>
      {isHome && <Footer />}
    </>
  );
}
