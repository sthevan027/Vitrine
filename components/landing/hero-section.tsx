"use client"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-devloopAccent to-devloopPrimary text-white py-24 text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        DevLoop – Do conceito ao código
      </h1>
      <p className="text-xl md:text-2xl max-w-2xl mx-auto">
        Criamos sistemas, automações e designs que transformam negócios.
        Da ideia ao resultado.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <a
          href="#projetos"
          className="px-6 py-3 bg-white text-devloopAccent rounded-xl font-semibold"
        >
          Ver Portfólio
        </a>
        <a
          href="#contato"
          className="px-6 py-3 border border-white rounded-xl"
        >
          Solicitar Proposta
        </a>
      </div>
    </section>
  )
}
