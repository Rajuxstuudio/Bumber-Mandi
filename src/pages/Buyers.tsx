import { DashboardLayout } from "@/components/DashboardLayout";
import { buyersData } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Buyers = () => {
  return (
    <DashboardLayout title="Buyers">
      <div className="space-y-4">
        {/* Header Actions */}
        <div className="flex items-center justify-between">
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search buyers..." className="pl-10" />
          </div>
          <Button className="bg-gold text-navy hover:bg-gold/90">
            <Building2 className="h-4 w-4 mr-2" />
            Add Buyer
          </Button>
        </div>

        {/* Buyers Table */}
        <div className="bg-card rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Commodity</TableHead>
                <TableHead>Total Bought</TableHead>
                <TableHead>Last Purchase</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {buyersData.map((buyer) => (
                <TableRow key={buyer.id}>
                  <TableCell className="font-medium">{buyer.name}</TableCell>
                  <TableCell>{buyer.phone}</TableCell>
                  <TableCell>{buyer.location}</TableCell>
                  <TableCell>{buyer.commodity}</TableCell>
                  <TableCell>{buyer.totalBought}</TableCell>
                  <TableCell>{buyer.lastPurchase}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={buyer.status === "Active" ? "default" : "secondary"}
                      className={buyer.status === "Active" ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"}
                    >
                      {buyer.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Buyers;
