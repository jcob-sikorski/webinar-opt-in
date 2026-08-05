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

// Full SEO & Social Sharing Metadata
export const metadata: Metadata = {
  title: "Przestań Trenować Klientów Godzina po Godzinie. Otwórz Studio, Które Zarabia 200–600 tys. zł Rocznie Bez Ciebie na Sali",
  description: "Bezpłatny warsztat: Złoty Model Biznesowy. Poznaj 5 filarów Dochodowego Studia i przestań zamieniać swój czas na pieniądze.",
  keywords: [
    "studio treningu personalnego", 
    "biznes fitness", 
    "trener personalny", 
    "jak otworzyć siłownię", 
    "Bartek Sikorski", 
    "Dochodowe Studio", 
    "Złoty Model Biznesowy",
    "własne studio treningowe"
  ],
  authors: [{ name: "Bartek Sikorski" }],
  creator: "Sportowe Przedmieście sp. z o.o.",
  publisher: "Sportowe Przedmieście sp. z o.o.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "https://assets.cdn.filesafe.space/XC630scPx5PEZe31LmuL/media/6a3689380a683b64fe2824bd.png",
    shortcut: "https://assets.cdn.filesafe.space/XC630scPx5PEZe31LmuL/media/6a3689380a683b64fe2824bd.png",
    apple: "https://assets.cdn.filesafe.space/XC630scPx5PEZe31LmuL/media/6a3689380a683b64fe2824bd.png",
  },
  openGraph: {
    title: "Przestań Trenować Klientów Godzina po Godzinie. Otwórz Studio, Które Zarabia 200–600 tys. zł Rocznie Bez Ciebie na Sali",
    description: "Bezpłatny warsztat: Złoty Model Biznesowy. Poznaj 5 filarów Dochodowego Studia i przestań zamieniać swój czas na pieniądze.",
    url: "https://dochodowestudio.com", 
    siteName: "Dochodowe Studio",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: "https://ucarecdn.com/2fb844e9-c929-46c4-853d-057ef2ecad41/unnamed1.webp",
        width: 1200,
        height: 630,
        alt: "Złoty Model Biznesowy - Dochodowe Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Przestań Trenować Klientów Godzina po Godzinie. Otwórz Studio, Które Zarabia 200–600 tys. zł Rocznie Bez Ciebie na Sali",
    description: "Bezpłatny warsztat: Złoty Model Biznesowy. Poznaj 5 filarów Dochodowego Studia i przestań zamieniać swój czas na pieniądze.",
    images: ["https://ucarecdn.com/2fb844e9-c929-46c4-853d-057ef2ecad41/unnamed1.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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