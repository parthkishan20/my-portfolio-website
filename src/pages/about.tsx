import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import siteData from "@/data/siteData.json";

export default function About() {
  return (
    <section className="pb-16">


      {/* Intro Section */}
      <div className="py-2">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-8 text-center">
            <div className="flex justify-center">
              <Avatar className="size-24 md:size-32">
                <AvatarImage
                  src="/images/profile/avatar.png"
                  alt={`${siteData.profile.name} - Professional headshot`}
                />
                <AvatarFallback className="text-xl md:text-3xl">
                  {siteData.profile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {siteData.profile.name}
            </h2>
            <p className="text-xl text-muted-foreground font-medium">
              {siteData.profile.title}
            </p>
            <p className="text-muted-foreground text-xl leading-relaxed">
              {siteData.about.bio}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
