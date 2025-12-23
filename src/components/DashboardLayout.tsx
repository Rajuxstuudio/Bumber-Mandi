import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";

interface DashboardLayoutProps {
  children: ReactNode;
  title?: string;
}

export function DashboardLayout({ children, title }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 bg-muted">
          <header className="bg-card border-b border-border px-4 py-3 flex items-center gap-4">
            <SidebarTrigger className="text-foreground" />
            {title && (
              <h1 className="text-lg font-semibold text-foreground">{title}</h1>
            )}
          </header>
          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
