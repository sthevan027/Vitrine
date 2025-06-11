"use client"

import type { ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxElementProps {
  children: ReactNode
  offset?: number
  className?: string
}

export default function ParallaxElement({ children, offset = 50, className = "" }: ParallaxElementProps) {
  const { scrollY } = useScroll()

  // Create a parallax effect based on scroll position
  const y = useTransform(scrollY, [0, 1000], [0, -offset])

  return (
    <motion.div style={{ y }} className={className}>
      {children}
    </motion.div>
  )
}
