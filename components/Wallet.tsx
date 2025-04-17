// "use client"

// import { useState } from "react"
// import { Wallet, Download, Key } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

// interface WalletOptionsProps {
//   blockchain: string
//   onClose: () => void
//   isDarkMode: boolean
// }

// export default function WalletOptions({ blockchain, onClose, isDarkMode }: WalletOptionsProps) {
//   const [selectedOption, setSelectedOption] = useState<string | null>(null)

//   const handleOptionSelect = (option: string) => {
//     setSelectedOption(option)
//   }

//   const handleBack = () => {
//     setSelectedOption(null)
//   }

//   const blockchainInfo = {
//     ethereum: {
//       name: "Ethereum",
//       color: "bg-blue-500",
//       icon: "E",
//       description: "Connect to the Ethereum blockchain network",
//     },
//     solana: {
//       name: "Solana",
//       color: "bg-purple-500",
//       icon: "S",
//       description: "Connect to the Solana blockchain network",
//     },
//   }

//   const info = blockchain === "ethereum" ? blockchainInfo.ethereum : blockchainInfo.solana

//   return (
//     <Dialog open={true} onOpenChange={() => onClose()}>
//       <DialogContent
//         className={`sm:max-w-md ${isDarkMode ? "bg-[#2D0A5A] text-white border-purple-800" : "bg-white text-gray-900 border-gray-200"}`}
//       >
//         <DialogHeader>
//           <div className="flex items-center">
//             <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${info.color} mr-3`}>
//               <span className="text-lg font-bold">{info.icon}</span>
//             </div>
//             <DialogTitle className="text-xl">{info.name} Wallet Options</DialogTitle>
//           </div>
//           <p className="text-sm text-gray-400 mt-1">{info.description}</p>
//         </DialogHeader>

//         {!selectedOption ? (
//           <div className="grid gap-4 py-4">
//             <Button
//               onClick={() => handleOptionSelect("generate")}
//               className="flex justify-between items-center w-full p-4 h-auto bg-purple-900/30 hover:bg-purple-800/40 text-left border border-purple-800"
//               variant="outline"
//             >
//               <div className="flex items-center">
//                 <Key className="h-5 w-5 mr-3 text-purple-400" />
//                 <div>
//                   <h3 className="font-medium">Generate New Wallet</h3>
//                   <p className="text-sm text-gray-400">Create a new wallet address and private key</p>
//                 </div>
//               </div>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="text-gray-400"
//               >
//                 <polyline points="9 18 15 12 9 6"></polyline>
//               </svg>
//             </Button>

//             <Button
//               onClick={() => handleOptionSelect("import")}
//               className="flex justify-between items-center w-full p-4 h-auto bg-purple-900/30 hover:bg-purple-800/40 text-left border border-purple-800"
//               variant="outline"
//             >
//               <div className="flex items-center">
//                 <Download className="h-5 w-5 mr-3 text-purple-400" />
//                 <div>
//                   <h3 className="font-medium">Import Existing Wallet</h3>
//                   <p className="text-sm text-gray-400">Import using private key or seed phrase</p>
//                 </div>
//               </div>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="text-gray-400"
//               >
//                 <polyline points="9 18 15 12 9 6"></polyline>
//               </svg>
//             </Button>

//             <Button
//               onClick={() => handleOptionSelect("connect")}
//               className="flex justify-between items-center w-full p-4 h-auto bg-purple-900/30 hover:bg-purple-800/40 text-left border border-purple-800"
//               variant="outline"
//             >
//               <div className="flex items-center">
//                 <Wallet className="h-5 w-5 mr-3 text-purple-400" />
//                 <div>
//                   <h3 className="font-medium">Connect Hardware Wallet</h3>
//                   <p className="text-sm text-gray-400">Connect Ledger, Trezor or other hardware wallets</p>
//                 </div>
//               </div>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="text-gray-400"
//               >
//                 <polyline points="9 18 15 12 9 6"></polyline>
//               </svg>
//             </Button>
//           </div>
//         ) : (
//           <div className="py-4">
//             {selectedOption === "generate" && (
//               <div className="space-y-4">
//                 <p>Generate a new {info.name} wallet with a unique address and secure private key.</p>
//                 <div className="flex justify-between">
//                   <Button variant="outline" onClick={handleBack}>
//                     Back
//                   </Button>
//                   <Button>Generate Wallet</Button>
//                 </div>
//               </div>
//             )}

//             {selectedOption === "import" && (
//               <div className="space-y-4">
//                 <p>Import your existing {info.name} wallet using your private key or seed phrase.</p>
//                 <div className="flex justify-between">
//                   <Button variant="outline" onClick={handleBack}>
//                     Back
//                   </Button>
//                   <Button>Continue</Button>
//                 </div>
//               </div>
//             )}

