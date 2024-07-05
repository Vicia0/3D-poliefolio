import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  django,
  wordpress,
  python,
  c,
  ruby,
  rails,
  laa,
  microverse,
  afrocentric,
  nstem,
  cryptogen,
  deras,
  metrics,
  memory,
  bookstore
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "work",
    title: "Work Experience",
  },
  {
    id: "technologies",
    title: "Technologies",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  // {
  //   title: "Linux Admin",
  //   icon: mobile,
  // },
  {
    title: "Database",
    icon: backend,
  },
  {
    title: "Technical Writing",
    icon: creator,
  },
];

const skills = [
  {
    id: 1,
    title: "Programming Languages",
    skills: [
      {
        color: "blue-text-gradient",
        skills: ["Python", "Java", "JavaScript"]
      }
    ]
  },
  {
    id: 2,
    title: "Libraries & Frameworks",
    skills: [
      {
        color: "pink-text-gradient",
        skills: ["React", "jQuery", "Django", "Node.js", "Docker", "Flask"]
      }
    ]
  },
  {
    id: 3,
    title: "Web Development",
    skills: [
      {
        color: "blue-text-gradient",
        skills: ["HTML 5", "CSS 3", "SASS", "JavaScript", "Tailwind-CSS", "Bootstrap"]
      }
    ]
  },
  {
    id: 4,
    title: "Database Management",
    skills: [
      {
        color: "green-text-gradient",
        skills: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"]
      }
    ]
  },
  {
    id: 5,
    title: "Operating Systems",
    skills: [
      {
        color: "pink-text-gradient",
        skills: ["Windows", "Linux"]
      }
    ]
  },
  {
    id: 6,
    title: "Version Control",
    skills: [
      {
        color: "green-text-gradient",
        skills: ["Git", "SVN"]
      }
    ]
  },
  {
    id: 7,
    title: "Developer Tools",
    skills: [
      {
        color: "pink-text-gradient",
        skills: ["VSCode", "Visual Studio", "Github", "Slack", "Discord", "Trello", "Figma","Sublime"]
      }
    ]
  },
  {
    id: 8,
    title: "Software Development Methodologies",
    skills: [
      {
        color: "blue-text-gradient",
        skills: ["Agile", "Waterfall"]
      }
    ]
  },
  {
    id: 9,
    title: "Professional",
    skills: [
      {
        color: "green-text-gradient",
        skills: ["Problem-Solving", "Solution-Oriented", "Collaboration", "Communication", "Adaptability"]
      }
    ]
  }
]

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  // {
  //   name: "Ruby",
  //   icon: ruby,
  // },
  // {
  //   name: "Rails",
  //   icon: rails,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Wordpress",
    icon: wordpress,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Developer, Graphic designer and Social Media Manager",
    company_name: "E3 International ltd",
    icon: nstem,
    iconBg: "#383E56",
    points: [
      "Developing and maintaining web applications using html, css and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Social Media Marketing using all available Social Media platforms to prompt engagements",
      "Create visually appealing graphics that enhance the user experience and adhere to the company’s branding,This includes designing marketing materials such as banners, advertisements,Brochures, Reports and social media visuals including posts.",

    ],
  },
  {
    title: "Backend Developer",
    company_name: "Magis Fintech Solutions",
    icon: microverse,
    iconBg: "#E6DEDD",
    points: [
      "Developed, and maintained backend systems for financial applications using Django.",
      "Ensured smooth and efficient operation of various organizational technology features.",
      "Consistently provided effective solutions to integrate and optimize backend operations.",
      "Assisted in the development of the Ihela USSD application for seamless user interactions.",
    ],
  },
  {
    title: "Software Engineer ",
    company_name: "ACLIS Africa",
    icon: laa,
    iconBg: "#ffff",
    points: [
      "Designed and implemented user interfaces that are both user-friendly and visually appealing.",
      "Debugged code to ensure it is efficient, reliable, and secure.",
    ],
  },
  {
    title: "Python developer and Data Scientist",
    company_name: "Codsoft",
    icon: afrocentric,
    iconBg: "#E6DEDD",
    points: [
      " Worked as a Python Developer intern at CodSoft, focusing on remote development.",
      "Gained experience as a Data Scientist intern, applying analytical skills to real-world problems.",
      "Specialized in developing backend systems using Django",
      "Contributed to the team's success during the internship by leveraging Python and data science skills.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      " Polie is exactly the sort of software developer any company would love. She views writing clean, accessible code as a calling, and she's great at identifying areas where we can improve UI. I can recommend her without reservation",
    name: "Memory Usaman ",
    designation: "Conference Manager",
    company: "E3 International ltd",
    image: "https://res.cloudinary.com/polievicia123/image/upload/v1720037369/memory_ltrm1k.jpg",
  },
  {
    testimonial:
      "Polie is a very responsive and timely person with a positive attitude towards her work. She is a great developer to work with as she discusses things openly. I recommend her.",
    name: "Pierre Claver Koko Banywerha",
    designation: "CEO",
    company: "Magis Fintech Solutions",
    image: "#",
  },
  {
    testimonial:
      "She created a portfolio for me. I've never met a developer who truly cares about their clients' success like Polie does. Can't thank her enough!",
    name: "Rossi Pitie",
    designation: "Project manager",
    company: "GVC Burundi",
    image: "#",
  },
];

