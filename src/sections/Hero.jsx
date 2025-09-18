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
            className="relative min-h-screen flex items-center justify-center text-center bg-gradient-hero"
        >
            <div className="z-10 container mx-auto px-4">
                <p className="text-lg text-primary mb-4 font-mono">
                    Hello, I'm
                </p>
                <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-4 hero-text">
                    Naufal Hadi Darmawan
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-2">
                    Aspiring Software & AI Engineer
                </p>
                <div className="h-8 md:h-10 mb-8 flex justify-center">
                    <p className="text-lg md:text-xl text-primary typing-animation">
                        Crafting Intelligent Digital Experiences.
                    </p>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <Button onClick={downloadCV} icon={FaDownload} variant="primary">
                        Download CV
                    </Button>
                    <Button onClick={viewProjects} icon={FaArrowRight} variant="outline">
                        View Projects
                    </Button>
                </div>
            </div>
            <AngledDivider direction="down" />
        </section>
    );
};

export default Hero;
