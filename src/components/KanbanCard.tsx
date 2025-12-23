import { Badge } from "@/components/ui/badge";

interface KanbanCardProps {
  name: string;
  role: string;
  commodity: string;
  quantity: string;
  time?: string;
  vehicleNumber?: string;
  vehicleType?: string;
  status?: string;
  statusColor?: "pending" | "approved" | "ready" | "done" | "exit" | "absent" | "incomplete";
  ticketNumber?: string;
}

const statusStyles = {
  pending: "bg-amber-100 text-amber-700 border-amber-200",
  approved: "bg-green-100 text-green-700 border-green-200",
  ready: "bg-blue-100 text-blue-700 border-blue-200",
  done: "bg-green-100 text-green-700 border-green-200",
  exit: "bg-purple-100 text-purple-700 border-purple-200",
  absent: "bg-red-100 text-red-700 border-red-200",
  incomplete: "bg-orange-100 text-orange-700 border-orange-200",
};

export function KanbanCard({
  name,
  role,
  commodity,
  quantity,
  time,
  vehicleNumber,
  vehicleType,
  status,
  statusColor = "pending",
  ticketNumber,
}: KanbanCardProps) {
  return (
    <div className="bg-background rounded-lg border border-border p-3 shadow-sm hover:shadow-md transition-shadow">
      {/* Header with commodity and quantity */}
      <div className="flex items-center gap-2 mb-2 text-xs text-muted-foreground">
        <span>※</span>
        <span className="flex items-center gap-1">
          <span className="text-green-600">⊘</span> {commodity}
        </span>
        <span>⊕ {quantity}</span>
        {time && <span className="ml-auto">{time}</span>}
        {ticketNumber && <span className="ml-auto">#{ticketNumber}</span>}
      </div>

      {/* Name and Role */}
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center overflow-hidden">
          <span className="text-xs">👨‍🌾</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-medium text-foreground text-sm truncate">{name}</p>
          <p className="text-xs text-muted-foreground">• {role} →</p>
        </div>
      </div>

      {/* Vehicle Info and Status */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs">
          {vehicleNumber && (
            <span className="text-blue-600 font-medium">• {vehicleNumber} •</span>
          )}
          {vehicleType && (
            <span className="text-muted-foreground">{vehicleType}</span>
          )}
        </div>
        {status && (
          <Badge 
            variant="outline" 
            className={`text-xs ${statusStyles[statusColor]}`}
          >
            {status}
          </Badge>
        )}
      </div>
    </div>
  );
}
