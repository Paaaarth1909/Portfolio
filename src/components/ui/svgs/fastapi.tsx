import type { SVGProps } from "react";

const FastAPI = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>FastAPI</title>
    <rect width="64" height="64" rx="14" fill="#E8FFF5" />
    <path d="M22 13h20a9 9 0 0 1 9 9v20a9 9 0 0 1-9 9H22a9 9 0 0 1-9-9V22a9 9 0 0 1 9-9Z" fill="#059669" />
    <path d="M34 14 25 32h8l-3 18 10-20h-8l2-16Z" fill="#ffffff" />
  </svg>
);

export { FastAPI };