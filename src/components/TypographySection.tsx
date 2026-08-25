import React, { useState } from 'react';
import { TYPOGRAPHY_SCALE } from '../data/designTokens';
import { Type, Sparkles, Smartphone, Monitor, CheckCircle2, RotateCcw } from 'lucide-react';

export const TypographySection: React.FC = () => {
  const [customText, setCustomText] = useState<string>('FRIENDLY, BOLD AND MINIMALIST PRODUCT DESIGN POWERED BY INTER.');
  const [activeWeight, setActiveWeight] = useState<number>(700);
  const [fontSizePreview, setFontSizePreview] = useState<number>(28);
  const [letterSpacing, setLetterSpacing] = useState<string>('-0.02em');
  const [testSurface, setTestSurface] = useState<'light' | 'dark' | 'pink'>('light');

  return (
    <section className="space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-black uppercase tracking-wider bg-[#FF007F] text-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
          <Type className="w-3.5 h-3.5" />
          <span>SINGLE TYPEFACE DISCIPLINE • 100% INTER</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase text-black">
          Inter Typographic Scale
        </h2>
        <p className="text-base sm:text-lg font-bold text-black/80 max-w-3xl leading-relaxed">
          Exclusively leveraging <strong className="text-black underline decoration-4 decoration-[#FF007F]">Inter</strong> across all breakpoints. Inter’s tall x-height, open apertures, and specialized optical adjustments eliminate cognitive friction across tiny mobile screens and massive 4K displays.
        </p>
      </div>

      {/* Font Principles Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_#000] space-y-2 hover:shadow-[6px_6px_0px_0px_#FF007F] transition-all">
          <span className="text-xs font-black uppercase tracking-widest text-[#FF007F]">01 • Optical Unity</span>
          <h3 className="text-lg font-black uppercase tracking-tight text-black">One Typeface, Zero Clutter</h3>
          <p className="text-xs font-semibold text-black/70 leading-relaxed">
            Eliminating font pairings creates instantaneous aesthetic harmony and decreases HTTP bundle latency on mobile networks.
          </p>
        </div>

        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_#000] space-y-2 hover:shadow-[6px_6px_0px_0px_#FF007F] transition-all">
          <span className="text-xs font-black uppercase tracking-widest text-[#FF007F]">02 • High X-Height</span>
          <h3 className="text-lg font-black uppercase tracking-tight text-black">Pristine Mobile Legibility</h3>
          <p className="text-xs font-semibold text-black/70 leading-relaxed">
            Even at compact sizes (11px–13px for badges and micro-copy), characters remain sharp, balanced, and WCAG AA readable.
          </p>
        </div>

        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_#000] space-y-2 hover:shadow-[6px_6px_0px_0px_#FF007F] transition-all">
          <span className="text-xs font-black uppercase tracking-widest text-[#FF007F]">03 • Negative Tracking</span>
          <h3 className="text-lg font-black uppercase tracking-tight text-black">Bold Punchy Display</h3>
          <p className="text-xs font-semibold text-black/70 leading-relaxed">
            Display and H1 headings use tight letter-spacing (-0.035em) to give headings a confident, modern, friendly posture.
          </p>
        </div>
      </div>

      {/* Interactive Typography Ladder */}
      <div className="bg-white border-[4px] border-black overflow-hidden shadow-[8px_8px_0px_0px_#000]">
        <div className="p-6 sm:p-8 border-b-2 border-black flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#FFF0F6]">
          <div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-black">Design Token Hierarchy Ladder</h3>
            <p className="text-xs sm:text-sm font-bold text-black/70 mt-1">
              Standardized font sizes, line heights, and letter-spacings with mathematical step progression.
            </p>
          </div>
          <span className="text-xs font-mono font-black px-3.5 py-1.5 bg-black text-white border-2 border-black shadow-[2px_2px_0px_0px_#FF007F]">
            font-family: 'Inter', sans-serif
          </span>
        </div>

        <div className="divide-y-2 divide-black">
          {TYPOGRAPHY_SCALE.map((token, index) => (
            <div
              key={token.name}
              className="p-6 sm:p-8 hover:bg-[#FFF0F6] transition-colors flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              {/* Left Column: Metadata */}
              <div className="w-full lg:w-72 flex-shrink-0 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-base font-black uppercase text-black">{token.name}</span>
                  <span className="text-[10px] font-mono font-black px-2 py-0.5 border border-black bg-[#FF007F] text-white">
                    {token.sizePx}px / {token.sizeRem}
                  </span>
                </div>
                <div className="text-xs font-semibold text-black/80 space-y-0.5">
                  <div>Weight: <strong className="text-black font-black uppercase">{token.weightLabel}</strong></div>
                  <div>Line Height: <span className="font-mono font-bold text-black">{token.lineHeight}</span> • Tracking: <span className="font-mono font-bold text-black">{token.letterSpacing}</span></div>
                </div>
                <p className="text-[11px] font-medium text-black/60 pt-1 leading-normal">
                  {token.usage}
                </p>
              </div>

              {/* Right Column: Visual Specimen */}
              <div className="flex-1 overflow-hidden">
                <p
                  style={{
                    fontSize: `${token.sizePx}px`,
                    fontWeight: token.weight,
                    lineHeight: token.lineHeight,
                    letterSpacing: token.letterSpacing,
                  }}
                  className="text-black break-words font-sans"
                >
                  {token.sampleText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Typeface Sandbox & Customizer */}
      <div className="bg-white border-[4px] border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b-2 border-black">
          <div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-black">Interactive Type Sandbox</h3>
            <p className="text-xs sm:text-sm font-bold text-black/70 mt-1">
              Type custom text to evaluate Inter across weights, custom sizes, and surface contrasts in real time.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setCustomText('FRIENDLY, BOLD AND MINIMALIST PRODUCT DESIGN POWERED BY INTER.');
                setFontSizePreview(28);
                setActiveWeight(700);
                setLetterSpacing('-0.02em');
              }}
              className="px-3.5 py-1.5 text-xs font-black uppercase tracking-wider border-2 border-black bg-white hover:bg-[#FFF0F6] text-black flex items-center gap-1.5 shadow-[2px_2px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>

        {/* Controls Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-black uppercase tracking-wider text-black">Weight: {activeWeight}</label>
            <div className="flex items-center gap-1">
              {[400, 500, 600, 700, 800].map((w) => (
                <button
                  key={w}
                  onClick={() => setActiveWeight(w)}
                  className={`flex-1 py-1.5 text-xs font-black border-2 transition-all cursor-pointer ${
                    activeWeight === w
                      ? 'bg-black text-white border-black shadow-[2px_2px_0px_0px_#FF007F]'
                      : 'bg-white text-black border-black hover:bg-[#FFF0F6]'
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center text-xs font-black uppercase tracking-wider text-black">
              <span>Size: {fontSizePreview}px</span>
            </div>
            <input
              type="range"
              min="14"
              max="64"
              value={fontSizePreview}
              onChange={(e) => setFontSizePreview(Number(e.target.value))}
              className="w-full accent-[#FF007F] cursor-pointer"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-black uppercase tracking-wider text-black">Tracking</label>
            <div className="flex items-center gap-1">
              {['-0.035em', '-0.02em', '0em', '0.04em'].map((track) => (
                <button
                  key={track}
                  onClick={() => setLetterSpacing(track)}
                  className={`flex-1 py-1.5 text-[11px] font-mono font-black border-2 transition-all cursor-pointer ${
                    letterSpacing === track
                      ? 'bg-[#FF007F] text-white border-black shadow-[2px_2px_0px_0px_#000]'
                      : 'bg-white text-black border-black hover:bg-[#FFF0F6]'
                  }`}
                >
                  {track}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-black uppercase tracking-wider text-black">Surface Contrast</label>
            <div className="flex items-center gap-1">
              {(['light', 'dark', 'pink'] as const).map((surf) => (
                <button
                  key={surf}
                  onClick={() => setTestSurface(surf)}
                  className={`flex-1 py-1.5 text-xs font-black uppercase tracking-wider border-2 transition-all cursor-pointer ${
                    testSurface === surf
                      ? 'bg-black text-white border-black shadow-[2px_2px_0px_0px_#FF007F]'
                      : 'bg-white text-black border-black hover:bg-[#FFF0F6]'
                  }`}
                >
                  {surf}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Text Input Editor */}
        <div className="space-y-2">
          <label className="text-xs font-black uppercase tracking-wider text-black/70">Editable Test Sentence</label>
          <input
            type="text"
            value={customText}
            onChange={(e) => setCustomText(e.target.value)}
            className="w-full px-4 py-3 border-[3px] border-black shadow-[3px_3px_0px_0px_#000] focus:outline-none focus:shadow-[5px_5px_0px_0px_#FF007F] text-sm text-black font-bold"
            placeholder="Type anything to test Inter typography..."
          />
        </div>

        {/* Live Typography Preview Stage */}
        <div
          className={`p-8 border-[3px] border-black shadow-[5px_5px_0px_0px_#000] transition-colors min-h-[160px] flex items-center justify-center text-center ${
            testSurface === 'light'
              ? 'bg-white text-black'
              : testSurface === 'dark'
              ? 'bg-black text-white'
              : 'bg-[#FFF0F6] text-black'
          }`}
        >
          <p
            style={{
              fontSize: `${fontSizePreview}px`,
              fontWeight: activeWeight,
              letterSpacing: letterSpacing,
              lineHeight: 1.25,
            }}
            className="max-w-4xl transition-all font-black uppercase"
          >
            {customText || 'Type text above to preview'}
          </p>
        </div>
      </div>
    </section>
  );
};
