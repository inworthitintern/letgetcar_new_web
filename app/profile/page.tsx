// "use client";

// import React, { useState } from "react";

// const ProfilePage = () => {
//   const [selectedSection, setSelectedSection] = useState("profile");

//   const sections = [
//     { key: "profile", label: "Profile Update" },
//     { key: "wishlist", label: "Wishlist" },
//     { key: "bookings", label: "Booking Center" },
//     { key: "loans", label: "Loans" },
//     { key: "logout", label: "Logout" },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="max-w-4xl mx-auto py-10 px-4">
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white text-center">
//             <h1 className="text-3xl font-bold">Welcome, John Doe</h1>
//             <p className="mt-2">johndoe@example.com</p>
//           </div>

//           {/* Sidebar */}
//           <div className="flex flex-col sm:flex-row">
//             <aside className="bg-gray-200 w-full sm:w-1/4 p-4">
//               <ul className="space-y-4">
//                 {sections.map((section) => (
//                   <li
//                     key={section.key}
//                     className={`p-3 rounded-lg cursor-pointer text-lg font-semibold ${
//                       selectedSection === section.key
//                         ? "bg-blue-500 text-white"
//                         : "text-gray-700 bg-gray-100 hover:bg-blue-100"
//                     }`}
//                     onClick={() => setSelectedSection(section.key)}
//                   >
//                     {section.label}
//                   </li>
//                 ))}
//               </ul>
//             </aside>

//             {/* Main Content */}
//             <main className="w-full sm:w-3/4 p-6">
//               {/* Section Content */}
//               {selectedSection === "profile" && (
//                 <div>
//                   <h2 className="text-2xl font-bold mb-6">Update Profile</h2>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-gray-700">Name</label>
//                       <input
//                         type="text"
//                         className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
//                         placeholder="John Doe"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-gray-700">Email</label>
//                       <input
//                         type="email"
//                         className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
//                         placeholder="johndoe@example.com"
//                       />
//                     </div>
//                   </div>
//                   <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg">
//                     Save Changes
//                   </button>
//                 </div>
//               )}

//               {selectedSection === "wishlist" && (
//                 <div>
//                   <h2 className="text-2xl font-bold mb-6">Your Wishlist</h2>
//                   <p className="text-gray-600">
//                     No items in your wishlist yet.
//                   </p>
//                 </div>
//               )}

//               {selectedSection === "bookings" && (
//                 <div>
//                   <h2 className="text-2xl font-bold mb-6">Booking Center</h2>
//                   <p className="text-gray-600">No bookings made yet.</p>
//                 </div>
//               )}

//               {selectedSection === "loans" && (
//                 <div>
//                   <h2 className="text-2xl font-bold mb-6">Loans</h2>
//                   <p className="text-gray-600">
//                     No loan applications submitted yet.
//                   </p>
//                 </div>
//               )}

//               {selectedSection === "logout" && (
//                 <div>
//                   <h2 className="text-2xl font-bold mb-6">Logout</h2>
//                   <button className="px-4 py-2 bg-red-500 text-white rounded-lg">
//                     Confirm Logout
//                   </button>
//                 </div>
//               )}
//             </main>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfilePage;

"use client";

import { Container, Section } from "@/components/common";
import { AuthDetailsForm } from "@/components/pages/auth-details";
import { LoansSection, ProfileSection } from "@/components/pages/profile";
import { AUTH_TOKEN } from "@/constants/variables";
import { setLogout } from "@/GlobalRedux/Features/auth/authSlice";
import { RootState } from "@/GlobalRedux/store";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const ProfilePage = () => {
  const router = useRouter();
  const [selectedSection, setSelectedSection] = useState("profile");

  const { user, loading } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  const sections = [
    { key: "profile", label: "Profile Update" },
    // { key: "wishlist", label: "Wishlist" },
    // { key: "bookings", label: "Booking Center" },
    { key: "loans", label: "Loans" },
    { key: "logout", label: "Logout" },
  ];

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading]);

  return (
    <Section>
      <Container>
        <div className="mx-auto py-10 px-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Header */}
            {/* <div className="bg-primary p-6 text-white text-center">
              <h1 className="text-4xl font-bold text-dark">John Doe</h1>
              <p className="mt-2 text-lg text-dark">johndoe@example.com</p>
            </div> */}

            {/* Main Content */}
            <div className="flex flex-col md:flex-row">
              {/* Sidebar */}
              <aside className="bg-gray-200 md:w-1/4 p-4">
                <ul className="space-y-4">
                  {sections.map((section) => (
                    <li
                      key={section.key}
                      className={`p-3 rounded-lg cursor-pointer text-lg font-semibold transition duration-200 hover:bg-yellow-500-500 hover:text-dark ${
                        selectedSection === section.key
                          ? "bg-primary text-dark"
                          : "text-gray-700"
                      }`}
                      onClick={() => setSelectedSection(section.key)}
                    >
                      {section.label}
                    </li>
                  ))}
                </ul>
              </aside>

              {/* Content Area */}
              <main className="md:w-3/4 p-10">
                {/* Section Content */}
                {selectedSection === "profile" && (
                  <AuthDetailsForm redirect={false} />
                )}
                {/* 
                {selectedSection === "wishlist" && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Your Wishlist</h2>
                    <p className="text-gray-600">
                      No items in your wishlist yet.
                    </p>
                  </div>
                )} */}
                {/* 
                {selectedSection === "bookings" && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Booking Center</h2>
                    <p className="text-gray-600">No bookings made yet.</p>
                  </div>
                )} */}

                {selectedSection === "loans" && <LoansSection />}

                {selectedSection === "logout" && (
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Logout</h2>
                    <p className="text-gray-600">
                      Are you sure you want to logout?
                    </p>
                    <button
                      className="mt-4 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500 transition duration-200"
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          window.localStorage.removeItem(AUTH_TOKEN);
                          toast.success("Logout Success");
                          dispatch(setLogout());
                        }
                      }}
                    >
                      Confirm Logout
                    </button>
                  </div>
                )}
              </main>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ProfilePage;
