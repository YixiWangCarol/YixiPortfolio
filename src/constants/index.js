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
    meta,
    starbucks,
    ucl,
    bnuz,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    project1,
    project2,
    project3,
    project4,
    project5,
    project6
  } from "../assets";
  
  export const navLinks = [
    
    {
      id: "project",
      title: "Project",
    },
    {
    id: "skills",
    title: "Skills",
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
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Game developer",
      icon: backend,
    },
    {
      title: "Photographer",
      icon: creator,
    },
    {
      title: "animator",
      icon: web,
    },
    {
      title: "video editor",
      icon: mobile,
    }
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
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
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
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
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "University College London",
      company_name: "Digital Media Production - Master's Degree",
      icon: ucl,
      iconBg: "#383E56",
      date: "September 2021 - September 2022",
      points: [
        "Developed a 3D tower defense game and a 2D shooter which the players who were tested found interesting and challenging.",
        "Creating and conceptualising 3D animations using Maya and After Effects",
      ],
    },
    {
      title: "Beijing Normal University,Zhuhai",
      company_name: "Computer Science - Bachelor's Degree",
      icon: bnuz,
      iconBg: "#E6DEDD",
      date: "September 2016 - June 2020",
      points: [
        "Top Grade Scholarship (award to only one student among a class)",
        "Persons of the Year” of College Student",
        "Won second Prize in the Chinese College Students Computer Design Competition (national level)"
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
      name: "3D game display",
      description:
        `Display of the game and characters in "3D" visuals. By sliding the mouse, the characters "stand up" from the cards. Very cool!
        Gsap(GreenSock Animation Platform) is easy to use and so cool!!! There are many optional plugins and easing functions for achieving advanced effects easily like scrolling, morphing, animating along a motion path or FLIP animations.`,
      belong:'f',
       
      tags: [
        {
          name: "Gsap",
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
      image:  project1,
      source_code_link: "https://github.com/YixiWangCarol/3DgameDisplay",
      source_code_display:"https://3dgameinfor-yixi.netlify.app/"
    },
    {
      name: "memeGenerator",
      description:
        "Develop meme generator using React. When you click on the button, you can get the random image and text you want.",
      belong:'f',
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image:  project2,
      source_code_link: "https://github.com/YixiWangCarol/memeGenerator",
      source_code_display:"https://meme-generator-yixi.netlify.app/"
    },
    {
      name: "Gallery",
      description:
        "combined famous paintings with some relevant elements to make it look very interesting.",
      belong:'f',
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image:  project3,
      source_code_link: "https://github.com/YixiWangCarol/Gallery",
      source_code_display:"https://famouspaintings-yixi.netlify.app/"
    },
    {
      name: "2D Shooting Game",
      description:
        "Designed and programmed 2D shooting game by using C# and Unity.",
      belong:'o',
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "Unity",
          color: "green-text-gradient",
        }
      
      ],
      image:  project4,
      source_code_link: "",
      source_code_display:"https://www.youtube.com/watch?v=LyGI0Qf999w"
    },
    {
      name: "Dancing Girl",
      description:
        "Made this animation in five days. Conceive the storyline and drew the storyboards, then selected the models, created the animations and rendered them, and finally edited them.",
      belong:'o',
      tags: [
        {
          name: "Maya",
          color: "blue-text-gradient",
        },
        {
          name: "After Effect",
          color: "green-text-gradient",
        }
      
      ],
      image:  project5,
      source_code_link: "",
      source_code_display:"https://www.youtube.com/watch?v=wU40ho9SRR0"
    },
    {
      name: "Protect PolarBear",
      description:
        "Global warming is getting worse, so I made the tower defence game to protect the polar bears. Players need to set up turrets to protect the polar bears.",
      belong:'o',
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "Unity",
          color: "green-text-gradient",
        }
      
      ],
      image:  project6,
      source_code_link: "",
      source_code_display:"https://www.youtube.com/watch?v=Vz3oZRISHmM"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };