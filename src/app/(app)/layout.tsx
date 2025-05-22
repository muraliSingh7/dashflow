
"use client"

import type { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Package, PanelLeft, Pizza } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { UserNav } from '@/components/layout/user-nav';
import { ThemeToggleButton } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/orders', label: 'Pizza Orders', icon: Package },
];

export default function AppLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const sidebarContent = (
    <nav className="grid gap-2 text-lg font-medium">
      <Link
        href="/dashboard"
        className="group flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base mb-4"
        prefetch={false}
      >
        <Pizza className="h-6 w-6 transition-all group-hover:scale-110" />
        <span className="sr-only">DashFlow</span>
      </Link>
      {navItems.map((item) => (
        <TooltipProvider key={item.href} delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                className={cn(
                  "flex items-center gap-4 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-accent",
                  pathname === item.href && "bg-accent text-primary font-semibold",
                  "md:justify-start justify-center" 
                )}
                prefetch={false}
              >
                <item.icon className="h-5 w-5" />
                <span className="md:inline hidden truncate">{item.label}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" className="md:hidden">
              {item.label}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </nav>
  );


  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-16 flex-col border-r bg-background sm:flex md:w-60 transition-all duration-300 ease-in-out">
        <div className="flex h-full max-h-screen flex-col gap-2 p-2">
         {sidebarContent}
        </div>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-16 md:sm:pl-60 transition-all duration-300 ease-in-out">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <PanelLeft className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="sm:max-w-xs pt-12">
              {sidebarContent}
            </SheetContent>
          </Sheet>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggleButton />
            <UserNav />
          </div>
        </header>
        <main className="flex-1 p-4 sm:px-6 sm:py-0 md:gap-8 animation-fadeIn">
          {children}
        </main>
      </div>
    </div>
  );
}
