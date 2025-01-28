// "use client";

// import Link from "next/link";
// import React, { useState } from "react";
// import {
//   HamburgerIcon,
//   HeartOutlinedIcon,
//   ProfileIcon,
//   SearchIcon,
// } from "@/components/svgs";

// const Navbar = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed top-0 w-full z-50">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a href="#" className="flex items-center mr-2">
//           <img
//             src="https://flowbite.com/docs/images/logo.svg"
//             className="h-8"
//             alt="Flowbite Logo"
//           />
//         </a>
//         <button
//           onClick={toggleSidebar}
//           type="button"
//           className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           aria-controls="navbar-dropdown"
//           aria-expanded={isSidebarOpen ? "true" : "false"}
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg
//             className="w-5 h-5"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 17 14"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M1 1h15M1 7h15M1 13h15"
//             />
//           </svg>
//         </button>
//         <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
//           <ul className="flex items-center flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 space-x-4 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//             <li>
//               <Link
//                 href="#"
//                 className="block py-1 px-3 rounded text-dark bg-primary"
//                 aria-current="page"
//               >
//                 Home
//               </Link>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-1 px-3 rounded text-gray-75 font-normal hover:text-primary-text"
//               >
//                 Buy New car
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-1 px-3 rounded text-gray-75 font-normal hover:text-primary-text"
//               >
//                 Buy Used Car
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-1 px-3 rounded text-gray-75 font-normal hover:text-primary-text"
//               >
//                 Sell Car
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-1 px-3 rounded text-gray-75 font-normal hover:text-primary-text"
//               >
//                 Rent Car & Limousine
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-1 px-3 rounded text-gray-75 font-normal hover:text-primary-text"
//               >
//                 Finance
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="block py-1 px-3 rounded text-gray-75 font-normal hover:text-primary-text"
//               >
//                 Hire Driver
//               </a>
//             </li>
//             <li className="px-3 cursor-pointer">
//               <HeartOutlinedIcon height={20} width={20} />
//             </li>
//             <li>
//               <SearchIcon height={36} width={36} />
//             </li>
//             <li className="px-3">
//               <a href="#" className="font-normal flex items-center gap-2">
//                 <ProfileIcon height={20} width={20} />
//                 Login
//               </a>
//             </li>
//             <li
//               className="px-3 cursor-pointer z-10"
//               id="dropdownHoverButton"
//               data-dropdown-toggle="dropdownHover"
//               data-dropdown-trigger="hover"
//               style={{ zIndex: 200 }}
//             >
//               <HamburgerIcon height={20} width={20} />

//               {/* <!-- Dropdown menu --> */}
//               <div
//                 id="dropdownHover"
//                 className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
//               >
//                 <ul
//                   className="py-2 text-sm text-gray-700 dark:text-gray-200"
//                   aria-labelledby="dropdownHoverButton"
//                 >
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       Dashboard
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       Settings
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       Earnings
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       href="#"
//                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
//                     >
//                       Sign out
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//       {/* Sidebar for mobile */}
//       <div
//         className={`fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-900 transform ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 ease-in-out`}
//         style={{ zIndex: 100 }}
//       >
//         <div className="p-4">
//           <button
//             onClick={toggleSidebar}
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//           >
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//         </div>
//         <ul className="space-y-2 font-medium">
//           <li>
//             <Link
//               href="#"
//               className="block py-2 px-4 rounded text-dark bg-primary"
//               aria-current="page"
//             >
//               Home
//             </Link>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="block py-2 px-4 rounded text-gray-75 font-normal hover:text-primary-text"
//             >
//               Buy New car
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="block py-2 px-4 rounded text-gray-75 font-normal hover:text-primary-text"
//             >
//               Buy Used Car
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="block py-2 px-4 rounded text-gray-75 font-normal hover:text-primary-text"
//             >
//               Sell Car
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="block py-2 px-4 rounded text-gray-75 font-normal hover:text-primary-text"
//             >
//               Rent Car & Limousine
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="block py-2 px-4 rounded text-gray-75 font-normal hover:text-primary-text"
//             >
//               Finance
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               className="block py-2 px-4 rounded text-gray-75 font-normal hover:text-primary-text"
//             >
//               Hire Driver
//             </a>
//           </li>
//         </ul>
//       </div>
//       {/* Overlay to close the sidebar */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-50 z-40"
//           onClick={toggleSidebar}
//         ></div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import { useEffect, useState } from "react";
import { Navbar, Dropdown, Button } from "flowbite-react";
import Link from "next/link";
import {
  HamburgerIcon,
  HeartOutlinedIcon,
  ProfileIcon,
  SearchIcon,
} from "@/components/svgs";
import SearchPopup from "../SearchPopup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/GlobalRedux/store";
import {
  getProfileDetails,
  setLogout,
  signOut,
} from "@/GlobalRedux/Features/auth/authSlice";
import { logo } from "@/constants/images";
import { AUTH_TOKEN } from "@/constants/variables";
import { toast } from "react-toastify";

