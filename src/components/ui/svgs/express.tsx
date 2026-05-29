import type { SVGProps } from "react";

const Express = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Express</title>
    <rect width="48" height="48" rx="6" fill="#000" />
    <text x="24" y="32" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontWeight="700" fontSize="12" fill="#fff">Express</text>
  </svg>
);

export { Express };
