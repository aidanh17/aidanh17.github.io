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

export interface Talk {
  title: string;
  venue: string;
  date: string;
}

export const talks: Talk[] = [
  { title: "String Theory from Maximal Supersymmetry", venue: "String Seminar, UC Berkeley", date: "March 2026" },
  { title: "Tropical Geometry for Cosmological Correlators at One Loop", venue: "String Seminar, Perimeter", date: "March 2026" },
  { title: "Tropical Geometry for Cosmological Correlators at One Loop", venue: "SNS Seminar, IAS", date: "March 2026" },
  { title: "Black holes in Space and the \"Lab\": From Theory to Practice", venue: "MIT", date: "December 2025" },
  { title: "Bounding field excursions along null geodesics", venue: "Joint McGill and Syracuse University", date: "December 2025" },
  { title: "Black holes in Space and the \"Lab\": From Theory to Practice", venue: "Theory Group Colloquium, Johns Hopkins University", date: "February 2025" },
  { title: "An Amplitudes Perspective on Gravitational Waves", venue: "High Energy Theory Seminar, Northwestern University", date: "October 2024" },
  { title: "Summation-by-Parts, Master Functions and Difference Equations for Loop Witten Diagrams", venue: "Amplitudes 2024, Princeton University", date: "June 2024" },
  { title: "Three Point Amplitudes and Emergent Symmetries in Matrix Theory", venue: "High Energy Theory Seminar, CUNY", date: "May 2024" },
  { title: "Three Point Amplitudes and Emergent Symmetries in Matrix Theory", venue: "High Energy Theory Seminar, MIT", date: "April 2024" },
  { title: "Three Point Amplitudes and Emergent Symmetries in Matrix Theory", venue: "High Energy Theory Seminar, McGill University", date: "April 2024" },
  { title: "Three Point Amplitudes and Emergent Symmetries in Matrix Theory", venue: "High Energy Theory Seminar, Stanford University", date: "March 2024" },
  { title: "Three Point Amplitudes and Emergent Symmetries in Matrix Theory", venue: "High Energy Theory Seminar, Johns Hopkins", date: "March 2024" },
  { title: "Three Point Amplitudes in Matrix Theory", venue: "Simons Center for Geometry and Physics", date: "January 2024" },
  { title: "The next-to-leading order scattering waveform from amplitudes", venue: "High Energy Theory Seminar, Texas A&M", date: "November 2023" },
  { title: "The Next-to-Leading Order Scattering Waveform from Amplitudes", venue: "IAS High Energy Theory Seminar", date: "September 2023" },
  { title: "The next-to-leading order scattering waveform from amplitudes", venue: "GAPP Seminar, Penn State", date: "February 2023" },
  { title: "The Supersymmetric EFThedron, String Theory and Deformed Monodromy", venue: "Amplitudes Meeting, IAS", date: "November 2022" },
  { title: "On the Differential Representation and Color-Kinematics Duality of AdS Boundary Correlators", venue: "Amplitudes 2022, Charles University, Prague", date: "August 2022" },
  { title: "On the Differential Representation and Color-Kinematics Duality of AdS Boundary Correlators", venue: "Caltech", date: "June 2022" },
  { title: "A Novel Framework for Higher Loop Witten Diagrams", venue: "Arnold-Sommerfeld Center, LMU Munich", date: "January 2022" },
  { title: "A Novel Framework for Higher Loop Witten Diagrams", venue: "Caltech", date: "October 2021" },
  { title: "BCJ Relations for AdS Boundary Correlators", venue: "Amplitudes Meeting, IAS", date: "July 2021" },
  { title: "Algebraic branch points at all loop orders from positive kinematics and wall crossing", venue: "Amplitudes Meeting, IAS", date: "March 2021" },
  { title: "Algebraic branch points at all loop orders from positive kinematics and wall crossing", venue: "Amplitudes Workshop, University of Oxford", date: "March 2021" },
  { title: "Algebraic branch points at all loop orders from positive kinematics and wall crossing", venue: "Geometry and Scattering Amplitudes Journal Club, LMU Munich", date: "March 2021" },
  { title: "Algebraic Letters and Asymptotic Chambers", venue: "Amplitudes Meeting, Brown University", date: "February 2021" },
  { title: "Open Associahedra and Scattering Forms", venue: "Amplitudes Journal Club, University of Chinese Academy of Sciences", date: "September 2020" },
  { title: "From Cluster Algebras to Polytopes and Beyond", venue: "Student Combinatorics Seminar, University of Michigan", date: "October 2019" },
  { title: "Positive Geometry of Massive Amplitudes and Beyond", venue: "Amplitudes 2019, Trinity College, Dublin", date: "July 2019" },
  { title: "Quantum Field Theory and On-Shell Constructibility", venue: "UC Santa Barbara", date: "October 2017" },
];
