import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface AchievementBadgeProps {
  title: string;
  icon: LucideIcon;
  unlocked: boolean;
}

const AchievementBadge: React.FC<AchievementBadgeProps> = ({ title, icon: Icon, unlocked }) => (
  <div className={`achievement ${unlocked ? 'unlocked' : 'locked'}`}>
    <Icon size={24} color={unlocked ? '#10b981' : '#94a3b8'} />
    <span>{title}</span>
  </div>
);

export default AchievementBadge;
