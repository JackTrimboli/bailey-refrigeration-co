import { Navbar } from "@/components/navbar/Navbar";
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
      <body className="max-w-[1280px] m-auto flex flex-col justify-center">
        <Navbar />
        <div className="h-full max-w-[1280px] py-16 px-8 m-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
