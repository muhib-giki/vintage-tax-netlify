import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; size?: number | string }>;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export enum PageState {
  HOME = 'HOME',
  SERVICES = 'SERVICES',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT',
  AI_ASSISTANT = 'AI_ASSISTANT'
}