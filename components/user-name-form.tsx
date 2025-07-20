"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User } from "lucide-react"

interface UserNameFormProps {
  onSubmit: (name: string) => void
}

export function UserNameForm({ onSubmit }: UserNameFormProps) {
  const [name, setName] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim()) {
      onSubmit(name.trim())
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <User className="h-16 w-16 text-blue-500 mx-auto mb-4" />
          <CardTitle className="text-2xl">Welcome to Shoe Preference Survey</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full" disabled={!name.trim()}>
              Start Survey
            </Button>
          </form>
          <div className="mt-4 text-sm text-gray-600 text-center">
            <p>You'll choose between 18 pairs of contrasting shoes</p>
            <p>This helps us understand your style preferences</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
