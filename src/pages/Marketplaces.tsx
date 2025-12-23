import { DashboardLayout } from "@/components/DashboardLayout";
import { marketplacesData } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, ExternalLink } from "lucide-react";

const Marketplaces = () => {
  return (
    <DashboardLayout title="Marketplaces">
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {marketplacesData.map((marketplace) => (
            <Card key={marketplace.id} className="bg-card border-border">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{marketplace.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{marketplace.type}</p>
                </div>
                <Badge 
                  className={marketplace.status === "Connected" 
                    ? "bg-green-500/20 text-green-400" 
                    : "bg-red-500/20 text-red-400"
                  }
                >
                  {marketplace.status}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Commodities</p>
                    <div className="flex flex-wrap gap-1">
                      {marketplace.commodities.map((commodity, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {commodity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">
                      Last sync: {marketplace.lastSync}
                    </p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="h-8">
                        <RefreshCw className="h-3 w-3 mr-1" />
                        Sync
                      </Button>
                      <Button size="sm" variant="outline" className="h-8">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Open
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Marketplaces;
