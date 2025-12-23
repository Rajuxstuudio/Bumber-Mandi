import { DashboardLayout } from "@/components/DashboardLayout";
import { kanakData } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Wheat } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Kanak = () => {
  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "A+":
        return "bg-green-500/20 text-green-400";
      case "A":
        return "bg-blue-500/20 text-blue-400";
      case "B":
        return "bg-yellow-500/20 text-yellow-400";
      default:
        return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <DashboardLayout title="Kanak (Wheat Varieties)">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search varieties..." className="pl-10" />
          </div>
          <div className="flex items-center gap-2 text-gold">
            <Wheat className="h-5 w-5" />
            <span className="font-medium">Wheat Inventory</span>
          </div>
        </div>

        {/* Kanak Table */}
        <div className="bg-card rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Variety</TableHead>
                <TableHead>Origin</TableHead>
                <TableHead>Grade</TableHead>
                <TableHead>Moisture</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Price</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {kanakData.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.variety}</TableCell>
                  <TableCell>{item.origin}</TableCell>
                  <TableCell>
                    <Badge className={getGradeColor(item.grade)}>
                      {item.grade}
                    </Badge>
                  </TableCell>
                  <TableCell>{item.moisture}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell className="font-medium text-gold">{item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Kanak;
