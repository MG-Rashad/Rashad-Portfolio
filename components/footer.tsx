import Image from "next/image";

export function Footer({
  dict,
}: {
  dict: {
    footer: { rights: string; tagline: string };
  };
}) {
  return (
    <footer className="border-t border-border bg-card text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-center md:flex-row md:justify-between md:text-start">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="RNJ Logo"
            width={36}
            height={36}
            className="rounded-full"
          />
          <div>
            <p className="font-heading font-semibold text-accent">Rashad N. Almejrab</p>
            <p className="text-sm text-muted-foreground">
              {dict.footer.tagline}
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Rashad N. Almejrab.{" "}
          {dict.footer.rights}
        </p>
      </div>
    </footer>
  );
}
