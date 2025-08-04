import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Footer() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const errors = {};
    if (formData.name.trim() === '') errors.name = 'Name is required';
    if (formData.email.trim() === '') errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Invalid email format';
    if (formData.message.trim() === '') errors.message = 'Message is required';
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      emailjs
        .sendForm(
          'service_26112003',       
          'template_mok48yl',
          form.current,
          {publicKey: 'BIeQZ4reYD7Q4Q5_5',}         
        )
        .then(() => {
          alert(`Thank you, ${formData.name}! Your message has been sent.`);
          setFormData({ name: '', email: '', message: '' });
        })
        .catch((error) => {
          console.error('EmailJS Error:', error);
          alert('Failed to send message. Please try again.');
        });
    }
  }

  return (
    <footer className="footer">
      <p>Every message begins a new chapter — Feel free to leave a message...</p>
      <article>
        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <h2>Name:</h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter Your Name"
            onChange={handleChange}
          />
          <br />
          <h2>Email:</h2>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter Your Email"
            onChange={handleChange}
          />
          <br />
          <h2>Message:</h2>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            placeholder="Enter Your Message"
            onChange={handleChange}
          ></textarea>
          <br />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
          {errors.message && <p style={{ color: 'red' }}>{errors.message}</p>}
          <button type="submit">Send</button>
        </form>
      </article>
    </footer>
  );
}
export default Footer;
