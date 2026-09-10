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
  const [isSubmitting, setIsSubmitting] = useState(false);

  function cleanPolishPhone(rawPhone: string) {
    let digits = rawPhone.replace(/\D/g, "");
    if (digits.startsWith("0048")) digits = digits.slice(4);
    if (digits.length === 11 && digits.startsWith("48")) digits = digits.slice(2);
    return digits;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    const nameParts = fullName.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";
    const nationalPhone = cleanPolishPhone(phone);
    const e164Digits = `48${nationalPhone}`;
    const attribution = resolveAttribution();
    const eventId = `lead_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    // 1. Meta Pixel & CAPI dla KAŻDEGO zapisu (konieczne do nauki piksela)
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
        { content_name: "Warsztat: Poukladane Studio" },
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
        clientCategory: "Webinar Registrant",
        sourceUrl: window.location.href,
        eventId,
        attribution,
      });
    } catch (capiErr) {
      console.error("Non-blocking CAPI Error:", capiErr);
    }

    // 2. Rejestracja w API
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          firstName,
          lastName,
          email,
          phone: nationalPhone,
          attribution,
        }),
      });

      if (!res.ok) throw new Error("API Route Failed");
      if (onSuccess) onSuccess();
      router.push("/see-you");
    } catch (error) {
      console.error("Registration Error:", error);
      alert("Wystąpił problem z zapisem. Spróbuj ponownie.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      className={`w-full max-w-[22rem] sm:max-w-[24rem] rounded-2xl border-2 border-[#ea580c] ring-4 ring-[#ea580c]/10 bg-white p-4 sm:p-5 shadow-[0_12px_36px_-6px_rgba(234,88,12,0.22),0_4px_16px_rgba(0,0,0,0.04)] ${className}`}
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-2">
          <input
            required
            type="text"
            autoComplete="name"
            placeholder="Imię"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            disabled={isSubmitting}
            className="h-11 w-full rounded-xl border border-neutral-300 bg-neutral-50/50 px-3.5 text-[16px] text-neutral-900 placeholder:text-neutral-400 focus:border-[#ea580c] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ea580c]/15 sm:text-sm"
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
            className="h-11 w-full rounded-xl border border-neutral-300 bg-neutral-50/50 px-3.5 text-[16px] text-neutral-900 placeholder:text-neutral-400 focus:border-[#ea580c] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ea580c]/15 sm:text-sm"
          />
          <input
            required
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="Numer telefonu (do SMS z linkiem)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            disabled={isSubmitting}
            className="h-11 w-full rounded-xl border border-neutral-300 bg-neutral-50/50 px-3.5 text-[16px] text-neutral-900 placeholder:text-neutral-400 focus:border-[#ea580c] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ea580c]/15 sm:text-sm"
          />
        </div>

        <div className="pt-1">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="flex !h-auto w-full flex-col items-center justify-center gap-1 rounded-xl !border-none !bg-[#ea580c] !py-3 !px-4 shadow-sm transition-colors hover:!bg-[#c2410c] active:scale-[0.99] disabled:opacity-70"
          >
            <span className="text-base font-bold uppercase tracking-normal text-white sm:text-[1.1rem] leading-snug">
              {isSubmitting ? "REZERWACJA..." : "REZERWUJĘ MOJE MIEJSCE"}
            </span>
            <span className="text-xs font-medium text-orange-100 leading-none">
              Bezpłatny Dostęp Live • Czwartek, 20:00
            </span>
          </Button>

          <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[11px] font-medium text-neutral-400">
            <svg className="h-3.5 w-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7z" />
            </svg>
            Brak spamu. Link otrzymasz mailem i SMS-em.
          </div>
        </div>
      </form>
    </div>
  );
}