"use client"

const projects = [
  {
    name: "Zap Click",
    description: "Sistema de funil e automação para WhatsApp com integração inteligente.",
  },
  {
    name: "Secretária.IA",
    description: "Bot de voz, transcrição e automação de atendimento com IA.",
  },
  {
    name: "DevLoop Cloud",
    description: "Sistema interno de nuvem e gestão digital desenvolvido pela DevLoop.",
  },
]

export default function Projects() {
  return (
    <section className="py-20 bg-slate-100 text-center">
      <h2 className="text-4xl font-bold mb-10 text-devloopAccent">Projetos em Destaque</h2>
      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div key={project.name} className="p-8 border rounded-xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
