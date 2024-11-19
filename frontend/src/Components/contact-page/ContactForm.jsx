import "./css_files/ContactForm.css";
import { useState } from "react";
export default function ContactForm() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
        // Clear the form
        setForm({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            subject: "",
            message: ""
        });
        // send data to server
    }

    return (
        <div className="contact-form">
            <form className="email-form" onSubmit={handleSubmit}>
                <input
                    className="form-input"
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                />
                <input
                    className="form-input"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                />
                <input
                    className="form-input"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
                <input
                    className="form-input"
                    type="tel"
                    name="phone"
                    placeholder="Your Phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                />
                <input
                    className="form-input"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    cols="30"
                    rows="6"
                    value={form.message}
                    onChange={handleChange}
                ></textarea>
                <button className="button" type="submit">Send Message</button>
            </form>
        </div>
    )
}