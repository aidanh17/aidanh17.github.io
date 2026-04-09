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

export interface Award {
  year: string;
  title: string;
}

export const awards: Award[] = [
  { year: "2023", title: "Wirt and Mary Cornwell Prize" },
  { year: "2022", title: "Rackham Predoctoral Fellow" },
  { year: "2020–2021", title: "Leinweber Graduate Fellow" },
  { year: "2020", title: "Peter Franken Award" },
  { year: "2020", title: "NSF Graduate Research Fellowship — Honorable Mention" },
  { year: "2019", title: "Undergraduate Research Award, UCSB" },
  { year: "2017", title: "Worster Fellowship, UCSB" },
  { year: "2015", title: "SURF Fellowship, UCSB" },
];
