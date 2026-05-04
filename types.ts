import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  category: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  text: string;
}

export interface NavItem {
  label: string;
  href: string;
}