import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  cdm,
  hive,
  pred,
  ragbot,
  jobit,
  tripguide,
  threejs,
  varun,
  thyag,
  will,
  vini,
  angular
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Engineer",
    icon: web,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
  {
    title: "AI / ML Enthusiast",
    icon: backend,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
];

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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name:"Angular",
    icon: angular
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Softwar Engineering Intern",
    company_name: "Hive Networks Inc.",
    icon: hive,
    iconBg: "#E6DEDD",
    date: "Jul 2024 - Oct 2024",
    points: [
      "Implemented bug fixes and developing features using Vue.js, Quasar, Node/Koa.js, MSSQL, Chart.js, TypeScript, C#, Github Actions, yarn within an Nx monorepo and microservices improving team efficiency by at least 25%",
      "Contributed in developing an Azure Cloud OpenAI Chatbot & AI Search leveraging LLMs from knowledge base, processing over 1,000 user queries daily improving user experiences by 60%.",
      "Created Tags Suggestion feature for multiple networks, performed migration of data using complex SQL Queries, Stored Procedures & DDL reducing migration time by 40%.",
      "Crafted a Chart Download and Generation feature using SCSS, improving user efficiency by 25%, while adhering to Object-Oriented Programming (OOP) principles, RESTful API standards, and best security practices.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Presidio Inc",
    icon: pred,
    iconBg: "#383E56",
    date: "Nov 2020 - Jul 2023",
    points: [
      "Led a cross-functional team managing six customer-facing applications, developed 30+ interactive screens with backend integration, and optimized container orchestration using Docker/Kubernetes, ensuring issue resolution",
      "Drove business impact, securing a contract renewal that increased revenue by 15%, earning the 'Above & Beyond' Award after being promoted within 12 months for exceptional performance",
      "Executed a critical 1.4 TB database migration from on-premises to the cloud, reducing database size by 88% and improving efficiency by 65%, leveraging Java and advanced technical design expertise",
      "Modernized legacy systems, improving usability and reducing runtime performance by 50% by overhauling three production applications, including JasperReports.",
      "Enhanced system reliability and security, achieving 99.9% uptime via CI/CD pipelines, reducing core application load time by 40% with DB indexing and Redis caching, and strengthening security for a government agency app, cutting vulnerabilities by 15%."
    ],
  },
  {
    title: "Product Engineer",
    company_name: "Codingmart Technologies Pvt Ltd",
    icon: cdm,
    iconBg: "#E6DEDD",
    date: "Dec 2019 - Oct 2020",
    points: [
      "Designed and Developed SPA UI Applications for over 3 clients using CSS3, HTML5, Angular, SCM, and React, Redux with webpack; websites scoring over 85 on Lighthouse by performance tuning and SEO.",
      "Fostered and programmed an automatic event time slots booking module using Data structures and Algorithms improving User Experience by 40%",
      "Successfully assembled 3rd party APIs integration, enhancing application functionality and user experience by 20% and optimised the Application performance by 30% using Next.js SSR and Google Page Insights..",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      `Siva Krishna Reddy is a remarkable talent who made significant contributions to our team who joined Presidio.
What truly sets Siva apart is his leadership abilities. In a remarkably short period, he took on the role of leading a team, guiding and motivating their colleagues, and ensuring project success. 
Siva consistently received kudos and recognition from both colleagues and clients for their outstanding work. His dedication to the project and the team was unwavering, and he consistently delivered high-quality results..`,
    name: "Varun Venkatasubramanian",
    designation: "Lead Engineer",
    company: "Presidio Inc",
    image: varun,
  },
  {
    testimonial:
      "I highly recommend Siva as an exceptional team player. He took ownership of a critical project, leading a diverse team with various tech stacks. Siva is a great listener and eagerly takes on challenges. He would be a valuable asset for any development role and has strong leadership potential. It was a pleasure working with him, and I wish him the best in all his future endeavors.",
    name: "Thiyagraj M",
    designation: "Technical Manager",
    company: "Presidio Inc",
    image: thyag,
  },
  {
    testimonial:
      "Siva was a critical member of the development team working with me on a mission critical solution for a State agency. He could always be trusted to go the extra mile and commit himself to project success.",
    name: "Will Strickland",
    designation: "Vice President",
    company: "capital BPM",
    image: will,
  },
  {
    testimonial:
      "I worked with Siva at Codingmart Technologies. He has exceptional technical and logical abilities. He collaborated with me on react and node. Despite the fact that he was a newcomer at the time, he completed all of his tasks on time and with high quality. He was also willing to assist other members of the team.",
    name: "Vinitha Shree",
    designation: "senior Consultant",
    company: "Codingmart Technologies",
    image: vini,
  },
];

const projects = [
  {
    name: "RAG AI Assistant QA BOT",
    description:
      "Developed a RAG-based QA Bot that processes large documents and answers queries 10x faster, boosting efficiency.",
    tags: [
      {
        name: "Rag",
        color: "blue-text-gradient",
      },
      {
        name: "LangChain",
        color: "green-text-gradient",
      },
      {
        name: "Gradio",
        color: "pink-text-gradient",
      },
    ],
    image: ragbot,
    source_code_link: "https://github.com/psivakrishnareddy/RAG-QABOT-ASSISTANT",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
