
"use client";

import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Aperture, Loader2 } from "lucide-react";

export default function SignInPage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if(status === "loading"){
      setIsLoading(true);
    }else if (status === "authenticated") {
      setIsLoading(false);
      router.push("/dashboard");
    }
  }, [status, router]);

  const handleSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn("google", { callbackUrl: "/dashboard" });
    } catch (err) {
      console.error("Sign in failed:", err);
      setIsLoading(false); 
    }
  };

  if (status === "loading" || (status === "authenticated" && !isLoading)) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }


  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold tracking-tight text-primary">DashFlow</CardTitle>
          <CardDescription>Sign in to access your dashboard</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {error && (
            <div className="rounded-md border border-destructive/50 bg-destructive/10 p-3 text-center text-sm text-destructive">
              Sign in failed. Please try again. ({error})
            </div>
          )}
          <Button
            onClick={handleSignIn}
            disabled={isLoading}
            className="w-full text-base"
            size="lg"
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            ) : (
              <Aperture className="mr-2 h-5 w-5" />
            )}
            Sign in with Google
          </Button>
        </CardContent>
      </Card>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        Welcome to DashFlow. Your modern dashboard experience.
      </p>
    </div>
  );
}
