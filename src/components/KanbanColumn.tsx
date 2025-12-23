import { ReactNode } from "react";
import { Search, MoreVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

interface KanbanColumnProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export function KanbanColumn({ title, icon, children }: KanbanColumnProps) {
  return (
    <div className="flex-shrink-0 w-72 bg-card rounded-lg border border-border">
      <div className="p-3 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg">{icon}</span>
          <h3 className="font-semibold text-foreground text-sm">{title}</h3>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <Search className="h-4 w-4 text-muted-foreground" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <MoreVertical className="h-4 w-4 text-muted-foreground" />
          </Button>
        </div>
      </div>
      <div className="p-2 space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
