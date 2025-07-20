"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ShoePairComparison } from "@/components/shoe-pair-comparison"
import { ProgressIndicator } from "@/components/progress-indicator"
import { UserNameForm } from "@/components/user-name-form"
import { getSupabaseClient, isSupabaseConfigured, type Shoe } from "@/lib/supabase"
import { CheckCircle, ArrowRight, ArrowLeft, RotateCcw, AlertTriangle, Database, Play } from "lucide-react"

// Your exact shoe data
const mockShoeData: Shoe[] = [
  // Pair 1: PriceRange & BrandSensitivity
  {
    id: 1,
    name: "Bata Power Running Shoe",
    price: 30,
    features: [
      "ValueForMoney",
      "Basic mesh upper",
      "Lightweight EVA outsole",
      "Value-focused cushioning",
      "Everyday utility",
    ],
    image_url: "/images/11.avif",
    pair_id: 1,
  },
  {
    id: 2,
    name: "Gucci Rhyton Sneaker",
    price: 950,
    features: [
      "Luxury",
      "Ivory leather construction",
      "Bulky silhouette",
      "Debossed Gucci logo",
      "Made in Italy",
      "High-status branding",
    ],
    image_url: "/images/12.avif",
    pair_id: 1,
  },

  // Pair 2: SocialInfluenceTrend & Context
  {
    id: 3,
    name: "Nike x Off-White Air Jordan 1",
    price: 2500,
    features: [
      "Most Bought",
      "Deconstructed design",
      "Signature zip-tie tag",
      '"AIR" branding on midsole',
      "Limited edition resale market",
      "High social validation",
    ],
    image_url: "/images/21.jpeg",
    pair_id: 2,
  },
  {
    id: 4,
    name: "Clarks Desert Boot",
    price: 150,
    features: [
      "Classic Formal",
      "Genuine suede or leather upper",
      "Natural crepe sole",
      "Timeless 2-eyelet design",
      "Versatile formal/casual wear",
      "Heritage brand trust",
    ],
    image_url: "/images/22.webp",
    pair_id: 2,
  },

  // Pair 3: Comfort & Functional Fit
  {
    id: 5,
    name: "Vans Classic Slip-On",
    price: 60,
    features: [
      "Low profile canvas upper",
      "Elastic side accents",
      "Minimalist aesthetic",
      "Signature rubber waffle outsole",
    ],
    image_url: "/images/31.jpeg",
    pair_id: 3,
  },
  {
    id: 6,
    name: "Hoka Clifton 9",
    price: 145,
    features: [
      "Maximum cushion EVA foam midsole",
      "Early stage Meta-Rocker for smooth ride",
      "Breathable engineered knit upper",
      "APMA Seal of Acceptance for foot health",
    ],
    image_url: "/images/32.jpeg",
    pair_id: 3,
  },

  // Pair 4: QualityDurability & Purpose
  {
    id: 7,
    name: "Jimmy Choo Romy 100 Pump",
    price: 750,
    features: [
      "Patent leather",
      "Pointy toe stiletto design",
      "100mm heel height",
      "Leather lining and sole",
      "Event-specific delicate construction",
    ],
    image_url: "/images/41.jpeg",
    pair_id: 4,
  },
  {
    id: 8,
    name: "Timberland 6-Inch Premium Boot",
    price: 198,
    features: [
      "Premium waterproof leather",
      "Seam-sealed construction for durability",
      "PrimaLoft insulation",
      "Anti-fatigue technology for comfort",
    ],
    image_url: "/images/42.jpg",
    pair_id: 4,
  },

  // Pair 5: Brand Trust & Sensitivity
  {
    id: 9,
    name: "Amazon Essentials Classic Sneaker",
    price: 25,
    features: [
      "Generic Private Label",
      "Faux leather upper",
      "Minimalist design",
      "Basic rubber sole",
      "Private label value pricing",
      "Low brand recognition",
    ],
    image_url: "/images/51.jpg",
    pair_id: 5,
  },
  {
    id: 10,
    name: "Adidas Superstar",
    price: 90,
    features: [
      "Be a part of global brand",
      "Iconic rubber shell toe",
      "Full-grain leather upper",
      "Global brand recognition",
      "Decades of cultural heritage",
      "3-Stripes branding",
    ],
    image_url: "/images/52.jpeg",
    pair_id: 5,
  },

  // Pair 6: Celebrity Endorsement & Social Validation
  {
    id: 11,
    name: "Decathlon Kalenji KS900",
    price: 90,
    features: [
      "K-Ring heel cushioning technology",
      "Arkstab stability system",
      "Focus on performance metrics",
      "No celebrity endorsement",
      "Function-over-form design",
    ],
    image_url: "/images/61.jpg",
    pair_id: 6,
  },
  {
    id: 12,
    name: "Adidas Yeezy Boost 350 V2",
    price: 230,
    features: [
      "Kardarshian - West (Ye) collaboration",
      "BOOST midsole cushioning",
      "Primeknit upper",
      "High resale value and hype",
      "Strong fan-following",
    ],
    image_url: "/images/62.webp",
    pair_id: 6,
  },

  // Pair 7: Design & Aesthetic Alignment
  {
    id: 13,
    name: "Allen Edmonds Park Avenue Oxford",
    price: 425,
    features: [
      "Premium calfskin leather",
      "Classic cap-toe Oxford design",
      "360° Goodyear welt construction",
      "Timeless formal style",
      "Made in USA",
    ],
    image_url: "/images/71.jpg",
    pair_id: 7,
  },
  {
    id: 14,
    name: "Balenciaga Triple S Sneaker",
    price: 1100,
    features: [
      "Complex 3-layered outsole",
      "Aggressive trend",
      "Oversized dad shoe silhouette",
      "Embroidered size at toe",
      "Trend-driven high-fashion design",
      "Mixed materials",
    ],
    image_url: "/images/72.png",
    pair_id: 7,
  },

  // Pair 8: Social Influence
  {
    id: 15,
    name: "Viberg Service Boot",
    price: 760,
    features: [
      "Horween Chromexcel leather",
      "Stitchdown construction",
      "Small-batch production",
      "Niche enthusiast community",
      "Cult following",
    ],
    image_url: "/images/81.webp",
    pair_id: 8,
  },
  {
    id: 16,
    name: "Skechers D'Lites",
    price: 75,
    features: [
      "Air-Cooled Memory Foam insole",
      "Chunky retro design",
      "Widespread retail availability",
      "High volume of peer reviews",
      "Mass-market popularity",
    ],
    image_url: "/images/82.webp",
    pair_id: 8,
  },

  // Pair 9: Economic Constraints & Novelty
  {
    id: 17,
    name: "Nike Revolution 7 (Sale Price)",
    price: 49.99,
    features: [
      "Soft foam midsole for cushioning",
      "Made with recycled materials",
      "Entry-level running shoe",
      "Frequently available on discount",
    ],
    image_url: "/images/91.jpeg",
    pair_id: 9,
  },
  {
    id: 18,
    name: "Common Projects Achilles Low",
    price: 450,
    features: [
      "Minimalist luxury design",
      "Signature gold foil serial number",
      "Premium Italian leather",
      "Rarely discounted, holds value",
      "Psychological motivator of exclusivity",
    ],
    image_url: "/images/92.jpeg",
    pair_id: 9,
  },

  // Pair 10: Sustainability & Brand CSR
  {
    id: 19,
    name: "Zara Contrast Sole Sneaker",
    price: 70,
    features: [
      "Polyurethane/Polyester upper",
      "Standard vulcanized rubber sole",
      "Trend-driven fast-fashion cycle",
      "Conventional materials and production",
    ],
    image_url: "/images/101.jpg",
    pair_id: 10,
  },
  {
    id: 20,
    name: "Allbirds Wool Runners",
    price: 110,
    features: [
      "ZQ Merino Wool upper (ethical)",
      "SweetFoam midsole from sugarcane",
      "Carbon neutral company",
      "Focus on sustainability and CSR",
      "Machine washable",
    ],
    image_url: "/images/102.jpeg",
    pair_id: 10,
  },

  // Pair 11: Functional Fit vs. Aesthetic Alignment
  {
    id: 21,
    name: "Hoka Clifton 9",
    price: 145,
    features: [
      "Maximum cushion EVA foam midsole",
      "Early stage Meta-Rocker for smooth ride",
      "Breathable engineered knit upper",
      "APMA Seal of Acceptance for foot health",
    ],
    image_url: "/images/111.webp",
    pair_id: 11,
  },
  {
    id: 22,
    name: "Axel Arigato Clean 90",
    price: 290,
    features: [
      "Handcrafted leather upper",
      "Minimalist high-fashion design",
      "Cushioned footbed",
      "Subtle gold-stamped logo",
      "Made in Portugal",
    ],
    image_url: "/images/112.webp",
    pair_id: 11,
  },

  // Pair 12: Brand Trust vs. Economic Constraints
  {
    id: 23,
    name: "Nike Air Force 1 '07",
    price: 115,
    features: [
      "Genuine leather upper",
      "Nike Air cushioning unit",
      "Iconic and trusted silhouette",
      "High brand recognition and cultural value",
    ],
    image_url: "/images/121.avif",
    pair_id: 12,
  },
  {
    id: 24,
    name: "Unbranded AF1 Replica",
    price: 35,
    features: [
      "Faux-leather upper",
      "Basic rubber sole construction",
      "Identical aesthetic to original",
      "Prioritizes cost over brand authenticity",
    ],
    image_url: "/images/122.jpeg",
    pair_id: 12,
  },

  // Pair 13: Social Validation vs. Psychological Motivators
  {
    id: 25,
    name: "Travis Scott x Air Jordan 1 Low",
    price: 1500,
    features: [
      "Limited celebrity collaboration",
      "Reverse Swoosh logo for high visibility",
      "High resale market value",
      "Overt signal of trend-awareness",
    ],
    image_url: "/images/131.webp",
    pair_id: 13,
  },
  {
    id: 26,
    name: "Common Projects Achilles Low",
    price: 450,
    features: [
      "Premium Italian leather",
      "Signature gold foil serial number",
      "Minimalist, unbranded design",
      "Recognized by niche fashion insiders",
      "Understated stealth wealth signal",
    ],
    image_url: "/images/132.webp",
    pair_id: 13,
  },

  // Pair 14: Aesthetic Alignment
  {
    id: 27,
    name: "Balenciaga Triple S Sneaker",
    price: 1150,
    features: [
      "Complex 3-layered outsole",
      "Aggressive, oversized dad shoe silhouette",
      "High-fashion, trend-driven design",
      "Embroidered branding and size",
    ],
    image_url: "/images/141.png",
    pair_id: 14,
  },
  {
    id: 28,
    name: "Allen Edmonds Park Avenue Oxford",
    price: 425,
    features: [
      "Premium calfskin leather",
      "Classic cap-toe formal design",
      "360° Goodyear welt for longevity",
      "Timeless, multi-generational style",
    ],
    image_url: "/images/142.jpg",
    pair_id: 14,
  },

  // Pair 15: Functional Fit vs. Economic Constraints
  {
    id: 29,
    name: "Red Wing Iron Ranger Boot",
    price: 350,
    features: [
      "Premium full-grain leather",
      "Goodyear welt construction for resoleability",
      "Triple-stitched for maximum durability",
      "High initial cost for long-term value",
    ],
    image_url: "/images/151.jpg",
    pair_id: 15,
  },
  {
    id: 30,
    name: "Fast-Fashion Faux-Leather Boot",
    price: 80,
    features: [
      "Polyurethane upper",
      "Cemented sole for lower cost",
      "Trendy design for a single season",
      "Low initial cost, designed for disposability",
    ],
    image_url: "/images/152.jpeg",
    pair_id: 15,
  },

  // Pair 16: Psychological Motivators vs. Brand Trust
  {
    id: 31,
    name: "Allbirds Wool Runner",
    price: 110,
    features: [
      "ZQ Merino Wool (sustainability story)",
      "SweetFoam midsole from sugarcane",
      "Carbon neutral brand identity",
      "Appeal based on ethical values and CSR",
    ],
    image_url: "/images/161.jpg",
    pair_id: 16,
  },
  {
    id: 32,
    name: "Adidas Stan Smith",
    price: 100,
    features: [
      "Full-grain leather upper (now with recycled options)",
      "Iconic, globally recognized design",
      "Decades of cultural trust and reliability",
      "Appeal based on heritage and proven style",
    ],
    image_url: "/images/162.jpeg",
    pair_id: 16,
  },

  // Pair 17: Functional Fit vs. Contextual Pressure
  {
    id: 33,
    name: "Cole Haan ØriginalGrand Wingtip Oxford",
    price: 160,
    features: [
      "Grand.ØS energy foam for sneaker-like comfort",
      "Lightweight hybrid construction",
      "Breaks convention for user comfort",
      "Modern solution to a traditional need",
    ],
    image_url: "/images/171.jpeg",
    pair_id: 17,
  },
  {
    id: 34,
    name: "Johnston & Murphy Melton Cap Toe",
    price: 185,
    features: [
      "Hand-polished calfskin leather",
      "Traditional Goodyear welt construction",
      "Adheres to formal dress code expectations",
      "Prioritizes tradition and appropriateness",
    ],
    image_url: "/images/172.jpeg",
    pair_id: 17,
  },

  // Pair 18: Social Validation vs. Aesthetic Alignment
  {
    id: 35,
    name: "Birkenstock Arizona Suede",
    price: 110,
    features: [
      "Contoured cork-latex footbed",
      "Instantly recognizable silhouette",
      "High volume of peer reviews and popularity",
      "Signals conformity with a widespread trend",
    ],
    image_url: "/images/181.jpeg",
    pair_id: 18,
  },
  {
    id: 36,
    name: "Suicoke KAW-VS Sandal",
    price: 240,
    features: [
      "Vibram footbed and outsole",
      "Nylon straps with velcro closure",
      "Cult-favorite, architectural design",
      "Signals individuality and niche taste",
    ],
    image_url: "/images/182.jpeg",
    pair_id: 18,
  },
]

