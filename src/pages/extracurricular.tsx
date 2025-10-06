
import { Users, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import siteData from "@/data/siteData.json";

export default function Extracurricular() {
  return (
    <section className="py-2">
      <div className="container px-0 md:px-8">
        {/* <h1 className="mb-2 px-4 text-4xl font-bold md:mb-4 md:text-5xl text-center tracking-tight">
          Extracurricular Activities
        </h1> */}
        {/* <p className="mb-12 text-center text-muted-foreground text-lg font-medium">
          Leadership, teamwork, and community impact
        </p> */}
        <div className="flex flex-col gap-8">
          {siteData.extracurricular.map((activity, index) => (
            <Card key={index} className="border-none shadow-lg bg-card/80 backdrop-blur-md">
              <CardContent className="flex flex-col gap-6 py-8 px-6">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-muted/80 shadow">
                    {index === 0 ? <Star className="h-7 w-7 text-primary" /> : <Users className="h-7 w-7 text-primary" />}
                  </span>
                  <h2 className="font-bold text-2xl leading-tight mb-1">{activity.name}</h2>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1">
                  <span className="inline-block rounded bg-primary/10 px-2 text-xs font-semibold text-primary mb-0">{activity.role}</span>
                  {activity.dates && (
                    <span className="text-sm text-muted-foreground md:text-right whitespace-nowrap font-medium mb-0">{activity.dates}</span>
                  )}
                </div>
                <p className="text-base font-medium text-muted-foreground mt-0 mb-0 italic">{activity.org}</p>
                <p className="text-sm leading-relaxed mt-0 text-foreground">
                  {activity.summary}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}