import siteData from "@/data/siteData.json"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  return (
    <div className="space-y-6">
      
      <div className="grid md:grid-cols-2 gap-6">
        {siteData.projects.map((project, index) => (
          <div key={index} className="border rounded-lg p-6 space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="px-2 py-1 text-xs bg-muted rounded-md">{tech}</span>
              ))}
            </div>
            
            <div className="flex gap-3">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm hover:underline"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
              )}
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm hover:underline"
                >
                  <ExternalLink className="h-4 w-4" /> Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}