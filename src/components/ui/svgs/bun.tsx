import type { SVGProps } from "react";

const Bun = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Bun</title>
    <rect width="64" height="64" rx="14" fill="#FFD84D" />
    <path
      d="M18 37.5c2.3-7.8 8.4-13.5 17-13.5h6.2c2.1 0 3.8 1.7 3.8 3.8 0 2.1-1.7 3.8-3.8 3.8h-6.2c-4.7 0-8.3 2.8-9.9 7.2-.7 2-2.8 3.2-4.9 2.8-1.9-.4-3.1-2.3-2.2-4.1Z"
      fill="#111111"
    />
    <path
      d="M22.6 20.2c0-1 .8-1.8 1.8-1.8h4.6c3.8 0 6.9 3.1 6.9 6.9 0 3.8-3.1 6.9-6.9 6.9h-3.5c-1 0-1.8-.8-1.8-1.8 0-1 .8-1.8 1.8-1.8h3.5c1.8 0 3.3-1.5 3.3-3.3s-1.5-3.3-3.3-3.3h-4.6c-1 0-1.8-.8-1.8-1.8Z"
      fill="#111111"
    />
  </svg>
);

export { Bun };
