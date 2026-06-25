"use client";

import { useState } from "react";

interface FaqAccordionItemProps {
  pergunta: string;
  resposta: string;
}

export default function FaqAccordionItem({ pergunta, resposta }: FaqAccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item fade-up">
      <button
        className={`faq-question ${open ? "active" : ""}`}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        {pergunta}
        <span className="faq-icon">+</span>
      </button>
      <div className={`faq-answer ${open ? "open" : ""}`}>
        <div className="faq-answer-inner">{resposta}</div>
      </div>
    </div>
  );
}