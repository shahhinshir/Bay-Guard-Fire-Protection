import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const defaults: IconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M2.5 5.5A2.5 2.5 0 0 1 5 3h1.6a1 1 0 0 1 .96.73l1 3.5a1 1 0 0 1-.27 1L7.5 9.5a12 12 0 0 0 5 5l1.27-1.27a1 1 0 0 1 1-.27l3.5 1a1 1 0 0 1 .73.96V16a2.5 2.5 0 0 1-2.5 2.5A13.5 13.5 0 0 1 2.5 5.5Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function FlameIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M12 3c1.5 3 4.5 4.5 4.5 8.5A4.5 4.5 0 0 1 12 16a4.5 4.5 0 0 1-4.5-4.5C7.5 9 9 7.5 9 6c1 .5 2 1.5 2 3 .8-.5 1-2 1-6Z" />
      <path d="M12 21a5 5 0 0 0 5-5c0-1-.3-2-.8-3" opacity=".45" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M12 3 5 6v5c0 4.3 3 8 7 9 4-1 7-4.7 7-9V6l-7-3Z" />
      <path d="m9.5 12 1.8 1.8 3.4-3.6" />
    </svg>
  );
}

export function SprinklerIcon(props: IconProps) {
  return (
    <svg {...defaults} {...props}>
      <path d="M12 3v4M8 21c0-3 1.5-5 4-6M16 21c0-3-1.5-5-4-6" />
      <circle cx="12" cy="9" r="2.5" />
      <path d="M5 9h2M17 9h2" />
    </svg>
  );
}
