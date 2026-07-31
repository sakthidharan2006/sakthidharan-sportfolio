/**
 * Centralized portfolio content.
 * All sections read from this file — update content here, not in components.
 */
import {
  Atom, Braces, FileCode, Code2, Server, Database, GitBranch, Route,
  KeyRound, MonitorSmartphone, Send, Wrench,
  GraduationCap, Award, BookOpen, Cloud, Briefcase,
  Globe, Github, Linkedin, Mail, Phone, MapPin,
  type LucideIcon,
} from "lucide-react";
import truckImage from "@/assets/truck-project.png";

/* ─────────────────────────  IDENTITY  ───────────────────────── */
export const identity = {
  name: "Sakthidharan E",
  role: "IT Professional",
  location: "Sathyamangalam, Tamil Nadu",
  email: "sakthidharane16@gmail.com",
  phone: "+91 6374103029",
  tagline: "Full Stack Developer with hands-on experience designing and developing web applications using Java, React.js, Node.js, Express.js and MongoDB.",
  resumeUrl: "/Resume_Sakthidharan.pdf",
  resumeDownloadAs: "Sakthidharan_E_Resume.pdf",
  brand: { initials: "SD", wordmark: "Sakthidharan E", subline: "Developer.Portfolio" },
};

/* ─────────────────────────  SOCIAL LINKS  ───────────────────────── */
export const socialLinks = {
  github: "https://github.com/sakthidharan2006",
  linkedin: "https://linkedin.com/in/sakthidharan-e-",
  email: "mailto:sakthidharane16@gmail.com",
  leetcode: "https://leetcode.com/u/sakthidharan2006/",
};

/* ─────────────────────────  NAVIGATION  ───────────────────────── */
export const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

/* ─────────────────────────  HERO  ───────────────────────── */
export type FloatingTechIcon = {
  icon: LucideIcon;
  label: string;
  x: string; y: string;
  size: number;
  delay: number;
  color: string;
  speed: number;
  anim: "orbit" | "typewriter" | "heartbeat" | "morph" | "radar" | "stack" | "pendulum" | "sonar";
};

export const floatingTechIcons: FloatingTechIcon[] = [
  { icon: Atom, label: "React", x: "8%", y: "18%", size: 28, delay: 0, color: "hsl(193 95% 55%)", speed: 0.3, anim: "orbit" },
  { icon: Braces, label: "JS", x: "88%", y: "22%", size: 24, delay: 0.5, color: "hsl(50 90% 50%)", speed: 0.5, anim: "typewriter" },
  { icon: FileCode, label: "HTML", x: "5%", y: "55%", size: 22, delay: 1, color: "hsl(12 77% 52%)", speed: 0.2, anim: "heartbeat" },
  { icon: Code2, label: "CSS", x: "92%", y: "50%", size: 22, delay: 1.5, color: "hsl(205 87% 50%)", speed: 0.45, anim: "morph" },
  { icon: Server, label: "Node", x: "12%", y: "80%", size: 20, delay: 2, color: "hsl(120 40% 44%)", speed: 0.35, anim: "radar" },
  { icon: Database, label: "DB", x: "85%", y: "78%", size: 20, delay: 2.5, color: "hsl(120 40% 40%)", speed: 0.55, anim: "stack" },
  { icon: GitBranch, label: "Git", x: "18%", y: "38%", size: 18, delay: 3, color: "hsl(15 75% 55%)", speed: 0.25, anim: "pendulum" },
  { icon: Route, label: "API", x: "82%", y: "38%", size: 18, delay: 3.5, color: "hsl(190 90% 45%)", speed: 0.4, anim: "sonar" },
];

/* ─────────────────────────  ABOUT  ───────────────────────── */
export const aboutBio: string[] = [
  "I'm an IT student at Bannari Amman Institute of Technology, passionate about becoming a software developer and building real-world solutions. Through my coursework and personal learning, I've developed a good understanding of programming, web development, and core concepts like data structures, networking, and system design.",
  "I enjoy working on full-stack applications and experimenting with technologies like Java, Python, and JavaScript. I've also explored working with databases and building simple APIs, which helped me understand how systems work end-to-end.",
  "What I like most about tech is problem solving — figuring out how to approach a challenge, break it down, and improve it step by step. I'm always trying to learn something new, whether it's improving my coding skills, understanding how scalable systems work, or exploring areas like cloud and modern development tools.",
  "I'm looking forward to growing as a developer, working on meaningful projects, and continuously improving my skills along the way.",
];

