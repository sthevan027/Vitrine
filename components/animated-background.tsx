"use client"

import { useEffect, useState } from "react"
import { motion, useTransform, useScroll } from "framer-motion"

export default function AnimatedBackground() {
  const [windowHeight, setWindowHeight] = useState(0)
  const { scrollY } = useScroll()

  // Update window height on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }

    // Set initial height
    handleResize()

    // Add resize listener
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Calculate document height for scroll percentage
  const [documentHeight, setDocumentHeight] = useState(0)
  useEffect(() => {
    setDocumentHeight(document.body.scrollHeight)
  }, [])

  // Transform scroll position to color intensity
  const purpleIntensity = useTransform(scrollY, [0, documentHeight - windowHeight], [1, 0.3])

  const blueIntensity = useTransform(scrollY, [0, documentHeight - windowHeight], [0.3, 1])

  // Create dynamic gradient based on scroll
  const backgroundGradient = useTransform([purpleIntensity, blueIntensity], ([purple, blue]) => {
    return `radial-gradient(circle at ${50 + scrollY.get() * 0.01}% ${30 + scrollY.get() * 0.02}%, 
        rgba(128, 0, 255, ${purple}) 0%, 
        rgba(0, 122, 255, ${blue}) 100%)`
  })

  return (
    <motion.div
      className="fixed inset-0 -z-10"
      style={{
        background: backgroundGradient,
      }}
    >
      {/* Animated particles/stars effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white opacity-70"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              filter: "blur(1px)",
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}
