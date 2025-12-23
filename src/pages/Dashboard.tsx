import { DashboardLayout } from "@/components/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout title="Dashboard">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">Welcome to Dashboard</h2>
        <p className="text-muted-foreground">Manage your mandi activities here.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Today's Rates</h3>
          <p className="text-3xl font-bold text-foreground">₹2,450</p>
          <p className="text-sm text-green-500 mt-1">+2.5% from yesterday</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Active Listings</h3>
          <p className="text-3xl font-bold text-foreground">12</p>
          <p className="text-sm text-muted-foreground mt-1">Across 4 mandis</p>
        </div>
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Total Sales</h3>
          <p className="text-3xl font-bold text-foreground">₹1.2L</p>
          <p className="text-sm text-muted-foreground mt-1">This month</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-card rounded-xl border border-border p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-border">
            <div>
              <p className="font-medium text-foreground">Wheat - Grade A</p>
              <p className="text-sm text-muted-foreground">Listed at Jaipur Mandi</p>
            </div>
            <span className="text-sm text-muted-foreground">2 hours ago</span>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-border">
            <div>
              <p className="font-medium text-foreground">Bajra - Premium</p>
              <p className="text-sm text-muted-foreground">Sold at Jodhpur Mandi</p>
            </div>
            <span className="text-sm text-muted-foreground">1 day ago</span>
          </div>
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-medium text-foreground">Mustard Seeds</p>
              <p className="text-sm text-muted-foreground">Price updated</p>
            </div>
            <span className="text-sm text-muted-foreground">2 days ago</span>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
