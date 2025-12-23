import { DashboardLayout } from "@/components/DashboardLayout";
import { reportsData } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Package, IndianRupee, BarChart3 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Reports = () => {
  const totalArrivals = reportsData.reduce((sum, r) => sum + r.totalArrivals, 0);
  const totalQuantity = reportsData.reduce((sum, r) => sum + parseInt(r.totalSold), 0);
  
  return (
    <DashboardLayout title="Reports">
      <div className="space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Arrivals</CardTitle>
              <Package className="h-4 w-4 text-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalArrivals}</div>
              <p className="text-xs text-muted-foreground">Last 5 days</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Quantity</CardTitle>
              <BarChart3 className="h-4 w-4 text-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalQuantity}q</div>
              <p className="text-xs text-muted-foreground">Last 5 days</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
              <IndianRupee className="h-4 w-4 text-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹1.47 Cr</div>
              <p className="text-xs text-muted-foreground">Last 5 days</p>
            </CardContent>
          </Card>
          
          <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Avg Price</CardTitle>
              <TrendingUp className="h-4 w-4 text-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹2,276/q</div>
              <p className="text-xs text-green-400">+2.3% from last week</p>
            </CardContent>
          </Card>
        </div>

        {/* Daily Reports Table */}
        <div className="bg-card rounded-lg border border-border">
          <div className="p-4 border-b border-border">
            <h3 className="font-semibold">Daily Reports</h3>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Arrivals</TableHead>
                <TableHead>Quantity Sold</TableHead>
                <TableHead>Revenue</TableHead>
                <TableHead>Avg Price</TableHead>
                <TableHead>Top Commodity</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reportsData.map((report) => (
                <TableRow key={report.id}>
                  <TableCell className="font-medium">{report.date}</TableCell>
                  <TableCell>{report.totalArrivals}</TableCell>
                  <TableCell>{report.totalSold}</TableCell>
                  <TableCell>{report.revenue}</TableCell>
                  <TableCell>{report.avgPrice}</TableCell>
                  <TableCell>{report.commodity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Reports;
