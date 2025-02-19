"use client";

import React from "react";
import { Card } from "flowbite-react";
import { Button } from "@/components/UI";
// import { FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen p-8">
      {/* Hero Section */}
      <section className="w-full h-64 bg-cover bg-center bg-hero-pattern flex flex-col justify-center items-center bg-primary">
        <h1 className="text-4xl font-bold text-dark">Contact Us</h1>
        <p className="mt-4 text-xl text-dark">
          We're here to help! Reach out through any of our channels.
        </p>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 text-center bg-white">
        <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* WhatsApp Contact */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card className="flex flex-col items-center cursor-pointer">
              {/* <FaWhatsapp className="text-green-500 text-5xl" /> */}
              <h3 className="text-xl font-semibold mt-4">WhatsApp</h3>
              <p className="text-gray-600">
                Chat with us on WhatsApp for quick support
              </p>
              <Button text="Contact via WhatsApp" />
            </Card>
          </a>

          {/* Phone Contact */}
          <a href="tel:+1234567890">
            <Card className="flex flex-col items-center cursor-pointer">
              {/* <FaPhone className="text-blue-500 text-5xl" /> */}
              <h3 className="text-xl font-semibold mt-4">Phone Call</h3>
              <p className="text-gray-600">
                Give us a call for any assistance you need
              </p>
              <Button text="Call Us Now" />
            </Card>
          </a>

          {/* Email Contact */}
          <Card className="flex flex-col items-center">
            {/* <FaEnvelope className="text-red-500 text-5xl" /> */}
            <h3 className="text-xl font-semibold mt-4">Email Us</h3>
            <p className="text-gray-600">
              Send us an email for more detailed inquiries
            </p>
            <p className="text-gray-600 font-bold text-primary-text">
              info@letgetcar.com
            </p>
          </Card>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Find Us Here</h2>
        <div className="w-full h-96">
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8350014711765!2d144.9577284158969!3d-37.817209742438344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce700!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1636478426890!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </section> */}

      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Find Us Here</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Location Map */}
          <div className="h-96">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8350014711765!2d144.9577284158969!3d-37.817209742438344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce700!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1636478426890!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Enquiry Form</h3>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Your Message"
                  rows="4"
                ></textarea>
              </div>

              <div className="mt-6">
                <Button text="Submit" htmlType="submit" />
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Optional: Contact Form */}
      {/* <section className="py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">
          Send Us a Message
        </h2>
        <div className="flex justify-center">
          <form className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </section> */}
    </div>
  );
};

export default ContactUs;
