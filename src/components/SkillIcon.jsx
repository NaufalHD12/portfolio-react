// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// eslint-disable-next-line no-unused-vars
const SkillIcon = ({ icon: Icon, name }) => {
    return (
        <motion.div
            className="flex flex-col items-center gap-4 p-6 glass-icon rounded-2xl group"
            whileHover={{
                scale: 1.15,
                transition: { duration: 0.3 },
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
        >
            <div className="relative">
                <Icon className="w-16 h-16 text-primary transition-all duration-300 group-hover:scale-110 group-hover:text-mint-light" />
                <div className="absolute inset-0 bg-gradient-to-br from-mint-primary/10 to-transparent rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="font-semibold text-base text-center">{name}</span>
        </motion.div>
    );
};

export default SkillIcon;
