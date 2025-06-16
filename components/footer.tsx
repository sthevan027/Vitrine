"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-950 py-10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 text-center space-y-4">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          © DevLoop 2025 – Do conceito ao código. Do código ao resultado.
        </p>
        <div className="flex justify-center gap-6 text-sm">
          <Link href="#" className="hover:text-purple-vibrant">Instagram</Link>
          <Link href="#" className="hover:text-purple-vibrant">GitHub</Link>
          <Link href="#" className="hover:text-purple-vibrant">LinkedIn</Link>
          <Link href="#" className="hover:text-purple-vibrant">WhatsApp</Link>
          <Link href="mailto:contato@devloop.com.br" className="hover:text-purple-vibrant">E-mail</Link>
        </div>
      </div>
    </footer>
  )
}
