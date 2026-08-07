import { Icons } from "@/components/icons";
import { FileTextIcon, HomeIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { FastAPI } from "@/components/ui/svgs/fastapi";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Javascript } from "@/components/ui/svgs/javascript";
import { Dart } from "@/components/ui/svgs/dart";
import { Vite } from "@/components/ui/svgs/vite";
import { Redux } from "@/components/ui/svgs/redux";
import { Firebase } from "@/components/ui/svgs/firebase";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { MySQL } from "@/components/ui/svgs/mysql";
import { SQLite } from "@/components/ui/svgs/sqlite";
import { Bun } from "@/components/ui/svgs/bun";
import { Express } from "@/components/ui/svgs/express";
import { Firestore } from "@/components/ui/svgs/firestore";
import { AstraDB } from "@/components/ui/svgs/astradb";
import { Jira } from "@/components/ui/svgs/jira";

export const DATA = {
  name: "Parthsaarthie Sharma",
  initials: "PS",
  url: "https://rishabhtripathi.vercel.app",
  location: "Gurugram, India",
  locationLink: "https://www.google.com/maps/place/gurugram",
  description:
    "Computer Science student and developer focused on mobile apps, full-stack products, and AI-powered systems using Flutter, React, Node.js, and modern backend tools.",
  summary:
    "I'm pursuing a B.Tech in Computer Science and Technology at Maharaja Agrasen Institute of Technology with a CGPA of 8.65. I have hands-on experience building Flutter mobile apps, real-time cryptocurrency interfaces, and full-stack AI products with React.js, Node.js, Express.js, MongoDB, LLMs, RAG, and vector search. I also enjoy solving DSA problems in Java and leading student events through CSI, MAIT.",
  avatarUrl: "/profile.jpeg",
  skills: [
    { name: "Java", icon: Java },
    { name: "C++", icon: Csharp },
    { name: "C", icon: Csharp },
    { name: "Dart", icon: Dart },
    { name: "JavaScript", icon: Javascript },
    { name: "TypeScript", icon: Typescript },
    { name: "Python", icon: Python },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Vite.js", icon: Vite },
    { name: "Tailwind CSS", icon: Icons.tailwindcss },
    { name: "Node.js", icon: Nodejs },
    { name: "Express.js", icon: Express },
    { name: "Firebase", icon: Firebase },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "MongoDB", icon: MongoDB },
    { name: "SQLite", icon: SQLite },
    { name: "MySQL", icon: MySQL },
    { name: "Firestore", icon: Firestore },
    { name: "RAG", icon: Icons.openai },
    { name: "LLM Integration", icon: Icons.openai },
    { name: "Vector Search", icon: Icons.openai },
    { name: "Git/GitHub", icon: Icons.github },
    { name: "Jira", icon: Jira },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "parthsaarthiesharma1909@gmail.com",
    tel: "+917840005439",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Paaaarth1909",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/parthsaarthie-sharma/",
        icon: Icons.linkedin,
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/u/Parthsaarthie1909/",
        icon: Icons.leetcode,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Parthsaarthie19",
        icon: Icons.x,
        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1zJjrVT2BBCvIfDO947vfNZPWvzbgFnRp/view?usp=sharing",
        icon: FileTextIcon,
        navbar: true,
      },
      Phone: {
        name: "Call",
        url: "tel:+917840005439",
        icon: Icons.phone,
        navbar: true,
      },
      Portfolio: {
        name: "Portfolio",
        url: "https://rishabh-tripathi-xi.vercel.app/",
        icon: Icons.globe,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:parthsaarthiesharma1909@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Aaptatt - Innovation at forefront!",
      href: "https://www.aaptatt.com/",
      badges: [],
      location: "Gurugram, Haryana",
      title: "Software Engineer Intern",
      logoUrl: "/Aaptatt-logo.png",
      start: "June 2026",
      end: "Present",
      description:
        "Worked on AI-powered productivity and knowledge management applications as part of the development team. Developed and optimized intelligent features for content analysis, information retrieval, and workflow automation to improve usability, responsiveness, and overall user experience. Also contributed to applications involving resume analysis, content summarization, and decision-support systems through iterative development, testing, and optimization.",
    },
    {
      company: "Nebel Infotech",
      href: "https://nebel.co.in/",
      badges: [],
      location: "Gurugram, Haryana",
      title: "Mobile App Dev Intern",
      logoUrl: "/nebel-logo.png",
      start: "June 2025",
      end: "August 2025",
      description:
        "Worked on Syndico, a facility management system, as part of the development team. Developed and optimized Flutter-based mobile features to improve workflow management, responsiveness, and user experience. Also contributed to an Android-based cryptocurrency mobile application by integrating APIs, improving UI rendering, and enhancing real-time market data visualization.",
    },
    {
      company: "CSI-Innowave, MAIT",
      href: "https://www.csiinnowave.com/",
      badges: [],
      location: "Delhi, India",
      title: "Logistics and Hospitality Head",
      logoUrl: "/CSI.png",
      start: "December 2023",
      end: "Present",
      description:
        "Led logistics and hospitality operations for flagship events including Zypher, Uncharted, internship fairs, and a hackathon at the Microsoft Gurgaon Office. Coordinated activities for 1000+ students while collaborating across teams to ensure smooth event execution over three years.",
    },
  ],
  education: [
    {
      school: "Maharaja Agrasen Institute of Technology",
      href: "https://www.mait.ac.in/",
      degree: "Bachelor of Technology in Computer Science and Technology - CGPA: 8.65",
      logoUrl: "/mait.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Shri S.N. Sidheshwar Sr Sec Public School",
      href: "https://www.snsidheshwar.com/",
      degree: "Senior Secondary (CBSE) - 87.5%",
      logoUrl: "/school1.png",
      start: "2021",
      end: "2023",
    },
    {
      school: "D.A.V Public School",
      href: "https://dav14gurgaon.com/",
      degree: "Secondary (CBSE) - 93.8%",
      logoUrl: "/school2.png",
      start: "2019",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "RSS News Deduplicator",
      href: "https://rss-news-dedupliactor.vercel.app/",
      dates: "March 2026",
      active: true,
      description:
        "A full-stack smart news app that fetches articles from multiple RSS feeds, stores them locally in SQLite, and groups similar headlines so repeated coverage is easier to scan. The backend uses Node.js, Express, RSS parsing, SQLite, and a lightweight deduplication algorithm, while the frontend is built with React, TypeScript, Vite, and Tailwind CSS.",
      technologies: [
        "Node.js",
        "Express.js",
        "RSS Parser",
        "Better SQLite3",
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Axios",
      ],
      links: [
        {
          type: "Website",
          href: "https://rss-news-dedupliactor.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Paaaarth1909/Rss-News-Dedupliactor",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/rss-news-deduplicator.png",
      video: "",
    },
    {
      title: "Worklog Impact Portfolio",
      href: "https://worklog-impact-portfolio.vercel.app/",
      dates: "January 2026",
      active: true,
      description:
        "A full-stack productivity app that turns daily work logs into summaries, project insights, and portfolio-ready impact statements. It organizes entries by date, project, and impact, with dashboard analytics, weekly and monthly summaries, searchable history, and portfolio mode for concise bullets.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Express.js",
        "SQLite",
        "Drizzle ORM",
        "TanStack Query",
        "Radix UI",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://worklog-impact-portfolio.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Paaaarth1909/Worklog_Impact_Portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "./projects/worklog.png",
      video: "",
    },
    {
      title: "Decision Prioritiser",
      href: "https://decision-priortiser.vercel.app/",
      dates: "February 2026",
      active: true,
      description:
        "A smart productivity app that helps users decide what to work on next by scoring tasks across impact, urgency, learning value, risk of delay, and energy required. It uses a weighted scoring engine, localStorage persistence, and a lightweight React + TypeScript + Vite frontend with Tailwind CSS and Framer Motion.",
      technologies: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Framer Motion",
        "localStorage",
      ],
      links: [
        {
          type: "Website",
          href: "https://decision-priortiser.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Paaaarth1909/Decision_Priortiser",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "./projects/Decision.png",
      video: "",
    },
    {
      title: "CRYPTONIX",
      href: "https://www.figma.com/design/zIOkGnV8FesVLGiCjvuAAc/Crypto-design-12-immediate-script--Copy-?node-id=0-1&t=pLA8D6G249DzgEek-1",
      dates: "June - July 2025",
      active: true,
      description:
        "CRYPTONIX is a Flutter-based cryptocurrency tracking app that delivers real-time price updates, interactive candlestick charts, portfolio management, and price alerts. The app integrates market APIs and provides responsive UI built with Flutter and Dart.",
      technologies: ["Flutter", "Dart", "REST APIs", "Charts"],
      links: [
        {
          type: "Design",
          href: "https://www.figma.com/design/zIOkGnV8FesVLGiCjvuAAc/Crypto-design-12-immediate-script--Copy-?node-id=0-1&t=pLA8D6G249DzgEek-1",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Paaaarth1909/CRYPTONIX",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "./projects/cryptonix.png",
      video: "",
    },
    {
      title: "No Fluff Reader",
      href: "https://no-fluff-reader.vercel.app/",
      dates: "November 2025",
      active: true,
      description:
        "A minimal, privacy-minded Chrome extension, landing site, and optional API server that lets users read articles without paywalls or clutter. The repo includes a Manifest V3 extension, a React + Vite landing page with install/download flows, and supporting server-side features.",
      technologies: [
        "Chrome Extension",
        "React",
        "Vite",
        "TypeScript",
        "Express",
        "pnpm",
      ],
      links: [
        {
          type: "Website",
          href: "https://no-fluff-reader.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Paaaarth1909/No_fluff_Reader",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "./projects/No_fluff.png",
      video: "",
    },
  ],
  hackathons: [],
} as const;
 