import { usePathname, useSearchParams } from "next/navigation";

const CustomNavbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const dispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.auth);

  const pathname = usePathname(); // Gets the pathname, e.g., "/buycarslist"
  const searchParams = useSearchParams(); // Gets the query string, e.g., "?is_new_car=0"

  // Combine the pathname and search params
  const fullPath = `${pathname}${searchParams ? "?" + searchParams : ""}`;

  console.log(fullPath, "helloo");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    // Access window.location only in the browser
    if (typeof window !== "undefined") {
      setCurrentPath(fullPath);
    }
  }, [fullPath]);

  // useEffect(() => {
  //   dispatch(getProfileDetails());
  // }, []);

  return (
    <Navbar
      fluid={true}
      rounded={false}
      className="bg-white dark:bg-gray-900 fixed top-0 w-full z-50 border-b dark:border-gray-700"
    >
      <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
        <Link href="/" className="flex items-center">
          <img
            src={logo.src}
            style={{ width: "160px", objectFit: "cover" }}
            alt="Logo"
          />
        </Link>

        <div className="flex items-center md:hidden">
          <Button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <HamburgerIcon className="w-5 h-5" />
          </Button>
        </div>

        <div className="hidden md:flex md:space-x-4">
          <Link
            href="/"
            className={`py-1 px-3 rounded font-normal 
              ${
                currentPath.includes("/")
                  ? "text-dark bg-primary"
                  : "text-gray-75 hover:text-primary-text"
              }
            `}
            aria-current="page"
          >
            Home
          </Link>
          <Link
            href="/buycarslist?is_new_car=1"
            className={`py-1 px-3 rounded font-normal 
              ${
                currentPath.includes("/buycarslist?is_new_car=1")
                  ? "text-dark bg-primary"
                  : "text-gray-75 hover:text-primary-text"
              }
            `}
          >
            Buy New Car
          </Link>
          <Link
            href="/buycarslist?is_new_car=0"
            className={`py-1 px-3 rounded font-normal ${
              currentPath.includes("/buycarslist?is_new_car=0")
                ? "text-dark bg-primary"
                : "text-gray-75 hover:text-primary-text"
            }`}
          >
            Buy Used Car
          </Link>
          <Link
            href="/sellcar"
            className={`py-1 px-3 rounded font-normal ${
              currentPath.includes("/sellcar")
                ? "text-dark bg-primary"
                : "text-gray-75 hover:text-primary-text"
            }`}
          >
            Sell Car
          </Link>
          <Link
            href="/rentcar-limousine"
            className={`py-1 px-3 rounded font-normal ${
              currentPath.includes("/rentcar-limousine")
                ? "text-dark bg-primary"
                : "text-gray-75 hover:text-primary-text"
            }`}
          >
            Rent Car & Limousine
          </Link>

          <Link
            href="https://lgccarmart.meatado.com"
            className="relative flex items-center gap-2 py-1 px-3 text-primary-text font-bold"
          >
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 text-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5M6 3h12l1.5 6H4.5L6 3zm2.25 18a2.25 2.25 0 104.5 0M12 21a2.25 2.25 0 104.5 0"
              />
            </svg>
            {/* Text */}
            Car Mart
            {/* Underline */}
            {/* <span className="absolute left-0 bottom-0 w-full h-1 bg-primary rounded-full"></span> */}
          </Link>
          <div className="flex items-center space-x-8">
            <Link href="/wishlist">
              <HeartOutlinedIcon height={20} width={20} />
            </Link>

            <SearchPopup />

            {user ? (
              <Link
                href="/profile"
                className="flex items-center text-dark hover:text-primary-text"
              >
                <ProfileIcon height={20} width={20} />
                <span className="ml-2">{user.name || "Customer"}</span>
              </Link>
            ) : (
              <Link
                href="/login"
                className="flex items-center text-dark hover:text-primary-text"
              >
                <ProfileIcon height={20} width={20} />
                <span className="ml-2">Login</span>
              </Link>
            )}
          </div>
          {/* {user && ( */}
          <Dropdown
            label=""
            dismissOnClick={false}
            renderTrigger={() => (
              <div className="flex items-center pl-4">
                <HamburgerIcon height={20} width={20} />
              </div>
            )}
          >
            <Dropdown.Item>
              <Link href="/garagebooking" className="block px-4 py-2 text-sm">
                Garage Booking & Modification
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/hiredriver" className="block px-4 py-2 text-sm">
                Hire Driver
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/carloan" className="block px-4 py-2 text-sm">
                Finance
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/insurance" className="block px-4 py-2 text-sm">
                Insurance
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/aboutus" className="block px-4 py-2 text-sm">
                About Us
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/contactus" className="block px-4 py-2 text-sm">
                Contact Us
              </Link>
            </Dropdown.Item>
            {/* <Dropdown.Item
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.localStorage.removeItem(AUTH_TOKEN);
                    toast.success("Logout Success");
                    dispatch(setLogout());
                  }
                }}
              >
                <Link href="#" className="block px-4 py-2 text-sm">
                  Sign out
                </Link>
              </Dropdown.Item> */}
          </Dropdown>
          {/* )} */}
        </div>
      </div>

      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-900 transition-transform duration-300 ease-in-out transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 100 }}
      >
        <div className="p-4">
          <Button onClick={toggleSidebar} className="mb-4">
            Close
          </Button>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="block py-2 px-4 rounded text-dark bg-primary"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/buycarslist?is_new_car=1"
                className="block py-2 px-4 rounded text-gray-75 hover:text-primary-text"
              >
                Buy New Car
              </Link>
            </li>
            <li>
              <Link
                href="/buycarslist?is_new_car=0"
                className="block py-2 px-4 rounded text-gray-75 hover:text-primary-text"
              >
                Buy Used Car
              </Link>
            </li>
            <li>
              <Link
                href="/sellcar"
                className="block py-2 px-4 rounded text-gray-75 hover:text-primary-text"
              >
                Sell Car
              </Link>
            </li>
            <li>
              <Link
                href="/rentcar-limousine"
                className="block py-2 px-4 rounded text-gray-75 hover:text-primary-text"
              >
                Rent Car & Limousine
              </Link>
            </li>
            <li>
              <Link
                href="/carloan"
                className="block py-2 px-4 rounded text-gray-75 hover:text-primary-text"
              >
                Finance
              </Link>
            </li>
            <li>
              <Link
                href="/hiredriver"
                className="block py-2 px-4 rounded text-gray-75 hover:text-primary-text"
              >
                Hire Driver
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </Navbar>
  );
};

export default CustomNavbar;
