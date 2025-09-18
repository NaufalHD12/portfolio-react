// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
    const { title, description, tags, image, github, demo } = project;

    return (
        <motion.div
            className="glass-card rounded-lg overflow-hidden flex flex-col"
            whileHover={{
                scale: 1.05,
                y: -5,
                boxShadow: "var(--glow-intense)",
            }}
        >
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs font-semibold px-2 py-1 bg-secondary rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="mt-auto flex items-center gap-4">
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                        aria-label={`${title} GitHub repository`}
                    >
                        <FaGithub size={24} />
                    </a>
                    {demo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-foreground hover:text-primary transition-colors"
                            aria-label={`${title} live demo`}
                        >
                            <FaExternalLinkAlt size={22} />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
