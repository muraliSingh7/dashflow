
"use client"; 

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { XCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-center">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10 mb-4">
            <XCircle className="h-10 w-10 text-destructive" />
          </div>
          <CardTitle className="text-4xl font-bold text-destructive">Something Went Wrong</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            We encountered an unexpected issue. Please try again.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            Error: {error.message}
          </p>
          <div className="flex gap-4">
            <Button onClick={() => reset()} className="flex-1 text-base" size="lg">
              Try Again
            </Button>
            <Button variant="outline" asChild className="flex-1 text-base" size="lg">
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
       <p className="mt-8 text-sm text-muted-foreground">
        DashFlow - We're working on it!
      </p>
    </div>
  );
}
