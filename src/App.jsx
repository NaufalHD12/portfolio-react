import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./components/Header";
import Footer from "./sections/Footer";

// Lazy load sections for code splitting
const Hero = lazy(() => import("./sections/Hero"));
const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Experience = lazy(() => import("./sections/Experience"));
const Certifications = lazy(() => import("./sections/Certifications"));
const Contact = lazy(() => import("./sections/Contact"));
const ProjectDetail = lazy(() => import("./components/ProjectDetail"));

// Loading fallback component
const LoadingFallback = () => (
    <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading...</p>
        </div>
    </div>
);

function App() {
    const ParticleBackground = () => (
        <div className="particle-bg" aria-hidden="true"></div>
    );

    const HomePage = () => (
        <Suspense fallback={<LoadingFallback />}>
            <Hero />
            <About />
            <Projects />
            <Experience />
            <Certifications />
            <Contact />
        </Suspense>
    );

    return (
        <Router>
            <ParticleBackground />
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects/:slug" element={
                        <Suspense fallback={<LoadingFallback />}>
                            <ProjectDetail />
                        </Suspense>
                    } />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
