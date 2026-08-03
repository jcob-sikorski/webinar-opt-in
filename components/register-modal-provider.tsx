"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";

import { RegisterModal } from "@/components/register-modal";

const RegisterModalContext = createContext<{ openRegister: () => void } | null>(
  null,
);

export function RegisterModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const openRegister = useCallback(() => setOpen(true), []);
  const value = useMemo(() => ({ openRegister }), [openRegister]);

  return (
    <RegisterModalContext.Provider value={value}>
      {children}
      <RegisterModal open={open} onOpenChange={setOpen} />
    </RegisterModalContext.Provider>
  );
}

export function useRegisterModal() {
  const ctx = useContext(RegisterModalContext);
  if (!ctx) {
    throw new Error("useRegisterModal must be used inside RegisterModalProvider");
  }
  return ctx;
}