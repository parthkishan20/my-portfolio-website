
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import siteData from "@/data/siteData.json";

export default function Education() {
  return (
    <section className="bg-background py-2">
      <div className="container">
        {/* <h1 className="mb-10 text-center text-4xl font-bold tracking-tight sm:text-6xl">
          Education
        </h1> */}
        {/* <p className="mb-16 text-center text-muted-foreground text-lg">
          My academic journey and achievements
        </p> */}
        <div className="relative mx-auto max-w-3xl">
          {/* Timeline vertical separator */}
          <Separator orientation="vertical" className="bg-muted absolute left-4 top-8 h-full" />
          {siteData.education.map((edu, idx) => (
            <div key={idx} className="relative mb-16 pl-12">
              {/* Timeline dot */}
              <div className="bg-primary absolute left-0 top-7 flex size-5 items-center justify-center rounded-full border-2 border-background shadow" />
              <Card className="border-none shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-semibold">
                    {edu.school}
                  </CardTitle>
                  <CardDescription className="flex flex-wrap gap-2 text-base font-medium">
                    <span>{edu.degree}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{edu.location}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex flex-wrap items-center gap-4 mb-2">
                    <span className="text-muted-foreground text-sm font-medium">{edu.dates}</span>
                    <span className="text-muted-foreground text-sm font-medium">GPA: {edu.gpa}</span>
                  </div>
                  {/* <ul className="list-disc list-inside space-y-1 text-base text-muted-foreground">
                    {edu.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul> */}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}