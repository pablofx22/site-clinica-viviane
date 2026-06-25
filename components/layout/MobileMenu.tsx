"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";

interface NavLink {
  label: string;
  href: string;
}

interface MobileMenuProps {
  links: NavLink[];
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ links, open, onClose }: MobileMenuProps) {
  return (
    <nav className={`mobile-nav ${open ? "open" : ""}`}>
      <button className="mobile-nav-close" onClick={onClose} aria-label="Fechar menu">
        ✕
      </button>

      {links.map((link) => (
        <Link key={link.href} href={link.href} className="mobile-link" onClick={onClose}>
          {link.label}
        </Link>
      ))}

      <Button href="#contato" variant="primary" className="mobile-cta" onClick={onClose}>
        Agendar avaliação
      </Button>
    </nav>
  );
}