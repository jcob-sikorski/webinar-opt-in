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
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ownsStudio, setOwnsStudio] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: podłączyć pod docelowy endpoint / CRM
    console.log({ firstName, lastName, email, phone, ownsStudio });
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-h-[90vh] w-[92vw] max-w-md rounded-2xl border border-[#d6d6d6] bg-white shadow-2xl sm:w-full"
        bodyClassName="p-0"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 px-6 py-8 sm:px-8">
          <div className="text-center">
            <h2 className="font-display text-2xl italic leading-tight text-ink">
              Zarezerwuj miejsce na darmowym warsztacie!
            </h2>
            <p className="mt-2 text-base font-semibold text-gray-700">
              Piątek, 14 Sierpnia @ 19:00
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <input
              required
              type="text"
              placeholder="Imię"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full rounded-md border border-[#d6d6d6] bg-[#f4f3ed] px-4 py-3 text-sm text-ink placeholder:text-gray-500 focus:border-coral focus:outline-none"
            />
            <input
              required
              type="text"
              placeholder="Nazwisko"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full rounded-md border border-[#d6d6d6] bg-[#f4f3ed] px-4 py-3 text-sm text-ink placeholder:text-gray-500 focus:border-coral focus:outline-none"
            />
          </div>

          <input
            required
            type="email"
            placeholder="Adres e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-[#d6d6d6] bg-[#f4f3ed] px-4 py-3 text-sm text-ink placeholder:text-gray-500 focus:border-coral focus:outline-none"
          />

          <input
            required
            type="tel"
            placeholder="Numer telefonu"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-md border border-[#d6d6d6] bg-[#f4f3ed] px-4 py-3 text-sm text-ink placeholder:text-gray-500 focus:border-coral focus:outline-none"
          />

          <div className="text-left">
            <label className="mb-1.5 block text-sm font-medium text-ink">
              Czy prowadzisz własne studio/działalność?
            </label>
            <select
              required
              value={ownsStudio}
              onChange={(e) => setOwnsStudio(e.target.value)}
              className="w-full rounded-md border border-[#d6d6d6] bg-[#f4f3ed] px-4 py-3 text-sm text-ink focus:border-coral focus:outline-none"
            >
              <option value="" disabled>
                Wybierz odpowiedź
              </option>
              <option value="tak">Tak</option>
              <option value="nie">Nie</option>
            </select>
          </div>

          <p className="text-xs leading-relaxed text-gray-500">
            Zapisując się, wyrażasz zgodę na kontakt telefoniczny, SMS i mailowy
            w sprawie warsztatu. Twoje dane nie będą sprzedane ani udostępnione
            osobom trzecim. <a href="#" className="text-coral underline">Regulamin</a> |{" "}
            <a href="#" className="text-coral underline">Polityka prywatności</a>
          </p>

          <Button
            type="submit"
            size="lg"
            className="w-full whitespace-normal text-balance rounded-md border border-coral bg-coral-bright px-4 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:border-coral-dark hover:bg-coral-dark"
          >
            Zapisz się na warsztat
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}