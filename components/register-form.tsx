"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { sendToMetaCAPI } from "@/app/actions";
import { resolveAttribution } from "@/lib/attribution";
import Clarity from "@microsoft/clarity";

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

  async function reportLeadToMeta({
    firstName,
    lastName,
    email,
    e164Digits,
    eventId,
    attribution,
  }: {
    firstName: string;
    lastName: string;
    email: string;
    e164Digits: string;
    eventId: string;
    attribution: ReturnType<typeof resolveAttribution>;
  }) {
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
        { content_name: "Warsztat: Zloty Model Biznesowy" },
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
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isSubmitting) return;

    Clarity.event("register_button_clicked");
    setIsSubmitting(true);

    const nameParts = fullName.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";
    const nationalPhone = cleanPolishPhone(phone);
    const e164Digits = `48${nationalPhone}`;
    const attribution = resolveAttribution();
    const eventId = `lead_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

    Clarity.setTag("utm_source", attribution.utm_source ?? "direct");

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

      const data = await res.json().catch(() => null);
      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "Błąd zapisu na warsztat");
      }

      await reportLeadToMeta({ firstName, lastName, email, e164Digits, eventId, attribution });
      Clarity.event("registration_succeeded");

      if (onSuccess) onSuccess();
      router.push("/see-you");
    } catch (error) {
      console.error("Registration Error:", error);
      Clarity.event("registration_failed");
      Clarity.setTag(
        "registration_failure_reason",
        error instanceof Error ? error.message : "Unknown Error"
      );
      alert("Wystąpił problem z zapisem. Upewnij się, że dane są poprawne i spróbuj ponownie.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      className={`w-full max-w-[23rem] sm:max-w-[25rem] rounded-2xl border-2 border-[#ea580c] bg-white p-5 shadow-[0_16px_40px_-8px_rgba(234,88,12,0.28)] ${className}`}
    >
      {/* Header Formularza */}
      <div className="mb-4 text-center">
        <span className="inline-block rounded-full bg-orange-100 px-3 py-0.5 text-[0.68rem] font-extrabold uppercase tracking-wider text-[#ea580c]">
          KROK 1 Z 2: REZERWACJA BILETU
        </span>
        <h3 className="mt-1.5 text-lg font-black text-neutral-900 leading-tight">
          Gdzie przesłać Twój bilet i materiały wdrożeniowe?
        </h3>
        <p className="mt-1 text-xs text-neutral-500">
          Wstęp: <span className="line-through text-neutral-400">497 zł</span>{" "}
          <strong className="text-emerald-600 font-bold">0 zł (Darmowy Bilet)</strong>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-2.5">
          <div>
            <label className="mb-1 block text-[11px] font-bold text-neutral-700 uppercase tracking-wide">
              Imię i Nazwisko
            </label>
            <input
              required
              type="text"
              autoComplete="name"
              placeholder="np. Jakub Kowalski"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              disabled={isSubmitting}
              className="h-11 w-full rounded-xl border border-neutral-300 bg-neutral-50/70 px-3.5 text-[15px] text-neutral-900 placeholder:text-neutral-400 focus:border-[#ea580c] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20"
            />
          </div>

          <div>
            <label className="mb-1 block text-[11px] font-bold text-neutral-700 uppercase tracking-wide">
              Główny Adres E-mail
            </label>
            <input
              required
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="twoj.mail@domena.pl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              className="h-11 w-full rounded-xl border border-neutral-300 bg-neutral-50/70 px-3.5 text-[15px] text-neutral-900 placeholder:text-neutral-400 focus:border-[#ea580c] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wide">
                Numer Telefonu
              </label>
              <span className="text-[10px] text-neutral-500 font-medium">Link w SMS</span>
            </div>
            <input
              required
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="np. 500 123 456"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={isSubmitting}
              className="h-11 w-full rounded-xl border border-neutral-300 bg-neutral-50/70 px-3.5 text-[15px] text-neutral-900 placeholder:text-neutral-400 focus:border-[#ea580c] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20"
            />
          </div>
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="group relative flex !h-auto w-full flex-col items-center justify-center overflow-hidden rounded-xl !bg-[#ea580c] !py-3.5 !px-4 shadow-md transition-all hover:!bg-[#c2410c] hover:shadow-lg active:scale-[0.98] disabled:opacity-75"
          >
            <span className="text-[1.02rem] sm:text-[1.08rem] font-black uppercase tracking-tight text-white leading-tight">
              {isSubmitting ? "REZERWACJA MIEJSCA..." : "REZERWUJĘ BEZPŁATNE MIEJSCE »"}
            </span>
            <span className="mt-0.5 text-[11px] font-semibold text-orange-100 leading-none">
              Natychmiastowy dostęp live + Playbook PDF
            </span>
          </Button>

          <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] font-medium text-neutral-500">
            <svg className="h-3.5 w-3.5 text-emerald-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7z" />
            </svg>
            <span>Brak spamu. Link do pokoju wyślemy mailem i SMS-em.</span>
          </div>
        </div>
      </form>
    </div>
  );
}