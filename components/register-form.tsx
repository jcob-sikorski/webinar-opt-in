"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { sendToMetaCAPI } from "@/app/actions";
import { resolveAttribution } from "@/lib/attribution";

declare global {
  interface Window {
    fbq: any;
  }
}

interface RegisterFormProps {
  className?: string;
  onSuccess?: () => void;
}

export function RegisterForm({ className = "", onSuccess }: RegisterFormProps) {
  const router = useRouter();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [capital, setCapital] = useState("");
  const [showCapitalError, setShowCapitalError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Funkcja normalizująca numer telefonu dla Polski
  function cleanPolishPhone(rawPhone: string) {
    let digits = rawPhone.replace(/\D/g, "");
    if (digits.startsWith("0048")) digits = digits.slice(4);
    if (digits.length === 11 && digits.startsWith("48")) digits = digits.slice(2);
    return digits; // Zwraca czyste 9 cyfr
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (isSubmitting) return;

    if (!capital) {
      setShowCapitalError(true);
      return;
    }

    setIsSubmitting(true);

    const nameParts = fullName.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    const nationalPhone = cleanPolishPhone(phone); // 9 cyfr np. 500123456
    const e164Digits = `48${nationalPhone}`; // 11 cyfr np. 48500123456 dla Meta
    const clientCategory = capital === "Tak" ? "Idealny ICP" : "Brokie - Odcięcie";
    const attribution = resolveAttribution();

    // 1. Meta Pixel & Meta CAPI (tylko dla zakwalifikowanych)
    if (capital === "Tak") {
      const eventId = `evt_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("init", "965293539900334", {
          em: email.toLowerCase().trim(),
          ph: e164Digits,
          fn: firstName.toLowerCase().trim(),
          ln: lastName.toLowerCase().trim(),
          country: "pl",
          external_id: email.toLowerCase().trim(),
        });

        window.fbq(
          "track",
          "Lead",
          {
            content_name: "Warsztat: Zloty Model Biznesowy",
            content_category: clientCategory,
          },
          { eventID: eventId }
        );
      }

      try {
        await sendToMetaCAPI({
          eventName: "Lead",
          email,
          phone: e164Digits,
          firstName,
          lastName,
          clientCategory,
          sourceUrl: window.location.href,
          eventId,
          attribution,
        });
      } catch (capiErr) {
        console.error("Non-blocking CAPI Error:", capiErr);
      }
    }

    // 2. Wysłanie danych do rejestratora (WebinarJam, GHL, MailerLite, SMS)
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          firstName,
          lastName,
          email,
          phone: nationalPhone, // Wysyłamy znormalizowane 9 cyfr
          capitalSelected: capital,
          clientCategory,
          attribution,
        }),
      });

      if (!res.ok) throw new Error("API Route Failed");

      if (onSuccess) onSuccess();
      router.push("/see-you");
    } catch (error) {
      console.error("Registration Error:", error);
      alert("Coś poszło nie tak. Spróbuj ponownie.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      className={`w-full max-w-[22rem] sm:max-w-[24rem] rounded-2xl border border-neutral-200/80 bg-white p-4 sm:p-5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] ${className}`}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <input
            required
            type="text"
            autoComplete="name"
            placeholder="Pełne imię"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            disabled={isSubmitting}
            className="h-11 w-full rounded-xl border border-neutral-300 bg-neutral-50/50 px-3.5 text-[16px] text-neutral-900 transition placeholder:text-neutral-400 focus:border-[#ea580c] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ea580c]/15 sm:text-sm"
          />

          <input
            required
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="Adres e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting}
            className="h-11 w-full rounded-xl border border-neutral-300 bg-neutral-50/50 px-3.5 text-[16px] text-neutral-900 transition placeholder:text-neutral-400 focus:border-[#ea580c] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ea580c]/15 sm:text-sm"
          />

          <input
            required
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Numer telefonu"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={isSubmitting}
            className="h-11 w-full rounded-xl border border-neutral-300 bg-neutral-50/50 px-3.5 text-[16px] text-neutral-900 transition placeholder:text-neutral-400 focus:border-[#ea580c] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ea580c]/15 sm:text-sm"
          />
        </div>

        <div className="pt-1">
          <p className="mb-2 text-center text-[0.78rem] font-semibold leading-tight text-neutral-700 sm:text-[0.82rem]">
            Czy w ciągu 14 dni możesz zainwestować kilkanaście tys. zł w swój rozwój?
          </p>

          <div className="grid grid-cols-2 gap-2.5">
            {/* Przycisk TAK */}
            <button
              type="button"
              onClick={() => {
                setCapital("Tak");
                setShowCapitalError(false);
              }}
              className={`h-11 rounded-xl text-sm font-bold transition-all border-2 flex items-center justify-center gap-1.5 ${
                capital === "Tak"
                  ? "border-[#ea580c] bg-[#ea580c] text-white shadow-md shadow-[#ea580c]/25 scale-[1.01]"
                  : "border-neutral-300 bg-white text-neutral-700 hover:border-[#ea580c]/60 hover:bg-orange-50/50"
              } ${showCapitalError && !capital ? "border-red-400 bg-red-50/30" : ""}`}
            >
              {capital === "Tak" && (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              )}
              Tak
            </button>

            {/* Przycisk NIE */}
            <button
              type="button"
              onClick={() => {
                setCapital("Nie");
                setShowCapitalError(false);
              }}
              className={`h-11 rounded-xl text-sm font-bold transition-all border-2 flex items-center justify-center gap-1.5 ${
                capital === "Nie"
                  ? "border-neutral-800 bg-neutral-800 text-white shadow-md scale-[1.01]"
                  : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50"
              } ${showCapitalError && !capital ? "border-red-400 bg-red-50/30" : ""}`}
            >
              Nie
            </button>
          </div>

          {showCapitalError && !capital && (
            <span className="mt-1.5 block text-center text-[11px] font-semibold text-red-500">
              Wybierz jedną z opcji, aby przejść dalej
            </span>
          )}
        </div>

        <div className="pt-0.5">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="flex !h-auto w-full flex-col items-center justify-center gap-1 rounded-xl !border-none !bg-[#ea580c] !py-3 !px-4 shadow-sm transition-colors hover:!bg-[#c2410c] active:scale-[0.99] disabled:opacity-70"
          >
            <span className="text-base font-bold uppercase tracking-normal text-white sm:text-[1.1rem] leading-snug">
              {isSubmitting ? "ZAPISYWANIE..." : "ZAPISZ SIĘ NA WARSZTAT"}
            </span>
            <span className="text-xs font-medium text-orange-100 leading-none">
              100% Darmowy Dostęp Live
            </span>
          </Button>

          <div className="mt-2 flex items-center justify-center gap-1.5 text-[11px] font-medium text-neutral-400">
            <svg className="h-3.5 w-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7z" />
            </svg>
            Twoje dane są w 100% bezpieczne.
          </div>
        </div>
      </form>
    </div>
  );
}