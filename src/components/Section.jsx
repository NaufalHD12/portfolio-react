// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Section = ({ id, title, children, className = "" }) => {
    return (
        <motion.section
            id={id}
            className={`py-24 lg:py-32 relative overflow-hidden ${className}`}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* Background decorative elements */}
            <div className="absolute top-1/4 -left-20 w-64 h-64 bg-mint-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-mint-light/3 rounded-full blur-3xl" />
            
            <div className="container mx-auto px-6 relative z-10">
                {title && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-20"
                    >
                        <h2 className="section-title text-4xl md:text-5xl lg:text-6xl font-bold text-center hero-text">
                            {title}
                        </h2>
                        <p className="text-center text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
                            {id === "about" && "Get to know more about me, my background, and what drives me."}
                            {id === "projects" && "Explore my latest projects and technical implementations."}
                            {id === "experience" && "My professional journey and career milestones."}
                            {id === "certifications" && "Credentials and certifications I've earned."}
                            {id === "contact" && "Let's connect and discuss potential opportunities."}
                        </p>
                    </motion.div>
                )}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {children}
                </motion.div>
            </div>
        </motion.section>
    );
};

export default Section;
