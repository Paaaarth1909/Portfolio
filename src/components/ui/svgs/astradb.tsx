import type { SVGProps } from "react";

const AstraDB = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>AstraDB</title>
    <rect width="48" height="48" rx="10" fill="#0F172A" />
    <path
      d="m24 8 3.6 8.8L36 20.4l-8.4 3.6L24 33l-3.6-8.9-8.4-3.7 8.4-3.6L24 8Z"
      fill="#22A6B3"
    />
    <path
      d="m24 16.1 1.9 4.8 4.8 1.9-4.8 2-1.9 4.7-1.9-4.7-4.8-2 4.8-1.9L24 16.1Z"
      fill="#9BE7F0"
    />
  </svg>
);

export { AstraDB };
