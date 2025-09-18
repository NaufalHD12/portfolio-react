import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { FaBars, FaTimes } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const navLinks = ["About", "Projects", "Experience", "Certifications", "Contact"];

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id) => {
        document
            .getElementById(id.toLowerCase())
            ?.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
                isScrolled || isMenuOpen
                    ? "bg-background/80 backdrop-blur-md shadow-md"
                    : "bg-transparent"
            }`}
        >
            <nav className="container mx-auto px-4 flex justify-between items-center py-4">
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    className="text-2xl font-bold hero-text cursor-pointer"
                    onClick={() => scrollToSection('hero')}
                >
                    Naufal HD.
                </motion.a>
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            onClick={() => scrollToSection(link)}
                            className="relative text-foreground hover:text-primary transition-colors group"
                        >
                            {link}
                            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
                        </a>
                    ))}
                    <ThemeToggle />
                </div>
                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle />
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </nav>
            {isMenuOpen && (
                <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-background/90 backdrop-blur-md">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            onClick={() => scrollToSection(link)}
                            className="text-foreground hover:text-primary transition-colors text-lg"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;
