import Link from "next/link";
import type { ComponentType, SVGProps } from "react";

import { Reveal } from "@/components/site/Reveal";
import { ArrowRightIcon, FlameIcon, ShieldIcon, SprinklerIcon } from "@/components/ui/icons";
import { services, type ServiceKey } from "@/content/content";

const iconFor: Record<ServiceKey, ComponentType<SVGProps<SVGSVGElement>>> = {
  "fire-extinguishers": FlameIcon,
  "fire-sprinkler-system": SprinklerIcon,
  "kitchen-fire-suppression": FlameIcon,
  "exit-and-emergency-sign": ShieldIcon,
};

export function ServicesGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((service, i) => {
        const Icon = iconFor[service.key];
        return (
          <Reveal key={service.key} delay={i * 80}>
            <Link
              href={service.href}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-soft ring-1 ring-hairline transition-all duration-200 hover:-translate-y-1 hover:shadow-lift hover:ring-brand-200"
            >
              {/* brand accent bar that grows on hover */}
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-brand-600 to-brand-800 transition-transform duration-300 group-hover:scale-x-100"
              />
              <div className="flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <Icon className="h-6 w-6" width={24} height={24} />
                </span>
                <span className="text-sm font-bold tabular-nums text-hairline transition-colors group-hover:text-brand-200">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold tracking-tight text-ink">
                {service.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                {service.summary}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
                Learn more
                <ArrowRightIcon
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  width={16}
                  height={16}
                />
              </span>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