export const education = [
  {
    icon: GraduationCap,
    degree: "B.Tech - Information Technology",
    institution: "Bannari Amman Institute of Technology",
    status: "Pursuing",
    year: "2023 - 2027",
  },
  {
    icon: Award,
    degree: "Diploma in Computer Technology",
    institution: "Kongu Polytechnic College",
    status: "84%",
    year: "2020 - 2023",
  },
  {
    icon: BookOpen,
    degree: "SSLC",
    institution: "Nest School",
    status: "Completed",
    year: "2020",
  },
];

/* ─────────────────────────  SKILLS  ───────────────────────── */
export const skillCategories = [
  {
    title: "Frontend",
    code: "FE_01",
    skills: [
      { name: "HTML5", level: 90, icon: FileCode, color: "hsl(12 77% 52%)" },
      { name: "CSS3", level: 85, icon: Code2, color: "hsl(205 87% 50%)" },
      { name: "JavaScript", level: 85, icon: Braces, color: "hsl(50 90% 50%)" },
      { name: "React", level: 80, icon: Atom, color: "hsl(193 95% 55%)" },
    ],
  },
  {
    title: "Backend",
    code: "BE_02",
    skills: [
      { name: "Node.js", level: 75, icon: Server, color: "hsl(120 40% 44%)" },
      { name: "Express", level: 75, icon: Route, color: "hsl(0 0% 50%)" },
      { name: "REST APIs", level: 80, icon: Send, color: "hsl(190 90% 45%)" },
    ],
  },
  {
    title: "Database",
    code: "DB_03",
    skills: [
      { name: "MongoDB", level: 75, icon: Database, color: "hsl(120 40% 40%)" },
      { name: "SQL Basics", level: 65, icon: Database, color: "hsl(210 50% 50%)" },
    ],
  },
  {
    title: "Tools & Others",
    code: "TL_04",
    skills: [
      { name: "Git & GitHub", level: 85, icon: GitBranch, color: "hsl(15 75% 55%)" },
      { name: "JWT Auth", level: 70, icon: KeyRound, color: "hsl(280 60% 55%)" },
      { name: "VS Code", level: 90, icon: MonitorSmartphone, color: "hsl(210 80% 55%)" },
      { name: "Postman", level: 80, icon: Wrench, color: "hsl(25 90% 55%)" },
    ],
  },
];

/* ─────────────────────────  PROJECTS  ───────────────────────── */
export const projects = [
  {
    title: "SmartFleet AI - Intelligent Infrastructure for Modern Logistics",
    description:
      "A comprehensive web-based fleet tracking system with role-based demo logins for Admin, Fleet Owner, and Drivers. Features dark-themed UI with real-time vehicle management and instant dashboard access.",
    features: [
      "Multi-role demo login",
      "Real-time tracking",
      "Dark themed UI",
      "Driver & vehicle management",
    ],
    tech: ["React", "Tailwind CSS", "Supabase", "TypeScript"],
    icon: Globe,
    github: "https://github.com",
    live: "https://smarfleetai.vercel.app/",
    image: truckImage,
    featured: true,
  },
];

