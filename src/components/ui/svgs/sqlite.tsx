import type { SVGProps } from "react";

const SQLite = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>SQLite</title>
    <rect width="48" height="48" rx="10" fill="#003B57" />
    <ellipse cx="24" cy="15" rx="12.5" ry="5.5" fill="#7CC5E7" />
    <path d="M11.5 15v12c0 3 5.6 5.5 12.5 5.5S36.5 30 36.5 27V15" fill="#2C7DA0" />
    <ellipse cx="24" cy="27" rx="12.5" ry="5.5" fill="#1B5F7D" />
    <ellipse cx="24" cy="27" rx="10" ry="3.5" fill="#7CC5E7" opacity="0.6" />
  </svg>
);

export { SQLite };
