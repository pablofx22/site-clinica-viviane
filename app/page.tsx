import Hero from "@/components/sections/Hero";
import Sobre from "@/components/sections/Sobre";
import Procedimentos from "@/components/sections/Procedimentos";
import Resultados from "@/components/sections/Resultados";
import Autoridade from "@/components/sections/Autoridade";
import Avaliacoes from "@/components/sections/Avaliacoes";
import FAQ from "@/components/sections/FAQ";
import Contato from "@/components/sections/Contato";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/whatsAppFloat";

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <Procedimentos />
      <Resultados />
      <Autoridade />
      <Avaliacoes />
      <FAQ />
      <Contato />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}