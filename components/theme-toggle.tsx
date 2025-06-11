"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/contexts/theme-context"
import { Button } from "@/components/ui/button"
import { motion as m } from "framer-motion"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative h-10 w-10 rounded-full bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      <m.div
        initial={{ opacity: 0, rotate: -90 }}
        animate={{
          opacity: theme === "light" ? 1 : 0,
          rotate: theme === "light" ? 0 : 90,
          scale: theme === "light" ? 1 : 0.5,
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Sun className="h-5 w-5 text-purple-vibrant" />
      </m.div>

      <m.div
        initial={{ opacity: 0, rotate: 90 }}
        animate={{
          opacity: theme === "dark" ? 1 : 0,
          rotate: theme === "dark" ? 0 : -90,
          scale: theme === "dark" ? 1 : 0.5,
        }}
        transition={{ duration: 0.2 }}
        className="absolute"
      >
        <Moon className="h-5 w-5 text-blue-standard" />
      </m.div>
    </Button>
  )
}
