import React from "react";

const ContactPage = () => {
  return (
    <div className="p-10 max-w-5xl mx-auto">
      {/* Breadcrumb */}
      <div className="text-gray-500 hover:text-amber-800 mb-5">
        Home / Contact
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {/* Phone Section */}
        <div className="border-2 rounded-lg p-6 shadow-md text-center">
          <img
            src="/contact/icons-phone.png"
            alt="Phone Icon"
            className="mx-auto mb-4 w-12"
          />
          <h1 className="text-xl font-semibold mb-2">Call to Us</h1>
          <p className="text-gray-600">We are available 24/7, 7 days a week.</p>
          <p className="text-gray-800 mt-2 font-medium">Phone: +8801611112222</p>
        </div>

        {/* Email Section */}
        <div className="border-2 rounded-lg p-6 shadow-md text-center">
          <img
            src="/contact/icons-mail.png"
            alt="Mail Icon"
            className="mx-auto mb-4 w-12"
          />
          <h1 className="text-xl font-semibold mb-2">Write to Us</h1>
          <p className="text-gray-600">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p className="text-gray-800 mt-2 font-medium">Email: support@example.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-50 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input
            type="text"
            placeholder="Your Name*"
            className="p-3 border rounded-md w-full"
          />
          <input
            type="email"
            placeholder="Your Email*"
            className="p-3 border rounded-md w-full"
          />
          <input
            type="tel"
            placeholder="Your Phone*"
            className="p-3 border rounded-md w-full"
          />
        </div>
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 border rounded-md mb-4"
        ></textarea>
        <button className="bg-[#DB4444] text-white px-6 py-3 rounded-md hover:bg-red-600">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactPage;