//             {selectedOption === "connect" && (
//               <div className="space-y-4">
//                 <p>Connect your hardware wallet to securely manage your {info.name} assets.</p>
//                 <div className="flex justify-between">
//                   <Button variant="outline" onClick={handleBack}>
//                     Back
//                   </Button>
//                   <Button>Connect Device</Button>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </DialogContent>
//     </Dialog>
//   )
// }



"use client"

import { useState } from "react"
import { Wallet, Download, Key } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useRouter } from "next/navigation"

interface WalletOptionsProps {
  blockchain: string
  onClose: () => void
  isDarkMode: boolean
}

export default function WalletOptions({ blockchain, onClose, isDarkMode }: WalletOptionsProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const router = useRouter()

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
  }

  const handleBack = () => {
    setSelectedOption(null)
  }

  const handleGenerateWallet = () => {
    router.push(`/generate-wallet/${blockchain}`)
    onClose()
  }

  const blockchainInfo = {
    ethereum: {
      name: "Ethereum",
      color: "bg-blue-500",
      icon: "E",
      description: "Connect to the Ethereum blockchain network",
    },
    solana: {
      name: "Solana",
      color: "bg-purple-500",
      icon: "S",
      description: "Connect to the Solana blockchain network",
    },
  }

  const info = blockchain === "ethereum" ? blockchainInfo.ethereum : blockchainInfo.solana

  return (
    <Dialog open={true} onOpenChange={() => onClose()}>
      <DialogContent
        className={`sm:max-w-md ${isDarkMode ? "bg-[#2D0A5A] text-white border-purple-800" : "bg-white text-gray-900 border-gray-200"}`}
      >
        <DialogHeader>
          <div className="flex items-center">
            <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${info.color} mr-3`}>
              <span className="text-lg font-bold">{info.icon}</span>
            </div>
            <DialogTitle className="text-xl">{info.name} Wallet Options</DialogTitle>
          </div>
          <p className="text-sm text-gray-400 mt-1">{info.description}</p>
        </DialogHeader>

        {!selectedOption ? (
          <div className="grid gap-4 py-4">
            <Button
              onClick={() => handleOptionSelect("generate")}
              className="flex justify-between items-center w-full p-4 h-auto bg-purple-900/30 hover:bg-purple-800/40 text-left border border-purple-800"
              variant="outline"
            >
              <div className="flex items-center">
                <Key className="h-5 w-5 mr-3 text-purple-400" />
                <div>
                  <h3 className="font-medium">Generate New Wallet</h3>
                  <p className="text-sm text-gray-400">Create a new wallet address and private key</p>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
            </Button>

            <Button
              onClick={() => handleOptionSelect("import")}
              className="flex justify-between items-center w-full p-4 h-auto bg-purple-900/30 hover:bg-purple-800/40 text-left border border-purple-800"
              variant="outline"
            >
              <div className="flex items-center">
                <Download className="h-5 w-5 mr-3 text-purple-400" />
                <div>
                  <h3 className="font-medium">Import Existing Wallet</h3>
                  <p className="text-sm text-gray-400">Import using private key or seed phrase</p>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
            </Button>

            <Button
              onClick={() => handleOptionSelect("connect")}
              className="flex justify-between items-center w-full p-4 h-auto bg-purple-900/30 hover:bg-purple-800/40 text-left border border-purple-800"
              variant="outline"
            >
              <div className="flex items-center">
                <Wallet className="h-5 w-5 mr-3 text-purple-400" />
                <div>
                  <h3 className="font-medium">Connect Hardware Wallet</h3>
                  <p className="text-sm text-gray-400">Connect Ledger, Trezor or other hardware wallets</p>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
            </Button>
          </div>
        ) : (
          <div className="py-4">
            {selectedOption === "generate" && (
              <div className="space-y-4">
                <p>Generate a new {info.name} wallet with a unique address and secure private key.</p>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={handleBack}>
                    Back
                  </Button>
                  <Button onClick={handleGenerateWallet}>Generate Wallet</Button>
                </div>
              </div>
            )}

            {selectedOption === "import" && (
              <div className="space-y-4">
                <p>Import your existing {info.name} wallet using your private key or seed phrase.</p>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={handleBack}>
                    Back
                  </Button>
                  <Button>Continue</Button>
                </div>
              </div>
            )}

            {selectedOption === "connect" && (
              <div className="space-y-4">
                <p>Connect your hardware wallet to securely manage your {info.name} assets.</p>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={handleBack}>
                    Back
                  </Button>
                  <Button>Connect Device</Button>
                </div>
              </div>
            )}
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

