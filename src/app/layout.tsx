import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import { Navbar } from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer/footer";
import Navbar from "@/components/layouts/navbar";
import { WhatsAppButton } from "@/components/landingPage/home/whatsapp/whatsappButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agency App",
  description: "Agencia de turismo en Cusco",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <Navbar />
        {children}
        <WhatsAppButton phone="51900671114" message="Hola, me gustaría obtener más información." />
        <Footer />
      </body>
    </html>
  );
}
