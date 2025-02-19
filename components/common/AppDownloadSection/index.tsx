import React from "react";
import { Button } from "@/components/UI";
import {
  FaMapMarkerAlt,
  FaBell,
  FaWallet,
  FaCar,
  FaStore,
} from "react-icons/fa";
import { appDownload } from "@/constants/images";
import Image from "next/image";

const features = [
  { icon: <FaMapMarkerAlt />, text: "Optimized Navigation" },
  { icon: <FaWallet />, text: "Car Document Wallet" },
  { icon: <FaBell />, text: "Service Alerts" },
  { icon: <FaBell />, text: "Document Expiry Alerts" },
  { icon: <FaCar />, text: "Park My Car Feature" },
  { icon: <FaStore />, text: "Car Mart" },
  { icon: "🚀", text: "Explore More" },
];

const AppDownloadSection = () => {
  return (
    <section className="py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Your All-in-One Personal Car App
          </h2>
          <p className="text-gray-700 mt-4 text-lg">
            Manage your car seamlessly with our smart features designed to keep
            everything organized.
          </p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center space-x-3 text-gray-800 text-lg"
              >
                <span className="text-2xl text-gray-900">{feature.icon}</span>
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex space-x-4">
            <img
              src="https://media-ae.cars24.com/production/consumer-web-ae/240904190339/js/decea0e609ec1915da37a0057b9e859c.png"
              alt="Download on App Store"
              className="w-36 cursor-pointer hover:opacity-80 transition"
            />
            <img
              src="https://media-ae.cars24.com/production/consumer-web-ae/240904190339/js/5981044807b05fdc3f15bf5424831877.png"
              alt="Download on Google Play"
              className="w-36 cursor-pointer hover:opacity-80 transition"
            />
          </div>
        </div>

        {/* Right Content - App Screenshot */}
        <div className="flex justify-center">
          <Image
            src={appDownload}
            // style={{
            //   height: 150,
            //   width: 150,
            //   objectFit: "cover",
            //   borderRadius: 4,
            // }}
            alt="location-dubai"
            className="w-80 md:w-96"
          />
          {/* <img
            src={appDownload}
            alt="App Screenshot"
            className=""
          /> */}
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
