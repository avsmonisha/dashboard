import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  Folder,
  MessageSquare,
  CheckSquare,
  Clock,
} from "lucide-react";

const iconMap = {
  folder: Folder,
  message: MessageSquare,
  task: CheckSquare,
  clock: Clock,
};

const colorMap = {
  blue: {
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
    subtitle: "text-blue-500",
  },
  green: {
    iconBg: "bg-green-500/10",
    iconColor: "text-green-500",
    subtitle: "text-green-500",
  },
  orange: {
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-500",
    subtitle: "text-orange-500",
  },
  coral: {
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-500",
    subtitle: "text-rose-500",
  },
};

const StatsCard = ({ data }) => {
  const Icon = iconMap[data.iconType];
  const colors = colorMap[data.color];

  return (
    <Card
      className={cn(
        // ✅ SIZE (matches Figma grid)
        "w-[250px] h-[187px] rounded-[9px]",

        // ✅ COLORS
        "bg-white dark:bg-[#0F172A]",
        "border border-black/5 dark:border-white/10",

        // ✅ SHADOW (lighter in light mode)
        "shadow-[0px_4px_12px_rgba(15,23,42,0.08)]",

        // ✅ HOVER
        "transition-all duration-200 ease-out",
        "hover:-translate-y-[2px]",
        "hover:shadow-[0px_10px_24px_rgba(15,23,42,0.18)]"
      )}
    >
      <CardContent className="h-full px-[20px] py-[22px] flex justify-between">
        {/* LEFT CONTENT */}
        <div className="flex flex-col">
          <p className="font-poppins text-[12px] font-medium text-[#94A3B8]">
            {data.title}
          </p>

          <p className="mt-[32px] font-poppins font-semibold text-[24px] text-[#020617] dark:text-[#F1F5F9]">
            {data.value}
          </p>

          <p
            className={cn(
              "mt-[22px] font-poppins font-semibold text-[12px]",
              colors.subtitle
            )}
          >
            {data.subtitle}
          </p>
        </div>

        {/* ICON */}
        <div
          className={cn(
            "h-[48px] w-[48px] rounded-[12px]",
            "flex items-center justify-center",
            "transition-transform duration-200",
            "group-hover:scale-105",
            colors.iconBg
          )}
        >
          <Icon className={cn("h-[22px] w-[22px]", colors.iconColor)} />
        </div>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
