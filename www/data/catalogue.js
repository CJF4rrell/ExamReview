/* Subject catalogue + content registry.
 * Every Leaving Certificate subject appears in the picker. Subjects with a
 * `content` file registered via LC.register() are fully revisable; the rest show
 * as "coming soon" with a link to the SEC archive.
 */
window.LC = window.LC || {};
LC.SEC_ARCHIVE = 'https://www.examinations.ie/exammaterialarchive/';
LC.CURRICULUM = 'https://www.curriculumonline.ie/senior-cycle/';
LC.content = {};
LC.register = function (subject) { LC.content[subject.id] = subject; };

LC.catalogue = [
  { id: 'english', name: 'English', group: 'Core' },
  { id: 'irish', name: 'Irish (Gaeilge)', group: 'Core' },
  { id: 'maths', name: 'Mathematics', group: 'Core' },
  { id: 'biology', name: 'Biology', group: 'Science' },
  { id: 'business', name: 'Business', group: 'Business' },
  { id: 'geography', name: 'Geography', group: 'Humanities' },
  { id: 'accounting', name: 'Accounting', group: 'Business' },
  { id: 'agsci', name: 'Agricultural Science', group: 'Science' },
  { id: 'applied-maths', name: 'Applied Mathematics', group: 'Science' },
  { id: 'art', name: 'Art', group: 'Arts' },
  { id: 'chemistry', name: 'Chemistry', group: 'Science' },
  { id: 'classics', name: 'Classical Studies', group: 'Humanities' },
  { id: 'climate', name: 'Climate Action & Sustainable Development', group: 'Science' },
  { id: 'compsci', name: 'Computer Science', group: 'Technology' },
  { id: 'construction', name: 'Construction Studies', group: 'Technology' },
  { id: 'dcg', name: 'Design & Communication Graphics', group: 'Technology' },
  { id: 'dft', name: 'Drama, Film & Theatre Studies', group: 'Arts' },
  { id: 'economics', name: 'Economics', group: 'Business' },
  { id: 'engineering', name: 'Engineering', group: 'Technology' },
  { id: 'french', name: 'French', group: 'Languages' },
  { id: 'german', name: 'German', group: 'Languages' },
  { id: 'history', name: 'History', group: 'Humanities' },
  { id: 'home-ec', name: 'Home Economics', group: 'Science' },
  { id: 'italian', name: 'Italian', group: 'Languages' },
  { id: 'japanese', name: 'Japanese', group: 'Languages' },
  { id: 'latin', name: 'Latin', group: 'Languages' },
  { id: 'ancient-greek', name: 'Ancient Greek', group: 'Languages' },
  { id: 'mandarin', name: 'Mandarin Chinese', group: 'Languages' },
  { id: 'music', name: 'Music', group: 'Arts' },
  { id: 'pe', name: 'Physical Education', group: 'Other' },
  { id: 'physics', name: 'Physics', group: 'Science' },
  { id: 'phys-chem', name: 'Physics & Chemistry', group: 'Science' },
  { id: 'politics', name: 'Politics & Society', group: 'Humanities' },
  { id: 'polish', name: 'Polish', group: 'Languages' },
  { id: 'portuguese', name: 'Portuguese', group: 'Languages' },
  { id: 're', name: 'Religious Education', group: 'Humanities' },
  { id: 'russian', name: 'Russian', group: 'Languages' },
  { id: 'spanish', name: 'Spanish', group: 'Languages' },
  { id: 'technology', name: 'Technology', group: 'Technology' },
  { id: 'arabic', name: 'Arabic', group: 'Languages' },
  { id: 'lithuanian', name: 'Lithuanian', group: 'Languages' },
  { id: 'hebrew', name: 'Hebrew Studies', group: 'Languages' }
];
