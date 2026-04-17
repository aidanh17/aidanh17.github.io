export interface ResearchDirection {
  slug: string;
  title: string;
  description: string;
  fullDescription: string[];
  papers: string[];
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  status: "Active" | "Completed";
  imageUrl: string;
  imageCredit: { name: string; url: string };
  overview: string;
  directions: ResearchDirection[];
  tags: string[];
  keyPapers: string[];
}

export const projects: Project[] = [
  {
    slug: "holography",
    title: "Holography",
    summary:
      "Probing quantum gravity through gauge-gravity duality, from the BFSS matrix model to stringy black hole horizons.",
    status: "Active",
    imageUrl:
      "/images/holography.jpg",
    imageCredit: { name: "Norbert Kowalczyk", url: "https://unsplash.com/@norbkov" },
    overview:
      "Holography, the idea that a theory of quantum gravity is equivalent to a lower-dimensional quantum theory without gravity, is one of the deepest insights in modern theoretical physics. I explore holographic dualities from multiple angles: testing the BFSS matrix model conjecture for M-theory and investigating how stringy effects modify black hole horizons.\n\nA central goal of this program is connecting holography with empirical observation. Remarkably, a regulated version of the BFSS matrix model could be simulated with roughly 7,000 qubits at parameter values where Monte Carlo results already agree with gravity predictions, placing a direct quantum simulation of gravity within reach of near-term quantum computers. More broadly, I am developing quantitative predictions, such as higher-point correlation functions, that can be tested against Monte Carlo simulations and, ultimately, laboratory realizations of holographic quantum systems. I am particularly interested in understanding what a quantum simulation of holographic models in the lab could teach us about quantum gravity.",
    directions: [
      {
        slug: "bfss-matrix-model",
        title: "BFSS matrix model and graviton scattering",
        description:
          "The BFSS matrix model conjectures that M-theory, and thus quantum gravity, is fully described by the quantum mechanics of large N×N matrices. I computed scattering amplitudes and soft graviton theorems directly in the matrix model, finding agreement with predictions from eleven-dimensional supergravity. The soft theorem result implies the amplitude is Lorentz symmetric, providing concrete evidence that the matrix model correctly reproduces the symmetries and dynamics of higher-dimensional gravity.",
        fullDescription: [
          "The BFSS matrix model is one of the most concrete proposals for a complete, non-perturbative definition of quantum gravity. It conjectures that M-theory, the eleven-dimensional framework unifying all consistent string theories, is exactly captured by the quantum mechanics of large N×N matrices. This is a striking claim: a relatively simple quantum-mechanical system, with no explicit notion of spacetime or extra dimensions, is supposed to contain all of gravitational physics. Despite decades of study, directly extracting gravitational observables from the matrix model remains technically challenging, and most evidence for the conjecture has come from comparisons at low orders in perturbation theory.",
          "I computed scattering amplitudes in the matrix model, focusing on three-point interactions and the soft graviton theorem, which governs the universal behavior of amplitudes when one graviton carries very little momentum. The three-point calculation matched eleven-dimensional supergravity predictions directly. The soft theorem result goes further: because the soft graviton theorem is a consequence of Lorentz invariance, and Lorentz invariance is not built into the matrix model's light-cone formulation, agreement provides concrete evidence that the full eleven-dimensional symmetry emerges dynamically from the matrix degrees of freedom. In a separate but related direction, I have computed higher-point boundary correlators in the holographic dual of the BFSS matrix model, providing new quantitative predictions that can be tested against Monte Carlo simulations, one of the few settings where holographic predictions meet numerical data.",
        ],
        papers: ["2312.12592", "2312.15111", "2503.14685"],
      },
      {
        slug: "stringy-algebras",
        title: "Stringy algebras and stretched horizons",
        description:
          "In the supergravity limit of AdS/CFT, black holes have sharp horizons. But string theory contains an infinite tower of massive higher-spin modes beyond this limit. Using techniques from algebraic quantum field theory, I showed that the Hagedorn spectrum causes a breakdown of the \"split property,\" a strengthening of the locality principle, for regions within a string length of each other. This provides a rigorous, algebraic definition of stretched horizons and stretched quantum extremal surfaces, giving a precise sense in which the horizon becomes \"fuzzy\" at the string scale.",
        fullDescription: [
          "In the low-energy supergravity approximation to string theory, black holes in anti-de Sitter space have sharply defined event horizons. But string theory is not just supergravity. It includes an infinite tower of massive higher-spin excitations with masses set by the string scale. As one probes distances comparable to the string length, these heavy modes become important and the sharp geometric picture must break down. A longstanding question in quantum gravity is how to make the intuitive notion of a \"fuzzy\" or \"stretched\" horizon mathematically precise.",
          "I addressed this using algebraic quantum field theory, a framework that characterizes quantum theories through the structure of their operator algebras rather than through specific states or correlators. I showed that the Hagedorn density of states, the exponential growth of the string spectrum, causes a breakdown of the split property, a rigorous formulation of the statistical independence of observations in spacelike-separated regions. When two regions are separated by less than the string length, their operator algebras are no longer independent: one cannot prepare arbitrary independent states in the two regions simultaneously. This gives a precise definition of the stretched horizon as the locus where the split property fails. I extended this to define stretched quantum extremal surfaces and discussed implications for holographic entanglement and the algebraic ER=EPR conjecture.",
        ],
        papers: ["2510.01556"],
      },
      {
        slug: "ads-boundary-correlators",
        title: "Perturbative holographic correlators",
        description:
          "AdS/CFT gives concrete, quantitative predictions for the correlation functions of strongly coupled quantum systems, predictions that can be tested numerically in systems like BFSS. I develop systematic methods for computing these boundary correlators from perturbative gravity in anti-de Sitter space, importing the modern amplitudes toolkit into curved spacetime.",
        fullDescription: [
          "The AdS/CFT correspondence turns the problem of computing correlators in a strongly coupled quantum system into a perturbative gravity calculation on anti-de Sitter space. I evaluate Witten diagrams, the curved-spacetime analogues of Feynman diagrams, in which bulk fields propagate through the AdS geometry and interact at vertices set by the gravitational action. While the first examples were computed decades ago, systematically evaluating higher-point and higher-loop diagrams has remained a major technical bottleneck. These calculations have direct experimental relevance: in the BFSS matrix model, the boundary theory is a quantum-mechanical system amenable to Monte Carlo simulation, so my perturbative gravity predictions for correlators can be tested against numerical experiment, one of the few arenas where holographic predictions meet real data.",
          "I developed several tools to make these calculations systematic. I showed that BCJ amplitude relations, identities among scattering amplitudes discovered in flat-space gauge theory, have direct analogues for AdS boundary correlators in embedding space, reducing the number of independent structures one must compute. I established a differential representation for these correlators and demonstrated that color-kinematics duality, a key organizing principle of the flat-space amplitudes program, extends to the AdS setting. At the loop level, I introduced a framework for higher-loop Witten diagrams and derived difference equations and integral reduction techniques analogous to integration-by-parts identities. The Witten-Feynman parameterization gives a general integral representation valid for all masses at any loop order, overcoming a long-standing restriction to conformally coupled scalars. Together, these results bring the algorithmic methods of modern amplitudes research into curved spacetime.",
        ],
        papers: ["2201.05067", "2106.10822", "2112.08226", "2406.04186", "2509.02699"],
      },
    ],
    tags: [
      "Holography",
      "BFSS Matrix Model",
      "M-Theory",
      "String Theory",
      "Black Holes",
      "Algebraic QFT",
      "AdS/CFT",
      "Witten Diagrams",
      "Boundary Correlators",
    ],
    keyPapers: ["2312.12592", "2312.15111", "2510.01556", "2503.14685", "2201.05067", "2106.10822"],
  },
  {
    slug: "classical-gravitational-waves",
    title: "Classical Gravitational Waves",
    summary:
      "Using particle physics techniques to compute the gravitational waves produced when black holes scatter, providing high-precision predictions for detectors like LIGO.",
    status: "Active",
    imageUrl:
      "/images/gravitational-waves.jpg",
    imageCredit: { name: "Julian Böck", url: "https://unsplash.com/@julian_boeck" },
    overview:
      "Gravitational wave astronomy has opened a new window onto the universe. To fully exploit observatories like LIGO and future detectors, increasingly precise theoretical predictions for the waveforms produced by compact binary systems are needed. I develop new methods, rooted in the scattering amplitudes program of particle physics, to compute these waveforms systematically and to high precision.",
    directions: [
      {
        slug: "waveforms-from-amplitudes",
        title: "Gravitational waveforms from scattering amplitudes",
        description:
          "I use quantum field theory methods, originally developed for particle collider calculations, to systematically compute the gravitational waveforms produced when two black holes scatter. Working in the post-Minkowskian expansion, I computed the sub-leading scattering waveform for uncharged black holes in general relativity and for half-BPS black holes in N=8 supergravity. This amplitudes-based approach provides an independent route to the high-precision predictions needed for current and next-generation gravitational wave observatories.",
        fullDescription: [
          "Gravitational wave detectors like LIGO work by matching incoming signals against theoretical waveform templates. The more accurate the template, the more one learns about the colliding black holes that produced the wave. Computing these templates from general relativity is notoriously difficult, especially at the precision demanded by next-generation detectors. I bring a different set of tools to the problem: scattering amplitudes, the mathematical objects at the heart of particle physics calculations at the LHC. The idea is to treat gravitating black holes as heavy particles and compute their scattering waveform order-by-order in Newton's constant, an approach known as the post-Minkowskian expansion. This complements the more traditional post-Newtonian approach, which is organized by powers of velocity and is best suited to slowly moving bound orbits.",
          "I computed the sub-leading waveform for the scattering of two black holes in general relativity, as well as for a special class of black holes in N=8 supergravity where additional symmetries provide strong consistency checks. In a separate collaboration with Bini, Damour, and others, I compared my amplitudes-based results against the Multipolar-post-Minkowskian formalism, a complementary classical method for computing gravitational radiation, finding precise agreement and providing a cross-validation of both approaches. These scattering calculations provide essential building blocks for the waveform models needed by LIGO and future observatories like LISA and the Einstein Telescope.",
        ],
        papers: ["2303.06112", "2402.06604"],
      },
      {
        slug: "asymptotic-peeling",
        title: "Asymptotic structure and the peeling property",
        description:
          "A basic question in general relativity is whether the gravitational field \"peels off\" in a specific way at large distances from a source, a property called asymptotic simplicity. Using the stress tensor of a two-body system as a source, I computed the spacetime metric at finite observer distance and investigated the fall-off behavior of the Newman-Penrose scalars. I found that the Sachs peeling property is violated, and that at higher orders in the post-Minkowskian expansion the breakdown is significantly stronger than previously recognized.",
        fullDescription: [
          "How does the gravitational field fall off far from its source? In electromagnetism the answer is simple: radiation falls as one over the distance. In general relativity the nonlinearity of gravity makes the question subtle. The classical expectation, formalized by Sachs in the 1960s, is a property called peeling: the different components of the gravitational field should decay in a specific hierarchy, each \"peeling off\" at a definite rate as one moves away from the source. If peeling holds, the boundary structure of spacetime is clean and well-defined, a property known as asymptotic simplicity. Whether realistic astrophysical sources produce spacetimes that actually satisfy this property has been debated for decades.",
          "I addressed this using the post-Minkowskian expansion, computing the spacetime metric produced by a two-body gravitational encounter at finite observer distance. I found that peeling is violated: the gravitational field does not fall off in the expected hierarchy. At higher orders in the expansion the violations grow worse, with a novel power-law departure from the expected fall-off hierarchy that had not been previously identified. This matters beyond mathematical aesthetics. The definitions of gravitational-wave energy, angular momentum, and memory effects at large distances all rely on assumptions about asymptotic fall-off, and these results raise the question of whether those assumptions need to be revisited.",
        ],
        papers: ["2511.10637"],
      },
    ],
    tags: [
      "Gravitational Waves",
      "Scattering Amplitudes",
      "Post-Minkowskian",
      "General Relativity",
      "LIGO",
      "Black Holes",
    ],
    keyPapers: ["2303.06112", "2511.10637", "2402.06604"],
  },
  {
    slug: "inflation",
    title: "Inflation",
    summary:
      "Studying semi-classical gravity during inflation, a proposed period of rapid expansion in the very early universe.",
    status: "Active",
    imageUrl:
      "/images/inflation.jpg",
    imageCredit: { name: "Kristopher Roller", url: "https://unsplash.com/@krisroller" },
    overview:
      "The best current theory of the early universe is inflation, a proposed period of rapid expansion in its very earliest moments. I study semi-classical gravity during this epoch, developing new theoretical tools for computing correlation functions in de Sitter space, the geometry that approximates the inflating universe, and deriving fundamental bounds on scalar field dynamics in these backgrounds.",
    directions: [
      {
        slug: "field-excursion-bounds",
        title: "Field excursion bounds along null geodesics",
        description:
          "Scalar fields in theories of gravity inhabit a moduli space of vacua, and their spatial or temporal variations produce measurable gravitational effects, such as driving inflation in the early universe. I derived a sharp, quantitative bound on how much a scalar field can change along null geodesics (the paths of light rays), using the Raychaudhuri equation under the assumption that other fields satisfy the null energy condition. The bound is saturated in certain spacetimes with timelike naked singularities, giving it a clean geometric interpretation. A possible extension to semiclassical spacetimes using a strengthened quantum focusing condition is also explored.",
        fullDescription: [
          "Scalar fields appear throughout gravitational physics. They drive the expansion of the early universe during inflation and parametrize different vacua in string theory. A basic question is: how far can a scalar field move in its field space in a localized region while gravitational backreaction remains under control? Prior work suggested there are fundamental limits on such excursions, but most existing bounds are qualitative. I derived a precise, quantitative upper bound on the total field excursion along any null geodesic, the path followed by a light ray, using the Raychaudhuri equation and the assumption that the remaining matter satisfies the null energy condition.",
          "The bound has a clean geometric form. It is sharp: it is exactly saturated in certain spacetimes with naked singularities, confirming that it cannot be improved without additional assumptions. I applied it to inflationary cosmology, where the inflaton must roll across its potential for many e-folds. I also explored a semiclassical extension based on a strengthened quantum focusing condition, which would extend the bound into regimes where quantum corrections to gravity become important.",
        ],
        papers: ["2510.01554"],
      },
      {
        slug: "cosmological-templates",
        title: "Developing templates for future cosmological experiments",
        description:
          "Making precise predictions for upcoming cosmological experiments requires computing correlation functions in de Sitter space, the geometry that approximates our inflating universe. These \"Witten diagram\" calculations are formally analogous to flat-space Feynman diagrams but significantly more complex due to the structure of bulk propagators in curved spacetime. The Witten-Feynman parameterization provides a new, general representation of scalar Witten diagrams in both anti-de Sitter and de Sitter space as generalized Euler integrals, valid for all masses at any loop order. This overcomes a longstanding limitation where existing methods only handled scalars of a special \"conformal\" mass, and opens the door to systematic computation of the inflationary correlators needed as templates for next-generation CMB and large-scale structure experiments.",
        fullDescription: [
          "Inflation predicts that the large-scale structure of the universe (galaxies, clusters, voids) was seeded by quantum fluctuations stretched to cosmic scales during the first fraction of a second. The statistical fingerprints of these fluctuations are encoded in correlation functions, and their precise form depends on what particles were present and how they interacted during inflation. Computing these correlators requires evaluating Witten diagrams in de Sitter space, the geometry of an expanding universe. These are the curved-spacetime analogues of the Feynman diagrams used in particle physics, but they are significantly harder to compute due to the complicated structure of propagators in a curved background.",
          "I developed new tools to make these calculations tractable. The Witten-Feynman parameterization represents Witten diagrams in both anti-de Sitter and de Sitter space as generalized Euler integrals, valid for arbitrary scalar masses at any loop order. This overcomes a long-standing bottleneck: previous methods worked only for a special conformal mass, excluding most physically relevant cases. Building on my earlier work developing difference equations, integral reduction techniques, and a higher-loop framework for Witten diagrams in anti-de Sitter space, the Witten-Feynman parameterization extends these tools to de Sitter and to general masses. Together, these results open a systematic route to the theoretical templates that next-generation CMB experiments and large-scale structure surveys will need to interpret their data.",
        ],
        papers: ["2509.02699", "2406.04186", "2112.08226"],
      },
    ],
    tags: [
      "Inflation",
      "Cosmology",
      "Scalar Fields",
      "Energy Conditions",
      "Raychaudhuri Equation",
      "Witten Diagrams",
      "de Sitter",
    ],
    keyPapers: ["2510.01554", "2509.02699", "2406.04186"],
  },
  {
    slug: "bootstrapping-string-theory",
    title: "Bootstrapping String Theory",
    summary:
      "Understanding the minimal set of assumptions that isolate string theory as the unique ultraviolet completion of gravity.",
    status: "Active",
    imageUrl:
      "/images/string-bootstrap.jpg",
    imageCredit: { name: "Resource Database", url: "https://unsplash.com/@resourcedatabase" },
    overview:
      "Many physicists claim that string theory is the unique consistent theory of quantum gravity. My goal is to make such claims precise and quantitative. Starting from minimal physical assumptions (unitarity, Lorentz invariance, analyticity), I am working to identify the minimal set of assumptions that single out string theory as the only consistent UV completion of gravity. Work in this direction was recently featured in a Quanta Magazine article, [\"Are Strings Still Our Best Hope for a Theory of Everything?\"](https://www.quantamagazine.org/are-strings-still-our-best-hope-for-a-theory-of-everything-20260323/).",
    directions: [
      {
        slug: "string-theory-from-supersymmetry",
        title: "String theory from supersymmetry",
        description:
          "Supersymmetry places powerful constraints on the space of consistent scattering amplitudes. I found strong numerical evidence that maximal supersymmetry, together with standard S-matrix bootstrap assumptions, is sufficient to single out the Veneziano amplitude, the hallmark of string theory. This is the first result providing evidence, without any input from string theory, that supersymmetry combined with basic physical principles forces the only consistent high-energy behavior to be stringy. I also studied the space of allowed effective field theory coefficients, the \"EFT-hedron,\" and showed that supersymmetric positivity bounds dramatically shrink this space, pushing it toward the unique string theory point.",
        fullDescription: [
          "Is string theory the only consistent theory of quantum gravity, or just one possibility among many? The bootstrap approach tackles this question from the bottom up. I start with the most general scattering amplitude consistent with basic physical principles: unitarity (probabilities sum to one), crossing symmetry (the same amplitude describes different scattering channels), and analyticity (the amplitude is a well-behaved function of energy and angle). I then systematically narrow down what theories are allowed. If the only amplitudes that satisfy all the constraints turn out to be stringy, this is strong evidence that any consistent quantum theory of gravity must reduce to string theory at short distances.",
          "Supersymmetry turns out to be an especially powerful constraint. I studied the space of allowed effective field theory coefficients, the \"EFT-hedron,\" and showed that supersymmetric positivity bounds dramatically shrink this space, pushing it toward the unique string theory point. Most recently, I found strong numerical evidence that for a non-gravitational theory with maximal supersymmetry in the planar limit, combined with unitarity, analyticity, and a bound on high-energy growth, the Veneziano amplitude is the unique tree-level UV completion. This is the first result giving evidence, using only field-theoretic assumptions and no input from string theory, that the only consistent high-energy behavior is stringy.",
        ],
        papers: ["2601.11705", "2310.10729"],
      },
      {
        slug: "string-theory-from-double-copy",
        title: "String theory from double copy",
        description:
          "The double copy, or KLT relations, connect open-string and closed-string amplitudes and have a field-theory limit relating gauge theory to gravity. I showed that string monodromy relations, identities among amplitudes long thought to be specific to string theory, in fact emerge from the low-energy structure of any theory compatible with the double copy. I also bootstrapped the KLT kernel and found it to be highly constrained. These results suggest that the double-copy structure of gravity tightly constrains any UV completion to look stringy.",
        fullDescription: [
          "The double copy is one of the most striking structural features of string theory: it expresses gravitational (closed-string) amplitudes as a product of two copies of gauge-theory (open-string) amplitudes, mediated by the KLT kernel. In field theory, the double copy relates gauge theory to gravity and has become a central tool in modern amplitudes research. A natural question is whether this structure is special to string theory or whether it arises inevitably in any consistent theory of quantum gravity.",
          "I addressed this question by bootstrapping the double-copy kernel, the mathematical object that mediates the map between gauge-theory and gravity amplitudes. Working in effective field theory, I found the most general kernel consistent with locality and the algebraic requirements of the double copy. Remarkably, extending the analysis to six-particle scattering imposed strong constraints on the four-particle kernel, reducing it to a two-parameter family that generalizes the string theory KLT kernel. As a consequence, any amplitude compatible with the double-copy map must obey either the string monodromy relations or the ordinary field-theory Kleiss-Kuijf and BCJ relations; no other option exists. In a separate analysis, I showed that the monodromy relations, long thought to be intrinsically stringy, in fact emerge automatically from the low-energy structure of a bi-adjoint scalar theory once one imposes field-theory amplitude relations and consistent factorization. Taken together, these results provide concrete evidence that the double-copy structure of gravity tightly constrains any UV completion to look stringy.",
        ],
        papers: ["2212.13998", "2302.04895", "2106.12600"],
      },
    ],
    tags: [
      "String Theory",
      "Bootstrap",
      "Scattering Amplitudes",
      "S-Matrix",
      "Veneziano Amplitude",
      "UV Completion",
      "Supersymmetry",
      "Positivity Bounds",
    ],
    keyPapers: ["2601.11705", "2212.13998", "2302.04895", "2310.10729", "2106.12600"],
  },
];
