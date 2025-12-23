import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import ProcessFlow from "./pages/ProcessFlow";
import Sellers from "./pages/Sellers";
import Buyers from "./pages/Buyers";
import Reports from "./pages/Reports";
import NWCDashboard from "./pages/NWCDashboard";
import NWCProcessFlow from "./pages/NWCProcessFlow";
import Contracts from "./pages/Contracts";
import Marketplaces from "./pages/Marketplaces";
import Warehouse from "./pages/Warehouse";
import Kanak from "./pages/Kanak";
import Notifications from "./pages/Notifications";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/process-flow" element={<ProcessFlow />} />
          <Route path="/sellers" element={<Sellers />} />
          <Route path="/buyers" element={<Buyers />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/nwc-dashboard" element={<NWCDashboard />} />
          <Route path="/nwc-process-flow" element={<NWCProcessFlow />} />
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/marketplaces" element={<Marketplaces />} />
          <Route path="/warehouse" element={<Warehouse />} />
          <Route path="/kanak" element={<Kanak />} />
          <Route path="/notifications" element={<Notifications />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
