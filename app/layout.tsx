import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components/common";
import { Providers } from "@/GlobalRedux/provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthManager from "@/utils/AuthManager";
import { Suspense } from "react";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Letgetcar",
  description: "Letgetcar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("RootLayout rendering in the browser.");
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          rel="stylesheet"
        />

        {/* <link
          href="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.css"
          rel="stylesheet"
        /> */}
      </head>

      <body>
        <Providers>
          <ToastContainer />
          <Suspense fallback={<div></div>}>
            <Navbar />
          </Suspense>
          <AuthManager>{children}</AuthManager>
          <Footer />

          <a
            href="https://wa.me/+971543711445"
            className="whatsapp-icon"
            target="_blank"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </Providers>
        {/* <script src="https://cdn.jsdelivr.net/npm/flowbite@2.4.1/dist/flowbite.min.js"></script> */}
      </body>
    </html>
  );
}
