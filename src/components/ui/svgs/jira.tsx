import type { SVGProps } from "react";

const Jira = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Jira</title>
    <rect width="48" height="48" rx="10" fill="#0052CC" />
    <path
      d="M19.5 11.5h10.2c1.6 0 2.9 1.3 2.9 2.9v18.4c0 1.6-1.3 2.9-2.9 2.9H19.5c-1.6 0-2.9-1.3-2.9-2.9V14.4c0-1.6 1.3-2.9 2.9-2.9Z"
      fill="#fff"
      opacity="0.15"
    />
    <path
      d="M22.2 16.2h7.8c.7 0 1.2.6 1.2 1.2 0 .7-.6 1.2-1.2 1.2h-7.8c-.7 0-1.2-.6-1.2-1.2 0-.7.5-1.2 1.2-1.2Zm0 4.6h7.8c.7 0 1.2.6 1.2 1.2 0 .7-.6 1.2-1.2 1.2h-7.8c-.7 0-1.2-.6-1.2-1.2 0-.7.5-1.2 1.2-1.2Zm0 4.6h5.1c.7 0 1.2.6 1.2 1.2 0 .7-.6 1.2-1.2 1.2h-5.1c-.7 0-1.2-.6-1.2-1.2 0-.7.5-1.2 1.2-1.2Z"
      fill="#fff"
    />
  </svg>
);

export { Jira };
