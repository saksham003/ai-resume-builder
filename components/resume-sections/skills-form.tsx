"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface SkillsFormProps {
  data: string[]
}

export function SkillsForm({ data }: SkillsFormProps) {
  const [skills, setSkills] = useState<string[]>(data)
  const [newSkill, setNewSkill] = useState("")

  const addSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill.trim()])
      setNewSkill("")
    }
  }

  const removeSkill = (index: number) => {
    const updatedSkills = [...skills]
    updatedSkills.splice(index, 1)
    setSkills(updatedSkills)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addSkill()
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Skills</CardTitle>
        <CardDescription>Add your technical and professional skills</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="new-skill">Add Skill</Label>
          <div className="flex gap-2">
            <Input
              id="new-skill"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter a skill and press Enter"
            />
            <Button type="button" onClick={addSkill}>
              Add
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm">
              {skill}
              <Button variant="ghost" size="icon" className="h-4 w-4 rounded-full" onClick={() => removeSkill(index)}>
                <X className="h-3 w-3" />
                <span className="sr-only">Remove {skill}</span>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