/* ─────────────────────────  EXPERIENCE  ───────────────────────── */
export const experiences = [
  {
    icon: Briefcase,
    title: "Internship",
    organization: "SBA HIGH-TECH Solutions",
    period: "2023",
    description:
      "Gained hands-on experience working on real-world projects and collaborating with industry professionals. Developed practical skills in software development and problem-solving.",
    highlights: ["Real-world Projects", "Industry Experience", "Professional Development"],
  },
  {
    icon: Cloud,
    title: "Microsoft Azure Fundamentals",
    organization: "Microsoft Certification",
    period: "2024",
    description:
      "This journey has strengthened my knowledge of cloud computing, Azure architecture, and effective management & governance practices.",
    highlights: ["Cloud Computing", "Azure Architecture", "Management & Governance"],
  },
  {
    icon: Award,
    title: "AWS Certifications",
    organization: "Amazon Web Services",
    period: "2024",
    description:
      "Completed AWS Cloud Practitioner Essentials and Introduction to Generative AI - Art of the Possible. Built foundational knowledge in cloud services and AI capabilities.",
    highlights: ["Cloud Practitioner Essentials", "Generative AI Fundamentals", "AWS Services"],
  },
  {
    icon: Award,
    title: "Cybersecurity Certification",
    organization: "Cisco Networking Academy",
    period: "2024",
    description:
      "Completed Introduction to Cybersecurity course, gaining essential knowledge in security fundamentals, threat detection, and network protection strategies.",
    highlights: ["Network Security", "Threat Detection", "Security Best Practices"],
  },
  {
    icon: Award,
    title: "Data Analytics Essentials",
    organization: "Cisco Networking Academy",
    period: "2026",
    description:
      "Completed Data Analytics Essentials certification through Cisco Networking Academy at Bannari Amman Institute of Technology, building skills in data analysis and visualization.",
    highlights: ["Data Analysis", "Data Visualization", "Analytics Fundamentals"],
  },
  {
    icon: Award,
    title: "Introduction to Data Science",
    organization: "Cisco Networking Academy",
    period: "2026",
    description:
      "Completed Introduction to Data Science certification through Cisco Networking Academy at Bannari Amman Institute of Technology, gaining foundational knowledge in data science concepts and methodologies.",
    highlights: ["Data Science", "Data Methodologies", "Statistical Analysis"],
  },
  {
    icon: Award,
    title: "Introduction to Modern AI",
    organization: "Cisco Networking Academy",
    period: "2026",
    description:
      "Completed Introduction to Modern AI certification through Cisco Networking Academy at Bannari Amman Institute of Technology, exploring modern AI concepts and applications.",
    highlights: ["Modern AI", "AI Applications", "Machine Learning Basics"],
  },
  {
    icon: Award,
    title: "Python Essentials 1",
    organization: "Cisco Networking Academy & Python Institute",
    period: "2026",
    description:
      "Completed Python Essentials 1 certification through Cisco Networking Academy at Bannari Amman Institute of Technology, building foundational Python programming skills.",
    highlights: ["Python Programming", "Scripting", "Software Development"],
  },
  {
    icon: Award,
    title: "TN-IMPACT 2026 Industrial Hackathon",
    organization: "TANCAM · Dassault Systèmes · TIDCO",
    period: "2026",
    description:
      "Participated in Special Expert Sessions conducted by Tamil Nadu Centre of Excellence for Advanced Manufacturing (TANCAM) as part of TN-IMPACT 2026 Industrial Hackathon at KIT, Tamil Nadu.",
    highlights: ["Industrial Hackathon", "Advanced Manufacturing", "Expert Sessions"],
  },
  {
    icon: Award,
    title: "EmbeddedX Participation",
    organization: "Google Developer Groups On Campus · CVR College of Engineering",
    period: "2026",
    description:
      "Participated in EmbeddedX event organized by Google Developer Groups On Campus at CVR College of Engineering, gaining exposure to embedded systems and developer community.",
    highlights: ["Embedded Systems", "GDG On Campus", "Developer Community"],
  },
  {
    icon: Award,
    title: "Google Gemini Certified Student",
    organization: "Google for Education",
    period: "2026",
    description:
      "Earned the Gemini Certified Student (University) qualification, demonstrating knowledge, skills, and basic competencies needed to use Google AI.",
    highlights: ["Google AI", "Gemini", "AI Competencies"],
  },
  {
    icon: Award,
    title: "NSS Volunteer Certification",
    organization: "Government of India · Ministry of Youth Affairs & Sports",
    period: "2021 - 2023",
    description:
      "Certified NSS Volunteer under the National Service Scheme by Government of India. Served as NSS Volunteer at 320 - Kongu Polytechnic College and attended NSS Special Camp from 21/03/2023 to 27/03/2023, contributing to social service initiatives.",
    highlights: ["National Service Scheme", "Social Service", "NSS Special Camp"],
  },
  {
    icon: BookOpen,
    title: "Self-Learning Journey",
    organization: "Personal Development",
    period: "Ongoing",
    description:
      "Dedicated to continuous learning through documentation, tutorials, and building real-world projects. Focus on practical, industry-relevant skills and modern development practices.",
    highlights: ["Full-Stack Development", "Best Practices", "Modern Technologies"],
  },
];

