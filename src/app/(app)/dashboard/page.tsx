
import { getServerAuthSession } from "@/lib/auth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HandMetal } from "lucide-react";

export default async function DashboardPage() {
  const session = await getServerAuthSession();
  const userName = session?.user?.name || "User";

  return (
    <div className="container mx-auto py-8">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <HandMetal className="h-8 w-8 text-primary" />
            <CardTitle className="text-3xl font-bold">Welcome to DashFlow!</CardTitle>
          </div>
          <CardDescription className="text-lg">
            Your personalized dashboard experience.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl">
            Hello, <span className="font-semibold text-primary">{userName}</span>!
          </p>
          <p className="mt-2 text-muted-foreground">
            We're glad to have you here. Explore your pizza orders or manage your settings.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
