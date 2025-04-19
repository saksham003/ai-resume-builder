"use client"

import { useState } from "react"
import { PlusCircle, GripVertical, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface ExperienceItem {
  id: string
  company: string
  position: string
  startDate: string
  endDate: string
  location: string
  description: string
}

interface ExperienceFormProps {
  data: ExperienceItem[]
}

export function ExperienceForm({ data }: ExperienceFormProps) {
  const [experiences, setExperiences] = useState<ExperienceItem[]>(data)

  const addExperience = () => {
    const newExperience: ExperienceItem = {
      id: Date.now().toString(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    }
    setExperiences([...experiences, newExperience])
  }

  const removeExperience = (id: string) => {
    setExperiences(experiences.filter((exp) => exp.id !== id))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Work Experience</CardTitle>
        <CardDescription>Add your work experience, starting with the most recent</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {experiences.map((experience, index) => (
          <div key={experience.id} className="relative rounded-lg border p-4 shadow-sm">
            <div className="absolute -left-2 top-4 cursor-move opacity-50 hover:opacity-100">
              <GripVertical className="h-4 w-4" />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2"
              onClick={() => removeExperience(experience.id)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Remove</span>
            </Button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <Label htmlFor={`company-${index}`}>Company</Label>
                <Input
                  id={`company-${index}`}
                  value={experience.company}
                  onChange={(e) => {
                    const updated = [...experiences]
                    updated[index].company = e.target.value
                    setExperiences(updated)
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`position-${index}`}>Position</Label>
                <Input
                  id={`position-${index}`}
                  value={experience.position}
                  onChange={(e) => {
                    const updated = [...experiences]
                    updated[index].position = e.target.value
                    setExperiences(updated)
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`startDate-${index}`}>Start Date</Label>
                <Input
                  id={`startDate-${index}`}
                  type="month"
                  value={experience.startDate}
                  onChange={(e) => {
                    const updated = [...experiences]
                    updated[index].startDate = e.target.value
                    setExperiences(updated)
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`endDate-${index}`}>End Date</Label>
                <Input
                  id={`endDate-${index}`}
                  type="month"
                  value={experience.endDate}
                  placeholder="Present"
                  onChange={(e) => {
                    const updated = [...experiences]
                    updated[index].endDate = e.target.value
                    setExperiences(updated)
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`location-${index}`}>Location</Label>
                <Input
                  id={`location-${index}`}
                  value={experience.location}
                  onChange={(e) => {
                    const updated = [...experiences]
                    updated[index].location = e.target.value
                    setExperiences(updated)
                  }}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor={`description-${index}`}>Description</Label>
              <Textarea
                id={`description-${index}`}
                rows={3}
                value={experience.description}
                onChange={(e) => {
                  const updated = [...experiences]
                  updated[index].description = e.target.value
                  setExperiences(updated)
                }}
              />
            </div>
          </div>
        ))}
        <Button type="button" variant="outline" className="w-full gap-2" onClick={addExperience}>
          <PlusCircle className="h-4 w-4" />
          Add Experience
        </Button>
      </CardContent>
    </Card>
  )
}
