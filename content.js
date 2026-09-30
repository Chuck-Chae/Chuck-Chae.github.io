/* =========================================================
   EDIT ONLY THIS FILE for normal updates.
   ---------------------------------------------------------
   1) Change name / bio / links below.
   2) Add or remove news/publications by copying one {...} block.
   3) Replace assets/profile-placeholder.svg with your own photo
      and change profileImage to "assets/profile.jpg".
   ========================================================= */

const SITE = {
  name: "Chuck Chae",
  eyebrow: "Ph.D. Student · DGIST EECS",
  role: "Information Hiding & Multimedia Security",

  bio: [
    "I am a graduate student in Electrical Engineering and Computer Science (EECS) at DGIST, South Korea. My primary research area is computer security, with a focus on information hiding.",
    "My research interests include steganography, steganalysis, digital watermarking, and the security of generative media. I received my undergraduate training in mathematics, which continues to influence how I approach security problems."
  ],

  profileImage: "assets/profile-placeholder.svg",

  affiliation: "DGIST EECS",
  field: "Computer Security",
  background: "Mathematics",
  location: "Daegu, South Korea",

  links: {
    email: "mailto:cocjr0208@dgist.ac.kr",
    scholar: "",
    github: "https://github.com/Chuck-Chae",
    orcid: "",
    cv: "CV.pdf"
  },

  researchIntro:
    "I work on information hiding and multimedia security, especially where classical security questions meet modern generative models.",

  research: [
    {
      title: "Steganography & Steganalysis",
      description: "Design and analysis of covert communication systems, including security evaluation and specialized detectors."
    },
    {
      title: "Digital Watermarking",
      description: "Robust and secure watermarking for images and generated media under realistic transformations and attacks."
    },
    {
      title: "Generative Media Security",
      description: "Security and privacy questions arising from diffusion models, generative image pipelines, and provenance mechanisms."
    },
    {
      title: "Mathematical Methods",
      description: "Use of discrete mathematics, geometry, probability, and optimization to formulate and analyze security problems."
    }
  ],

  news: [
    { date: "2026.09", text: "Website launched." },
    { date: "2026", text: "Add a paper acceptance, award, talk, internship, or other update here." }
  ],

  publications: [
    {
      venue: "CONFERENCE / JOURNAL · 2026",
      title: "Paper Title Goes Here",
      authorsHTML: "<strong>Your Name</strong>, Coauthor A, Coauthor B",
      note: "One-sentence optional note about the paper.",
      links: [
        { label: "Paper", url: "#" },
        { label: "Code", url: "#" }
      ]
    },
    {
      venue: "CONFERENCE / JOURNAL · 2025",
      title: "Another Paper Title",
      authorsHTML: "Coauthor A, <strong>Your Name</strong>, Coauthor B",
      note: "",
      links: [
        { label: "Paper", url: "#" }
      ]
    }
  ],

  education: [
    {
      period: "20XX — Present",
      institution: "DGIST",
      degree: "Graduate Program in Electrical Engineering and Computer Science (EECS)",
      detail: "Research area: Computer Security / Information Hiding"
    },
    {
      period: "20XX — 20XX",
      institution: "DGIST",
      degree: "B.S. in Mathematics",
      detail: ""
    }
  ],

  philosophyTeaser:
    "Alongside my technical research, I maintain an independent interest in philosophy. I keep selected essays, reading notes, and questions on a separate page.",

  philosophyIntro: [
    "This page collects my independent interests in philosophy. It is separate from my primary academic research in computer security.",
    "I am particularly interested in political philosophy, contemporary continental philosophy, philosophy of technology, and the relation between mathematics, ontology, and politics."
  ],

  philosophyInterests: [
    "Political Philosophy",
    "Contemporary Continental Philosophy",
    "Philosophy of Technology",
    "Mathematics & Ontology",
    "Badiou",
    "Rancière"
  ],

  essays: [
    {
      date: "2026",
      title: "Essay / Note Title",
      description: "A short description of the note or question.",
      url: ""
    },
    {
      date: "2026",
      title: "Another Essay / Note",
      description: "You can link to a PDF, blog post, Notion page, or leave the URL blank.",
      url: ""
    }
  ],

  reading: [
    {
      title: "Book / Author",
      status: "Reading notes",
      note: "Optional short memo."
    },
    {
      title: "Book / Author",
      status: "Discussion",
      note: ""
    }
  ],

  philosophyScopeNote:
    "These materials reflect independent study and personal intellectual interests; they are not presented as part of my formal research program unless explicitly stated.",

  moreNote:
    "For full publication details, talks, awards, service, and other activities, see my CV or academic profiles.",

  moreLinks: [
    { label: "GitHub", url: "https://github.com/Chuck-Chae" },
    { label: "Curriculum Vitae", url: "CV.pdf" }
  ]
};
