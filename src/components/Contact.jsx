import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#232c2f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/da42a117-343b-4fed-9cd2-5cb598ebed9f"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-l-4 pl-2 border-[#FF894C] text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Feel free to reach out via the form, or send me an Email
            danielbennettwebdev@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="bg-[#ccd6f6] my-4 p-2"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#1F7A8C] hover:border-[#1F7A8C] px-4 py-3 my-8 mx-auto flex items-center">
          Contact Me
        </button>
      </form>
    </div>
  );
};

export default Contact;
