// import images
import Hero_person from "./assets/images/Hero/profil_update_new.png";

import figma from "./assets/images/Skills/figma.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import IconDocker from "./assets/images/Skills/docker.png";
import IconFlask from "./assets/images/Skills/icons8-flask-500.png";
import IconJavascript from "./assets/images/Skills/icons8-javascript-480.png";
import IconNextJs from "./assets/images/Skills/icons8-nextjs-480.png";
import IconNestJs from "./assets/images/Skills/icons8-nestjs-480.png";
import IconTypescript from "./assets/images/Skills/icons8-typescript-480.png";
import IconPostgres from "./assets/images/Skills/postgre.png";
import python from "./assets/images/Skills/python.png";



import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import project1 from "./assets/images/Projects/yuvoci-1.png";
import project1Showcase1 from "./assets/images/Projects/yuvoci-2.png";
import project1Showcase2 from "./assets/images/Projects/yuvoci-3.png";
import project1Showcase3 from "./assets/images/Projects/yuvoci-4.png";
import project1Showcase4 from "./assets/images/Projects/yuvoci-5.png";
import project1Showcase6 from "./assets/images/Projects/yuvoci-7.png";
import project1Showcase7 from "./assets/images/Projects/yuvoci-8.png";

import project2 from "./assets/images/Projects/yuban-1.png";
import project2Showcase1 from "./assets/images/Projects/yuban-2.png";
import project2Showcase2 from "./assets/images/Projects/yuban-3.png";


import project3 from "./assets/images/Projects/checkagi-1.png";
import project3Showcase1 from "./assets/images/Projects/checkagi-2.png";
import project3Showcase2 from "./assets/images/Projects/checkagi-3.png";
import project3Showcase3 from "./assets/images/Projects/checkagi-4.png";
import project3Showcase4 from "./assets/images/Projects/checkagi-5.png";
import project3Showcase5 from "./assets/images/Projects/checkagi-6.png";
import project3Showcase6 from "./assets/images/Projects/checkagi-7.jpg";
import project3Showcase7 from "./assets/images/Projects/checkagi-8.jpg";
import project3Showcase8 from "./assets/images/Projects/checkagi-9.jpg";
import project3Showcase9 from "./assets/images/Projects/checkagi-10.jpg";
import project3Showcase10 from "./assets/images/Projects/checkagi-11.png";

import project4 from "./assets/images/Projects/superset-ai-1.png";
import project4Showcase1 from "./assets/images/Projects/superset-ai-2.png";
import project4Showcase2 from "./assets/images/Projects/superset-ai-3.png";
import project4Showcase3 from "./assets/images/Projects/superset-ai-4.png";
import project4Showcase4 from "./assets/images/Projects/superset-ai-5.png";

