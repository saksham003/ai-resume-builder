"use client"

import { formatDistanceToNow } from "date-fns"
import { FileText, Edit, BarChart3, Trash2, MoreVertical } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface ResumeCardProps {
  resume: {
    id: string
    name: string
    lastEdited: string
  }
}

export function ResumeCard({ resume }: ResumeCardProps) {
  const lastEditedFormatted = formatDistanceToNow(new Date(resume.lastEdited), {
    addSuffix: true,
  })

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="bg-muted/30 p-4 pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-foreground" />
            <h3 className="font-medium text-foreground">{resume.name}</h3>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-foreground hover:bg-accent">
                <MoreVertical className="h-4 w-4" />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Edit className="mr-2 h-4 w-4 text-foreground" />
                <span>Edit</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BarChart3 className="mr-2 h-4 w-4 text-foreground" />
                <span>Analyze</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-destructive focus:text-destructive">
                <Trash2 className="mr-2 h-4 w-4" />
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <p className="text-xs text-muted-foreground">Last edited {lastEditedFormatted}</p>
      </CardContent>
      <CardFooter className="flex justify-between p-4 pt-0">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="border-foreground/50 text-foreground hover:bg-accent hover:text-foreground"
        >
          <a href={`/build/${resume.id}`}>
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </a>
        </Button>
        <Button
          variant="outline"
          size="sm"
          asChild
          className="border-foreground/50 text-foreground hover:bg-accent hover:text-foreground"
        >
          <a href={`/analyze/${resume.id}`}>
            <BarChart3 className="mr-2 h-4 w-4" />
            Analyze
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
