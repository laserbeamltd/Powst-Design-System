import React, { useState } from 'react';
import { ActiveTab, ViewportMode } from './types';
import { Header } from './components/Header';
import { OverviewSection } from './components/OverviewSection';
import { ColorPaletteSection } from './components/ColorPaletteSection';
import { TypographySection } from './components/TypographySection';
import { ComponentLibrarySection } from './components/ComponentLibrarySection';
import { ContrastAuditMatrix } from './components/ContrastAuditMatrix';
import { LiveAppWorkbench } from './components/LiveAppWorkbench';
import { ExportTokenHub } from './components/ExportTokenHub';
import { ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
  const [viewportMode, setViewportMode] = useState<ViewportMode>('desktop');
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-200 ${
        darkMode
          ? 'bg-[#000000] text-white selection:bg-[#FF007F] selection:text-white'
          : 'bg-[#FAFAFA] text-black selection:bg-[#FF007F] selection:text-white'
      }`}
    >
      {/* Top Fixed Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        viewportMode={viewportMode}
        setViewportMode={setViewportMode}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Content Area with Dynamic Viewport Container */}
      <main className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto transition-all duration-300 ${
            viewportMode === 'mobile'
              ? 'max-w-[390px] border-[5px] border-black p-4 bg-white text-black shadow-[10px_10px_0px_0px_#FF007F] overflow-hidden'
              : viewportMode === 'tablet'
              ? 'max-w-[768px] border-[5px] border-black p-6 bg-white text-black shadow-[10px_10px_0px_0px_#000] overflow-hidden'
              : 'max-w-7xl'
          }`}
        >
          {/* Active Tab Views */}
          {activeTab === 'overview' && <OverviewSection setActiveTab={setActiveTab} />}
          {activeTab === 'colors' && <ColorPaletteSection />}
          {activeTab === 'typography' && <TypographySection />}
          {activeTab === 'components' && <ComponentLibrarySection />}
          {activeTab === 'contrast' && <ContrastAuditMatrix />}
          {activeTab === 'live-app' && <LiveAppWorkbench />}
          {activeTab === 'export' && <ExportTokenHub />}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t-[4px] border-black bg-white py-12 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-black border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_#FF007F]">
              <span className="w-3 h-3 bg-[#FF007F]" />
            </div>
            <div>
              <div className="font-black text-sm text-black tracking-wider uppercase">
                PULSE DESIGN SYSTEM
              </div>
              <div className="text-xs font-bold text-black/70">
                White • Hot Pink • Pure Black • 100% Inter Typography
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-black">
            <span className="inline-flex items-center gap-1.5 text-white bg-[#FF007F] px-3.5 py-1.5 uppercase tracking-wider border-2 border-black shadow-[3px_3px_0px_0px_#000]">
              <ShieldCheck className="w-4 h-4 stroke-[2.5]" />
              <span>WCAG 2.1 Level AA Certified</span>
            </span>
          </div>

          <div className="text-xs font-black uppercase tracking-wider text-black/70 text-center sm:text-right">
            Minimalist, Bold & Accessible UI Foundations
          </div>
        </div>
      </footer>
    </div>
  );
}
