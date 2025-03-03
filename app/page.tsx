"use client"

import { useState, useEffect } from "react"
import { Search, Moon, Sun, ChevronRight, CuboidIcon as CubeIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  const blockchains = [
    { name: "Ethereum", tag: "Popular", color: "bg-blue-500" },
    { name: "Solana", tag: "Fast", color: "bg-purple-500" },
    
  ]

  const filteredBlockchains = blockchains.filter((chain) =>
    chain.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

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
        <main>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              Connect to any blockchain
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Choose your preferred network to begin your decentralized journey
            </p>
          </div>

          {/* Search */}
          <div className="relative mb-10 max-w-md mx-auto">
            <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Search blockchains..."
              className="pl-10 bg-gray-50 dark:bg-violet-900/50 border-gray-200 dark:border-violet-800"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Blockchain Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredBlockchains.map((blockchain) => (
              <Button
                key={blockchain.name}
                variant="outline"
                className="h-auto py-6 px-6 flex justify-between items-center group border-2 hover:border-violet-500 dark:hover:border-violet-400 transition-all duration-200 bg-white dark:bg-violet-900/30"
              >
                <div className="flex items-center gap-3 text-left">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${blockchain.color}`}>
                    <span className="text-white font-bold">{blockchain.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-lg text-gray-900 dark:text-white">{blockchain.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{blockchain.tag}</div>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-violet-500 dark:group-hover:text-violet-400 transform group-hover:translate-x-1 transition-transform" />
              </Button>
            ))}
          </div>

          {filteredBlockchains.length === 0 && (
            <div className="text-center py-10 text-gray-500 dark:text-gray-400">
              No blockchains found matching "{searchQuery}"
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© 2025 CipherPay. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

export default App

