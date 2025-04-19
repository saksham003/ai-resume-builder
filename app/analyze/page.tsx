import { Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { ResumeAnalyzer } from "@/components/resume-analyzer"

export default function AnalyzeResumePage() {
  return (
    <div className="container py-6 space-y-8">
      <PageHeader
        title="Analyze Your Resume"
        description="Get AI-powered insights to improve your resume"
        action={
          <Button className="gap-2 bg-foreground text-background hover:bg-foreground/90">
            <Upload className="h-4 w-4" />
            Upload Resume
          </Button>
        }
      />

      <ResumeAnalyzer />
    </div>
  )
}
