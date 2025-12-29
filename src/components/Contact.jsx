import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatusMessage('');

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID,  process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
          setStatusMessage('Message sent successfully!');
      }, (error) => {
          setStatusMessage('Failed to send message, please try again.');
      });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Form</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="user_name" placeholder="Name" required />
        <input type="email" name="user_email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required></textarea>
        <button type="submit" className="button-40"><span className="text">Send Message</span></button>
      </form>
      {statusMessage && <p className="status-message">{statusMessage}</p>}
    </section>
  );
};

export default Contact;
