import type { Metadata } from "next";
import { Providers } from "./providers";
import { inter } from "./ui/fonts";
import Header from "./ui/header";
import Footer from "./ui/Footer";
import "./globals.css";

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
    <html lang="en" className="light text-foreground bg-background">
      <body className={`${inter.className} antialiased bg-default-100`}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow w-full max-w-screen-lg mx-auto px-6 pt-20 lg:pt-22">
              {children}
            </div>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