const projects = [
  {
    name: "Amec Africa",
    description:
      "AMEC features an extensive range of healthcare products, services, equipment, and technology from leading companies in the industry. The conference, which takes place alongside the exhibition, provides valuable insights into the latest developments, trends, and current issues in the medical and healthcare sector in Africa.",
    tags: [
      {
        name: "GoDaddy",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: deras,
    source_code_link: "https://github.com/e3-lt/amec-web",
    live_link: "https://amec24.com/"
  },
  {
    name: "Share Ride",
    description:
      "This ride-sharing app is designed to facilitate ride-sharing among individuals with similar destinations, enabling them to share rides, split fuel costs, and reduce the strain on their wallets. By connecting drivers with available seats to passengers seeking reliable and affordable transportation, this app seeks to address the challenges posed by the ongoing fuel shortage in Burundi. ",
    tags: [
      {
        name: "Render",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "blue-text-gradient",
      },
      
    ],
    image: cryptogen,
    source_code_link: "https://github.com/Vicia0/Capstone",
    live_link: "https://share-ride.onrender.com/"
  },
  {
    name: "Eco Swap",
    description:
      "The ECO-SWAP project addresses the pressing issue of electronic waste (e-waste) resulting from the rapid proliferation of electronic devices in Rwanda, posing significant environmental and health risks. ECO-SWAP aims to bridge the gap between technological advancement and responsible e-waste management.",
    tags: [
      {
        name: "javascrcipt",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind-css",
        color: "pink-text-gradient",
      },
    ],
    image: metrics,
    source_code_link: "https://github.com/Vicia0/Codextreme_E-Swap",
    live_link: "https://codextreme-e-swap-h7k5.vercel.app/"
  },
  {
    name: "E3 International Ltd",
    description:
      "E3 International Ltd is a Kigali-based registered establishment for the MICE (Meetings, Incentives, Conferences, and Exhibitions) sector with a commitment to bringing in international Conferences and Exhibitions into Kigali, Rwanda under the guidance and leadership of veterans of the MICE industry.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: memory,
    source_code_link: "https://github.com/e3-lt/amec-admin",
    live_link: "http://www.e3ltd.com/"
  },
  {
    name: "Strong Sister",
    description:
      "StrongSister is dedicated to empowering Burundian women and girls by providing tools and resources to combat gender-based violence, ensuring their safety, and promoting a culture of support and resilience throughout the community.Recognizing the urgent need to combat gender-based violence in Burundi, StrongSister provides essential and accessible services to empower and protect women and girls.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Html",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: bookstore,
    source_code_link: "https://github.com/Vicia0/StrongSister",
    live_link: "https://strong-sister.vercel.app/"
  },

];

export { services, technologies, experiences, testimonials, projects, skills };
