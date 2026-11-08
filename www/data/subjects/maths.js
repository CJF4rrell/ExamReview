/* Leaving Certificate Mathematics — Higher & Ordinary Level
 * Exam structure: two 300-mark papers, 2h30 each (600 total).
 * HL (2025 pattern): Section A Concepts & Skills – answer 5 of 6 × 30 marks;
 *                    Section B Contexts & Applications – answer 3 of 4 × 50 marks.
 * weight = estimated share (%) of total exam marks a topic carries in a typical year.
 * freq   = estimated number of the last 10 exam years the topic was examined.
 */
LC.register({
  id: 'maths', name: 'Mathematics', icon: '∑', color: '#3b6fd8',
  exam: {
    H: { total: 600, papers: [
      { name: 'Paper 1', marks: 300, time: '2h 30m', parts: [
        { name: 'Section A – Concepts & Skills', marks: 150, note: 'Answer any 5 of 6 questions (30 marks each)' },
        { name: 'Section B – Contexts & Applications', marks: 150, note: 'Answer any 3 of 4 questions (50 marks each)' }] },
      { name: 'Paper 2', marks: 300, time: '2h 30m', parts: [
        { name: 'Section A – Concepts & Skills', marks: 150, note: 'Answer any 5 of 6 questions (30 marks each)' },
        { name: 'Section B – Contexts & Applications', marks: 150, note: 'Answer any 3 of 4 questions (50 marks each)' }] }
    ] },
    O: { total: 600, papers: [
      { name: 'Paper 1', marks: 300, time: '2h 30m', parts: [
        { name: 'Section A – Concepts & Skills', marks: 150, note: 'Shorter questions on core skills (check the current paper for the choice allowed)' },
        { name: 'Section B – Contexts & Applications', marks: 150, note: 'Longer, real-world problems' }] },
      { name: 'Paper 2', marks: 300, time: '2h 30m', parts: [
        { name: 'Section A – Concepts & Skills', marks: 150, note: 'Shorter questions on core skills' },
        { name: 'Section B – Contexts & Applications', marks: 150, note: 'Longer, real-world problems' }] }
    ] }
  },
  markingNotes: [
    'Marking schemes award marks on a scale (e.g. 0, low partial, high partial, full). A correct method with a slip still earns high partial credit — always show your work.',
    'Section B carries 50-mark questions that mix topics (e.g. a context question using sequences AND calculus). Practise reading long questions.',
    'Choice was increased after 2020: you can drop one question in each section of each paper. Use it — pick your weakest topic to sacrifice, not your strongest.',
    'Chief Examiner reports repeatedly flag weak answers on “justify”, “explain” and “interpret” parts. A one-line reason in words often earns the final marks.'
  ],
  sections: [
    { id: 'algebra', title: 'Algebra & Equations', paper: 'P1', levels: ['H', 'O'], weight: { H: 9, O: 11 }, freq: 10,
      summary: 'Factorising, solving linear/quadratic/cubic equations, simultaneous equations, inequalities, surds and indices.',
      examTip: 'Appears every year, usually in Section A Q1/Q5 and threaded through Section B. The factor theorem + solving a cubic is a favourite.',
      lessons: [
        { t: 'Quadratics three ways', b: '<p>Solve <b>ax² + bx + c = 0</b> by factorising, by the formula <b>x = (−b ± √(b² − 4ac)) / 2a</b>, or by completing the square.</p><ul><li><b>b² − 4ac &gt; 0</b>: two real roots</li><li><b>= 0</b>: one repeated root</li><li><b>&lt; 0</b>: no real roots (complex roots at HL)</li></ul>' },
        { t: 'Factor theorem & cubics', b: '<p>If <b>f(k) = 0</b> then <b>(x − k)</b> is a factor of f(x). Try ±factors of the constant term. Then divide (long division or matching coefficients) to get a quadratic and solve it.</p>' },
        { t: 'Simultaneous equations', b: '<p>Linear & linear: elimination. Linear & quadratic: rearrange the linear equation for one variable and <b>substitute</b> into the quadratic. Expect two solution pairs.</p><p>Three variables (HL): eliminate the same variable twice to get two equations in two unknowns.</p>' },
        { t: 'Inequalities & modulus', b: '<p>Multiplying or dividing by a negative <b>flips</b> the sign. For quadratic inequalities, find the roots, sketch the parabola and read off where it is above/below the axis.</p><p><b>|x − a| &lt; b</b> ⇔ <b>a − b &lt; x &lt; a + b</b>. (HL: you can also square both sides.)</p>', lv: 'H' },
        { t: 'Indices & logs', b: '<p>aᵐ·aⁿ = aᵐ⁺ⁿ, (aᵐ)ⁿ = aᵐⁿ, a⁻ⁿ = 1/aⁿ, a^(1/n) = ⁿ√a.</p><p>log(xy) = log x + log y, log(x/y) = log x − log y, log xⁿ = n log x, and <b>logₐ x = y ⇔ aʸ = x</b>.</p>' }
      ],
      quiz: [
        { q: 'If f(x) = x³ − 6x² + 11x − 6, which is a factor?', o: ['x + 1', 'x − 1', 'x + 2', 'x − 4'], a: 1, x: 'f(1) = 1 − 6 + 11 − 6 = 0, so (x − 1) is a factor.' },
        { q: 'The discriminant of 2x² + 3x + 5 = 0 is:', o: ['49', '−31', '31', '−49'], a: 1, x: 'b² − 4ac = 9 − 40 = −31, so there are no real roots.' },
        { q: 'Solve: −3x + 2 > 11', o: ['x > −3', 'x < −3', 'x > 3', 'x < 3'], a: 1, x: '−3x > 9 → divide by −3 and flip the sign: x < −3.' },
        { q: 'Simplify 2⁵ × 2⁻² ÷ 2', o: ['2²', '2³', '2⁴', '2'], a: 0, x: '5 − 2 − 1 = 2, so the answer is 2².' },
        { q: 'log₂ 32 =', o: ['4', '5', '16', '6'], a: 1, x: '2⁵ = 32.' },
        { q: 'Solve |x − 3| < 2', o: ['1 < x < 5', 'x < 5', '−5 < x < 5', 'x > 1'], a: 0, x: '3 − 2 < x < 3 + 2.', lv: 'H' }
      ] },

    { id: 'complex', title: 'Complex Numbers', paper: 'P1', levels: ['H', 'O'], weight: { H: 7, O: 5 }, freq: 10,
      summary: 'Arithmetic with a + bi, the Argand diagram, modulus, conjugates, division; at HL polar form and De Moivre’s theorem.',
      examTip: 'Usually a full 30-mark Section A question. At HL, De Moivre’s theorem (powers and roots) has appeared in most recent years, including 2025.',
      lessons: [
        { t: 'The basics', b: '<p><b>i² = −1</b>. Add/subtract real and imaginary parts separately. Multiply like brackets, replacing i² with −1.</p><p>Conjugate of z = a + bi is <b>z̄ = a − bi</b>. Modulus <b>|z| = √(a² + b²)</b> is the distance from the origin on the Argand diagram.</p>' },
        { t: 'Division', b: '<p>Multiply top and bottom by the <b>conjugate of the bottom</b>: (3 + 2i)/(1 − i) × (1 + i)/(1 + i) = (1 + 5i)/2.</p>' },
        { t: 'Transformations', b: '<p>Multiplying by <b>i</b> rotates a point 90° anticlockwise about the origin. Adding a complex number is a translation. Multiplying by a real k is a dilation.</p>' },
        { t: 'Polar form & De Moivre', b: '<p>z = r(cos θ + i sin θ), r = |z|, θ = arg z (check the quadrant!).</p><p><b>De Moivre:</b> [r(cos θ + i sin θ)]ⁿ = rⁿ(cos nθ + i sin nθ). For roots, add 2kπ to θ before dividing by n.</p>', lv: 'H' }
      ],
      quiz: [
        { q: '(2 + 3i)(1 − i) =', o: ['5 + i', '−1 + i', '2 − 3i', '5 − i'], a: 0, x: '2 − 2i + 3i − 3i² = 2 + i + 3 = 5 + i.' },
        { q: '|3 − 4i| =', o: ['7', '1', '5', '25'], a: 2, x: '√(9 + 16) = 5.' },
        { q: 'Multiplying a complex number by i on the Argand diagram is a:', o: ['Reflection in the real axis', 'Rotation of 90° anticlockwise', 'Translation', 'Rotation of 180°'], a: 1, x: 'i·(a + bi) = −b + ai, a 90° anticlockwise rotation.' },
        { q: 'The conjugate of −2 + 7i is:', o: ['2 − 7i', '−2 − 7i', '2 + 7i', '7 − 2i'], a: 1, x: 'Change the sign of the imaginary part only.' },
        { q: 'i⁶ =', o: ['1', 'i', '−1', '−i'], a: 2, x: 'i⁴ = 1, so i⁶ = i² = −1.' },
        { q: 'By De Moivre, (cos 20° + i sin 20°)³ =', o: ['cos 60° + i sin 60°', 'cos 23° + i sin 23°', '3cos 20° + 3i sin 20°', 'cos 20° + i sin 60°'], a: 0, x: 'Multiply the angle by the power.', lv: 'H' }
      ] },

    { id: 'sequences', title: 'Sequences & Series', paper: 'P1', levels: ['H', 'O'], weight: { H: 6, O: 6 }, freq: 9,
      summary: 'Arithmetic and geometric sequences, sums, patterns; at HL infinite geometric series and recurring decimals.',
      examTip: 'Loves a Section B context (2025 HL Q7 was built around a spider web pattern). Know Tₙ and Sₙ for both types cold.',
      lessons: [
        { t: 'Arithmetic', b: '<p>Constant difference d. <b>Tₙ = a + (n − 1)d</b>, <b>Sₙ = n/2 [2a + (n − 1)d]</b>.</p><p>Test: T₂ − T₁ = T₃ − T₂.</p>' },
        { t: 'Geometric', b: '<p>Constant ratio r. <b>Tₙ = arⁿ⁻¹</b>, <b>Sₙ = a(1 − rⁿ)/(1 − r)</b>.</p><p>Test: T₂/T₁ = T₃/T₂.</p>' },
        { t: 'Quadratic patterns', b: '<p>If the <b>second</b> differences are constant, Tₙ = an² + bn + c. Half the second difference gives a.</p>' },
        { t: 'Infinite series', b: '<p>If |r| &lt; 1, <b>S∞ = a/(1 − r)</b>. Recurring decimal 0.4545… = 0.45 + 0.0045 + … = 0.45/(1 − 0.01) = 5/11.</p>', lv: 'H' }
      ],
      quiz: [
        { q: 'For 5, 9, 13, 17, …, T₂₀ =', o: ['81', '85', '80', '77'], a: 0, x: 'a = 5, d = 4: 5 + 19×4 = 81.' },
        { q: 'Sum of the first 10 terms of 2, 4, 6, …', o: ['100', '110', '120', '90'], a: 1, x: 'S₁₀ = 10/2 (4 + 18) = 110.' },
        { q: 'The common ratio of 3, −6, 12, … is', o: ['2', '−2', '3', '−3'], a: 1, x: '−6 ÷ 3 = −2.' },
        { q: 'A sequence with constant second differences is:', o: ['Arithmetic', 'Geometric', 'Quadratic', 'Exponential'], a: 2, x: 'Constant second difference → quadratic Tₙ.' },
        { q: 'S∞ of 8 + 4 + 2 + … =', o: ['14', '16', '12', 'Does not exist'], a: 1, x: 'a = 8, r = ½: 8/(1 − ½) = 16.', lv: 'H' }
      ] },

    { id: 'functions', title: 'Functions & Graphs', paper: 'P1', levels: ['H', 'O'], weight: { H: 6, O: 7 }, freq: 9,
      summary: 'Function notation, domain/range, composite and inverse functions, graphing linear, quadratic, cubic, exponential and log functions.',
      examTip: 'Often combined with calculus. Expect to sketch, read roots/turning points from graphs and interpret in context.',
      lessons: [
        { t: 'Notation', b: '<p>f(3) means substitute 3 for x. <b>Domain</b> = allowed inputs; <b>range</b> = outputs actually produced.</p>' },
        { t: 'Composite functions', b: '<p><b>f∘g(x) = f(g(x))</b>: do g first, then f. Usually f(g(x)) ≠ g(f(x)).</p>' },
        { t: 'Inverse functions', b: '<p>Swap x and y, then solve for y. The graph of f⁻¹ is the reflection of f in <b>y = x</b>. Only one-to-one (injective) functions have inverses.</p>' },
        { t: 'Exponentials & logs', b: '<p>y = aˣ (a &gt; 1) grows quickly and passes through (0, 1). y = log x is its inverse and passes through (1, 0). e ≈ 2.718; ln x = logₑ x.</p>' }
      ],
      quiz: [
        { q: 'If f(x) = 2x − 1 and g(x) = x², then f(g(3)) =', o: ['25', '17', '35', '9'], a: 1, x: 'g(3) = 9, f(9) = 17.' },
        { q: 'The inverse of f(x) = 3x + 6 is', o: ['(x − 6)/3', '3x − 6', 'x/3 + 6', '1/(3x + 6)'], a: 0, x: 'y = 3x + 6 → x = (y − 6)/3.' },
        { q: 'The graph of f⁻¹ is a reflection of f in the line', o: ['y = 0', 'x = 0', 'y = x', 'y = −x'], a: 2, x: 'Inverse graphs mirror in y = x.' },
        { q: 'Every graph of y = aˣ (a > 0) passes through', o: ['(1, 0)', '(0, 1)', '(0, 0)', '(1, 1)'], a: 1, x: 'a⁰ = 1.' },
        { q: 'A cubic function can have at most how many real roots?', o: ['1', '2', '3', '4'], a: 2, x: 'A polynomial of degree n has at most n real roots.' }
      ] },

    { id: 'diff', title: 'Differential Calculus', paper: 'P1', levels: ['H', 'O'], weight: { H: 10, O: 9 }, freq: 10,
      summary: 'Differentiation rules, slopes of tangents, turning points, increasing/decreasing, rates of change and optimisation.',
      examTip: 'The single most-examined topic on Paper 1, every year, in both sections. Optimisation and rates-of-change contexts dominate Section B.',
      lessons: [
        { t: 'Rules', b: '<ul><li>Power: d/dx(xⁿ) = nxⁿ⁻¹</li><li>Product: (uv)′ = u′v + uv′</li><li>Quotient: (u/v)′ = (vu′ − uv′)/v²</li><li>Chain: d/dx f(g(x)) = f′(g(x))·g′(x)</li></ul><p>HL also: d/dx(sin x) = cos x, d/dx(eˣ) = eˣ, d/dx(ln x) = 1/x.</p>' },
        { t: 'Tangents', b: '<p>Slope of tangent at x = a is <b>f′(a)</b>. Then use y − y₁ = m(x − x₁).</p>' },
        { t: 'Turning points', b: '<p>Set <b>f′(x) = 0</b>. Use f″(x): <b>&lt; 0 → maximum</b>, <b>&gt; 0 → minimum</b>. Point of inflection where f″(x) = 0 (HL).</p>' },
        { t: 'Rates & optimisation', b: '<p>“Rate of change” = derivative. For max/min problems: write the quantity as a function of ONE variable, differentiate, set to 0, and check it is a max/min. Always answer in context with units.</p>' },
        { t: 'Differentiation from first principles', b: '<p>f′(x) = lim (h→0) [f(x + h) − f(x)]/h. Expect this for a linear or quadratic function.</p>' }
      ],
      quiz: [
        { q: 'd/dx (4x³ − 2x + 7) =', o: ['12x² − 2', '12x² + 7', '4x² − 2', '12x³ − 2'], a: 0, x: 'Power rule; constants vanish.' },
        { q: 'The slope of y = x² − 3x at x = 2 is', o: ['−2', '1', '−1', '4'], a: 1, x: 'dy/dx = 2x − 3 = 1.' },
        { q: 'If f′(a) = 0 and f″(a) = −4, the point at x = a is a', o: ['Local minimum', 'Local maximum', 'Point of inflection', 'Root'], a: 1, x: 'Negative second derivative → maximum.' },
        { q: 'd/dx (2x + 1)⁵ =', o: ['5(2x + 1)⁴', '10(2x + 1)⁴', '10(2x + 1)⁵', '(2x + 1)⁴'], a: 1, x: 'Chain rule: 5(2x + 1)⁴ × 2.' },
        { q: 'A function is increasing where', o: ['f(x) > 0', 'f′(x) > 0', 'f″(x) > 0', 'f′(x) = 0'], a: 1, x: 'Positive slope → increasing.' },
        { q: 'd/dx (x·eˣ) =', o: ['eˣ', 'xeˣ', 'eˣ(1 + x)', 'eˣ + x'], a: 2, x: 'Product rule: eˣ + xeˣ.', lv: 'H' }
      ] },

    { id: 'integration', title: 'Integral Calculus', paper: 'P1', levels: ['H', 'O'], weight: { H: 6, O: 4 }, freq: 9,
      summary: 'Antidifferentiation, definite integrals, area under and between curves, average value.',
      examTip: 'At HL appears most years (2025: average value of a function by integration). Remember + c for indefinite integrals.',
      lessons: [
        { t: 'Reverse the power rule', b: '<p>∫xⁿ dx = xⁿ⁺¹/(n + 1) + c (n ≠ −1). ∫eᵃˣ dx = (1/a)eᵃˣ + c. ∫1/x dx = ln|x| + c. ∫cos x dx = sin x + c, ∫sin x dx = −cos x + c.</p>' },
        { t: 'Definite integrals & area', b: '<p>∫ₐᵇ f(x) dx = F(b) − F(a). Area between a curve and the x-axis: integrate; if the region is <b>below</b> the axis the answer is negative — take the absolute value.</p>' },
        { t: 'Area between curves', b: '<p>Find intersection points, then ∫ (top − bottom) dx between them.</p>', lv: 'H' },
        { t: 'Average value', b: '<p>Average of f on [a, b] = <b>(1/(b − a)) ∫ₐᵇ f(x) dx</b>.</p>', lv: 'H' }
      ],
      quiz: [
        { q: '∫ 6x² dx =', o: ['12x + c', '2x³ + c', '3x³ + c', '6x³ + c'], a: 1, x: '6x³/3 = 2x³.' },
        { q: '∫₀² 3x² dx =', o: ['8', '12', '6', '24'], a: 0, x: '[x³] from 0 to 2 = 8.' },
        { q: 'Why add “+ c” to an indefinite integral?', o: ['To make it positive', 'Constants differentiate to zero, so any constant could have been there', 'It is the area', 'Convention only'], a: 1, x: 'The antiderivative is only known up to a constant.' },
        { q: '∫ e²ˣ dx =', o: ['2e²ˣ + c', 'e²ˣ + c', '½e²ˣ + c', 'e²ˣ/x + c'], a: 2, x: 'Divide by the coefficient of x.', lv: 'H' },
        { q: 'The average value of f(x) = 2x on [0, 4] is', o: ['8', '4', '16', '2'], a: 1, x: '(1/4)∫₀⁴ 2x dx = (1/4)(16) = 4.', lv: 'H' }
      ] },

    { id: 'finance', title: 'Financial Maths & Arithmetic', paper: 'P1', levels: ['H', 'O'], weight: { H: 4, O: 8 }, freq: 8,
      summary: 'Percentages, VAT, income tax, compound interest, depreciation, AER/APR, present value, amortisation (mortgages/loans).',
      examTip: 'Ordinary Level leans heavily on this. HL Section B often uses the amortisation formula or present values.',
      lessons: [
        { t: 'Compound interest', b: '<p><b>F = P(1 + i)ᵗ</b>. Depreciation (reducing balance): F = P(1 − i)ᵗ.</p>' },
        { t: 'Income tax', b: '<p>Gross tax = standard rate on income up to the cut-off point + higher rate on the rest. <b>Net tax = gross tax − tax credits</b>. USC and PRSI are calculated separately.</p>' },
        { t: 'Present value', b: '<p>P = F/(1 + i)ᵗ — what a future sum is worth today.</p>' },
        { t: 'Amortisation', b: '<p>Repayment A = P·i(1 + i)ᵗ / [(1 + i)ᵗ − 1]. Make sure i and t use the same period (monthly rate with months).</p><p>Converting an annual rate to monthly: (1 + i_month)¹² = 1 + i_year.</p>' }
      ],
      quiz: [
        { q: '€2,000 at 3% compound interest for 2 years becomes', o: ['€2,120.00', '€2,121.80', '€2,060.00', '€2,180.00'], a: 1, x: '2000 × 1.03² = 2121.80.' },
        { q: 'A €400 item plus 23% VAT costs', o: ['€423', '€492', '€308', '€500'], a: 1, x: '400 × 1.23 = 492.' },
        { q: 'Net tax =', o: ['Gross tax + credits', 'Gross tax − tax credits', 'Gross income − tax', 'Gross tax × rate'], a: 1, x: 'Tax credits reduce the tax payable.' },
        { q: 'A car worth €20,000 depreciates by 20% per year. After 2 years it is worth', o: ['€12,000', '€12,800', '€16,000', '€14,400'], a: 1, x: '20000 × 0.8² = 12,800.' },
        { q: 'The present value of €1,000 due in 1 year at 5% is closest to', o: ['€950.00', '€952.38', '€1,050.00', '€995.00'], a: 1, x: '1000 / 1.05.' }
      ] },

    { id: 'induction', title: 'Proof by Induction', paper: 'P1', levels: ['H'], weight: { H: 2, O: 0 }, freq: 6,
      summary: 'Proving statements for all natural numbers: series formulas, divisibility and inequalities.',
      examTip: 'Appeared in roughly 7 of the 12 papers from 2014 to 2025, including 2025 (Q10). A well-learned template earns most of the marks.',
      lessons: [
        { t: 'The three steps', b: '<ol><li><b>Base case</b>: show it is true for n = 1 (or the starting value).</li><li><b>Assume</b> true for n = k.</li><li><b>Prove</b> true for n = k + 1 using the assumption.</li></ol><p>Conclude: “True for n = 1, and true for k ⇒ true for k + 1, so true for all n ∈ ℕ.”</p>' },
        { t: 'Divisibility trick', b: '<p>For e.g. 7ⁿ − 1 divisible by 6: write 7ᵏ⁺¹ − 1 = 7·7ᵏ − 1 = 7(7ᵏ − 1) + 6. Both terms are divisible by 6.</p>' }
      ],
      quiz: [
        { q: 'The first step of a proof by induction is', o: ['Assume true for k', 'Prove for k + 1', 'Prove the base case', 'Write the conclusion'], a: 2, x: 'Start with the base case.' },
        { q: 'In the inductive step you assume the statement is true for', o: ['n = 1', 'n = k', 'n = k + 1', 'All n'], a: 1, x: 'Assume P(k), prove P(k + 1).' },
        { q: '7ᵏ⁺¹ − 1 can be rewritten as', o: ['7(7ᵏ − 1) + 6', '7ᵏ − 1 + 7', '7(7ᵏ) + 1', '(7 − 1)ᵏ'], a: 0, x: '7·7ᵏ − 7 + 6.' },
        { q: 'Induction proves a statement for', o: ['Real numbers', 'All natural numbers from the base case', 'Negative integers', 'Only n = 1'], a: 1, x: 'It is a proof over the natural numbers.' }
      ] },

    { id: 'probability', title: 'Probability', paper: 'P2', levels: ['H', 'O'], weight: { H: 8, O: 8 }, freq: 10,
      summary: 'Counting (fundamental principle, arrangements, combinations), probability rules, expected value, Bernoulli trials and binomial (HL).',
      examTip: 'Every year on Paper 2. Expected value questions (games, insurance) and “at least one” questions recur.',
      lessons: [
        { t: 'Counting', b: '<p>Fundamental principle: multiply the number of choices at each stage. Arrangements of n objects: n!. Choose r from n (order irrelevant): <b>ⁿCᵣ</b>.</p>' },
        { t: 'Rules', b: '<p>P(A or B) = P(A) + P(B) − P(A and B). Independent: P(A and B) = P(A)·P(B). Conditional: P(A|B) = P(A ∩ B)/P(B).</p><p><b>“At least one”</b> = 1 − P(none).</p>' },
        { t: 'Expected value', b: '<p>E(X) = Σ x·P(x). A fair game has expected value 0.</p>' },
        { t: 'Bernoulli trials', b: '<p>P(r successes in n trials) = ⁿCᵣ pʳ qⁿ⁻ʳ, where q = 1 − p.</p>', lv: 'H' }
      ],
      quiz: [
        { q: 'How many ways can 4 people be arranged in a line?', o: ['16', '24', '12', '4'], a: 1, x: '4! = 24.' },
        { q: '⁵C₂ =', o: ['10', '20', '5', '25'], a: 0, x: '5×4 / 2 = 10.' },
        { q: 'P(at least one six in 2 rolls of a die) =', o: ['1/3', '11/36', '1/6', '25/36'], a: 1, x: '1 − (5/6)² = 11/36.' },
        { q: 'A game: win €10 with probability 0.2, else win €0. Expected value =', o: ['€2', '€10', '€8', '€0.20'], a: 0, x: '10 × 0.2 = 2.' },
        { q: 'If A and B are independent, P(A) = 0.5, P(B) = 0.4, P(A ∩ B) =', o: ['0.9', '0.2', '0.1', '0.45'], a: 1, x: 'Multiply.' }
      ] },

    { id: 'statistics', title: 'Statistics', paper: 'P2', levels: ['H', 'O'], weight: { H: 9, O: 9 }, freq: 10,
      summary: 'Sampling and bias, averages and spread, graphs, correlation, the normal distribution, empirical rule, margin of error, hypothesis testing (HL).',
      examTip: 'Every year, and often a 50-mark Section B context. HL candidates must handle z-scores, margin of error 1/√n and hypothesis tests.',
      lessons: [
        { t: 'Data & sampling', b: '<p>Simple random sample: every member equally likely. Bias examples: convenience samples, leading questions, non-response. Know categorical vs numerical (discrete/continuous).</p>' },
        { t: 'Centre & spread', b: '<p>Mean, median, mode; range, interquartile range (Q3 − Q1), standard deviation. Outliers pull the mean but not the median.</p>' },
        { t: 'Correlation', b: '<p>r between −1 and 1. Near ±1 = strong linear relationship. <b>Correlation does not imply causation.</b></p>' },
        { t: 'Normal distribution', b: '<p>Empirical rule: ~68% within 1 SD, ~95% within 2 SD, ~99.7% within 3 SD.</p><p>z = (x − μ)/σ, then use the tables.</p>' },
        { t: 'Margin of error & hypothesis tests', b: '<p>Margin of error ≈ <b>1/√n</b> (95% level). 95% confidence interval for a proportion: p̂ ± 1/√n. If the claimed value lies outside the interval, reject H₀.</p>', lv: 'H' }
      ],
      quiz: [
        { q: 'Which is NOT affected much by an outlier?', o: ['Mean', 'Range', 'Median', 'Standard deviation'], a: 2, x: 'The median depends only on the middle value.' },
        { q: 'A correlation coefficient of −0.92 indicates', o: ['Weak positive', 'Strong negative', 'No correlation', 'Strong positive'], a: 1, x: 'Close to −1 → strong negative.' },
        { q: 'In a normal distribution, about what % of data lies within 2 SD of the mean?', o: ['68%', '95%', '99.7%', '50%'], a: 1, x: 'Empirical rule.' },
        { q: 'Interquartile range =', o: ['Max − Min', 'Q3 − Q1', 'Q2 − Q1', 'Mean − Median'], a: 1, x: 'The middle 50%.' },
        { q: 'With a sample of 400, the margin of error at 95% is', o: ['2.5%', '5%', '0.25%', '20%'], a: 1, x: '1/√400 = 0.05.', lv: 'H' },
        { q: 'If μ = 50, σ = 5, the z-score of 60 is', o: ['1', '2', '10', '0.5'], a: 1, x: '(60 − 50)/5 = 2.' }
      ] },

    { id: 'coord-line', title: 'Co-ordinate Geometry: the Line', paper: 'P2', levels: ['H', 'O'], weight: { H: 6, O: 7 }, freq: 9,
      summary: 'Distance, midpoint, slope, equation of a line, parallel and perpendicular lines, area of a triangle, perpendicular distance and angle between lines (HL).',
      examTip: 'Regular Section A question. Formulas are in the log tables booklet — practise using them quickly and accurately.',
      lessons: [
        { t: 'Core formulas', b: '<p>Slope m = (y₂ − y₁)/(x₂ − x₁). Line: y − y₁ = m(x − x₁). Distance √[(x₂ − x₁)² + (y₂ − y₁)²]. Midpoint ((x₁ + x₂)/2, (y₁ + y₂)/2).</p>' },
        { t: 'Parallel & perpendicular', b: '<p>Parallel: equal slopes. Perpendicular: <b>m₁ × m₂ = −1</b>. In ax + by + c = 0, slope = −a/b.</p>' },
        { t: 'Area & distance', b: '<p>Area of triangle with one vertex at (0, 0): ½|x₁y₂ − x₂y₁| (translate first if needed).</p><p>HL: perpendicular distance from (x₁, y₁) to ax + by + c = 0 is |ax₁ + by₁ + c| / √(a² + b²).</p>' }
      ],
      quiz: [
        { q: 'Slope of the line through (1, 2) and (3, 8)', o: ['3', '2', '6', '1/3'], a: 0, x: '6/2 = 3.' },
        { q: 'Slope of 2x + 3y − 6 = 0', o: ['2/3', '−2/3', '3/2', '−3/2'], a: 1, x: '−a/b = −2/3.' },
        { q: 'A line perpendicular to one with slope 4 has slope', o: ['4', '−4', '1/4', '−1/4'], a: 3, x: 'Negative reciprocal.' },
        { q: 'Midpoint of (2, −4) and (6, 10)', o: ['(4, 3)', '(8, 6)', '(4, 7)', '(2, 7)'], a: 0, x: '(8/2, 6/2).' },
        { q: 'Distance between (0, 0) and (6, 8)', o: ['14', '10', '100', '48'], a: 1, x: '√(36 + 64).' }
      ] },

    { id: 'circle', title: 'Co-ordinate Geometry: the Circle', paper: 'P2', levels: ['H', 'O'], weight: { H: 6, O: 5 }, freq: 9,
      summary: 'Equation of a circle, centre and radius, tangents, intersection of a line and a circle, touching circles (HL).',
      examTip: 'HL often asks for the circle through three points or tangent to a line — practise the general form x² + y² + 2gx + 2fy + c = 0.',
      lessons: [
        { t: 'Two forms', b: '<p>Centre (h, k), radius r: <b>(x − h)² + (y − k)² = r²</b>.</p><p>General form x² + y² + 2gx + 2fy + c = 0 has centre <b>(−g, −f)</b> and radius <b>√(g² + f² − c)</b>.</p>' },
        { t: 'Points & lines', b: '<p>Substitute a point: = r² on, &lt; r² inside, &gt; r² outside. A line is a tangent if the perpendicular distance from the centre equals r.</p>' },
        { t: 'Tangent at a point', b: '<p>The tangent is perpendicular to the radius at the point of contact: find the radius slope, take the negative reciprocal.</p>' }
      ],
      quiz: [
        { q: 'Centre and radius of (x − 2)² + (y + 3)² = 16', o: ['(2, −3), 4', '(−2, 3), 4', '(2, −3), 16', '(2, 3), 4'], a: 0, x: 'Signs flip inside the brackets.' },
        { q: 'Centre of x² + y² − 6x + 4y − 3 = 0', o: ['(−3, 2)', '(3, −2)', '(6, −4)', '(−6, 4)'], a: 1, x: '2g = −6 → g = −3; centre (−g, −f).' },
        { q: 'Radius of x² + y² − 6x + 4y − 3 = 0', o: ['4', '√13', '16', '√10'], a: 0, x: '√(9 + 4 + 3) = 4.' },
        { q: 'A tangent to a circle is ___ to the radius at the point of contact', o: ['Parallel', 'Perpendicular', 'Equal', 'At 45°'], a: 1, x: 'Key theorem.' },
        { q: 'Is (5, 0) inside, on or outside x² + y² = 16?', o: ['Inside', 'On', 'Outside', 'Cannot tell'], a: 2, x: '25 > 16.' }
      ] },

    { id: 'trig', title: 'Trigonometry', paper: 'P2', levels: ['H', 'O'], weight: { H: 10, O: 9 }, freq: 10,
      summary: 'Right-angled trig, sine and cosine rules, area ½ab sin C, radians, unit circle, trig graphs, identities and equations (HL).',
      examTip: 'Every year, often in a 3D or navigation context in Section B. HL identity proofs (e.g. cos 2A) are listed in the syllabus and do come up.',
      lessons: [
        { t: 'SOH CAH TOA & Pythagoras', b: '<p>sin = opp/hyp, cos = adj/hyp, tan = opp/adj. Pythagoras: a² + b² = c².</p>' },
        { t: 'Sine & cosine rules', b: '<p><b>Sine rule</b> a/sin A = b/sin B (use with a side and its opposite angle). <b>Cosine rule</b> a² = b² + c² − 2bc cos A (two sides + included angle, or three sides). Area = ½ab sin C.</p><p>Watch for the <b>ambiguous case</b> with the sine rule.</p>' },
        { t: 'Radians, arcs & sectors', b: '<p>π rad = 180°. Arc length = rθ, sector area = ½r²θ (θ in radians).</p>' },
        { t: 'Unit circle & graphs', b: '<p>CAST: All positive in Q1, Sin in Q2, Tan in Q3, Cos in Q4. y = a sin bx has range [−a, a] and period 2π/b.</p>' },
        { t: 'Identities & equations', b: '<p>cos²A + sin²A = 1, cos 2A = cos²A − sin²A, sin 2A = 2 sin A cos A. Solve equations giving ALL solutions in the range (use the period).</p>', lv: 'H' }
      ],
      quiz: [
        { q: 'Which rule finds a side given two sides and the included angle?', o: ['Sine rule', 'Cosine rule', 'SOH CAH TOA', 'Pythagoras'], a: 1, x: 'Two sides + included angle → cosine rule.' },
        { q: 'Area of a triangle with sides 6 and 8 and included angle 30°', o: ['24', '12', '48', '20.8'], a: 1, x: '½ × 6 × 8 × ½ = 12.' },
        { q: '120° in radians is', o: ['π/3', '2π/3', '3π/4', '5π/6'], a: 1, x: '120 × π/180.' },
        { q: 'In which quadrant is cos negative but sin positive?', o: ['1st', '2nd', '3rd', '4th'], a: 1, x: 'CAST: only Sin is positive in Q2.' },
        { q: 'The period of y = 3 sin 2x is', o: ['2π', 'π', '3', '6π'], a: 1, x: '2π/2.' },
        { q: 'sin 2A =', o: ['2 sin A', 'sin²A − cos²A', '2 sin A cos A', '1 − 2sin A'], a: 2, x: 'Double-angle formula.', lv: 'H' }
      ] },

    { id: 'geometry', title: 'Geometry: Theorems & Constructions', paper: 'P2', levels: ['H', 'O'], weight: { H: 5, O: 5 }, freq: 8,
      summary: 'Prescribed theorems (formal proofs of selected ones), constructions, enlargements, similar triangles.',
      examTip: 'Theorems 11, 12 and 13 (similar triangles/Pythagoras) and centroid/circumcentre/orthocentre constructions recur. Enlargements with scale factor k (area × k²) are a reliable mark.',
      lessons: [
        { t: 'Key theorems', b: '<ul><li>Angle at the centre is twice the angle at the circumference.</li><li>Angle in a semicircle is 90°.</li><li>Opposite angles of a cyclic quadrilateral sum to 180°.</li><li>A line parallel to one side of a triangle divides the other two sides in the same ratio.</li></ul>' },
        { t: 'Enlargements', b: '<p>Scale factor k = image length / object length. <b>Area scales by k²</b>. k &lt; 1 reduces the shape.</p>' },
        { t: 'Constructions', b: '<p>Circumcentre: perpendicular bisectors of the sides. Incentre: angle bisectors. Centroid: medians. Orthocentre (HL): altitudes. Leave construction arcs visible — they earn marks.</p>' }
      ],
      quiz: [
        { q: 'The angle at the centre of a circle is ___ the angle at the circumference on the same arc', o: ['Equal to', 'Half', 'Twice', 'Supplementary to'], a: 2, x: 'Theorem: double.' },
        { q: 'An enlargement of scale factor 3 multiplies area by', o: ['3', '6', '9', '27'], a: 2, x: 'k².' },
        { q: 'The circumcentre is found using', o: ['Medians', 'Angle bisectors', 'Perpendicular bisectors of the sides', 'Altitudes'], a: 2, x: 'Equidistant from the vertices.' },
        { q: 'Opposite angles in a cyclic quadrilateral', o: ['Are equal', 'Sum to 180°', 'Sum to 90°', 'Sum to 360°'], a: 1, x: 'Cyclic quadrilateral theorem.' },
        { q: 'The angle in a semicircle is', o: ['45°', '60°', '90°', '180°'], a: 2, x: 'Right angle.' }
      ] },

    { id: 'measure', title: 'Length, Area & Volume', paper: 'P2', levels: ['H', 'O'], weight: { H: 6, O: 7 }, freq: 8,
      summary: 'Area and perimeter of 2D shapes, surface area and volume of prisms, cylinders, cones, spheres, trapezoidal rule.',
      examTip: 'Frequently in Section B contexts (tanks, containers, melting/recasting). Formulas are in the tables booklet — know which page.',
      lessons: [
        { t: 'Volumes', b: '<p>Cylinder πr²h, cone ⅓πr²h, sphere ⁴⁄₃πr³, hemisphere ⅔πr³, prism = cross-section area × length.</p>' },
        { t: 'Recasting', b: '<p>When an object is melted and recast, <b>volume stays the same</b>. Set the volumes equal and solve.</p>' },
        { t: 'Trapezoidal rule', b: '<p>Area ≈ h/2 [first + last + 2(all the others)], where h is the strip width.</p>' }
      ],
      quiz: [
        { q: 'Volume of a cylinder with r = 3 cm, h = 10 cm (in terms of π)', o: ['30π', '90π', '60π', '9π'], a: 1, x: 'π × 9 × 10.' },
        { q: 'Volume of a cone compared to a cylinder of the same radius and height', o: ['Half', 'One-third', 'Equal', 'Two-thirds'], a: 1, x: '⅓πr²h.' },
        { q: 'When a solid is melted and recast, what is conserved?', o: ['Surface area', 'Volume', 'Height', 'Radius'], a: 1, x: 'Volume.' },
        { q: 'Trapezoidal rule: h = 2, heights 3, 5, 4. Area ≈', o: ['17', '12', '24', '8.5'], a: 0, x: '2/2 [3 + 4 + 2(5)] = 17.' },
        { q: 'Volume of a sphere of radius 3 (in terms of π)', o: ['36π', '27π', '12π', '108π'], a: 0, x: '4/3 × π × 27.' }
      ] }
  ]
});
