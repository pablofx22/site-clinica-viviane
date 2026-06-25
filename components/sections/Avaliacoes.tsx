import StarRating from "@/components/ui/StarRating";
import { avaliacoes, ratingGeral } from "@/data/avaliacoes";

export default function Avaliacoes() {
  return (
    <section id="avaliacoes">
      <div className="container">
        <div className="avaliacoes-header fade-up">
          <div className="avaliacoes-rating">
            <div className="avaliacoes-rating-number">{ratingGeral.nota}</div>
            <div className="avaliacoes-rating-details">
              <StarRating size="md" />
              <div className="avaliacoes-count">{ratingGeral.totalLabel}</div>
            </div>
          </div>
          <h2 className="t-h1">O que nossas pacientes dizem</h2>
          <p className="t-body" style={{ marginTop: "var(--s4)" }}>
            Experiências reais de quem já passou pela clínica.
          </p>
        </div>

        <div className="avaliacoes-grid">
          {avaliacoes.map((avaliacao) => (
            <div key={avaliacao.id} className="avaliacao-card fade-up">
              <StarRating />
              <div className="avaliacao-quote">&quot;{avaliacao.frase}&quot;</div>
              <p className="avaliacao-body">{avaliacao.texto}</p>
              <div className="avaliacao-author">
                <div className="avaliacao-avatar">{avaliacao.inicial}</div>
                <div>
                  <div className="avaliacao-name">{avaliacao.nome}</div>
                  <div className="avaliacao-meta">{avaliacao.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="avaliacoes-cta fade-up">
          
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="avaliacoes-google-link">
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
  Ver todas as avaliacoes no Google
</a>
        </div>
      </div>
    </section>
  );
}