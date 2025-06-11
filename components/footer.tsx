"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"
import Logo from "@/components/logo"
import { useTheme } from "@/contexts/theme-context"

export default function Footer() {
  const { theme } = useTheme()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-950 transition-colors duration-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-xs transition-colors duration-300">
              Construímos soluções digitais com foco em performance, design e escala para empresas inovadoras.
            </p>
            <div className="flex space-x-6 pt-2">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-vibrant dark:hover:text-blue-standard transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-vibrant dark:hover:text-blue-standard transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-vibrant dark:hover:text-blue-standard transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-vibrant dark:hover:text-blue-standard transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-800 dark:text-gray-200 font-medium mb-4 transition-colors duration-300">Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#sobre"
                  className="text-gray-500 hover:text-purple-vibrant dark:text-gray-400 dark:hover:text-blue-standard transition-colors"
                >
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link
                  href="#servicos"
                  className="text-gray-500 hover:text-purple-vibrant dark:text-gray-400 dark:hover:text-blue-standard transition-colors"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="#design"
                  className="text-gray-500 hover:text-purple-vibrant dark:text-gray-400 dark:hover:text-blue-standard transition-colors"
                >
                  Design
                </Link>
              </li>
              <li>
                <Link
                  href="#planos"
                  className="text-gray-500 hover:text-purple-vibrant dark:text-gray-400 dark:hover:text-blue-standard transition-colors"
                >
                  Planos
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="text-gray-500 hover:text-purple-vibrant dark:text-gray-400 dark:hover:text-blue-standard transition-colors"
                >
                  Portfólio
                </Link>
              </li>
              <li>
                <Link
                  href="#contato"
                  className="text-gray-500 hover:text-purple-vibrant dark:text-gray-400 dark:hover:text-blue-standard transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-800 dark:text-gray-200 font-medium mb-4 transition-colors duration-300">
              Serviços
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#web-development"
                  className="text-gray-500 hover:text-purple-vibrant dark:text-gray-400 dark:hover:text-blue-standard transition-colors"
                >
                  Desenvolvimento Web
                </Link>
              </li>
              <li>
                <Link
                  href="#mobile-apps"
                  className="text-gray-500 hover:text-purple-vibrant dark:text-gray-400 dark:hover:text-blue-standard transition-colors"
                >
                  Aplicativos Mobile
                </Link>
              </li>
              <li>
                <Link
                  href="#ui-ux"
                  className="text-gray-500 hover:text-purple-vibrant dark:text-gray-400 dark:hover:text-blue-standard transition-colors"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="#ai-solutions"
                  className="text-gray-500 hover:text-purple-vibrant dark:text-gray-400 dark:hover:text-blue-standard transition-colors"
                >
                  Soluções com IA
                </Link>
              </li>
              <li>
                <Link
                  href="#cloud-services"
                  className="text-gray-500 hover:text-purple-vibrant dark:text-gray-400 dark:hover:text-blue-standard transition-colors"
                >
                  Serviços em Cloud
                </Link>
              </li>
              <li>
                <Link
                  href="#consulting"
                  className="text-gray-500 hover:text-purple-vibrant dark:text-gray-400 dark:hover:text-blue-standard transition-colors"
                >
                  Consultoria
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-blue-standard shrink-0 mt-0.5 transition-colors duration-300" />
                <span className="text-gray-500 dark:text-gray-400 transition-colors duration-300">
                  São Paulo, Brasil
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-blue-standard shrink-0 transition-colors duration-300" />
                <span className="text-gray-500 dark:text-gray-400 transition-colors duration-300">
                  (14) 98819-7344
                  <br />
                  (27) 98877-2784
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-blue-standard shrink-0 transition-colors duration-300" />
                <a
                  href="mailto:contato@devloop.com.br"
                  className="text-gray-500 hover:text-purple-vibrant dark:text-gray-400 dark:hover:text-blue-standard transition-colors"
                >
                  contato@devloop.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 transition-colors duration-300 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300 mb-4 md:mb-0">
            © {currentYear} DevLoop. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacidade"
              className="text-gray-500 hover:text-purple-vibrant dark:text-gray-400 dark:hover:text-blue-standard text-sm transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/termos"
              className="text-gray-500 hover:text-purple-vibrant dark:text-gray-400 dark:hover:text-blue-standard text-sm transition-colors"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
