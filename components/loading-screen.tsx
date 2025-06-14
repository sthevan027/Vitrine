"use client"

import { motion as m } from "framer-motion"
import Image from "next/image"

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-deep via-purple-galaxy to-blue-deep">
      <div className="text-center">
        <m.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2,
            },
          }}
          className="mb-4"
        >
          <Image
            src="/devloop-logo-new.png"
            alt="DevLoop Logo"
            width={120}
            height={120}
            className="h-24 w-auto"
            style={{ filter: "drop-shadow(0 0 12px rgba(128, 0, 255, 0.5))" }}
            priority
          />
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.8,
            },
          }}
        >
          <h2 className="text-2xl font-inter text-white">DevLoop</h2>
          <div className="mt-6">
            <div className="relative h-1 w-48 bg-blue-deep/50 rounded-full overflow-hidden mx-auto">
              <m.div
                className="absolute inset-0 bg-gradient-to-r from-purple-vibrant to-blue-standard"
                initial={{ x: "-100%" }}
                animate={{
                  x: "0%",
                  transition: {
                    duration: 1.2,
                    ease: "easeInOut",
                    delay: 1,
                  },
                }}
              />
            </div>
          </div>
        </m.div>
      </div>
    </div>
  )
}
