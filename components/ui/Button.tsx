import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "dark" | "ghost-light";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  onClick?: () => void;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
}

const variantClass: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  outline: "btn-outline",
  dark: "btn-dark",
  "ghost-light": "btn-ghost-light",
};

export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  target,
  rel,
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) {
  const classes = `btn ${variantClass[variant]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}