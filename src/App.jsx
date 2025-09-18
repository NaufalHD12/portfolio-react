import Header from "./components/Header";
import About from "./sections/About";
import Certifications from "./sections/Certifications";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {
    const ParticleBackground = () => (
        <div className="particle-bg" aria-hidden="true"></div>
    );

    return (
        <>
            <ParticleBackground />
            <Header />
            <main>
                <Hero />
                <About />
                <Projects />
                <Experience />
                <Certifications />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;
