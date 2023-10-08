import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    jwt,
    html,
    css,
    reactjs,
    redux,
    mui,
    nodejs,
    mongodb,
    git,
    figma,
    meta,
    starbucks,
    teentechies,
    tesla,
    shopify,
    techm,
    carrent,
    strategix,
    ecommerce,
    jobit,
    codepen,
    
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      name: "Redux Toolkit",
      icon: redux,
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
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "JWT",
      icon: jwt,
    },
    {
      name: "Material UI",
      icon: mui,
    },
    
  ];
  
  const experiences = [
    {
      title: "Associate Customer Support",
      company_name: "Tech Mahindra",
      icon: techm,
      iconBg: "#383E56",
      date: "November 2018 - June 2019",
      points: [
        "Effectively responded to incoming phone and chat contacts from consumers, consistently adhering to quality- and time-sensitive call center criteria.",
        "Accurately entered customer interaction details into software, ensuring seamless tracking of requests,documentation of problems, and recording of solutions offered.",
      ],
    },
    {
      title: "Associate Web Developer",
      company_name: "Teentechies private limited",
      icon: teentechies,
      iconBg: "#E6DEDD",
      date: "September 2020 - Feb 2022",
      points: [
        "Updated back-end code for Delivor, a popular food delivery service mobile app with over 6000 users.",
        `Managed and supervised the analytical department and database for the project, also mentoring and
        providing training to interns`,
       
      ],
    },
   
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Strategix",
      description:
        "This system enables companies to efficiently handle daily operations, including project management, personnel tracking, attendance, leave, and complaint management.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "express",
          color: "red-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "material UI",
          color: "pink-text-gradient",
        },
      ],
      image: strategix,
      source_code_link: "https://github.com/aiswaryakv2595/company-management",
    },
    {
      name: "Oxiworld",
      description:
        "This is a simple ecommerce with features like user management, cart, Wishlist, orders etc",
      tags: [
        {
          name: "express",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/aiswaryakv2595/oxiworld",
    },
    {
      name: "Codepen Clone",
      description:
        "This is the clone of the codepen application which is used for testing HTML, CSS and Javascript.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "react-ace",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: codepen,
      source_code_link: "https://github.com/aiswaryakv2595/codepen-clone",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };