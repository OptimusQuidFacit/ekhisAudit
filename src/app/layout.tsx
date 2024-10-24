import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ContextProvider from "@/components/ContextProvider";
import Menu, { user } from "@/components/Menu";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Monitoring and Evaluation",
  description: "Data analysis software for EKHIS' monitoring and evaluation exercise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ContextProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {user.isAdmin&&<Menu/>}
          <main className="h-[94.9vh] w-screen overflow-hidden max-h-1000px">
            {children}
          </main>
        </body>
      </html>
    </ContextProvider>
  );
}
