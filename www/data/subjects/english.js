/* Leaving Certificate English — Higher & Ordinary Level (2027 prescribed material)
 * Paper 1 (200): Comprehending 100 (Question A 50 + Question B 50 on different texts) + Composing 100.
 * Paper 2 (200): Single Text 60 + Comparative Study 70 + Poetry 70 (Unseen 20 + Prescribed 50).
 * Written answers are marked with PCLM: Purpose 30%, Coherence 30%, Language 30%, Mechanics 10%.
 */
LC.register({
  id: 'english', name: 'English', icon: '✎', color: '#c2543a',
  exam: {
    H: { total: 400, papers: [
      { name: 'Paper 1', marks: 200, time: '2h 50m', parts: [
        { name: 'Comprehending – Question A', marks: 50, note: 'Questions on one of three texts (typically 15 + 15 + 20)' },
        { name: 'Comprehending – Question B', marks: 50, note: 'Functional writing task attached to a DIFFERENT text' },
        { name: 'Composing', marks: 100, note: 'One composition from ~7 titles' }] },
      { name: 'Paper 2', marks: 200, time: '3h 20m', parts: [
        { name: 'Single Text', marks: 60, note: 'One question on your studied text' },
        { name: 'Comparative Study', marks: 70, note: 'One question on one of the prescribed modes' },
        { name: 'Unseen Poem', marks: 20, note: 'Response to a poem you have not studied' },
        { name: 'Prescribed Poetry', marks: 50, note: 'Essay on one of four poets on the paper' }] }
    ] },
    O: { total: 400, papers: [
      { name: 'Paper 1', marks: 200, time: '2h 50m', parts: [
        { name: 'Comprehending – Question A', marks: 50, note: 'Questions on one of three texts' },
        { name: 'Comprehending – Question B', marks: 50, note: 'Functional writing task on a different text' },
        { name: 'Composing', marks: 100, note: 'One composition' }] },
      { name: 'Paper 2', marks: 200, time: '3h 20m', parts: [
        { name: 'Single Text', marks: 60, note: 'Shorter multi-part questions' },
        { name: 'Comparative Study', marks: 70, note: 'Modes: Theme, Social Setting, Relationships' },
        { name: 'Unseen Poem', marks: 20, note: '' },
        { name: 'Prescribed Poetry', marks: 50, note: 'Questions on one poem from four on the paper' }] }
    ] }
  },
  markingNotes: [
    'PCLM is the marking scheme for every extended answer: Clarity of Purpose 30%, Coherence of Delivery 30%, Efficiency of Language Use 30%, Accuracy of Mechanics 10%.',
    'Purpose is the gatekeeper: an answer that drifts from the question is held down across all four criteria, so answering the actual question matters most.',
    'Composing (100 marks) is a quarter of the whole exam — the single biggest question in any LC subject. Practise timed essays.',
    'Chief Examiner reports flag pre-learned answers that ignore the question. Learn material, not essays.',
    'Only four of the eight HL poets appear on the paper each year. Prepare at least five, ideally six.'
  ],
  sections: [
    { id: 'composing', title: 'Composing (the 100-mark essay)', paper: 'P1', levels: ['H', 'O'], weight: { H: 25, O: 25 }, freq: 10,
      summary: 'Personal essay, short story, speech/talk, article, discursive/persuasive essay — planning, structure and style under PCLM.',
      examTip: 'Compulsory and worth 25% of the exam. Have one genre you can write brilliantly and one backup genre.',
      lessons: [
        { t: 'PCLM in plain English', b: '<ul><li><b>P – Purpose (30%)</b>: Did you answer THIS title, in the genre asked, for the audience given?</li><li><b>C – Coherence (30%)</b>: Clear structure, paragraphing, a sense of direction, a strong ending.</li><li><b>L – Language (30%)</b>: Vocabulary, varied sentences, style appropriate to the genre.</li><li><b>M – Mechanics (10%)</b>: Spelling, grammar, punctuation.</li></ul>' },
        { t: 'Choosing your title', b: '<p>Read every title twice. Underline the genre (“write a speech…”, “write a short story…”) and the key word or phrase. Pick the one you can plan in 10 minutes, not the one that “sounds clever”.</p>' },
        { t: 'The personal essay', b: '<p>Reflective and honest: anecdote → reflection → insight. Use concrete detail (a smell, a place, a sound) and a mature voice. End with what you understand now that you didn’t before.</p>' },
        { t: 'The short story', b: '<p>Keep the cast small (2–3 characters), the time span short and the setting vivid. Build to a moment of change. Show, don’t tell. Dialogue sparingly. Make sure the story connects clearly to the title or image prompt.</p>' },
        { t: 'Speeches & articles', b: '<p>Speech: address the audience directly, use rhetorical questions, the rule of three, anecdotes and a strong call to action. Article: catchy headline, a hook, sub-headings if suitable, a confident persona.</p>' }
      ],
      quiz: [
        { q: 'In PCLM, what percentage is “Accuracy of Mechanics”?', o: ['30%', '10%', '20%', '40%'], a: 1, x: 'P 30, C 30, L 30, M 10.' },
        { q: 'Which criterion checks whether you answered the title in the right genre?', o: ['Coherence', 'Language', 'Purpose', 'Mechanics'], a: 2, x: 'Clarity of Purpose.' },
        { q: 'A good short story for the exam usually has', o: ['Many characters over many years', 'A small cast, short time span and a moment of change', 'A twist that reveals it was a dream', 'No dialogue at all'], a: 1, x: 'Focus beats sprawl.' },
        { q: 'Composing is worth what share of the total English marks?', o: ['10%', '20%', '25%', '50%'], a: 2, x: '100 of 400.' },
        { q: 'A rhetorical question and a direct call to action best suit', o: ['A personal essay', 'A speech', 'A diary entry', 'A short story'], a: 1, x: 'Persuasive speech features.' }
      ] },

    { id: 'qa', title: 'Comprehending – Question A', paper: 'P1', levels: ['H', 'O'], weight: { H: 12.5, O: 12.5 }, freq: 10,
      summary: 'Reading comprehension on one of three texts: information retrieval, language analysis, visual texts and style questions.',
      examTip: 'The 20-mark part almost always asks you to analyse style or language. Quote briefly and EXPLAIN the effect of each quotation.',
      lessons: [
        { t: 'The five language genres', b: '<p>The course names five: <b>Information, Argument, Persuasion, Narration, Aesthetic</b>. Most texts blend them. Naming the genre and showing how it works gets marks.</p>' },
        { t: 'The “3-point” answer', b: '<p>For a 15-mark question aim for three developed points: <b>Point → Quote → Explain the effect</b>. Avoid long quotations — 3 to 8 words is enough.</p>' },
        { t: 'Visual texts', b: '<p>Talk about composition (foreground/background), colour, lighting, facial expression, the caption and what the image suggests about the theme of the text.</p>' },
        { t: 'Style vocabulary', b: '<p>Useful terms: tone, imagery, metaphor, simile, anecdote, statistics, rhetorical question, emotive language, contrast, humour, short punchy sentences, first person, direct address.</p>' }
      ],
      quiz: [
        { q: 'Which is NOT one of the five language genres?', o: ['Narration', 'Aesthetic', 'Description', 'Argument'], a: 2, x: 'The five are Information, Argument, Persuasion, Narration and Aesthetic.' },
        { q: 'Ideal quotation length in a comprehension answer', o: ['A full paragraph', 'Short and focused, a few words', 'No quotes needed', 'At least three lines'], a: 1, x: 'Short quotes plus explanation.' },
        { q: 'For a 15-mark answer, aim for roughly', o: ['One point', 'Three developed points', 'Seven bullet points', 'A summary of the text'], a: 1, x: 'Three well-developed points.' },
        { q: 'Statistics and expert quotes are features of which genre?', o: ['Aesthetic', 'Information/Argument', 'Narration', 'Poetry'], a: 1, x: 'Factual support.' },
        { q: 'Question A and Question B must be answered on', o: ['The same text', 'Different texts', 'Any texts', 'The visual text only'], a: 1, x: 'They must come from different texts.' }
      ] },

    { id: 'qb', title: 'Comprehending – Question B (functional writing)', paper: 'P1', levels: ['H', 'O'], weight: { H: 12.5, O: 12.5 }, freq: 10,
      summary: 'Short functional writing: letters, speeches, reports, articles, diary entries, blogs, introductions, reviews.',
      examTip: 'Marks hinge on matching the format and register exactly. A letter needs addresses and a sign-off; a speech needs audience address.',
      lessons: [
        { t: 'Read the task three times', b: '<p>Identify: <b>format</b> (letter/speech/article…), <b>audience</b>, <b>purpose</b> and any number of points requested (“three reasons”). Each missed instruction costs Purpose marks.</p>' },
        { t: 'Format checklists', b: '<ul><li><b>Formal letter</b>: your address, date, recipient’s address, “Dear Sir/Madam”, “Yours faithfully”.</li><li><b>Report</b>: title, terms of reference, findings, recommendations.</li><li><b>Speech</b>: greeting, introduction of yourself, clear points, conclusion thanking the audience.</li></ul>' },
        { t: 'Length & timing', b: '<p>Roughly 350–500 words in about 35–40 minutes. Quality and fitness for purpose beat length.</p>' }
      ],
      quiz: [
        { q: 'A formal letter beginning “Dear Sir/Madam” should end with', o: ['Yours sincerely', 'Yours faithfully', 'Cheers', 'Kind regards only'], a: 1, x: 'Unnamed recipient → faithfully.' },
        { q: 'A report typically includes', o: ['Stage directions', 'Findings and recommendations', 'A rhyming scheme', 'Only a title'], a: 1, x: 'Structured findings + recommendations.' },
        { q: 'The most important thing when reading the Question B task is', o: ['Word count only', 'Format, audience and purpose', 'Using difficult vocabulary', 'Writing about yourself'], a: 1, x: 'Fitness for purpose.' },
        { q: 'Question B is worth', o: ['20 marks', '50 marks', '100 marks', '30 marks'], a: 1, x: '50 marks.' }
      ] },

    { id: 'single-text', title: 'Single Text (Othello focus)', paper: 'P2', levels: ['H', 'O'], weight: { H: 15, O: 15 }, freq: 10,
      summary: 'In-depth study of one text. 2027 HL single texts include Othello, Hamnet, The Great Gatsby, Dracula and Girl on an Altar.',
      examTip: 'Questions usually take a stance (“To what extent do you agree…?”). Agree, disagree or partially agree — but argue it throughout with key moments.',
      lessons: [
        { t: 'Othello: the essentials', b: '<p>Venice then Cyprus. Othello, a Moorish general, marries Desdemona. Iago, passed over for promotion in favour of Cassio, manipulates Othello into believing Desdemona is unfaithful, using a handkerchief as “proof”. Othello kills Desdemona, learns the truth from Emilia, and kills himself.</p>' },
        { t: 'Major themes', b: '<ul><li><b>Jealousy</b> — “the green-eyed monster”.</li><li><b>Appearance vs reality</b> — “honest Iago”; “I am not what I am”.</li><li><b>Race and otherness</b> — Othello as outsider in Venice.</li><li><b>Manipulation & language</b> — Iago’s soliloquies reveal his plotting.</li><li><b>Love and trust</b>.</li></ul>' },
        { t: 'Answering a character question', b: '<p>Take a clear position in the introduction. Each paragraph = one key point backed by a key moment and a short quotation. Track how the character <b>changes</b> across the play.</p>' },
        { t: 'Key moments to know cold', b: '<p>Opening night scene with Brabantio; Othello’s speech to the Senate; the temptation scene (Act 3, Scene 3); the handkerchief; the murder scene; Othello’s final speech (“one that loved not wisely but too well”).</p>' }
      ],
      quiz: [
        { q: 'Who says “I am not what I am”?', o: ['Othello', 'Cassio', 'Iago', 'Roderigo'], a: 2, x: 'Iago, Act 1 Scene 1 — appearance vs reality.' },
        { q: 'What object does Iago use as false “proof” of Desdemona’s infidelity?', o: ['A ring', 'A letter', 'A handkerchief', 'A locket'], a: 2, x: 'The handkerchief, Othello’s first gift to her.' },
        { q: 'Who reveals the truth about Iago’s plot at the end?', o: ['Cassio', 'Emilia', 'Bianca', 'Lodovico'], a: 1, x: 'Emilia, Iago’s wife.' },
        { q: 'Why does Iago claim to resent Othello at the start?', o: ['Othello stole his money', 'Cassio was promoted to lieutenant over him', 'Othello insulted Emilia publicly', 'He loves Desdemona'], a: 1, x: 'Cassio’s promotion is the opening grievance.' },
        { q: 'The best way to answer “To what extent do you agree…?” is', o: ['Retell the plot', 'Take a clear stance and argue it with key moments', 'List quotations', 'Avoid committing'], a: 1, x: 'Argument, not summary.' }
      ] },

    { id: 'comparative', title: 'Comparative Study', paper: 'P2', levels: ['H', 'O'], weight: { H: 17.5, O: 17.5 }, freq: 10,
      summary: 'Comparing three texts by a mode. 2027 HL modes: Theme or Issue; Cultural Context; General Vision & Viewpoint. OL: Theme; Social Setting; Relationships.',
      examTip: 'The biggest Paper 2 question (70 marks). The marks are for COMPARING — use linking phrases in every paragraph, not three separate mini-essays.',
      lessons: [
        { t: 'The modes for 2027', b: '<p><b>Higher</b>: Theme or Issue · Cultural Context · General Vision and Viewpoint.</p><p><b>Ordinary</b>: Theme · Social Setting · Relationships.</p>' },
        { t: 'Question formats', b: '<p>Expect either a single 70-mark essay or a 30 + 40 split, where the 40 compares two texts. Know which key moments you will use from each text for each mode.</p>' },
        { t: 'Linking vocabulary', b: '<p>“Similarly…”, “In stark contrast…”, “This is echoed in…”, “Unlike the bleak world of…”, “Both texts suggest…”. Aim for comparison in almost every paragraph.</p>' },
        { t: 'General Vision & Viewpoint', b: '<p>Is the text’s outlook on life optimistic, pessimistic or mixed? What shapes that impression — endings, key moments, the fate of characters? Track how the vision shifts.</p>' },
        { t: 'Cultural Context', b: '<p>The world of the text: power, class, gender roles, religion, family, money, freedom. How do these values shape characters’ choices?</p>' }
      ],
      quiz: [
        { q: 'Which is a 2027 Higher Level comparative mode?', o: ['Literary Genre', 'Cultural Context', 'Relationships', 'Social Setting'], a: 1, x: 'HL 2027: Theme or Issue, Cultural Context, General Vision and Viewpoint.' },
        { q: 'Which is a 2027 Ordinary Level comparative mode?', o: ['General Vision & Viewpoint', 'Cultural Context', 'Relationships', 'Literary Genre'], a: 2, x: 'OL 2027: Theme, Social Setting, Relationships.' },
        { q: 'The comparative is worth', o: ['50 marks', '60 marks', '70 marks', '100 marks'], a: 2, x: '70 marks — the largest Paper 2 question.' },
        { q: 'The most common weakness in comparative answers is', o: ['Too many comparisons', 'Writing about each text separately without linking', 'Too short quotations', 'Using key moments'], a: 1, x: 'Compare throughout.' },
        { q: 'General Vision & Viewpoint is mainly about', o: ['The author’s biography', 'The outlook on life the text presents', 'Grammar and syntax', 'Who the narrator is'], a: 1, x: 'Optimistic/pessimistic outlook.' }
      ] },

    { id: 'unseen', title: 'Unseen Poetry', paper: 'P2', levels: ['H', 'O'], weight: { H: 5, O: 5 }, freq: 10,
      summary: 'Responding to a poem you have not studied: theme, imagery, tone, sound and your personal response.',
      examTip: 'Only 20 marks — spend about 20 minutes. Make 3–4 focused points with quotations.',
      lessons: [
        { t: 'A 4-step method', b: '<ol><li>Read twice — once for sense, once for technique.</li><li>What is it about? (theme)</li><li>How does it feel? (tone/mood)</li><li>How is that achieved? (imagery, sound, structure)</li></ol>' },
        { t: 'Technique toolkit', b: '<p>Metaphor, simile, personification, alliteration, assonance, onomatopoeia, enjambment, caesura, repetition, contrast, rhyme, volta (turn).</p>' }
      ],
      quiz: [
        { q: 'A line that runs on into the next without punctuation is', o: ['Caesura', 'Enjambment', 'Assonance', 'Volta'], a: 1, x: 'Enjambment.' },
        { q: 'Repetition of vowel sounds is', o: ['Alliteration', 'Assonance', 'Sibilance', 'Onomatopoeia'], a: 1, x: 'Assonance.' },
        { q: 'The unseen poem is worth', o: ['10 marks', '20 marks', '50 marks', '30 marks'], a: 1, x: '20 marks.' },
        { q: 'A pause in the middle of a line is a', o: ['Caesura', 'Stanza', 'Couplet', 'Refrain'], a: 0, x: 'Caesura.' }
      ] },

    { id: 'poetry', title: 'Prescribed Poetry (2027 poets)', paper: 'P2', levels: ['H', 'O'], weight: { H: 12.5, O: 12.5 }, freq: 10,
      summary: 'HL 2027 poets: Bishop, Dickinson, Donne, Kavanagh, Mahon, Meehan, Rich, Yeats. Four appear on the paper; you write one essay.',
      examTip: 'HL questions give a statement about a poet’s themes AND style. Address both parts, refer to several poems, and give your personal response.',
      lessons: [
        { t: 'Elizabeth Bishop', b: '<p>Precise, painterly observation; travel and place; loss and childhood; moments of epiphany. <i>The Fish</i> (respect and release), <i>Filling Station</i> (unexpected care in a dirty place), <i>The Prodigal</i> (shame and return).</p>' },
        { t: 'Emily Dickinson', b: '<p>Death, the mind, despair and hope; dashes, slant rhyme, capitalisation, compressed hymn-like stanzas. <i>I felt a Funeral, in my Brain</i>; <i>I heard a Fly buzz – when I died</i>.</p>' },
        { t: 'John Donne', b: '<p>Metaphysical poet: witty arguments, extended metaphors (conceits), love and faith, a dramatic speaking voice. <i>The Flea</i>; <i>Song: Go and catch a falling star</i>.</p>' },
        { t: 'Patrick Kavanagh', b: '<p>Rural Monaghan, the sacred in the ordinary, childhood memory, the tension between poetry and farm life. <i>Shancoduff</i>; <i>A Christmas Childhood</i>.</p>' },
        { t: 'Derek Mahon', b: '<p>Displacement, history and ruin, the outsider, Northern Ireland, an ironic detached voice. <i>Grandfather</i>; <i>After the Titanic</i>; <i>Antarctica</i>.</p>' },
        { t: 'Paula Meehan', b: '<p>Inner-city Dublin, women’s lives, family and memory, social justice, lyrical and compassionate. <i>Buying Winkles</i>; <i>Hearth Lesson</i>; <i>Prayer for the Children of Longing</i>.</p>' },
        { t: 'Adrienne Rich', b: '<p>Feminism, power and oppression in relationships, the cost of patriarchy, a clear argumentative voice. <i>Aunt Jennifer’s Tigers</i>; <i>Uncle Speaks in the Drawing Room</i>.</p>' },
        { t: 'W.B. Yeats', b: '<p>Irish nationalism and history, ageing and change, art and permanence, Romantic imagery. <i>The Lake Isle of Innisfree</i>; <i>The Wild Swans at Coole</i>; <i>An Irish Airman Foresees his Death</i>.</p>' }
      ],
      quiz: [
        { q: 'How many of the eight HL poets typically appear on the paper?', o: ['2', '4', '6', '8'], a: 1, x: 'Four appear, so prepare at least five or six.' },
        { q: 'Which poet is known for dashes and slant rhyme?', o: ['Yeats', 'Kavanagh', 'Dickinson', 'Mahon'], a: 2, x: 'Emily Dickinson.' },
        { q: '“The Flea” is an example of which poet’s witty conceits?', o: ['Donne', 'Rich', 'Bishop', 'Meehan'], a: 0, x: 'John Donne, a Metaphysical poet.' },
        { q: '“Aunt Jennifer’s Tigers” explores', o: ['Rural childhood', 'Oppression within marriage', 'Ocean travel', 'Irish nationalism'], a: 1, x: 'Adrienne Rich — patriarchy and power.' },
        { q: 'Monaghan farm life and the sacred in the ordinary are central to', o: ['Kavanagh', 'Mahon', 'Donne', 'Dickinson'], a: 0, x: 'Patrick Kavanagh.' },
        { q: 'Which poet wrote “The Fish”?', o: ['Meehan', 'Bishop', 'Yeats', 'Rich'], a: 1, x: 'Elizabeth Bishop.' }
      ] }
  ]
});
