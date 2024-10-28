import React, { useState } from "react"; // Import useState
import ButtonMessage from "../Button/ButtonMessage";
import emailjs from "emailjs-com"; // Ensure you have imported emailjs

const Contact = () => {
  const [message, setMessage] = useState(""); // State to hold the feedback message

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_3i1avni",
        "template_v4wmv68",
        event.target,
        "2HTsyTP59yPkS0id7"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setMessage("Thank you for your message. It has been sent.");
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          setMessage("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div id="Contact" className="contact-us mt-16 m-5 place-content-center">
      <h1 className="TitleSection">Contact Us</h1>
      <div className="content mx-8 p-4 flex flex-wrap justify-center">
        <div className="inner bg-white shadow-lg p-8 rounded-lg w-full md:w-4/5">
          <form className="formField" onSubmit={handleSubmit}>
            <div className="formContact mb-4">
              <label htmlFor="ContactName" className="Label">
                Name
              </label>
              <input
                id="ContactName"
                required
                name="from_name"
                type="text"
                className="h-10 w-full rounded-lg p-2 border-2 border-gray-300"
              />
            </div>
            <div className="formContact mb-4">
              <label htmlFor="ContactEmail" className="Label">
                Email
              </label>
              <input
                id="ContactEmail"
                required
                name="from_email"
                type="email"
                className="h-10 w-full rounded-lg p-2 border-2 border-gray-300"
              />
            </div>
            <div className="formContact mb-4">
              <label htmlFor="ContactMessage" className="Label">
                Your Message
              </label>
              <textarea
                name="message"
                id="ContactMessage"
                className="min-h-[10rem] w-full rounded-lg p-2 border-2 border-gray-300"></textarea>
            </div>
            {message && <p className="response-message">{message}</p>}{" "}
            {/* Display feedback message */}
            <ButtonMessage
              className="float-right mt-4 mb-2"
              textButton="Send"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
