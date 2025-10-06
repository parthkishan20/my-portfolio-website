

import React from "react";
import { Award, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import siteData from "@/data/siteData.json";

export default function Certifications() {
  return (
    <section className="py-2">
      <div className="container px-0 md:px-8">
        {/* <h1 className="mb-10 px-4 text-3xl font-semibold md:mb-14 md:text-4xl text-center">
          Certifications & Achievements
        </h1> */}
        <div className="flex flex-col">
          {/* <Separator /> */}
          {siteData.certifications.map((cert, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center gap-4 px-4 py-6">
                <span className="flex h-14 w-16 shrink-0 items-center justify-center rounded-md bg-muted">
                  <Award className="h-8 w-8 text-primary" />
                </span>
                <div className="flex-1">
                  {/* First row: name (left), year (right) */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg whitespace-nowrap text-left">{cert.name}</h3>
                    <span className="text-base font-medium text-muted-foreground whitespace-nowrap">{cert.year}</span>
                  </div>
                  {/* Second row: issuer (left), link (right) */}
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-sm text-muted-foreground text-left">{cert.issuer}</span>
                    {cert.link ? (
                      <a
                        className="inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>View Certificate</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : (
                      <span className="text-muted-foreground text-sm">No link</span>
                    )}
                  </div>
                </div>
              </div>
              <Separator />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}