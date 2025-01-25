import React from "react";
import Link from "next/link";
import Container from "../Container";
import { logoBlack } from "@/constants/images"; // Ensure this path is correct
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 z-10 relative">
      <Container>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Who we are section */}
            <div>
              <div className="flex flex-col items-center md:items-start">
                <Image
                  src={logoBlack}
                  alt="LetGetCar Logo"
                  width={160} // Adjust size as needed
                  height={60}
                  className="mb-4"
                />
              </div>
              <h4 className="text-lg font-bold mb-4">Who we are?</h4>
              <p className="text-gray-400 mb-4">
                LetGetCar is your all-in-one automotive platform offering a
                seamless experience for buying, selling, and renting cars. We
                also provide driver hiring services, garage bookings, and more,
                ensuring a hassle-free journey from start to finish.
              </p>
              <div>
                <h5 className="text-lg font-bold mb-2">Contact</h5>
                <p className="text-gray-400">hello@letgetcar.com</p>
                <p className="text-gray-400">+9719999999999999</p>
              </div>
            </div>

            {/* Popular Cities */}
            <div>
              <h4 className="text-lg font-bold mb-4">Popular Cities</h4>
              <ul className="text-gray-400">
                <li className="mb-2">Dubai</li>
                <li className="mb-2">Abu Dhabi</li>
                <li className="mb-2">Sharjah</li>
                <li className="mb-2">Al Ain</li>
                <li className="mb-2">Ajman</li>
                <li className="mb-2">Umm Al Quwain</li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Useful Links</h4>
              <ul className="text-gray-400">
                <li className="mb-2">
                  <Link href="/" className="hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/aboutus" className="hover:text-white transition">
                    About us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/buycarslist"
                    className="hover:text-white transition"
                  >
                    Buy Cars
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/carloan" className="hover:text-white transition">
                    Apply Loan
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/rentcar-limousine"
                    className="hover:text-white transition"
                  >
                    Rent Car & Limousine
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/garagebooking"
                    className="hover:text-white transition"
                  >
                    Garage Booking
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/insurance"
                    className="hover:text-white transition"
                  >
                    Insurance
                  </Link>
                </li>
              </ul>
            </div>

            {/* Popular Brands */}
            <div>
              <h4 className="text-lg font-bold mb-4">Popular Brands</h4>
              <ul className="text-gray-400">
                <li className="mb-2">BMW</li>
                <li className="mb-2">Benz</li>
                <li className="mb-2">Ford</li>
                <li className="mb-2">Nissan</li>
                <li className="mb-2">Toyota</li>
                <li className="mb-2">KIA</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-4">
            <p className="text-gray-400">&copy; 2024 All Rights Reserved</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="/policies/privacy_policy"
                className="text-gray-400 hover:text-white transition"
              >
                Privacy Policy
              </Link>
              <Link
                className="text-gray-400 hover:text-white transition"
                href="/policies/terms_condition"
              >
                Terms & Condition
              </Link>
              <Link
                className="text-gray-400 hover:text-white transition"
                href="/policies/return_and_refund"
              >
                Return & Refund
              </Link>
              <Link
                className="text-gray-400 hover:text-white transition"
                href="/policies/customer_care_policy"
              >
                Customer Care Policy
              </Link>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
