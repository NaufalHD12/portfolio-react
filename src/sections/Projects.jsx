import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS, SKILLS } from "../constants";
import SkillIcon from "../components/SkillIcon";

const Projects = () => {
    return (
        <>
            <Section
                id="projects"
                title="Projects & Showcase"
                className="bg-background"
            >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </Section>
            <Section
                id="skills"
                title="Skills & Tech Stack"
                className="bg-background"
            >
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
                    {SKILLS.map((skill, index) => (
                        <SkillIcon key={index} icon={skill.icon} name={skill.name} />
                    ))}
                </div>
            </Section>
        </>
    );
};

export default Projects;
