import { Outlet, useLocation } from "react-router-dom";
import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const breadcrumbMap: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/education": "Education",
  "/experience": "Experience",
  "/projects": "Projects",
  "/skills": "Skills",
  "/certifications": "Certifications",
  "/extracurricular": "Extracurricular",
  "/resume": "Resume",
  "/contact": "Contact",
};

export default function Layout() {
  const location = useLocation();
  const currentPage = breadcrumbMap[location.pathname] || "Page";

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
       <header className="flex h-16 shrink-0 items-center gap-2 px-4">
         <SidebarTrigger className="-ml-1" />
         <h1 className="text-lg font-semibold">{currentPage}</h1>
         <div className="ml-auto">
           <ModeToggle />
         </div>
       </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
