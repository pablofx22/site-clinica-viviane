interface ProcedureIconProps {
  type: "botox" | "preenchimento" | "bioestimulador";
}

export default function ProcedureIcon({ type }: ProcedureIconProps) {
  if (type === "botox") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.2">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2M8 12h8M12 8v8" />
      </svg>
    );
  }

  if (type === "preenchimento") {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.2">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
      </svg>
    );
  }

  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.2">
      <path d="M12 2l3 7h7l-6 4 2 7-6-4-6 4 2-7-6-4h7z" />
    </svg>
  );
}