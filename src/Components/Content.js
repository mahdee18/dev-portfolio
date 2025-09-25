// import images
import bootstrap from "../assets/Skills/bootstrap.png"
import canva from "../assets/Skills/canva.png";
import css from "../assets/Skills/css3.png";
import expressjs from "../assets/Skills/expressjs.png";
import figma from "../assets/Skills/figma.png";
import firebase from "../assets/Skills/firebase.png";
import html from "../assets/Skills/html5.png";
import mongodb from "../assets/Skills/mongodb.png";
import nodejs from "../assets/Skills/node.png";
import reactjs from "../assets/Skills/react.png";
import tailwind from "../assets/Skills/tailwind.png";
import vscode from "../assets/Skills/vscode.png";

import img00 from '../assets/BusGo.png';
import img1 from '../assets/Capture1.png';
import img2 from '../assets/Toy1.png';
import img3 from '../assets/Thai1.png';
import img4 from '../assets/NexusBank.png';
import img5 from '../assets/RoyalRent.png';
import img6 from '../assets/EasyShop.png';
export const content = {
    skills: [
        {
            name: "React.js",
            para: "JavaScript library for building user interfaces with component-based architecture.",
            logo: reactjs,
            type: "frontend"
        },
        {
            name: "Node.js",
            para: "Runtime environment for server-side JavaScript execution.",
            logo: nodejs,
            type: "backend"
        },
        {
            name: "Express.js",
            para: "Minimalistic and flexible web application framework for Node.js.",
            logo: expressjs,
            type: "backend"
        },
        {
            name: "MongoDB",
            para: "Scalable and flexible NoSQL database storing data in JSON.",
            logo: mongodb,
            type: "backend"
        },
        {
            name: "HTML5",
            para: "Standard markup language for creating web page structure and content.",
            logo: html,
            type: "frontend"
        },
        {
            name: "CSS3",
            para: "Styling language for describing the presentation of HTML elements.",
            logo: css,
            type: "frontend"
        },
        {
            name: "Tailwind CSS",
            para: "Utility-first CSS framework providing pre-built classes.",
            logo: tailwind,
            type: "frontend"
        },
        {
            name: "Bootstrap",
            para: "Popular front-end framework with pre-designed components.",
            logo: bootstrap,
            type: "frontend"
        },
        {
            name: "Firebase",
            para: "Comprehensive backend-as-a-service platform by Google.",
            logo: firebase,
            type: "backend"
        },
        {
            name: "VS Code",
            para: "Feature-rich source code editor supporting multiple programming languages.",
            logo: vscode,
            type: "others"
        },
        {
            name: "Figma",
            para: "Collaborative and cloud-based design tool empowering teams.",
            logo: figma,
            type: "others"
        },
        {
            name: "Canva",
            para: "User-friendly graphic design platform for creating professional designs.",
            logo: canva,
            type: "others"
        },
        {
            name: "GitHub",
            para: "Streamline collaboration and elevate productivity with robust version control.",
            logo: "https://www.pardcode.com/Media/opengl3d_4.png",
            type: "others"
        },
        {
            name: "Redux",
            para: "Effortless state management enhancing JavaScript apps with simplicity and scalability.",
            logo: "https://icons.veryicon.com/png/o/education-technology/big-data-1/dide.png",
            type: "frontend"
        },
        {
            name: "Netlify",
            para: "Streamlined hosting and effortless deployment for seamless web experiences.",
            logo: "https://static-00.iconduck.com/assets.00/netlify-icon-511x512-idkvcd89.png",
            type: "others"
        },
        {
            name: "Vercel",
            para: "Swift deployments, effortless scaling. Instant previews, serverless functions. Elevate projects with unmatched speed.",
            logo: "https://www.buitengewoonanders.be/wp-content/uploads/2017/04/Black_triangle2.svg_.png",
            type: "others"
        }
    ],


  projects: [
    {
        "id": 1,
      "title": "Oxford Coach",
      "description": "A full-stack web application focused on modern digital Bus ticketing platform.",
      "image": img00,
      "tags": ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      "live_link": "https://oxford-coach-client.vercel.app/",
      "github_link": "https://github.com/mutanim24/oxford-coach-client"
    },
    {
        "id": 2,
      "title": "Nexus Bank Ltd.",
      "description": "A full-stack web application focused on modern digital banking services.",
      "image": img4,
      "tags": ["React", "Node.js", "Express", "MongoDB", "Firebase", "Tailwind CSS"],
      "live_link": "https://nexus-cc1a9.web.app/",
      "github_link": "https://github.com/codewithsiam/nexus-bank-ltd-client"
    },
    {
        "id": 3,
      "title": "Royal Rent",
      "description": "An exclusive online platform dedicated to a digital car rental web application.",
      "image": img5,
      "tags": ["React", "Node.js", "Express", "MongoDB", "JWT", "Vercel"],
      "live_link": "https://royal-rent-client.vercel.app/",
      "github_link": "https://github.com/mutanim24/royal-rent-client"
    },
    {
        "id": 4,
      "title": "Capture Academy",
      "description": "A MERN stack website focused on photography education and summer camps.",
      "image": img1,
      "tags": ["React", "Node.js", "Express", "MongoDB", "Firebase", "JWT"],
      "live_link": "https://capture-academy-1a91f.web.app/",
      "github_link": "https://github.com/mahdee18/capture-academy-client"
    },
    {
        "id": 5,
      "title": "Smart Toy Market",
      "description": "An engaging e-commerce platform for purchasing educational toys online.",
      "image": img2,
      "tags": ["React", "Node.js", "Express", "MongoDB", "Firebase Auth"],
      "live_link": "https://smarttoymarket.web.app/",
      "github_link": "https://github.com/mahdee18/smart-toy-market-client"
    },
    {
        "id": 6,
      "title": "Easy Shop",
      "description": "A clean and modern e-commerce website for a seamless online shopping experience.",
      "image": img6,
      "tags": ["React", "Next.js", "Stripe", "Tailwind CSS", "Vercel"],
      "live_link": "https://easy-shop-mu.vercel.app/",
      "github_link": "https://github.com/mahdee18/easy-shop"
    },
    {
        "id": 7,
      "title": "Thai Kitchen",
      "description": "An exclusive online platform dedicated to Thai cuisine, chefs, and recipes.",
      "image": img3,
      "tags": ["React", "Firebase", "Node.js", "Express", "Tailwind CSS"],
      "live_link": "https://thai-kitchen-d45d7.web.app/",
      "github_link": "https://github.com/mahdee18/thai-kitchen-client"
    }
  ]

};