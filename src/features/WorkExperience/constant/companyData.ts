import AccentureLogo from "@/assets/accenture_logo.png";
import NetlinkLogo from "@/assets/netlink_logo.png";
import LTIMindtreeLogo from "@/assets/ltimindtree_logo.png";

const companyData = [
    {
        company_name: "LTIMindtree",
        company_url: "https://www.ltimindtree.com/",
        position: "Senior Product Engineer",
        duration: "February 2024 - Present",
        techStack: ["JavaScript","TypeScript", "React.js","Redux","System Design"],
        description: "Worked as a Senior Product Engineer, refactoring large-scale legacy React applications to make them scalable and maintainable. Architected the frontend design system and application structure to support modular development and future scalability. ",
        logo:LTIMindtreeLogo,
        responsibilities: [
            "Owned frontend system design at scale, making architectural trade-offs across performance, scalability, and developer experience, and setting standards adopted across teams.",
            "Designed and implemented the frontend architecture, establishing scalable patterns, modular design, and best practices to support long-term product growth and faster feature development",
            "Collaborated closely with product managers, designers, and backend teams to deliver high-quality features, ensure architectural consistency, and improve overall development efficiency.",
            "Applied frontend system design principles to build scalable React architectures with well-defined component structure, state management, and data flow",
            "Create the ChatBox component using Honeywell Knowledge bases and integrated it with the existing React application, ensuring seamless user experience and efficient data retrieval.",
        ]
    },
    {
        company_name: "Accenture Ltd",
        company_url: "https://www.accenture.com/",
        position: "Senior Analyst",
        duration: "February 2022 - February 2024",
        techStack: ["JavaScript","TypeScript", "React.js", "Jest", "Redux"],
        description: "Worked as a Senior Analyst (Frontend), building and optimizing enterprise-grade web applications with React.js and JavaScript, driving state management architecture, and improving UI reliability through Jest testing to deliver maintainable, high-quality frontend solutions.",
        logo:AccentureLogo,
        responsibilities: [
            "Built UI components from scratch and structured them using Atomic Design methodology for scalable and reusable frontend systems.",
            "Optimized React rendering pipelines and API orchestration, reducing HTTP requests by 80% and improving dashboard load time by 2.5x",
            "Led state management architecture using Redux and Context API, enhancing application scalability and maintainability.",
            "Integrated 3DS Credit Card and Tabby Payment systems with React.js, including OTP and instalment features."
        ]
    },
    {
        company_name: "Netlink Solutions Pvt Ltd",
        company_url: "https://netlink.com/",
        position: "Software Engineer (Associate to Senior)",
        duration: "January 2019 - January 2022",
        techStack: ["JavaScript", "React.js", "Node.js", "MongoDB"],
        description: "Worked as a Full Stack Developer, designing and maintaining end-to-end web applications with a strong focus on performance and scalability. Contributed to backend optimizations using load balancing and in-memory databases, improved API efficiency, and delivered stable, high-performing user experiences across platforms.",
        logo:NetlinkLogo,
        responsibilities: [
            "Developed and maintained web applications using React.js for front-end and Node.js with Express.js for back-end.",
            "Optimized application performance by identifying and resolving bottlenecks, resulting in a 20% increase in load times.",
            "Implemented responsive design principles to ensure applications were mobile-friendly and accessible across various devices.",
            "Use technique like code splitting and lazy loading to improve application performance.",
        ]
    },

];

export default companyData;