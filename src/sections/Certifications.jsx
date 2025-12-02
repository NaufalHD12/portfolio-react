import Section from "../components/Section";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { CERTIFICATIONS } from "../constants";

const Certifications = () => {
    return (
        <Section id="certifications" title="Certifications">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {CERTIFICATIONS.map((cert, index) => (
                    <motion.a
                        key={index}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glass-card p-6 text-center block"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        whileHover={{
                            scale: 1.05,
                            y: -5,
                            boxShadow: "var(--glow-intense)",
                        }}
                    >
                        <p className="font-semibold text-lg">{cert.name}</p>
                    </motion.a>
                ))}
            </div>
        </Section>
    );
};

export default Certifications;
