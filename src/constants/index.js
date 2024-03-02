import { igLogo, itc, meta, shopify, starbucks, tesla } from "../assets/images";
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
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    primeng,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    vuejs,
    angular,
    firebase,
    nuxt,
    mysql,
    postgres
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: express,
    //     name: "Express",
    //     type: "Backend",
    // },
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
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    // {
    //     imageUrl: motion,
    //     name: "Motion",
    //     type: "Animation",
    // },
    {
        imageUrl: primeng,
        name: "PrimeNG",
        type: "Frontend",
    },
    {
        imageUrl: vuejs,
        name: "Vue.js",
        type: "Frontend",
    },
    {
        imageUrl: nuxt,
        name: "Nuxt.js",
        type: "Frontend",
    },
    // {
    //     imageUrl: nodejs,
    //     name: "Node.js",
    //     type: "Backend",
    // },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Service",
    },
    // {
    //     imageUrl: react,
    //     name: "React",
    //     type: "Frontend",
    // },
    {
        imageUrl: postgres,
        name: "Postgres",
        type: "Database",
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    // {
    //     imageUrl: tailwindcss,
    //     name: "Tailwind CSS",
    //     type: "Frontend",
    // },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Frontend Developer",
        company_name: "IG Tech",
        icon: igLogo,
        iconBg: "#f0d688",
        date: "Mar 2022 - Present",
        points: [
            "Developing and maintaining web applications using Angular and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Frontend Developer Intern",
        company_name: "Institute of Technology of Cambodia",
        icon: itc,
        iconBg: "#a2d2ff",
        date: "Aug 2021 - Oct 2021",
        points: [
            "Developing and maintaining existing school web applications using Nuxt.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ei-saltedfish',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ilenvin',
    }
];

export const projects = [
    // {
    //     iconUrl: pricewise,
    //     theme: 'btn-back-red',
    //     name: 'Amazon Price Tracker',
    //     description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
    //     link: 'https://github.com/adrianhajdin/pricewise',
    // },
    // {
    //     iconUrl: threads,
    //     theme: 'btn-back-green',
    //     name: 'Full Stack Threads Clone',
    //     description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    //     link: 'https://github.com/adrianhajdin/threads',
    // },
    {
        iconUrl: threads,
        theme: 'btn-back-blue',
        name: 'Chat App',
        description: 'chat app using Firebase',
        link: 'https://https://github.com/ilenvin/ei-chat',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Todo Tracker',
        description: 'a simple todo tracker app',
        link: 'https://github.com/ilenvin/todo_tracker',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Hospital Website',
        description: 'school project for hospital commercial website where users can browse through service provided',
        link: 'https://github.com/VuthyDara/hospital-website',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Employee Management',
        description: 'first school project using c programming language to add, update, view and delete employee\'s info.',
        link: 'https://github.com/ilenvin/EMPLOYEEmenagement',
    }
];