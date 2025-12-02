import { motion as Motion } from "framer-motion";

const Button = ({
    children,
    onClick,
    icon: Icon,
    className = "",
    variant = "primary",
    "aria-label": ariaLabel,
    ...props
}) => {
    const baseStyles =
    "px-8 py-4 font-semibold rounded-xl transition-all flex items-center justify-center gap-3 backdrop-blur-sm";

    const variantStyles = {
        primary: "bg-gradient-primary text-primary-foreground hover:shadow-glow-intense hover:scale-105 glass-card",
        outline: "bg-gradient-glass border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 hover:shadow-glow",
        glass: "bg-gradient-glass border border-white/10 text-foreground hover:bg-white/5 hover:shadow-soft",
    };

    return (
        <Motion.button
            onClick={onClick}
            className={`${baseStyles} ${variantStyles[variant]} ${className} animate-pulse-glow`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            aria-label={ariaLabel}
            {...props}
        >
            {Icon && <Icon className="w-6 h-6" />}
            {children}
        </Motion.button>
    );
};

export default Button;
