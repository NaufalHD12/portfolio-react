// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// eslint-disable-next-line no-unused-vars
const SkillIcon = ({ icon: Icon, name }) => {
    return (
        <motion.div
            className="flex flex-col items-center gap-2 p-4 glass-card rounded-lg"
            whileHover={{
                scale: 1.1,
                boxShadow: "var(--glow-primary)",
                transition: { duration: 0.2 },
            }}
        >
            <Icon className="w-12 h-12 text-primary" />
            <span className="font-semibold text-sm">{name}</span>
        </motion.div>
    );
};

export default SkillIcon;
