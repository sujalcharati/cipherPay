"use client"

import { useState, useEffect } from "react"
import { Search, Moon, Sun, ChevronRight, CuboidIcon as CubeIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Hero from "@/components/Hero"

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  const blockchains = [
    { name: "Ethereum", tag: "Popular", color: "bg-blue-500" },
    { name: "Solana", tag: "Fast", color: "bg-purple-500" },
    
  ]

 

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (darkMode) {
      document.documentElement.classList.remove("dark")
    } else {
      document.documentElement.classList.add("dark")
    }
  }

  useEffect(() => {
    if (darkMode && !document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.add("dark")
    }
  }, [darkMode])

  return (
    <div className="bg-white dark:bg-violet-950 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <CubeIcon className="h-8 w-8 text-violet-600 dark:text-violet-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
              CipherPay
            </span>
          </div>
          <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full">
            {darkMode ? <Sun className="h-5 w-5 text-yellow-300" /> : <Moon className="h-5 w-5 text-violet-700" />}
          </Button>
        </header>

        {/* Main Content */}
       <Hero/>
        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© 2025 CipherPay. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default App

