import React from "react";

const ContactPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-purple-600 text-center mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your Message"
                className="w-full p-2 border border-gray-300 rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-500"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-4">
            Have questions or need help? Contact us using the form or through the details below.
          </p>
          <ul className="space-y-2">
            <li>
              <strong>Address:</strong> 123 Main Street, Calicut, Kerala
            </li>
            <li>
              <strong>Phone:</strong> +91 98765 43210
            </li>
            <li>
              <strong>Email:</strong> support@shopease.com
            </li>
          </ul>
          <h3 className="text-xl font-medium mt-6">Follow Us</h3>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="text-purple-600 hover:text-purple-800"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-purple-600 hover:text-purple-800"
              aria-label="Twitter"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-purple-600 hover:text-purple-800"
              aria-label="Instagram"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ContactPage;

