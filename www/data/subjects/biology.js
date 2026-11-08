/* Leaving Certificate Biology — NEW SPECIFICATION (first examined June 2027)
 * Assessment: Biology in Practice Investigation (AAC) 40% + written exam 60% (300 marks, 2h 30m).
 * Written HL (SEC sample papers): 7 × 50-mark questions; Q1 compulsory + any 5 of Q2–Q7.
 * freq = how often the topic was examined on the previous-syllabus papers (where content overlaps),
 *        a guide to examiner emphasis while the new exam builds its own history.
 */
LC.register({
  id: 'biology', name: 'Biology', icon: '🧬', color: '#1f9e89',
  specNote: 'New specification: the June 2027 exam is the first under it. Old past papers (2016–2026) are still useful for overlapping topics, but always check the SEC sample papers for the new style.',
  exam: {
    H: { total: 500, papers: [
      { name: 'Biology in Practice Investigation (AAC)', marks: 200, time: 'Coursework', coursework: true, parts: [
        { name: 'Investigation report', marks: 200, note: '40% — common brief issued by the SEC (common level)' }] },
      { name: 'Written Examination', marks: 300, time: '2h 30m', parts: [
        { name: 'Question 1 (compulsory)', marks: 50, note: 'Mixed topics, often data/diagram based' },
        { name: 'Questions 2–7', marks: 250, note: 'Answer any 5 of 6 (50 marks each)' }] }
    ] },
    O: { total: 500, papers: [
      { name: 'Biology in Practice Investigation (AAC)', marks: 200, time: 'Coursework', coursework: true, parts: [
        { name: 'Investigation report', marks: 200, note: '40% — same common brief as Higher Level' }] },
      { name: 'Written Examination', marks: 300, time: '', parts: [
        { name: 'Written paper', marks: 300, note: '60% — see the SEC Ordinary Level sample papers for layout' }] }
    ] }
  },
  markingNotes: [
    'Coursework (the Biology in Practice Investigation) is 40% of your grade. Hitting every heading in the SEC brief is the highest-value work you can do.',
    'The sample papers lean on data, graphs and unfamiliar contexts (vaccine trials, Venus flytrap, prions). Practise applying knowledge, not just recalling it.',
    'Marks are lost for missing units and missing supporting work.',
    'Every question can draw on the Nature of Science strand: hypotheses, variables, controls, fair tests, reliability.'
  ],
  sections: [
    { id: 'aac', title: 'Biology in Practice Investigation (coursework)', paper: 'AAC', levels: ['H', 'O'], coursework: true, weight: { H: 40, O: 40 }, freq: 0,
      summary: 'The 40% coursework investigation set by a common SEC brief.',
      examTip: 'Follow the brief’s headings exactly and keep a dated log of your work. Your teacher will give you the live brief and deadlines.',
      lessons: [
        { t: 'What a strong investigation shows', b: '<ul><li>A focused, testable question and a hypothesis.</li><li>Clearly identified independent, dependent and controlled variables.</li><li>Repeated trials and a sensible sample size.</li><li>Data presented in tables and appropriate graphs.</li><li>Conclusions linked back to the hypothesis, with evaluation of errors and improvements.</li></ul>' }
      ],
      quiz: [
        { q: 'The variable you deliberately change is the', o: ['Dependent variable', 'Independent variable', 'Controlled variable', 'Confounding variable'], a: 1, x: 'Independent variable.' },
        { q: 'Repeating trials improves', o: ['Bias', 'Reliability', 'Hypothesis', 'Units'], a: 1, x: 'Reliability.' },
        { q: 'The investigation is worth what share of the final grade?', o: ['20%', '30%', '40%', '60%'], a: 2, x: '40%.' }
      ] },

    { id: 'nos', title: 'Nature of Science & Investigating', paper: 'Written', levels: ['H', 'O'], weight: { H: 4, O: 4 }, freq: 10,
      summary: 'Scientific method, variables, controls, data analysis, reliability vs validity, ethics and science in society.',
      examTip: 'Experiment and data questions appear on every paper. Learn the vocabulary precisely.',
      lessons: [
        { t: 'Method vocabulary', b: '<p><b>Hypothesis</b>: a testable prediction. <b>Control</b>: a set-up identical except for the factor being tested, for comparison. <b>Fair test</b>: only one variable changed.</p>' },
        { t: 'Reliability, validity, accuracy', b: '<p><b>Reliable</b>: repeated results agree. <b>Valid</b>: the method actually tests the question. <b>Accurate</b>: close to the true value.</p>' },
        { t: 'Graphs', b: '<p>Independent variable on the x-axis. Label axes with units. Line graphs for continuous data, bar charts for categories.</p>' }
      ],
      quiz: [
        { q: 'Which axis shows the independent variable?', o: ['x-axis', 'y-axis', 'Either', 'Neither'], a: 0, x: 'Horizontal axis.' },
        { q: 'A control is used to', o: ['Make the test harder', 'Provide a comparison', 'Increase sample size', 'Change two variables'], a: 1, x: 'Comparison baseline.' },
        { q: 'Results that agree when repeated are', o: ['Valid', 'Reliable', 'Biased', 'Precise only'], a: 1, x: 'Reliable.' },
        { q: 'A hypothesis must be', o: ['Proven', 'Testable', 'Long', 'Correct'], a: 1, x: 'Testable prediction.' }
      ] },

    { id: 'biomolecules', title: 'Characteristics & Chemicals of Life', paper: 'Written', levels: ['H', 'O'], weight: { H: 4, O: 5 }, freq: 9,
      summary: 'Characteristics of life, carbohydrates, lipids, proteins, nucleic acids, vitamins, minerals, water; food tests.',
      examTip: 'The 2025 sample paper used biomolecules + a glucose test strip investigation. Know structure, function and tests.',
      lessons: [
        { t: 'The four biomolecules', b: '<ul><li><b>Carbohydrates</b> (C, H, O): glucose → starch, glycogen, cellulose. Energy and structure.</li><li><b>Lipids</b>: triglyceride = 1 glycerol + 3 fatty acids. Energy store, insulation.</li><li><b>Proteins</b>: amino acids joined by peptide bonds. Enzymes, structure, hormones.</li><li><b>Nucleic acids</b>: DNA/RNA built from nucleotides.</li></ul>' },
        { t: 'Food tests', b: '<p>Starch: iodine turns blue-black. Reducing sugar: Benedict’s, heat → brick red. Protein: biuret → purple/violet. Fat: brown paper → translucent spot.</p>' }
      ],
      quiz: [
        { q: 'A triglyceride is made of', o: ['3 glycerol + 1 fatty acid', '1 glycerol + 3 fatty acids', 'amino acids', 'glucose units'], a: 1, x: '1 glycerol + 3 fatty acids.' },
        { q: 'Iodine turns blue-black in the presence of', o: ['Glucose', 'Protein', 'Starch', 'Fat'], a: 2, x: 'Starch test.' },
        { q: 'Proteins are made of', o: ['Nucleotides', 'Amino acids', 'Fatty acids', 'Monosaccharides'], a: 1, x: 'Amino acids joined by peptide bonds.' },
        { q: 'Biuret reagent turning purple shows', o: ['Starch', 'Reducing sugar', 'Protein', 'Fat'], a: 2, x: 'Protein.' },
        { q: 'Which polysaccharide forms plant cell walls?', o: ['Starch', 'Glycogen', 'Cellulose', 'Chitin'], a: 2, x: 'Cellulose.' }
      ] },

    { id: 'cells', title: 'The Cell & Membranes', paper: 'Written', levels: ['H', 'O'], weight: { H: 5, O: 5 }, freq: 9,
      summary: 'Prokaryotic vs eukaryotic cells, organelles, the fluid mosaic model, diffusion, osmosis, active transport, tissues.',
      examTip: 'The fluid mosaic model featured in the SEC sample paper Q1. Be ready to label and explain it.',
      lessons: [
        { t: 'Prokaryotic vs eukaryotic', b: '<p>Prokaryotes (bacteria): no nucleus, no membrane-bound organelles, circular DNA, plasmids. Eukaryotes: nucleus, mitochondria, ER, Golgi, etc.</p>' },
        { t: 'Fluid mosaic model', b: '<p>A <b>phospholipid bilayer</b> (hydrophilic heads out, hydrophobic tails in) with proteins floating in it like a mosaic. Cholesterol adds stability. The membrane is selectively permeable.</p>' },
        { t: 'Moving across membranes', b: '<p><b>Diffusion</b>: high → low concentration, passive. <b>Osmosis</b>: water from high to low water concentration across a selectively permeable membrane. <b>Active transport</b>: against a gradient, needs ATP.</p>' }
      ],
      quiz: [
        { q: 'Which is found in prokaryotic cells?', o: ['Nucleus', 'Mitochondria', 'Plasmids', 'Golgi body'], a: 2, x: 'Bacteria have plasmids.' },
        { q: 'The cell membrane is mainly a', o: ['Protein bilayer', 'Phospholipid bilayer', 'Cellulose wall', 'Starch layer'], a: 1, x: 'Fluid mosaic model.' },
        { q: 'Movement against a concentration gradient using ATP is', o: ['Diffusion', 'Osmosis', 'Active transport', 'Facilitated diffusion'], a: 2, x: 'Active transport.' },
        { q: 'Osmosis is the movement of', o: ['Glucose', 'Water', 'Oxygen', 'Ions'], a: 1, x: 'Water across a selectively permeable membrane.' },
        { q: 'Where is aerobic respiration mainly carried out?', o: ['Ribosome', 'Mitochondrion', 'Chloroplast', 'Vacuole'], a: 1, x: 'Mitochondria.' }
      ] },

    { id: 'enzymes', title: 'Enzymes', paper: 'Written', levels: ['H', 'O'], weight: { H: 3, O: 4 }, freq: 10,
      summary: 'Enzymes as biological catalysts, active site, induced fit, factors affecting activity, denaturation, immobilisation.',
      examTip: 'A favourite for graph questions: rate vs temperature or pH. Explain the shape of the curve, not just describe it.',
      lessons: [
        { t: 'How enzymes work', b: '<p>Enzymes are proteins that speed up reactions without being used up. The substrate binds to the <b>active site</b>; in the <b>induced fit</b> model, the active site changes shape slightly to fit.</p>' },
        { t: 'Temperature & pH', b: '<p>Activity rises with temperature to an <b>optimum</b> (≈37 °C for human enzymes), then falls sharply as the enzyme is <b>denatured</b> (active site shape lost). Each enzyme has an optimum pH (pepsin ≈ 2, amylase ≈ 7).</p>' }
      ],
      quiz: [
        { q: 'Enzymes are made of', o: ['Lipids', 'Proteins', 'Carbohydrates', 'DNA'], a: 1, x: 'Proteins.' },
        { q: 'Denaturation means', o: ['The enzyme is used up', 'The active site permanently changes shape', 'The enzyme speeds up', 'The substrate is destroyed'], a: 1, x: 'Shape lost → no fit.' },
        { q: 'The optimum pH of pepsin is about', o: ['2', '7', '9', '12'], a: 0, x: 'Stomach acid.' },
        { q: 'In the induced fit model', o: ['The active site is rigid', 'The active site moulds around the substrate', 'Substrate changes the enzyme permanently', 'There is no active site'], a: 1, x: 'Induced fit.' }
      ] },

    { id: 'energy', title: 'Photosynthesis & Respiration', paper: 'Written', levels: ['H', 'O'], weight: { H: 5, O: 5 }, freq: 10,
      summary: 'Light-dependent and light-independent reactions, factors affecting photosynthesis, aerobic and anaerobic respiration.',
      examTip: 'The sample paper asked about a light intensity investigation and the non-cyclic light-dependent reactions (HL). Learn the locations of each stage.',
      lessons: [
        { t: 'Photosynthesis', b: '<p>6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (light, chlorophyll). <b>Light-dependent</b> stage in the <b>thylakoids/grana</b>: water is split, O₂ released, ATP and NADPH made. <b>Light-independent</b> stage (Calvin cycle) in the <b>stroma</b>: CO₂ fixed into glucose.</p>' },
        { t: 'Limiting factors', b: '<p>Light intensity, CO₂ concentration and temperature. The rate rises then plateaus when another factor becomes limiting.</p>' },
        { t: 'Respiration', b: '<p>Glycolysis in the <b>cytoplasm</b>: glucose → 2 pyruvate + small ATP gain (no O₂ needed). With oxygen: Krebs cycle in the <b>mitochondrial matrix</b> and electron transport chain on the inner membrane — most ATP. Without oxygen: lactic acid (animals) or ethanol + CO₂ (yeast).</p>' }
      ],
      quiz: [
        { q: 'Where does the light-independent stage occur?', o: ['Thylakoid', 'Stroma', 'Cytoplasm', 'Mitochondria'], a: 1, x: 'Stroma.' },
        { q: 'The oxygen released in photosynthesis comes from', o: ['CO₂', 'Water', 'Glucose', 'Chlorophyll'], a: 1, x: 'Splitting of water (photolysis).' },
        { q: 'Glycolysis takes place in the', o: ['Mitochondrial matrix', 'Cytoplasm', 'Nucleus', 'Chloroplast'], a: 1, x: 'Cytoplasm.' },
        { q: 'Anaerobic respiration in yeast produces', o: ['Lactic acid', 'Ethanol and CO₂', 'Only water', 'Oxygen'], a: 1, x: 'Fermentation.' },
        { q: 'Which is NOT a limiting factor for photosynthesis?', o: ['Light intensity', 'CO₂ concentration', 'Temperature', 'Nitrogen gas'], a: 3, x: 'N₂ is not directly limiting.' }
      ] },

    { id: 'celldiv', title: 'Cell Division & Protein Synthesis', paper: 'Written', levels: ['H', 'O'], weight: { H: 5, O: 5 }, freq: 10,
      summary: 'DNA structure and replication, the cell cycle, mitosis, meiosis, cancer, protein synthesis (transcription and translation).',
      examTip: 'The sample paper Q1 opened on mitosis in garlic root tips and cancer risk factors. Know the stages and practical observations.',
      lessons: [
        { t: 'DNA', b: '<p>Double helix of nucleotides. Base pairing: <b>A–T</b> and <b>C–G</b>. RNA uses U instead of T.</p>' },
        { t: 'Mitosis vs meiosis', b: '<p><b>Mitosis</b>: 1 division → 2 identical diploid cells; growth and repair. Stages PMAT (prophase, metaphase, anaphase, telophase). <b>Meiosis</b>: 2 divisions → 4 haploid, genetically different cells; gametes, variation.</p>' },
        { t: 'Cancer', b: '<p>Uncontrolled mitosis caused by mutations in genes that control the cell cycle. Risk factors: smoking, UV radiation, some viruses, certain chemicals.</p>' },
        { t: 'Protein synthesis', b: '<p><b>Transcription</b> (nucleus): DNA → mRNA. <b>Translation</b> (ribosome): mRNA codons (3 bases) are read; tRNA brings amino acids, which are joined into a polypeptide.</p>' }
      ],
      quiz: [
        { q: 'In DNA, adenine pairs with', o: ['Cytosine', 'Guanine', 'Thymine', 'Uracil'], a: 2, x: 'A–T.' },
        { q: 'Mitosis produces', o: ['4 haploid cells', '2 identical diploid cells', '2 haploid gametes', '4 identical cells'], a: 1, x: 'Growth and repair.' },
        { q: 'Translation takes place at the', o: ['Nucleus', 'Ribosome', 'Golgi', 'Cell membrane'], a: 1, x: 'Ribosome.' },
        { q: 'A codon is a sequence of', o: ['1 base', '2 bases', '3 bases', '4 bases'], a: 2, x: 'Triplet code.' },
        { q: 'Cancer results from', o: ['Too much meiosis', 'Uncontrolled mitosis', 'Lack of DNA', 'Enzyme denaturation'], a: 1, x: 'Uncontrolled cell division.' }
      ] },

    { id: 'genetics', title: 'Genetics & Inheritance', paper: 'Written', levels: ['H', 'O'], weight: { H: 5, O: 5 }, freq: 10,
      summary: 'Genes, alleles, genotype/phenotype, monohybrid crosses, sex determination, sex linkage, pedigrees, genome databases.',
      examTip: 'Genetic crosses are reliable marks: always show the key, gametes, Punnett square and ratio.',
      lessons: [
        { t: 'Key terms', b: '<p><b>Allele</b>: a version of a gene. <b>Dominant</b> masks <b>recessive</b>. <b>Homozygous</b> (BB/bb) vs <b>heterozygous</b> (Bb). <b>Genotype</b> = alleles; <b>phenotype</b> = appearance.</p>' },
        { t: 'Monohybrid cross', b: '<p>Bb × Bb → BB : Bb : bb = 1 : 2 : 1 → phenotype ratio <b>3 : 1</b>. A <b>test cross</b> with bb reveals an unknown genotype.</p>' },
        { t: 'Sex & sex linkage', b: '<p>Females XX, males XY. Genes on the X chromosome (e.g. colour blindness, haemophilia) show up more in males, who have only one X.</p>' }
      ],
      quiz: [
        { q: 'Bb × Bb gives a phenotype ratio of', o: ['1:1', '3:1', '1:2:1', '9:3:3:1'], a: 1, x: '3 dominant : 1 recessive.' },
        { q: 'A heterozygous genotype is', o: ['BB', 'bb', 'Bb', 'B'], a: 2, x: 'Two different alleles.' },
        { q: 'Why are sex-linked conditions more common in males?', o: ['Males have two X chromosomes', 'Males have only one X chromosome', 'Y carries more genes', 'Hormones'], a: 1, x: 'No second X to mask a recessive allele.' },
        { q: 'A test cross uses a', o: ['Homozygous dominant', 'Homozygous recessive', 'Heterozygous', 'Random'], a: 1, x: 'bb reveals the unknown.' },
        { q: 'The observable characteristic is the', o: ['Genotype', 'Phenotype', 'Allele', 'Locus'], a: 1, x: 'Phenotype.' }
      ] },

    { id: 'evolution', title: 'Origins of Life & Evolution', paper: 'Written', levels: ['H', 'O'], weight: { H: 3, O: 3 }, freq: 6,
      summary: 'Natural selection, evidence for evolution, variation, speciation, classification and phylogeny.',
      examTip: 'Phylogenetic trees appeared alongside PCR in the sample paper. Know how to read one.',
      lessons: [
        { t: 'Natural selection', b: '<p>Variation exists → more offspring are produced than survive → individuals best adapted survive and reproduce → advantageous alleles become more common over generations.</p>' },
        { t: 'Evidence', b: '<p>Fossils, comparative anatomy (homologous structures), DNA sequence comparison, observed change (antibiotic resistance).</p>' },
        { t: 'Phylogenetic trees', b: '<p>Branching diagrams of evolutionary relationships. Species sharing a more recent branch point (common ancestor) are more closely related.</p>' }
      ],
      quiz: [
        { q: 'Antibiotic resistance in bacteria is an example of', o: ['Artificial selection', 'Natural selection', 'Genetic engineering', 'Mitosis'], a: 1, x: 'Resistant bacteria survive and reproduce.' },
        { q: 'On a phylogenetic tree, closely related species share', o: ['No ancestor', 'A recent common ancestor', 'The same habitat', 'The same size'], a: 1, x: 'Recent branch point.' },
        { q: 'Natural selection requires', o: ['Identical individuals', 'Variation', 'Asexual reproduction only', 'No competition'], a: 1, x: 'Variation is essential.' }
      ] },

    { id: 'response', title: 'Response (Nervous, Hormonal, Immune, Plant)', paper: 'Written', levels: ['H', 'O'], weight: { H: 5, O: 5 }, freq: 9,
      summary: 'Neurons and synapses, senses, hormones, the immune system and vaccination, plant growth regulators and tropisms.',
      examTip: 'The sample paper included a vaccine trial. Know active vs passive immunity and how vaccines work.',
      lessons: [
        { t: 'Nervous system', b: '<p>Receptor → sensory neuron → interneuron (CNS) → motor neuron → effector. Synapses use neurotransmitters to carry the signal across the gap. Reflex arcs bypass conscious thought.</p>' },
        { t: 'Hormones', b: '<p>Chemical messengers in the blood. Insulin (pancreas) lowers blood glucose; adrenaline prepares the body for “fight or flight”.</p>' },
        { t: 'Immunity', b: '<p>Non-specific: skin, mucus, phagocytes. Specific: <b>B-lymphocytes</b> make antibodies; <b>T-lymphocytes</b> destroy infected cells. <b>Vaccination</b> = active immunity from a harmless antigen, creating memory cells.</p>' },
        { t: 'Plant responses', b: '<p>Tropisms: phototropism (light), gravitropism/geotropism (gravity). Auxins cause cells on the shaded side to elongate, bending the shoot towards light.</p>' }
      ],
      quiz: [
        { q: 'Antibodies are made by', o: ['T-lymphocytes', 'B-lymphocytes', 'Red blood cells', 'Platelets'], a: 1, x: 'B-cells.' },
        { q: 'A vaccine provides', o: ['Passive immunity', 'Active immunity', 'No immunity', 'Natural passive immunity'], a: 1, x: 'Body makes its own antibodies and memory cells.' },
        { q: 'Insulin', o: ['Raises blood glucose', 'Lowers blood glucose', 'Triggers fight or flight', 'Controls growth in plants'], a: 1, x: 'Lowers blood sugar.' },
        { q: 'Growth towards light is', o: ['Gravitropism', 'Phototropism', 'Thigmotropism', 'Hydrotropism'], a: 1, x: 'Phototropism.' },
        { q: 'The gap between two neurons is the', o: ['Axon', 'Synapse', 'Dendrite', 'Myelin'], a: 1, x: 'Synapse.' }
      ] },

    { id: 'reproduction', title: 'Reproduction', paper: 'Written', levels: ['H', 'O'], weight: { H: 3, O: 4 }, freq: 10,
      summary: 'Sexual and asexual reproduction, flowering plant reproduction, the human reproductive system, menstrual cycle, fertilisation.',
      examTip: 'Long a staple of the old syllabus; expect labelled diagrams and the role of hormones.',
      lessons: [
        { t: 'Flowering plants', b: '<p>Pollination (transfer of pollen to stigma by wind or insects) → fertilisation → seed and fruit formation → dispersal → germination (needs water, oxygen, suitable temperature).</p>' },
        { t: 'Human reproduction', b: '<p>Fertilisation usually in the <b>fallopian tube</b>; the zygote divides and implants in the uterus. Menstrual cycle ≈ 28 days, ovulation around day 14; FSH, LH, oestrogen, progesterone control it.</p>' }
      ],
      quiz: [
        { q: 'Human fertilisation usually occurs in the', o: ['Uterus', 'Ovary', 'Fallopian tube', 'Cervix'], a: 2, x: 'Fallopian tube (oviduct).' },
        { q: 'Which is NOT needed for germination?', o: ['Water', 'Oxygen', 'Light', 'Suitable temperature'], a: 2, x: 'Most seeds germinate in the dark.' },
        { q: 'Ovulation typically occurs around day', o: ['1', '7', '14', '28'], a: 2, x: 'Mid-cycle.' },
        { q: 'Transfer of pollen to the stigma is', o: ['Fertilisation', 'Pollination', 'Dispersal', 'Germination'], a: 1, x: 'Pollination.' }
      ] },

    { id: 'transport', title: 'Transport & Transfer (Body Systems)', paper: 'Written', levels: ['H', 'O'], weight: { H: 5, O: 5 }, freq: 10,
      summary: 'The heart and circulation, blood, breathing, digestion, excretion, muscles, plant transport (xylem and phloem).',
      examTip: 'The sample paper had a whole question on the heart, double circulation, blood pressure and antagonistic muscles.',
      lessons: [
        { t: 'Heart & double circulation', b: '<p>Pulmonary circuit (heart ↔ lungs) and systemic circuit (heart ↔ body). The <b>left ventricle</b> has the thickest wall — it pumps blood around the whole body. Valves prevent backflow.</p>' },
        { t: 'Blood vessels', b: '<p>Arteries: thick, elastic, high pressure, away from the heart. Veins: thinner, valves, towards the heart. Capillaries: one cell thick — exchange of materials.</p>' },
        { t: 'Digestion', b: '<p>Mechanical (teeth, stomach churning) and chemical (enzymes). Amylase: starch → maltose. Absorption in the small intestine via villi (large surface area).</p>' },
        { t: 'Plant transport', b: '<p><b>Xylem</b> carries water and minerals up from roots (dead, lignified tubes). <b>Phloem</b> carries sucrose both ways (translocation).</p>' },
        { t: 'Muscles', b: '<p>Antagonistic pairs: one contracts while the other relaxes (biceps and triceps). Cardiac muscle never tires.</p>' }
      ],
      quiz: [
        { q: 'Which chamber has the thickest wall?', o: ['Right atrium', 'Left atrium', 'Right ventricle', 'Left ventricle'], a: 3, x: 'Pumps blood around the body.' },
        { q: 'Which vessels contain valves?', o: ['Arteries', 'Veins', 'Capillaries', 'All'], a: 1, x: 'Veins (low pressure).' },
        { q: 'Sucrose is transported in plants by', o: ['Xylem', 'Phloem', 'Stomata', 'Root hairs'], a: 1, x: 'Phloem.' },
        { q: 'Villi increase', o: ['Blood pressure', 'Surface area for absorption', 'Enzyme production', 'Stomach acid'], a: 1, x: 'Surface area.' },
        { q: 'Biceps and triceps are an example of', o: ['Synergistic muscles', 'Antagonistic pairs', 'Cardiac muscle', 'Smooth muscle'], a: 1, x: 'Antagonistic pair.' }
      ] },

    { id: 'ecology', title: 'Ecology, Ecosystems & Biodiversity', paper: 'Written', levels: ['H', 'O'], weight: { H: 5, O: 5 }, freq: 10,
      summary: 'Ecosystems, food chains and webs, pyramids of numbers, adaptations, symbiosis, sampling (quadrats), biodiversity, human impact and sustainability.',
      examTip: 'The sample paper used a species diversity index, symbiosis and sustainable farming. Expect calculations from field data.',
      lessons: [
        { t: 'Key terms', b: '<p><b>Habitat</b>, <b>population</b>, <b>community</b>, <b>ecosystem</b>, <b>niche</b> (an organism’s role). Producers → primary consumers → secondary consumers; ~10% of energy passes to each level.</p>' },
        { t: 'Interactions', b: '<p>Competition (contest or scramble), predation, <b>symbiosis</b>: mutualism (both benefit, e.g. Rhizobium in legume root nodules), parasitism (one benefits, host harmed), commensalism.</p>' },
        { t: 'Sampling & biodiversity', b: '<p>Quadrats for plants (percentage cover or frequency), pitfall traps and sweep nets for animals. Biodiversity = variety of species, genes and ecosystems; diversity indices combine richness and evenness.</p>' }
      ],
      quiz: [
        { q: 'Roughly what % of energy passes from one trophic level to the next?', o: ['1%', '10%', '50%', '90%'], a: 1, x: 'About 10%.' },
        { q: 'Rhizobium in clover root nodules is an example of', o: ['Parasitism', 'Mutualism', 'Predation', 'Competition'], a: 1, x: 'Both benefit.' },
        { q: 'A quadrat is used to sample', o: ['Flying insects', 'Plants and slow-moving organisms', 'Fish', 'Soil pH'], a: 1, x: 'Plants.' },
        { q: 'An organism’s functional role in an ecosystem is its', o: ['Habitat', 'Niche', 'Population', 'Biome'], a: 1, x: 'Niche.' }
      ] },

    { id: 'micro', title: 'Microorganisms & Nutrient Cycling', paper: 'Written', levels: ['H', 'O'], weight: { H: 4, O: 4 }, freq: 8,
      summary: 'Bacteria, fungi and viruses, growth curves, bioreactors, the carbon and nitrogen cycles, prions.',
      examTip: 'Two sample-paper questions leaned on this strand (bacterial growth curves and bioreactors; nitrogen and carbon cycles).',
      lessons: [
        { t: 'Bacterial growth curve', b: '<p><b>Lag</b> (adjusting) → <b>log/exponential</b> (rapid division) → <b>stationary</b> (births = deaths, nutrients running out) → <b>decline/death</b>.</p>' },
        { t: 'Nitrogen cycle', b: '<p><b>Fixation</b>: N₂ → ammonium (Rhizobium, lightning). <b>Nitrification</b>: ammonium → nitrite → nitrate (nitrifying bacteria). <b>Denitrification</b>: nitrate → N₂ gas. Plants absorb nitrates to make proteins.</p>' },
        { t: 'Carbon cycle', b: '<p>CO₂ removed by photosynthesis; returned by respiration, decomposition and combustion. Burning fossil fuels adds stored carbon to the atmosphere.</p>' },
        { t: 'Non-cellular pathogens', b: '<p><b>Viruses</b> need a host cell to reproduce. <b>Prions</b> are misfolded proteins that cause other proteins to misfold (e.g. BSE / CJD).</p>' }
      ],
      quiz: [
        { q: 'Rapid exponential growth occurs in the', o: ['Lag phase', 'Log phase', 'Stationary phase', 'Death phase'], a: 1, x: 'Log phase.' },
        { q: 'Conversion of nitrates to N₂ gas is', o: ['Fixation', 'Nitrification', 'Denitrification', 'Ammonification'], a: 2, x: 'Denitrification.' },
        { q: 'Prions are', o: ['Bacteria', 'Viruses', 'Misfolded proteins', 'Fungi'], a: 2, x: 'Infectious proteins.' },
        { q: 'Which process removes CO₂ from the atmosphere?', o: ['Respiration', 'Combustion', 'Photosynthesis', 'Decomposition'], a: 2, x: 'Photosynthesis.' }
      ] },

    { id: 'genetic-eng', title: 'Genetic Engineering & Biotechnology', paper: 'Written', levels: ['H', 'O'], weight: { H: 4, O: 3 }, freq: 7,
      summary: 'Genetic modification, PCR, gel electrophoresis, DNA profiling, genome databases, ethics.',
      examTip: 'A full sample-paper question covered PCR stages, Taq polymerase, gel electrophoresis and ethics. New-spec emphasis — learn it well.',
      lessons: [
        { t: 'PCR', b: '<p>Copies DNA many times. <b>Denaturation</b> (~95 °C, strands separate) → <b>annealing</b> (~55 °C, primers bind) → <b>extension</b> (~72 °C, <b>Taq polymerase</b> builds new strands). Taq comes from a heat-loving bacterium, so it isn’t denatured.</p>' },
        { t: 'Gel electrophoresis', b: '<p>DNA is cut with restriction enzymes and placed in wells. DNA is negatively charged, so it moves towards the <b>positive</b> electrode. <b>Smaller fragments travel further.</b></p>' },
        { t: 'Genetic modification', b: '<p>Isolate the gene, cut with restriction enzymes, insert into a vector (e.g. plasmid) with ligase, transform host cells, select and grow. Example: bacteria producing human insulin.</p>' },
        { t: 'Ethics', b: '<p>Consider benefits (medicine, food security) vs concerns (consent, privacy of genetic data, environmental risk). Give both sides with examples.</p>' }
      ],
      quiz: [
        { q: 'Why is Taq polymerase used in PCR?', o: ['It is cheap', 'It is heat-stable', 'It cuts DNA', 'It binds primers'], a: 1, x: 'Survives ~95 °C.' },
        { q: 'In gel electrophoresis, DNA moves towards the', o: ['Negative electrode', 'Positive electrode', 'Centre', 'Top of the gel'], a: 1, x: 'DNA is negatively charged.' },
        { q: 'Which fragments travel furthest in a gel?', o: ['Largest', 'Smallest', 'Middle-sized', 'They all travel equally'], a: 1, x: 'Small fragments move more easily.' },
        { q: 'The PCR stage where primers bind is', o: ['Denaturation', 'Annealing', 'Extension', 'Ligation'], a: 1, x: 'Annealing.' },
        { q: 'A plasmid is used in GM as a', o: ['Restriction enzyme', 'Vector', 'Primer', 'Gel'], a: 1, x: 'Vector to carry the gene.' }
      ] }
  ]
});
