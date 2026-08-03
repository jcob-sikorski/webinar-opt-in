import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";

import "./globals.css";

import { RegisterModalProvider } from "@/components/register-modal-provider";

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
  title: "Jak Zbudować Studio Treningu Personalnego Generujące 600 000 zł Rocznie",
  description:
    "A 2-hour workshop on the Agreement Engineering webinar framework.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
   return (
     <html lang="pl" className={`${body.variable} ${display.variable}`}>
        <body className="font-sans text-body">
          <RegisterModalProvider>{children}</RegisterModalProvider>
        </body>
     </html>
   );
}