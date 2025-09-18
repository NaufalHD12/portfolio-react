// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Section = ({ id, title, children, className = "" }) => {
    return (
        <motion.section
            id={id}
            className={`py-20 lg:py-28 relative ${className}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
        >
            <div className="container mx-auto px-4">
                {title && (
                    <h2 className="section-title text-3xl md:text-4xl font-bold text-center hero-text">
                        {title}
                    </h2>
                )}
                {children}
            </div>
        </motion.section>
    );
};

export default Section;
