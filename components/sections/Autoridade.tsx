import Image from "next/image";
import Button from "@/components/ui/Button";
import { estatisticasAutoridade, workshopsFotos } from "@/data/SiteContent";

export default function Autoridade() {
  return (
    <section id="autoridade">
      <div className="container">
        <div className="autoridade-grid">
          <div className="autoridade-content fade-up">
            <div className="section-label">
              <span className="t-label" style={{ color: "var(--gold)" }}>
                Formação e Autoridade
              </span>
            </div>

            <h2 className="t-h1 autoridade-headline">
              A profissional que
              <br />
              <em>
                forma outros
                <br />
                profissionais.
              </em>
            </h2>

            <p className="t-body autoridade-body">
              Ministrar workshops não é uma atividade paralela — é a razão
              pela qual a Dra. Viviane está sempre à frente das técnicas
              mais avançadas do mercado. Cada curso ministrado é também uma
              atualização constante da própria prática clínica.
            </p>

            <p className="t-body autoridade-body">
              Profissionais que aprendem com ela levam para suas clínicas o
              mesmo rigor técnico e cuidado com o paciente que ela aplica em
              cada atendimento.
            </p>

            <div className="autoridade-stats">
              {estatisticasAutoridade.map((stat) => (
                <div key={stat.label} className="autoridade-stat">
                  <div className="autoridade-stat-number">
                    {stat.label.toLowerCase().includes("avaliação") && "★ "}
                    {stat.numero}
                    {stat.sufixo && <span>{stat.sufixo}</span>}
                  </div>
                  <div className="autoridade-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button href="#contato" variant="primary">
              Agendar consulta
            </Button>
          </div>

          <div className="autoridade-workshops fade-up">
            <div className="workshops-grid">
              {workshopsFotos.map((workshop) => (
                <div
                  key={workshop.id}
                  className={`workshop-placeholder ${workshop.destaque ? "workshop-placeholder-featured" : ""
                    }`}
                >
                  {workshop.imagem ? (
                    <Image
                      src={workshop.imagem}
                      alt={workshop.legenda || "Workshop"}
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: workshop.destaque ? "50% 40%" : "center",
                      }}
                      sizes="(max-width: 900px) 100vw, 50vw"
                    />
                  ) : (
                  <div className="workshop-notice">
                    <svg
                      width={workshop.destaque ? 28 : 24}
                      height={workshop.destaque ? 28 : 24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#C9A96E"
                      strokeWidth="1.2"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                    <p style={{ fontSize: workshop.destaque ? undefined : "0.65rem" }}>
                      {workshop.destaque
                        ? "Fotos dos workshops serão inseridas aqui"
                        : workshop.id.replace("workshop-", "Workshop ")}
                    </p>
                  </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}