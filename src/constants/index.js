
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


export const navLinks = [


  {
    id: "about",
    title: "About",
    
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  /*
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  /*{
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  */
  {
    title: "Ui UX Designer",
    icon: creator,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
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
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Tekisky",
    icon: tekisky,
    iconBg: "#383E56",
    date: "Jan 2023 - present",
    points: [
      "Developing and maintaining web applications using MERN technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Priyanka proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Priyanka does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Priyanka optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Fuel Delivery Web Application",
    description:
      "User‑friendly MERN platform for fuel ordering and delivery with real‑time tracking, automated order processing, and inventory management.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "node", color: "pink-text-gradient" },
      { name: "express", color: "white-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
    ],
    image: project2,
    source_code_link: "https://github.com/Priyanka-99999/FUEL-DELIVERY-WEB-APPLICATION",
  },
  {
    name: "Heart Disease Prediction",
    description:
      "ML models (SVM, Decision Tree, Random Forest, ANN, Naive Bayes) with preprocessing and evaluation; best ROC‑AUC 0.92 and 91.28% accuracy.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "scikit-learn", color: "green-text-gradient" },
      { name: "ml", color: "pink-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/Priyanka-99999/HEART-DISEASE-PREDICTION",
  },
  {
    name: "BlokCare",
    description:
      "Decentralized health record management enabling secure, transparent sharing of medical data among patients, doctors, and hospitals.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "node", color: "pink-text-gradient" },
      { name: "express", color: "white-text-gradient" },
      { name: "javascript", color: "green-text-gradient" },
    ],
    image: gearXpert,
    source_code_link: "https://github.com/Priyanka-99999/Secure-Healthcare-Data-Management-with-Blockchain",
  },
];

export { services, technologies, experiences, testimonials, projects };
