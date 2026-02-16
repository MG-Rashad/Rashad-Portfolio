"use client";

import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { AnimatedCard } from "@/components/animated-card";

interface ContactProps {
  dict: {
    contact: {
      sectionLabel: string;
      title: string;
      description: string;
      remoteNote: string;
      form: {
        name: string;
        email: string;
        subject: string;
        message: string;
        send: string;
        namePlaceholder: string;
        emailPlaceholder: string;
        subjectPlaceholder: string;
        messagePlaceholder: string;
      };
      info: {
        email: string;
        phone: string;
        location: string;
        locationValue: string;
      };
    };
  };
}

export function ContactSection({ dict }: ContactProps) {
  return (
    <section id="contact" className="bg-background py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-4 text-balance font-heading text-3xl font-bold text-foreground md:text-4xl">
          {dict.contact.title}
        </h2>
        <p className="mb-12 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {dict.contact.description}
        </p>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact Form */}
          <AnimatedCard className="lg:col-span-3" delay={0}>
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get("name");
                const email = formData.get("email");
                const subject = formData.get("subject");
                const message = formData.get("message");
                window.location.href = `mailto:almejrabrashad@gmail.com?subject=${encodeURIComponent(String(subject || ""))}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    {dict.contact.form.name}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder={dict.contact.form.namePlaceholder}
                    className="w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    {dict.contact.form.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder={dict.contact.form.emailPlaceholder}
                    className="w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  {dict.contact.form.subject}
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder={dict.contact.form.subjectPlaceholder}
                  className="w-full rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  {dict.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder={dict.contact.form.messagePlaceholder}
                  className="w-full resize-none rounded-lg border border-input bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
              >
                {dict.contact.form.send}
              </button>
            </form>
          </AnimatedCard>

          {/* Contact Info */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <AnimatedCard delay={100}>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {dict.contact.info.email}
                  </p>
                  <a
                    href="mailto:almejrabrashad@gmail.com"
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    almejrabrashad@gmail.com
                  </a>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={200}>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {dict.contact.info.phone}
                  </p>
                  <a
                    href="https://wa.me/218913217661"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    +218-91-3217661
                  </a>
                </div>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={300}>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {dict.contact.info.location}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {dict.contact.info.locationValue}
                  </p>
                </div>
              </div>
            </AnimatedCard>

            {/* Remote badge */}
            <AnimatedCard delay={400}>
              <div className="mt-4 flex items-center gap-3 rounded-xl border border-accent/30 bg-accent/10 p-4">
                <Globe className="h-5 w-5 shrink-0 text-accent" />
                <p className="text-sm font-medium text-accent">
                  {dict.contact.remoteNote}
                </p>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </section>
  );
}
