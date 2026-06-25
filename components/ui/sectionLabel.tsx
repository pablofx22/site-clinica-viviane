interface SectionLabelProps {
  children: string;
  centered?: boolean;
}

export default function SectionLabel({ children, centered = false }: SectionLabelProps) {
  return (
    <div className={`section-label ${centered ? "section-label-centered" : ""}`}>
      <span className="t-label" style={{ color: "var(--gold)" }}>
        {children}
      </span>
    </div>
  );
}