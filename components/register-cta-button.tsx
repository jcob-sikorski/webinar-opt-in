"use client";

import { Button } from "@/components/ui/button";
import { useRegisterModal } from "@/components/register-modal-provider";

export function RegisterCtaButton({
  children,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { openRegister } = useRegisterModal();
  return (
    <Button {...props} onClick={openRegister}>
      {children}
    </Button>
  );
}