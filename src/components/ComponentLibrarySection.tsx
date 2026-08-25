import React, { useState } from 'react';
import { 
  Check, 
  Search, 
  ArrowRight, 
  Bell, 
  Trash2, 
  Plus, 
  Loader2, 
  CheckCircle2, 
  AlertCircle, 
  Sliders, 
  Star,
  ExternalLink,
  Lock,
  ChevronDown,
  X
} from 'lucide-react';

export const ComponentLibrarySection: React.FC = () => {
  // Interactive state variables
  const [btnLoading, setBtnLoading] = useState(false);
  const [toggleState, setToggleState] = useState(true);
  const [toggleState2, setToggleState2] = useState(false);
  const [checkbox1, setCheckbox1] = useState(true);
  const [checkbox2, setCheckbox2] = useState(false);
  const [radioSelected, setRadioSelected] = useState<'standard' | 'priority' | 'urgent'>('priority');
  const [inputText, setInputText] = useState('hello@laserbeam.co');
  const [searchQuery, setSearchQuery] = useState('');
  const [sliderVal, setSliderVal] = useState(72);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('Changes saved successfully!');

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3500);
  };

  return (
    <section className="space-y-12">
      {/* Toast Notification Container */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="bg-black text-white px-6 py-4 border-[3px] border-black shadow-[6px_6px_0px_0px_#FF007F] flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-[#FF007F] animate-ping" />
            <div className="text-xs font-black uppercase tracking-wider">{toastMessage}</div>
            <button
              onClick={() => setShowToast(false)}
              className="text-white hover:text-[#FF007F] ml-3 p-1 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Section Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-black uppercase tracking-wider bg-[#FF007F] text-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
          <Sliders className="w-3.5 h-3.5" />
          <span>PRODUCTION-READY UI ATOMS & PATTERNS</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase text-black">
          Component Showcase
        </h2>
        <p className="text-base sm:text-lg font-bold text-black/80 max-w-3xl leading-relaxed">
          Every component is engineered strictly with the 3-tone White, Pink, and Black palette, adhering to Inter typography rules, accessible focus outlines, and crisp physical touch targets.
        </p>
      </div>

      {/* 1. BUTTONS & INTERACTIVE TRIGGERS */}
      <div className="bg-white border-[4px] border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b-2 border-black">
          <div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-black">01 • Buttons & Action Triggers</h3>
            <p className="text-xs sm:text-sm font-bold text-black/70 mt-0.5">
              High-contrast hierarchy: Primary Pink for hero conversions, Jet Black for solid authority, and Ghost for secondary flows.
            </p>
          </div>
          <button
            onClick={() => {
              setBtnLoading(true);
              setTimeout(() => setBtnLoading(false), 2000);
            }}
            className="text-xs font-black uppercase tracking-wider text-[#FF007F] hover:text-black self-start sm:self-auto cursor-pointer"
          >
            Toggle Loading State
          </button>
        </div>

        {/* Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Primary Bold Pink */}
          <div className="space-y-2">
            <div className="text-xs font-black uppercase tracking-wider text-black/70">Primary Action (Vivid Pink)</div>
            <button
              id="btn-primary-demo"
              onClick={() => triggerToast('Primary Pink Action Triggered')}
              disabled={btnLoading}
              className="w-full h-12 px-5 bg-[#FF007F] hover:bg-[#E0006F] text-white font-black text-xs sm:text-sm uppercase tracking-wider border-[3px] border-black shadow-[4px_4px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
            >
              {btnLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Create Project</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
            <div className="text-[11px] text-black/60 font-mono font-bold">bg-[#FF007F] text-white</div>
          </div>

          {/* Solid Black Button */}
          <div className="space-y-2">
            <div className="text-xs font-black uppercase tracking-wider text-black/70">Solid Jet Black</div>
            <button
              id="btn-black-demo"
              onClick={() => triggerToast('Solid Black Action Triggered')}
              className="w-full h-12 px-5 bg-black hover:bg-[#18181B] text-white font-black text-xs sm:text-sm uppercase tracking-wider border-[3px] border-black shadow-[4px_4px_0px_0px_#FF007F] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Confirm & Deploy</span>
              <Check className="w-4 h-4 text-[#FF007F]" />
            </button>
            <div className="text-[11px] text-black/60 font-mono font-bold">bg-black text-white</div>
          </div>

          {/* High-Contrast Outline */}
          <div className="space-y-2">
            <div className="text-xs font-black uppercase tracking-wider text-black/70">High-Contrast Outline</div>
            <button
              id="btn-outline-demo"
              onClick={() => triggerToast('Outline Action Triggered')}
              className="w-full h-12 px-5 bg-white hover:bg-[#FFF0F6] text-black font-black text-xs sm:text-sm uppercase tracking-wider border-[3px] border-black shadow-[4px_4px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Export Documentation</span>
            </button>
            <div className="text-[11px] text-black/60 font-mono font-bold">border-[3px] border-black</div>
          </div>

          {/* Soft Pink Tint Button (AA Compliant) */}
          <div className="space-y-2">
            <div className="text-xs font-black uppercase tracking-wider text-black/70">Soft Pink Tint</div>
            <button
              id="btn-pink-soft-demo"
              onClick={() => triggerToast('Soft Pink Action Triggered')}
              className="w-full h-12 px-5 bg-[#FFF0F6] hover:bg-[#FFE4EE] text-black font-black text-xs sm:text-sm uppercase tracking-wider border-[3px] border-black shadow-[4px_4px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Duplicate Template</span>
            </button>
            <div className="text-[11px] text-black/60 font-mono font-bold">bg-[#FFF0F6] border-2</div>
          </div>
        </div>

        {/* Secondary Button Row: Icon Buttons, Ghost, Disabled */}
        <div className="flex flex-wrap items-center gap-3 pt-4 border-t-2 border-black">
          {/* Ghost */}
          <button 
            onClick={() => triggerToast('Ghost Button Clicked')}
            className="h-10 px-4 text-xs font-black uppercase tracking-wider text-black hover:bg-[#FFF0F6] border-2 border-transparent hover:border-black transition-all cursor-pointer"
          >
            Cancel / Dismiss
          </button>

          {/* Square Icon Pink */}
          <button 
            onClick={() => triggerToast('Liked')}
            className="w-10 h-10 bg-[#FF007F] text-white border-2 border-black hover:bg-[#E0006F] transition-all flex items-center justify-center cursor-pointer shadow-[2px_2px_0px_0px_#000]"
            title="Star item"
          >
            <Star className="w-4 h-4 fill-current" />
          </button>

          {/* Circle Icon Black */}
          <button 
            onClick={() => triggerToast('Notification Alert')}
            className="w-10 h-10 rounded-full bg-black text-white border-2 border-black hover:bg-[#18181B] transition-all flex items-center justify-center cursor-pointer relative shadow-[2px_2px_0px_0px_#FF007F]"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#FF007F] border border-black" />
          </button>

          {/* Disabled Button */}
          <button 
            disabled 
            className="h-10 px-4 text-xs font-black uppercase tracking-wider bg-[#F4F4F5] text-[#A1A1AA] border-2 border-[#A1A1AA] cursor-not-allowed flex items-center gap-1.5 opacity-60"
          >
            <Lock className="w-3.5 h-3.5" />
            <span>Disabled Option</span>
          </button>
        </div>
      </div>

      {/* 2. FORM CONTROLS & SELECTION */}
      <div className="bg-white border-[4px] border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] space-y-6">
        <div className="pb-4 border-b-2 border-black">
          <h3 className="text-2xl font-black uppercase tracking-tight text-black">02 • Form Inputs & Selection Controls</h3>
          <p className="text-xs sm:text-sm font-bold text-black/70 mt-0.5">
            Forms feature bold pink focus indicators, high-contrast labels, and clear touch states.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Text Input with Focus Ring */}
          <div className="space-y-1.5">
            <label className="text-xs font-black uppercase tracking-wider text-black">
              Email Address <span className="text-[#FF007F]">*</span>
            </label>
            <input
              type="email"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full h-12 px-4 border-[3px] border-black bg-white text-black text-sm font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_#FF007F] shadow-[3px_3px_0px_0px_#000] transition-all"
              placeholder="name@example.com"
            />
            <span className="text-[11px] font-bold text-black/60">Standard input with vibrant focus</span>
          </div>

          {/* Search Input with Surface Well */}
          <div className="space-y-1.5">
            <label className="text-xs font-black uppercase tracking-wider text-black">Search Query</label>
            <div className="relative">
              <Search className="w-4 h-4 text-black absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 pl-10 pr-4 border-[3px] border-black bg-[#FFF0F6] text-black text-sm font-bold focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_0px_#FF007F] shadow-[3px_3px_0px_0px_#000] transition-all"
                placeholder="Search tokens, components..."
              />
            </div>
            <span className="text-[11px] font-bold text-black/60">Subtle surface with expanding focus</span>
          </div>

          {/* Select Dropdown */}
          <div className="space-y-1.5">
            <label className="text-xs font-black uppercase tracking-wider text-black">Component Category</label>
            <div className="relative">
              <select className="w-full h-12 px-4 pr-10 border-[3px] border-black bg-white text-black text-sm font-bold focus:outline-none focus:shadow-[4px_4px_0px_0px_#FF007F] shadow-[3px_3px_0px_0px_#000] appearance-none cursor-pointer">
                <option>Design Tokens & Primitives</option>
                <option>Navigation & Headers</option>
                <option>Form Inputs & Toggles</option>
                <option>Feedback & Overlays</option>
              </select>
              <ChevronDown className="w-4 h-4 text-black absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <span className="text-[11px] font-bold text-black/60">Standardized drop menu</span>
          </div>
        </div>

        {/* Toggles, Checkboxes & Radio Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t-2 border-black">
          {/* Toggles */}
          <div className="space-y-3">
            <div className="text-xs font-black uppercase tracking-wider text-black/70">Switch Toggles</div>
            <div className="space-y-2">
              <div 
                onClick={() => setToggleState(!toggleState)}
                className="flex items-center justify-between p-3.5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] cursor-pointer hover:bg-[#FFF0F6] transition-all"
              >
                <span className="text-xs font-black uppercase text-black">Vibrant Sync</span>
                <div
                  className={`w-12 h-6 border-2 border-black transition-colors relative flex items-center p-0.5 ${
                    toggleState ? 'bg-[#FF007F]' : 'bg-white'
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-black border border-white transition-transform transform ${
                      toggleState ? 'translate-x-5 bg-white border-black' : 'translate-x-0'
                    }`}
                  />
                </div>
              </div>

              <div 
                onClick={() => setToggleState2(!toggleState2)}
                className="flex items-center justify-between p-3.5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] cursor-pointer hover:bg-[#FFF0F6] transition-all"
              >
                <span className="text-xs font-black uppercase text-black">Jet Black Mode</span>
                <div
                  className={`w-12 h-6 border-2 border-black transition-colors relative flex items-center p-0.5 ${
                    toggleState2 ? 'bg-black' : 'bg-white'
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-black border border-white transition-transform transform ${
                      toggleState2 ? 'translate-x-5 bg-white border-black' : 'translate-x-0'
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="space-y-3">
            <div className="text-xs font-black uppercase tracking-wider text-black/70">Checkboxes</div>
            <div className="space-y-2">
              <label 
                onClick={() => setCheckbox1(!checkbox1)}
                className="flex items-center gap-3 p-3.5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] cursor-pointer hover:bg-[#FFF0F6] transition-all"
              >
                <div className={`w-5 h-5 border-2 border-black flex items-center justify-center transition-all ${
                  checkbox1 ? 'bg-[#FF007F] text-white' : 'bg-white'
                }`}>
                  {checkbox1 && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <span className="text-xs font-black uppercase text-black">Enforce AA Standards</span>
              </label>

              <label 
                onClick={() => setCheckbox2(!checkbox2)}
                className="flex items-center gap-3 p-3.5 bg-white border-2 border-black shadow-[3px_3px_0px_0px_#000] cursor-pointer hover:bg-[#FFF0F6] transition-all"
              >
                <div className={`w-5 h-5 border-2 border-black flex items-center justify-center transition-all ${
                  checkbox2 ? 'bg-black text-white' : 'bg-white'
                }`}>
                  {checkbox2 && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>
                <span className="text-xs font-black uppercase text-black">Strict Inter Type</span>
              </label>
            </div>
          </div>

          {/* Radio Group */}
          <div className="space-y-3">
            <div className="text-xs font-black uppercase tracking-wider text-black/70">Segmented Radios</div>
            <div className="space-y-2">
              {(['standard', 'priority', 'urgent'] as const).map((r) => (
                <div
                  key={r}
                  onClick={() => setRadioSelected(r)}
                  className={`flex items-center justify-between p-3.5 border-2 border-black cursor-pointer uppercase transition-all ${
                    radioSelected === r
                      ? 'bg-[#FF007F] text-white shadow-[3px_3px_0px_0px_#000]'
                      : 'bg-white text-black shadow-[3px_3px_0px_0px_#000] hover:bg-[#FFF0F6]'
                  }`}
                >
                  <span className="text-xs font-black">{r} Level</span>
                  <div className={`w-4 h-4 border-2 border-black flex items-center justify-center ${
                    radioSelected === r ? 'bg-black' : 'bg-white'
                  }`}>
                    {radioSelected === r && <div className="w-1.5 h-1.5 bg-white" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. BADGES, CHIPS & STATUS INDICATORS */}
      <div className="bg-white border-[4px] border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] space-y-6">
        <div className="pb-4 border-b-2 border-black">
          <h3 className="text-2xl font-black uppercase tracking-tight text-black">03 • Badges, Chips & Meta Tags</h3>
          <p className="text-xs sm:text-sm font-bold text-black/70 mt-0.5">
            Single-line pill controls and badges that preserve clean visual hierarchy.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Vivid Pink Badge */}
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-black uppercase tracking-wider bg-[#FF007F] text-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
            <span className="w-1.5 h-1.5 bg-white animate-pulse" />
            VIBRANT HERO
          </span>

          {/* Deep Rose AA Pill */}
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-black uppercase tracking-wider bg-[#FFF0F6] text-black border-2 border-black shadow-[2px_2px_0px_0px_#000]">
            <Check className="w-3.5 h-3.5 text-[#FF007F]" />
            AA COMPLIANT (100%)
          </span>

          {/* Solid Black Badge */}
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-black uppercase tracking-wider bg-black text-white border-2 border-black shadow-[2px_2px_0px_0px_#FF007F]">
            <Lock className="w-3.5 h-3.5 text-[#FF007F]" />
            SYSTEM CORE
          </span>

          {/* Surface Badge */}
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-black uppercase tracking-wider bg-white text-black border-2 border-black shadow-[2px_2px_0px_0px_#000]">
            INTER SANS
          </span>

          {/* Outline Tag */}
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-black uppercase tracking-wider bg-[#FFF0F6] text-[#FF007F] border-2 border-black shadow-[2px_2px_0px_0px_#000]">
            MOBILE & DESKTOP
          </span>

          {/* Live Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border-2 border-black shadow-[2px_2px_0px_0px_#000] text-xs font-black uppercase tracking-wider text-black">
            <span className="w-2 h-2 rounded-full bg-[#FF007F] animate-ping" />
            <span>Live Sync Active</span>
          </div>
        </div>
      </div>

      {/* 4. CARDS & STRUCTURAL SURFACES */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Metric Stat Card */}
        <div className="bg-white p-6 border-[3px] border-black shadow-[6px_6px_0px_0px_#000] space-y-4 hover:shadow-[6px_6px_0px_0px_#FF007F] transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-widest text-black/70">Readability Score</span>
            <span className="w-3 h-3 bg-[#FF007F] border border-black" />
          </div>
          <div className="space-y-1">
            <div className="text-5xl font-black tracking-tight text-black">100%</div>
            <p className="text-xs font-bold text-black/70">
              Full WCAG 2.1 AA and AAA compliance across all component states.
            </p>
          </div>
          <div className="w-full bg-[#FFF0F6] h-3 border-2 border-black overflow-hidden">
            <div className="bg-[#FF007F] h-full w-full" />
          </div>
        </div>

        {/* Action Card with Pink Accent */}
        <div className="bg-[#FFF0F6] p-6 border-[3px] border-black shadow-[6px_6px_0px_0px_#FF007F] space-y-4 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-widest text-[#FF007F]">Interactive Sandbox</span>
            <Star className="w-4 h-4 text-black fill-current" />
          </div>
          <div className="space-y-1">
            <h4 className="text-xl font-black uppercase tracking-tight text-black">Single Font Logic</h4>
            <p className="text-xs font-bold text-black/70 leading-relaxed">
              Zero font-weight collisions or mismatched baseline heights.
            </p>
          </div>
          <button
            onClick={() => triggerToast('Opened token specs')}
            className="w-full py-3 bg-black hover:bg-[#18181B] text-white border-2 border-black shadow-[3px_3px_0px_0px_#FF007F] font-black text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Explore Token Specs</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FF007F]" />
          </button>
        </div>

        {/* Dark Surface Card */}
        <div className="bg-black text-white p-6 border-[3px] border-black shadow-[6px_6px_0px_0px_#000] space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-widest text-white/70">Dark Palette View</span>
            <span className="text-[10px] font-mono font-black px-2 py-0.5 bg-[#FF007F] text-white border border-white/20">
              INVERTED
            </span>
          </div>
          <div className="space-y-1">
            <div className="text-4xl font-black tracking-tight text-white">21.0 : 1</div>
            <p className="text-xs font-bold text-white/70">
              Maximum possible contrast ratio achieved with Jet Black on Pure White.
            </p>
          </div>
          <div className="pt-2 border-t-2 border-white/30 flex items-center justify-between text-xs font-bold text-white/70">
            <span>Inter 700 Display</span>
            <span className="text-[#FF007F] font-black uppercase">Optimal AA</span>
          </div>
        </div>
      </div>
    </section>
  );
};
