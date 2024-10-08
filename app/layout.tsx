import type { Metadata } from "next";
import { inter } from "./ui/fonts";
import Header from "./ui/header";
import "./globals.css";
import Footer from "./ui/Footer";

export const metadata: Metadata = {
  title: "VS Kaverikoirat",
  description: "Varsinais-Suomen Kennelpiirin kaverikoiratoiminta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <Header />
          <div className="flex-grow w-full max-w-screen-lg mx-auto px-6 pt-20 lg:pt-22">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
