import { DashboardLayout } from "@/components/DashboardLayout";
import { warehouseData } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Warehouse as WarehouseIcon, User } from "lucide-react";

const Warehouse = () => {
  return (
    <DashboardLayout title="Warehouse & Silo Management">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {warehouseData.map((warehouse) => {
            const utilizationPercent = parseInt(warehouse.utilization);
            
            return (
              <Card key={warehouse.id} className="bg-card border-border">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gold/20 rounded-lg">
                      <WarehouseIcon className="h-5 w-5 text-gold" />
                    </div>
                    <div>
                      <CardTitle className="text-base">{warehouse.name}</CardTitle>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <User className="h-3 w-3" />
                        {warehouse.manager}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Capacity Utilization</span>
                        <span className="font-medium">{warehouse.occupied} / {warehouse.capacity}</span>
                      </div>
                      <Progress 
                        value={utilizationPercent} 
                        className="h-2"
                      />
                      <p className="text-xs text-muted-foreground mt-1 text-right">
                        {warehouse.utilization} utilized
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-xs text-muted-foreground mb-2">Stored Commodities</p>
                      <div className="flex flex-wrap gap-1">
                        {warehouse.commodities.map((commodity, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {commodity}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Warehouse;
