import { PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ResumeCard } from "@/components/resume-card"
import { PageHeader } from "@/components/page-header"

export default function DashboardPage() {
  // Sample resume data
  const resumes = [
    {
      id: "1",
      name: "Software Engineer Resume",
      lastEdited: "2023-04-15T10:30:00Z",
    },
    {
      id: "2",
      name: "Product Manager Resume",
      lastEdited: "2023-04-10T14:45:00Z",
    },
    {
      id: "3",
      name: "UX Designer Resume",
      lastEdited: "2023-04-05T09:15:00Z",
    },
    {
      id: "4",
      name: "Data Scientist Resume",
      lastEdited: "2023-03-28T16:20:00Z",
    },
  ]

  return (
    <div className="container py-6 space-y-8">
      <PageHeader
        title="Saved Resumes"
        description="Manage and edit your saved resumes"
        action={
          <Button className="gap-2 bg-foreground text-background hover:bg-foreground/90">
            <PlusCircle className="h-4 w-4" />
            Create New Resume
          </Button>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resumes.map((resume) => (
          <ResumeCard key={resume.id} resume={resume} />
        ))}
        <Button
          variant="outline"
          className="h-[220px] border-dashed flex flex-col gap-4 hover:border-foreground hover:bg-accent/50 transition-colors border-foreground/20 text-foreground"
          asChild
        >
          <a href="/build">
            <PlusCircle className="h-8 w-8 text-foreground/70" />
            <span className="text-foreground/70 font-medium">Create New Resume</span>
          </a>
        </Button>
      </div>
    </div>
  )
}
