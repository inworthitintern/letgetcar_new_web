// components/Footer.js

import React from "react";
import Link from "next/link";
import Container from "../Container";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 z-10 relative">
      <Container>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Who we are section */}
            <div>
              <h4 className="text-lg font-bold mb-4">Who we are?</h4>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                quis sollicitudin felis, sed imperdiet justo. Duis volutpat ac
                urna non mattis.
              </p>
              <div>
                <h5 className="text-lg font-bold mb-2">Contact</h5>
                <p className="text-gray-400">hello@company.com</p>
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
                  <Link href="/about" className="hover:text-white transition">
                    About us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/cars" className="hover:text-white transition">
                    Cars
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/loan" className="hover:text-white transition">
                    Loan
                  </Link>
                </li>
                <li className="mb-2">
                  <Link href="/emi">EMI</Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/popular-cars"
                    className="hover:text-white transition"
                  >
                    Popular Cars
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
                href="/terms"
                className="text-gray-400 hover:text-white transition"
              >
                Terms
              </Link>
              <Link
                className="text-gray-400 hover:text-white transition"
                href="/privacy"
              >
                Privacy
              </Link>
              <Link
                className="text-gray-400 hover:text-white transition"
                href="/cookies"
              >
                Cookies
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
