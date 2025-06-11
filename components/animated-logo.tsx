"use client"

import { useState } from "react"
import Image from "next/image"
import { motion as m } from "framer-motion"

interface AnimatedLogoProps {
  width?: number
  height?: number
  className?: string
  showText?: boolean
}

export default function AnimatedLogo({
  width = 60,
  height = 60,
  className = "h-12 w-auto",
  showText = true,
}: AnimatedLogoProps) {
  const [isHovered, setIsHovered] = useState(false)

  // Initial animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  }

  // Logo animation variants
  const logoVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -10,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      rotate: isHovered ? 5 : 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  }

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
      },
    },
  }

  return (
    <m.div className="flex items-center gap-2" variants={containerVariants} initial="hidden" animate="visible">
      <m.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        variants={logoVariants}
        whileHover="hover"
        style={{
          filter: `drop-shadow(0 0 8px rgba(128, 0, 255, ${isHovered ? 0.5 : 0.3}))`,
          willChange: "transform",
        }}
      >
        <Image
          src="/devloop-logo-new.png"
          alt="DevLoop Logo"
          width={width}
          height={height}
          className={className}
          priority
        />
      </m.div>

      {showText && (
        <m.span className="text-xl font-montserrat text-white" variants={textVariants}>
          DevLoop
        </m.span>
      )}
    </m.div>
  )
}
