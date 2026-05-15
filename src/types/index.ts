/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Skill {
  id: string;
  title: string;
  description: string;
  details?: string[];
  flow?: {
    title: string;
    steps: string[];
  };
  icon: string;
  category: 'soft' | 'hard' | 'network' | 'security' | 'hardware' | 'os' | 'management';
}

export interface Tool {
  id: string;
  name: string;
  category: string;
  usage: string;
  description: string;
  details?: string[];
  schematic?: {
    title: string;
    steps: string[];
  };
}

export interface TestCase {
  id: string;
  title: string;
  problem: string;
  diagnosis: string[];
  resolution: string;
  category: 'network' | 'os' | 'hardware' | 'software';
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface MaintenanceTip {
  id: string;
  title: string;
  frequency: 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly';
  tasks: string[];
}
