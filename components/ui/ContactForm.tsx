"use client";

import { useState, FormEvent } from "react";
import { procedimentosOpcoes, contatoInfo } from "@/data/SiteContent";

export default function ContactForm() {
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [procedimento, setProcedimento] = useState("");
  const [horario, setHorario] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!nome.trim() || !telefone.trim()) {
      alert("Por favor, preencha seu nome e telefone para continuar.");
      return;
    }

    setEnviando(true);

    // TODO: Substituir por chamada real a uma API Route do Next.js
    // que envia e-mail para a Dra. Viviane (ex: via Resend, Nodemailer, etc.)
    // Exemplo futuro:
    // await fetch("/api/contact", {
    //   method: "POST",
    //   body: JSON.stringify({ nome, telefone, procedimento, horario }),
    // });

    console.log("Agendamento:", { nome, telefone, procedimento, horario });

    setTimeout(() => {
      setEnviando(false);
      setEnviado(true);
    }, 1200);
  }

  if (enviado) {
    return (
      <div className="contato-form">
        <div className="form-success" style={{ display: "block" }}>
          <div className="form-success-icon">✦</div>
          <h3>Solicitacao enviada!</h3>
          <p>
            A Dra. Viviane entrara em contato em ate 24h para confirmar seu
            agendamento.
          </p>
          <p style={{ marginTop: 12, fontSize: "0.8rem", color: "var(--text-muted)" }}>
            Ou se preferir, fale agora pelo{" "}
            
              <a
              href={`https://wa.me/${contatoInfo.whatsapp}`}
              style={{ color: "var(--gold-dark)", fontWeight: 500 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
            
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="contato-form">
      <h3 className="form-title">Solicitar avaliacao</h3>
      <p className="form-subtitle">
        Preencha os dados abaixo e entraremos em contato em ate 24h.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="nome">
            Nome completo
          </label>
          <input
            className="form-input"
            type="text"
            id="nome"
            name="nome"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="telefone">
              Telefone / WhatsApp
            </label>
            <input
              className="form-input"
              type="tel"
              id="telefone"
              name="telefone"
              placeholder="(51) 9 9999-9999"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="horario">
              Preferencia de horario
            </label>
            <select
              className="form-select"
              id="horario"
              name="horario"
              value={horario}
              onChange={(e) => setHorario(e.target.value)}
            >
              <option value="">Selecione</option>
              <option>Manha (8h - 12h)</option>
              <option>Tarde (13h - 18h)</option>
              <option>Qualquer horario</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="procedimento">
            Procedimento de interesse
          </label>
          <select
            className="form-select"
            id="procedimento"
            name="procedimento"
            value={procedimento}
            onChange={(e) => setProcedimento(e.target.value)}
          >
            <option value="">Selecione um procedimento</option>
            {procedimentosOpcoes.map((op) => (
              <option key={op}>{op}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary form-submit" disabled={enviando}>
          {enviando ? "Enviando..." : "Solicitar avaliacao"}
        </button>

        <p className="form-privacy">Seus dados sao confidenciais e nao serao compartilhados.</p>
      </form>
    </div>
  );
}