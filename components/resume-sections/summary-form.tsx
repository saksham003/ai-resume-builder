"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

interface SummaryFormProps {
  data: string
}

export function SummaryForm({ data }: SummaryFormProps) {
  const [summary, setSummary] = useState(data)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Professional Summary</CardTitle>
        <CardDescription>Write a compelling summary that highlights your expertise and career goals</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          rows={6}
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="Experienced software engineer with a passion for..."
        />
        <div className="flex justify-between">
          <Button variant="outline" className="border-foreground text-foreground hover:bg-accent hover:text-foreground">
            Generate with AI
          </Button>
          <Button className="bg-foreground text-background hover:bg-foreground/90">Save Changes</Button>
        </div>
      </CardContent>
    </Card>
  )
}
