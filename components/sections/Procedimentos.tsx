import image from "next/image";
import ProcedureIcon from "@/components/ui/ProcedureIcon";
import { procedimentosAncora, portfolioCategorias } from "@/data/procedimentos";

export default function Procedimentos() {
  return (
    <section id="procedimentos">
      <div className="container">
        <div className="procedimentos-header fade-up">
          <div className="section-label section-label-centered">
            <span className="t-label" style={{ color: "var(--gold)" }}>
              Procedimentos
            </span>
          </div>
          <h2 className="t-h1">Tratamentos para cada necessidade</h2>
          <p className="t-body" style={{ marginTop: "var(--s4)" }}>
            Do rejuvenescimento sutil à transformação expressiva — cada
            procedimento é escolhido e executado com precisão técnica e
            olhar estético apurado.
          </p>
        </div>

        <div className="procedimentos-anchor">
  {procedimentosAncora.map((proc) => (
    <div key={proc.titulo} className="proc-anchor-card fade-up">
      <div className="proc-card-photo">
        <img
          src={proc.imagem} 
          alt={proc.imagemAlt} 
           style={{
             objectFit: "cover",
             width: "100%",
             height: "100%"
  }}
        />
        <span className="proc-card-number">{proc.numero}</span>
      </div>

      <div className="proc-card-body">
        <div className="t-label proc-card-label">{proc.label}</div>
        <div className="proc-card-title">{proc.titulo}</div>
        <p className="proc-card-desc">{proc.descricao}</p>
        <div className="proc-card-footer">
          <span className="proc-card-link">Saiba mais</span>
          <span className="proc-card-arrow">→</span>
        </div>
      </div>
    </div>
  ))}
</div>

        <div className="procedimentos-portfolio fade-up">
          <div className="portfolio-header">
            <h3>Portfólio completo de procedimentos</h3>
            <span className="badge">
              <span className="badge-dot"></span>
              16 procedimentos disponíveis
            </span>
          </div>
          <div className="portfolio-categories">
            {portfolioCategorias.map((categoria) => (
              <div key={categoria.titulo} className="portfolio-category">
                <div className="portfolio-cat-title">{categoria.titulo}</div>
                <ul className="portfolio-items">
                  {categoria.itens.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}