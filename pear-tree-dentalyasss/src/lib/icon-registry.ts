// File: src/lib/icon-registry.ts
import { Zap, Shield, Heart, Star, Clock, Users } from 'lucide-react';

// Create a registry of available icons
export const iconRegistry = {
  zap: Zap,
  shield: Shield,
  heart: Heart,
  star: Star,
  clock: Clock,
  users: Users,
  // Add more icons as needed
} as const;

export type IconName = keyof typeof iconRegistry;

// Type for serializable icon data
export interface SerializableIconData {
  name: IconName;
  className?: string;
  size?: number;
}

// Helper function to get icon component from name
export function getIconComponent(iconName: IconName) {
  return iconRegistry[iconName];
}

// File: src/components/DynamicIcon.tsx (Client Component)
'use client';

import { LucideProps } from 'lucide-react';
import { getIconComponent, IconName } from '@/lib/icon-registry';

interface DynamicIconProps extends Omit<LucideProps, 'ref'> {
  name: IconName;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const IconComponent = getIconComponent(name);
  return <IconComponent {...props} />;
}

// Example of how to update your data structure:
// Instead of passing the actual component:
const services = [
  {
    id: '1',
    title: 'Emergency Care',
    description: 'Quick response dental emergencies',
    href: '/emergency',
    icon: { name: 'zap' as const }, // ✅ Serializable
    theme: 'blue',
    treatments: ['Emergency'],
    image: '/images/emergency.jpg'
  },
  {
    id: '2',
    title: 'Preventive Care',
    description: 'Regular check-ups and cleanings',
    href: '/preventive',
    icon: { name: 'shield' as const }, // ✅ Serializable
    theme: 'green',
    treatments: ['Checkup', 'Cleaning'],
    image: '/images/preventive.jpg'
  }
];

// In your Client Component:
// <DynamicIcon name={service.icon.name} className="h-6 w-6" />