import "@mantine/core/styles.css";
import "./globals.css";
import { Sidebar } from "./components/Sidebar";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import Head from "next/head";

export const metadata = {
  title: "Orbit HR",
  description: "This is a Job Application Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <head>
        <ColorSchemeScript />
      </head>
      <body className="bg-[#eff4f7] h-screen w-screen">
        <MantineProvider>
          <Sidebar>{children}</Sidebar>
        </MantineProvider>
      </body>
    </html>
  );
}
