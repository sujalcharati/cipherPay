// "use client"

// import { useState, useEffect } from "react"
// import { useParams, useRouter } from "next/navigation"
// import { CuboidIcon as Cube, Copy, Eye, EyeOff, Plus, Trash2, AlertTriangle, ArrowLeft, Check } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
// import { Badge } from "@/components/ui/badge"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Switch } from "@/components/ui/switch"
// import { Label } from "@/components/ui/label"
// import {generateMnemonic} from "bip39"

// // Mock seed phrase generation
// // const generateSeedPhrase = () => {
// //   const words = [
// //     "abandon",
// //     "ability",
// //     "able",
// //     "about",
// //     "above",
// //     "absent",
// //     "absorb",
// //     "abstract",
// //     "absurd",
// //     "abuse",
// //     "access",
// //     "accident",
// //     "account",
// //     "accuse",
// //     "achieve",
// //     "acid",
// //     "acoustic",
// //     "acquire",
// //     "across",
// //     "act",
// //     "action",
// //     "actor",
// //     "actress",
// //     "actual",
// //     "adapt",
// //     "add",
// //     "addict",
// //     "address",
// //     "adjust",
// //     "admit",
// //     "adult",
// //     "advance",
// //     "advice",
// //     "aerobic",
// //     "affair",
// //     "afford",
// //     "afraid",
// //     "again",
// //     "age",
// //     "agent",
// //   ]

// //   const seedPhrase = []
// //   for (let i = 0; i < 12; i++) {
// //     const randomIndex = Math.floor(Math.random() * words.length)
// //     seedPhrase.push(words[randomIndex])
// //   }

// //   return seedPhrase
// // }

// // Mock key generation
// const generateKeys = (blockchain: string) => {
//   const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

//   let publicKey = ""
//   let privateKey = ""

//   // Generate a mock public key
//   if (blockchain === "ethereum") {
//     publicKey = "0x"
//     for (let i = 0; i < 40; i++) {
//       publicKey += chars.charAt(Math.floor(Math.random() * chars.length))
//     }
//   } else {
//     // Solana style
//     for (let i = 0; i < 44; i++) {
//       publicKey += chars.charAt(Math.floor(Math.random() * chars.length))
//     }
//   }

//   // Generate a mock private key
//   privateKey = blockchain === "ethereum" ? "0x" : ""
//   for (let i = 0; i < 64; i++) {
//     privateKey += chars.charAt(Math.floor(Math.random() * chars.length))
//   }

//   return { publicKey, privateKey }
// }

// interface Wallet {
//   id: string
//   name: string
//   seedPhrase: string[]
//   publicKey: string
//   privateKey: string
// }

// export default function GenerateWalletPage() {
//   const params = useParams()
//   const router = useRouter()
//   const blockchain = params.blockchain as string

//   const [wallets, setWallets] = useState<Wallet[]>([])
//   const [showPrivateKey, setShowPrivateKey] = useState(false)
//   const [showSeedPhrase, setShowSeedPhrase] = useState(false)
//   const [copiedField, setCopiedField] = useState<string | null>(null)
//   const [isDarkMode, setIsDarkMode] = useState(true)
//     const [mnemonic, setMnemonic] = useState("");

//   // Generate a wallet on initial load
//   useEffect(() => {
//     generateNewWallet()
//   }, [])



//   const generateNewWallet = async () => {
//     const seedPhrase = (await generateMnemonic()).split(" ");

//     const newWallet: Wallet = {
//           id: Date.now().toString(),
//           name: `${blockchain.charAt(0).toUpperCase() + blockchain.slice(1)} Wallet ${wallets.length + 1}`,
//           seedPhrase,
//           publicKey,
//           privateKey, 
//         }
//     setMnemonic(mn);

//   }
//   // const generateNewWallet = () => {
//   //   const seedPhrase = generateSeedPhrase()
//   //   const { publicKey, privateKey } = generateKeys(blockchain)

//   //   const newWallet: Wallet = {
//   //     id: Date.now().toString(),
//   //     name: `${blockchain.charAt(0).toUpperCase() + blockchain.slice(1)} Wallet ${wallets.length + 1}`,
//   //     seedPhrase,
//   //     publicKey,
//   //     privateKey,
//   //   }

