import React from 'react';
import { ActiveTab } from '../types';
import { 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Type, 
  Box, 
  ShieldCheck, 
  Play, 
  Check,
  Star,
  Eye,
  Zap,
  Code2
} from 'lucide-react';

interface OverviewSectionProps {
  setActiveTab: (tab: ActiveTab) => void;
}

export const OverviewSection: React.FC<OverviewSectionProps> = ({ setActiveTab }) => {
  return (
    <div className="space-y-12">
      {/* Hero Header - Artistic Flair Neo-Brutalist Layout */}
      <div className="border-[4px] sm:border-[6px] border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center border-b-[4px] lg:border-b-0 lg:border-r-[6px] border-black bg-[#FFF0F6]">
            <div className="mb-6 flex flex-wrap gap-2.5">
              <span className="bg-black text-white px-3.5 py-1 text-xs font-black uppercase tracking-wider border-2 border-black">
                VERSION 2.0
              </span>
              <span className="bg-white text-black border-2 border-black px-3.5 py-1 text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_#000]">
                AA COMPLIANT (100%)
              </span>
              <span className="bg-[#FF007F] text-white border-2 border-black px-3.5 py-1 text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_#000]">
                INTER ONLY
              </span>
            </div>

            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.88] tracking-tighter mb-6 uppercase text-black">
              BOLDLY <br />
              <span className="text-[#FF007F]">MINIMAL.</span>
            </h1>

            <p className="text-lg sm:text-xl font-bold max-w-xl leading-snug text-black opacity-90">
              A friendly design framework utilizing a strict three-color palette of <span className="underline decoration-4 decoration-[#FF007F]">White</span>, <span className="text-[#FF007F]">Pink</span>, and <span className="underline decoration-4 decoration-black">Black</span> for maximum readability and distinct visual impact.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap gap-3.5">
              <button
                onClick={() => setActiveTab('components')}
                className="bg-[#FF007F] hover:bg-[#E0006F] text-white px-7 py-4 text-sm sm:text-base font-black uppercase tracking-tight border-[3px] sm:border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Documentation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveTab('live-app')}
                className="bg-white hover:bg-[#FFF0F6] text-black px-7 py-4 text-sm sm:text-base font-black uppercase tracking-tight border-[3px] sm:border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(255,0,127,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-[#FF007F] text-[#FF007F]" />
                <span>Explore Kit</span>
              </button>

              <button
                onClick={() => setActiveTab('contrast')}
                className="bg-black hover:bg-[#18181B] text-white px-6 py-4 text-sm sm:text-base font-black uppercase tracking-tight border-[3px] sm:border-[4px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all flex items-center gap-2 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-[#FF007F]" />
                <span>AA Matrix</span>
              </button>
            </div>
          </div>

          {/* Right Hero Column - Atomic Architecture Specimen */}
          <div className="lg:col-span-5 bg-[#FF007F] p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden text-white">
            <div className="absolute top-0 right-0 p-8 text-right pointer-events-none select-none">
              <div className="text-8xl sm:text-9xl font-black text-white leading-none opacity-20">
                01
              </div>
            </div>

            <div className="space-y-4 relative z-10">
              <div className="border-[4px] border-black p-6 bg-white text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#FF007F] rounded-full border-[3px] border-black" />
                  <div className="h-4 bg-black w-2/3" />
                </div>
                <div className="space-y-2 pt-1">
                  <div className="h-3 bg-[#FFF0F6] border border-black w-full" />
                  <div className="h-3 bg-[#FFF0F6] border border-black w-5/6" />
                  <div className="h-3 bg-[#FF007F] border border-black w-1/2" />
                </div>
                <div className="pt-2 flex justify-between items-center text-xs font-black uppercase border-t-2 border-black">
                  <span>WCAG Score</span>
                  <span className="text-[#FF007F] bg-black px-2 py-0.5 text-[10px]">AAA 21:1</span>
                </div>
              </div>
            </div>

            <div className="mt-8 text-white relative z-10">
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-2">
                Atomic Architecture
              </h3>
              <p className="font-bold text-white/90 text-sm sm:text-base leading-snug">
                Predictable, scalable, and beautifully efficient component structures.
              </p>
            </div>
          </div>
        </div>

        {/* Highlight Stats 4-Column Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t-[4px] sm:border-t-[6px] border-black bg-white divide-y-2 sm:divide-y-0 md:divide-x-[4px] sm:divide-black">
          <div className="p-6 sm:p-8 flex flex-col justify-center hover:bg-[#FFF0F6] transition-colors group cursor-default">
            <span className="text-xs font-black text-[#FF007F] mb-1 uppercase tracking-widest">
              Core Tone
            </span>
            <span className="text-xl sm:text-2xl font-black uppercase text-black">
              Vivid Pink
            </span>
          </div>

          <div className="p-6 sm:p-8 flex flex-col justify-center hover:bg-[#FFF0F6] transition-colors group cursor-default">
            <span className="text-xs font-black text-[#FF007F] mb-1 uppercase tracking-widest">
              Typography
            </span>
            <span className="text-xl sm:text-2xl font-black uppercase text-black">
              Inter Bold
            </span>
          </div>

          <div className="p-6 sm:p-8 flex flex-col justify-center hover:bg-[#FFF0F6] transition-colors group cursor-default">
            <span className="text-xs font-black text-[#FF007F] mb-1 uppercase tracking-widest">
              Contrast
            </span>
            <span className="text-xl sm:text-2xl font-black uppercase text-black">
              Ratio 21:1
            </span>
          </div>

          <div className="p-6 sm:p-8 flex flex-col justify-center bg-[#FF007F] text-white group cursor-default">
            <span className="text-xs font-black text-black mb-1 uppercase tracking-widest">
              Constraint
            </span>
            <span className="text-xl sm:text-2xl font-black uppercase text-white">
              Zero Waste
            </span>
          </div>
        </div>
      </div>

      {/* 3 Core System Directives */}
      <div className="space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-black uppercase tracking-widest text-[#FF007F]">
            Foundational Architecture
          </span>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tighter uppercase text-black">
            Three Directives of the Design System
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Directive 1 */}
          <div className="bg-white p-8 border-[3px] sm:border-[4px] border-black shadow-[6px_6px_0px_0px_#000] space-y-4 hover:shadow-[8px_8px_0px_0px_#FF007F] transition-all">
            <div className="w-12 h-12 bg-[#FF007F] text-white border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_#000]">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight text-black">
              01 • Strict 3-Color Palette
            </h3>
            <p className="text-sm font-semibold text-black/80 leading-relaxed">
              No extraneous rainbow accents. Visual hierarchy is achieved by pairing pure white canvas surfaces with high-impact vibrant pink accents and deep jet blacks.
            </p>
            <div className="pt-2 border-t-2 border-black">
              <button
                onClick={() => setActiveTab('colors')}
                className="text-xs font-black uppercase tracking-wider text-[#FF007F] hover:text-black flex items-center gap-1.5 cursor-pointer"
              >
                <span>View Palette Tokens</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Directive 2 */}
          <div className="bg-white p-8 border-[3px] sm:border-[4px] border-black shadow-[6px_6px_0px_0px_#000] space-y-4 hover:shadow-[8px_8px_0px_0px_#FF007F] transition-all">
            <div className="w-12 h-12 bg-black text-white border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_#FF007F]">
              <Type className="w-6 h-6 text-[#FF007F]" />
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight text-black">
              02 • Pure Inter Typography
            </h3>
            <p className="text-sm font-semibold text-black/80 leading-relaxed">
              A single typeface across all touchpoints ensures zero font jarring. Inter’s open counters, tall x-height, and variable weight range provide exceptional legibility.
            </p>
            <div className="pt-2 border-t-2 border-black">
              <button
                onClick={() => setActiveTab('typography')}
                className="text-xs font-black uppercase tracking-wider text-black hover:text-[#FF007F] flex items-center gap-1.5 cursor-pointer"
              >
                <span>Explore Typography Scale</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Directive 3 */}
          <div className="bg-white p-8 border-[3px] sm:border-[4px] border-black shadow-[6px_6px_0px_0px_#000] space-y-4 hover:shadow-[8px_8px_0px_0px_#FF007F] transition-all">
            <div className="w-12 h-12 bg-[#FFF0F6] text-black border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_#000]">
              <ShieldCheck className="w-6 h-6 text-[#9F1239]" />
            </div>
            <h3 className="text-xl font-black uppercase tracking-tight text-black">
              03 • WCAG AA Certified
            </h3>
            <p className="text-sm font-semibold text-black/80 leading-relaxed">
              Every text pairing passes the &ge; 4.5:1 ratio for normal body copy or &ge; 3.0:1 for large display headers and interactive UI component borders.
            </p>
            <div className="pt-2 border-t-2 border-black">
              <button
                onClick={() => setActiveTab('contrast')}
                className="text-xs font-black uppercase tracking-wider text-[#9F1239] hover:text-black flex items-center gap-1.5 cursor-pointer"
              >
                <span>Inspect Contrast Matrix</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Navigation Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          onClick={() => setActiveTab('colors')}
          className="p-6 bg-white border-[3px] border-black hover:bg-[#FFF0F6] cursor-pointer transition-all shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#FF007F] space-y-3 group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-black/70">Color Tokens</span>
            <ArrowRight className="w-4 h-4 text-black group-hover:text-[#FF007F] group-hover:translate-x-1 transition-all" />
          </div>
          <h4 className="text-base font-black uppercase tracking-tight text-black">3-Tone Swatches</h4>
          <p className="text-xs font-semibold text-black/70">
            Interactive swatch cards with HEX, RGB, HSL, CSS variables, and Tailwind copy.
          </p>
        </div>

        <div
          onClick={() => setActiveTab('typography')}
          className="p-6 bg-white border-[3px] border-black hover:bg-[#FFF0F6] cursor-pointer transition-all shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#FF007F] space-y-3 group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-black/70">Type System</span>
            <ArrowRight className="w-4 h-4 text-black group-hover:text-[#FF007F] group-hover:translate-x-1 transition-all" />
          </div>
          <h4 className="text-base font-black uppercase tracking-tight text-black">Inter Type Scale</h4>
          <p className="text-xs font-semibold text-black/70">
            Display headings, body hierarchy, responsive preview, and live custom sandbox.
          </p>
        </div>

        <div
          onClick={() => setActiveTab('components')}
          className="p-6 bg-white border-[3px] border-black hover:bg-[#FFF0F6] cursor-pointer transition-all shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#FF007F] space-y-3 group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-black/70">UI Atoms</span>
            <ArrowRight className="w-4 h-4 text-black group-hover:text-[#FF007F] group-hover:translate-x-1 transition-all" />
          </div>
          <h4 className="text-base font-black uppercase tracking-tight text-black">Component Lab</h4>
          <p className="text-xs font-semibold text-black/70">
            Buttons, inputs, search wells, switches, checkboxes, pills, cards, and modals.
          </p>
        </div>

        <div
          onClick={() => setActiveTab('export')}
          className="p-6 bg-white border-[3px] border-black hover:bg-[#FFF0F6] cursor-pointer transition-all shadow-[4px_4px_0px_0px_#000] hover:shadow-[6px_6px_0px_0px_#FF007F] space-y-3 group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-black/70">Export Ready</span>
            <ArrowRight className="w-4 h-4 text-black group-hover:text-[#FF007F] group-hover:translate-x-1 transition-all" />
          </div>
          <h4 className="text-base font-black uppercase tracking-tight text-black">Token Export</h4>
          <p className="text-xs font-semibold text-black/70">
            One-click export to Tailwind CSS, CSS Custom Properties, and JSON tokens.
          </p>
        </div>
      </div>
    </div>
  );
};
