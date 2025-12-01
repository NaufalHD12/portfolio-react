// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
    const { title, description, tags, image, github, demo } = project;

    return (
        <motion.div
            className="glass-card rounded-2xl overflow-hidden flex flex-col border border-white/10"
            whileHover={{
                scale: 1.03,
                y: -8,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <div className="relative overflow-hidden">
                <img src={image} alt={title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-4 text-primary">{title}</h3>
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">{description}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-sm font-medium px-3 py-1.5 bg-secondary/50 backdrop-blur-sm rounded-full border border-white/10"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mt-auto flex items-center gap-6">
                    <motion.a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors glass-icon p-3 rounded-full"
                        aria-label={`${title} GitHub repository`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FaGithub size={26} />
                    </motion.a>
                    {demo && (
                        <motion.a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-primary transition-colors glass-icon p-3 rounded-full"
                            aria-label={`${title} live demo`}
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaExternalLinkAlt size={24} />
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