//   //   setWallets([...wallets, newWallet])
//   // }

//   const deleteWallet = (id: string) => {
//     setWallets(wallets.filter((wallet) => wallet.id !== id))
//   }

//   const copyToClipboard = (text: string, field: string) => {
//     navigator.clipboard.writeText(text)
//     setCopiedField(field)
//     setTimeout(() => setCopiedField(null), 2000)
//   }

//   const blockchainInfo = {
//     ethereum: {
//       name: "Ethereum",
//       color: "bg-blue-500",
//       textColor: "text-blue-500",
//       borderColor: "border-blue-500",
//       icon: "E",
//     },
//     solana: {
//       name: "Solana",
//       color: "bg-purple-500",
//       textColor: "text-purple-500",
//       borderColor: "border-purple-500",
//       icon: "S",
//     },
//   }

//   const info = blockchain === "ethereum" ? blockchainInfo.ethereum : blockchainInfo.solana

//   return (
//     <div className={`min-h-screen ${isDarkMode ? "bg-[#2D0A5A] text-white" : "bg-white text-gray-900"}`}>
//       <header className="p-4 md:p-6 border-b border-purple-800/30">
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="flex items-center gap-2">
//             <Cube className="h-8 w-8 text-purple-400" />
//             <span className="text-2xl font-bold text-purple-400">CipherPay</span>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="flex items-center space-x-2">
//               <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={setIsDarkMode} />
//               <Label htmlFor="dark-mode">Dark Mode</Label>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="container mx-auto p-4 md:p-6">
//         <Button variant="ghost" className="mb-6 flex items-center gap-2" onClick={() => router.push("/")}>
//           <ArrowLeft className="h-4 w-4" />
//           Back to Networks
//         </Button>

//         <div className="flex items-center gap-3 mb-6">
//           <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${info.color}`}>
//             <span className="text-lg font-bold text-white">{info.icon}</span>
//           </div>
//           <h1 className="text-2xl font-bold">{info.name} Wallets</h1>
//         </div>

//         <Alert className="mb-6 bg-yellow-500/20 border-yellow-500/50">
//           <AlertTriangle className="h-4 w-4 text-yellow-500" />
//           <AlertTitle className="text-yellow-500">Important Security Notice</AlertTitle>
//           <AlertDescription>
//             Never share your seed phrase or private keys with anyone. Keep them in a safe place. Anyone with access to
//             these can control your funds.
//           </AlertDescription>
//         </Alert>

//         <div className="grid gap-6">
//           {wallets.map((wallet) => (
//             <Card
//               key={wallet.id}
//               className={`${isDarkMode ? "bg-purple-900/20 border-purple-800/50" : "bg-white border-gray-200"}`}
//             >
//               <CardHeader className="flex flex-row items-start justify-between">
//                 <div>
//                   <CardTitle className="flex items-center gap-2">
//                     {wallet.name}
//                     <Badge className={`${info.color} text-white`}>{info.name}</Badge>
//                   </CardTitle>
//                   <CardDescription className={`${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
//                     Manage your wallet details securely
//                   </CardDescription>
//                 </div>
//                 <Button variant="destructive" size="icon" className="h-8 w-8" onClick={() => deleteWallet(wallet.id)}>
//                   <Trash2 className="h-4 w-4" />
//                 </Button>
//               </CardHeader>

//               <CardContent>
//                 <Tabs defaultValue="seed">
//                   <TabsList className="grid grid-cols-3 mb-4">
//                     <TabsTrigger value="seed">Seed Phrase</TabsTrigger>
//                     <TabsTrigger value="public">Public Key</TabsTrigger>
//                     <TabsTrigger value="private">Private Key</TabsTrigger>
//                   </TabsList>

//                   <TabsContent value="seed" className="space-y-4">
//                     <div className="flex justify-between items-center">
//                       <h3 className="font-medium">Recovery Seed Phrase</h3>
//                       <Button
//                         variant="outline"
//                         size="sm"
//                         className="h-8"
//                         onClick={() => setShowSeedPhrase(!showSeedPhrase)}
//                       >
//                         {showSeedPhrase ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
//                         {showSeedPhrase ? "Hide" : "Show"}
//                       </Button>
//                     </div>

