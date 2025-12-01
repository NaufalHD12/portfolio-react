import { motion } from "framer-motion";
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
            className="relative min-h-screen flex items-center justify-center text-center overflow-hidden"
        >
            {/* Enhanced background with glassmorphism effects */}
            <div className="absolute inset-0 bg-gradient-hero">
                <div className="absolute inset-0 bg-gradient-to-br from-mint-primary/5 via-transparent to-mint-dark/10" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mint-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-mint-light/5 rounded-full blur-3xl" />
            </div>
            
            <div className="z-10 container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="glass-card max-w-4xl mx-auto p-12 md:p-16 rounded-3xl border border-white/10"
                >
                    <p className="text-xl text-primary mb-6 font-mono tracking-wider">
                        Hello, I'm
                    </p>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-foreground mb-6 hero-text">
                        Naufal Hadi Darmawan
                    </h1>
                    <p className="text-2xl md:text-3xl text-muted-foreground mb-4">
                        Aspiring Software & AI Engineer
                    </p>
                    <div className="h-12 md:h-14 mb-12 flex justify-center">
                        <p className="text-xl md:text-2xl text-primary typing-animation">
                            Building the future with cutting-edge technology.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                        <Button onClick={downloadCV} icon={FaDownload} variant="primary">
                            Download CV
                        </Button>
                        <Button onClick={viewProjects} icon={FaArrowRight} variant="glass">
                            View Projects
                        </Button>
                    </div>
                </motion.div>
                
                {/* Scroll indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-primary/70 rounded-full mt-2" />
                    </div>
                </motion.div>
            </div>
            <AngledDivider direction="down" />
        </section>
    );
};

export default Hero;
