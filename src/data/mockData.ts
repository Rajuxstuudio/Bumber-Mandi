// Sellers Data
export const sellersData = [
  { id: 1, name: "Ram Singh", phone: "9876543210", village: "Jaipur", commodity: "Soybean", totalSold: "520q", lastVisit: "2025-09-05", status: "Active" },
  { id: 2, name: "Kisan Shakti FPO", phone: "9876543211", village: "Bikaner", commodity: "Wheat", totalSold: "1200q", lastVisit: "2025-09-06", status: "Active" },
  { id: 3, name: "Charan Hooda", phone: "9876543212", village: "Jodhpur", commodity: "Mustard", totalSold: "340q", lastVisit: "2025-09-04", status: "Active" },
  { id: 4, name: "Suresh Kumar", phone: "9876543213", village: "Udaipur", commodity: "Wheat", totalSold: "890q", lastVisit: "2025-09-03", status: "Inactive" },
  { id: 5, name: "Mohan Lal", phone: "9876543214", village: "Ajmer", commodity: "Soybean", totalSold: "670q", lastVisit: "2025-09-02", status: "Active" },
  { id: 6, name: "Gopal Yadav", phone: "9876543215", village: "Kota", commodity: "Mustard", totalSold: "450q", lastVisit: "2025-09-01", status: "Active" },
  { id: 7, name: "Harish Jat", phone: "9876543216", village: "Alwar", commodity: "Wheat", totalSold: "780q", lastVisit: "2025-08-30", status: "Active" },
  { id: 8, name: "Vikram Singh", phone: "9876543217", village: "Bharatpur", commodity: "Soybean", totalSold: "560q", lastVisit: "2025-08-29", status: "Inactive" },
];

// Buyers Data
export const buyersData = [
  { id: 1, name: "Adani Agri Fresh", phone: "9812345670", location: "Mumbai", commodity: "Soybean", totalBought: "2500q", lastPurchase: "2025-09-06", status: "Active" },
  { id: 2, name: "ITC Agro", phone: "9812345671", location: "Delhi", commodity: "Wheat", totalBought: "4200q", lastPurchase: "2025-09-05", status: "Active" },
  { id: 3, name: "Cargill India", phone: "9812345672", location: "Bangalore", commodity: "Mustard", totalBought: "1800q", lastPurchase: "2025-09-04", status: "Active" },
  { id: 4, name: "Patanjali Foods", phone: "9812345673", location: "Haridwar", commodity: "Soybean", totalBought: "3100q", lastPurchase: "2025-09-03", status: "Active" },
  { id: 5, name: "Ruchi Soya", phone: "9812345674", location: "Indore", commodity: "Soybean", totalBought: "2800q", lastPurchase: "2025-09-02", status: "Inactive" },
  { id: 6, name: "Marico Limited", phone: "9812345675", location: "Mumbai", commodity: "Mustard", totalBought: "1500q", lastPurchase: "2025-09-01", status: "Active" },
];

// Reports Data
export const reportsData = [
  { id: 1, date: "2025-09-07", totalArrivals: 45, totalSold: "1250q", revenue: "₹28,50,000", avgPrice: "₹2,280/q", commodity: "Soybean" },
  { id: 2, date: "2025-09-06", totalArrivals: 52, totalSold: "1480q", revenue: "₹33,30,000", avgPrice: "₹2,250/q", commodity: "Wheat" },
  { id: 3, date: "2025-09-05", totalArrivals: 38, totalSold: "980q", revenue: "₹22,54,000", avgPrice: "₹2,300/q", commodity: "Mustard" },
  { id: 4, date: "2025-09-04", totalArrivals: 41, totalSold: "1120q", revenue: "₹25,76,000", avgPrice: "₹2,300/q", commodity: "Soybean" },
  { id: 5, date: "2025-09-03", totalArrivals: 55, totalSold: "1650q", revenue: "₹37,12,500", avgPrice: "₹2,250/q", commodity: "Wheat" },
];

