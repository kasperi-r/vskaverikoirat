import type { Metadata } from "next";
import { inter } from "./ui/fonts";
import Header from "./ui/header";
import "./globals.css";
import Footer from "./ui/Footer";

export const metadata: Metadata = {
  title: "VS Kaverikoirat",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen bg-gray-200">
          <Header />
          <div className="flex-grow xl:w-[40%] mx-auto px-6 pt-12">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
