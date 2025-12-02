import { motion as Motion } from "framer-motion";
import Button from "../components/Button";
import { FaDownload, FaArrowRight } from "react-icons/fa";
import AngledDivider from "../components/AngledDivider";

const CV_URL = "/CV-NAUFAL HADI DARMAWAN.pdf";

const Hero = () => {
    const downloadCV = () => {
        const link = document.createElement("a");
        link.href = CV_URL;
        link.download = "NaufalHD-CV.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const viewProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="hero"
            className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center text-center overflow-hidden scroll-mt-20"
        >
            {/* Enhanced background with glassmorphism effects - optimized for mobile */}
            <div className="absolute inset-0 bg-gradient-hero">
                <div className="absolute inset-0 bg-gradient-to-br from-mint-primary/5 via-transparent to-mint-dark/10" />
                <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-mint-primary/10 rounded-full blur-lg sm:blur-xl md:blur-2xl" />
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-mint-light/5 rounded-full blur-lg sm:blur-xl md:blur-2xl" />
            </div>
            
            <div className="z-10 container mx-auto px-4 sm:px-5 md:px-6">
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="glass-card max-w-3xl mx-auto p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl border border-white/10"
                >
                    <p className="text-base sm:text-lg md:text-xl text-primary mb-3 sm:mb-4 md:mb-5 font-mono tracking-wider">
                        Hello, I'm
                    </p>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-foreground mb-3 sm:mb-4 md:mb-5 hero-text leading-snug">
                        Naufal Hadi Darmawan
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-3 sm:mb-4">
                        Software Engineer
                    </p>
                    <div className="h-8 sm:h-10 md:h-12 mb-6 sm:mb-8 md:mb-10 flex justify-center">
                        <p className="text-base sm:text-lg md:text-xl text-primary typing-animation text-center px-2">
                            Architecting the next generation of intelligent system.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-5">
                        <Button 
                            onClick={downloadCV} 
                            icon={FaDownload} 
                            variant="primary"
                            aria-label="Download CV (PDF)"
                            className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3"
                        >
                            Download CV
                        </Button>
                        <Button 
                            onClick={viewProjects} 
                            icon={FaArrowRight} 
                            variant="glass"
                            aria-label="View projects section"
                            className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3"
                        >
                            View Projects
                        </Button>
                    </div>
                </Motion.div>
                
                {/* Scroll indicator - responsive */}
                <Motion.div
                    className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    aria-hidden="true"
                >
                    <div 
                        className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary/50 rounded-full flex justify-center"
                        role="presentation"
                    >
                        <div className="w-1 h-2 sm:h-3 bg-primary/70 rounded-full mt-2" />
                    </div>
                </Motion.div>
            </div>
            <AngledDivider direction="down" />
        </section>
    );
};

export default Hero;
