import Link from "next/link";

import { Logo } from "@/components/site/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { ClockIcon, MailIcon, PhoneIcon } from "@/components/ui/icons";
import { primaryNav, services } from "@/content/content";
import { SITE } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-hairline bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-8">
          {/* Brand + CTA */}
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
              {SITE.legalName}. Providing fire protection services across the
              entire {SITE.areaServedLabel}.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="/contact" size="md">
                Get a free quote
              </ButtonLink>
              <ButtonLink
                href={SITE.social.yelp}
                variant="secondary"
                size="md"
                target="_blank"
                rel="noreferrer"
              >
                Read our Yelp reviews
              </ButtonLink>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.key}>
                  <Link
                    href={service.href}
                    className="text-sm text-ink-soft transition-colors hover:text-brand-700"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {primaryNav
                .filter((l) => l.href !== "/")
                .map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-soft transition-colors hover:text-brand-700"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-ink-soft transition-colors hover:text-brand-700"
                >
                  Contact
                </Link>
              </li>
            </ul>

            <ul className="mt-6 space-y-3 text-sm text-ink-soft">
              <li>
                <a href={SITE.phone.href} className="flex items-center gap-2 hover:text-ink">
                  <PhoneIcon className="h-4 w-4 text-brand-600" width={16} height={16} />
                  {SITE.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-2 break-all hover:text-ink"
                >
                  <MailIcon className="h-4 w-4 text-brand-600" width={16} height={16} />
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4 text-brand-600" width={16} height={16} />
                24/7 business hours
              </li>
            </ul>
          </div>
        </div>

        {/* Licenses */}
        <div className="mt-12 grid gap-2 border-t border-hairline pt-8 text-xs text-ink-muted sm:grid-cols-3">
          {SITE.licenses.map((license) => (
            <p key={license}>{license}</p>
          ))}
        </div>

        <p className="mt-8 text-xs text-ink-muted">
          &copy; {year} {SITE.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
