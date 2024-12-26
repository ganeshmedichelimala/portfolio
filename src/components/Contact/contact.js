import React, { useRef } from "react";
import "./contact.css";
import facebook from "../../assets/facebook-icon.png";
import twitter from "../../assets/twitter.png";
import insta from "../../assets/instagram.png";
import youtube from "../../assets/youtube.png";
import github from "../../assets/github.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Ensure these are the correct IDs from your EmailJS account
    emailjs
      .sendForm(
        "service_hm76kxw",  // Replace with your correct Service ID
        "template_tc9pdra",  // Replace with your correct Template ID
        form.current,
        "C4GcLWGxias0Ya_r_"  // Replace with your public API key
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h2 className="contactPageTitle">
        Contact <span className="m">M</span>e
      </h2>
      <span className="contactDesc">
        Please fill out the form below to discuss any work opportunities
      </span>
      <form className="contactform" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Your GOOD Name"
          name="your_name"
        />
        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="your_email"
        />
        <input
          type="hidden"
          name="to_email"
          value="ganeshmedichelimala@gmail.com"
        />
        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" value="send" className="submitBtn">
          Submit
        </button>

        <div className="links">
          <a
            href="https://www.facebook.com/profile.php?id=100065243855844"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="FACEBOOK" className="link" />
          </a>
          <a
            href="https://x.com/m_ganesh_2946"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={twitter} alt="TWITTER" className="link" />
          </a>
          <a
            href="https://www.instagram.com/ganesh_medichelimala/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={insta} alt="INSTAGRAM" className="link" />
          </a>
          <a
            href="https://www.youtube.com/@ganesh_2946"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} alt="YOUTUBE" className="link" />
          </a>
          <a
            href="https://github.com/ganeshmedichelimala"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GITHUB" className="link" />
          </a>
        </div>
      </form>
    </section>
  );
};

export default Contact;
