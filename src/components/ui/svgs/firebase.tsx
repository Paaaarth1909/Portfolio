import type { SVGProps } from "react";

const Firebase = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Firebase</title>
    <defs>
      <linearGradient id="firebaseGrad" x1="18" y1="10" x2="46" y2="56" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#FFC400" />
        <stop offset="0.55" stopColor="#FF9100" />
        <stop offset="1" stopColor="#FF6D00" />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="14" fill="#FFF7ED" />
    <path
      d="M19 48 28.2 17.2c.5-1.7 2.8-2 3.8-.6l4.7 7c.6.9.6 2 .1 2.9l-3.1 5.7 4.1 3.8c.8.7.8 2 0 2.7l-12.6 11.8c-1.8 1.7-4.7-.3-4.2-2.5Z"
      fill="url(#firebaseGrad)"
    />
    <path
      d="m32.7 19.7 9.2 13.5c.6.8.5 2-.2 2.7l-6.3 5.7-2.7-2.5-3.8-3.5 3.8-6.9c.4-.7.4-1.6 0-2.3l-.8-1.6z"
      fill="#FFD54F"
      opacity="0.95"
    />
  </svg>
);

export { Firebase };
