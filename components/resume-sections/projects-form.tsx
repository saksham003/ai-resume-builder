"use client"

import { useState } from "react"
import { PlusCircle, GripVertical, X } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface ProjectItem {
  id: string
  name: string
  description: string
  technologies: string[]
  url: string
}

interface ProjectsFormProps {
  data: ProjectItem[]
}

export function ProjectsForm({ data }: ProjectsFormProps) {
  const [projects, setProjects] = useState<ProjectItem[]>(data)
  const [newTech, setNewTech] = useState("")

  const addProject = () => {
    const newProject: ProjectItem = {
      id: Date.now().toString(),
      name: "",
      description: "",
      technologies: [],
      url: "",
    }
    setProjects([...projects, newProject])
  }

  const removeProject = (id: string) => {
    setProjects(projects.filter((proj) => proj.id !== id))
  }

  const addTechnology = (index: number) => {
    if (newTech.trim() !== "") {
      const updated = [...projects]
      updated[index].technologies.push(newTech.trim())
      setProjects(updated)
      setNewTech("")
    }
  }

  const removeTechnology = (projectIndex: number, techIndex: number) => {
    const updated = [...projects]
    updated[projectIndex].technologies.splice(techIndex, 1)
    setProjects(updated)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Projects</CardTitle>
        <CardDescription>Add your notable projects and achievements</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {projects.map((project, index) => (
          <div key={project.id} className="relative rounded-lg border p-4 shadow-sm">
            <div className="absolute -left-2 top-4 cursor-move opacity-50 hover:opacity-100">
              <GripVertical className="h-4 w-4" />
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-2"
              onClick={() => removeProject(project.id)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Remove</span>
            </Button>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor={`project-name-${index}`}>Project Name</Label>
                <Input
                  id={`project-name-${index}`}
                  value={project.name}
                  onChange={(e) => {
                    const updated = [...projects]
                    updated[index].name = e.target.value
                    setProjects(updated)
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`project-description-${index}`}>Description</Label>
                <Textarea
                  id={`project-description-${index}`}
                  rows={3}
                  value={project.description}
                  onChange={(e) => {
                    const updated = [...projects]
                    updated[index].description = e.target.value
                    setProjects(updated)
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`project-url-${index}`}>URL/Link</Label>
                <Input
                  id={`project-url-${index}`}
                  value={project.url}
                  onChange={(e) => {
                    const updated = [...projects]
                    updated[index].url = e.target.value
                    setProjects(updated)
                  }}
                />
              </div>
              <div className="space-y-2">
                <Label>Technologies Used</Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm"
                    >
                      {tech}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-4 w-4 rounded-full"
                        onClick={() => removeTechnology(index, techIndex)}
                      >
                        <X className="h-3 w-3" />
                        <span className="sr-only">Remove {tech}</span>
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add technology"
                    value={newTech}
                    onChange={(e) => setNewTech(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault()
                        addTechnology(index)
                      }
                    }}
                  />
                  <Button type="button" onClick={() => addTechnology(index)}>
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
        <Button type="button" variant="outline" className="w-full gap-2" onClick={addProject}>
          <PlusCircle className="h-4 w-4" />
          Add Project
        </Button>
      </CardContent>
    </Card>
  )
}
