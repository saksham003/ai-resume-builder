"use client"

import type React from "react"

import { useState } from "react"
import { GripVertical, ArrowUp, ArrowDown } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const sectionLabels = {
  summary: "Professional Summary",
  experience: "Work Experience",
  education: "Education",
  skills: "Skills",
  projects: "Projects",
}

interface SectionOrderProps {
  sections: string[]
  onOrderChange: (newOrder: string[]) => void
}

export function SectionOrder({ sections, onOrderChange }: SectionOrderProps) {
  const [sectionOrder, setSectionOrder] = useState<string[]>(sections)
  const [draggedItem, setDraggedItem] = useState<number | null>(null)

  const moveSection = (fromIndex: number, toIndex: number) => {
    if (toIndex < 0 || toIndex >= sectionOrder.length) return

    const newOrder = [...sectionOrder]
    const [movedItem] = newOrder.splice(fromIndex, 1)
    newOrder.splice(toIndex, 0, movedItem)

    setSectionOrder(newOrder)
    onOrderChange(newOrder)
  }

  const handleDragStart = (index: number) => {
    setDraggedItem(index)
  }

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault()
    if (draggedItem === null) return

    const draggedOverItem = e.currentTarget
    // Get the bounding rectangle of the dragged over item
    const rect = draggedOverItem.getBoundingClientRect()
    // Get the mouse position
    const y = e.clientY
    // Calculate the position of the mouse relative to the dragged over item
    const relativePosition = y - rect.top
    // If the mouse is in the top half of the item, insert before; otherwise, insert after
    const insertBefore = relativePosition < rect.height / 2

    if (draggedItem !== index) {
      const newIndex = insertBefore ? index : index + 1
      moveSection(draggedItem, newIndex > draggedItem ? newIndex - 1 : newIndex)
      setDraggedItem(newIndex > draggedItem ? newIndex - 1 : newIndex)
    }
  }

  const handleDragEnd = () => {
    setDraggedItem(null)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Resume Section Order</CardTitle>
        <CardDescription>Drag and drop to reorder sections in your resume</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          {sectionOrder.map((section, index) => (
            <div
              key={section}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDragEnd={handleDragEnd}
              className={`flex items-center justify-between p-3 rounded-md border ${
                draggedItem === index ? "opacity-50 bg-muted" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="cursor-move">
                  <GripVertical className="h-5 w-5 text-muted-foreground" />
                </div>
                <span className="font-medium">{sectionLabels[section]}</span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => moveSection(index, index - 1)}
                  disabled={index === 0}
                >
                  <ArrowUp className="h-4 w-4" />
                  <span className="sr-only">Move up</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => moveSection(index, index + 1)}
                  disabled={index === sectionOrder.length - 1}
                >
                  <ArrowDown className="h-4 w-4" />
                  <span className="sr-only">Move down</span>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4">
          <p className="text-sm text-muted-foreground mb-2">
            The order above determines how sections appear in your resume. Drag sections to reorder them, or use the
            arrow buttons.
          </p>
          <Button
            onClick={() => {
              onOrderChange(sectionOrder)
            }}
          >
            Save Section Order
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