export default function ShoePreferencePipeline() {
  const [shoes, setShoes] = useState<Shoe[]>([])
  const [currentPairIndex, setCurrentPairIndex] = useState(0)
  const [userChoices, setUserChoices] = useState<Record<number, number>>({})
  const [userId] = useState(() => crypto.randomUUID())
  const [userName, setUserName] = useState<string>("")
  const [showNameForm, setShowNameForm] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [needsSetup, setNeedsSetup] = useState(false)
  const [isSettingUp, setIsSettingUp] = useState(false)
  const [usingMockData, setUsingMockData] = useState(true)

  const totalPairs = 18

  useEffect(() => {
    if (!showNameForm) {
      if (!isSupabaseConfigured) {
        setShoes(mockShoeData)
        setUsingMockData(true)
        setIsLoading(false)
        return
      }
      checkDatabaseAndFetchShoes()
    }
  }, [showNameForm])

  const handleNameSubmit = (name: string) => {
    setUserName(name)
    setShowNameForm(false)
    setIsLoading(true)
  }

  const checkDatabaseAndFetchShoes = async () => {
    const supabase = getSupabaseClient()
    if (!supabase) {
      setShoes(mockShoeData)
      setUsingMockData(true)
      setIsLoading(false)
      return
    }

    try {
      setIsLoading(true)
      setError(null)

      const { data, error } = await supabase.from("shoes").select("*").order("pair_id", { ascending: true })

      if (error) {
        if (error.message.includes('relation "public.shoes" does not exist')) {
          setNeedsSetup(true)
          setError("Database tables need to be created. Click 'Setup Database' to initialize.")
        } else {
          throw error
        }
      } else {
        if (!data || data.length === 0) {
          setNeedsSetup(true)
          setError("Database is empty. Click 'Setup Database' to add shoe data.")
        } else {
          setShoes(data)
          setNeedsSetup(false)
          setUsingMockData(false)
        }
      }
    } catch (err) {
      setError("Failed to connect to database. Using demo mode.")
      setShoes(mockShoeData)
      setUsingMockData(true)
      console.error("Error fetching shoes:", err)
    } finally {
      setIsLoading(false)
    }
  }

  const setupDatabase = async () => {
    const supabase = getSupabaseClient()
    if (!supabase) {
      setError("Supabase client is not available.")
      return
    }

    setIsSettingUp(true)
    setError(null)

    try {
      const { error: insertError } = await supabase.from("shoes").insert(
        mockShoeData.map((shoe) => ({
          name: shoe.name,
          price: shoe.price,
          features: shoe.features,
          image_url: shoe.image_url,
          pair_id: shoe.pair_id,
        })),
      )

      if (insertError) throw insertError
      await checkDatabaseAndFetchShoes()
    } catch (err) {
      setError("Failed to setup database. Please try again.")
      console.error("Error setting up database:", err)
    } finally {
      setIsSettingUp(false)
    }
  }

  const getCurrentPairShoes = (): [Shoe, Shoe] | null => {
    const currentPairId = currentPairIndex + 1
    const pairShoes = shoes.filter((shoe) => shoe.pair_id === currentPairId)

    if (pairShoes.length === 2) {
      return [pairShoes[0], pairShoes[1]]
    }
    return null
  }

  const handleShoeSelect = (shoeId: number) => {
    const currentPairId = currentPairIndex + 1
    setUserChoices((prev) => ({
      ...prev,
      [currentPairId]: shoeId,
    }))
  }

  const handleNext = () => {
    if (currentPairIndex < totalPairs - 1) {
      setCurrentPairIndex((prev) => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentPairIndex > 0) {
      setCurrentPairIndex((prev) => prev - 1)
    }
  }

  const handleSubmit = async () => {
    if (usingMockData) {
      setIsSubmitting(true)
      setTimeout(() => {
        setIsComplete(true)
        setIsSubmitting(false)
      }, 1000)
      return
    }

    const supabase = getSupabaseClient()
    if (!supabase) {
      setError("Supabase client is not available.")
      return
    }

    setIsSubmitting(true)
    setError(null)

    try {
      const preferences = Object.entries(userChoices).map(([pairId, shoeId]) => ({
        user_id: userId,
        user_name: userName,
        shoe_id: shoeId,
        pair_id: Number.parseInt(pairId),
      }))

      const { error } = await supabase.from("user_preferences").insert(preferences)
      if (error) throw error

      setIsComplete(true)
    } catch (err) {
      setError("Failed to save preferences. Please try again.")
      console.error("Error saving preferences:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleRestart = () => {
    setCurrentPairIndex(0)
    setUserChoices({})
    setIsComplete(false)
    setError(null)
    setShowNameForm(true)
    setUserName("")
  }

  const completedPairs = Object.keys(userChoices).length
  const currentPairShoes = getCurrentPairShoes()
  const currentPairId = currentPairIndex + 1
  const hasCurrentChoice = userChoices[currentPairId] !== undefined
  const allChoicesMade = completedPairs === totalPairs

  // Show name form first
  if (showNameForm) {
    return <UserNameForm onSubmit={handleNameSubmit} />
  }

  // Setup screen for Supabase
  if (needsSetup && isSupabaseConfigured) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <Database className="h-16 w-16 text-blue-500 mx-auto mb-4" />
            <CardTitle className="text-2xl">Database Setup Required</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center text-gray-600">
              <p className="mb-4">
                Hello {userName}! Your Supabase is connected. Let's set up the database tables for 18 shoe pairs.
              </p>
            </div>

            {error && (
              <Alert>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="text-center">
              <Button
                onClick={setupDatabase}
                disabled={isSettingUp}
                className="bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                {isSettingUp ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Setting up database...
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4 mr-2" />
                    Setup Database Tables
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p>Loading shoe collection for {userName}...</p>
        </div>
      </div>
    )
  }

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-4xl">
          <CardHeader className="text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <CardTitle className="text-2xl">Thank You, {userName}!</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600">Your shoe preferences have been successfully recorded!</p>
            <p className="text-sm text-gray-500">User ID: {userId.slice(0, 8)}...</p>

            <div className="text-left bg-gray-50 p-4 rounded-lg max-h-96 overflow-y-auto">
              <h3 className="font-semibold mb-2">{userName}'s Preference Profile:</h3>
              <div className="text-sm space-y-1">
                {Object.entries(userChoices).map(([pairId, shoeId]) => {
                  const shoe = shoes.find((s) => s.id === shoeId)
                  return (
                    <div key={pairId} className="flex justify-between">
                      <span>Pair {pairId}:</span>
                      <span className="font-medium">{shoe?.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            {usingMockData && (
              <Alert className="text-left">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription className="text-sm">
                  <strong>Demo Mode:</strong> Add Supabase integration to save {userName}'s preferences to database
                  permanently.
                </AlertDescription>
              </Alert>
            )}

            {!usingMockData && (
              <Alert className="text-left border-green-200 bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-sm text-green-800">
                  <strong>Saved to Database:</strong> {userName}'s preferences are now stored in the user_preferences
                  table.
                </AlertDescription>
              </Alert>
            )}

            <Button onClick={handleRestart} variant="outline" className="w-full bg-transparent">
              <RotateCcw className="h-4 w-4 mr-2" />
              Start Over
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shoe Preference Survey</h1>
          <p className="text-gray-600">
            Hello {userName}! Choose your preferred shoe from each of the 18 contrasting pairs
          </p>
          {usingMockData && (
            <div className="mt-4">
              <Alert className="max-w-md mx-auto">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription className="text-sm">
                  <strong>Demo Mode:</strong> Add Supabase integration to save {userName}'s preferences to database.
                </AlertDescription>
              </Alert>
            </div>
          )}
        </div>

        <ProgressIndicator currentPair={currentPairIndex + 1} totalPairs={totalPairs} completedPairs={completedPairs} />

        {error && (
          <Alert className="mb-6 max-w-2xl mx-auto">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {currentPairShoes && (
          <div className="mb-8">
            <ShoePairComparison
              shoes={currentPairShoes}
              selectedShoeId={userChoices[currentPairId] || null}
              onShoeSelect={handleShoeSelect}
              pairNumber={currentPairIndex + 1}
            />
          </div>
        )}

        <div className="flex justify-between items-center max-w-2xl mx-auto">
          <Button onClick={handlePrevious} disabled={currentPairIndex === 0} variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>

          <div className="text-sm text-gray-500">
            {currentPairIndex + 1} of {totalPairs}
          </div>

          {currentPairIndex < totalPairs - 1 ? (
            <Button onClick={handleNext} disabled={!hasCurrentChoice}>
              Next
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!allChoicesMade || isSubmitting}
              className="bg-green-600 hover:bg-green-700"
            >
              {isSubmitting ? "Submitting..." : "Submit All Preferences"}
            </Button>
          )}
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Your choices reveal insights about your values, lifestyle, and aesthetic preferences</p>
        </div>
      </div>
    </div>
  )
}
