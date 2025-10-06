import * as React from "react"
import { Link, useLocation } from "react-router-dom"
import {
  Home,
  User,
  GraduationCap,
  Briefcase,
  Code,
  Award,
  ScrollText,
  Users,
  FileText,
  Mail,
} from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// Import your site data
import siteData from "@/data/siteData.json"

// Navigation items with proper routes
const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "About", url: "/about", icon: User },
  { title: "Education", url: "/education", icon: GraduationCap },
  { title: "Experience", url: "/experience", icon: Briefcase },
  { title: "Projects", url: "/projects", icon: Code },
  { title: "Skills", url: "/skills", icon: Award },
  { title: "Certifications", url: "/certifications", icon: ScrollText },
  { title: "Extracurricular", url: "/extracurricular", icon: Users },
  { title: "Resume", url: "/resume", icon: FileText },
  { title: "Contact", url: "/contact", icon: Mail },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation()
  
  return (
    <Sidebar {...props}>
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/images/profile/avatar.png" alt={siteData.profile.name} />
            <AvatarFallback>{siteData.profile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-sm font-medium">{siteData.profile.name}</p>
            <p className="text-xs text-muted-foreground">{siteData.profile.email}</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="px-2">
        <SidebarMenu>
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.url
            return (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild isActive={isActive}>
                  <Link to={item.url} className="flex items-center space-x-3">
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
