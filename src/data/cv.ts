export interface CVEntry {
  period: string;
  title: string;
  institution: string;
  detail?: string;
}

export const positions: CVEntry[] = [
  {
    period: "2023 – Present",
    title: "Member, School of Natural Sciences",
    institution: "Institute for Advanced Study",
  },
];

export const education: CVEntry[] = [
  {
    period: "2018 – 2023",
    title: "PhD in Physics",
    institution: "University of Michigan",
    detail: "Advisor: Henriette Elvang",
  },
  {
    period: "2014 – 2018",
    title: "BS in Physics",
    institution: "UC Santa Barbara",
  },
];
