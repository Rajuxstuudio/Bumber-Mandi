import { DashboardLayout } from "@/components/DashboardLayout";
import { notificationsData } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  LogIn, 
  LogOut, 
  ShoppingCart, 
  Tag, 
  Gavel,
  CheckCircle2,
  Circle
} from "lucide-react";

const Notifications = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case "login":
        return <LogIn className="h-4 w-4 text-green-400" />;
      case "logout":
        return <LogOut className="h-4 w-4 text-red-400" />;
      case "buying":
        return <ShoppingCart className="h-4 w-4 text-blue-400" />;
      case "selling":
        return <Tag className="h-4 w-4 text-purple-400" />;
      case "auction":
        return <Gavel className="h-4 w-4 text-gold" />;
      default:
        return <Circle className="h-4 w-4 text-gray-400" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "login":
        return { label: "Login", color: "bg-green-500/20 text-green-400" };
      case "logout":
        return { label: "Logout", color: "bg-red-500/20 text-red-400" };
      case "buying":
        return { label: "Buying", color: "bg-blue-500/20 text-blue-400" };
      case "selling":
        return { label: "Selling", color: "bg-purple-500/20 text-purple-400" };
      case "auction":
        return { label: "Auction", color: "bg-gold/20 text-gold" };
      default:
        return { label: "General", color: "bg-gray-500/20 text-gray-400" };
    }
  };

  const unreadCount = notificationsData.filter(n => !n.read).length;

  return (
    <DashboardLayout title="Notifications">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground">
              {unreadCount} unread notifications
            </span>
          </div>
          <Button variant="outline" size="sm">
            <CheckCircle2 className="h-4 w-4 mr-2" />
            Mark all as read
          </Button>
        </div>

        {/* Notifications List */}
        <div className="space-y-2">
          {notificationsData.map((notification) => {
            const typeInfo = getTypeLabel(notification.type);
            
            return (
              <Card 
                key={notification.id} 
                className={`bg-card border-border transition-colors ${
                  !notification.read ? 'border-l-2 border-l-gold' : ''
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-background rounded-lg">
                      {getIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className={`text-sm font-medium ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {notification.title}
                        </h4>
                        <Badge className={`text-xs ${typeInfo.color}`}>
                          {typeInfo.label}
                        </Badge>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-gold rounded-full"></div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {notification.message}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {notification.time}
                      </p>
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

export default Notifications;
