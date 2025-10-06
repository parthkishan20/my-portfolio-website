import siteData from "@/data/siteData.json";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { theme } = useTheme();
  // Determine actual theme (system or explicit)
  let actualTheme = theme;
  if (theme === "system" && typeof window !== "undefined") {
    actualTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return (
    <>
      <section className="py-2">
        <div className="container mx-auto">
          <div className="grid items-center gap-8 md:gap-16 lg:grid-cols-2">
            <img
              src={
                actualTheme === "dark"
                  ? "/images/logos/default-monochrome-white.svg"
                  : "/images/projects/hero-cover.png"
              }
              alt="Parthkumar Patel Portfolio"
              className="max-h-96 w-full rounded-md object-cover"
            />
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <h1 className="my-6 mt-0 text-4xl font-semibold text-balance lg:text-5xl">
                {siteData.profile.name}
              </h1>
              <h2 className="text-2xl text-muted-foreground font-medium mb-4">
                {siteData.profile.title}
              </h2>
              <p className="mb-6 max-w-xl text-muted-foreground lg:text-lg">
                {siteData.profile.summary}
              </p>

              <div className="mb-6 flex flex-col gap-2 lg:items-start">
                <p className="text-sm text-muted-foreground">
                  📍 {siteData.profile.location}
                </p>
                <p className="text-sm text-muted-foreground">
                  📧 {siteData.profile.email}
                </p>
                <p className="text-sm text-muted-foreground">
                  📞 {siteData.profile.phone}
                </p>
              </div>

              <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                <Button asChild>
                  <a
                    href={siteData.profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect on LinkedIn
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a
                    href={siteData.profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View GitHub
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Quick Stats */}
      <section className="py-16 my-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-2">
              <div className="text-4xl font-bold text-primary">
                {siteData.projects.length}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Projects
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="text-4xl font-bold text-primary">
                {siteData.skills.languages.length +
                  siteData.skills.frameworks.length}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Technologies
              </div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="text-4xl font-bold text-primary">
                {siteData.certifications.length}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                Certifications
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
