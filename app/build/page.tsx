import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { ResumeBuilder } from "@/components/resume-builder"

export default function BuildResumePage() {
  return (
    <div className="container py-6 space-y-8">
      <PageHeader
        title="Build Your Resume"
        description="Create and customize your professional resume"
        action={
          <Button className="gap-2 bg-foreground text-background hover:bg-foreground/90">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        }
      />

      <ResumeBuilder />
    </div>
  )
}
