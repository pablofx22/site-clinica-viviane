import Image from "next/image";
import Badge from "@/components/ui/Badge";

export default function Sobre() {
  return (
    <section id="sobre">
      <div className="container">
        <div className="sobre-grid">
          <div className="sobre-photo fade-up">
            <div className="sobre-photo-frame">
              
                <Image
                  src="/images/sobre/dra-viviane-sobre.jpeg"
                  alt="Dra. Viviane Seguro em seu consultório"
                  fill
                  style={{ objectFit: "cover" }}
                />
              
              <div className="sobre-photo-placeholder">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1">
                  <circle cx="12" cy="8" r="5" />
                  <path d="M3 21c0-5 4-9 9-9s9 4 9 9" />
                </svg>
                <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Foto editorial
                </p>
                <p style={{ fontSize: "0.65rem", color: "var(--text-muted)", opacity: 0.6 }}>
                </p>
              </div>
            </div>
            <div className="sobre-photo-accent">
              <div className="sobre-photo-accent-number">
                5<span style={{ fontSize: "1.5rem" }}>+</span>
              </div>
              <div className="sobre-photo-accent-text">Anos de atuação clínica</div>
            </div>
          </div>

          <div className="sobre-content fade-up">
            <div className="section-label">
              <span className="t-label" style={{ color: "var(--gold)" }}>
                Sobre a Dra. Viviane
              </span>
            </div>

            <h2 className="t-h1 sobre-headline">
              Mais de 5 anos
              <br />
              <em>transformando pessoas.</em>
            </h2>

            <p className="t-body sobre-body">
              Viviane Seguro é Biomédica Esteta com registro CRBM 5 6680 e
              formação especializada e pós-graduação em biomedicina estética e cosmotologia avançada. Atende em Porto Alegre com
              foco em resultados naturais, seguros e duradouros.
            </p>

            <div className="sobre-highlight">
              <p>
                &quot;Além de atender pacientes, ministra workshops para
                profissionais da área — o que mantém sua técnica
                constantemente atualizada e posicionada na vanguarda do
                segmento.&quot;
              </p>
            </div>

            <p className="t-body sobre-body">
              Cada atendimento começa com uma escuta ativa e um diagnóstico
              individualizado. O objetivo não é padronizar belezas — é
              realçar a identidade única de cada paciente com técnica, ética
              e cuidado genuíno.
            </p>

            <div className="sobre-badges" style={{ marginTop: "var(--s7)" }}>
              <Badge>Biomédica Esteta</Badge>
              <Badge>Ministra Workshops</Badge>
              <Badge>Porto Alegre e Região</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}