import React, { type ReactNode, Suspense } from "react";
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
  // Add the icons property here
  icons: {
    icon: "https://assets.cdn.filesafe.space/XC630scPx5PEZe31LmuL/media/6a3689380a683b64fe2824bd.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pl" className={`${body.variable} ${display.variable}`}>
      <body className="font-sans text-body">
        
        <Suspense fallback={null}>
          <FacebookPixel />
        </Suspense>

        <RegisterModalProvider>{children}</RegisterModalProvider>
      </body>
    </html>
  );
}