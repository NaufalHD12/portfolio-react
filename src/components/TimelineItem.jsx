// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const TimelineItem = ({ item, isLeft }) => {
    const { title, subtitle, date, description } = item;

    const itemVariants = {
        hidden: { opacity: 0, x: isLeft ? -100 : 100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    };

    return (
        <div
            className={`flex justify-between items-center w-full ${
                isLeft ? "flex-row-reverse" : ""
            }`}
        >
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-primary-foreground"></h1>
            </div>
            <motion.div
                className="order-1 glass-card rounded-lg w-5/12 px-6 py-4 cursor-pointer"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: "var(--glow-intense)",
                }}
            >
                <h3 className="mb-2 font-bold text-lg">{title}</h3>
                <p className="mb-1 text-sm font-semibold text-primary">{subtitle}</p>
                <p className="mb-3 text-sm text-muted-foreground">{date}</p>
                <p className="text-sm leading-snug tracking-wide text-foreground">
                    {description}
                </p>
            </motion.div>
        </div>
    );
};

export default TimelineItem;
