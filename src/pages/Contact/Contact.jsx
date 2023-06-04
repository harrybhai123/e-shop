import React, { useState } from "react";
import "./Contact.scss"

function Contact() {
    const [message, setMessage] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setMessage("Thank you for your message!");
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("message").value = ""
    };

    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="name">Name:*</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:*</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:*</label>
                <textarea id="message" name="message" rows="5" required />

                <button type="submit">Send</button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
}

export default Contact;

