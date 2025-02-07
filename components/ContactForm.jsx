import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                formRef.current,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    toast.success("Email sent successfully!", {
                        position: "top-center",
                        autoClose: 5000,
                    });
                    formRef.current.reset();
                },
                () => {
                    toast.error("Failed to send email. Please try again.", {
                        position: "top-center",
                        autoClose: 5000,
                    });
                }
            )
            .finally(() => setLoading(false));
    };

    return (
        <div>
            <form ref={formRef} onSubmit={sendEmail}>
                <div className="relative mb-3 flex flex-col gap-2">
                    <label htmlFor="name">Name</label>
                    <input
                        placeholder="Your name"
                        type="text"
                        name="from_name"
                        required
                        className="border rounded-md bg-transparent px-3 py-2 placeholder:text-neutral-500 focus:outline-none"
                    />
                </div>
                <div className="relative mb-3 flex flex-col gap-2">
                    <label htmlFor="email">Email</label>
                    <input
                        placeholder="Your email"
                        type="email"
                        name="email"
                        required
                        className="border rounded-md bg-transparent px-3 py-2 placeholder:text-neutral-500 focus:outline-none"
                    />
                </div>
                <div className="relative mb-3 flex flex-col gap-2">
                    <label htmlFor="message">Message</label>
                    <textarea
                        placeholder="Your message"
                        name="message"
                        required
                        className="h-[140px] border rounded-md bg-transparent px-3 py-2 placeholder:text-neutral-500 focus:outline-none"
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="mt-6 w-full rounded bg-dark_primary hover:bg-primary duration-300 text-white px-6 py-3 font-medium uppercase leading-normal"
                >
                    {loading ? "Sending..." : "Send"}
                </button>
            </form>


        </div>
    );
};

export default ContactForm;
