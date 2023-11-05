import { useState } from "react";

import formTopFrame from "../assets/img/desktop/contact/form-top-frame.png";
import formTopFrameMobile from "../assets/img/mobile/contact/form-top-frame-mobile.png";

function Form() {
  // Define state variables to store form input values
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Handle input changes and update the state
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCompChange = (event) => {
    setCompany(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // You can perform actions with the form data here, e.g., send it to a server or perform client-side validation.
    console.log("Name:", name);
    console.log("Company Name:", company);
    console.log("Email:", email);
    console.log("Message:", message);

    // Reset the form fields
    setName("");
    setMessage("");
    setEmail("");
    setPhone("");
    setCompany("");
  };

  return (
    <form className="myform border rounded-2xl w-max p-2 mx-auto font-extralight text-sm">
      <div className="border rounded-t-2xl flex">
        <img className="hidden sm:block" src={formTopFrame}></img>
        <img className="block sm:hidden" src={formTopFrameMobile}></img>
      </div>
      <div className="relative flex flex-col gap-3 border-b border-l border-r rounded-b-2xl p-8 ">
        <div className="flex flex-col sm:flex-row gap-2 justify-around">
          <div className="sm:w-1/2 flex flex-col">
            <label htmlFor="name">Name:</label>
            <input
              className="pl-3 placeholder-slate-500"
              placeholder="Enter your full name"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="sm:w-1/2 flex flex-col">
            <label htmlFor="name">Company Name:</label>
            <input
              className="pl-3 placeholder-slate-500"
              placeholder="Enter your company name"
              type="text"
              id="name"
              name="name"
              value={company}
              onChange={handleCompChange}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 justify-around">
          <div className="sm:w-1/2 flex flex-col">
            <label htmlFor="name">E-mail</label>
            <input
              className="pl-3 placeholder-slate-500"
              placeholder="Enter your email"
              type="text"
              id="name"
              name="name"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="sm:w-1/2 flex flex-col">
            <label htmlFor="name">Phone Number</label>
            <input
              className="pl-3 placeholder-slate-500"
              placeholder="Enter your phone number"
              type="text"
              id="name"
              name="name"
              value={phone}
              onChange={handlePhoneChange}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="message">Message/Questions</label>
          <textarea
            className="h-40 pl-3 pt-3 placeholder-slate-500  "
            placeholder="Enter your message"
            id="message"
            name="message"
            value={message}
            onChange={handleMessageChange}
          />
        </div>

        <div className="self-end mt-6">
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
            className="submit-button border border-red-700 rounded-lg text-sm py-1 px-4 "
          >
            Send
          </button>
        </div>

        <div className="message-box relative border w-max p-10 rounded-2xl">
          <p>Message Sent it</p>
        </div>
      </div>
    </form>
  );
}

export default Form;
