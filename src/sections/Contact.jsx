import Section from "../components/Section";
import { motion as Motion } from "framer-motion";
import { SOCIALS } from "../constants";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    const contacts = [
        {
            name: "Email",
            icon: FaEnvelope,
            url: "mailto:hadinaufal06@gmail.com",
            color: "text-foreground hover:text-primary/80",
            label: "Send email to hadinaufal06@gmail.com"
        },
        {
            name: "GitHub",
            icon: FaGithub,
            url: SOCIALS.github,
            color: "text-foreground hover:text-gray-300",
            label: "Visit GitHub profile"
        },
        {
            name: "LinkedIn",
            icon: FaLinkedin,
            url: SOCIALS.linkedin,
            color: "text-foreground hover:text-blue-400",
            label: "Visit LinkedIn profile"
        },
        {
            name: "Instagram",
            icon: FaInstagram,
            url: SOCIALS.instagram,
            color: "text-foreground hover:text-pink-400",
            label: "Visit Instagram profile"
        }
    ];

    return (
        <Section id="contact" title="Contact">
            <div className="max-w-xl mx-auto">
                <Motion.div
                    className="glass-card p-8 md:p-10 rounded-3xl border border-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {contacts.map((contact) => (
                            <Motion.a
                                key={contact.name}
                                href={contact.url}
                                target={contact.name === "Email" ? "_self" : "_blank"}
                                rel={contact.name === "Email" ? "" : "noopener noreferrer"}
                                className="flex flex-col items-center p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 group"
                                whileHover={{ scale: 1.05, y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={contact.label}
                            >
                                <contact.icon 
                                    className={`text-4xl md:text-5xl ${contact.color} transition-colors duration-300 mb-2`}
                                />
                                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                                    {contact.name}
                                </span>
                            </Motion.a>
                        ))}
                    </div>
                </Motion.div>
            </div>
        </Section>
    );
};

export default Contact;
