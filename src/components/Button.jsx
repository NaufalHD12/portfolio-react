// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Button = ({
    children,
    onClick,
    icon: Icon,
    className = "",
    variant = "primary",
}) => {
    const baseStyles =
    "px-6 py-3 font-semibold rounded-md transition-all flex items-center justify-center gap-2 neon-glow";

    const variantStyles = {
        primary: "bg-gradient-primary text-primary-foreground hover:opacity-90",
        outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
    };

    return (
        <motion.button
            onClick={onClick}
            className={`${baseStyles} ${variantStyles[variant]} ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {Icon && <Icon className="w-5 h-5" />}
            {children}
        </motion.button>
    );
};

export default Button;