/* ─────────────────────────  INTERACTIVE TIMELINE  ───────────────────────── */
export const milestones = [
  {
    year: "2023",
    icon: Briefcase,
    title: "Internship at SBA HIGH-TECH Solutions",
    subtitle: "Industry Experience",
    description:
      "Gained hands-on experience working on real-world projects and collaborating with industry professionals.",
    details: [
      "Developed practical skills in software development",
      "Collaborated with cross-functional teams",
      "Worked on production-grade codebases",
    ],
    color: "primary",
  },
  {
    year: "2024",
    icon: Cloud,
    title: "Microsoft Azure Fundamentals",
    subtitle: "Microsoft Certification",
    description:
      "Strengthened knowledge of cloud computing, Azure architecture, and management & governance practices.",
    details: [
      "Cloud Computing Foundations",
      "Azure Architecture & Services",
      "Management & Governance",
    ],
    color: "accent",
  },
  {
    year: "2024",
    icon: Award,
    title: "AWS & Cybersecurity Certifications",
    subtitle: "AWS & Cisco",
    description:
      "Completed AWS Cloud Practitioner Essentials, Intro to Generative AI, and Cisco Cybersecurity certification.",
    details: [
      "AWS Cloud Practitioner Essentials",
      "Introduction to Generative AI",
      "Cisco Cybersecurity Fundamentals",
    ],
    color: "primary",
  },
  {
    year: "2026",
    icon: Award,
    title: "Data Science & Analytics Certs",
    subtitle: "Cisco Networking Academy",
    description:
      "Completed Data Analytics Essentials and Introduction to Data Science certifications.",
    details: [
      "Data Analytics Essentials",
      "Introduction to Data Science",
      "Statistical Analysis & Visualization",
    ],
    color: "accent",
  },
  {
    year: "2026",
    icon: Award,
    title: "TN-IMPACT 2026 · TANCAM Hackathon",
    subtitle: "TANCAM · Dassault Systèmes · TIDCO",
    description:
      "Participated in Special Expert Sessions by TANCAM as part of TN-IMPACT 2026 Industrial Hackathon at KIT, Tamil Nadu.",
    details: [
      "Advanced Manufacturing Sessions",
      "Industrial Hackathon",
      "Expert-led Workshops",
    ],
    color: "accent",
  },
  {
    year: "2026",
    icon: Award,
    title: "AI & Python Certifications",
    subtitle: "Cisco & Google",
    description:
      "Earned Introduction to Modern AI, Python Essentials 1, and Google Gemini Certified Student qualifications.",
    details: [
      "Introduction to Modern AI",
      "Python Essentials 1",
      "Google Gemini Certified Student",
    ],
    color: "primary",
  },
  {
    year: "2026",
    icon: Award,
    title: "EmbeddedX · GDG On Campus",
    subtitle: "Google Developer Groups · CVR College of Engineering",
    description:
      "Participated in EmbeddedX event organized by Google Developer Groups On Campus, exploring embedded systems and developer collaboration.",
    details: [
      "Embedded Systems",
      "GDG On Campus Event",
      "Developer Community Engagement",
    ],
    color: "primary",
  },
  {
    year: "Ongoing",
    icon: BookOpen,
    title: "Self-Learning Journey",
    subtitle: "Personal Development",
    description:
      "Dedicated to continuous learning through documentation, tutorials, and building real-world projects.",
    details: [
      "Full-Stack Development",
      "Modern Best Practices",
      "Open Source Contributions",
    ],
    color: "accent",
  },
];

/* ─────────────────────────  CONTACT INFO  ───────────────────────── */
export const contactInfo = [
  { icon: Mail, label: "Email", value: "sakthidharane16@gmail.com", href: "mailto:sakthidharane16@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 6374103029", href: "tel:+916374103029" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sakthidharan-e-", href: "https://linkedin.com/in/sakthidharan-e-" },
  { icon: Github, label: "GitHub", value: "github.com/sakthidharan2006", href: "https://github.com/sakthidharan2006" },
  { icon: MapPin, label: "Location", value: "Sathyamangalam, Tamil Nadu", href: null as string | null },
];
