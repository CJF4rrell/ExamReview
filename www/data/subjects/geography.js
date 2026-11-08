/* Leaving Certificate Geography — Higher & Ordinary Level
 * Total 500: Geographical Investigation 100 (20%) + written exam 400 (80%), 2h 50m.
 * HL written: Short Qs 80 (best 10 of 12 × 8) · Physical 80 · Regional 80 · Elective 80 · Option 80.
 * OL written: Short Qs 100 (best 10 of 12 × 10) · Physical 100 · Regional 100 · Elective 100.
 * Long-question parts are marked by Significant Relevant Points (SRPs) — 2 marks each at HL.
 * Sections marked choiceGroup: you study ONE elective and (HL) ONE option.
 */
LC.register({
  id: 'geography', name: 'Geography', icon: '⛰', color: '#6b8e23',
  exam: {
    H: { total: 500, papers: [
      { name: 'Geographical Investigation', marks: 100, time: 'Coursework', coursework: true, parts: [
        { name: 'Fieldwork report', marks: 100, note: '20% — submitted before the exam' }] },
      { name: 'Written Paper', marks: 400, time: '2h 50m', parts: [
        { name: 'Part One – Short Questions', marks: 80, note: 'Attempt 12; best 10 count (8 marks each)' },
        { name: 'Physical Geography', marks: 80, note: 'One of three questions (typically 20 + 30 + 30)' },
        { name: 'Regional Geography', marks: 80, note: 'One of three questions' },
        { name: 'Elective', marks: 80, note: 'Economic Activities OR Human Environment' },
        { name: 'Option', marks: 80, note: 'One essay from your option (e.g. Geoecology, Global Interdependence)' }] }
    ] },
    O: { total: 500, papers: [
      { name: 'Geographical Investigation', marks: 100, time: 'Coursework', coursework: true, parts: [
        { name: 'Fieldwork report', marks: 100, note: '20%' }] },
      { name: 'Written Paper', marks: 400, time: '2h 50m', parts: [
        { name: 'Part One – Short Questions', marks: 100, note: 'Best 10 of 12 (10 marks each)' },
        { name: 'Physical Geography', marks: 100, note: 'One question' },
        { name: 'Regional Geography', marks: 100, note: 'One question' },
        { name: 'Elective', marks: 100, note: 'One question' }] }
    ] }
  },
  markingNotes: [
    'Long answers are marked in SRPs (Significant Relevant Points), 2 marks each at HL: a 30-mark essay needs ~15 SRPs. Facts, named examples, statistics and explanations each count.',
    'Named Irish examples with locations earn SRPs (e.g. “Torc Waterfall, Co. Kerry”). Vague examples earn nothing.',
    'Answer all 12 short questions — only your best 10 count, so the extra two are free insurance.',
    'Option essays (HL, 80 marks) are marked on coverage of several aspects, examination/discussion and overall coherence.'
  ],
  sections: [
    { id: 'gi', title: 'Geographical Investigation (coursework)', paper: 'Coursework', levels: ['H', 'O'], coursework: true, weight: { H: 20, O: 20 }, freq: 0,
      summary: 'Fieldwork report worth 20%, completed in school before the exam.',
      examTip: 'Follow your teacher’s template and the SEC booklet exactly — easy marks are lost on missing headings, diagrams and conclusions.',
      lessons: [
        { t: 'Report sections', b: '<p>Introduction (hypothesis/aim) → Planning → Gathering of information (methods) → Results (with charts, maps, photos) → Conclusions (did the results support the hypothesis?) → Evaluation (what would you change?).</p>' }
      ],
      quiz: [
        { q: 'The Geographical Investigation is worth', o: ['10%', '20%', '30%', '40%'], a: 1, x: '100 of 500 marks.' },
        { q: 'A conclusion should link back to the', o: ['Map', 'Hypothesis or aim', 'Title page', 'Equipment list'], a: 1, x: 'Did results support it?' }
      ] },

    { id: 'short', title: 'Short Questions & Map Skills', paper: 'Part One', levels: ['H', 'O'], weight: { H: 16, O: 20 }, freq: 10,
      summary: 'OS maps, aerial photographs, graphs, weather charts, rock types, population pyramids and quick-fire knowledge.',
      examTip: 'Highest marks-per-minute on the paper. Grid references, scale, direction and photo location terms come up every year.',
      lessons: [
        { t: 'OS maps', b: '<p>Scale <b>1:50,000</b>: 2 cm on the map = 1 km. Grid references: <b>letter, easting (across), northing (up)</b> e.g. W 640 495. Contours close together = steep slope.</p>' },
        { t: 'Aerial photographs', b: '<p><b>Oblique</b> (taken at an angle, shows horizon) vs <b>vertical</b> (straight down). Locate features using left/centre/right + foreground/middle/background, e.g. “right background”.</p>' },
        { t: 'Rocks in Ireland', b: '<p><b>Igneous</b>: basalt (Giant’s Causeway), granite (Wicklow Mountains). <b>Sedimentary</b>: limestone (the Burren), sandstone (Munster mountains). <b>Metamorphic</b>: marble (Connemara, from limestone), quartzite (Croagh Patrick, from sandstone).</p>' }
      ],
      quiz: [
        { q: 'On a 1:50,000 map, 2 cm represents', o: ['500 m', '1 km', '2 km', '50 km'], a: 1, x: '1 cm = 0.5 km.' },
        { q: 'In a grid reference, which number comes first?', o: ['Northing', 'Easting', 'Height', 'Either'], a: 1, x: 'Along the corridor, then up the stairs.' },
        { q: 'Marble is formed from', o: ['Sandstone', 'Granite', 'Limestone', 'Basalt'], a: 2, x: 'Metamorphosed limestone.' },
        { q: 'An aerial photo showing the horizon is', o: ['Vertical', 'Oblique', 'Satellite', 'Infrared'], a: 1, x: 'Oblique.' },
        { q: 'Contour lines close together indicate', o: ['Flat land', 'Steep slope', 'A river', 'A lake'], a: 1, x: 'Steep ground.' },
        { q: 'How many short questions count towards your mark?', o: ['8', '10', '12', 'All attempted'], a: 1, x: 'Best 10 of 12.' }
      ] },

    { id: 'tectonics', title: 'Plate Tectonics, Volcanoes & Earthquakes', paper: 'Physical', levels: ['H', 'O'], weight: { H: 6, O: 7 }, freq: 10,
      summary: 'Structure of the Earth, plate boundaries, sea-floor spreading, fold mountains, volcanic and earthquake activity, prediction.',
      examTip: 'Appears virtually every year. Have one fully-developed example for each boundary type.',
      lessons: [
        { t: 'Plate boundaries', b: '<ul><li><b>Constructive/divergent</b>: plates separate — Mid-Atlantic Ridge, Iceland.</li><li><b>Destructive/convergent</b>: oceanic under continental (subduction) — Andes; continental–continental collision — Himalayas.</li><li><b>Conservative/transform</b>: plates slide past — San Andreas Fault.</li></ul>' },
        { t: 'Why plates move', b: '<p><b>Convection currents</b> in the mantle drag plates. Evidence: Wegener’s continental drift (Pangaea), matching fossils, and <b>sea-floor spreading</b> (magnetic striping either side of ridges).</p>' },
        { t: 'Earthquakes', b: '<p>Stress builds and is suddenly released at the <b>focus</b>; the <b>epicentre</b> is directly above on the surface. Measured on the Richter and moment-magnitude scales.</p>' }
      ],
      quiz: [
        { q: 'The Mid-Atlantic Ridge is an example of a', o: ['Destructive boundary', 'Constructive boundary', 'Conservative boundary', 'Hot spot'], a: 1, x: 'Plates diverge.' },
        { q: 'The Himalayas formed by', o: ['Oceanic–continental subduction', 'Continental–continental collision', 'Sea-floor spreading', 'A transform fault'], a: 1, x: 'Fold mountains.' },
        { q: 'The point on the surface above an earthquake’s origin is the', o: ['Focus', 'Epicentre', 'Fault', 'Crater'], a: 1, x: 'Epicentre.' },
        { q: 'Plates are moved by', o: ['Tides', 'Convection currents in the mantle', 'Wind', 'Rotation of the moon'], a: 1, x: 'Mantle convection.' },
        { q: 'The San Andreas Fault is a', o: ['Conservative boundary', 'Constructive boundary', 'Volcano', 'Fold mountain'], a: 0, x: 'Transform boundary.' }
      ] },

    { id: 'landforms', title: 'Rivers, Coasts & Glaciation', paper: 'Physical', levels: ['H', 'O'], weight: { H: 7, O: 8 }, freq: 10,
      summary: 'Processes of erosion, transport and deposition; formation of landforms with named Irish examples.',
      examTip: '“Examine the formation of one landform” is a classic 30-mark question. Learn one erosional and one depositional landform per agent, with a diagram.',
      lessons: [
        { t: 'River processes & landforms', b: '<p>Erosion: hydraulic action, abrasion, attrition, solution. Landforms: V-shaped valley, waterfall (Torc Waterfall, Co. Kerry), meander, oxbow lake, floodplain, levees, delta.</p>' },
        { t: 'Coastal landforms', b: '<p>Erosion: cliff and wave-cut platform, sea cave → arch → stack → stump. Deposition: beach, spit (Inch, Co. Kerry), tombolo, lagoon. Longshore drift moves sediment along the coast.</p>' },
        { t: 'Glacial landforms', b: '<p>Erosion: cirque/corrie (Coumshingaun, Co. Waterford), arête, U-shaped valley (Glendalough), pyramidal peak. Deposition: moraines, drumlins (Clew Bay), eskers (Esker Riada).</p>' }
      ],
      quiz: [
        { q: 'Rocks carried by a river wearing away the bed and banks is', o: ['Hydraulic action', 'Abrasion', 'Attrition', 'Solution'], a: 1, x: 'Abrasion.' },
        { q: 'The correct coastal erosion sequence is', o: ['Arch → cave → stack → stump', 'Cave → arch → stack → stump', 'Stack → arch → cave → stump', 'Stump → stack → arch → cave'], a: 1, x: 'Cave → arch → stack → stump.' },
        { q: 'Drumlins are found in', o: ['The Burren', 'Clew Bay', 'Glendalough only', 'The Aran Islands'], a: 1, x: 'Clew Bay drowned drumlins.' },
        { q: 'An oxbow lake forms from', o: ['A cirque', 'A cut-off meander', 'A delta', 'Coastal erosion'], a: 1, x: 'Meander neck cut through.' },
        { q: 'A U-shaped valley is formed by', o: ['Rivers', 'Glaciers', 'Waves', 'Wind'], a: 1, x: 'Glacial erosion.' }
      ] },

    { id: 'weathering', title: 'Weathering, Karst & Mass Movement', paper: 'Physical', levels: ['H', 'O'], weight: { H: 3, O: 5 }, freq: 8,
      summary: 'Mechanical and chemical weathering, karst landscapes (the Burren), mass movement and human interaction with surface processes.',
      examTip: 'Karst (Burren) and human interaction with mass movement or rivers (flooding, dams) are frequent alternatives.',
      lessons: [
        { t: 'Weathering', b: '<p><b>Mechanical</b>: freeze-thaw — water freezes in cracks, expands ~9%, shatters rock (scree). <b>Chemical</b>: <b>carbonation</b> — rainwater + CO₂ forms weak carbonic acid, dissolving limestone (calcium carbonate).</p>' },
        { t: 'Karst landforms', b: '<p>Surface: limestone pavement (clints and grikes), swallow holes, dry valleys. Underground: caverns, stalactites (hang down), stalagmites (grow up), pillars. Example: the Burren, Co. Clare; Aillwee Cave.</p>' },
        { t: 'Mass movement', b: '<p>Downslope movement of material under gravity: soil creep (slow), landslides, mudflows and bog bursts (fast). Triggers: heavy rain, steep slopes, removal of vegetation.</p>' }
      ],
      quiz: [
        { q: 'Clints and grikes are features of', o: ['Glacial valleys', 'Limestone pavement', 'Sand dunes', 'River deltas'], a: 1, x: 'Karst.' },
        { q: 'Carbonation dissolves', o: ['Granite', 'Basalt', 'Limestone', 'Quartzite'], a: 2, x: 'Calcium carbonate.' },
        { q: 'Stalactites', o: ['Grow up from the floor', 'Hang from the cave roof', 'Form on beaches', 'Are glacial deposits'], a: 1, x: '“c” for ceiling.' },
        { q: 'The slowest form of mass movement is', o: ['Landslide', 'Soil creep', 'Mudflow', 'Bog burst'], a: 1, x: 'Soil creep.' }
      ] },

    { id: 'regions-ireland', title: 'Regions: Irish Regions', paper: 'Regional', levels: ['H', 'O'], weight: { H: 8, O: 10 }, freq: 10,
      summary: 'The concept of a region; a peripheral Irish region (e.g. the West of Ireland) and a core region (e.g. the Greater Dublin Area).',
      examTip: 'Regional questions ask you to examine development of ONE activity (agriculture, manufacturing, tourism, or a human process) in a named region — have each one ready for both regions.',
      lessons: [
        { t: 'Types of region', b: '<p>Climatic, administrative, cultural (e.g. Gaeltacht), socio-economic (core vs peripheral), city regions. Regions are defined by shared characteristics.</p>' },
        { t: 'West of Ireland (peripheral)', b: '<p>Agriculture limited by relief, poor soils and high rainfall → small farms, pastoral. Manufacturing limited by distance from markets (though Galway medical devices cluster). Tourism strong: Wild Atlantic Way, scenery, culture.</p>' },
        { t: 'Greater Dublin Area (core)', b: '<p>Fertile lowland farming. Manufacturing and services boosted by the port, airport, skilled labour and market size. Challenges: urban sprawl, housing costs, congestion.</p>' }
      ],
      quiz: [
        { q: 'The Gaeltacht is an example of a', o: ['Climatic region', 'Cultural region', 'City region', 'Physical region'], a: 1, x: 'Language-based.' },
        { q: 'A key limit on agriculture in the West of Ireland is', o: ['Flat fertile land', 'Poor soils and high rainfall', 'Too much sunshine', 'Proximity to Dublin'], a: 1, x: 'Physical constraints.' },
        { q: 'Dublin is best described as a', o: ['Peripheral region', 'Core region', 'Desert region', 'Declining industrial region'], a: 1, x: 'Core.' },
        { q: 'Which tourism initiative promotes the west coast?', o: ['Ireland’s Ancient East', 'Wild Atlantic Way', 'Hidden Heartlands only', 'The Boyne Valley Drive'], a: 1, x: 'Wild Atlantic Way.' }
      ] },

    { id: 'regions-europe', title: 'Regions: European & Continental', paper: 'Regional', levels: ['H', 'O'], weight: { H: 8, O: 10 }, freq: 10,
      summary: 'A European core (e.g. the Paris Basin) and periphery (e.g. the Mezzogiorno), plus a continental/sub-continental region (e.g. India or Brazil).',
      examTip: 'Use the physical (climate, relief, soils) + economic + human framework for every regional answer.',
      lessons: [
        { t: 'Paris Basin (core)', b: '<p>Fertile limon soils and flat land → highly mechanised cereal farming. Paris dominates (primate city) — services, finance, tourism. Decentralisation policy: new towns, regional growth centres.</p>' },
        { t: 'Mezzogiorno (periphery)', b: '<p>Mediterranean climate (summer drought), steep relief and soil erosion; historic land tenure problems. State investment through the Cassa per il Mezzogiorno; tourism and irrigation helped development.</p>' },
        { t: 'Continental region (e.g. India)', b: '<p>Monsoon climate drives agriculture; rapid urbanisation; services and IT growth (Bengaluru); large population and diversity of language and religion.</p>' }
      ],
      quiz: [
        { q: 'The Paris Basin is known for', o: ['Subsistence farming', 'Highly mechanised cereal farming', 'Glaciers', 'Rainforest'], a: 1, x: 'Fertile, flat land.' },
        { q: 'The Mezzogiorno is in', o: ['Northern France', 'Southern Italy', 'Spain', 'Belgium'], a: 1, x: 'Southern Italy.' },
        { q: 'A primate city is', o: ['A capital city only', 'A city far larger and more dominant than any other in the country', 'A city with no industry', 'A rural town'], a: 1, x: 'E.g. Paris.' },
        { q: 'India’s agriculture depends heavily on the', o: ['Gulf Stream', 'Monsoon', 'Mistral', 'Sirocco'], a: 1, x: 'Seasonal monsoon rains.' }
      ] },

    { id: 'elective-econ', title: 'Elective 4: Economic Activities', paper: 'Elective', choiceGroup: 'Elective', levels: ['H', 'O'], weight: { H: 16, O: 20 }, freq: 10,
      summary: 'Economic development, globalisation and MNCs, the EU and economic activity, the impact of economic activity on the environment, sustainable development.',
      examTip: 'Pick ONE elective. Questions use “Examine…”/“Discuss…” — 30-mark answers need ~15 SRPs with named examples.',
      lessons: [
        { t: 'Patterns of development', b: '<p>Core and periphery at global, European and Irish scales. Measures: GDP per capita, Human Development Index (HDI). Rostow’s stages model (traditional → take-off → mass consumption).</p>' },
        { t: 'MNCs & globalisation', b: '<p>Ireland attracts MNCs through corporation tax policy, an English-speaking workforce, EU market access and IDA support. Examples: pharmaceuticals and tech clusters in Cork and Dublin.</p>' },
        { t: 'Environmental impact', b: '<p>Acid rain, climate change, pollution from industry and agriculture. Sustainable development: meeting today’s needs without compromising future generations — renewable energy, EU emissions targets.</p>' }
      ],
      quiz: [
        { q: 'HDI combines', o: ['Only income', 'Life expectancy, education and income', 'Population and area', 'Exports and imports'], a: 1, x: 'Human Development Index.' },
        { q: 'Sustainable development means', o: ['Maximum growth now', 'Meeting present needs without compromising future generations', 'No development', 'Only renewable energy'], a: 1, x: 'Brundtland definition.' },
        { q: 'Which is a reason MNCs locate in Ireland?', o: ['No EU access', 'English-speaking workforce', 'Highest tax in Europe', 'Isolation'], a: 1, x: 'Plus tax and EU access.' }
      ] },

    { id: 'elective-human', title: 'Elective 5: The Human Environment', paper: 'Elective', choiceGroup: 'Elective', levels: ['H', 'O'], weight: { H: 16, O: 20 }, freq: 10,
      summary: 'Population growth and structure, overpopulation, migration, settlement patterns, urban growth, urban problems and planning.',
      examTip: 'Pick ONE elective. The demographic transition model and urban problems with a named city example are perennial.',
      lessons: [
        { t: 'Demographic transition model', b: '<p>Stage 1: high birth & death rates. Stage 2: death rate falls → rapid growth. Stage 3: birth rate falls. Stage 4: both low, stable. Stage 5: birth rate below death rate → decline.</p>' },
        { t: 'Migration', b: '<p><b>Push</b> factors (unemployment, conflict) and <b>pull</b> factors (jobs, safety, family). Impacts on origin and destination: labour, culture, dependency ratios.</p>' },
        { t: 'Urban issues', b: '<p>Urban sprawl, traffic congestion, housing shortages, inner-city decline. Responses: urban renewal and redevelopment (e.g. Ballymun regeneration, Dublin Docklands), new towns, public transport.</p>' }
      ],
      quiz: [
        { q: 'In Stage 2 of the DTM', o: ['Birth and death rates are both low', 'The death rate falls and population grows rapidly', 'Population declines', 'Birth rate falls first'], a: 1, x: 'Rapid growth.' },
        { q: 'A lack of jobs at home is a', o: ['Pull factor', 'Push factor', 'Barrier', 'Stage'], a: 1, x: 'Push.' },
        { q: 'The uncontrolled spread of a city into surrounding countryside is', o: ['Urban renewal', 'Urban sprawl', 'Gentrification', 'Counter-urbanisation'], a: 1, x: 'Sprawl.' }
      ] },

    { id: 'option-geoecology', title: 'Option: Geoecology', paper: 'Option', choiceGroup: 'Option', levels: ['H'], weight: { H: 16, O: 0 }, freq: 10,
      summary: 'Soil composition and characteristics, soil-forming processes, soil classification, a biome (e.g. hot desert or tropical rainforest), human interference.',
      examTip: 'One 80-mark essay. Structure it around 4–5 clear aspects with developed discussion. Desertification in the Sahel is a classic case study.',
      lessons: [
        { t: 'Soil characteristics', b: '<p>Texture (sand/silt/clay), structure, colour, pH, organic matter (humus), water and air content. Brown earth soils are Ireland’s most common fertile soils.</p>' },
        { t: 'Soil-forming processes', b: '<p><b>Podzolisation</b>: heavy rain leaches minerals, leaving an ash-grey acidic layer and an iron pan. <b>Laterisation</b>: hot wet tropics. <b>Calcification</b>: low rainfall grasslands. <b>Salinisation</b>: evaporation draws salts to the surface.</p>' },
        { t: 'Human interference', b: '<p><b>Desertification</b> (Sahel): overgrazing, overcropping, deforestation and drought. <b>Deforestation</b> (Amazon): soil erosion, biodiversity loss, climate impacts.</p>' }
      ],
      quiz: [
        { q: 'An iron pan is associated with', o: ['Calcification', 'Podzolisation', 'Salinisation', 'Laterisation'], a: 1, x: 'Leaching in wet climates.' },
        { q: 'Decayed organic matter in soil is', o: ['Humus', 'Clay', 'Silt', 'Parent rock'], a: 0, x: 'Humus.' },
        { q: 'Desertification in the Sahel is caused partly by', o: ['Too many trees', 'Overgrazing', 'Heavy rainfall', 'Glaciation'], a: 1, x: 'Plus drought and overcropping.' }
      ] },

    { id: 'option-gi', title: 'Option: Global Interdependence', paper: 'Option', choiceGroup: 'Option', levels: ['H'], weight: { H: 16, O: 0 }, freq: 10,
      summary: 'Models of development, trade and aid, debt, fair trade, globalisation, the impact of economic growth on people and the environment.',
      examTip: 'Use a clear structure: 4–5 aspects, each developed with examples (e.g. Fairtrade cocoa, Irish Aid programmes).',
      lessons: [
        { t: 'Development models', b: '<p>Rostow’s stages of growth vs dependency theory (core exploits periphery). Neither fits every country — critique them.</p>' },
        { t: 'Trade & aid', b: '<p>Unfair trade: developing countries export low-value raw materials and import high-value goods. Aid types: bilateral, multilateral, NGO, emergency. Fair trade guarantees a minimum price and social premium.</p>' }
      ],
      quiz: [
        { q: 'Aid given directly from one government to another is', o: ['Multilateral', 'Bilateral', 'NGO', 'Tied trade'], a: 1, x: 'Bilateral.' },
        { q: 'Fair trade aims to', o: ['Lower farmer income', 'Guarantee producers a fair minimum price', 'Remove all trade', 'Increase tariffs'], a: 1, x: 'Fair price + premium.' },
        { q: 'Dependency theory argues that', o: ['All countries develop equally', 'Core countries exploit peripheral ones', 'Aid always works', 'Trade is always fair'], a: 1, x: 'Core–periphery exploitation.' }
      ] }
  ]
});