// NWC Process Flow Data
export const nwcProcessData = {
  receiving: [
    { name: "Shipment #NWC001", role: "Warehouse A", commodity: "Wheat", quantity: "500q", status: "Arrived", statusColor: "approved" as const },
    { name: "Shipment #NWC002", role: "Warehouse B", commodity: "Soybean", quantity: "320q", status: "In Transit", statusColor: "pending" as const },
  ],
  qualityCheck: [
    { name: "Batch #QC101", role: "Lab Team", commodity: "Wheat", quantity: "500q", status: "Testing", statusColor: "ready" as const },
  ],
  storage: [
    { name: "Lot #ST201", role: "Silo 3", commodity: "Soybean", quantity: "1200q", status: "Stored", statusColor: "done" as const },
    { name: "Lot #ST202", role: "Silo 5", commodity: "Wheat", quantity: "800q", status: "Stored", statusColor: "done" as const },
  ],
  dispatch: [
    { name: "Order #DP301", role: "Truck Fleet", commodity: "Wheat", quantity: "400q", status: "Loading", statusColor: "ready" as const },
  ],
};

// Contracts Data
export const contractsData = [
  { id: 1, contractNo: "CTR-2025-001", buyer: "Adani Agri Fresh", commodity: "Soybean", quantity: "1000q", price: "₹2,350/q", startDate: "2025-09-01", endDate: "2025-12-31", status: "Active" },
  { id: 2, contractNo: "CTR-2025-002", buyer: "ITC Agro", commodity: "Wheat", quantity: "2000q", price: "₹2,180/q", startDate: "2025-08-15", endDate: "2025-11-30", status: "Active" },
  { id: 3, contractNo: "CTR-2025-003", buyer: "Cargill India", commodity: "Mustard", quantity: "800q", price: "₹5,200/q", startDate: "2025-07-01", endDate: "2025-10-31", status: "Expiring Soon" },
  { id: 4, contractNo: "CTR-2025-004", buyer: "Patanjali Foods", commodity: "Soybean", quantity: "1500q", price: "₹2,400/q", startDate: "2025-09-10", endDate: "2026-03-31", status: "Draft" },
];

// Marketplaces Data
export const marketplacesData = [
  { id: 1, name: "NCDEX", type: "Commodity Exchange", commodities: ["Soybean", "Wheat", "Mustard"], status: "Connected", lastSync: "2025-09-07 10:30 AM" },
  { id: 2, name: "MCX", type: "Commodity Exchange", commodities: ["Wheat", "Cotton"], status: "Connected", lastSync: "2025-09-07 10:25 AM" },
  { id: 3, name: "eNAM", type: "Government Portal", commodities: ["All"], status: "Connected", lastSync: "2025-09-07 09:45 AM" },
  { id: 4, name: "AgriMarket", type: "Private Platform", commodities: ["Soybean", "Pulses"], status: "Disconnected", lastSync: "2025-09-05 02:15 PM" },
];

// Warehouse Data
export const warehouseData = [
  { id: 1, name: "Warehouse A - Jaipur", capacity: "5000q", occupied: "3200q", utilization: "64%", commodities: ["Wheat", "Soybean"], manager: "Ramesh Kumar" },
  { id: 2, name: "Silo Complex - Bikaner", capacity: "10000q", occupied: "7500q", utilization: "75%", commodities: ["Wheat"], manager: "Sunil Sharma" },
  { id: 3, name: "Warehouse B - Jodhpur", capacity: "3000q", occupied: "2100q", utilization: "70%", commodities: ["Mustard", "Soybean"], manager: "Pradeep Singh" },
  { id: 4, name: "Cold Storage - Udaipur", capacity: "2000q", occupied: "800q", utilization: "40%", commodities: ["Vegetables"], manager: "Anil Meena" },
];

// Kanak (Grain) Data
export const kanakData = [
  { id: 1, variety: "Sharbati Wheat", origin: "MP", grade: "A", moisture: "12%", quantity: "2500q", price: "₹2,350/q" },
  { id: 2, variety: "Lokwan Wheat", origin: "Maharashtra", grade: "B", moisture: "13%", quantity: "1800q", price: "₹2,180/q" },
  { id: 3, variety: "HD-2967", origin: "Punjab", grade: "A+", moisture: "11%", quantity: "3200q", price: "₹2,450/q" },
  { id: 4, variety: "PBW-343", origin: "Haryana", grade: "A", moisture: "12.5%", quantity: "2100q", price: "₹2,280/q" },
];

