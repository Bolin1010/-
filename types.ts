import { ReactNode } from 'react';

export interface Character {
  id: string;
  name: string;
  subtitle: string;
  icon: ReactNode;
  color: string;
  borderColor: string;
  desc: string;
  quote: string;
  loadingText: string[];
  systemPrompt: string;
}

export interface FallbackResponse {
  default: string[];
  work: string[];
  love: string[];
}

export type FallbackData = Record<string, FallbackResponse>;

export type FollowUpType = 'submit' | 'rebel';

export type FollowUpData = Record<string, Record<FollowUpType, string>>;