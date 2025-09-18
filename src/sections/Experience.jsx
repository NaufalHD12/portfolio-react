// src/pages/Experience.jsx

import Section from "../components/Section";
import TimelineItem from "../components/TimelineItem";
import { TIMELINE } from "../constants";

const Experience = () => {
    return (
        <Section id="experience" title="Experience & Education">
            <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
                    <div className="border-2-2 absolute border-opacity-20 border-primary h-full border left-4 md:left-1/2"></div>
                    {TIMELINE.map((item, index) => (
                        <TimelineItem key={index} item={item} isLeft={index % 2 !== 0} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Experience;
