import type { SVGProps } from "react";

const Dart = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Dart</title>
    <g fill="none" fillRule="evenodd">
      <path d="M2 32 L32 2 L62 32 L32 62 Z" fill="#00B4AB" />
      <path d="M12 32 L32 12 L52 32 L32 52 Z" fill="#0A84FF" />
      <path d="M32 12 L36 20 L28 24 Z" fill="#0B5FFF" opacity="0.9" />
    </g>
  </svg>
);

export { Dart };
