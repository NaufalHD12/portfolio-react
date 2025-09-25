import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import Section from "../components/Section";
import Button from "../components/Button";
import { FaPaperPlane } from "react-icons/fa";
import { SOCIALS } from "../constants";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
    const form = useRef();
    const recaptchaRef = useRef();
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("Sending...");

        const recaptchaValue = recaptchaRef.current.getValue();
        if (!recaptchaValue) {
            setStatus("Please verify you are not a robot.");
            return;
        }

        emailjs
            .sendForm(
                "service_zpp87fq",
                "template_knou057",
                form.current,
                "sD5KmuirNJQ13_KoH" 
            )
            .then(
                (result) => {
                    console.log("SUCCESS!", result.text);
                    setStatus("Message sent successfully!");
                    form.current.reset();
                    recaptchaRef.current.reset(); // Reset ReCAPTCHA setelah berhasil
                },
                (error) => {
                    console.log("FAILED...", error.text);
                    setStatus(`Failed: ${error.text}`);
                }
            );
    };

    return (
        <Section id="contact" title="Get In Touch">
            <div className="max-w-2xl mx-auto text-center">
                <p className="text-muted-foreground mb-8">
                    Have a question or want to work together? Feel free to reach out.
                </p>

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className="flex flex-col gap-4 mb-8"
                >
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Your Name"
                        required
                        className="bg-input p-3 rounded-md border-2 border-transparent focus:border-primary focus:ring-0 transition-colors"
                    />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Your Email"
                        required
                        className="bg-input p-3 rounded-md border-2 border-transparent focus:border-primary focus:ring-0 transition-colors"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        required
                        className="bg-input p-3 rounded-md border-2 border-transparent focus:border-primary focus:ring-0 transition-colors"
                    ></textarea>

                    <div className="flex justify-center my-4">
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                            theme="dark"
                        />
                    </div>

                    <Button type="submit" icon={FaPaperPlane} className="w-full">
                        Send Message
                    </Button>
                </form>

                {status && <p className="text-center mb-8">{status}</p>}

                <div className="flex justify-center gap-6">
                    <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub size={28} />
                    </a>
                    <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={28} />
                    </a>
                    <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={28} />
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