import person_project from "./assets/images/Projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Myresume_person from "./assets/images/Myresume/person.png";
import Myresume_person2 from "./assets/images/Myresume/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#skills",
      icon: BiUser,
    },

    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Fullstack Web Developer",
    firstName: "YUDHA",
    LastName: "SATRIA",
    btnText: "My Resume",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of Experience in Web Development",
      },
      {
        count: "4+",
        text: "the project that i have made",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "React js",
        para: "",
        logo: reactjs,
      },
      {
        name: "Nextjs js",
        para: "",
        logo: IconNextJs,
      },
      {
        name: "Docker",
        para: "",
        logo: IconDocker,
      },
      {
        name: "Flask",
        para: "",
        logo: IconFlask,
      },
      {
        name: "Postgres",
        para: "",
        logo: IconPostgres,
      },
      {
        name: "Nest js",
        para: "",
        logo: IconNestJs,
      },
      {
        name: "Python",
        para: "",
        logo: python,
      },
      {
        name: "Javascript",
        para: "",
        logo: IconJavascript,
      },
      {
        name: "Typescript",
        para: "",
        logo: IconTypescript,
      },
      {
        name: "Node js",
        para: "",
        logo: nodejs,
      },
      {
        name: "Figma",
        para: "",
        logo: figma,
      },

    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo2,
      },
      {
        title: "PhotoShop Editing",
        para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content: [
      {
        title: "CheckAgi",
        image: project3,
        description: "CheckAgi is an innovative application I developed that utilizes semantic search techniques to provide an enhanced document search experience for information related to Bank Artha Graha, employing smarter and faster methods. With the ability to retrieve information based on user queries or instructions, CheckAgi not only offers quick access to relevant documents but also features an advanced capability of automatic text summarization of document content.",
        year: 2024,
        linkUrlWeb: "",
        linkUrlRepo: "https://github.com/digitalinsightproject/diginsight-semanticsearch-backend/, https://github.com/digitalinsightproject/diginsight-semanticsearch-frontend/",
        platform: "Web",
        technologies: [
          "Next JS",
          "Flask",
          "Selenium",
          "Sentence Transformers AI",
          "Haystack",
          "PostgreSQL",
          "Tailwindcss",
        ],
        imageAppShowCase: [project3, project3Showcase1, project3Showcase2, project3Showcase10, project3Showcase3, project3Showcase4, project3Showcase5, project3Showcase6, project3Showcase7, project3Showcase8, project3Showcase9]
      },
      {
        title: "Superset Analysis AI",
        image: project4,
        description: "Superset is an application I developed within the scope of Bank Artha Graha that enables data engineers to create interactive dashboards and reports from various data sources queried by the Digital Insight division. Additionally, Superset utilizes AI (Artificial Intelligence) models to enhance data analysis, offering in-depth insights and rich visualizations.",
        year: 2024,
        linkUrlWeb: "",
        linkUrlRepo: "https://github.com/yudari/backend-superset-analysis-ai/",
        platform: "Web",
        technologies: [
          "Javascript",
          "Docker",
          "Sequelize",
          "Express JS",
          "PostgreSQL",
        ],
        imageAppShowCase: [project4, project4Showcase1, project4Showcase2, project4Showcase3, project4Showcase4]
      },
      {
        title: "YuVoci",
        image: project1,
        description: "YuVoci is a FullStack JavaScript web application that allows users to purchase game top-up vouchers through a fast and secure method. The application is built using Next.js for the frontend and Express.js for the backend to create its REST APIs, with MongoDB as the database.",
        year: 2022,
        linkUrlWeb: "https://yuvoci.vercel.app/",
        linkUrlRepo: "https://github.com/yudari/yuvoci",
        platform: "Web",
        technologies: [
          "Next JS",
          "React JS",
          "Express JS",
          "Bootstrap 5",
          "JWT Authentication",
          "AOS",
          "MongoDB"
        ],
        imageAppShowCase: [project1, project1Showcase1, project1Showcase2, project1Showcase3, project1Showcase4, project1Showcase6, project1Showcase7]
      },
      {
        title: "Yuban",
        image: project2,
        description: "Yuban is a web application that allows users to track progress or tasks they want to accomplish in a board. Yuban is built using the React.js framework, with ToDo data stored in localStorage. The application also implements a drag-and-drop feature using the DND library to make it easier for users to organize tasks on the board",
        year: 2022,
        linkUrlWeb: "https://yuban.vercel.app/",
        linkUrlRepo: "https://github.com/yudari/yuban",
        platform: "Web",
        technologies: [
          "Javascript",
          "LocalStorage",
          "DnD",
        ],
        imageAppShowCase: [project2, project2Showcase1, project2Showcase2]
      },
      // {
      //   title: "Creative Website",
      //   image: project3,
      // },
    ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "JOHN DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Myresume: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Myresume_person,
    image2: Myresume_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "yuda.satria024@gmail.com",
        icon: GrMail,
        link: "mailto:yuda.satria024@gmail.com",
      },
      {
        text: "+6282255070757",
        icon: MdCall,
        link: "https://wa.me/+6282255070757",
      },
      {
        text: "yudari",
        icon: BsGithub,
        link: "https://github.com/yudari",
      },
      {
        text: "yudhasatria22",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/yudhasatria22/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
