import { FaNodeJs, FaPython, FaDocker, FaAws, FaGitAlt, FaCogs } from "react-icons/fa";
import {
    SiScikitlearn, SiTensorflow, SiFlask, SiFastapi, SiDjango, SiJavascript, SiDotnet, SiAlpinedotjs, SiReact, SiHtmx, SiTailwindcss, SiMongodb, SiPostgresql, SiGooglecloud, SiExpress, SiGraphql
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

// Import your project images
import ProjectImage1 from "../assets/images/project2.png";
import ProjectImage2 from "../assets/images/project1.png";
import ProjectImage3 from "../assets/images/project3.png";
import ProjectImage4 from "../assets/images/project4.png";
import ProjectImage5 from "../assets/images/project5.png";

export const SKILLS = [
    { name: "Python", icon: FaPython },
    { name: "FastAPI", icon: SiFastapi },
    { name: "Django", icon: SiDjango },
    { name: "Flask", icon: SiFlask },
    { name: "JavaScript", icon: SiJavascript },
    { name: "NodeJS", icon: FaNodeJs },
    { name: "Express", icon: SiExpress },
    { name: "Hapi", icon: FaNodeJs },
    { name: "C#", icon: TbBrandCSharp },
    { name: "ASP.NET", icon: SiDotnet },
    { name: "Alpine", icon: SiAlpinedotjs },
    { name: "React", icon: SiReact },
    { name: "HTMX", icon: SiHtmx },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "SQL", icon: SiPostgresql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Neo4j", icon: SiGraphql },
    { name: "Git", icon: FaGitAlt },
    { name: "Docker", icon: FaDocker },
    { name: "SDLC", icon: FaCogs },
    { name: "AWS", icon: FaAws },
    { name: "GCP", icon: SiGooglecloud },
    { name: "Tensorflow", icon: SiTensorflow },
    { name: "Scikit-learn", icon: SiScikitlearn }
];

export const PROJECTS = [
    {
        title: "Predictive Maintenance Copilot: Use Case by Accenture",
        description: "Architected and led the development of a predictive maintenance platform for the manufacturing sector, orchestrating a microservices ecosystem (simulator, backend with Hapi & NodeJS, ML inference service, agent service) to monitor industrial machine health. Implemented real-time event streaming via Socket.IO and engineered an Agentic AI service using FastAPI, LangChain, and LangGraph for health summaries and maintenance recommendations. Optimized database performance with TimescaleDB.",
        tags: ["Node.js", "Hapi", "FastAPI", "LangChain", "LangGraph", "Socket.IO", "TimescaleDB", "Microservices", "GitHub"],
        image: ProjectImage1,
        github: "https://github.com/NaufalHD12/predictive-maintenance-copilot", // Assuming, since not in resume
        demo: "https://demo-link.com", // Placeholder
    },
    {
        title: "EcoTracker: A MERN-stack Application for Tracking Personal Carbon Footprints",
        description: "Architected a robust RESTful API with Node.js and Express, featuring comprehensive OpenAPI documentation. Optimized performance with Redis caching and Upstash rate limiting. Secured data with JWT-based authentication and RBAC, input validation with Joi. Managed NoSQL data with MongoDB for user profiles, activity logs, and historical tracking.",
        tags: ["Node.js", "Express", "MongoDB", "Redis", "JWT", "OpenAPI", "MERN", "GitHub"],
        image: ProjectImage2,
        github: "https://github.com/NaufalHD12/eco-tracker",
        demo: "https://eco-tracker-demo.com",
    },
    {
        title: "Persona Nexus: AI-Powered Community Platform",
        description: "Built a full-stack community platform with Django, HTMX, and Alpine.js featuring complete social features, a private messaging system, and AI functionality for a writing assistant and automated content moderation.",
        tags: ["Django", "HTMX", "Alpine.js", "AI", "AWS", "Docker", "CI/CD", "GitHub"],
        image: ProjectImage1,
        github: "https://github.com/NaufalHD12/PersonaNexus",
        demo: "https://www.personanexus.club/",
    },
    {
        title: "AcneScan: Acne Detection App",
        description: "Designed and trained a CNN image classification model (TensorFlow, EfficientNetB0) to detect 5 types of acne with a 98% F1-score. Built a predictive API with Flask and deployed it on Google Cloud Run for integration with an Android application.",
        tags: ["TensorFlow", "CNN", "Flask", "Google Cloud", "API", "TFLite", "GitHub"],
        image: ProjectImage2,
        github: "https://github.com/Acne-Scan",
        demo: "https://drive.google.com/file/d/1tg0LwGrO4f-aTzngO_I0wPe1GmEPcTZ_/view?usp=sharing",
    },
    {
        title: "Synapsis AI: Smart CV Screening System",
        description: "Engineered an intelligent system to analyze job descriptions against dozens of CVs simultaneously in English and Indonesian. Utilizes an NLP pipeline to generate matching scores, candidate analysis, and downloadable Excel reports.",
        tags: ["Python", "Flask", "NLP", "AI", "Pandas", "PDF Processing", "GitHub"],
        image: ProjectImage3,
        github: "https://github.com/NaufalHD12/synapsis-ai",
        demo: " https://synapsis-ai-production.up.railway.app/",
    },
    {
        title: "VentureMind: AI Business Co-Pilot",
        description: "Designed a multi-agent AI system using CrewAI & GPT-4.1-mini, where agents with specialized roles (Visionary, Analyst, Critic) collaborate to generate comprehensive business strategy reports. Integrated RAG with the Tavily Search API for real-time market data and built a long-term memory system.",
        tags: ["Python", "FastAPI", "CrewAI", "PostgreSQL", "Docker", "GPT-4.1-mini", "GitHub"],
        image: ProjectImage4,
        github: "https://github.com/NaufalHD12/venture-mind",
        demo: "https://venture-mind-production-531d.up.railway.app/",
    },
    {
        title: "Anime Recommendation System",
        description: "Developed a robust recommendation system model using Content-Based and Collaborative Filtering. The system helps users discover new anime by analyzing metadata and user ratings, achieving high precision and low prediction error.",
        tags: ["Python", "Tensorflow", "Scikit-learn", "Pandas", "GitHub"],
        image: ProjectImage5,
        github: "https://github.com/NaufalHD12/anime-recommendation-system",
        demo: "https://github.com/NaufalHD12/anime-recommendation-system",
    }
];

export const TIMELINE = [
    {
        title: "Software Engineering Student",
        subtitle: "Universitas Pendidikan Indonesia",
        date: "2022 - Present",
        description: "Currently pursuing a Bachelor's degree with a current GPA of 3.81, focusing on software development and system design."
    },
    {
        title: "Machine Learning Cohort",
        subtitle: "Bangkit Academy 2024",
        date: "September 2024 - January 2025",
        description: "Completed an intensive program led by Google, GoTo & Traveloka, focusing on ML concepts, TensorFlow, and a final capstone project."
    },
    {
        title: "Software Engineer Intern | WFO",
        subtitle: "PT Kilang Pertamina Internasional",
        date: "February 2025 – May 2025",
        description: "Developed an AI-powered data entry automation system (RAG) using Python and a full-stack equipment registration app using ASP.NET Core MVC."
    },
    {
        title: "Data Scientist Intern | Remote",
        subtitle: "Home Credit Indonesia",
        date: "February 2025 – March 2025",
        description: "Developed credit scoring models achieving 96% accuracy and executed an end-to-end data science workflow, including EDA and feature engineering."
    },
    {
        title: "React & Backend with AI Program",
        subtitle: "Asah by Dicoding & Accenture",
        date: "August 2025 - Present",
        description: "Participating in an advanced program focused on full-stack development with React, backend technologies, and AI integration."
    }
];

export const CERTIFICATIONS = [
    { name: "Machine Learning by Stanford University & DeepLearning.AI" },
    { name: "DeepLearning.AI Tensorflow Developer" },
    { name: "Tensorflow: Data and Deployment by DeepLearning.AI" },
    { name: "Machine Learning Operations (MLOps) by Dicoding" },
    { name: "Applied Machine Learning by Dicoding" },
    { name: "Web Application Development with React by Dicoding" },
    { name: "Back-End Development with JavaScript by Dicoding" },
    { name: "Cloud and Gen AI on AWS by Dicoding" },
    { name: "Full Stack Web Development with Django 5 by Jose Salvatierra" },
    { name: "Software Architecture & Design of Modern Large Scale Systems" },
];

export const SOCIALS = {
    github: "https://github.com/NaufalHD12",
    linkedin: "https://linkedin.com/in/naufalhd12",
    instagram: "https://instagram.com/naufalhd1",
};
