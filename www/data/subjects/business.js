/* Leaving Certificate Business — NEW SPECIFICATION (first examined June 2027)
 * Assessment: Business Alive Investigative Study (AAC, 200 marks) 40% + written exam 300 marks 60%.
 * Written HL (SEC sample papers): 2h 30m; Q1 case study 90 marks compulsory + any 3 of Q2–Q5 at 70 marks.
 * Strands: Exploring the Business Environment · Understanding Enterprise · Leading in Business ·
 *          Being Informed and Making Informed Decisions (+ unifying strand: Investigating Business).
 * freq = how often closely-related content appeared on the previous-syllabus papers.
 */
LC.register({
  id: 'business', name: 'Business', icon: '€', color: '#b7791f',
  specNote: 'New specification: the June 2027 exam is the first under it. Expect a compulsory case study and applied, decision-making questions (force field analysis, stakeholder mapping, cost-benefit analysis).',
  exam: {
    H: { total: 500, papers: [
      { name: 'Business Alive Investigative Study (AAC)', marks: 200, time: 'Coursework', coursework: true, parts: [
        { name: 'Introduction', marks: 20, note: '≈200 words' },
        { name: 'Investigation, Findings, Analysis & Evaluation', marks: 100, note: '≈1,000 words' },
        { name: 'Conclusions', marks: 30, note: '≈300 words' },
        { name: 'Overall coherence', marks: 50, note: 'Assessed across the whole report (max 1,500 words)' }] },
      { name: 'Written Examination', marks: 300, time: '2h 30m', parts: [
        { name: 'Q1 – The Business World (case study)', marks: 90, note: 'Compulsory' },
        { name: 'Questions 2–5', marks: 210, note: 'Answer any 3 of 4 (70 marks each)' }] }
    ] },
    O: { total: 500, papers: [
      { name: 'Business Alive Investigative Study (AAC)', marks: 200, time: 'Coursework', coursework: true, parts: [
        { name: 'Investigative study', marks: 200, note: 'Common brief with Higher Level' }] },
      { name: 'Written Examination', marks: 300, time: '', parts: [
        { name: 'Written paper', marks: 300, note: 'See the SEC Ordinary Level sample papers for layout' }] }
    ] }
  },
  markingNotes: [
    'Business marking rewards the “state + explain + example” pattern: a heading alone earns little; an explained point with an applied example earns full marks.',
    'Q1 is a case study: every answer must refer back to the business in the case. Generic answers lose application marks.',
    '“Evaluate” and “discuss” questions need a judgement. End with one line: “Overall, I believe… because…”.',
    'The coursework (Business Alive) is 40%: the 100-mark analysis section is where most marks are won or lost.'
  ],
  sections: [
    { id: 'aac', title: 'Business Alive Investigative Study (coursework)', paper: 'AAC', levels: ['H', 'O'], coursework: true, weight: { H: 40, O: 40 }, freq: 0,
      summary: 'The 40% coursework report, based on a common SEC brief.',
      examTip: 'The sample brief allocated 100 of 200 marks to investigation, findings, analysis and evaluation. Use primary and secondary research and evaluate, don’t just describe.',
      lessons: [
        { t: 'Report structure (sample brief)', b: '<ul><li>Introduction — 20 marks (≈200 words)</li><li>Investigation & Findings, Analysis & Evaluation — 100 marks (≈1,000 words)</li><li>Conclusions — 30 marks (≈300 words)</li><li>Overall coherence — 50 marks</li><li>References — required, not separately marked. Max 1,500 words, 10 images.</li></ul>' }
      ],
      quiz: [
        { q: 'Which section of the sample brief carries the most marks?', o: ['Introduction', 'Investigation, findings, analysis & evaluation', 'Conclusions', 'References'], a: 1, x: '100 of 200 marks.' },
        { q: 'The word limit for the sample brief report was', o: ['800', '1,500', '3,000', 'No limit'], a: 1, x: '1,500 words, excluding tables, graphs and references.' }
      ] },

    { id: 'stakeholders', title: 'Stakeholders, Ethics & Sustainability', paper: 'Written', levels: ['H', 'O'], weight: { H: 6, O: 6 }, freq: 10,
      summary: 'Key stakeholders and their interests, stakeholder mapping, conflict, CSR, ethics and sustainable practices.',
      examTip: 'The sample Q1 asked for stakeholder mapping and four sustainable operating practices. Practise applying both to a case business.',
      lessons: [
        { t: 'Who are the stakeholders?', b: '<p>Owners/investors, employees, customers, suppliers, the local community, government, banks/lenders, interest groups. Each has different interests (profit, pay, quality, prompt payment, jobs, tax).</p>' },
        { t: 'Stakeholder mapping', b: '<p>Map stakeholders by <b>power</b> and <b>interest</b>: high/high → manage closely; high power/low interest → keep satisfied; low power/high interest → keep informed; low/low → monitor.</p>' },
        { t: 'Sustainability & CSR', b: '<p>Examples: energy-efficient equipment, reducing food/packaging waste, local sourcing, fair pay, recycling and the circular economy. Benefits: lower costs, reputation, compliance, attracting staff.</p>' }
      ],
      quiz: [
        { q: 'A stakeholder with high power and high interest should be', o: ['Monitored only', 'Managed closely', 'Kept informed only', 'Ignored'], a: 1, x: 'Key players.' },
        { q: 'Which is NOT a stakeholder of a local restaurant?', o: ['Suppliers', 'Employees', 'The local community', 'A competitor’s customers in another country'], a: 3, x: 'No meaningful interest in the business.' },
        { q: 'Corporate social responsibility means', o: ['Maximising profit only', 'Acting responsibly towards society and the environment', 'Avoiding all tax', 'Being state-owned'], a: 1, x: 'CSR.' },
        { q: 'The main interest of lenders is usually', o: ['Product quality', 'Repayment of loans with interest', 'Local jobs', 'Advertising'], a: 1, x: 'Getting their money back.' }
      ] },

    { id: 'forms', title: 'Forms of Business, Regulation & Governance', paper: 'Written', levels: ['H', 'O'], weight: { H: 4, O: 4 }, freq: 9,
      summary: 'Sole traders, partnerships, private and public limited companies, co-operatives, state enterprises; limited liability; corporate governance.',
      examTip: 'Compare forms using liability, control, finance and continuity. A table in your notes is ideal.',
      lessons: [
        { t: 'Liability is the key idea', b: '<p><b>Unlimited liability</b> (sole trader, ordinary partnership): owners’ personal assets are at risk. <b>Limited liability</b> (companies): shareholders can lose only what they invested.</p>' },
        { t: 'Companies', b: '<p>Private limited company (LTD): registered with the Companies Registration Office (CRO), shares not sold publicly. PLC: can sell shares to the public on a stock exchange — more capital but more regulation and disclosure.</p>' },
        { t: 'Governance', b: '<p>Board of directors oversees management on behalf of shareholders. Good governance = accountability, transparency, compliance with law and codes of conduct.</p>' }
      ],
      quiz: [
        { q: 'Which form has unlimited liability?', o: ['PLC', 'Private limited company', 'Sole trader', 'Co-operative'], a: 2, x: 'Personal assets at risk.' },
        { q: 'Irish companies register with the', o: ['CCPC', 'CRO', 'WRC', 'ECB'], a: 1, x: 'Companies Registration Office.' },
        { q: 'A PLC can', o: ['Not have shareholders', 'Sell shares to the public', 'Have only one owner by law', 'Avoid publishing accounts'], a: 1, x: 'Public share issue.' },
        { q: 'Limited liability means shareholders', o: ['Can lose personal assets', 'Lose only what they invested', 'Pay no tax', 'Run the company daily'], a: 1, x: 'Limited to investment.' }
      ] },

    { id: 'economy', title: 'Business & the Economy', paper: 'Written', levels: ['H', 'O'], weight: { H: 5, O: 6 }, freq: 10,
      summary: 'Economic indicators (inflation, unemployment, interest rates, exchange rates, GDP), the circular economy and their impact on business.',
      examTip: 'Sample papers asked for the impact of a minimum wage increase and economic indicators with the circular economy. Always link the indicator to a business consequence.',
      lessons: [
        { t: 'Key indicators', b: '<ul><li><b>Inflation</b>: rising prices → higher costs, wage demands.</li><li><b>Interest rates</b> (set for the euro area by the <b>ECB</b>): higher rates → dearer borrowing, lower spending.</li><li><b>Unemployment</b>: affects demand and labour availability.</li><li><b>Exchange rates</b>: a stronger euro makes Irish exports dearer abroad.</li></ul>' },
        { t: 'Minimum wage increase', b: '<p>For employers: higher labour costs, pressure on margins, possible price rises or fewer hours. For workers and the economy: higher incomes, more spending, better morale and retention.</p>' },
        { t: 'Circular economy', b: '<p>Keep resources in use for as long as possible: design for reuse, repair, refurbish, recycle; waste becomes an input. Contrasts with the “take–make–dispose” linear model.</p>' }
      ],
      quiz: [
        { q: 'Who sets interest rates for the euro area?', o: ['Central Bank of Ireland', 'European Central Bank', 'The Dáil', 'Commercial banks'], a: 1, x: 'The ECB.' },
        { q: 'A stronger euro makes Irish exports', o: ['Cheaper abroad', 'More expensive abroad', 'Unaffected', 'Tax-free'], a: 1, x: 'Foreign buyers need more of their currency.' },
        { q: 'A likely impact of a minimum wage increase on a restaurant is', o: ['Lower costs', 'Higher labour costs', 'Lower prices for food', 'Fewer customers by law'], a: 1, x: 'Wages are a large cost.' },
        { q: 'The circular economy aims to', o: ['Increase waste', 'Keep resources in use for longer', 'Ban recycling', 'Use only new materials'], a: 1, x: 'Reduce, reuse, recycle.' }
      ] },

    { id: 'eu-policy', title: 'National & EU Policy', paper: 'Written', levels: ['H', 'O'], weight: { H: 5, O: 5 }, freq: 9,
      summary: 'Government’s role, supports for business (Enterprise Ireland, IDA, Local Enterprise Offices), EU institutions, directives and regulations.',
      examTip: 'Sample papers asked about EU directives and government supports. Know the difference between a directive and a regulation.',
      lessons: [
        { t: 'Supports for business', b: '<p><b>Local Enterprise Offices</b>: micro-enterprises (≤10 employees) — grants, mentoring, training. <b>Enterprise Ireland</b>: Irish companies scaling and exporting. <b>IDA Ireland</b>: attracting foreign direct investment.</p>' },
        { t: 'EU institutions', b: '<p><b>European Commission</b> proposes laws and enforces them. <b>European Parliament</b> and <b>Council of the EU</b> adopt laws. <b>Court of Justice</b> interprets EU law.</p>' },
        { t: 'Directives vs regulations', b: '<p><b>Regulation</b>: binding and applies directly in all member states immediately. <b>Directive</b>: sets a goal that each state must achieve through its own national law by a deadline.</p>' }
      ],
      quiz: [
        { q: 'Which body helps Irish companies grow and export?', o: ['IDA Ireland', 'Enterprise Ireland', 'CRO', 'CCPC'], a: 1, x: 'Enterprise Ireland.' },
        { q: 'IDA Ireland focuses on', o: ['Micro-businesses', 'Foreign direct investment', 'Consumer complaints', 'Tax collection'], a: 1, x: 'FDI.' },
        { q: 'Which EU institution proposes new laws?', o: ['Parliament', 'Commission', 'Court of Justice', 'ECB'], a: 1, x: 'Commission.' },
        { q: 'An EU directive', o: ['Applies directly without national law', 'Must be put into national law by each member state', 'Only applies to Ireland', 'Is advice only'], a: 1, x: 'Transposition required.' }
      ] },

    { id: 'global', title: 'Irish Business Globally', paper: 'Written', levels: ['H', 'O'], weight: { H: 5, O: 5 }, freq: 10,
      summary: 'Globalisation, multinational companies, trading blocs, international trade, exporting and digital global markets.',
      examTip: 'Sample paper Q2 and Q4 both touched globalisation and trading blocs. Give Irish examples.',
      lessons: [
        { t: 'Globalisation', b: '<p>Growing interdependence of economies through trade, investment, technology and communication. Opportunities: bigger markets, cheaper inputs. Threats: global competition, supply chain disruption.</p>' },
        { t: 'Trading blocs', b: '<p>Groups of countries that reduce trade barriers between members: the <b>EU</b> (single market), <b>USMCA</b> (US–Mexico–Canada), <b>ASEAN</b>, <b>Mercosur</b>.</p>' },
        { t: 'MNCs in Ireland', b: '<p>Benefits: jobs, tax revenue, skills, spending in local economy. Risks: profits repatriated, footloose (may relocate), dependence on a few large firms.</p>' }
      ],
      quiz: [
        { q: 'A trading bloc is', o: ['A single company', 'A group of countries reducing trade barriers between them', 'A tariff on imports', 'A stock exchange'], a: 1, x: 'E.g. the EU.' },
        { q: 'A risk of relying on MNCs is that they may be', o: ['Too small', 'Footloose', 'State-owned', 'Non-profit'], a: 1, x: 'They can relocate.' },
        { q: 'Which is a trading bloc?', o: ['IDA', 'ASEAN', 'CRO', 'WRC'], a: 1, x: 'Association of Southeast Asian Nations.' }
      ] },

    { id: 'enterprise', title: 'Enterprise & Idea Development', paper: 'Written', levels: ['H', 'O'], weight: { H: 4, O: 4 }, freq: 9,
      summary: 'Enterprise in its broadest sense, entrepreneurial skills, sources of ideas, screening, feasibility, prototype and test marketing.',
      examTip: 'Questions often ask for characteristics of an entrepreneur applied to a named person from a case — always link to evidence.',
      lessons: [
        { t: 'Enterprise skills', b: '<p>Innovation, risk-taking, decision-making, resilience, leadership, self-confidence, realism. Enterprise applies in schools, communities and charities — not only in business.</p>' },
        { t: 'From idea to launch', b: '<p>Idea generation (internal/external sources, brainstorming) → screening → concept development → feasibility study → prototype → test marketing → launch.</p>' }
      ],
      quiz: [
        { q: 'A feasibility study checks whether an idea is', o: ['Patented', 'Practical and profitable', 'Popular online', 'Legal only'], a: 1, x: 'Viability.' },
        { q: 'Which comes first?', o: ['Test marketing', 'Prototype', 'Idea screening', 'Launch'], a: 2, x: 'Screen early to drop weak ideas.' },
        { q: 'Enterprise can happen', o: ['Only in large companies', 'In businesses, communities and the public sector', 'Only in start-ups', 'Only abroad'], a: 1, x: 'Broad sense of enterprise.' }
      ] },

    { id: 'marketing', title: 'Business Planning & the Target Market', paper: 'Written', levels: ['H', 'O'], weight: { H: 6, O: 6 }, freq: 10,
      summary: 'Business plans, market research, segmentation, the marketing mix (4Ps), marketing strategies, digital marketing and ethics in marketing.',
      examTip: 'The Business Alive sample brief focused on ethical marketing — this topic is central to the new course.',
      lessons: [
        { t: 'Market research', b: '<p><b>Primary</b> (field): surveys, interviews, observation — specific but costly. <b>Secondary</b> (desk): CSO data, reports, online — cheap but may be dated.</p>' },
        { t: 'Segmentation', b: '<p>Dividing a market into groups by geography, demographics (age, income), psychographics (lifestyle) or behaviour — then choose a <b>target market</b>.</p>' },
        { t: 'The marketing mix', b: '<p><b>Product</b> (brand, packaging, USP) · <b>Price</b> (cost-plus, penetration, skimming, premium) · <b>Place</b> (channels of distribution) · <b>Promotion</b> (advertising, PR, sales promotion, social media).</p>' },
        { t: 'Ethical marketing', b: '<p>Honest claims (no misleading advertising), no greenwashing, responsible targeting of children, protecting customer data, fair pricing.</p>' }
      ],
      quiz: [
        { q: 'Surveys and interviews are', o: ['Secondary research', 'Primary research', 'Desk research', 'Test marketing'], a: 1, x: 'Field research.' },
        { q: 'Setting a high initial price for a new tech product is', o: ['Penetration pricing', 'Price skimming', 'Cost-plus', 'Loss leader'], a: 1, x: 'Skimming.' },
        { q: 'Dividing a market by age and income is', o: ['Geographic', 'Demographic', 'Behavioural', 'Psychographic'], a: 1, x: 'Demographic segmentation.' },
        { q: 'Making false environmental claims is called', o: ['Green marketing', 'Greenwashing', 'Branding', 'Sponsorship'], a: 1, x: 'Unethical.' },
        { q: 'Which is NOT one of the 4Ps?', o: ['Product', 'Price', 'People', 'Place'], a: 2, x: 'The 4Ps: Product, Price, Place, Promotion.' }
      ] },

    { id: 'finance', title: 'Operations & Finance', paper: 'Written', levels: ['H', 'O'], weight: { H: 6, O: 6 }, freq: 10,
      summary: 'Sources of finance by term, cash flow forecasting, borrowing, investment appraisal, cost-benefit analysis, production methods.',
      examTip: 'Match the source of finance to the purpose (short-term need → short-term source). Sample papers asked about appraisal and borrowing.',
      lessons: [
        { t: 'Sources by term', b: '<p><b>Short</b> (&lt;1 yr): bank overdraft, trade credit, accrued expenses, factoring. <b>Medium</b> (1–5 yrs): term loan, leasing, hire purchase. <b>Long</b> (5+ yrs): equity (shares), long-term loans/debentures, grants, retained earnings, venture capital.</p>' },
        { t: 'Cash flow forecast', b: '<p>Predicts money in and out month by month. Shows when an overdraft may be needed and helps secure finance from a bank.</p>' },
        { t: 'Cost-benefit analysis', b: '<p>Lists and values the costs and benefits (financial and non-financial) of a decision. Proceed if benefits outweigh costs.</p>' }
      ],
      quiz: [
        { q: 'Which is a short-term source of finance?', o: ['Equity', 'Bank overdraft', 'Debenture', 'Retained earnings'], a: 1, x: 'Overdraft.' },
        { q: 'Buying a delivery van over 3 years suits', o: ['Overdraft', 'Hire purchase or leasing', 'Trade credit', 'Accrued expenses'], a: 1, x: 'Medium-term asset → medium-term finance.' },
        { q: 'A cash flow forecast mainly helps a business to', o: ['Pay tax', 'Identify future cash shortages', 'Set prices', 'Hire staff'], a: 1, x: 'Plan liquidity.' },
        { q: 'Selling shares to raise money is', o: ['Debt finance', 'Equity finance', 'Trade credit', 'Leasing'], a: 1, x: 'Equity.' }
      ] },

    { id: 'growth-risk', title: 'Growth, Expansion & Managing Risk', paper: 'Written', levels: ['H', 'O'], weight: { H: 4, O: 4 }, freq: 9,
      summary: 'Organic and inorganic growth, mergers and takeovers, strategic alliances, franchising, risk management, insurance, digital currencies and subscription models.',
      examTip: 'Sample papers included risk management, digital currencies and crypto assets, subscription models and digital technology. Expect modern contexts.',
      lessons: [
        { t: 'Ways to grow', b: '<p><b>Organic</b>: new products, new markets, more outlets — slower, lower risk. <b>Inorganic</b>: merger, takeover (acquisition), strategic alliance, franchising — faster, more risk and cost.</p>' },
        { t: 'Risk management', b: '<p>Identify risks → assess likelihood and impact → reduce (safety training, cybersecurity, diversification) → transfer (insurance) → monitor.</p>' },
        { t: 'Digital business models', b: '<p><b>Subscription</b>: recurring revenue and customer loyalty, but needs constant value. <b>Digital currencies/crypto</b>: fast payments, but price volatility and regulatory risk.</p>' }
      ],
      quiz: [
        { q: 'Opening a new branch funded from profits is', o: ['Inorganic growth', 'Organic growth', 'A takeover', 'A merger'], a: 1, x: 'Internal growth.' },
        { q: 'Insurance is a way of', o: ['Avoiding risk', 'Transferring risk', 'Ignoring risk', 'Creating risk'], a: 1, x: 'Risk transfer.' },
        { q: 'A key advantage of a subscription model is', o: ['One-off sales', 'Predictable recurring revenue', 'No customers needed', 'Lower quality'], a: 1, x: 'Recurring revenue.' },
        { q: 'A major risk of holding crypto assets is', o: ['Price volatility', 'Too stable value', 'Government guarantee', 'No transactions possible'], a: 0, x: 'Volatility.' }
      ] },

    { id: 'leading', title: 'Leading & Managing People', paper: 'Written', levels: ['H', 'O'], weight: { H: 5, O: 5 }, freq: 10,
      summary: 'Management activities and skills, leadership styles, motivation theories, human resource management, managing change.',
      examTip: 'Maslow and McGregor are classic. Apply the theory to the case: “At The Local Table, staff need… so the manager should…”.',
      lessons: [
        { t: 'Management', b: '<p>Activities: <b>planning, organising, controlling</b>. Skills: <b>leading, motivating, communicating</b>.</p>' },
        { t: 'Leadership styles', b: '<p><b>Autocratic</b>: manager decides alone — fast, but can demotivate. <b>Democratic</b>: staff consulted — buy-in, slower. <b>Laissez-faire</b>: staff given freedom — suits experts.</p>' },
        { t: 'Motivation theories', b: '<p><b>Maslow</b>: physiological → safety → social → esteem → self-actualisation. <b>McGregor</b>: Theory X (workers dislike work, need control) vs Theory Y (workers seek responsibility).</p>' },
        { t: 'Managing change', b: '<p>Resistance comes from fear of the unknown, job loss, new skills. Overcome with communication, consultation, training, incentives and leading by example.</p>' }
      ],
      quiz: [
        { q: 'The top level of Maslow’s hierarchy is', o: ['Esteem', 'Social', 'Self-actualisation', 'Safety'], a: 2, x: 'Self-actualisation.' },
        { q: 'A Theory Y manager believes workers', o: ['Avoid work', 'Seek responsibility', 'Only want money', 'Need constant supervision'], a: 1, x: 'McGregor Theory Y.' },
        { q: 'Consulting staff before decisions is', o: ['Autocratic', 'Democratic', 'Laissez-faire', 'Bureaucratic'], a: 1, x: 'Democratic.' },
        { q: 'Which is a management activity?', o: ['Motivating', 'Controlling', 'Communicating', 'Leading'], a: 1, x: 'Activities: planning, organising, controlling.' },
        { q: 'A good way to reduce resistance to change is', o: ['Announce it suddenly', 'Consult and communicate early', 'Cut wages', 'Avoid training'], a: 1, x: 'Involve staff.' }
      ] },

    { id: 'communication', title: 'Communication', paper: 'Written', levels: ['H', 'O'], weight: { H: 3, O: 3 }, freq: 9,
      summary: 'Effective communication, methods (oral, written, visual, digital), barriers, meetings, and digital technology in the workplace.',
      examTip: 'Communication appeared in two sample-paper questions. Learn barriers and how to overcome them.',
      lessons: [
        { t: 'Choosing a method', b: '<p>Consider cost, speed, confidentiality, need for a record, and the audience. A dismissal → letter (record). Urgent → phone/video call.</p>' },
        { t: 'Barriers', b: '<p>Jargon, information overload, poor listening, cultural/language differences, technology failure, emotions. Fix: clear plain language, feedback, choosing the right channel.</p>' }
      ],
      quiz: [
        { q: 'Which is a barrier to effective communication?', o: ['Feedback', 'Jargon', 'Plain language', 'Active listening'], a: 1, x: 'Jargon confuses.' },
        { q: 'When a written record is needed, use', o: ['A phone call', 'A letter or email', 'A conversation in passing', 'Body language'], a: 1, x: 'Written record.' },
        { q: 'Feedback in communication helps to', o: ['Slow things down', 'Confirm the message was understood', 'Add jargon', 'Reduce speed'], a: 1, x: 'Two-way check.' }
      ] },

    { id: 'planning', title: 'Planning & Decision Tools', paper: 'Written', levels: ['H', 'O'], weight: { H: 4, O: 3 }, freq: 7,
      summary: 'Why plan; SWOT analysis; Force Field Analysis; cost-benefit analysis; mission statements; strategic, tactical and operational plans.',
      examTip: 'The sample Q1 asked for a Force Field Analysis. These decision tools are a signature of the new spec — practise drawing them.',
      lessons: [
        { t: 'Types of plan', b: '<p><b>Strategic</b> (long-term, whole business) → <b>tactical</b> (medium-term, departments) → <b>operational</b> (day to day). Mission statement = the purpose of the business.</p>' },
        { t: 'SWOT', b: '<p><b>Internal</b>: Strengths, Weaknesses. <b>External</b>: Opportunities, Threats.</p>' },
        { t: 'Force Field Analysis', b: '<p>(Kurt Lewin) List <b>driving forces</b> for a change and <b>restraining forces</b> against it; score each. If driving forces outweigh restraining forces, proceed — and plan to weaken the restraining ones.</p>' }
      ],
      quiz: [
        { q: 'Which SWOT elements are EXTERNAL?', o: ['Strengths & Weaknesses', 'Opportunities & Threats', 'Strengths & Threats', 'All four'], a: 1, x: 'O and T come from outside.' },
        { q: 'In Force Field Analysis, forces against a change are', o: ['Driving forces', 'Restraining forces', 'Market forces', 'Labour forces'], a: 1, x: 'Restraining.' },
        { q: 'A long-term plan for the whole business is', o: ['Operational', 'Tactical', 'Strategic', 'Contingency'], a: 2, x: 'Strategic.' }
      ] },

    { id: 'informed', title: 'Informed Consumer, Finance & Employee', paper: 'Written', levels: ['H', 'O'], weight: { H: 3, O: 4 }, freq: 10,
      summary: 'Consumer rights and the CCPC, making financial decisions (borrowing, APR, insurance), employee rights, employment equality and the WRC.',
      examTip: 'Sample Q4 asked about discrimination grounds. Learn all nine grounds and the steps for resolving a complaint.',
      lessons: [
        { t: 'Consumer rights', b: '<p>Goods must be of merchantable quality, fit for purpose and as described (Consumer Rights Act 2022). Complain first to the seller; then the <b>CCPC</b> (Competition and Consumer Protection Commission) for information; the <b>Small Claims</b> procedure for low-value disputes.</p>' },
        { t: 'Financial decisions', b: '<p>Compare loans by <b>APR</b> (annual percentage rate), total cost of credit and term. Savings: compare AER and access. Avoid borrowing for day-to-day spending.</p>' },
        { t: 'Being an informed employee', b: '<p>Nine discrimination grounds (Employment Equality Acts): <b>gender, civil status, family status, sexual orientation, religion, age, disability, race, membership of the Traveller community</b>. Disputes go to the <b>Workplace Relations Commission</b>; appeals to the <b>Labour Court</b>.</p>' }
      ],
      quiz: [
        { q: 'How many discrimination grounds are there under Irish employment equality law?', o: ['5', '7', '9', '12'], a: 2, x: 'Nine.' },
        { q: 'Which is NOT one of the grounds?', o: ['Age', 'Family status', 'Height', 'Religion'], a: 2, x: 'Height is not a listed ground.' },
        { q: 'Employment disputes are first heard by the', o: ['CCPC', 'Workplace Relations Commission', 'CRO', 'ECB'], a: 1, x: 'WRC.' },
        { q: 'The best single figure for comparing loan costs is', o: ['AER', 'APR', 'Inflation rate', 'GDP'], a: 1, x: 'APR.' },
        { q: 'Who should a consumer complain to first?', o: ['The manufacturer only', 'The seller (retailer)', 'The Gardaí', 'The ECB'], a: 1, x: 'Contract is with the seller.' }
      ] }
  ]
});
