import { FaNodeJs, FaPython, FaDocker, FaAws, FaGitAlt, FaCogs, FaRobot, FaDatabase } from "react-icons/fa";
import {
    SiScikitlearn, SiTensorflow, SiFlask, SiFastapi, SiDjango, SiJavascript, SiDotnet, SiAlpinedotjs, SiReact, SiHtmx, SiTailwindcss, SiMongodb, SiPostgresql, SiGooglecloud, SiExpress, SiGraphql, SiLangchain, SiSocketdotio, SiRedis, SiOpenai, SiChartdotjs, SiPandas, SiNumpy, SiPlotly
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

// Import your project images
import ProjectImage1 from "../assets/images/project1.png";
import ProjectImage2 from "../assets/images/project2.png";
import ProjectImage3 from "../assets/images/project3.png";
import ProjectImage4 from "../assets/images/project4.png";
import ProjectImage5 from "../assets/images/project5.png";
import ProjectImage6 from "../assets/images/project6.png";
import ProjectImage7 from "../assets/images/project7.png";
import ProjectImage8 from "../assets/images/project8.png";
import ProjectImage9 from "../assets/images/project9.png";
import ProjectImage10 from "../assets/images/project10.png";
import ProjectImage11 from "../assets/images/project11.png";

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
    { name: "Redis", icon: SiRedis },
    { name: "TimescaleDB", icon: FaDatabase },
    { name: "Neo4j", icon: SiGraphql },
    { name: "Git", icon: FaGitAlt },
    { name: "Docker", icon: FaDocker },
    { name: "SDLC", icon: FaCogs },
    { name: "AWS", icon: FaAws },
    { name: "GCP", icon: SiGooglecloud },
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "Scikit-learn", icon: SiScikitlearn },
    { name: "Pandas", icon: SiPandas },
    { name: "NumPy", icon: SiNumpy },
    { name: "Plotly", icon: SiPlotly },
    { name: "LangChain", icon: SiLangchain },
    { name: "OpenAI", icon: SiOpenai },
    { name: "AI/ML", icon: FaRobot },
    { name: "Chart.js", icon: SiChartdotjs },
    { name: "Socket.IO", icon: SiSocketdotio }
];

