import type { SVGProps } from "react";

const Firestore = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Firestore</title>
    <rect width="48" height="48" rx="10" fill="#FFF3E8" />
    <path
      d="M24 7 33 19l-2.7-.4-2.2 5.1 5.8 1.4-3.2 4.8 1.9 7.1L24 41 15.4 36l1.9-7.1-3.2-4.8 5.8-1.4-2.2-5.1L15 19l9-12Z"
      fill="#FF6D00"
    />
    <path
      d="M24 12.5 29.2 20l-1.7-.2-1.4 3.3 3.6.9-2 3 .9 3.3L24 35l-4.6-2.7.9-3.3-2-3 3.6-.9-1.4-3.3-1.7.2L24 12.5Z"
      fill="#FFB74D"
      opacity="0.85"
    />
  </svg>
);

export { Firestore };
