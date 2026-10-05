import {
  SiAngular,
  SiNestjs,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

// Hand-picked; `usedAt` mirrors work_experience.json and projects.json.
// `for` is the client or product inside that company, when there is one.
export const STACK = [
  {
    name: "Angular",
    Icon: SiAngular,
    usedAt: [
      { at: "EPAM Systems", for: "Meridianbet" },
      { at: "NQode", for: "BrightFunded" },
    ],
  },
  {
    name: "React",
    Icon: SiReact,
    usedAt: [
      { at: "AxiomQ", for: "Current role" },
      { at: "Upravnik" },
      { at: "STK Vojvodina" },
      { at: "Dr Bean Coffee" },
    ],
  },
  {
    name: "Next.js",
    Icon: SiNextdotjs,
    usedAt: [
      { at: "NQode", for: "Source AG" },
      { at: "NQode", for: "Owow" },
      { at: "Upravnik" },
    ],
  },
  {
    name: "NestJS",
    Icon: SiNestjs,
    usedAt: [
      { at: "AxiomQ", for: "Current role" },
      { at: "NQode", for: "Source AG" },
      { at: "Upravnik" },
    ],
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    usedAt: [{ at: "EPAM Systems" }, { at: "NQode" }, { at: "Upravnik" }],
  },
  {
    name: "Tailwind",
    Icon: SiTailwindcss,
    usedAt: [{ at: "NQode", for: "Owow" }],
  },
];
