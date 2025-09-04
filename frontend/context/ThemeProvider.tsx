"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

interface ThemeContextType {
  mode: string
  setMode: (mode: string) => void // Fixed: added parameter
  toggleMode: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState("dark")

  // Only toggles state, no DOM manipulation
  const toggleMode = () => {
    setMode(prev => (prev === "dark" ? "light" : "dark"))
  }

  // Side-effect: add/remove classes based on mode
  useEffect(() => {
    const root = document.documentElement
    if (mode === "dark") {
      root.classList.add("dark")
      root.classList.remove("light")
    } else {
      root.classList.add("light")
      root.classList.remove("dark")
    }
  }, [mode])

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, setMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}