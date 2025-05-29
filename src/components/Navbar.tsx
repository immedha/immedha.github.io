"use client"

import type React from "react"
import { useState, useEffect, createContext, useContext } from "react"
import { Link, useLocation } from "react-router-dom"

// Theme Context
const ThemeContext = createContext<{
  isDark: boolean
  toggleTheme: () => void
}>({
  isDark: false,
  toggleTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)

    if (newTheme) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { isDark, toggleTheme } = useTheme()

  const navItems = [
    { path: "/", label: "me" },
    { path: "/projects", label: "building" },
    { path: "/education", label: "uw" },
    // { path: "/about", label: "thoughts" },
    { path: "/resources", label: "favorites" },
    { path: "/contact", label: "connect" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-lg font-medium text-gray-900 dark:text-white hover:text-green-600 dark:hover:text-green-400 transition-colors"
          >
            my digital journal
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm transition-colors ${
                  location.pathname === item.path
                    ? "text-green-600 dark:text-green-400 font-medium"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-5 h-5 flex flex-col justify-center space-y-1">
              <span
                className={`block h-0.5 bg-gray-600 dark:bg-gray-300 transition-all ${isOpen ? "rotate-45 translate-y-1" : ""}`}
              />
              <span
                className={`block h-0.5 bg-gray-600 dark:bg-gray-300 transition-all ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 bg-gray-600 dark:bg-gray-300 transition-all ${isOpen ? "-rotate-45 -translate-y-1" : ""}`}
              />
            </div>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm transition-colors ${
                    location.pathname === item.path
                      ? "text-green-600 dark:text-green-400 font-medium"
                      : "text-gray-600 dark:text-gray-300"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button onClick={toggleTheme} className="text-left text-sm text-gray-600 dark:text-gray-300">
                {isDark ? "☀️ light mode" : "🌙 dark mode"}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
