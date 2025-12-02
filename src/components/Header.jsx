import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { FaBars, FaTimes } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const navLinks = ["About", "Projects", "Skills", "Experience", "Certifications", "Contact"];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        // If we're on a project detail page, navigate to home first
        if (location.pathname.startsWith('/projects/')) {
            navigate('/');
            // Wait for navigation to complete, then scroll
            setTimeout(() => {
                document
                    .getElementById(id.toLowerCase())
                    ?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            // Normal scroll behavior on home page
            document
                .getElementById(id.toLowerCase())
                ?.scrollIntoView({ behavior: "smooth" });
        }
        setIsMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
                isScrolled || isMenuOpen
                    ? "glass-nav border-b border-white/10"
                    : "bg-transparent"
            }`}
        >
            <nav className="container mx-auto px-6 flex justify-between items-center py-5">
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-3xl font-bold hero-text cursor-pointer glass-card px-6 py-3 rounded-2xl"
                    onClick={() => scrollToSection('hero')}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    Naufal HD.
                </motion.a>
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            onClick={() => scrollToSection(link)}
                            className="relative text-foreground hover:text-primary transition-colors group text-lg font-medium"
                            whileHover={{ y: -2 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            {link}
                            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left rounded-full"></span>
                        </motion.a>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                    >
                        <ThemeToggle />
                    </motion.div>
                </div>
                <div className="md:hidden flex items-center gap-6">
                    <motion.div
                        whileTap={{ scale: 0.9 }}
                    >
                        <ThemeToggle />
                    </motion.div>
                    <motion.button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="glass-icon p-3 rounded-xl"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        {isMenuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
                    </motion.button>
                </div>
            </nav>
            {isMenuOpen && (
                <motion.div 
                    className="md:hidden flex flex-col items-center gap-6 py-8 glass-nav border-t border-white/10"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            onClick={() => scrollToSection(link)}
                            className="text-foreground hover:text-primary transition-colors text-xl font-medium py-3 px-8 glass-card rounded-xl w-64 text-center"
                            whileHover={{ scale: 1.05, x: 5 }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            {link}
                        </motion.a>
                    ))}
                </motion.div>
            )}
        </header>
    );
};

export default Header;
