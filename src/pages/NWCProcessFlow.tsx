import { DashboardLayout } from "@/components/DashboardLayout";
import { KanbanColumn } from "@/components/KanbanColumn";
import { KanbanCard } from "@/components/KanbanCard";
import { Calendar } from "lucide-react";
import { nwcProcessData } from "@/data/mockData";

const NWCProcessFlow = () => {
  return (
    <DashboardLayout title="NWC Process Flow">
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
        <KanbanColumn title="Receiving" icon="📥">
          {nwcProcessData.receiving.map((card, index) => (
            <KanbanCard key={index} {...card} />
          ))}
        </KanbanColumn>

        <KanbanColumn title="Quality Check" icon="🔍">
          {nwcProcessData.qualityCheck.map((card, index) => (
            <KanbanCard key={index} {...card} />
          ))}
        </KanbanColumn>

        <KanbanColumn title="Storage" icon="🏢">
          {nwcProcessData.storage.map((card, index) => (
            <KanbanCard key={index} {...card} />
          ))}
        </KanbanColumn>

        <KanbanColumn title="Dispatch" icon="🚚">
          {nwcProcessData.dispatch.map((card, index) => (
            <KanbanCard key={index} {...card} />
          ))}
        </KanbanColumn>
      </div>
    </DashboardLayout>
  );
};

export default NWCProcessFlow;
