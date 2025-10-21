import React from "react";
import type { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  change: number;
  icon: LucideIcon;
  color: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  change,
  icon: Icon,
  color,
}) => {
  return (
    <div className="stats-card">
      <div className="stats-header">
        <Icon size={20} color={color} />
        <span className="stats-title">{title}</span>
      </div>
      <div className="stats-value">{value}</div>
      <div
        className="stats-change"
        style={{ color: change >= 0 ? "#10b981" : "#ef4444" }}
      >
        {change >= 0 ? "↑" : "↓"} {Math.abs(change)}% vs yesterday
      </div>
    </div>
  );
};

export default StatsCard;
