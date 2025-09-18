// src/components/TimelineItem.jsx

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
            className={`mb-8 flex justify-start md:justify-between items-center w-full ${
                isLeft ? "md:flex-row-reverse" : ""
            }`}
        >
            <div className="order-1 w-5/12 hidden md:block"></div>

            {/* Pindahkan circle ke kiri pada mobile */}
            <div className="z-20 flex items-center order-1 bg-primary shadow-xl w-8 h-8 rounded-full transform md:transform-none -translate-x-1/2 md:translate-x-0">
                <h1 className="mx-auto font-semibold text-lg text-primary-foreground"></h1>
            </div>

            {/* Card: Lebar penuh di mobile, 5/12 di desktop. Tambahkan margin kiri di mobile */}
            <motion.div
                className="order-1 glass-card rounded-lg w-full md:w-5/12 px-6 py-4 cursor-pointer ml-4 md:ml-0"
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
