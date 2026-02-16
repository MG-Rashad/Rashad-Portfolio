import { Monitor, HardDrive, Code } from "lucide-react";
import { AnimatedCard } from "@/components/animated-card";

interface SkillsProps {
  dict: {
    skills: {
      sectionLabel: string;
      title: string;
      categories: {
        sysadmin: { title: string; items: string[] };
        infrastructure: { title: string; items: string[] };
        webdev: { title: string; items: string[] };
      };
    };
  };
}

export function SkillsSection({ dict }: SkillsProps) {
  const categories = [
    {
      icon: Monitor,
      ...dict.skills.categories.sysadmin,
    },
    {
      icon: HardDrive,
      ...dict.skills.categories.infrastructure,
    },
    {
      icon: Code,
      ...dict.skills.categories.webdev,
    },
  ];

  return (
    <section id="skills" className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-balance font-heading text-3xl font-bold text-foreground md:text-4xl">
          {dict.skills.title}
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {categories.map((cat, i) => (
            <AnimatedCard key={cat.title} delay={i * 150}>
              <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <cat.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-4 font-heading text-lg font-semibold text-foreground">
                  {cat.title}
                </h3>
                <ul className="space-y-2.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
