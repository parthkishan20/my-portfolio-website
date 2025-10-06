import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"
import Layout from "@/components/layout"

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
import Contact from "@/pages/contact"



function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="education" element={<Education />} />
            <Route path="experience" element={<Experience />} />
            <Route path="projects" element={<Projects />} />
            <Route path="skills" element={<Skills />} />
            <Route path="certifications" element={<Certifications />} />
            <Route path="extracurricular" element={<Extracurricular />} />
            <Route path="resume" element={<Resume />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}


// Removed PageHeaderAndRoutes, now handled by Layout

export default App