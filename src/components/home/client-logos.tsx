import { Building2 } from "lucide-react";
import { Container } from "@/components/shared/container";
import { AnimatedSection } from "@/components/shared/animated-section";
import { clientCategories } from "@/content/clients";

export function ClientLogos() {
  return (
    <section className="py-16">
      <Container className="flex flex-col items-center gap-8">
        <p className="text-sm font-semibold tracking-wide text-muted-foreground uppercase">
          Được tin dùng bởi nhiều nhóm khách hàng
        </p>
        <AnimatedSection className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
          {clientCategories.map((client) => (
            <div
              key={client}
              className="flex items-center justify-center gap-2 rounded-xl border border-dashed border-border/80 px-4 py-5 text-center text-sm font-medium text-muted-foreground"
            >
              <Building2 className="size-4 shrink-0" />
              {client}
            </div>
          ))}
        </AnimatedSection>
      </Container>
    </section>
  );
}
