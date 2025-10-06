import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AppSidebar } from "@/components/app-sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import { ThemeProvider } from "@/components/theme-provider"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

// Import all pages
import Home from "@/pages/home"
import About from "@/pages/about"
import Education from "@/pages/education"
import Experience from "@/pages/experience"
import Projects from "@/pages/projects"
import Skills from "@/pages/skills"
import Certifications from "@/pages/certifications"
import Extracurricular from "@/pages/extracurricular"
import Resume from "@/pages/resume"

import { useLocation } from "react-router-dom";

function getPageTitle(pathname: string) {
  switch (pathname) {
    case "/":
      return "Home";
    case "/about":
      return "About Me";
    case "/education":
      return "Education";
    case "/experience":
      return "Experience";
    case "/projects":
      return "Projects";
    case "/skills":
      return "Skills";
    case "/certifications":
      return "Certifications & Achievements";
    case "/extracurricular":
      return "Extracurricular Activities";
    case "/resume":
      return "Resume";
    default:
      return "";
  }
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <PageHeaderAndRoutes />
          </SidebarInset>
        </SidebarProvider>
      </Router>
    </ThemeProvider>
  );
}


function PageHeaderAndRoutes() {
  const location = useLocation();
  const pageTitle = getPageTitle(location.pathname);
  return (
    <>
      <header className="flex h-16 shrink-0 items-center gap-2 border-b">
        <div className="flex items-center gap-2 px-4">
          <SidebarTrigger className="-ml-1" />
          <h1 className="text-lg font-semibold">{pageTitle}</h1>
        </div>
        <div className="ml-auto px-4">
          <ModeToggle />
        </div>
      </header>
      <main className="flex-1 overflow-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/extracurricular" element={<Extracurricular />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
    </>
  );
}

export default App