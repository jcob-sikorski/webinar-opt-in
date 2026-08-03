import React, { type ReactNode, Suspense } from "react"; // <-- 1. Import Suspense
import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { RegisterModalProvider } from "@/components/register-modal-provider";
import { FacebookPixel } from "@/components/facebook-pixel";

const body = Inter({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-body",
});

const display = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Jak Zbudowa  Studio Treningu Personalnego Generuj ce 600 000 z  Rocznie",
  description:
    "A 2-hour workshop on the Agreement Engineering webinar framework.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pl" className={`${body.variable} ${display.variable}`}>
      <body className="font-sans text-body">
        
        {/* 2. Wrap the Facebook Pixel in a Suspense boundary */}
        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>

        <RegisterModalProvider>{children}</RegisterModalProvider>
      </body>
    </html>
  );
}