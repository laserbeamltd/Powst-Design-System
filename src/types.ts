export interface ColorToken {
  id: string;
  name: string;
  family: 'white' | 'pink' | 'black';
  hex: string;
  rgb: string;
  hsl: string;
  variableName: string;
  tailwindClass: string;
  role: string;
  usage: string;
  contrastOnWhite: number;
  contrastOnBlack: number;
  isAAOnWhiteNormal: boolean;
  isAAOnWhiteLarge: boolean;
  isAAOnBlackNormal: boolean;
  isAAOnBlackLarge: boolean;
}

export interface TypographyToken {
  name: string;
  weight: number;
  weightLabel: string;
  sizePx: number;
  sizeRem: string;
  lineHeight: string;
  letterSpacing: string;
  usage: string;
  sampleText: string;
}

export type ViewportMode = 'desktop' | 'tablet' | 'mobile';
export type ActiveTab = 'overview' | 'colors' | 'typography' | 'components' | 'contrast' | 'live-app' | 'export';

export interface TaskItem {
  id: string;
  title: string;
  category: 'Design' | 'Engineering' | 'Research' | 'Launch';
  completed: boolean;
  priority: 'bold-pink' | 'charcoal' | 'subtle';
  due: string;
  assignee: string;
}
