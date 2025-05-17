import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import './contact.css';

const ContactForm = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState("");

  const validate = (data) => {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[6-9]\d{9}$/;

    if (!data.name.trim()) newErrors.name = "Name is required.";
    if (!emailPattern.test(data.email)) newErrors.email = "Invalid email format.";
    if (!phonePattern.test(data.mobile)) newErrors.mobile = "Enter valid 10-digit Indian mobile number.";
    if (!data.message.trim()) newErrors.message = "Message cannot be empty.";

    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSuccess("");
    const formData = {
      name: form.current.name.value,
      email: form.current.email.value,
      mobile: form.current.mobile.value,
      message: form.current.message.value,
    };

    const formErrors = validate(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    emailjs.sendForm(
      'service_pnhbk88',
      'template_b2dkow7',
      form.current,
      'AoZzGymL_Xs1fez65'
    ).then(() => {
      setSuccess("✅ Message sent successfully!");
      form.current.reset();
      setErrors({});
    }).catch((error) => {
      setSuccess("❌ Failed to send message. " + error.text);
    }).finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <div className="contact-container">
    <div className="contactte">
      <h2 className="contactss">Get in Touch</h2>
      <p className="contact-subtitleee">I'd love to hear from you!</p>

      <form ref={form} onSubmit={sendEmail} noValidate className="contactform">
        <label  className="labb1" htmlFor="name">Name</label>
        <input  className="innp"type="text" name="name" id="name" placeholder="Your Name" />
        {errors.name && <span className="error">{errors.name}</span>}

        <label className="labb1" htmlFor="email">Email</label>
        <input className="innp" type="email" name="email" id="email" placeholder="Your Email" />
        {errors.email && <span className="error">{errors.email}</span>}

        <label className="labb1" htmlFor="mobile">Mobile</label>
        <input className="innp" type="text" name="mobile" id="mobile" placeholder="Your Mobile" />
        {errors.mobile && <span className="error">{errors.mobile}</span>}

        <label className="labb1" htmlFor="message">Message</label>
        <textarea className="mass" name="message" id="message" placeholder="Your Message" />
        {errors.message && <span className="error">{errors.message}</span>}

        <button className="btt" type="submit" disabled={isSubmitting} >
          {isSubmitting ? "Sending..." : "Send"}
        </button>

        {success && <p className="success">{success}</p>}
      </form>
    </div>
    </div>
  );
};

export default ContactForm;

