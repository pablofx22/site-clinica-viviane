"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";

const NAV_LINKS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Procedimentos", href: "#procedimentos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Workshops", href: "#autoridade" },
  { label: "Avaliações", href: "#avaliacoes" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header id="header" className={scrolled ? "scrolled" : ""}>
        <div className="container">
          <div className="header-inner">
            <Link href="#" className="header-logo">
              <span className="header-logo-name">Dra. Viviane Seguro</span>
              <span className="header-logo-sub">
                Biomédica Esteta · Porto Alegre
              </span>
            </Link>

            <nav>
              <ul className="header-nav">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="header-cta">
              <Button
                href="#contato"
                variant="outline"
                className="header-cta-btn"
              >
                Agendar avaliação
              </Button>
              <button
                className="menu-toggle"
                aria-label="Abrir menu"
                onClick={() => setMenuOpen(true)}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu
        links={NAV_LINKS}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}