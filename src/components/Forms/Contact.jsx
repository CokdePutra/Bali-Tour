import React from "react";
import ButtonMessage from "../Button/ButtonMessage";

const Contact = () => {
  return (
    <div id="Contact" className="contact-us mt-16 m-5 place-content-center">
      <h1 className="TitleSection">Contact Us</h1>
      <div className="content mx-8 p-4 flex flex-wrap justify-center">
        <div className="inner bg-white shadow-lg p-8 rounded-lg w-full md:w-4/5">
          <div className="formField">
            <div className="formContact mb-4">
              <label htmlFor="ContactName" className="Label">
                Name
              </label>
              <input
                id="ContactName"
                required
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
                type="email"
                className="h-10 w-full rounded-lg p-2 border-2 border-gray-300"
              />
            </div>
            <div className="formContact mb-4">
              <label htmlFor="ContactMessage" className="Label">
                Your Message
              </label>
              <textarea
                name="ContactMessage"
                id="ContactMessage"
                className="min-h-[10rem] w-full rounded-lg p-2 border-2 border-gray-300"></textarea>
            </div>
            <ButtonMessage
              className="float-right mt-4 mb-2"
              textButton="Send"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
