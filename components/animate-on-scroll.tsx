"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"
import { motion, useAnimation, type Variant } from "framer-motion"

type AnimationVariant = "fadeIn" | "fadeInUp" | "fadeInLeft" | "fadeInRight" | "zoomIn" | "scaleUp"

interface AnimateOnScrollProps {
  children: ReactNode
  variant?: AnimationVariant
  delay?: number
  duration?: number
  className?: string
  threshold?: number
  once?: boolean
}

const variants = {
  hidden: {
    opacity: 0,
    y: 0,
    x: 0,
    scale: 1,
  },
  fadeIn: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  },
  fadeInUp: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  },
  fadeInLeft: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  },
  fadeInRight: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  },
  zoomIn: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  },
  scaleUp: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
  },
}

const getInitialState = (variant: AnimationVariant): Variant => {
  switch (variant) {
    case "fadeIn":
      return { ...variants.hidden, opacity: 0 }
    case "fadeInUp":
      return { ...variants.hidden, opacity: 0, y: 40 }
    case "fadeInLeft":
      return { ...variants.hidden, opacity: 0, x: -40 }
    case "fadeInRight":
      return { ...variants.hidden, opacity: 0, x: 40 }
    case "zoomIn":
      return { ...variants.hidden, opacity: 0, scale: 0.9 }
    case "scaleUp":
      return { ...variants.hidden, opacity: 0, scale: 0.8 }
    default:
      return variants.hidden
  }
}

export default function AnimateOnScroll({
  children,
  variant = "fadeInUp",
  delay = 0,
  duration = 0.5,
  className = "",
  threshold = 0.1,
  once = true,
}: AnimateOnScrollProps) {
  const controls = useAnimation()
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          controls.start(variants[variant])
          if (once) {
            observer.disconnect()
          }
        } else if (!once) {
          setIsInView(false)
          controls.start(getInitialState(variant))
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [controls, variant, threshold, once])

  return (
    <motion.div
      ref={ref}
      initial={getInitialState(variant)}
      animate={controls}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
