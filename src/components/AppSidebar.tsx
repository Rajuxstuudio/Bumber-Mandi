import { useLocation, useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  Workflow, 
  Users, 
  ShoppingCart, 
  FileText, 
  FileSignature, 
  Store, 
  Warehouse, 
  Wheat, 
  Bell,
  LogOut
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const mandiOpsItems = [
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Process Flow", url: "/process-flow", icon: Workflow },
  { title: "Sellers", url: "/sellers", icon: Users },
  { title: "Buyers", url: "/buyers", icon: ShoppingCart },
  { title: "Reports", url: "/reports", icon: FileText },
];

const nwcOpsItems = [
  { title: "Dashboard", url: "/nwc-dashboard", icon: LayoutDashboard },
  { title: "Process Flow", url: "/nwc-process-flow", icon: Workflow },
  { title: "Contracts/ Deals", url: "/contracts", icon: FileSignature },
  { title: "Marketplaces", url: "/marketplaces", icon: Store },
  { title: "Warehouse & Silo M...", url: "/warehouse", icon: Warehouse },
  { title: "Kanak", url: "/kanak", icon: Wheat },
];

const accountItems = [
  { title: "Notifications", url: "/notifications", icon: Bell, badge: 22 },
];

export function AppSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <Sidebar className="border-r-0 bg-navy">
      <SidebarHeader className="p-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
            <Wheat className="text-gold h-6 w-6" />
          </div>
          <span className="text-gold font-bold text-lg">Bumper Mandi</span>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        {/* Mandi Ops Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-gold/70 text-xs font-medium tracking-wider px-3 py-2">
            Mandi Ops ..................
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mandiOpsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    className={`text-white/80 hover:bg-white/10 hover:text-white transition-colors ${
                      isActive(item.url) ? "bg-gold/20 text-gold border-l-2 border-gold" : ""
                    }`}
                  >
                    <a href={item.url} className="flex items-center gap-3 px-3 py-2">
                      <item.icon className="h-4 w-4" />
                      <span className="text-sm">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* NWC Ops Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-gold/70 text-xs font-medium tracking-wider px-3 py-2">
            NWC Ops ..................
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {nwcOpsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    className={`text-white/80 hover:bg-white/10 hover:text-white transition-colors ${
                      isActive(item.url) ? "bg-gold/20 text-gold border-l-2 border-gold" : ""
                    }`}
                  >
                    <a href={item.url} className="flex items-center gap-3 px-3 py-2">
                      <item.icon className="h-4 w-4" />
                      <span className="text-sm">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Account Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-gold/70 text-xs font-medium tracking-wider px-3 py-2">
            Account ..................
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {accountItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    className={`text-white/80 hover:bg-white/10 hover:text-white transition-colors ${
                      isActive(item.url) ? "bg-gold/20 text-gold border-l-2 border-gold" : ""
                    }`}
                  >
                    <a href={item.url} className="flex items-center gap-3 px-3 py-2">
                      <item.icon className="h-4 w-4" />
                      <span className="text-sm flex-1">{item.title}</span>
                      {item.badge && (
                        <Badge variant="secondary" className="bg-gold text-navy text-xs px-2 py-0.5">
                          {item.badge}
                        </Badge>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src="" />
            <AvatarFallback className="bg-gold/20 text-gold text-sm">MS</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-medium truncate">Mira Singh</p>
            <p className="text-white/60 text-xs">Admin</p>
          </div>
          <button 
            onClick={handleLogout}
            className="text-white/60 hover:text-white transition-colors"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
