import { Inter } from "next/font/google";
import "@mantine/core/styles.css";
import "./globals.css";
import { FiMenu } from "react-icons/fi";
import { Sidebar } from "./components/Sidebar";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Orbit HR",
  description: "This is a Job Application Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className="bg-[#EFF4F7]">
        {/* <div className="lg:hidden">
          <FiMenu size={40} color="red" />
        </div> */}

        <Sidebar>
          <MantineProvider>{children}</MantineProvider>
        </Sidebar>
      </body>
    </html>
  );
}
