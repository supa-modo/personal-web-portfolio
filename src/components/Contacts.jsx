import React, { useRef } from "react";
import WhatsappIcon from "../assets/whatsapp.png";
import TwitterIcon from "../assets/twitter.png";
import InstagramIcon from "../assets/instagram.png";
import LinkedInIcon from "../assets/linkedIn.png";
import GithubIcon from "../assets/github.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const redirectToWhatsapp = () => {
    window.open("https://wa.me/254790193402", "_blank");
  };

  const redirectToTwitter = () => {
    window.open("https://twitter.com/eddieoochieng", "_blank");
  };

  const redirectToInstagram = () => {
    window.open("https://www.instagram.com/eddie.ochieng_/", "_blank");
  };

  const redirectToLinkedIn = () => {
    window.open(
      "https://www.linkedin.com/in/eddy-odhiambo-423b37234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      "_blank"
    );
  };

  const redirectToGithub = () => {
    window.open("https://github.com/supa-modo", "_blank");
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kd76np9",
        "template_fjqrawc",
        form.current,
        "OvNqQxS5HWUQ7KqWV"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Message Sent. Thank you");
        },
        (error) => {
          console.log(error.text);
          alert("Message not Sent. Try again !!");
        }
      );
  };

  return (
    <section className="min-h-screen flex justify-center items-center py-8">
      <div className="text-center max-w-4xl w-full px-4">
        <h1 className="text-3xl font-semibold text-white mb-4">Contact Me</h1>
        <p className="text-lg text-gray-400 mb-8">
          Please fill out the form below for any discussions about my work or
          opportunities and I will get back to you shortly.
        </p>

        <form className="space-y-6" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="w-full font-medium max-w-2xl p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Your name"
            name="from_name"
          />
          <input
            type="email"
            className="w-full font-medium max-w-2xl p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Your email"
            name="from_email"
          />
          <textarea
            className="w-full font-medium max-w-2xl p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            name="message"
            rows="5"
            placeholder="Your Message"
          />
          <button
            type="submit"
            className="w-full font-semibold max-w-2xl p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Submit
          </button>
        </form>

        <p className="text-lg text-gray-400 mt-10">
          Find me on my social media accounts below.
        </p>
        <div className="flex justify-center mt-8 space-x-4">
          <img
            src={WhatsappIcon}
            alt="Whatsapp"
            className="h-10 w-10 rounded-full cursor-pointer transition-transform transform hover:scale-110"
            onClick={redirectToWhatsapp}
          />
          <img
            src={TwitterIcon}
            alt="Twitter"
            className="h-10 w-10 rounded-full cursor-pointer transition-transform transform hover:scale-110"
            onClick={redirectToTwitter}
          />
          <img
            src={InstagramIcon}
            alt="Instagram"
            className="h-10 w-10 rounded-full cursor-pointer transition-transform transform hover:scale-110"
            onClick={redirectToInstagram}
          />
          <img
            src={LinkedInIcon}
            alt="LinkedIn"
            className="h-10 w-10 rounded-full cursor-pointer transition-transform transform hover:scale-110"
            onClick={redirectToLinkedIn}
          />
          <img
            src={GithubIcon}
            alt="Github"
            className="h-10 w-10 rounded-full cursor-pointer transition-transform transform hover:scale-110"
            onClick={redirectToGithub}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
