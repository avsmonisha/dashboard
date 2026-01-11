import { 
  LayoutDashboard, 
  FolderKanban, 
  CheckSquare, 
  MessageSquare, 
  Calendar, 
  FileText, 
  Building2, 
  Bell, 
  Users, 
  Wrench, 
  BarChart3, 
  Link2, 
  Settings
} from "lucide-react";

export const navigationItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, path: "/" },
  { id: "projects", label: "Projects", icon: FolderKanban, path: "/projects" },
  { id: "tasks", label: "Tasks", icon: CheckSquare, path: "/tasks" },
  { id: "chat", label: "Chat", icon: MessageSquare, path: "/chat" },
  { id: "meetings", label: "Meetings", icon: Calendar, path: "/meetings" },
  { id: "documents", label: "Documents", icon: FileText, path: "/documents" },
  { id: "companies", label: "Companies", icon: Building2, path: "/companies" },
  { id: "notice", label: "Notice", icon: Bell, path: "/notice" },
  { id: "attendance", label: "Attendance", icon: Users, path: "/attendance" },
  { id: "leave", label: "Leave", icon: Wrench, path: "/leave" },
  { id: "performance", label: "Performance", icon: BarChart3, path: "/performance" },
  { id: "integrations", label: "Integrations", icon: Link2, path: "/integrations" },
  { id: "settings", label: "Settings", icon: Settings, path: "/settings" },
];

export const statsCards = [
  {
    id: "active-projects",
    title: "Active Projects",
    value: "08",
    subtitle: "2 due this week",
    color: "blue",
    iconType: "folder",
  },
  {
    id: "unread-messages",
    title: "Unread Messages",
    value: "12",
    subtitle: "4 chats pending",
    color: "green",
    iconType: "message",
  },
  {
    id: "tasks-due",
    title: "Tasks Due Today",
    value: "12",
    subtitle: "2 High Priority",
    color: "orange",
    iconType: "task",
  },
  {
    id: "pending-requests",
    title: "Pending Requests",
    value: "06",
    subtitle: "Requires approval",
    color: "coral",
    iconType: "clock",
  },
];

export const projectStatusData = [
  { name: "Planning", value: 85, color: "#4F6EF7" },
  { name: "In Progress", value: 40, color: "#22C55E" },
  { name: "Review", value: 75, color: "#F59E0B" },
  { name: "Done", value: 95, color: "#EF4444" },
];

export const productivityData = [
  { day: "Mon", value: 35 },
  { day: "Tue", value: 40 },
  { day: "Wed", value: 45 },
  { day: "Thu", value: 55 },
  { day: "Fri", value: 60 },
  { day: "Sat", value: 58 },
  { day: "Sun", value: 65 },
];
