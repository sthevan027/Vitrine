"use client"

const services = [
  {
    title: "Criação de Sites e Sistemas",
    description: "Soluções sob medida com segurança, performance e design incrível.",
  },
  {
    title: "Automação e Bots",
    description: "Automatizamos processos, atendimento e integrações com IA.",
  },
  {
    title: "Design e Identidade Visual",
    description: "Construção de marcas, posts, reels e identidades visuais completas.",
  },
  {
    title: "Manutenção e Segurança",
    description: "Monitoramento, correções e suporte contínuo para empresas.",
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-10 text-devloopAccent">Nossos Serviços</h2>
      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {services.map((service) => (
          <div key={service.title} className="p-8 border rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
