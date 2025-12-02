/* eslint-disable no-unused-vars */
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { PROJECTS } from "../constants";

const ProjectDetail = () => {
    const { slug } = useParams();
    const project = PROJECTS.find(p => p.slug === slug);

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-primary mb-4">Project Not Found</h1>
                    <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Back Button */}
            <div className="container mx-auto px-6 py-8">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
                >
                    <FaArrowLeft />
                    Back to Projects
                </Link>
            </div>

            {/* Hero Section */}
            <section className="container mx-auto px-6 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl lg:text-6xl font-bold text-primary mb-6">
                            {project.title}
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                            {project.summary}
                        </p>

                        {/* Tech Stack */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-4 text-primary">Tech Stack</h3>
                            <div className="flex flex-wrap gap-3">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 bg-secondary/50 backdrop-blur-sm rounded-full border border-white/10 text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 mb-8">
                            <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaGithub size={20} />
                                View Code
                            </motion.a>
                            {project.demo && (
                                <motion.a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaExternalLinkAlt size={20} />
                                    Live Demo
                                </motion.a>
                            )}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="glass-card rounded-2xl overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-96 object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Details Section */}
            <section className="container mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Description */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <h2 className="text-3xl font-bold text-primary mb-8">Project Details</h2>
                            <div className="space-y-6">
                                {project.description.map((point, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                                        <p className="text-muted-foreground leading-relaxed">{point}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Highlights */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <h3 className="text-2xl font-bold text-primary mb-6">Key Highlights</h3>
                            <div className="space-y-4">
                                {project.highlights.map((highlight, index) => (
                                    <div key={index} className="glass-card p-4 rounded-lg border border-white/10">
                                        <p className="text-foreground font-medium">{highlight}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;
