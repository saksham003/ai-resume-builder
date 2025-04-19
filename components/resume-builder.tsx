"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ContactForm } from "@/components/resume-sections/contact-form"
import { ExperienceForm } from "@/components/resume-sections/experience-form"
import { EducationForm } from "@/components/resume-sections/education-form"
import { SkillsForm } from "@/components/resume-sections/skills-form"
import { ProjectsForm } from "@/components/resume-sections/projects-form"
import { SummaryForm } from "@/components/resume-sections/summary-form"
import { SectionOrder } from "@/components/resume-sections/section-order"
import { ResumePreview } from "@/components/resume-preview"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"

export function ResumeBuilder() {
  const [activeTab, setActiveTab] = useState("edit")

  // Sample resume data
  const [resumeData, setResumeData] = useState({
    contact: {
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      phone: "(555) 123-4567",
      location: "San Francisco, CA",
      linkedin: "linkedin.com/in/alexjohnson",
      website: "alexjohnson.dev",
    },
    experience: [
      {
        id: "1",
        company: "Tech Innovations Inc.",
        position: "Senior Software Engineer",
        startDate: "2020-03",
        endDate: "Present",
        location: "San Francisco, CA",
        description:
          "Led development of cloud-based solutions, improving system performance by 40%. Mentored junior developers and implemented CI/CD pipelines.",
      },
      {
        id: "2",
        company: "Digital Solutions LLC",
        position: "Software Engineer",
        startDate: "2017-06",
        endDate: "2020-02",
        location: "Seattle, WA",
        description:
          "Developed and maintained web applications using React and Node.js. Collaborated with design team to implement responsive UI components.",
      },
    ],
    education: [
      {
        id: "1",
        institution: "University of Washington",
        degree: "Master of Science in Computer Science",
        startDate: "2015-09",
        endDate: "2017-05",
        location: "Seattle, WA",
        gpa: "3.8",
      },
      {
        id: "2",
        institution: "California State University",
        degree: "Bachelor of Science in Computer Science",
        startDate: "2011-09",
        endDate: "2015-05",
        location: "Los Angeles, CA",
        gpa: "3.7",
      },
    ],
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Python",
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Git",
      "Agile Methodologies",
      "Team Leadership",
      "System Design",
    ],
    projects: [
      {
        id: "1",
        name: "E-commerce Platform",
        description:
          "Built a full-stack e-commerce platform with React, Node.js, and MongoDB. Implemented payment processing, inventory management, and user authentication.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
        url: "github.com/alexj/ecommerce",
      },
      {
        id: "2",
        name: "AI Content Generator",
        description:
          "Developed an AI-powered content generation tool using OpenAI's GPT-3 API. Created a user-friendly interface for generating marketing copy.",
        technologies: ["Python", "Flask", "OpenAI API", "React"],
        url: "github.com/alexj/ai-content",
      },
    ],
    summary:
      "Senior Software Engineer with 6+ years of experience in full-stack development, specializing in cloud-based solutions and web applications. Proven track record of leading teams, mentoring junior developers, and delivering high-quality software products. Strong expertise in JavaScript, TypeScript, React, and Node.js.",
    sectionOrder: ["summary", "experience", "education", "skills", "projects"],
  })

  const [formatSettings, setFormatSettings] = useState({
    font: "Inter",
    fontSize: 16,
    lineHeight: 1.5,
    margin: 16,
    hideIcons: false,
    underlineLinks: true,
  })

  const handleSectionOrderChange = (newOrder) => {
    setResumeData({
      ...resumeData,
      sectionOrder: newOrder,
    })
  }

  return (
    <div className="w-full px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto">
        <div className="space-y-6 w-full">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 w-full bg-muted text-muted-foreground">
              <TabsTrigger
                value="edit"
                className={`data-[state=active]:bg-background data-[state=active]:text-foreground`}
              >
                Edit Resume
              </TabsTrigger>
              <TabsTrigger
                value="order"
                className={`data-[state=active]:bg-background data-[state=active]:text-foreground`}
              >
                Reorder Sections
              </TabsTrigger>
              <TabsTrigger
                value="format"
                className={`data-[state=active]:bg-background data-[state=active]:text-foreground`}
              >
                Format
              </TabsTrigger>
            </TabsList>

            <div className="mt-6">
              <TabsContent value="edit" className="space-y-8 overflow-y-auto max-h-[calc(100vh-12rem)]">
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">Contact Information</h2>
                  <ContactForm data={resumeData.contact} />
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">Professional Summary</h2>
                  <SummaryForm data={resumeData.summary} />
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">Work Experience</h2>
                  <ExperienceForm data={resumeData.experience} />
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">Education</h2>
                  <EducationForm data={resumeData.education} />
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">Skills</h2>
                  <SkillsForm data={resumeData.skills} />
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">Projects</h2>
                  <ProjectsForm data={resumeData.projects} />
                </div>
              </TabsContent>

              <TabsContent value="order">
                <SectionOrder sections={resumeData.sectionOrder} onOrderChange={handleSectionOrderChange} />
              </TabsContent>

              <TabsContent value="format">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Resume Formatting</CardTitle>
                      <CardDescription>Customize the appearance of your resume</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="font-family">Font</Label>
                          <Select
                            value={formatSettings.font}
                            onValueChange={(value) => setFormatSettings({ ...formatSettings, font: value })}
                          >
                            <SelectTrigger id="font-family">
                              <SelectValue placeholder="Select font" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Inter">Inter</SelectItem>
                              <SelectItem value="Arial">Arial</SelectItem>
                              <SelectItem value="Georgia">Georgia</SelectItem>
                              <SelectItem value="Helvetica">Helvetica</SelectItem>
                              <SelectItem value="Times New Roman">Times New Roman</SelectItem>
                              <SelectItem value="Calibri">Calibri</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <Label htmlFor="font-size">Font Size ({formatSettings.fontSize}px)</Label>
                          </div>
                          <Slider
                            id="font-size"
                            min={10}
                            max={24}
                            step={1}
                            value={[formatSettings.fontSize]}
                            onValueChange={(value) => setFormatSettings({ ...formatSettings, fontSize: value[0] })}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <Label htmlFor="line-height">Line Height ({formatSettings.lineHeight})</Label>
                          </div>
                          <Slider
                            id="line-height"
                            min={1}
                            max={2.5}
                            step={0.1}
                            value={[formatSettings.lineHeight]}
                            onValueChange={(value) => setFormatSettings({ ...formatSettings, lineHeight: value[0] })}
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <Label htmlFor="margin">Margins ({formatSettings.margin}px)</Label>
                          </div>
                          <Slider
                            id="margin"
                            min={8}
                            max={32}
                            step={2}
                            value={[formatSettings.margin]}
                            onValueChange={(value) => setFormatSettings({ ...formatSettings, margin: value[0] })}
                          />
                        </div>
                      </div>

                      <div className="space-y-4 pt-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="hide-icons">Hide Icons</Label>
                            <p className="text-sm text-muted-foreground">Remove icons from the resume</p>
                          </div>
                          <Switch
                            id="hide-icons"
                            checked={formatSettings.hideIcons}
                            onCheckedChange={(checked) => setFormatSettings({ ...formatSettings, hideIcons: checked })}
                          />
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="underline-links">Underline Links</Label>
                            <p className="text-sm text-muted-foreground">Show underlines for links and URLs</p>
                          </div>
                          <Switch
                            id="underline-links"
                            checked={formatSettings.underlineLinks}
                            onCheckedChange={(checked) =>
                              setFormatSettings({ ...formatSettings, underlineLinks: checked })
                            }
                          />
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button
                          className="bg-foreground text-background hover:bg-foreground/90"
                          onClick={() => console.log("Format settings applied:", formatSettings)}
                        >
                          Apply Formatting
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        <div className="flex items-center justify-center w-full">
          <div
            className="bg-white border rounded-xl shadow-sm overflow-hidden"
            style={{ width: "595px", height: "842px", maxHeight: "80vh" }}
          >
            <div
              className="h-full overflow-auto bg-white"
              style={{
                width: "595px",
                minHeight: "842px",
                fontFamily: formatSettings.font,
                fontSize: `${formatSettings.fontSize}px`,
                lineHeight: formatSettings.lineHeight,
                padding: `${formatSettings.margin}px`,
              }}
            >
              <ResumePreview data={resumeData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
