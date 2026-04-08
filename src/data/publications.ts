export interface Publication {
  authors: string[];
  title: string;
  arxivId?: string;
  doi?: string;
  journal?: string;
  year: number;
}

export const publications: Publication[] = [
  {
    authors: ["Elvang, H.", "Herderschee, A.", "Morales, R."],
    title: "String Theory from Maximal Supersymmetry",
    arxivId: "2601.11705",
    year: 2026,
  },
  {
    authors: ["De Angelis, S.", "Herderschee, A.", "Roiban, R.", "Teng, F."],
    title:
      "Asymptotic Simplicity and Scattering in General Relativity from Quantum Field Theory",
    arxivId: "2511.10637",
    year: 2025,
  },
  {
    authors: ["Herderschee, A.", "Wall, A."],
    title:
      "Bounding field excursions along null geodesics with applications to cosmology",
    arxivId: "2510.01554",
    journal: "JHEP 03 (2026) 025",
    year: 2025,
  },
  {
    authors: ["Herderschee, A.", "Kudler-Flam, J."],
    title:
      "Stringy algebras, stretched horizons, and quantum-connected wormholes",
    arxivId: "2510.01556",
    year: 2025,
  },
  {
    authors: ["Herderschee, A."],
    title:
      "Feynman-like parameterizations of (anti-)de Sitter Witten diagrams for all masses at any loop order",
    arxivId: "2509.02699",
    year: 2025,
  },
  {
    authors: ["Winer, M.", "Herderschee, A."],
    title: "A Jammed Parisi Ansatz",
    arxivId: "2503.11761",
    journal: "Phys. Rev. E 112 (2025) 064120",
    year: 2025,
  },
  {
    authors: ["Biggs, K.", "Herderschee, A."],
    title: "Higher-point correlators in the BFSS matrix model",
    arxivId: "2503.14685",
    year: 2025,
  },
  {
    authors: ["Herderschee, A.", "Winer, M."],
    title: "Failure of the large-N expansion in a Bosonic Tensor Model",
    arxivId: "2410.06896",
    journal: "JHEP 05 (2025) 141",
    year: 2024,
  },
  {
    authors: ["Alaverdian, L.", "Herderschee, A.", "Roiban, R.", "Teng, F."],
    title: "Difference equations and integral families for Witten diagrams",
    arxivId: "2406.04186",
    journal: "JHEP 12 (2024) 070",
    year: 2024,
  },
  {
    authors: [
      "Bini, D.",
      "Damour, T.",
      "De Angelis, S.",
      "Geralico, A.",
      "Herderschee, A.",
      "Roiban, R.",
      "Teng, F.",
    ],
    title: "Gravitational waveforms: A tale of two formalisms",
    arxivId: "2402.06604",
    journal: "Phys. Rev. D 109 (2024) 125008",
    year: 2024,
  },
  {
    authors: ["Herderschee, A.", "Maldacena, J."],
    title: "Soft theorems in matrix theory",
    arxivId: "2312.15111",
    journal: "JHEP 11 (2024) 052",
    year: 2023,
  },
  {
    authors: ["Herderschee, A.", "Maldacena, J."],
    title: "Three point amplitudes in matrix theory",
    arxivId: "2312.12592",
    journal: "J. Phys. A 57 (2024) 165401",
    year: 2023,
  },
  {
    authors: ["Berman, J.", "Elvang, H.", "Herderschee, A."],
    title:
      "Flattening of the EFT-hedron: supersymmetric positivity bounds and the search for string theory",
    arxivId: "2310.10729",
    journal: "JHEP 03 (2024) 021",
    year: 2023,
  },
  {
    authors: ["Herderschee, A.", "Roiban, R.", "Teng, F."],
    title: "The sub-leading scattering waveform from amplitudes",
    arxivId: "2303.06112",
    journal: "JHEP 06 (2023) 004",
    year: 2023,
  },
  {
    authors: ["Chen, G.", "Elvang, H.", "Herderschee, A."],
    title: "Bootstrapping the string KLT kernel",
    arxivId: "2302.04895",
    journal: "Phys. Rev. Lett. 131 (2023) 031602",
    year: 2023,
  },
  {
    authors: ["Chen, G.", "Elvang, H.", "Herderschee, A."],
    title: "Emergence of string monodromy in effective field theory",
    arxivId: "2212.13998",
    journal: "Phys. Rev. Lett. 133 (2024) 091601",
    year: 2022,
  },
  {
    authors: ["Herderschee, A.", "Roiban, R.", "Teng, F."],
    title:
      "On the differential representation and color-kinematics duality of AdS boundary correlators",
    arxivId: "2201.05067",
    journal: "JHEP 05 (2022) 026",
    year: 2022,
  },
  {
    authors: ["Herderschee, A."],
    title: "A new framework for higher loop Witten diagrams",
    arxivId: "2112.08226",
    journal: "JHEP 06 (2024) 008",
    year: 2021,
  },
  {
    authors: [
      "Chi, L.",
      "Elvang, H.",
      "Herderschee, A.",
      "Jones, C.",
      "Paranjape, S.",
    ],
    title: "Generalizations of the double-copy: the KLT bootstrap",
    arxivId: "2106.12600",
    journal: "JHEP 03 (2022) 077",
    year: 2021,
  },
  {
    authors: ["Diwakar, A.", "Herderschee, A.", "Roiban, R.", "Teng, F."],
    title:
      "BCJ amplitude relations for anti-de Sitter boundary correlators in embedding space",
    arxivId: "2106.10822",
    journal: "JHEP 10 (2021) 141",
    year: 2021,
  },
  {
    authors: ["Herderschee, A."],
    title:
      "Algebraic branch points at all loop orders from positive kinematics and wall crossing",
    arxivId: "2102.03611",
    journal: "JHEP 07 (2021) 049",
    year: 2021,
  },
  {
    authors: ["Herderschee, A.", "Teng, F."],
    title: "Open associahedra and scattering forms",
    arxivId: "2008.06418",
    journal: "JHEP 12 (2020) 134",
    year: 2020,
  },
  {
    authors: ["Herderschee, A.", "He, S.", "Teng, F.", "Zhang, Y."],
    title: "On positive geometry and scattering forms for matter particles",
    arxivId: "1912.08307",
    journal: "JHEP 06 (2020) 030",
    year: 2020,
  },
  {
    authors: ["Herderschee, A.", "Koren, S.", "Trott, T."],
    title: "Massive on-shell supersymmetric scattering amplitudes",
    arxivId: "1902.07204",
    journal: "JHEP 10 (2019) 092",
    year: 2019,
  },
  {
    authors: ["Herderschee, A.", "Koren, S.", "Trott, T."],
    title: "Constructing N=4 Coulomb branch superamplitudes",
    arxivId: "1902.07205",
    journal: "JHEP 08 (2019) 107",
    year: 2019,
  },
];
