"use client"

import Image from "next/image"
import { motion as m } from "framer-motion"

interface LogoProps {
  className?: string
  size?: "small" | "large"
  animated?: boolean
}

export default function Logo({ className = "", size = "small", animated = true }: LogoProps) {
  const smallLogo = size === "small"

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  return (
    <m.div
      className={`${className}`}
      initial={animated ? "hidden" : "visible"}
      animate="visible"
      whileHover={animated ? "hover" : undefined}
      variants={logoVariants}
    >
      {smallLogo ? (
        // Small logo for header
        <div className="relative w-16 h-16">
          <Image src="/devloop-logo-new.png" alt="DevLoop Logo" fill className="object-contain" priority />
        </div>
      ) : (
        // Large logo for hero section
        <div className="relative w-full h-full">
          <Image
            src="/devloop-logo-new.png"
            alt="DevLoop Logo"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}
    </m.div>
  )
}
