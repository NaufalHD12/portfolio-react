import Section from "../components/Section";
import TimelineItem from "../components/TimelineItem";
import { TIMELINE } from "../constants"; // <-- Import TIMELINE, bukan EXPERIENCE & EDUCATION

const Experience = () => {
    return (
        <Section id="experience" title="Experience & Education">
            <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                    {/* Garis tengah timeline */}
                    <div
                        className="border-2-2 absolute border-opacity-20 border-primary h-full border"
                        style={{ left: "50%" }}
                    ></div>

                    {/* Map melalui satu array TIMELINE untuk urutan yang benar */}
                    {TIMELINE.map((item, index) => (
                        <TimelineItem key={index} item={item} isLeft={index % 2 !== 0} />
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Experience;
