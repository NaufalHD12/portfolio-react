// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, Rocket, Target } from "lucide-react";
import Section from "../components/Section"; // Use the existing Section component

const About = () => {
    const ref = useRef(null);
    // Trigger animation when the section is 25% in view
    const isInView = useInView(ref, { once: true, amount: 0.25 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Animate children one by one
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const features = [
        {
            icon: Code,
            title: "Backend Engineering",
            description: "Passionate about building scalable, efficient backend systems using modern technologies and best practices.",
        },
        {
            icon: Brain,
            title: "AI & Machine Learning",
            description: "Exploring the frontiers of artificial intelligence to solve complex real-world problems.",
        },
        {
            icon: Rocket,
            title: "Design Systems & Architecture",
            description: "Designing robust system architectures and implementing design systems for maintainable, scalable solutions.",
        },
        {
            icon: Target,
            title: "Goal-Oriented",
            description: "Committed to delivering high-quality results and continuous professional growth.",
        },
    ];

    return (
        <Section id="about" title="About Me">
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="max-w-6xl mx-auto"
            >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Text Description */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <h3 className="text-2xl font-semibold text-primary mb-4">
                            Backend Engineer | ML & AI Engineer | System Architect
                        </h3>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            I'm a dedicated backend engineer and AI specialist focused on
                            designing robust system architectures and scalable solutions. My
                            expertise spans machine learning engineering, API development, and
                            implementing design systems that enhance user experiences.
                        </p>

                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Currently specializing in backend technologies, AI-driven applications,
                            and system architecture, I excel at creating efficient, maintainable
                            code and innovative solutions that solve real-world challenges.
                        </p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-3 pt-4"
                        >
                            {[
                                "Problem Solving",
                                "Team Collaboration",
                                "Continuous Learning",
                                "Innovation",
                            ].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground border border-border/20"
                                >
                                    {skill}
                                </span>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Feature Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((feature) => (
                            <motion.div
                                key={feature.title}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    y: -5,
                                    boxShadow: "var(--glow-intense)",
                                }}
                                className="glass-card p-6 rounded-lg group transition-all duration-300"
                            >
                                <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                                    <feature.icon className="h-8 w-8" />
                                </div>
                                <h4 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                                    {feature.title}
                                </h4>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </Section>
    );
};

export default About;
