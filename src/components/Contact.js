import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t04ja3h', 'template_ma5ggim', e.target, 'qeo8_fzMoO6IcUQUT')
      .then((result) => {
        console.log(result.text);
        setMessageSent(true);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contactez-moi</h2>
      {messageSent ? (
        <p className="success-message">Votre message a été envoyé avec succès !</p>
      ) : (
        <form onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Votre nom" required />
          <input type="email" name="email" placeholder="Votre email" required />
          <textarea name="message" placeholder="Votre message" required></textarea>
          <button type="submit">Envoyer</button>
        </form>
      )}
    </section>
  );
}

export default Contact;
