import { Award } from "lucide-react";
import { AnimatedCard } from "@/components/animated-card";

interface CertificationsProps {
  dict: {
    certifications: {
      sectionLabel: string;
      title: string;
      items: Array<{
        name: string;
        detail: string;
        issuer: string;
      }>;
    };
  };
}

export function CertificationsSection({ dict }: CertificationsProps) {
  return (
    <section id="certifications" className="bg-secondary py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-balance font-heading text-3xl font-bold text-foreground md:text-4xl">
          {dict.certifications.title}
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.certifications.items.map((cert, index) => (
            <AnimatedCard key={`${cert.name}-${index}`} delay={index * 120}>
              <div className="relative h-full overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
                {/* Accent bar */}
                <div className="absolute start-0 top-0 h-full w-1 bg-accent" />

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {cert.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {cert.detail}
                    </p>
                    <p className="mt-2 text-xs font-medium uppercase tracking-wider text-accent">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
