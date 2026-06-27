export const navigation = [
  { label: "Home", to: "/" },
  { label: "Series", to: "/series" },
  { label: "Catalogue", to: "/catalogue" },
  { label: "Library", to: "/library" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const cover = (folder, file) => `/covers/${folder}/${file}`;

export const heroShelves = [
  "Primary Tamil Readers",
  "School English Series",
  "Integrated Science",
  "Mathematics Practice",
  "Term Books",
  "Guide Series",
];

export const seriesCards = [
  {
    title: "Tamil Book Series",
    scope: "LKG to Class 10",
    blurb: "School-focused Tamil readers, grammar books, and practice titles that build fluency, comprehension, and writing confidence grade by grade.",
    accent: "amber",
  },
  {
    title: "English Book Series",
    scope: "Primary to Higher Secondary",
    blurb: "Textbooks and language practice books designed for classroom communication, grammar foundations, reading skill, and writing development.",
    accent: "blue",
  },
  {
    title: "Hindi Book Series",
    scope: "Class 1 to Class 8",
    blurb: "Carefully sequenced Hindi titles that support literacy, grammar mastery, vocabulary growth, and engaging school learning outcomes.",
    accent: "emerald",
  },
  {
    title: "Term Book Series",
    scope: "Multi-subject school editions",
    blurb: "Multi-subject term books that help schools simplify planning, distribution, timetable use, and day-to-day classroom learning.",
    accent: "violet",
  },
  {
    title: "Work Book Series",
    scope: "Revision and reinforcement",
    blurb: "Practice books, revision exercises, tests, and reinforcement material created to improve student retention and classroom performance.",
    accent: "rose",
  },
  {
    title: "Art & Craft Series",
    scope: "Activity-based learning",
    blurb: "Creative school activity books that encourage imagination, fine motor development, visual expression, and joyful classroom participation.",
    accent: "gold",
  },
  {
    title: "Guide Series",
    scope: "Teacher and exam support",
    blurb: "Supportive guide books for teachers and schools with structured references, answers, explanations, and classroom-ready direction.",
    accent: "blue",
  },
];

export const catalogueBooks = [
  // ── Tamil Book Series ──────────────────────────────────────
  { title: "Enathu Tamil - LKG",  series: "Tamil Book Series", classLabel: "LKG",     classGroup: "Foundation", subject: "Tamil", meta: "Tamil Book Series • LKG",     accent: "navy",   kicker: "Foundational Language", coverSrc: cover("tamil books", "enathu tamil lkg.png") },
  { title: "Enathu Tamil - UKG",  series: "Tamil Book Series", classLabel: "UKG",     classGroup: "Foundation", subject: "Tamil", meta: "Tamil Book Series • UKG",     accent: "mint",   kicker: "Early Reader",          coverSrc: cover("tamil books", "enathu tamil ukg.png") },
  { title: "Tamil Book - 1",      series: "Tamil Book Series", classLabel: "Class 1", classGroup: "Primary",    subject: "Tamil", meta: "Tamil Book Series • Class 1", accent: "navy",   kicker: "Primary Language",      coverSrc: cover("tamil books", "1.png") },
  { title: "Tamil Book - 2",      series: "Tamil Book Series", classLabel: "Class 2", classGroup: "Primary",    subject: "Tamil", meta: "Tamil Book Series • Class 2", accent: "sepia",  kicker: "Language Skills",       coverSrc: cover("tamil books", "2.png") },
  { title: "Tamil Book - 3",      series: "Tamil Book Series", classLabel: "Class 3", classGroup: "Primary",    subject: "Tamil", meta: "Tamil Book Series • Class 3", accent: "navy",   kicker: "Grammar & Reading",     coverSrc: cover("tamil books", "3.png") },
  { title: "Tamil Book - 4",      series: "Tamil Book Series", classLabel: "Class 4", classGroup: "Primary",    subject: "Tamil", meta: "Tamil Book Series • Class 4", accent: "sepia",  kicker: "Language Skills",       coverSrc: cover("tamil books", "4.png") },
  { title: "Tamil Book - 5",      series: "Tamil Book Series", classLabel: "Class 5", classGroup: "Primary",    subject: "Tamil", meta: "Tamil Book Series • Class 5", accent: "mint",   kicker: "Advanced Reader",       coverSrc: cover("tamil books", "5.png") },
  { title: "Tamil Reader - 1",    series: "Tamil Book Series", classLabel: "Class 1", classGroup: "Primary",    subject: "Tamil", meta: "Tamil Book Series • Class 1", accent: "navy",   kicker: "Primary Reader",        coverSrc: cover("tamil books", "tam1.png") },
  { title: "Tamil Reader - 2",    series: "Tamil Book Series", classLabel: "Class 2", classGroup: "Primary",    subject: "Tamil", meta: "Tamil Book Series • Class 2", accent: "sepia",  kicker: "Reader Series",         coverSrc: cover("tamil books", "tam2.png") },
  { title: "Tamil Reader - 3",    series: "Tamil Book Series", classLabel: "Class 3", classGroup: "Primary",    subject: "Tamil", meta: "Tamil Book Series • Class 3", accent: "mint",   kicker: "Reader Series",         coverSrc: cover("tamil books", "tam3.png") },
  { title: "Tamil Reader - 4",    series: "Tamil Book Series", classLabel: "Class 4", classGroup: "Primary",    subject: "Tamil", meta: "Tamil Book Series • Class 4", accent: "sepia",  kicker: "Language Skills",       coverSrc: cover("tamil books", "tam4.png") },

  // ── English Book Series ────────────────────────────────────
  { title: "English Grammar - 1", series: "English Book Series", classLabel: "Class 1", classGroup: "Primary", subject: "English", meta: "English Book Series • Class 1", accent: "indigo", kicker: "Grammar Builder",       coverSrc: cover("english books", "englishgrm1.png") },
  { title: "English Grammar - 2", series: "English Book Series", classLabel: "Class 2", classGroup: "Primary", subject: "English", meta: "English Book Series • Class 2", accent: "indigo", kicker: "Grammar Builder",       coverSrc: cover("english books", "englishgrm2.png") },
  { title: "English Grammar - 3", series: "English Book Series", classLabel: "Class 3", classGroup: "Primary", subject: "English", meta: "English Book Series • Class 3", accent: "indigo", kicker: "Grammar Builder",       coverSrc: cover("english books", "englishgrm3.png") },
  { title: "English Grammar - 4", series: "English Book Series", classLabel: "Class 4", classGroup: "Primary", subject: "English", meta: "English Book Series • Class 4", accent: "indigo", kicker: "Grammar Builder",       coverSrc: cover("english books", "eng4.png") },
  { title: "English Grammar - 5", series: "English Book Series", classLabel: "Class 5", classGroup: "Primary", subject: "English", meta: "English Book Series • Class 5", accent: "indigo", kicker: "Grammar Builder",       coverSrc: cover("english books", "englishgrm5.png") },
  { title: "Cursive Handwriting - Level 1", series: "English Book Series", classLabel: "Class 1", classGroup: "Primary", subject: "English", meta: "English Book Series • Class 1", accent: "teal", kicker: "Handwriting Practice", coverSrc: cover("english books", "cur1.png") },
  { title: "Cursive Handwriting - Level 2", series: "English Book Series", classLabel: "Class 2", classGroup: "Primary", subject: "English", meta: "English Book Series • Class 2", accent: "teal", kicker: "Handwriting Practice", coverSrc: cover("english books", "cur2.png") },
  { title: "Cursive Handwriting - Level 3", series: "English Book Series", classLabel: "Class 3", classGroup: "Primary", subject: "English", meta: "English Book Series • Class 3", accent: "teal", kicker: "Handwriting Practice", coverSrc: cover("english books", "cur3.png") },
  { title: "English Reader - 3",  series: "English Book Series", classLabel: "Class 3", classGroup: "Primary", subject: "English", meta: "English Book Series • Class 3", accent: "coral",  kicker: "Reading Course",        coverSrc: cover("english books", "3.png") },
  { title: "English Reader - 5",  series: "English Book Series", classLabel: "Class 5", classGroup: "Primary", subject: "English", meta: "English Book Series • Class 5", accent: "coral",  kicker: "Reading Course",        coverSrc: cover("english books", "5.png") },

  // ── Hindi Book Series ──────────────────────────────────────
  { title: "Hindi Book - 1",   series: "Hindi Book Series", classLabel: "Class 1", classGroup: "Primary", subject: "Hindi", meta: "Hindi Book Series • Class 1", accent: "sepia",  kicker: "Language Development", coverSrc: cover("hindi books", "1.png") },
  { title: "Hindi Book - 2",   series: "Hindi Book Series", classLabel: "Class 2", classGroup: "Primary", subject: "Hindi", meta: "Hindi Book Series • Class 2", accent: "sepia",  kicker: "Language Development", coverSrc: cover("hindi books", "2.png") },
  { title: "Hindi Book - 3",   series: "Hindi Book Series", classLabel: "Class 3", classGroup: "Primary", subject: "Hindi", meta: "Hindi Book Series • Class 3", accent: "bronze", kicker: "School Edition",       coverSrc: cover("hindi books", "3.png") },
  { title: "Hindi Book - 4",   series: "Hindi Book Series", classLabel: "Class 4", classGroup: "Primary", subject: "Hindi", meta: "Hindi Book Series • Class 4", accent: "bronze", kicker: "School Edition",       coverSrc: cover("hindi books", "4.png") },
  { title: "Hindi Book - 5",   series: "Hindi Book Series", classLabel: "Class 5", classGroup: "Primary", subject: "Hindi", meta: "Hindi Book Series • Class 5", accent: "forest", kicker: "School Edition",       coverSrc: cover("hindi books", "5.png") },
  { title: "Hindi Reader - 4", series: "Hindi Book Series", classLabel: "Class 4", classGroup: "Primary", subject: "Hindi", meta: "Hindi Book Series • Class 4", accent: "bronze", kicker: "Reader Series",        coverSrc: cover("hindi books", "hindi4.png") },
  { title: "Hindi Reader - 5", series: "Hindi Book Series", classLabel: "Class 5", classGroup: "Primary", subject: "Hindi", meta: "Hindi Book Series • Class 5", accent: "forest", kicker: "Reader Series",        coverSrc: cover("hindi books", "hindi5.png") },
  { title: "Hindi Reader - 6", series: "Hindi Book Series", classLabel: "Class 6", classGroup: "Middle",  subject: "Hindi", meta: "Hindi Book Series • Class 6", accent: "forest", kicker: "Advanced Language",    coverSrc: cover("hindi books", "hindi6.png") },
  { title: "Hindi Reader - 7", series: "Hindi Book Series", classLabel: "Class 7", classGroup: "Middle",  subject: "Hindi", meta: "Hindi Book Series • Class 7", accent: "forest", kicker: "Advanced Language",    coverSrc: cover("hindi books", "hindi7.png") },

  // ── Term Book Series ───────────────────────────────────────
  { title: "Term Book - 1", series: "Term Book Series", classLabel: "Class 1", classGroup: "Primary", subject: "Multi Subject", meta: "Term Book Series • Class 1", accent: "indigo", kicker: "Integrated Semester Book", coverSrc: cover("term books", "1.png") },
  { title: "Term Book - 2", series: "Term Book Series", classLabel: "Class 2", classGroup: "Primary", subject: "Multi Subject", meta: "Term Book Series • Class 2", accent: "indigo", kicker: "Integrated Learning",      coverSrc: cover("term books", "2.png") },
  { title: "Term Book - 3", series: "Term Book Series", classLabel: "Class 3", classGroup: "Primary", subject: "Multi Subject", meta: "Term Book Series • Class 3", accent: "slate",  kicker: "Integrated Learning",      coverSrc: cover("term books", "3.png") },
  { title: "Term Book - 4", series: "Term Book Series", classLabel: "Class 4", classGroup: "Primary", subject: "Multi Subject", meta: "Term Book Series • Class 4", accent: "slate",  kicker: "Integrated Learning",      coverSrc: cover("term books", "4.png") },
  { title: "Term Book - 5", series: "Term Book Series", classLabel: "Class 5", classGroup: "Primary", subject: "Multi Subject", meta: "Term Book Series • Class 5", accent: "slate",  kicker: "Integrated Learning",      coverSrc: cover("term books", "5.png") },
  { title: "Term Book - 6", series: "Term Book Series", classLabel: "Class 6", classGroup: "Middle",  subject: "Multi Subject", meta: "Term Book Series • Class 6", accent: "steel",  kicker: "Integrated Learning",      coverSrc: cover("term books", "6.png") },
  { title: "Term Book - 7", series: "Term Book Series", classLabel: "Class 7", classGroup: "Middle",  subject: "Multi Subject", meta: "Term Book Series • Class 7", accent: "steel",  kicker: "Integrated Learning",      coverSrc: cover("term books", "7.png") },
  { title: "Term Book - 8", series: "Term Book Series", classLabel: "Class 8", classGroup: "Middle",  subject: "Multi Subject", meta: "Term Book Series • Class 8", accent: "forest", kicker: "Integrated Learning",      coverSrc: cover("term books", "8.png") },
  { title: "Term Book - 9", series: "Term Book Series", classLabel: "Class 9", classGroup: "Secondary", subject: "Multi Subject", meta: "Term Book Series • Class 9", accent: "forest", kicker: "Integrated Learning",  coverSrc: cover("term books", "9.png") },
  { title: "English Term Book - 1", series: "Term Book Series", classLabel: "Class 1", classGroup: "Primary", subject: "English", meta: "Term Book Series • English Class 1", accent: "teal", kicker: "Term Language Book", coverSrc: cover("term books", "englishterm1.png") },
  { title: "English Term Book - 2", series: "Term Book Series", classLabel: "Class 2", classGroup: "Primary", subject: "English", meta: "Term Book Series • English Class 2", accent: "teal", kicker: "Term Language Book", coverSrc: cover("term books", "englishterm2.png") },
  { title: "English Term Book - 3", series: "Term Book Series", classLabel: "Class 3", classGroup: "Primary", subject: "English", meta: "Term Book Series • English Class 3", accent: "teal", kicker: "Term Language Book", coverSrc: cover("term books", "englishterm3.png") },

  // ── Work Book Series ───────────────────────────────────────
  { title: "English Work Book - 1", series: "Work Book Series", classLabel: "Class 1", classGroup: "Primary", subject: "English", meta: "Work Book Series • Class 1", accent: "bronze",  kicker: "Practice Edition",    coverSrc: cover("work books", "wb1.png") },
  { title: "English Work Book - 2", series: "Work Book Series", classLabel: "Class 2", classGroup: "Primary", subject: "English", meta: "Work Book Series • Class 2", accent: "bronze",  kicker: "Skill Reinforcement", coverSrc: cover("work books", "wb2.png") },
  { title: "English Work Book - 3", series: "Work Book Series", classLabel: "Class 3", classGroup: "Primary", subject: "English", meta: "Work Book Series • Class 3", accent: "crimson", kicker: "Revision Book",       coverSrc: cover("work books", "wb3.png") },

  // ── Art & Craft Series ─────────────────────────────────────
  { title: "Young Artist - A", series: "Art & Craft Series", classLabel: "Pre-KG",  classGroup: "Foundation", subject: "Art & Craft", meta: "Art & Craft Series • Pre-KG",  accent: "coral",  kicker: "Activity Book",   coverSrc: cover("art and craft books", "art and craft A.png") },
  { title: "Young Artist - B", series: "Art & Craft Series", classLabel: "LKG",     classGroup: "Foundation", subject: "Art & Craft", meta: "Art & Craft Series • LKG",     accent: "sunset", kicker: "Creative Skills", coverSrc: cover("art and craft books", "art and craft B.png") },
  { title: "Young Artist - C", series: "Art & Craft Series", classLabel: "UKG",     classGroup: "Foundation", subject: "Art & Craft", meta: "Art & Craft Series • UKG",     accent: "gold",   kicker: "Activity Skills", coverSrc: cover("art and craft books", "art and craft C.png") },
  { title: "Young Artist - 1", series: "Art & Craft Series", classLabel: "Class 1", classGroup: "Primary",    subject: "Art & Craft", meta: "Art & Craft Series • Class 1", accent: "coral",  kicker: "Creative Skills", coverSrc: cover("art and craft books", "art and craft 1.png") },
  { title: "Young Artist - 2", series: "Art & Craft Series", classLabel: "Class 2", classGroup: "Primary",    subject: "Art & Craft", meta: "Art & Craft Series • Class 2", accent: "sunset", kicker: "Creative Skills", coverSrc: cover("art and craft books", "art and craft 2.png") },
  { title: "Young Artist - 3", series: "Art & Craft Series", classLabel: "Class 3", classGroup: "Primary",    subject: "Art & Craft", meta: "Art & Craft Series • Class 3", accent: "coral",  kicker: "Creative Skills", coverSrc: cover("art and craft books", "art and craft 3.png") },
  { title: "Young Artist - 4", series: "Art & Craft Series", classLabel: "Class 4", classGroup: "Primary",    subject: "Art & Craft", meta: "Art & Craft Series • Class 4", accent: "gold",   kicker: "Creative Skills", coverSrc: cover("art and craft books", "art and craft 4.png") },
  { title: "Young Artist - 5", series: "Art & Craft Series", classLabel: "Class 5", classGroup: "Primary",    subject: "Art & Craft", meta: "Art & Craft Series • Class 5", accent: "sunset", kicker: "Creative Skills", coverSrc: cover("art and craft books", "art and craft 5.png") },

  // ── Guide Series ───────────────────────────────────────────
  { title: "Guide Book - 1",        series: "Guide Series", classLabel: "Class 9",  classGroup: "Secondary",        subject: "Exam Support", meta: "Guide Series • Class 9",  accent: "forest", kicker: "Teacher Support",  coverSrc: cover("guide series", "1.png") },
  { title: "Guide Book - 2",        series: "Guide Series", classLabel: "Class 10", classGroup: "Secondary",        subject: "Exam Support", meta: "Guide Series • Class 10", accent: "forest", kicker: "Answer Support",   coverSrc: cover("guide series", "2.png") },
  { title: "Guide Book - 3",        series: "Guide Series", classLabel: "Class 11", classGroup: "Higher Secondary", subject: "Exam Support", meta: "Guide Series • Class 11", accent: "steel",  kicker: "Exam Preparation", coverSrc: cover("guide series", "3.png") },
  { title: "Public Exam Guide - 12",series: "Guide Series", classLabel: "Class 12", classGroup: "Higher Secondary", subject: "Exam Support", meta: "Guide Series • Class 12", accent: "steel",  kicker: "Exam Preparation", coverSrc: cover("guide series", "4.png") },
];

export const homeStats = [
  { value: "1000+", label: "Schools reached" },
  { value: "13+", label: "Years in educational publishing" },
  { value: "12", label: "Core school subjects" },
  { value: "98%", label: "Partner school retention" },
];

export const testimonials = [
  {
    quote: "Genius Books has consistently delivered curriculum-aligned material our teachers trust completely. The Tamil series in particular has transformed how we approach language learning from LKG onward.",
    name: "Mrs. Kamala Rajan",
    role: "Academic Coordinator",
    school: "Sri Vidya Mandir Hr. Sec. School, Chennai",
    initials: "KR",
  },
  {
    quote: "The Term Book series reduced our procurement complexity significantly. One well-structured book per child per term — teachers love the layout and students engage with it naturally from day one.",
    name: "Mr. Suresh Babu",
    role: "Principal",
    school: "Bharathi Matriculation School, Coimbatore",
    initials: "SB",
  },
  {
    quote: "We've been partnering with Genius Books for over eight years. The quality, delivery reliability, and curriculum relevance are consistently above what we see from larger publishers in the market.",
    name: "Mrs. Priya Sundaram",
    role: "School Director",
    school: "Heritage International School, Salem",
    initials: "PS",
  },
];

export const trustPoints = [
  {
    title: "Curriculum Alignment",
    body: "Every title is planned around real school needs, classroom flow, and syllabus clarity.",
  },
  {
    title: "Teacher-Friendly Structure",
    body: "Lessons, exercises, and layouts are organized to support both teaching and student understanding.",
  },
  {
    title: "School-Ready Publishing",
    body: "Our catalogue and series system help school leaders review, compare, and select books with confidence.",
  },
];

export const philosophy = [
  "Books built for classrooms",
  "Clear learning progression",
  "Teacher-friendly presentation",
  "Student-first reading flow",
];

export const contactDetails = [
  {
    label: "Email",
    value: "sales@geniusbooks.in",
    href: "mailto:sales@geniusbooks.in",
  },
  {
    label: "Phone",
    value: "044-4850 3975",
    href: "tel:04448503975",
  },
  {
    label: "Hours",
    value: "Mon-Fri • 9 AM to 5 PM",
  },
  {
    label: "Address",
    value: "Jain Akshay Apartment, No 15/8, FO.1, Thirumoorthy Street, T.Nagar, Chennai 600017",
  },
];

export const mapLink = "https://share.google/we3StmlqQ1fmBKnx0";
export const mapEmbedLink =
  "https://www.google.com/maps?q=Jain%20Akshay%20Apartment%2C%20No%2015%2F8%2C%20FO.1%2C%20Thirumoorthy%20Street%2C%20T.Nagar%2C%20Chennai%20600017&z=17&output=embed";

