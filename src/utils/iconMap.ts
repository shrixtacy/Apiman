import { Code, Brain, Smartphone, Database, Cloud, Palette, Zap, Megaphone, DivideIcon as LucideIcon } from 'lucide-react';

export const iconMap: Record<string, LucideIcon> = {
  Code,
  Brain,
  Smartphone,
  Database,
  Cloud,
  Palette,
  Zap,
  Megaphone
};

export const getIconComponent = (iconName: string): LucideIcon => {
  return iconMap[iconName] || Code;
};