//                     <div
//                       className={`grid grid-cols-3 gap-2 p-4 rounded-lg ${isDarkMode ? "bg-purple-950/50 border border-purple-800/30" : "bg-gray-50 border border-gray-200"}`}
//                     >
//                       {wallet.seedPhrase.map((word, index) => (
//                         <div key={index} className="flex items-center">
//                           <span className={`w-6 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
//                             {index + 1}.
//                           </span>
//                           <span className="font-mono">{showSeedPhrase ? word : "••••••"}</span>
//                         </div>
//                       ))}
//                     </div>

//                     <Button
//                       variant="outline"
//                       className="w-full"
//                       onClick={() => copyToClipboard(wallet.seedPhrase.join(" "), `seed-${wallet.id}`)}
//                     >
//                       {copiedField === `seed-${wallet.id}` ? (
//                         <>
//                           <Check className="h-4 w-4 mr-2" />
//                           Copied!
//                         </>
//                       ) : (
//                         <>
//                           <Copy className="h-4 w-4 mr-2" />
//                           Copy Seed Phrase
//                         </>
//                       )}
//                     </Button>
//                   </TabsContent>

//                   <TabsContent value="public">
//                     <div className="space-y-4">
//                       <div>
//                         <h3 className="font-medium mb-2">Public Key (Address)</h3>
//                         <div
//                           className={`p-4 rounded-lg font-mono text-sm break-all ${isDarkMode ? "bg-purple-950/50 border border-purple-800/30" : "bg-gray-50 border border-gray-200"}`}
//                         >
//                           {wallet.publicKey}
//                         </div>
//                       </div>

//                       <Button
//                         variant="outline"
//                         className="w-full"
//                         onClick={() => copyToClipboard(wallet.publicKey, `public-${wallet.id}`)}
//                       >
//                         {copiedField === `public-${wallet.id}` ? (
//                           <>
//                             <Check className="h-4 w-4 mr-2" />
//                             Copied!
//                           </>
//                         ) : (
//                           <>
//                             <Copy className="h-4 w-4 mr-2" />
//                             Copy Public Key
//                           </>
//                         )}
//                       </Button>
//                     </div>
//                   </TabsContent>

//                   <TabsContent value="private">
//                     <div className="space-y-4">
//                       <div className="flex justify-between items-center">
//                         <h3 className="font-medium">Private Key</h3>
//                         <Button
//                           variant="outline"
//                           size="sm"
//                           className="h-8"
//                           onClick={() => setShowPrivateKey(!showPrivateKey)}
//                         >
//                           {showPrivateKey ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
//                           {showPrivateKey ? "Hide" : "Show"}
//                         </Button>
//                       </div>

//                       <div
//                         className={`p-4 rounded-lg font-mono text-sm break-all ${isDarkMode ? "bg-purple-950/50 border border-purple-800/30" : "bg-gray-50 border border-gray-200"}`}
//                       >
//                         {showPrivateKey
//                           ? wallet.privateKey
//                           : "••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••"}
//                       </div>

//                       <Button
//                         variant="outline"
//                         className="w-full"
//                         onClick={() => copyToClipboard(wallet.privateKey, `private-${wallet.id}`)}
//                       >
//                         {copiedField === `private-${wallet.id}` ? (
//                           <>
//                             <Check className="h-4 w-4 mr-2" />
//                             Copied!
//                           </>
//                         ) : (
//                           <>
//                             <Copy className="h-4 w-4 mr-2" />
//                             Copy Private Key
//                           </>
//                         )}
//                       </Button>
//                     </div>
//                   </TabsContent>
//                 </Tabs>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <Button className="mt-6 w-full" onClick={generateNewWallet}>
//           <Plus className="h-4 w-4 mr-2" />
//           Generate New Wallet
//         </Button>
//       </div>
//     </div>
//   )
// }




"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { CuboidIcon as Cube, Copy, Eye, EyeOff, Plus, Trash2, AlertTriangle, ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

