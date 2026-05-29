import type { SVGProps } from "react";

const MongoDB = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>MongoDB</title>
    <rect width="48" height="48" rx="10" fill="#1F4D2E" />
    <path
      d="M24 7c3.9 4.8 6.2 9.3 6.2 14.4 0 6.3-3 11.4-6.2 19.6-3.2-8.2-6.2-13.3-6.2-19.6C17.8 16.3 20.1 11.8 24 7Z"
      fill="#47A248"
    />
    <path
      d="M24 10.8c1.7 4 2.6 7.6 2.6 10.8 0 4.1-.9 7.4-2.6 12.1-1.7-4.7-2.6-8-2.6-12.1 0-3.2.9-6.8 2.6-10.8Z"
      fill="#9DE06B"
      opacity="0.85"
    />
  </svg>
);

export { MongoDB };
