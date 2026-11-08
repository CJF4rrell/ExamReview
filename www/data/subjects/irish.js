/* Leaving Certificate Irish (Gaeilge) — Higher & Ordinary Level
 * HL total 600: Oral 240 (40%) + Paper 1 160 (Cluastuiscint 60 + Ceapadóireacht 100) + Paper 2 200
 *   (Léamhthuiscint 2×50, Prós 30, Filíocht 30, Litríocht Bhreise 40 — per the 2025 HL paper).
 * OL total 600: Oral 240 (40%) + Aural 120 (20%) + written papers 240 (40%).
 */
LC.register({
  id: 'irish', name: 'Irish (Gaeilge)', icon: '☘', color: '#2f9a5d',
  exam: {
    H: { total: 600, papers: [
      { name: 'Scrúdú Béil (Oral)', marks: 240, time: '~15 min', parts: [
        { name: 'Fáiltiú (greeting)', marks: 5, note: 'Name, age, address, exam number' },
        { name: 'Léamh Filíochta', marks: 35, note: 'Read aloud one of the five prescribed poems' },
        { name: 'Sraith Pictiúr', marks: 80, note: 'Describe one of 20 picture series + answer questions' },
        { name: 'Comhrá', marks: 120, note: 'General conversation — your life, school, interests, the future' }] },
      { name: 'Páipéar 1', marks: 160, time: '2h 20m', parts: [
        { name: 'Cluastuiscint (Aural)', marks: 60, note: 'Announcements, conversations, news pieces in three dialects' },
        { name: 'Ceapadóireacht', marks: 100, note: 'One composition (aiste, scéal, díospóireacht, óráid, alt…)' }] },
      { name: 'Páipéar 2', marks: 200, time: '3h 05m', parts: [
        { name: 'Léamhthuiscint A & B', marks: 100, note: 'Two passages × 50 (Q1–5 × 7 marks, Q6 grammar + own-words = 15)' },
        { name: 'Prós', marks: 30, note: 'Prós Ainmnithe OR Prós Roghnach' },
        { name: 'Filíocht', marks: 30, note: 'Filíocht Ainmnithe OR Filíocht Roghnach' },
        { name: 'Litríocht Bhreise', marks: 40, note: 'One question on additional literature' }] }
    ] },
    O: { total: 600, papers: [
      { name: 'Scrúdú Béil (Oral)', marks: 240, time: '~13 min', parts: [
        { name: 'Fáiltiú', marks: 5, note: '' },
        { name: 'Léamh Filíochta', marks: 35, note: 'One of five prescribed poems' },
        { name: 'Sraith Pictiúr', marks: 80, note: '20 picture series' },
        { name: 'Comhrá', marks: 120, note: 'General conversation' }] },
      { name: 'Cluastuiscint (Aural)', marks: 120, time: '~40 min', parts: [
        { name: 'Fógraí, Comhráite, Píosaí Nuachta', marks: 120, note: '20% of the total at OL' }] },
      { name: 'Written Papers', marks: 240, time: '', parts: [
        { name: 'Ceapadóireacht, Léamhthuiscint, Prós & Filíocht', marks: 240, note: 'Check the current paper for the exact split' }] }
    ] }
  },
  markingNotes: [
    'The Oral is 40% of the whole subject — the single biggest component. The Comhrá alone (120 marks) is worth more than all of Paper 1’s composition.',
    'Marks are lost for language errors throughout the written papers: accurate grammar (séimhiú, urú, tenses) directly protects marks.',
    'Léamhthuiscint Q6(a) is usually a grammar question (e.g. a verb tense or the genitive) and Q6(b) must be in your own words.',
    'Material from the prescribed prose/poetry may NOT be reused in the optional (Roghnach) answers.'
  ],
  sections: [
    { id: 'comhra', title: 'An Comhrá (Oral conversation)', paper: 'Oral', levels: ['H', 'O'], weight: { H: 20, O: 20 }, freq: 10,
      summary: 'The 120-mark conversation: yourself, family, home area, school, hobbies, the future, holidays, current issues.',
      examTip: 'Examiners reward fluency and range of tenses. Prepare 2–3 sentences per topic in past, present, future and conditional.',
      lessons: [
        { t: 'Mé féin agus mo theaghlach', b: '<p><b>Is mise</b> … · <b>Tá</b> beirt deartháireacha <b>agam</b> · <b>Is é</b> m’athair an duine is sine sa teach.</p><p>Use numbers for people: duine, beirt, triúr, ceathrar, cúigear.</p>' },
        { t: 'An scoil & an todhchaí', b: '<p><b>Táim ag déanamh</b> seacht n-ábhar · <b>Is fearr liom</b> an Bhitheolaíocht · <b>Ba mhaith liom</b> staidéar a dhéanamh ar … san ollscoil · <b>Táim ag súil le</b> dul go Corcaigh.</p>' },
        { t: 'Tenses = marks', b: '<p>Past: <b>Chuaigh mé</b> go dtí an Ghaeltacht anuraidh.<br>Future: <b>Rachaidh mé</b> ar saoire tar éis na hArdteiste.<br>Conditional: <b>Dá mbeadh</b> an t-airgead agam, <b>rachainn</b> timpeall an domhain.</p>' },
        { t: 'Opinion phrases', b: '<p><b>Is dóigh liom go</b> … · <b>Ní dóigh liom go</b> … · <b>Caithfidh mé a admháil go</b> … · <b>Ceapaim go bhfuil</b> … · <b>Is fíor a rá go</b> …</p>' }
      ],
      quiz: [
        { q: '“Ba mhaith liom” means', o: ['I would like', 'I like', 'I liked', 'I will like'], a: 0, x: 'Conditional: “I would like”.' },
        { q: 'Which is the CONDITIONAL of “téigh” (go), first person?', o: ['Chuaigh mé', 'Rachaidh mé', 'Rachainn', 'Téim'], a: 2, x: 'Rachainn = I would go.' },
        { q: '“Beirt” is used to count', o: ['Two things', 'Two people', 'Second place', 'Two years'], a: 1, x: 'Personal numbers: duine, beirt, triúr…' },
        { q: 'The Comhrá is worth how many marks?', o: ['35', '80', '120', '240'], a: 2, x: '120 of the 240 oral marks.' },
        { q: '“Dá mbeadh an t-airgead agam…” translates as', o: ['If I had the money…', 'When I have money…', 'I had money…', 'Give me the money…'], a: 0, x: 'Dá + conditional.' }
      ] },

    { id: 'sraith', title: 'Sraith Pictiúr (Picture series)', paper: 'Oral', levels: ['H', 'O'], weight: { H: 13, O: 13 }, freq: 10,
      summary: 'Twenty published picture sequences; one is chosen at the oral. Describe the story, then answer and ask questions.',
      examTip: '80 marks for something you can fully prepare in advance. Learn all 20 thoroughly — the story is told in the past tense (or present, consistently).',
      lessons: [
        { t: 'Structure of the task', b: '<p>About 1 minute to look, then you narrate the six pictures. Afterwards the examiner asks you questions, and <b>you ask the examiner questions</b> about the story (at HL).</p>' },
        { t: 'Useful connecting phrases', b: '<p><b>Sa chéad phictiúr</b> … · <b>Ina dhiaidh sin</b> … · <b>Ar ball</b> … · <b>Sa phictiúr deireanach</b> … · <b>Faoi dheireadh</b> …</p>' },
        { t: 'Asking questions back', b: '<p><b>Cén fáth ar</b> … ? (Why did…?) · <b>Cad a rinne</b> … ? · <b>Ar thaitin</b> … leis? · <b>Cá ndeachaigh</b> siad?</p>' }
      ],
      quiz: [
        { q: 'How many picture series are prescribed?', o: ['5', '10', '20', '30'], a: 2, x: 'Twenty.' },
        { q: '“Ina dhiaidh sin” means', o: ['Before that', 'After that', 'Finally', 'Because of that'], a: 1, x: 'After that.' },
        { q: 'The Sraith Pictiúr is worth', o: ['35 marks', '80 marks', '120 marks', '50 marks'], a: 1, x: '80 marks.' },
        { q: '“Faoi dheireadh” means', o: ['At first', 'Finally / at last', 'Suddenly', 'Meanwhile'], a: 1, x: 'At last.' }
      ] },

    { id: 'filiocht-bheil', title: 'Léamh Filíochta (Oral poetry reading)', paper: 'Oral', levels: ['H', 'O'], weight: { H: 6, O: 6 }, freq: 10,
      summary: 'Read aloud a section of one of the five prescribed poems. Marks for pronunciation, fluency and expression.',
      examTip: '35 easy marks: practise reading all five poems aloud daily with the recordings your teacher provides.',
      lessons: [
        { t: 'How it is marked', b: '<p>Accuracy of pronunciation, fluency, and reading with feeling for the meaning. Pause at punctuation; don’t rush.</p>' },
        { t: 'Pronunciation traps', b: '<p><b>bh/mh</b> → v/w sound · <b>ch</b> → as in “loch” · <b>dh/gh</b> → soft or silent · slender vs broad consonants (beside e/i vs a/o/u).</p>' }
      ],
      quiz: [
        { q: 'The poetry reading is worth', o: ['5 marks', '35 marks', '80 marks', '20 marks'], a: 1, x: '35 marks.' },
        { q: 'In Irish, “bh” usually sounds like', o: ['b', 'v or w', 'h', 'silent'], a: 1, x: 'Lenited b.' },
        { q: 'How many poems are prepared for the oral reading?', o: ['3', '5', '10', '20'], a: 1, x: 'The five prescribed poems.' }
      ] },

    { id: 'cluas', title: 'Cluastuiscint (Aural)', paper: 'P1', levels: ['H', 'O'], weight: { H: 10, O: 20 }, freq: 10,
      summary: 'Listening in Connacht, Munster and Ulster dialects: announcements (fógraí), conversations (comhráite) and news (nuacht).',
      examTip: 'At Ordinary Level the aural is 20% of the subject. Learn question words and listen to Raidió na Gaeltachta or TG4 weekly.',
      lessons: [
        { t: 'Question words', b: '<p><b>Cé</b> (who) · <b>Cad</b>/<b>Céard</b> (what) · <b>Cá</b> (where) · <b>Cathain</b>/<b>Cén uair</b> (when) · <b>Cén fáth</b> (why) · <b>Conas</b>/<b>Cén chaoi</b> (how) · <b>Cé mhéad</b> (how many).</p>' },
        { t: 'Dialect differences', b: '<p>“How are you?”: <b>Conas atá tú?</b> (Munster) · <b>Cén chaoi a bhfuil tú?</b> (Connacht) · <b>Cad é mar atá tú?</b> (Ulster).</p>' },
        { t: 'Exam technique', b: '<p>Read all the questions before each piece plays. Each piece is played more than once — get the gist first, details second. Answer in Irish unless told otherwise; numbers can be written as digits.</p>' }
      ],
      quiz: [
        { q: '“Cén fáth” means', o: ['When', 'Why', 'How much', 'Where'], a: 1, x: 'Why.' },
        { q: '“Cad é mar atá tú?” is typical of which dialect?', o: ['Munster', 'Connacht', 'Ulster', 'Standard only'], a: 2, x: 'Ulster.' },
        { q: '“Cé mhéad” asks', o: ['Who', 'How many / how much', 'Which', 'What time'], a: 1, x: 'Quantity.' },
        { q: 'At Higher Level the aural is worth', o: ['60 marks', '100 marks', '120 marks', '35 marks'], a: 0, x: '60 marks (10%) at HL; 120 at OL.' }
      ] },

    { id: 'ceap', title: 'Ceapadóireacht (Composition)', paper: 'P1', levels: ['H', 'O'], weight: { H: 17, O: 8 }, freq: 10,
      summary: 'Writing an aiste, scéal, díospóireacht, óráid or alt with rich, accurate Irish.',
      examTip: 'Build a bank of 30–40 “nathanna” (phrases) you can drop into any essay, and write about topics you have the vocabulary for.',
      lessons: [
        { t: 'Nathanna for any essay', b: '<p><b>Ní féidir a shéanadh go</b> … (It can’t be denied that…) · <b>Is fíor a rá go</b> … · <b>Os a choinne sin</b> … (On the other hand…) · <b>Gan amhras</b> … · <b>Mar fhocal scoir</b> … (In conclusion…).</p>' },
        { t: 'Common topics', b: '<p>An teicneolaíocht · An timpeallacht & athrú aeráide · Daoine óga & sláinte mheabhrach · An Ghaeilge sa lá atá inniu ann · Spórt · Fadhbanna sóisialta (dífhostaíocht, easpa tithíochta).</p>' },
        { t: 'Díospóireacht & Óráid', b: '<p>Open: <b>A chathaoirligh, a mholtóirí, a lucht an fhreasúra agus a dhaoine uaisle</b>. Close: <b>Go raibh míle maith agaibh as ucht éisteacht liom</b>.</p>' }
      ],
      quiz: [
        { q: '“Mar fhocal scoir” means', o: ['First of all', 'In conclusion', 'On the other hand', 'For example'], a: 1, x: 'Used to conclude.' },
        { q: '“Os a choinne sin” means', o: ['On the other hand', 'Without doubt', 'Therefore', 'At first'], a: 0, x: 'Contrast phrase.' },
        { q: 'A díospóireacht should open by addressing', o: ['Only your friends', 'The chairperson, adjudicators, opposition and audience', 'The examiner by name', 'Nobody'], a: 1, x: 'Standard debate opening.' },
        { q: '“Ní féidir a shéanadh go…” means', o: ['It is easy to see that…', 'It cannot be denied that…', 'I don’t believe that…', 'It is said that…'], a: 1, x: 'A strong opening phrase.' }
      ] },

    { id: 'leamh', title: 'Léamhthuiscint (Reading comprehension)', paper: 'P2', levels: ['H', 'O'], weight: { H: 17, O: 14 }, freq: 10,
      summary: 'Two passages × 50 marks: retrieving information, grammar questions and an own-words response on style or opinion.',
      examTip: 'Questions follow the order of the text. Q6(a) is usually grammar — learn to spot verbs’ tenses and the genitive case.',
      lessons: [
        { t: 'Question pattern', b: '<p>Questions 1–5 (7 marks each) follow the paragraphs in order. Q6(a) grammar (e.g. find a verb in the past tense / a noun in the genitive). Q6(b) your own words on the writer’s style or the main idea (≈60 words).</p>' },
        { t: 'Answering accurately', b: '<p>Lift the relevant sentence, then adjust it to answer the question directly (change “mé” to “sé/sí”, etc.). Don’t copy whole paragraphs.</p>' },
        { t: 'Style words for Q6(b)', b: '<p><b>stíl shimplí / shoiléir</b> · <b>samplaí</b> · <b>staitisticí</b> · <b>teanga láidir</b> · <b>meafar</b> · <b>ceisteanna reitriciúla</b> · <b>greann</b>.</p>' }
      ],
      quiz: [
        { q: 'Léamhthuiscint questions generally follow', o: ['Random order', 'The order of the text', 'Reverse order', 'Only the last paragraph'], a: 1, x: 'In paragraph order.' },
        { q: 'Q6(b) must be answered', o: ['In English', 'In your own words', 'With a full copied paragraph', 'In bullet points only'], a: 1, x: 'Own words.' },
        { q: '“Ceisteanna reitriciúla” are', o: ['Rhetorical questions', 'Statistics', 'Metaphors', 'Quotes'], a: 0, x: 'Rhetorical questions.' },
        { q: 'Each Léamhthuiscint passage is worth', o: ['30', '50', '100', '40'], a: 1, x: '50 marks each, 100 total at HL.' }
      ] },

    { id: 'litriocht', title: 'Prós, Filíocht & Litríocht Bhreise', paper: 'P2', levels: ['H', 'O'], weight: { H: 17, O: 11 }, freq: 10,
      summary: 'Prescribed prose and poetry (or the optional/Roghnach route), plus additional literature at HL — themes, characters, techniques.',
      examTip: 'For each text, prepare: téama, carachtair, mothúcháin, teicníochtaí (íomhánna, meafair), and your own opinion with reasons.',
      lessons: [
        { t: 'Analysing a poem', b: '<p><b>Téama</b> (theme) · <b>Mothúcháin</b> (emotions: brón, uaigneas, grá, fearg) · <b>Íomhánna</b> (images) · <b>Meafar / Samhail</b> (metaphor / simile) · <b>Atmaisféar</b> · <b>Dán liriciúil</b>.</p>' },
        { t: 'Analysing prose', b: '<p><b>Príomhcharachtar</b> · <b>Tréithe</b> (traits: cróga, santach, cneasta) · <b>Coimhlint</b> (conflict) · <b>Buaicphointe</b> (climax) · <b>Críoch</b> (ending).</p>' },
        { t: 'Ainmnithe vs Roghnach', b: '<p>Answer on the prescribed (Ainmnithe) text OR on your own chosen text (Roghnach) — not both, and no reusing prescribed material in the Roghnach answer.</p>' }
      ],
      quiz: [
        { q: '“Téama” means', o: ['Theme', 'Character', 'Ending', 'Rhyme'], a: 0, x: 'Theme.' },
        { q: '“Samhail” is a', o: ['Metaphor', 'Simile', 'Rhyme', 'Stanza'], a: 1, x: 'Simile (meafar = metaphor).' },
        { q: '“Coimhlint” means', o: ['Climax', 'Conflict', 'Character', 'Comedy'], a: 1, x: 'Conflict.' },
        { q: 'Can material from the prescribed prose be reused in the Prós Roghnach answer?', o: ['Yes', 'No', 'Only quotes', 'Only at OL'], a: 1, x: 'Not allowed.' }
      ] },

    { id: 'gramadach', title: 'Gramadach (Grammar essentials)', paper: 'All', levels: ['H', 'O'], weight: { H: 5, O: 8 }, freq: 10,
      summary: 'Séimhiú, urú, the past tense, the conditional and the irregular verbs — the accuracy that protects marks everywhere.',
      examTip: 'Grammar is marked across the oral, the composition and the reading answers. Ten minutes a day on verbs pays off in every section.',
      lessons: [
        { t: 'Séimhiú (lenition)', b: '<p>After <b>mo, do, a</b> (his): mo <b>th</b>each, a <b>bh</b>róga. After <b>ar, de, do, faoi, ó, roimh, trí</b> (no article): ar <b>bh</b>ord. Past tense of regular verbs: <b>ch</b>uir mé, <b>sh</b>iúil mé.</p>' },
        { t: 'Urú (eclipsis)', b: '<p>After <b>ár, bhur, a</b> (their): ár <b>dt</b>each, a <b>mb</b>róga. After <b>i</b>: i <b>gC</b>orcaigh, i <b>mB</b>aile Átha Cliath. b→mb, c→gc, d→nd, f→bhf, g→ng, p→bp, t→dt.</p>' },
        { t: 'Aimsir chaite (past tense)', b: '<p>Regular: séimhiú — <b>ghlan mé</b>; vowel/f: add <b>d’</b> — <b>d’ól mé</b>, <b>d’fhág mé</b>. Negative <b>níor ghlan mé</b>; question <b>ar ghlan tú?</b></p><p>Irregular: bhí, chuaigh, rinne, chonaic, fuair, dúirt, tháinig, thug, chuala, rug, d’ith.</p>' },
        { t: 'Modh coinníollach (conditional)', b: '<p>Séimhiú + ending: <b>ghlanfainn</b> (I would clean), <b>ghlanfá</b>, <b>ghlanfadh sé</b>. Vowels: <b>d’ólfainn</b>. Irregular: bheinn, rachainn, dhéanfainn, d’fheicfinn, gheobhainn.</p>' }
      ],
      quiz: [
        { q: '“In Cork” is', o: ['i Corcaigh', 'i gCorcaigh', 'i chCorcaigh', 'in Chorcaigh'], a: 1, x: 'Urú after “i”: c → gc.' },
        { q: '“My house” is', o: ['mo teach', 'mo theach', 'mo dteach', 'm’teach'], a: 1, x: 'Séimhiú after mo.' },
        { q: '“Their house” is', o: ['a theach', 'a teach', 'a dteach', 'a hteach'], a: 2, x: 'Urú after a (their).' },
        { q: 'Past tense of “ól” (drink), first person', o: ['Ól mé', 'D’ól mé', 'Ólfaidh mé', 'Ólann mé'], a: 1, x: 'd’ before a vowel.' },
        { q: '“I would do” is', o: ['Rinne mé', 'Déanfaidh mé', 'Dhéanfainn', 'Déanaim'], a: 2, x: 'Conditional of déan.' },
        { q: 'Urú on “f” gives', o: ['vf', 'bhf', 'ph', 'df'], a: 1, x: 'f → bhf (e.g. i bhfeirm — in a farm).' }
      ] }
  ]
});
