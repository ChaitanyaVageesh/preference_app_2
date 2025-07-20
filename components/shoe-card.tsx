"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import type { Shoe } from "@/lib/supabase"

interface ShoeCardProps {
  shoe: Shoe
  isSelected: boolean
  onSelect: () => void
}

export function ShoeCard({ shoe, isSelected, onSelect }: ShoeCardProps) {
  return (
    <Card
      className={`relative transition-all duration-200 hover:shadow-lg cursor-pointer ${
        isSelected ? "ring-2 ring-blue-500 shadow-lg" : "hover:ring-1 hover:ring-gray-300"
      }`}
      onClick={onSelect}
    >
      {isSelected && (
        <div className="absolute -top-2 -right-2 z-10">
          <div className="bg-blue-500 text-white rounded-full p-1">
            <Check className="h-4 w-4" />
          </div>
        </div>
      )}

      <CardContent className="p-6">
        <div className="aspect-square mb-4 bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={shoe.image_url || "/placeholder.svg"}
            alt={shoe.name}
            className="w-full h-full object-cover"
            onLoad={() => console.log(`✅ Image loaded: ${shoe.image_url}`)}
            onError={(e) => {
              console.error(`❌ Image failed to load: ${shoe.image_url}`)
              const target = e.target as HTMLImageElement
              // Show a simple gray box with text instead of complex SVG
              target.src = `data:image/svg+xml;charset=UTF-8,%3Csvg width='300' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='300' height='300' fill='%23f3f4f6'/%3E%3Ctext x='150' y='150' fontFamily='Arial' fontSize='14' fill='%236b7280' textAnchor='middle'%3E${encodeURIComponent(shoe.name.split(" ").slice(0, 2).join(" "))}%3C/text%3E%3C/svg%3E`
            }}
          />
        </div>

        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{shoe.name}</h3>

        <div className="text-2xl font-bold text-green-600 mb-3">${shoe.price}</div>

        <div className="space-y-2 mb-4">
          <h4 className="font-medium text-sm text-gray-600">Key Features:</h4>
          <div className="flex flex-wrap gap-1">
            {shoe.features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        <Button onClick={onSelect} className="w-full" variant={isSelected ? "default" : "outline"}>
          {isSelected ? "✓ Selected" : "Choose This Shoe"}
        </Button>
      </CardContent>
    </Card>
  )
}
