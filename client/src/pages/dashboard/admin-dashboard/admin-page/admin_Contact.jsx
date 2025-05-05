import React from 'react';


import Admin_Footer from '../admin-components/admin_Footer';
import Admin_Chatbot from '../admin-components/admin_Chatbot';
import Admin_FloatingActionButtons from '../admin-components/admin_FloatingActionButtons';
import Admin_Navbar from '../admin-components/admin_Navbar';



const Admin_Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 text-gray-800 dark:text-gray-100">
      <Admin_Navbar />

      <div className="pt-20 pb-20 px-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-10 animate__animated animate__fadeIn animate__delay-1s">
          Contact Us
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md glass dark:glass-dark">
            <h2 className="text-2xl font-semibold mb-4 text-center">Get in Touch</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-semibold">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="p-3 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="p-3 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-semibold">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="p-3 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Google Map Section with Directions */}
          <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md glass dark:glass-dark">
            <h2 className="text-2xl font-semibold mb-4 text-center ">Our Location</h2>
            <div className="w-full h-80">
              <iframe
                title="Google Map"
                className="w-full h-full rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d776.5947222960172!2d88.19096389039817!3d22.197246045049067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a025fbc3b8b7ceb%3A0xf4ea7447f1641eaf!2sDiamond%20Harbour%20District%20Hospital!5e0!3m2!1sen!2sin!4v1745166993188!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

            {/* Directions Link */}
            <div className="mt-4 text-center">
              <a
                href="https://maps.app.goo.gl/Guoy12oQAiEtqPNR9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
      <Admin_Footer />
      <Admin_Chatbot/>
      <Admin_FloatingActionButtons />
    </div>
  );
};

export default Admin_Contact;
