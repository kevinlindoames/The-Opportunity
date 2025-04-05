// src/components/auth/LogoutButton.tsx
"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import authService from "@/services/authService";

export function LogoutButton() {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogout = () => {
    authService.logout();
    toast.success("Sesión cerrada");
    router.push("/login");
  };

  // No renderizar nada durante SSR o si no hay usuario autenticado
  if (!isClient || !authService.isAuthenticated()) {
    return null;
  }

  return (
    <Button variant="outline" size="sm" onClick={handleLogout}>
      Cerrar Sesión
    </Button>
  );
}
