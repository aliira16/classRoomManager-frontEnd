import { Subject } from "../types/index";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    name: "Introduction to Computer Science",
    code: "CS101",
    department: "Computer Science",
    description:
      "Fundamentals of computing, algorithms, data structures, and software development principles.",
    creatdat: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Calculus I",
    code: "MATH101",
    department: "Mathematics",
    description:
      "Limits, derivatives, integrals, and applications to modeling change in STEM contexts.",
    creatdat: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Principles of Microeconomics",
    code: "ECON101",
    department: "Economics",
    description:
      "Market behavior, consumer choice, production costs, and price determination in competitive markets.",
    creatdat: new Date().toISOString(),
  },
  {
    id: 4,
    name: "General Chemistry",
    code: "CHEM101",
    department: "Chemistry",
    description:
      "Atomic structure, chemical bonding, stoichiometry, thermodynamics, and introductory lab techniques.",
    creatdat: new Date().toISOString(),
  },
];
