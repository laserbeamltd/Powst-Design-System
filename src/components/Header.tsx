import React from 'react';
import { ActiveTab, ViewportMode } from '../types';
import { 
  Sparkles, 
  Layers, 
  Type, 
  Box, 
  ShieldCheck, 
  Smartphone, 
  Tablet, 
  Monitor, 
  Code2, 
  Play
} from 'lucide-react';

interface HeaderProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  viewportMode: ViewportMode;
  setViewportMode: (mode: ViewportMode) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  viewportMode,
  setViewportMode,
  darkMode,
  setDarkMode,
}) => {
  const navItems: { id: ActiveTab; label: string; icon: React.ReactNode }[] = [
    { id: 'overview', label: 'Overview', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'colors', label: '3-Color Palette', icon: <Layers className="w-4 h-4" /> },
    { id: 'typography', label: 'Inter Typography', icon: <Type className="w-4 h-4" /> },
    { id: 'components', label: 'Components', icon: <Box className="w-4 h-4" /> },
    { id: 'contrast', label: 'AA Contrast Matrix', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'live-app', label: 'Sample App', icon: <Play className="w-4 h-4" /> },
    { id: 'export', label: 'Export Tokens', icon: <Code2 className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b-[4px] sm:border-b-[5px] border-black transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black flex items-center justify-center border-2 border-black shadow-[3px_3px_0px_0px_#FF007F] relative overflow-hidden group">
              <span className="w-4 h-4 bg-[#FF007F] group-hover:scale-125 transition-transform" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-lg sm:text-2xl tracking-tighter uppercase text-black">
                  PINK<span className="text-[#FF007F]">LOGIC</span>
                </span>
                <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider bg-[#FF007F] text-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                  AA CERTIFIED
                </span>
              </div>
              <p className="text-[11px] text-black font-bold uppercase tracking-wider hidden md:block opacity-75">
                White • Pink • Black • 100% Inter
              </p>
            </div>
          </div>

          {/* Device Viewport Selector (for testing responsiveness) */}
          <div className="hidden lg:flex items-center bg-[#FFF0F6] p-1 border-2 border-black shadow-[3px_3px_0px_0px_#000]">
            <button
              id="viewport-desktop-btn"
              onClick={() => setViewportMode('desktop')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-black uppercase tracking-wider transition-all ${
                viewportMode === 'desktop'
                  ? 'bg-black text-white shadow-xs'
                  : 'text-black hover:text-[#FF007F]'
              }`}
              title="Desktop View (100% Fluid)"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Desktop</span>
            </button>
            <button
              id="viewport-tablet-btn"
              onClick={() => setViewportMode('tablet')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-black uppercase tracking-wider transition-all ${
                viewportMode === 'tablet'
                  ? 'bg-black text-white shadow-xs'
                  : 'text-black hover:text-[#FF007F]'
              }`}
              title="Tablet View (768px)"
            >
              <Tablet className="w-3.5 h-3.5" />
              <span>Tablet</span>
            </button>
            <button
              id="viewport-mobile-btn"
              onClick={() => setViewportMode('mobile')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-black uppercase tracking-wider transition-all ${
                viewportMode === 'mobile'
                  ? 'bg-black text-white shadow-xs'
                  : 'text-black hover:text-[#FF007F]'
              }`}
              title="Mobile View (375px)"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile</span>
            </button>
          </div>

          {/* Canvas Mode Toggle & Test Action */}
          <div className="flex items-center gap-2.5">
            <button
              id="theme-canvas-toggle"
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-2 px-3 py-1.5 text-xs font-black uppercase tracking-wider border-2 border-black bg-white hover:bg-[#FFF0F6] text-black transition-all shadow-[3px_3px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
            >
              <span
                className={`w-2.5 h-2.5 border border-black ${
                  darkMode ? 'bg-[#FF007F]' : 'bg-black'
                }`}
              />
              <span className="hidden sm:inline">
                {darkMode ? 'Dark' : 'Light'}
              </span>
            </button>

            <button
              id="primary-action-badge"
              onClick={() => setActiveTab('live-app')}
              className="px-4 py-2 bg-[#FF007F] hover:bg-[#E0006F] text-white font-black text-xs uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span className="hidden sm:inline">Sample App</span>
            </button>
          </div>
        </div>

        {/* Horizontal Navigation Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-2.5 -mx-4 px-4 sm:mx-0 sm:px-0 border-t-2 border-black">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-tab-${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3.5 py-2 text-xs font-black uppercase tracking-wider whitespace-nowrap transition-all border-2 ${
                  isActive
                    ? 'bg-black text-white border-black shadow-[3px_3px_0px_0px_#FF007F]'
                    : 'bg-white text-black border-transparent hover:border-black hover:bg-[#FFF0F6]'
                }`}
              >
                <span className={isActive ? 'text-[#FF007F]' : 'text-current'}>
                  {item.icon}
                </span>
                <span>{item.label}</span>
                {item.id === 'contrast' && (
                  <span className="w-2 h-2 bg-[#FF007F] border border-black" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
