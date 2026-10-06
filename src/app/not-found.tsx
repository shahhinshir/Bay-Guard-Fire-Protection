import { PageHeader } from "@/components/sections/PageHeader";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ArrowRightIcon } from "@/components/ui/icons";
import { services } from "@/content/content";

export default function NotFound() {
  return (
    <>
      <PageHeader
        eyebrow="404"
        title="We couldn't find that page"
        description="The page you're looking for may have moved. Head back home, or jump straight to one of our services."
      >
        <ButtonLink href="/" size="lg">
          Back home
          <ArrowRightIcon className="h-4 w-4" width={16} height={16} />
        </ButtonLink>
      </PageHeader>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ButtonLink
                key={service.key}
                href={service.href}
                variant="secondary"
                className="justify-between"
              >
                {service.shortName}
                <ArrowRightIcon className="h-4 w-4" width={16} height={16} />
              </ButtonLink>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
