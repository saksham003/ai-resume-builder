"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CheckCircle2, AlertCircle, Info, Upload } from "lucide-react"

export function ResumeAnalyzer() {
  const [activeTab, setActiveTab] = useState("general")
  const [jobDescription, setJobDescription] = useState("")

  // Sample analysis data
  const analysisData = {
    score: 78,
    strengths: [
      "Strong technical skills section with relevant technologies",
      "Clear and concise work experience descriptions",
      "Good education credentials with relevant degrees",
      "Professional summary effectively highlights key qualifications",
    ],
    improvements: [
      "Add more quantifiable achievements in work experience",
      "Include more action verbs in experience descriptions",
      "Consider adding certifications section",
      "Tailor skills more specifically to target roles",
    ],
    keywords: [
      { word: "JavaScript", count: 3, important: true },
      { word: "React", count: 4, important: true },
      { word: "Node.js", count: 2, important: true },
      { word: "TypeScript", count: 1, important: true },
      { word: "AWS", count: 2, important: true },
      { word: "leadership", count: 1, important: false },
      { word: "agile", count: 1, important: false },
    ],
    jobMatch: {
      score: 72,
      missingKeywords: ["GraphQL", "CI/CD", "Jest", "Redux"],
      recommendations: [
        "Add experience with GraphQL if applicable",
        "Highlight CI/CD experience in your work descriptions",
        "Include testing frameworks like Jest in your skills",
        "Mention Redux experience if you have it",
      ],
    },
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 w-full bg-muted text-muted-foreground">
            <TabsTrigger
              value="general"
              className={`data-[state=active]:bg-background data-[state=active]:text-foreground`}
            >
              General Analysis
            </TabsTrigger>
            <TabsTrigger
              value="job-match"
              className={`data-[state=active]:bg-background data-[state=active]:text-foreground`}
            >
              Job Match
            </TabsTrigger>
          </TabsList>
          <div className="mt-6 space-y-6">
            <TabsContent value="general" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Resume Score</CardTitle>
                  <CardDescription>Overall assessment of your resume quality</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center">
                    <div className="relative h-40 w-40">
                      <svg className="h-full w-full" viewBox="0 0 100 100">
                        <circle
                          className="text-muted-foreground/20"
                          strokeWidth="10"
                          stroke="currentColor"
                          fill="transparent"
                          r="40"
                          cx="50"
                          cy="50"
                        />
                        <circle
                          className="text-foreground"
                          strokeWidth="10"
                          strokeDasharray={`${analysisData.score * 2.51} 251.2`}
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="transparent"
                          r="40"
                          cx="50"
                          cy="50"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <span className="text-3xl font-bold">{analysisData.score}</span>
                          <span className="text-sm text-muted-foreground">/100</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      Strengths
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {analysisData.strengths.map((strength, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                          <span>{strength}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-amber-500" />
                      Areas for Improvement
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {analysisData.improvements.map((improvement, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <AlertCircle className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                          <span>{improvement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Keyword Analysis</CardTitle>
                  <CardDescription>Important keywords found in your resume</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {analysisData.keywords.map((keyword, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-1 rounded-full px-3 py-1 text-sm ${
                          keyword.important ? "bg-foreground/10 text-foreground" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {keyword.word}
                        <span className="rounded-full bg-background px-1.5 text-xs">{keyword.count}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="job-match" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Job Description</CardTitle>
                  <CardDescription>Paste a job description to analyze how well your resume matches</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    placeholder="Paste job description here..."
                    rows={6}
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                  />
                  <Button className="bg-foreground text-background hover:bg-foreground/90">Analyze Match</Button>
                </CardContent>
              </Card>

              {jobDescription && (
                <>
                  <Card>
                    <CardHeader>
                      <CardTitle>Match Score</CardTitle>
                      <CardDescription>How well your resume matches the job description</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center">
                        <div className="relative h-40 w-40">
                          <svg className="h-full w-full" viewBox="0 0 100 100">
                            <circle
                              className="text-muted-foreground/20"
                              strokeWidth="10"
                              stroke="currentColor"
                              fill="transparent"
                              r="40"
                              cx="50"
                              cy="50"
                            />
                            <circle
                              className="text-foreground"
                              strokeWidth="10"
                              strokeDasharray={`${analysisData.jobMatch.score * 2.51} 251.2`}
                              strokeLinecap="round"
                              stroke="currentColor"
                              fill="transparent"
                              r="40"
                              cx="50"
                              cy="50"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <span className="text-3xl font-bold">{analysisData.jobMatch.score}</span>
                              <span className="text-sm text-muted-foreground">/100</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Info className="h-5 w-5 text-foreground" />
                        Missing Keywords
                      </CardTitle>
                      <CardDescription>
                        Important keywords from the job description not found in your resume
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {analysisData.jobMatch.missingKeywords.map((keyword, index) => (
                          <div
                            key={index}
                            className="rounded-full bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 px-3 py-1 text-sm"
                          >
                            {keyword}
                          </div>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Recommendations:</h4>
                        <ul className="space-y-2">
                          {analysisData.jobMatch.recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <Info className="h-4 w-4 text-foreground mt-0.5 shrink-0" />
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </>
              )}
            </TabsContent>
          </div>
        </Tabs>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Upload Resume</CardTitle>
            <CardDescription>Upload your resume for analysis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-center">
              <div className="rounded-lg border-2 border-dashed p-12 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-foreground/10">
                  <Upload className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="mt-2 text-sm font-medium">Upload your resume</h3>
                <p className="mt-1 text-xs text-muted-foreground">Drag and drop or click to upload</p>
                <Input id="resume-upload" type="file" className="hidden" accept=".pdf,.doc,.docx" />
                <div className="mt-4">
                  <Button size="sm" asChild className="bg-foreground text-background hover:bg-foreground/90">
                    <Label htmlFor="resume-upload">Select File</Label>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI Suggestions</CardTitle>
            <CardDescription>Get AI-powered suggestions to improve your resume</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-foreground/5 p-4 text-sm">
              <p className="font-medium mb-2">Suggested Summary</p>
              <p className="text-muted-foreground">
                Senior Software Engineer with 6+ years of experience specializing in full-stack development with React,
                Node.js, and cloud technologies. Proven track record of delivering high-performance applications and
                leading development teams to success. Passionate about clean code and innovative solutions.
              </p>
              <Button
                size="sm"
                variant="outline"
                className="mt-2 border-foreground/50 text-foreground hover:bg-accent hover:text-foreground"
              >
                Apply Suggestion
              </Button>
            </div>
            <div className="rounded-lg bg-foreground/5 p-4 text-sm">
              <p className="font-medium mb-2">Experience Enhancement</p>
              <p className="text-muted-foreground">
                Consider adding metrics to your Tech Innovations role: "Improved system performance by 40%, resulting in
                25% increase in user engagement and $100K in annual cost savings."
              </p>
              <Button
                size="sm"
                variant="outline"
                className="mt-2 border-foreground/50 text-foreground hover:bg-accent hover:text-foreground"
              >
                Apply Suggestion
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
