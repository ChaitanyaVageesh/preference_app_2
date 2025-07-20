"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoeCard } from "./shoe-card"
import type { Shoe } from "@/lib/supabase"

interface ShoePairComparisonProps {
  shoes: [Shoe, Shoe]
  selectedShoeId: number | null
  onShoeSelect: (shoeId: number) => void
  pairNumber: number
}

const pairDimensions = [
  "Price Range & Brand Sensitivity",
  "Social Influence Trend & Context",
  "Comfort & Functional Fit",
  "Quality Durability & Purpose",
  "Brand Trust & Sensitivity",
  "Celebrity Endorsement & Social Validation",
  "Design & Aesthetic Alignment",
  "Social Influence (Mass vs Niche)",
  "Economic Constraints & Novelty",
  "Sustainability & Brand CSR",
  "Functional Fit vs Aesthetic Alignment",
  "Brand Trust vs Economic Constraints",
  "Social Validation vs Psychological Motivators",
  "Aesthetic Alignment (Trend vs Classic)",
  "Functional Fit vs Economic Constraints",
  "Psychological Motivators vs Brand Trust",
  "Functional Fit vs Contextual Pressure",
  "Social Validation vs Aesthetic Alignment",
]

export function ShoePairComparison({ shoes, selectedShoeId, onShoeSelect, pairNumber }: ShoePairComparisonProps) {
  const dimension = pairDimensions[pairNumber - 1] || `Pair ${pairNumber}`

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center">
          <div className="text-sm text-gray-500 mb-1">Testing: {dimension}</div>
          <div>Pair {pairNumber} of 18: Choose Your Preference</div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          {shoes.map((shoe) => (
            <ShoeCard
              key={shoe.id}
              shoe={shoe}
              isSelected={selectedShoeId === shoe.id}
              onSelect={() => onShoeSelect(shoe.id)}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
