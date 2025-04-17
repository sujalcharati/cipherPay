"use client"

import { useState } from "react"
import { CuboidIcon as Cube, Search, Sun, Moon } from "lucide-react"
import Wallet from "@/components/Wallet"

export default function Home() {
  const [selectedBlockchain, setSelectedBlockchain] = useState<string | null>(null)
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const handleBlockchainSelect = (blockchain: string) => {
    setSelectedBlockchain(blockchain)
  }

  const handleCloseModal = () => {
    setSelectedBlockchain(null)
  }

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? "bg-[#2D0A5A] text-white" : "bg-white text-gray-900"}`}>
      <header className="p-4 md:p-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Cube className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold text-purple-400">CipherPay</span>
          </div>
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-purple-800/20">
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Connect to any blockchain</h1>
          <p className="text-xl text-gray-300">Choose your preferred network to begin your decentralized journey</p>
        </div>

        <div className="w-full max-w-lg mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search blockchains..."
              className="w-full py-3 pl-10 pr-4 rounded-lg bg-purple-900/50 border border-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl">
          <button
            onClick={() => handleBlockchainSelect("ethereum")}
            className="flex items-center p-6 rounded-lg bg-purple-900/30 border border-purple-800 hover:bg-purple-800/40 transition-colors"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-blue-500 mr-4">
              <span className="text-xl font-bold">E</span>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold">Ethereum</h3>
              <p className="text-gray-400">Popular</p>
            </div>
            <div className="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </button>

          <button
            onClick={() => handleBlockchainSelect("solana")}
            className="flex items-center p-6 rounded-lg bg-purple-900/30 border border-purple-800 hover:bg-purple-800/40 transition-colors"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-purple-500 mr-4">
              <span className="text-xl font-bold">S</span>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold">Solana</h3>
              <p className="text-gray-400">Fast</p>
            </div>
            <div className="ml-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-400"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </button>
        </div>
      </main>

      <footer className="p-4 text-center text-gray-400">
        <p>© 2025 CipherPay. All rights reserved.</p>
      </footer>

      {selectedBlockchain && (
        <Wallet blockchain={selectedBlockchain} onClose={handleCloseModal} isDarkMode={isDarkMode} />
      )}
    </div>
  )
}

