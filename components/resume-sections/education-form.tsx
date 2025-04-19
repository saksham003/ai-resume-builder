"use client"

import { useState } from "react"
import { PlusCircle, GripVertical, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface EducationItem {
  id: string
  institution: string
  degree: string
  startDate: string
  endDate: string
  location: string
  gpa: string
}

interface EducationFormProps {
  data: EducationItem[]
}

export function EducationForm({ data }: EducationFormProps) {
  const [educations, setEducations] = useState<EducationItem[]>(data)

  const addEducation = () => {
    const newEducation: EducationItem = {
      id: Date.now().toString(),
      institution: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
      gpa: "",
    }
    setEducations([...educations, newEducation])
  }

  const removeEducation = (id: string) => {
    setEducations(educations.filter((edu) => edu.id !== id))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Education</CardTitle>
        <CardDescription>Add your educational background, starting with the most recent</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {educations.map((education, index) => (
          <div key={education.id} className="relative rounded-lg border p-4 shadow-sm">
            <div className="absolute -left-2 top-4 cursor-move opacity-50 hover:opacity-100">
              <GripVertical className="h-4 w-4" />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2"
              onClick={() => removeEducation(education.id)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Remove</span>
            </Button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`institution-${index}`}>Institution</Label>
                <Input
                  id={`institution-${index}`}
                  value={education.institution}
                  onChange={(e) => {
                    const updated = [...educations]
                    updated[index].institution = e.target.value
                    setEducations(updated)
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`degree-${index}`}>Degree</Label>
                <Input
                  id={`degree-${index}`}
                  value={education.degree}
                  onChange={(e) => {
                    const updated = [...educations]
                    updated[index].degree = e.target.value
                    setEducations(updated)
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`startDate-${index}`}>Start Date</Label>
                <Input
                  id={`startDate-${index}`}
                  type="month"
                  value={education.startDate}
                  onChange={(e) => {
                    const updated = [...educations]
                    updated[index].startDate = e.target.value
                    setEducations(updated)
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`endDate-${index}`}>End Date</Label>
                <Input
                  id={`endDate-${index}`}
                  type="month"
                  value={education.endDate}
                  placeholder="Present"
                  onChange={(e) => {
                    const updated = [...educations]
                    updated[index].endDate = e.target.value
                    setEducations(updated)
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`location-${index}`}>Location</Label>
                <Input
                  id={`location-${index}`}
                  value={education.location}
                  onChange={(e) => {
                    const updated = [...educations]
                    updated[index].location = e.target.value
                    setEducations(updated)
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`gpa-${index}`}>GPA</Label>
                <Input
                  id={`gpa-${index}`}
                  value={education.gpa}
                  onChange={(e) => {
                    const updated = [...educations]
                    updated[index].gpa = e.target.value
                    setEducations(updated)
                  }}
                />
              </div>
            </div>
          </div>
        ))}
        <Button type="button" variant="outline" className="w-full gap-2" onClick={addEducation}>
          <PlusCircle className="h-4 w-4" />
          Add Education
        </Button>
      </CardContent>
    </Card>
  )
}
