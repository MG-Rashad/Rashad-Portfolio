import { getDictionary } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsSection } from "@/components/skills-section";
import { ServicesSection } from "@/components/services-section";
import { CertificationsSection } from "@/components/certifications-section";
import { ContactSection } from "@/components/contact-section";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <>
      <HeroSection dict={dict} />
      <AboutSection dict={dict} />
      <SkillsSection dict={dict} />
      <ServicesSection dict={dict} />
      <CertificationsSection dict={dict} />
      <ContactSection dict={dict} />
    </>
  );
}
