import { format, parseISO } from "date-fns"

interface ResumeData {
  contact: {
    name: string
    email: string
    phone: string
    location: string
    linkedin: string
    website: string
  }
  experience: Array<{
    id: string
    company: string
    position: string
    startDate: string
    endDate: string
    location: string
    description: string
  }>
  education: Array<{
    id: string
    institution: string
    degree: string
    startDate: string
    endDate: string
    location: string
    gpa: string
  }>
  skills: string[]
  projects: Array<{
    id: string
    name: string
    description: string
    technologies: string[]
    url: string
  }>
  summary: string
}

interface ResumePreviewProps {
  data: ResumeData
}

export function ResumePreview({ data }: ResumePreviewProps) {
  const formatDate = (dateString: string) => {
    if (dateString === "Present") return "Present"
    try {
      return format(parseISO(dateString), "MMM yyyy")
    } catch {
      return dateString
    }
  }

  return (
    <div className="max-w-[800px] mx-auto font-sans bg-white text-black p-8 shadow-sm">
      <header className="mb-6 text-center">
        <h1 className="text-3xl font-bold mb-2 text-black">{data.contact.name}</h1>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-gray-700">
          {data.contact.email && <span>{data.contact.email}</span>}
          {data.contact.phone && <span>{data.contact.phone}</span>}
          {data.contact.location && <span>{data.contact.location}</span>}
          {data.contact.linkedin && <span>{data.contact.linkedin}</span>}
          {data.contact.website && <span>{data.contact.website}</span>}
        </div>
      </header>

      {data.summary && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2 text-black">Summary</h2>
          <p className="text-sm text-gray-800">{data.summary}</p>
        </section>
      )}

      {data.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2 text-black">Experience</h2>
          <div className="space-y-4">
            {data.experience.map((exp) => (
              <div key={exp.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-black">{exp.position}</h3>
                    <p className="text-sm text-gray-700">{exp.company}</p>
                  </div>
                  <div className="text-sm text-right text-gray-700">
                    <p>
                      {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                    </p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <p className="text-sm mt-1 text-gray-800">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {data.education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2 text-black">Education</h2>
          <div className="space-y-4">
            {data.education.map((edu) => (
              <div key={edu.id}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-black">{edu.degree}</h3>
                    <p className="text-sm text-gray-700">{edu.institution}</p>
                  </div>
                  <div className="text-sm text-right text-gray-700">
                    <p>
                      {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    </p>
                    <p>{edu.location}</p>
                  </div>
                </div>
                {edu.gpa && <p className="text-sm mt-1 text-gray-800">GPA: {edu.gpa}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {data.skills.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2 text-black">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span key={index} className="text-sm bg-gray-100 px-2 py-1 rounded-md text-gray-800">
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {data.projects.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-2 text-black">Projects</h2>
          <div className="space-y-4">
            {data.projects.map((project) => (
              <div key={project.id}>
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-black">{project.name}</h3>
                  {project.url && (
                    <a
                      href={project.url.startsWith("http") ? project.url : `https://${project.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline"
                    >
                      {project.url}
                    </a>
                  )}
                </div>
                <p className="text-sm mt-1 text-gray-800">{project.description}</p>
                {project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="text-xs bg-gray-100 px-1.5 py-0.5 rounded text-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
