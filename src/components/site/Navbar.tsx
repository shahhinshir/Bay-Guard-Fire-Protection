"use client";

// Client component: the mobile menu needs open/close state and route-change
// handling, and the bar shrinks into a floating panel on scroll. Nav links are
// plain <Link>s, so all navigation still works without JS.

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Logo } from "@/components/site/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { CloseIcon, MenuIcon, PhoneIcon } from "@/components/ui/icons";
import { primaryNav } from "@/content/content";
import { SITE } from "@/content/site";
import { cn } from "@/lib/cn";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Shrink the bar into a floating panel once the page is scrolled a little.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const floating = scrolled || open;

  return (
    <header className="sticky top-0 z-50 px-3 pt-4 sm:px-4 sm:pt-5">
      <div
        className={cn(
          // Solid white background is ALWAYS on — never depends on JS or scroll.
          "mx-auto max-w-5xl rounded-2xl border border-hairline bg-white shadow-[0_8px_30px_-8px_rgba(10,10,11,0.18)] ring-1 ring-black/5 transition-all duration-300 ease-out",
        )}
      >
        <nav
          aria-label="Primary"
          className={cn(
            "flex items-center justify-between gap-4 transition-all duration-300 ease-out",
            floating ? "px-4 py-2 sm:px-5" : "px-4 py-3 sm:px-5",
          )}
        >
          <Logo />

          <ul className="hidden items-center gap-1 md:flex">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "px-3.5 py-2 text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "text-brand-700"
                      : "text-ink-soft hover:text-ink",
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href={SITE.phone.href}
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              <PhoneIcon className="h-4 w-4" width={16} height={16} />
              {SITE.phone.display}
            </a>
            <ButtonLink href="/contact" size="md">
              Get a free quote
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink transition-colors hover:bg-zinc-100 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          hidden={!open}
          className="border-t border-hairline md:hidden"
        >
          <ul className="space-y-1 px-3 py-4 sm:px-4">
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={cn(
                    "block rounded-md px-4 py-3 text-base font-medium transition-colors",
                    isActive(link.href)
                      ? "bg-brand-50 text-brand-700"
                      : "text-ink-soft hover:bg-zinc-100",
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <ButtonLink href="/contact" size="lg" className="w-full">
                Get a free quote
              </ButtonLink>
            </li>
            <li>
              <a
                href={SITE.phone.href}
                className="flex items-center justify-center gap-2 rounded-md px-4 py-3 text-base font-medium text-ink-soft hover:bg-zinc-100"
              >
                <PhoneIcon className="h-5 w-5" width={18} height={18} />
                {SITE.phone.display}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
