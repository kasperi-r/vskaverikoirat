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
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <div className="flex flex-col min-h-screen bg-default-100">
            <Header />
            <main className="w-full max-w-screen-lg mx-auto px-6 pt-20 lg:pt-22">
              {children}
            </main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
