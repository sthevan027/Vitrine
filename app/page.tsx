"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion as m } from "framer-motion"
import Logo from "@/components/logo"
import Image from "next/image"
import ThemeToggle from "@/components/theme-toggle"
import Footer from "@/components/footer"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLogoHovered, setIsLogoHovered] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <>
      <main className="min-h-screen hero-gradient-bg overflow-hidden">
        {/* Header */}
        <header className="container mx-auto py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Logo />
            </Link>

            <nav className="hidden md:flex items-center gap-10">
              <Link href="#sobre" className="nav-link">
                Sobre nós
              </Link>
              <Link href="#servicos" className="nav-link">
                Serviços
              </Link>
              <Link href="#design" className="nav-link">
                Design
              </Link>
              <Link href="#planos" className="nav-link">
                Planos
              </Link>
              <Link href="#contato" className="nav-link">
                Contato
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link href="#contato" className="btn-primary">
                Fale Conosco
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <m.div
              className="space-y-6 z-10"
              variants={containerVariants}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
            >
              <m.h1
                className="text-5xl md:text-6xl lg:text-7xl font-black transition-colors duration-300"
                style={{ color: `hsl(var(--text-primary))` }}
                variants={itemVariants}
              >
                DevLoop – Do conceito ao código.
                <br />Do código ao resultado.
              </m.h1>

              <m.p
                className="text-lg max-w-xl transition-colors duration-300"
                style={{ color: `hsl(var(--text-secondary))` }}
                variants={itemVariants}
              >
                Soluções digitais personalizadas para acelerar seu negócio. Criamos sistemas, automações, bots e design de alto impacto.
              </m.p>

              <m.div variants={itemVariants} className="flex gap-4">
                <Link href="#portfolio" className="btn-primary inline-block">
                  Ver Portfólio
                </Link>
                <Link href="#contato" className="btn-primary inline-block">
                  Solicitar Proposta
                </Link>
              </m.div>
            </m.div>

            <div className="relative">
              <m.div
                className="w-full h-[500px] lg:h-[600px] relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isLogoHovered
                    ? {
                        opacity: 1,
                        scale: 1.05,
                        transition: {
                          duration: 0.3,
                          ease: "easeOut",
                        },
                      }
                    : {
                        opacity: 1,
                        scale: 1,
                        transition: {
                          duration: 0.3,
                          ease: "easeOut",
                        },
                      }
                }
                onMouseEnter={() => setIsLogoHovered(true)}
                onMouseLeave={() => setIsLogoHovered(false)}
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="/devloop-logo-new.png"
                  alt="DevLoop Logo"
                  fill
                  className={`object-contain transition-all duration-300 ${isLogoHovered ? "logo-shadow-intense" : "logo-shadow"}`}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </m.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="servicos" className="py-20 bg-white dark:bg-gray-900 transition-colors">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10">Nossos Serviços</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-xl bg-gray-50 dark:bg-gray-800 p-6 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Criação de Sites e Sistemas</h3>
                <p>Soluções sob medida, com foco em segurança, performance e escalabilidade.</p>
              </div>
              <div className="rounded-xl bg-gray-50 dark:bg-gray-800 p-6 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Automação e Bots</h3>
                <p>Automatizamos processos, atendimentos e integrações. Robôs inteligentes, chatbots, funis e IA.</p>
              </div>
              <div className="rounded-xl bg-gray-50 dark:bg-gray-800 p-6 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Design e Identidade Visual</h3>
                <p>De posts a branding completo. Identidade digital que gera impacto e conexão.</p>
              </div>
              <div className="rounded-xl bg-gray-50 dark:bg-gray-800 p-6 shadow-md hover:shadow-xl transition-shadow">
                <h3 className="font-semibold text-lg mb-2">Manutenção, Segurança e Monitoramento</h3>
                <p>Acompanhamento constante, atualizações, backups e suporte técnico de alto nível.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors">
          <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
            <h2 className="text-3xl font-bold">Sobre Nós</h2>
            <p>
              A DevLoop nasceu para ajudar empresas a evoluir digitalmente. Somos engenheiros, designers e desenvolvedores apaixonados por construir soluções que transformam negócios. Nossa missão é entregar sistemas, automações e designs que combinam tecnologia, criatividade e resultado.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contato" className="py-20 bg-white dark:bg-gray-900 transition-colors">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">Solicite uma proposta personalizada 🚀</h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Preencha o formulário e conte como podemos ajudar seu negócio a evoluir digitalmente.</p>
            <form className="space-y-4">
              <input type="text" placeholder="Nome" className="w-full rounded-xl border px-3 py-2" />
              <input type="email" placeholder="E-mail" className="w-full rounded-xl border px-3 py-2" />
              <textarea placeholder="Mensagem" className="w-full rounded-xl border px-3 py-2 h-32" />
              <button type="submit" className="btn-primary w-full">Enviar</button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
