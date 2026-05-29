import type { SVGProps } from "react";

const Vite = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Vite</title>
    <defs>
      <linearGradient id="viteGrad" x1="12" y1="8" x2="36" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#A855F7" />
        <stop offset="0.45" stopColor="#7C3AED" />
        <stop offset="1" stopColor="#22D3EE" />
      </linearGradient>
    </defs>
    <rect width="48" height="48" rx="10" fill="#0F172A" />
    <path
      d="M27.8 6.5 15.6 24.1l6.9.8-3.4 16.6 13.1-19.2-6.8-.8 2.4-14.9Z"
      fill="url(#viteGrad)"
      stroke="#E9D5FF"
      strokeLinejoin="round"
      strokeWidth="1"
    />
  </svg>
);

export { Vite };
