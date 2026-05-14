/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Skill {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'soft' | 'hard' | 'network' | 'security';
}

export interface Tool {
  id: string;
  name: string;
  category: string;
  usage: string;
  description: string;
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
  frequency: 'daily' | 'weekly' | 'monthly';
  tasks: string[];
}
