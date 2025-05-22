
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-center">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
            <AlertTriangle className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-4xl font-bold text-primary">404 - Page Not Found</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">
            Oops! The page you're looking for doesn't exist or has been moved.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>
            Don't worry, you can find plenty of other things on our dashboard.
          </p>
          <Button asChild className="w-full text-base" size="lg">
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        </CardContent>
      </Card>
       <p className="mt-8 text-sm text-muted-foreground">
        DashFlow - Navigating you back.
      </p>
    </div>
  );
}