// Mock seed phrase generation
const generateSeedPhrase = () => {
  const words = [
    "abandon",
    "ability",
    "able",
    "about",
    "above",
    "absent",
    "absorb",
    "abstract",
    "absurd",
    "abuse",
    "access",
    "accident",
    "account",
    "accuse",
    "achieve",
    "acid",
    "acoustic",
    "acquire",
    "across",
    "act",
    "action",
    "actor",
    "actress",
    "actual",
    "adapt",
    "add",
    "addict",
    "address",
    "adjust",
    "admit",
    "adult",
    "advance",
    "advice",
    "aerobic",
    "affair",
    "afford",
    "afraid",
    "again",
    "age",
    "agent",
  ]

  const seedPhrase = []
  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * words.length)
    seedPhrase.push(words[randomIndex])
  }

  return seedPhrase
}

// Mock key generation
const generateKeys = (blockchain: string) => {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

  let publicKey = ""
  let privateKey = ""

  // Generate a mock public key
  if (blockchain === "ethereum") {
    publicKey = "0x"
    for (let i = 0; i < 40; i++) {
      publicKey += chars.charAt(Math.floor(Math.random() * chars.length))
    }
  } else {
    // Solana style
    for (let i = 0; i < 44; i++) {
      publicKey += chars.charAt(Math.floor(Math.random() * chars.length))
    }
  }

  // Generate a mock private key
  privateKey = blockchain === "ethereum" ? "0x" : ""
  for (let i = 0; i < 64; i++) {
    privateKey += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  return { publicKey, privateKey }
}

interface Wallet {
  id: string
  name: string
  seedPhrase: string[]
  publicKey: string
  privateKey: string
}

export default function GenerateWalletPage() {
  const params = useParams()
  const router = useRouter()
  const blockchain = params.blockchain as string

  const [wallets, setWallets] = useState<Wallet[]>([])
  const [showPrivateKey, setShowPrivateKey] = useState(false)
  const [showSeedPhrase, setShowSeedPhrase] = useState(false)
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [isDarkMode, setIsDarkMode] = useState(true)

  // Generate a wallet on initial load
  useEffect(() => {
    generateNewWallet()
  }, [])

  const generateNewWallet = () => {
    const seedPhrase = generateSeedPhrase()
    const { publicKey, privateKey } = generateKeys(blockchain)

    const newWallet: Wallet = {
      id: Date.now().toString(),
      name: `${blockchain.charAt(0).toUpperCase() + blockchain.slice(1)} Wallet ${wallets.length + 1}`,
      seedPhrase,
      publicKey,
      privateKey,
    }

    setWallets([...wallets, newWallet])
  }

  const deleteWallet = (id: string) => {
    setWallets(wallets.filter((wallet) => wallet.id !== id))
  }

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const blockchainInfo = {
    ethereum: {
      name: "Ethereum",
      color: "bg-blue-500",
      textColor: "text-blue-500",
      borderColor: "border-blue-500",
      icon: "E",
    },
    solana: {
      name: "Solana",
      color: "bg-purple-500",
      textColor: "text-purple-500",
      borderColor: "border-purple-500",
      icon: "S",
    },
  }

  const info = blockchain === "ethereum" ? blockchainInfo.ethereum : blockchainInfo.solana

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-[#2D0A5A] text-white" : "bg-white text-gray-900"}`}>
      <header className="p-4 md:p-6 border-b border-purple-800/30">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Cube className="h-8 w-8 text-purple-400" />
            <span className="text-2xl font-bold text-purple-400">CipherPay</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-2">
              <Switch id="dark-mode" checked={isDarkMode} onCheckedChange={setIsDarkMode} />
              <Label htmlFor="dark-mode">Dark Mode</Label>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4 md:p-6">
        <Button variant="ghost" className="mb-6 flex items-center gap-2" onClick={() => router.push("/")}>
          <ArrowLeft className="h-4 w-4" />
          Back to Networks
        </Button>

        <div className="flex items-center gap-3 mb-6">
          <div className={`flex items-center justify-center w-10 h-10 rounded-lg ${info.color}`}>
            <span className="text-lg font-bold text-white">{info.icon}</span>
          </div>
          <h1 className="text-2xl font-bold">{info.name} Wallets</h1>
        </div>

        <Alert className="mb-6 bg-yellow-500/20 border-yellow-500/50">
          <AlertTriangle className="h-4 w-4 text-yellow-500" />
          <AlertTitle className="text-yellow-500">Important Security Notice</AlertTitle>
          <AlertDescription>
            Never share your seed phrase or private keys with anyone. Keep them in a safe place. Anyone with access to
            these can control your funds.
          </AlertDescription>
        </Alert>

        <div className="grid gap-6">
          {wallets.map((wallet) => (
            <Card
              key={wallet.id}
              className={`${isDarkMode ? "bg-purple-900/20 border-purple-800/50" : "bg-white border-gray-200"}`}
            >
              <CardHeader className="flex flex-row items-start justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    {wallet.name}
                    <Badge className={`${info.color} text-white`}>{info.name}</Badge>
                  </CardTitle>
                  <CardDescription className={`${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                    Manage your wallet details securely
                  </CardDescription>
                </div>
                <Button variant="destructive" size="icon" className="h-8 w-8" onClick={() => deleteWallet(wallet.id)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardHeader>

              <CardContent>
                <Tabs defaultValue="seed">
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="seed">Seed Phrase</TabsTrigger>
                    <TabsTrigger value="public">Public Key</TabsTrigger>
                    <TabsTrigger value="private">Private Key</TabsTrigger>
                  </TabsList>

                  <TabsContent value="seed" className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Recovery Seed Phrase</h3>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8"
                        onClick={() => setShowSeedPhrase(!showSeedPhrase)}
                      >
                        {showSeedPhrase ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                        {showSeedPhrase ? "Hide" : "Show"}
                      </Button>
                    </div>

                    <div
                      className={`grid grid-cols-3 gap-2 p-4 rounded-lg ${isDarkMode ? "bg-purple-950/50 border border-purple-800/30" : "bg-gray-50 border border-gray-200"}`}
                    >
                      {wallet.seedPhrase.map((word, index) => (
                        <div key={index} className="flex items-center">
                          <span className={`w-6 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                            {index + 1}.
                          </span>
                          <span className="font-mono">{showSeedPhrase ? word : "••••••"}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => copyToClipboard(wallet.seedPhrase.join(" "), `seed-${wallet.id}`)}
                    >
                      {copiedField === `seed-${wallet.id}` ? (
                        <>
                          <Check className="h-4 w-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-2" />
                          Copy Seed Phrase
                        </>
                      )}
                    </Button>
                  </TabsContent>

                  <TabsContent value="public">
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-medium mb-2">Public Key (Address)</h3>
                        <div
                          className={`p-4 rounded-lg font-mono text-sm break-all ${isDarkMode ? "bg-purple-950/50 border border-purple-800/30" : "bg-gray-50 border border-gray-200"}`}
                        >
                          {wallet.publicKey}
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => copyToClipboard(wallet.publicKey, `public-${wallet.id}`)}
                      >
                        {copiedField === `public-${wallet.id}` ? (
                          <>
                            <Check className="h-4 w-4 mr-2" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4 mr-2" />
                            Copy Public Key
                          </>
                        )}
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="private">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium">Private Key</h3>
                        <Button
                          variant="outline"
                          size="sm"
                          className="h-8"
                          onClick={() => setShowPrivateKey(!showPrivateKey)}
                        >
                          {showPrivateKey ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                          {showPrivateKey ? "Hide" : "Show"}
                        </Button>
                      </div>

                      <div
                        className={`p-4 rounded-lg font-mono text-sm break-all ${isDarkMode ? "bg-purple-950/50 border border-purple-800/30" : "bg-gray-50 border border-gray-200"}`}
                      >
                        {showPrivateKey
                          ? wallet.privateKey
                          : "••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••"}
                      </div>

                      <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => copyToClipboard(wallet.privateKey, `private-${wallet.id}`)}
                      >
                        {copiedField === `private-${wallet.id}` ? (
                          <>
                            <Check className="h-4 w-4 mr-2" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4 mr-2" />
                            Copy Private Key
                          </>
                        )}
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button className="mt-6 w-full" onClick={generateNewWallet}>
          <Plus className="h-4 w-4 mr-2" />
          Generate New Wallet
        </Button>
      </div>
    </div>
  )
}


