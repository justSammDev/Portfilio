import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  movie,
  nike,
  eventify,
  promptopia,
  danDrepairs,
  freelancer,
  brainwave,
  yoom,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },

  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Freelance",
    icon: freelancer,
    iconBg: "#a2d2ff",
    date: "Jan 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/justSammDev",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/samridda-devkota-1733992a1/",
  },
];

export const projects = [
  {
    iconUrl: nike,
    theme: "btn-back-red",
    name: "Nike Product Showcase",
    description:
      "Developed a beautiful web application that shows the nike products and shows the prices for some beautiful appreal.",
    link: "https://nike-18.web.app/",
    github: "https://github.com/justSammDev/NikeLandingPage",
  },
  {
    iconUrl: promptopia,
    theme: "btn-back-yellow",
    name: "AI Prompt Sharing App",
    description:
      "Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts.This allows its user to share and discover AI prompts",
    link: "https://promptopia-orcin-five.vercel.app/",
    github: "https://github.com/justSammDev/promptopia",
  },
  {
    iconUrl: eventify,
    theme: "btn-back-blue",
    name: "Event Sharing App",
    description:
      "Built a web app for creating and sharing events as well as event tickets. Implemented stripe for realtime sale and purchase of tickets to events.",
    link: "https://eventify-nine.vercel.app/",
    github: "https://github.com/justSammDev/eventify",
  },
  {
    iconUrl: danDrepairs,
    theme: "btn-back-pink",
    name: "Ticketing App",
    description:
      "Built a complete ticket based app where the admin can task his employess with tasks and the employees can complete the task. Based on the requirements of the admin.",
    link: "https://techhynotes.onrender.com/",
    github: "https://github.com/justSammDev/techhy-frontend",
  },
  {
    iconUrl: movie,
    theme: "btn-back-black",
    name: "Movie Database Checking App",
    description:
      "Developed a web application to check the IMDB database for the latest movies and tvshows and add them to favourites.",
    link: "https://movietvshowdb.netlify.app/",
    github: "https://github.com/justSammDev/MovieDB",
  },
  {
    iconUrl: brainwave,
    theme: "btn-back-green",
    name: "Modern UI/UX App",
    description:
      "Developed a beautiful modern UI/UX application that utilizes some of the latest UI practices.",
    link: "https://bwave.netlify.app/",
    github: "https://github.com/justSammDev/brainwave-project",
  },
  {
    iconUrl: yoom,
    theme: "btn-back-blue",
    name: "Zoom",
    description:
      "Built a zoom clone with most of its features using Stream.io for meeting functionalities and Clerk for user management ",
    link: "https://zoom-clone-self.vercel.app/",
    github: "https://github.com/justSammDev/zoom_clone",
  },
];
