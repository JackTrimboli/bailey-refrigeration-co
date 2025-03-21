import { Navbar } from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Bailey Refrigeration Co.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="w-full m-auto flex flex-col justify-center">
        <Navbar />
        <div className="mx-auto h-full max-w-[1280px] py-16 px-4 flex flex-col justify-center">
          {children}
          <div className="fade-up-animation">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
