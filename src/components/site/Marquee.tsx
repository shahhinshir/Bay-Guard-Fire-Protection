import Image from "next/image";

import { marqueeImages } from "@/content/content";

// CSS-only marquee (no JS, no dependency). Each track repeats its images
// twice so the -50% keyframe loops seamlessly. Server component.

function Row({
  reverse = false,
  ariaHidden = false,
}: {
  reverse?: boolean;
  ariaHidden?: boolean;
}) {
  const items = reverse ? [...marqueeImages].reverse() : marqueeImages;
  const loop = [...items, ...items];

  return (
    <div
      className={`marquee__track${reverse ? " marquee__track--reverse" : ""}`}
      aria-hidden={ariaHidden || undefined}
    >
      {loop.map((item, i) => (
        <figure
          key={`${reverse ? "r" : "f"}-${i}`}
          className="relative mx-2.5 h-36 w-56 shrink-0 overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-hairline sm:h-44 sm:w-72"
        >
          <Image
            src={item.src}
            alt={i < items.length ? item.alt : ""}
            fill
            sizes="(max-width: 640px) 224px, 288px"
            className="object-cover"
          />
        </figure>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <section aria-labelledby="gallery-heading" className="overflow-hidden py-14">
      <h2 id="gallery-heading" className="sr-only">
        Our fire protection work
      </h2>
      <div className="marquee mb-5">
        <Row />
      </div>
      <div className="marquee">
        <Row reverse ariaHidden />
      </div>
    </section>
  );
}