export const PROJECTS = [
    {
        slug: "predictive-maintenance-copilot",
        title: "Predictive Maintenance Copilot: Use Case by Accenture",
        summary: "Architected a microservices-based predictive maintenance platform for manufacturing, integrating AI agents for real-time machine health analysis and alerts.",
        description: [
            "Architected and led the development of a predictive maintenance platform for the manufacturing sector, orchestrating a microservices (simulator, backend [Hapi & NodeJS], ML inference service, agent service) ecosystem to monitor industrial machine health.",
            "Implemented real-time event streaming via Socket.IO to deliver critical machine failure alerts and synchronized updates across the dashboard.",
            "Engineered an Agentic AI service using FastAPI, LangChain, and LangGraph to analyze telemetry data, providing engineers with real-time health summaries, root cause analysis, and actionable maintenance recommendations.",
            "Optimized database performance for time-series workloads by implementing TimescaleDB, enabling efficient storage and retrieval of massive machine sensor logs.",
        ],
        techStack: ["Hapi", "NodeJS", "FastAPI", "LangChain", "LangGraph", "Socket.IO", "TimescaleDB"],
        highlights: ["Microservices architecture", "Agentic AI", "Real-time streaming"],
        image: ProjectImage1,
        github: "https://github.com/NaufalHD12/predictive-maintenance-copilot",
    },
    {
        slug: "eco-tracker",
        title: "EcoTracker: A MERN-stack Application for Tracking Personal Carbon Footprints",
        summary: "Built a scalable MERN-stack app with RESTful APIs, caching, and secure authentication for users to track and reduce their carbon footprints.",
        description: [
            "Architected a robust RESTful API with Node.js and Express, featuring comprehensive OpenAPI documentation for clear frontend integration.",
            "Optimized application performance by integrating Redis for efficient caching strategies and Upstash rate limiting to prevent abuse.",
            "Secured user data through a JWT-based authentication system with role-based access control (RBAC) and rigorous input validation using Joi.",
            "Managed NoSQL data modeling with MongoDB, designing schemas for user profiles, activity logs, and historical tracking data to support scalable growth.",
        ],
        techStack: ["Node.js", "Express", "MongoDB", "Redis", "Upstash", "JWT", "Joi"],
        highlights: ["RESTful API", "Caching & Rate Limiting", "RBAC Security"],
        image: ProjectImage2,
        github: "https://github.com/NaufalHD12/eco-tracker",
        demo: "https://eco-tracker-demo.com",
    },
    {
        slug: "persona-nexus",
        title: "Persona Nexus: AI-Powered Community Platform",
        summary: "Developed a full-stack community platform with AI moderation, real-time features, and DevOps pipeline for seamless social interactions.",
        description: [
            "Architected and developed the full-stack web application from scratch using Django, HTMX, and Alpine.js to create a dynamic and interactive community platform.",
            "Implemented comprehensive social features, including an OAuth authentication system (Google/Discord social login), dynamic content feeds, real-time voting and notifications, and a private direct messaging system.",
            "Integrated AI functionality for an AI Writing Assistant and automated content moderation, which proactively flags inappropriate text for review.",
            "Built a custom admin dashboard with complete moderation tools, content management (CRUD), and analytics visualization using Chart.js to monitor user growth and content activity.",
            "Managed the entire deployment and DevOps lifecycle, including server configuration on AWS EC2, containerization with Docker, and implementing a CI/CD pipeline using GitHub Actions.",
        ],
        techStack: ["Django", "HTMX", "Alpine.js", "OAuth", "Chart.js", "AWS EC2", "Docker", "GitHub Actions"],
        highlights: ["Full-Stack Development", "AI Integration", "DevOps Pipeline"],
        image: ProjectImage3,
        github: "https://github.com/NaufalHD12/PersonaNexus",
        demo: "https://www.personanexus.club/",
    },
    {
        slug: "venture-mind",
        title: "VentureMind: AI Business Strategy Co-Pilot",
        summary: "Created a multi-agent AI system for generating business strategies, with RAG integration and asynchronous processing for efficient LLM tasks.",
        description: [
            "Designed and implemented a multi-agent AI system using CrewAI and GPT-4.1-mini, where agents with specialized roles (e.g., Visionary, Analyst, Critic) collaborate to generate comprehensive business strategy reports.",
            "Integrated Retrieval-Augmented Generation (RAG) with the Tavily Search API to provide agents with real-time market data and built a long-term memory system for contextual analysis.",
            "Engineered a full-stack application with a FastAPI backend, PostgreSQL database, and deployed it using Docker, solving long-running LLM tasks with an asynchronous streaming architecture.",
        ],
        techStack: ["CrewAI", "GPT-4.1-mini", "RAG", "Tavily Search API", "FastAPI", "PostgreSQL", "Docker"],
        highlights: ["Multi-Agent AI", "RAG Integration", "Asynchronous Architecture"],
        image: ProjectImage4,
        github: "https://github.com/NaufalHD12/venture-mind",
        demo: "https://venture-mind-production-531d.up.railway.app/",
    },
    {
        slug: "synapsis-ai",
        title: "Synapsis AI: Smart CV Screening System",
        summary: "Engineered an AI-driven recruitment tool for multi-language CV screening, with batch processing and report generation to streamline hiring.",
        description: [
            "Engineered an intelligent screening system to revolutionize recruitment by analyzing job descriptions against dozens of CVs simultaneously, supporting both English and Indonesian languages.",
            "Developed a multi-language pipeline leveraging the DeepSeek-V3-0324 to generate matching scores, candidate strength/weakness highlights, and in-depth analysis.",
            "Implemented a robust backend with Python and Flask, featuring batch PDF processing with PyMuPDF and professional, downloadable Excel report generation using Pandas.",
        ],
        techStack: ["Python", "Flask", "DeepSeek-V3-0324", "PyMuPDF", "Pandas"],
        highlights: ["AI Screening Pipeline", "Multi-Language Support", "Batch Processing"],
        image: ProjectImage5,
        github: "https://github.com/NaufalHD12/synapsis-ai",
        demo: "https://synapsis-ai-production.up.railway.app/",
    },
    {
        slug: "tweets-sentiment-analysis",
        title: "Tweets Sentiment Analysis",
        summary: "Developed an end-to-end ML pipeline using TFX for sentiment analysis of tweets, achieving high accuracy in binary classification.",
        description: [
            "Built a comprehensive machine learning pipeline using TensorFlow Extended (TFX) components for automated data processing, validation, and model training.",
            "Implemented data ingestion with CsvExampleGen, statistics generation with StatisticsGen, and schema inference with SchemaGen for robust data handling.",
            "Created anomaly detection using ExampleValidator and data transformation with Transform component for feature engineering and preprocessing.",
            "Developed a binary classification model using TensorFlow/Keras with text vectorization, embedding layers, and convolutional networks for sentiment analysis.",
            "Achieved 89% binary accuracy and 0.94 AUC score, with systematic evaluation using TFX Evaluator component and threshold-based model validation.",
        ],
        techStack: ["Python", "TensorFlow", "TFX", "Keras", "TF Data Validation"],
        highlights: ["End-to-End ML Pipeline", "TFX Components", "High Accuracy Model"],
        image: ProjectImage6,
        github: "https://github.com/NaufalHD12/tweets-sentiment-analysis",
    },
    {
        slug: "acnescan",
        title: "AcneScan: Acne Detection App",
        summary: "Trained a CNN model for acne classification and deployed a scalable API on GCP for mobile integration in dermatology applications.",
        description: [
            "Designed and trained a CNN image classification model (TensorFlow, EfficientNetB0) to detect 5 types of acne, achieving a 98% F1-score on the test set.",
            "Built a RESTful API with Flask and deployed it on Google Cloud Platform (Cloud Run) to serve machine learning inferences scalably.",
            "Collaborated with Mobile Development and Cloud Computing teams for end-to-end integration, including converting the final artifact to TensorFlow Lite for the Android application.",
        ],
        techStack: ["TensorFlow", "EfficientNetB0", "Flask", "Google Cloud Platform", "TensorFlow Lite"],
        highlights: ["CNN Model Training", "Scalable Inference API", "Cross-Team Collaboration"],
        image: ProjectImage7,
        github: "https://github.com/Acne-Scan",
        demo: "https://drive.google.com/file/d/1tg0LwGrO4f-aTzngO_I0wPe1GmEPcTZ_/view?usp=sharing",
    },
    {
        slug: "anime-recommendation-system",
        title: "Anime Recommendation System",
        summary: "Built a hybrid recommendation engine combining content-based and collaborative filtering for personalized anime suggestions.",
        description: [
            "Developed a robust recommendation system model using Content-Based and Collaborative Filtering techniques to help users discover new anime.",
            "Implemented content-based filtering by analyzing anime metadata (genres, themes, demographics) to find similar content.",
            "Applied collaborative filtering using user ratings and preferences to identify patterns and make personalized recommendations.",
            "Combined both approaches in a hybrid system to overcome limitations of individual methods and improve recommendation accuracy.",
            "Achieved high precision and low prediction error through extensive model evaluation and optimization.",
        ],
        techStack: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy"],
        highlights: ["Hybrid Recommendation", "Content & Collaborative Filtering", "High Accuracy"],
        image: ProjectImage8,
        github: "https://github.com/NaufalHD12/anime-recommendation-system",
    },
    {
        slug: "student-performance-predictor",
        title: "Student Performance Predictor",
        summary: "Created a machine learning model using CatBoost to predict student academic performance based on comprehensive feature analysis.",
        description: [
            "Conducted extensive exploratory data analysis on the UCI Student Performance dataset, examining correlations between demographic, behavioral, and academic factors.",
            "Performed comprehensive feature engineering, including encoding categorical variables and standardizing numerical features for optimal model performance.",
            "Implemented and compared multiple regression algorithms including Linear Regression, KNN, Random Forest, XGBoost, and CatBoost.",
            "Selected CatBoost as the final model due to its superior performance, achieving high R² scores and low error metrics on the test set.",
            "Identified key predictors of academic success, including parental education, study time, and past academic performance.",
        ],
        techStack: ["Python", "CatBoost", "Scikit-learn", "Pandas", "Matplotlib"],
        highlights: ["Comprehensive EDA", "Multiple ML Algorithms", "High Prediction Accuracy"],
        image: ProjectImage9,
        github: "https://github.com/NaufalHD12/student-performance-predictor",
    },
    {
        slug: "ecommerce-public-dashboard",
        title: "Ecommerce Public Dashboard",
        summary: "Developed an interactive Streamlit dashboard for ecommerce analytics with comprehensive data visualization and business insights.",
        description: [
            "Built a comprehensive ecommerce analytics dashboard using Streamlit for interactive data exploration and visualization.",
            "Implemented data processing pipelines to handle large datasets and perform real-time calculations for key business metrics.",
            "Created multiple visualization types including charts, graphs, and KPI cards to display sales trends, customer behavior, and product performance.",
            "Added filtering and drill-down capabilities to allow users to explore data at different granularities (daily, weekly, monthly).",
            "Deployed the dashboard on Streamlit Cloud for public access and easy sharing with stakeholders.",
        ],
        techStack: ["Python", "Streamlit", "Pandas", "Plotly", "NumPy"],
        highlights: ["Interactive Dashboard", "Real-time Analytics", "Public Deployment"],
        image: ProjectImage10,
        github: "https://github.com/NaufalHD12/ecommerce-public-dashboard",
        demo: "https://submission-ecommerce-public-dtwvbgakmi3wdkutzwun8p.streamlit.app/",
    },
    {
        slug: "bike-sharing-dashboard",
        title: "Bike Sharing Dashboard",
        summary: "Created a comprehensive data analysis dashboard for bike sharing systems with predictive analytics and usage insights.",
        description: [
            "Developed a complete data analysis solution for bike sharing systems using Python and Streamlit for the dashboard interface.",
            "Implemented data preprocessing and cleaning pipelines to handle raw bike sharing data including weather conditions, seasonality, and usage patterns.",
            "Built predictive models to forecast bike demand based on historical data, weather conditions, and temporal factors.",
            "Created interactive visualizations showing usage patterns, peak hours, popular stations, and seasonal trends.",
            "Deployed the dashboard on Streamlit Cloud for easy access and real-time data exploration.",
        ],
        techStack: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Plotly"],
        highlights: ["Predictive Analytics", "Usage Pattern Analysis", "Interactive Visualizations"],
        image: ProjectImage11,
        github: "https://github.com/NaufalHD12/bike-sharing-dashboard",
        demo: "https://bikesharinganalysisfal.streamlit.app/",
    }
];

