"use client"

export default function ContactForm() {
  return (
    <section className="py-20 bg-slate-100 text-center">
      <h2 className="text-4xl font-bold mb-6 text-devloopAccent">Solicite uma Proposta</h2>
      <form className="max-w-xl mx-auto space-y-6">
        <input
          type="text"
          placeholder="Seu nome"
          className="w-full px-4 py-3 border rounded-xl"
        />
        <input
          type="email"
          placeholder="Seu e-mail"
          className="w-full px-4 py-3 border rounded-xl"
        />
        <textarea
          placeholder="Descreva seu projeto ou ideia"
          className="w-full px-4 py-3 border rounded-xl"
          rows={5}
        />
        <button
          type="submit"
          className="w-full px-6 py-3 bg-devloopAccent text-white rounded-xl"
        >
          Enviar Mensagem
        </button>
      </form>
    </section>
  )
}