// Notifications Data
export const notificationsData = [
  { id: 1, type: "login", title: "Login Successful", message: "You logged in from Jaipur, Rajasthan", time: "2025-09-07 09:00 AM", read: false },
  { id: 2, type: "auction", title: "Auction Won", message: "Adani Agri Fresh won auction for 55q Mustard at ₹5,280/q", time: "2025-09-07 08:45 AM", read: false },
  { id: 3, type: "selling", title: "Sale Completed", message: "Ram Singh sold 32q Soybean to ITC Agro", time: "2025-09-07 08:30 AM", read: false },
  { id: 4, type: "buying", title: "Purchase Order", message: "Cargill India placed order for 100q Wheat", time: "2025-09-07 08:15 AM", read: true },
  { id: 5, type: "auction", title: "New Auction Started", message: "Auction started for 75q Premium Wheat", time: "2025-09-07 08:00 AM", read: true },
  { id: 6, type: "logout", title: "Session Ended", message: "Previous session ended from Mumbai device", time: "2025-09-06 11:30 PM", read: true },
  { id: 7, type: "selling", title: "Payment Received", message: "Payment of ₹1,45,000 received from Patanjali Foods", time: "2025-09-06 06:00 PM", read: true },
  { id: 8, type: "buying", title: "Order Confirmed", message: "Order #ORD-2025-156 confirmed by Marico Limited", time: "2025-09-06 05:30 PM", read: true },
  { id: 9, type: "login", title: "New Device Login", message: "Login detected from new device in Delhi", time: "2025-09-06 04:00 PM", read: true },
  { id: 10, type: "auction", title: "Auction Ended", message: "Auction for 40q Soybean ended - Sold at ₹2,380/q", time: "2025-09-06 03:00 PM", read: true },
  { id: 11, type: "selling", title: "New Listing", message: "Mohan Lal listed 28q Soybean for sale", time: "2025-09-06 02:00 PM", read: true },
  { id: 12, type: "buying", title: "Bid Placed", message: "Ruchi Soya placed bid of ₹2,320/q on Lot #456", time: "2025-09-06 01:00 PM", read: true },
  { id: 13, type: "logout", title: "Auto Logout", message: "Session expired due to inactivity", time: "2025-09-05 11:00 PM", read: true },
  { id: 14, type: "auction", title: "Reserve Price Met", message: "Reserve price met for 60q Mustard auction", time: "2025-09-05 04:30 PM", read: true },
  { id: 15, type: "selling", title: "Quality Approved", message: "Lab test passed for Suresh Kumar's Wheat lot", time: "2025-09-05 03:00 PM", read: true },
  { id: 16, type: "buying", title: "Contract Signed", message: "Contract CTR-2025-004 signed with Patanjali Foods", time: "2025-09-05 02:00 PM", read: true },
  { id: 17, type: "login", title: "Password Changed", message: "Your password was successfully changed", time: "2025-09-05 10:00 AM", read: true },
  { id: 18, type: "auction", title: "Auction Cancelled", message: "Auction for 20q Pulses cancelled due to low participation", time: "2025-09-04 05:00 PM", read: true },
  { id: 19, type: "selling", title: "Weighbridge Complete", message: "Vikram Singh's load weighed at 40q", time: "2025-09-04 11:00 AM", read: true },
  { id: 20, type: "buying", title: "Payment Pending", message: "Payment of ₹2,80,000 pending from ITC Agro", time: "2025-09-04 09:00 AM", read: true },
  { id: 21, type: "logout", title: "Forced Logout", message: "Logged out from all devices for security", time: "2025-09-03 08:00 PM", read: true },
  { id: 22, type: "auction", title: "Highest Bidder", message: "You are the highest bidder for 80q Wheat at ₹2,400/q", time: "2025-09-03 03:30 PM", read: true },
];