export const TIMELINE = [
    {
        title: "Software Engineering Student",
        subtitle: "Universitas Pendidikan Indonesia",
        date: "2022 - Present",
        description: "Currently pursuing a Bachelor's degree with a current GPA of 3.81, focusing on Backend & AI Engineering."
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
    {
        name: "Machine Learning by Stanford University & DeepLearning.AI",
        link: "https://coursera.org/share/e82eef785a5024cadef3e2848d06f599"
    },
    {
        name: "DeepLearning.AI Tensorflow Developer",
        link: "https://coursera.org/share/3ad716fbe35350d7d71072ade73e61d1"
    },
    {
        name: "Tensorflow: Data & Deployment by DeepLearning.AI",
        link: "https://coursera.org/share/f08cf568b70691eeb9cbe231c04bb385"
    },
    {
        name: "Machine Learning Operations (MLOps) by Dicoding",
        link: "https://www.dicoding.com/certificates/N9ZO9D9D6XG5"
    },
    {
        name: "Applied Machine Learning by Dicoding",
        link: "https://www.dicoding.com/certificates/07Z64NEG2PQR"
    },
    {
        name: "Front-End Development (React) by Dicoding",
        link: "https://www.dicoding.com/certificates/6RPNG66L9Z2M"
    },
    {
        name: "Back-End Development (NodeJS & AWS) by Dicoding",
        link: "https://www.dicoding.com/certificates/2VX35JE23PYQ"
    },
    {
        name: "Cloud & Gen AI on AWS by Dicoding",
        link: "https://www.dicoding.com/certificates/53XEKJ39KXRN"
    },
    {
        name: "Full Stack Web Development with Django by Jose Salvatierra",
        link: "https://www.udemy.com/certificate/UC-e6b2ac22-0bb4-44c9-83d8-bff1df6fe596/"
    },
    {
        name: "Bangkit Academy 2024 led by Google, Tokopedia, Gojek, and Traveloka Machine Learning Path",
        link: "#"
    },
];

export const SOCIALS = {
    github: "https://github.com/NaufalHD12",
    linkedin: "https://linkedin.com/in/naufalhd12",
    instagram: "https://instagram.com/naufalhd1",
};
