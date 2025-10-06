import siteData from "@/data/siteData.json";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-16">
      <div className="container max-w-2xl mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center">Contact</h2>
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Mail className="h-5 w-5 text-primary" />
            <span className="font-medium">Email:</span>
            <a href={`mailto:${siteData.profile.email}`} className="text-blue-600 hover:underline">
              {siteData.profile.email}
            </a>
          </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="font-medium">Phone:</span>
                  <a href={`tel:${siteData.profile.phone.replace(/\s/g,"")}`} className="text-blue-600 hover:underline">
                    {siteData.profile.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-medium">Location:</span>
                  <span>{siteData.profile.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <span className="font-medium">LinkedIn:</span>
                  <a href={siteData.profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {siteData.profile.links.linkedin}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-primary" />
                  <span className="font-medium">GitHub:</span>
                  <a href={siteData.profile.links.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {siteData.profile.links.github}
                  </a>
                </div>
              </div>
            </div>
          </section>
  );
}
