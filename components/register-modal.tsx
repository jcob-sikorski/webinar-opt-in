"use client";

import { useState } from "react";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface RegisterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RegisterModal({ open, onOpenChange }: RegisterModalProps) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [capital, setCapital] = useState("");

  const capitalOptions = [
    {
      id: "none",
      text: "Nie mam kapitału, szukam darmowej wiedzy / dopiero zaczynam od zera.",
    },
    {
      id: "below_35k",
      text: "Poniżej 35 000 zł, ale jestem w stanie zorganizować finansowanie.",
    },
    {
      id: "35k_plus",
      text: "35 000 – 100 000 zł (lub więcej) – mam kapitał i jestem gotowy zainwestować.",
    },
  ];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    let clientCategory = "";
    if (capital === "none") clientCategory = "Brokie - Odcięcie";
    if (capital === "below_35k") clientCategory = "Do weryfikacji";
    if (capital === "35k_plus") clientCategory = "Idealny ICP";

    // TODO: endpoint / integracja z CRM
    console.log({
      firstName,
      email,
      phone,
      capitalSelected: capital,
      clientCategory,
    });
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-h-[95vh] w-[95vw] max-w-lg overflow-y-auto rounded-3xl border-0 bg-white p-0 shadow-2xl sm:w-full"
        aria-describedby="Formularz rejestracji na warsztat"
      >
        <div className="bg-gradient-to-b from-[#f8f7f2] to-white px-6 pb-4 pt-8 sm:px-10">
          <div className="mb-6 flex flex-col items-center text-center">
            <h2 className="font-display text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              Zarezerwuj miejsce <br />
              <span className="italic text-coral">na darmowym warsztacie</span>
            </h2>
            <p className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-gray-600">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Piątek, 14 Sierpnia @ 19:00
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Dane kontaktowe */}
            <div className="flex flex-col gap-3">
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  required
                  type="text"
                  placeholder="Twoje imię"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full rounded-xl border border-[#d6d6d6] bg-[#f4f3ed]/50 py-3.5 pl-11 pr-4 text-sm text-ink transition-all placeholder:text-gray-500 hover:bg-[#f4f3ed] focus:border-coral focus:bg-white focus:outline-none focus:ring-4 focus:ring-coral/10"
                />
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  required
                  type="email"
                  placeholder="Najlepszy adres e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-[#d6d6d6] bg-[#f4f3ed]/50 py-3.5 pl-11 pr-4 text-sm text-ink transition-all placeholder:text-gray-500 hover:bg-[#f4f3ed] focus:border-coral focus:bg-white focus:outline-none focus:ring-4 focus:ring-coral/10"
                />
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <input
                  required
                  type="tel"
                  placeholder="Numer telefonu"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full rounded-xl border border-[#d6d6d6] bg-[#f4f3ed]/50 py-3.5 pl-11 pr-4 text-sm text-ink transition-all placeholder:text-gray-500 hover:bg-[#f4f3ed] focus:border-coral focus:bg-white focus:outline-none focus:ring-4 focus:ring-coral/10"
                />
              </div>
            </div>

            <div className="my-2 h-px w-full bg-gray-100"></div>

            {/* Kwalifikacja */}
            <div className="text-left">
              <label className="mb-4 block text-[15px] font-bold leading-snug text-ink">
                Zbudowanie dochodowego studia wymaga inwestycji. Jakim kapitałem na rozwój biznesu dysponujesz w tym momencie?
              </label>
              <div className="flex flex-col gap-2.5">
                {capitalOptions.map((option) => {
                  const isSelected = capital === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => setCapital(option.id)}
                      className={`group relative flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all duration-200 ease-in-out ${
                        isSelected
                          ? "border-coral bg-coral/5 shadow-[0_0_0_2px_rgba(255,127,80,0.2)]"
                          : "border-[#d6d6d6] bg-white hover:border-coral/50 hover:bg-[#f4f3ed]/50"
                      }`}
                    >
                      <div
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
                          isSelected ? "border-coral bg-coral" : "border-gray-300 bg-white group-hover:border-coral/50"
                        }`}
                      >
                        {isSelected && (
                          <svg className="h-3.5 w-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span
                        className={`text-sm leading-relaxed ${
                          isSelected ? "font-semibold text-coral-dark" : "font-medium text-gray-700"
                        }`}
                      >
                        {option.text}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-2 flex flex-col gap-4 pb-2">
              <Button
                type="submit"
                size="lg"
                disabled={!capital}
                className="w-full whitespace-normal text-balance rounded-md border border-coral bg-coral-bright px-4 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:border-coral-dark hover:bg-coral-dark disabled:cursor-not-allowed disabled:opacity-50"
              >
                Zapisz się
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs font-medium text-gray-400">
                <svg className="h-4 w-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7z" />
                </svg>
                Twoje dane są u nas w 100% bezpieczne.
              </div>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}