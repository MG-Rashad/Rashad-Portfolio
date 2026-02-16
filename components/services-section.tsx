import {
  Server,
  Headphones,
  Database,
  Shield,
  Cloud,
  Layout,
  Building,
  Settings,
} from "lucide-react";
import { AnimatedCard } from "@/components/animated-card";

interface ServicesProps {
  dict: {
    services: {
      sectionLabel: string;
      title: string;
      remoteBadge: string;
      items: Array<{
        title: string;
        description: string;
        tag: string;
      }>;
    };
  };
}

const serviceIcons = [Server, Headphones, Database, Shield, Cloud, Layout, Building, Settings];

export function ServicesSection({ dict }: ServicesProps) {
  return (
    <section id="services" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="text-balance font-heading text-3xl font-bold text-foreground md:text-4xl">
            {dict.services.title}
          </h2>
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
            </span>
            {dict.services.remoteBadge}
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {dict.services.items.map((service, index) => {
            const Icon = serviceIcons[index] || Server;
            return (
              <AnimatedCard key={service.title} delay={index * 100}>
                <div className="group flex h-full gap-5 rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="mb-1.5 flex flex-wrap items-center gap-2">
                      <h3 className="font-heading font-semibold text-foreground">
                        {service.title}
                      </h3>
                      <span className="rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                        {service.tag}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
