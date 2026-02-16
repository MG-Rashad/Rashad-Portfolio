import { Award, Globe, Briefcase } from "lucide-react";
import { AnimatedCard } from "@/components/animated-card";

interface AboutProps {
  dict: {
    about: {
      sectionLabel: string;
      title: string;
      p1: string;
      p2: string;
      p3: string;
      badges: {
        certified: string;
        remote: string;
        experience: string;
      };
    };
  };
}

export function AboutSection({ dict }: AboutProps) {
  const badges = [
    { icon: Award, label: dict.about.badges.certified },
    { icon: Globe, label: dict.about.badges.remote },
    { icon: Briefcase, label: dict.about.badges.experience },
  ];

  return (
    <section id="about" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-10 text-balance font-heading text-3xl font-bold text-foreground md:text-4xl">
          {dict.about.title}
        </h2>

        <div className="grid gap-12 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-3">
            <p className="leading-relaxed text-muted-foreground">
              {dict.about.p1}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {dict.about.p2}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {dict.about.p3}
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-2">
            {badges.map((badge, i) => (
              <AnimatedCard key={badge.label} delay={i * 120}>
                <div className="flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <badge.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {badge.label}
                  </span>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
