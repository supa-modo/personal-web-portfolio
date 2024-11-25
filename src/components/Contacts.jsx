import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import WhatsappIcon from "../assets/whatsapp.png";
import TwitterIcon from "../assets/twitter.png";
import InstagramIcon from "../assets/instagram.png";
import LinkedInIcon from "../assets/linkedIn.png";
import GithubIcon from "../assets/github.png";
import LoadingButton from "./LoadingButton";

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const validateForm = (formData) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate email
    if (
      !formData.get("from_email") ||
      !emailRegex.test(formData.get("from_email"))
    ) {
      errors.from_email = "Please enter a valid email address!!!";
    }

    // Validate message
    if (!formData.get("message") || formData.get("message").trim() === "") {
      errors.message = "Message cannot be empty!!!S";
    }

    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const errors = validateForm(formData);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSending(true);
    setFormErrors({});

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStatusMessage(
            "Your message has been sent successfully! I will reply back as soon as possible"
          );
          console.log("Email sent:", result.text);
          formRef.current.reset();
        },
        (error) => {
          console.error("Error:", error.text);
          setStatusMessage("Failed to send message. Please try again.");
          setIsSending(false);
        }
      )
      .finally(() => setIsSending(false));
  };

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

  return (
    <section className="min-h-screen flex justify-center items-center py-8">
      <div className="text-center max-w-4xl w-full px-4">
        <h1 className="text-3xl font-semibold text-white mb-4">Contact Me</h1>
        <p className="text-lg text-gray-400 mb-8">
          Please fill out the form below for any discussions about my work or
          opportunities and I will get back to you shortly.
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            className="w-full font-medium max-w-2xl p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Your name"
            name="from_name"
            required
          />
          {formErrors.from_name && (
            <p className="text-red-500 text-sm">{formErrors.from_name}</p>
          )}
          <input
            type="email"
            className="w-full font-medium max-w-2xl p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Your email address"
            name="from_email"
            required
          />
          {formErrors.from_email && (
            <p className="text-red-500 text-sm">{formErrors.from_email}</p>
          )}
          <textarea
            className="w-full font-medium max-w-2xl p-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          />
          {formErrors.message && (
            <p className="text-red-500 text-sm">{formErrors.message}</p>
          )}

          <div className="text-center items-center">
            <LoadingButton
              isLoading={isSending}
              onClick={onsubmit}
              className="w-full font-semibold max-w-2xl p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            />
          </div>
        </form>
        {statusMessage && (
          <p className="text-sm text-green-400 mt-4">{statusMessage}</p>
        )}

        <p className="text-lg text-gray-400 mt-10">
          Find me on any of my social media accounts below.
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
