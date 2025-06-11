"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion as m } from "framer-motion"
import Logo from "@/components/logo"
import Image from "next/image"
import ThemeToggle from "@/components/theme-toggle"
import { useTheme } from "@/contexts/theme-context"
import Footer from "@/components/footer"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isLogoHovered, setIsLogoHovered] = useState(false)
  const { theme } = useTheme()

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
                Olá!
                <br />
                Somos a<br />
                DevLoop
              </m.h1>

              <m.p
                className="text-lg max-w-xl transition-colors duration-300"
                style={{ color: `hsl(var(--text-secondary))` }}
                variants={itemVariants}
              >
                Construímos soluções digitais com foco em performance, design e escala. Entregamos interfaces intuitivas
                e sistemas robustos, unindo frontend, backend, UI/UX e IA para resolver problemas com tecnologia de
                ponta.
              </m.p>

              <m.div variants={itemVariants}>
                <Link href="#sobre" className="btn-primary inline-block">
                  Saiba mais
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
      </main>

      <Footer />
    </>
  )
}
