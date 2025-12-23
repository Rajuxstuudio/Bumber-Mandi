import { DashboardLayout } from "@/components/DashboardLayout";
import { KanbanColumn } from "@/components/KanbanColumn";
import { KanbanCard } from "@/components/KanbanCard";
import { Calendar } from "lucide-react";

// Mock data for demonstration
const preGateCards = [
  { name: "Ram Singh", role: "Owner", commodity: "Soybean", quantity: "32q", time: "09:00am", vehicleNumber: "RJ 20 SN 1234", vehicleType: "Truck", status: "Pending", statusColor: "pending" as const },
  { name: "Kisan Shakti FPO", role: "Entity", commodity: "Soybean", quantity: "32q", vehicleNumber: "RJ 20 SN 4334", vehicleType: "Truck", status: "Approved", statusColor: "approved" as const },
  { name: "Charan Hooda", role: "Rep", commodity: "Soybean", quantity: "75q", vehicleNumber: "RJ 20 QR 0123", vehicleType: "Truck", status: "Pending", statusColor: "pending" as const },
];

const gateCards = [
  { name: "Lokesh", role: "Rep", commodity: "Soybean", quantity: "32q", ticketNumber: "122", vehicleNumber: "RJ 20 SN 1234", vehicleType: "Truck", status: "Premises", statusColor: "ready" as const },
  { name: "pavan Singh", role: "Rep", commodity: "Soybean", quantity: "32q", vehicleNumber: "RJ 20 SN 1234", vehicleType: "Truck", status: "Ready", statusColor: "ready" as const },
  { name: "Kiram Singh", role: "Rep", commodity: "Soybean", quantity: "32q", vehicleNumber: "RJ 20 SN 1234", vehicleType: "Truck", status: "Exit", statusColor: "exit" as const },
];

const weighBridgeCards = [
  { name: "Ram Singh", role: "Owner", commodity: "Soybean", quantity: "32q", ticketNumber: "122", vehicleNumber: "RJ 20 SN 1234", vehicleType: "Truck", status: "G.Pending", statusColor: "pending" as const },
  { name: "Ram Singh", role: "Owner", commodity: "Soybean", quantity: "32q", ticketNumber: "122", vehicleNumber: "RJ 20 SN 1234", vehicleType: "Truck", status: "G.Done", statusColor: "done" as const },
  { name: "Gajendra", role: "Owner", commodity: "Soybean", quantity: "75q", ticketNumber: "121", vehicleNumber: "RJ 20 QR 0123", status: "G.Pending", statusColor: "pending" as const },
];

const samplingCards = [
  { name: "Prateek Hooda", role: "Rep", commodity: "Soybean", quantity: "32q", ticketNumber: "4512", vehicleNumber: "RJ 20 SN 1234", vehicleType: "Truck", status: "Pending", statusColor: "pending" as const },
  { name: "Ravi Singh", role: "Rep", commodity: "Soybean", quantity: "32q", vehicleNumber: "RJ 20 SN 1234", vehicleType: "Truck", status: "Pending", statusColor: "pending" as const },
];

const labTestCards = [
  { name: "Suresh Kumar", role: "Owner", commodity: "Wheat", quantity: "45q", ticketNumber: "4513", vehicleNumber: "RJ 20 SN 5678", vehicleType: "Truck", status: "Testing", statusColor: "ready" as const },
  { name: "Mohan Lal", role: "Rep", commodity: "Soybean", quantity: "28q", ticketNumber: "4514", vehicleNumber: "RJ 20 QR 9876", vehicleType: "Truck", status: "Completed", statusColor: "done" as const },
];

const auctionCards = [
  { name: "Rajesh Sharma", role: "Owner", commodity: "Mustard", quantity: "55q", ticketNumber: "4515", vehicleNumber: "RJ 20 SN 3456", vehicleType: "Truck", status: "Bidding", statusColor: "ready" as const },
  { name: "Vikram Singh", role: "Rep", commodity: "Soybean", quantity: "40q", ticketNumber: "4516", vehicleNumber: "RJ 20 QR 7654", vehicleType: "Truck", status: "Sold", statusColor: "done" as const },
];

const dumpingCards = [
  { name: "Anil Meena", role: "Owner", commodity: "Wheat", quantity: "38q", ticketNumber: "4517", vehicleNumber: "RJ 20 SN 8765", vehicleType: "Truck", status: "In Progress", statusColor: "ready" as const },
];

const financeCards = [
  { name: "Gopal Yadav", role: "Owner", commodity: "Soybean", quantity: "62q", ticketNumber: "4518", vehicleNumber: "RJ 20 QR 4321", vehicleType: "Truck", status: "Payment Done", statusColor: "done" as const },
  { name: "Harish Jat", role: "Rep", commodity: "Mustard", quantity: "48q", ticketNumber: "4519", vehicleNumber: "RJ 20 SN 1357", vehicleType: "Truck", status: "Pending", statusColor: "pending" as const },
];

const ProcessFlow = () => {
  return (
    <DashboardLayout title="Process Flow">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>7 Sep 2025, Monday</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded bg-card border border-border">
            <span className="text-xs">☰</span>
          </button>
          <button className="p-2 rounded bg-card border border-border">
            <span className="text-xs">⊞</span>
          </button>
        </div>
      </div>

      {/* Kanban Board */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        <KanbanColumn title="Pre-Gate" icon="👥">
          {preGateCards.map((card, index) => (
            <KanbanCard key={index} {...card} />
          ))}
        </KanbanColumn>

        <KanbanColumn title="Gate" icon="🚪">
          {gateCards.map((card, index) => (
            <KanbanCard key={index} {...card} />
          ))}
        </KanbanColumn>

        <KanbanColumn title="WeighBridge" icon="⚖️">
          {weighBridgeCards.map((card, index) => (
            <KanbanCard key={index} {...card} />
          ))}
        </KanbanColumn>

        <KanbanColumn title="Sampling" icon="🧪">
          {samplingCards.map((card, index) => (
            <KanbanCard key={index} {...card} />
          ))}
        </KanbanColumn>

        <KanbanColumn title="Lab-Test" icon="🔬">
          {labTestCards.map((card, index) => (
            <KanbanCard key={index} {...card} />
          ))}
        </KanbanColumn>

        <KanbanColumn title="Auction" icon="🔨">
          {auctionCards.map((card, index) => (
            <KanbanCard key={index} {...card} />
          ))}
        </KanbanColumn>

        <KanbanColumn title="Dumping" icon="📦">
          {dumpingCards.map((card, index) => (
            <KanbanCard key={index} {...card} />
          ))}
        </KanbanColumn>

        <KanbanColumn title="Finance" icon="💰">
          {financeCards.map((card, index) => (
            <KanbanCard key={index} {...card} />
          ))}
        </KanbanColumn>
      </div>
    </DashboardLayout>
  );
};

export default ProcessFlow;
