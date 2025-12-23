import { DashboardLayout } from "@/components/DashboardLayout";
import { sellersData } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Sellers = () => {
  return (
    <DashboardLayout title="Sellers">
      <div className="space-y-4">
        {/* Header Actions */}
        <div className="flex items-center justify-between">
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search sellers..." className="pl-10" />
          </div>
          <Button className="bg-gold text-navy hover:bg-gold/90">
            <UserPlus className="h-4 w-4 mr-2" />
            Add Seller
          </Button>
        </div>

        {/* Sellers Table */}
        <div className="bg-card rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Village</TableHead>
                <TableHead>Commodity</TableHead>
                <TableHead>Total Sold</TableHead>
                <TableHead>Last Visit</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sellersData.map((seller) => (
                <TableRow key={seller.id}>
                  <TableCell className="font-medium">{seller.name}</TableCell>
                  <TableCell>{seller.phone}</TableCell>
                  <TableCell>{seller.village}</TableCell>
                  <TableCell>{seller.commodity}</TableCell>
                  <TableCell>{seller.totalSold}</TableCell>
                  <TableCell>{seller.lastVisit}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={seller.status === "Active" ? "default" : "secondary"}
                      className={seller.status === "Active" ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"}
                    >
                      {seller.status}
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

export default Sellers;
