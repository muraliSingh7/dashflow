
import { getServerAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Loader2 } from "lucide-react";

export default async function HomePage() {
  const session = await getServerAuthSession();

  if (session) {
    redirect("/dashboard");
  } else {
    redirect("/auth/signin");
  }

  // This part should ideally not be reached due to redirects
  // but acts as a fallback during the brief moment before redirect.
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Loader2 className="h-16 w-16 animate-spin text-primary" />
      <p className="ml-4 text-xl text-foreground">Loading DashFlow...</p>
    </div>
  );
}
