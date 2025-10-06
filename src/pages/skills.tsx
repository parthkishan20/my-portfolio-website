
import { Code, Database, Layers, Users, Cloud } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import siteData from "@/data/siteData.json";

const skillGroups = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Languages",
    items: siteData.skills.languages,
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Frameworks ",
    items: siteData.skills.frameworks,
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Databases",
    items: siteData.skills.databases,
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud & Tools",
    items: [...siteData.skills.tools, ...siteData.skills.cloud],
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Other Skills",
    items: siteData.skills.other,
  },
];

export default function Skills() {
  return (
    <section className="py-2">
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group, idx) => (
              <Card key={idx} className="border-border rounded-lg border p-8 shadow-sm hover:shadow-md transition-shadow">
                <CardContent>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-muted rounded-full p-3">
                      {group.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{group.title}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}