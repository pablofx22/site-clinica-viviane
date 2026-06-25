import { resultadosCasos } from "@/data/resultados";

export default function Resultados() {
  return (
    <section id="resultados">
      <div className="container">
        <div className="resultados-header">
          <div className="resultados-header-left">
            <div className="section-label">
              <span className="t-label" style={{ color: "var(--gold)" }}>
                Antes &amp; Depois
              </span>
            </div>
            <h2 className="t-h1" style={{ color: "var(--white-warm)" }}>
              Resultados que
              <br />
              <em style={{ fontStyle: "italic", color: "var(--gold-light)" }}>
                falam por si.
              </em>
            </h2>
          </div>
          <p
            className="t-body"
            style={{ color: "rgba(250,248,245,0.5)", maxWidth: 320, textAlign: "right" }}
          >
            Casos reais de pacientes da clínica, com autorização para
            publicação.
          </p>
        </div>

        <div className="resultados-placeholder fade-up">
          {resultadosCasos.map((caso) => (
            <div key={caso.id} className="resultado-card-placeholder">
              {/*
                TODO: Quando imagemAntes e imagemDepois estiverem preenchidos
                em data/resultados.ts, substituir este placeholder pelo
                componente real BeforeAfterSlider com next/image.
              */}
              <div className="resultado-divider"></div>
              <div className="resultado-handle">⇔</div>
              <div className="resultado-placeholder-icon">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(201,169,110,0.3)"
                  strokeWidth="1"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                <p>
                  {caso.id === "caso-1" && "Caso 1"}
                  {caso.id === "caso-2" && "Caso 2"}
                  {caso.id === "caso-3" && "Caso 3"}
                  <br />
                  {caso.procedimento}
                </p>
              </div>
              <div className="resultado-card-label">{caso.procedimento}</div>
            </div>
          ))}
        </div>

        <div className="resultados-notice fade-up">
          <span className="resultados-notice-icon">◎</span>
          <p>
            As imagens de antes e depois serão inseridas nesta seção assim
            que o material for disponibilizado. Os sliders comparativos
            interativos já estão estruturados e prontos para receber o
            conteúdo.
          </p>
        </div>
      </div>
    </section>
  );
}