import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logo.png";
import { SITE } from "@/content/site";
import { cn } from "@/lib/cn";

export function Logo({
  className,
  imgClassName,
}: {
  className?: string;
  imgClassName?: string;
}) {
  return (
    <Link
      href="/"
      className={cn("inline-flex items-center gap-2.5", className)}
      aria-label={`${SITE.name} home`}
    >
      <Image
        src={logo}
        alt=""
        priority
        className={cn("h-9 w-auto", imgClassName)}
        sizes="140px"
      />
      <span className="flex flex-col leading-none">
        <span className="text-[0.95rem] font-semibold tracking-tight text-ink">
          Bay Guard
        </span>
        <span className="text-[0.7rem] font-medium tracking-tight text-ink-muted">
          Fire Protection
        </span>
      </span>
    </Link>
  );
}
