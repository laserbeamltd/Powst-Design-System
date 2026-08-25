import React, { useState } from 'react';
import { COLOR_TOKENS } from '../data/designTokens';
import { ColorToken } from '../types';
import { Copy, Check, Info, ShieldCheck, Sparkles, SlidersHorizontal } from 'lucide-react';

export const ColorPaletteSection: React.FC = () => {
  const [selectedToken, setSelectedToken] = useState<ColorToken>(COLOR_TOKENS[4]); // Vivid Hot Pink default
  const [filterFamily, setFilterFamily] = useState<'all' | 'white' | 'pink' | 'black'>('all');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const filteredTokens = filterFamily === 'all' 
    ? COLOR_TOKENS 
    : COLOR_TOKENS.filter((t) => t.family === filterFamily);

  return (
    <section className="space-y-12">
      {/* Section Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-black uppercase tracking-wider bg-[#FF007F] text-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>STRICT 3-COLOR SYSTEM • AA COMPLIANT DEPTH</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase text-black">
          Color Architecture
        </h2>
        <p className="text-base sm:text-lg font-bold text-black/80 max-w-3xl leading-relaxed">
          Rooted strictly in <strong className="text-black underline decoration-4 decoration-black">White</strong>, <strong className="text-[#FF007F]">Pink</strong>, and <strong className="text-black underline decoration-4 decoration-[#FF007F]">Black</strong>. Depth, hierarchy, and accessibility are engineered through calibrated optical shades without introducing distracting auxiliary spectrum hues.
        </p>
      </div>

      {/* 3 Core Anchors Summary Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_#000] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-widest text-black/70">Base 01 • Canvas</span>
            <span className="w-4 h-4 bg-white border-2 border-black" />
          </div>
          <h3 className="text-xl font-black uppercase tracking-tight text-black">White & Neutral Canvas</h3>
          <p className="text-xs font-semibold text-black/70 leading-relaxed">
            Provides pristine negative space, breathable contrast, and lightweight card containers.
          </p>
          <div className="text-[11px] font-mono font-black text-black pt-2 border-t-2 border-black">
            #FFFFFF • #FAFAFA • #FFF0F6 • #000000
          </div>
        </div>

        <div className="bg-[#FFF0F6] p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_#FF007F] space-y-3 relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-widest text-[#FF007F]">Base 02 • Accent</span>
            <span className="w-4 h-4 bg-[#FF007F] border-2 border-black" />
          </div>
          <h3 className="text-xl font-black uppercase tracking-tight text-black">Vivid & Hot Pink</h3>
          <p className="text-xs font-semibold text-black/70 leading-relaxed">
            Energizes key interactions, focal buttons, progress counters, and high-impact states.
          </p>
          <div className="text-[11px] font-mono font-black text-[#FF007F] pt-2 border-t-2 border-black">
            #FF007F • #E11D48 • #9F1239 (AA Text) • #FFE4EE
          </div>
        </div>

        <div className="bg-black text-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_#000] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-widest text-white/70">Base 03 • Structure</span>
            <span className="w-4 h-4 bg-black border-2 border-white" />
          </div>
          <h3 className="text-xl font-black uppercase tracking-tight text-white">Jet Black & Slate</h3>
          <p className="text-xs font-semibold text-white/70 leading-relaxed">
            Anchors ultra-high contrast typography, solid buttons, dark surfaces, and structural outlines.
          </p>
          <div className="text-[11px] font-mono font-black text-white pt-2 border-t-2 border-white/40">
            #000000 • #09090B • #18181B • #71717A
          </div>
        </div>
      </div>

      {/* Filter Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-black">
        <div className="flex items-center gap-1.5 p-1 bg-[#FFF0F6] border-2 border-black shadow-[2px_2px_0px_0px_#000]">
          {(['all', 'white', 'pink', 'black'] as const).map((fam) => (
            <button
              key={fam}
              id={`filter-${fam}-tokens`}
              onClick={() => setFilterFamily(fam)}
              className={`px-3.5 py-1.5 text-xs font-black uppercase tracking-wider transition-all border ${
                filterFamily === fam
                  ? 'bg-black text-white border-black shadow-xs'
                  : 'bg-transparent text-black border-transparent hover:border-black hover:bg-white'
              }`}
            >
              {fam === 'all' ? 'All Tokens (14)' : `${fam} Family`}
            </button>
          ))}
        </div>

        <div className="text-xs font-black uppercase tracking-wider text-black flex items-center gap-2">
          <Info className="w-4 h-4 text-[#FF007F]" />
          <span>Click any swatch card below to inspect full tokens & copy code</span>
        </div>
      </div>

      {/* Token Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredTokens.map((token) => {
          const isSelected = selectedToken.id === token.id;
          const isLight = token.family === 'white' || token.id === 'pink-light' || token.id === 'pink-wash';

          return (
            <div
              key={token.id}
              id={`color-card-${token.id}`}
              onClick={() => setSelectedToken(token)}
              className={`group cursor-pointer border-[3px] transition-all overflow-hidden bg-white text-left ${
                isSelected
                  ? 'border-black shadow-[6px_6px_0px_0px_#FF007F] scale-[1.02]'
                  : 'border-black shadow-[3px_3px_0px_0px_#000] hover:shadow-[5px_5px_0px_0px_#FF007F]'
              }`}
            >
              {/* Color Swatch Header */}
              <div
                className="h-28 w-full p-4 flex flex-col justify-between border-b-2 border-black"
                style={{ backgroundColor: token.hex }}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[10px] font-mono font-black px-2 py-0.5 border border-black uppercase tracking-wider ${
                      isLight
                        ? 'bg-white text-black'
                        : 'bg-black text-white'
                    }`}
                  >
                    {token.family}
                  </span>
                  {token.isAAOnWhiteNormal && (
                    <span className="flex items-center gap-1 text-[10px] font-black uppercase px-2 py-0.5 bg-black text-white border border-white/20">
                      <ShieldCheck className="w-3 h-3 text-[#FF007F]" />
                      AA Light
                    </span>
                  )}
                  {token.isAAOnBlackNormal && !token.isAAOnWhiteNormal && (
                    <span className="flex items-center gap-1 text-[10px] font-black uppercase px-2 py-0.5 bg-white text-black border border-black">
                      <ShieldCheck className="w-3 h-3 text-[#FF007F]" />
                      AA Dark
                    </span>
                  )}
                </div>

                <div
                  className={`font-mono text-sm font-black flex items-center justify-between ${
                    isLight ? 'text-black' : 'text-white'
                  }`}
                >
                  <span>{token.hex}</span>
                  <span className="text-[11px] opacity-80">{token.hsl}</span>
                </div>
              </div>

              {/* Swatch Details */}
              <div className="p-4 space-y-2 bg-white">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-black uppercase tracking-tight text-black">{token.name}</h4>
                  <span className="text-[10px] font-mono font-bold text-black bg-[#FFF0F6] border border-black px-1.5 py-0.5">
                    {token.variableName}
                  </span>
                </div>
                <p className="text-xs font-medium text-black/70 line-clamp-2 leading-relaxed">
                  {token.usage}
                </p>

                {/* Quick Contrast Badges */}
                <div className="pt-2 border-t-2 border-black flex items-center justify-between text-[11px] font-bold text-black">
                  <span>vs White: <strong className="text-black font-black">{token.contrastOnWhite}:1</strong></span>
                  <span>vs Black: <strong className="text-[#FF007F] font-black">{token.contrastOnBlack}:1</strong></span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Live Selected Token Inspector Drawer */}
      <div className="bg-white border-[4px] border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b-2 border-black">
          <div className="flex items-center gap-4">
            <div
              className="w-16 h-16 border-[3px] border-black shadow-[3px_3px_0px_0px_#000] flex-shrink-0 flex items-center justify-center"
              style={{ backgroundColor: selectedToken.hex }}
            >
              <span
                className={`w-3.5 h-3.5 border border-black ${
                  selectedToken.hex === '#FFFFFF' ? 'bg-black' : 'bg-white'
                }`}
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-black uppercase tracking-tight text-black">
                  {selectedToken.name}
                </h3>
                <span className="px-2.5 py-0.5 text-xs font-black uppercase tracking-wider bg-black text-white border-2 border-black">
                  {selectedToken.role}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-black/75 mt-1">
                {selectedToken.usage}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => copyToClipboard(selectedToken.hex, 'hex')}
              className="px-3.5 py-2 text-xs font-black uppercase tracking-wider border-2 border-black bg-white hover:bg-[#FFF0F6] text-black flex items-center gap-1.5 shadow-[2px_2px_0px_0px_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
            >
              {copiedKey === 'hex' ? <Check className="w-3.5 h-3.5 text-[#FF007F]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{selectedToken.hex}</span>
            </button>
            <button
              onClick={() => copyToClipboard(`var(${selectedToken.variableName})`, 'css')}
              className="px-3.5 py-2 text-xs font-black uppercase tracking-wider bg-black hover:bg-[#18181B] text-white border-2 border-black flex items-center gap-1.5 shadow-[2px_2px_0px_0px_#FF007F] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
            >
              {copiedKey === 'css' ? <Check className="w-3.5 h-3.5 text-[#FF007F]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>CSS Var</span>
            </button>
          </div>
        </div>

        {/* Token Specs Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-[#FFF0F6] p-3.5 border-2 border-black shadow-[2px_2px_0px_0px_#000]">
            <span className="text-[10px] font-black uppercase text-black">HEX Code</span>
            <div className="text-sm font-mono font-black text-black mt-1">{selectedToken.hex}</div>
          </div>
          <div className="bg-[#FFF0F6] p-3.5 border-2 border-black shadow-[2px_2px_0px_0px_#000]">
            <span className="text-[10px] font-black uppercase text-black">RGB Values</span>
            <div className="text-sm font-mono font-black text-black mt-1">{selectedToken.rgb}</div>
          </div>
          <div className="bg-[#FFF0F6] p-3.5 border-2 border-black shadow-[2px_2px_0px_0px_#000]">
            <span className="text-[10px] font-black uppercase text-black">CSS Variable</span>
            <div className="text-sm font-mono font-black text-black mt-1">{selectedToken.variableName}</div>
          </div>
          <div className="bg-[#FFF0F6] p-3.5 border-2 border-black shadow-[2px_2px_0px_0px_#000]">
            <span className="text-[10px] font-black uppercase text-black">Tailwind Class</span>
            <div className="text-sm font-mono font-black text-black mt-1 truncate">{selectedToken.tailwindClass}</div>
          </div>
        </div>

        {/* Accessibility Ratios Matrix for this token */}
        <div className="bg-white p-5 border-[3px] border-black shadow-[4px_4px_0px_0px_#000] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#FF007F] text-white border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_#000]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black uppercase tracking-tight text-black">WCAG 2.1 AA Compliance Score</h4>
              <p className="text-xs font-bold text-black/70">
                Tested for normal text (&ge; 4.5:1), large text (&ge; 3:1), and UI boundary controls.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="text-[11px] font-black uppercase text-black/70">Contrast on White</div>
              <div className="text-sm font-mono font-black text-black">
                {selectedToken.contrastOnWhite}:1
                <span className={`ml-1.5 text-[10px] px-2 py-0.5 font-black uppercase border border-black ${
                  selectedToken.contrastOnWhite >= 4.5 ? 'bg-[#9F1239] text-white' : selectedToken.contrastOnWhite >= 3.0 ? 'bg-[#FF007F] text-white' : 'bg-black text-white'
                }`}>
                  {selectedToken.contrastOnWhite >= 4.5 ? 'PASS (AA Normal)' : selectedToken.contrastOnWhite >= 3.0 ? 'PASS (AA Large)' : 'Subtle Surface'}
                </span>
              </div>
            </div>

            <div className="h-8 w-[2px] bg-black" />

            <div className="text-right">
              <div className="text-[11px] font-black uppercase text-black/70">Contrast on Black</div>
              <div className="text-sm font-mono font-black text-black">
                {selectedToken.contrastOnBlack}:1
                <span className={`ml-1.5 text-[10px] px-2 py-0.5 font-black uppercase border border-black ${
                  selectedToken.contrastOnBlack >= 4.5 ? 'bg-black text-white' : selectedToken.contrastOnBlack >= 3.0 ? 'bg-[#FF007F] text-white' : 'bg-[#FFF0F6] text-black'
                }`}>
                  {selectedToken.contrastOnBlack >= 4.5 ? 'PASS (AA Normal)' : selectedToken.contrastOnBlack >= 3.0 ? 'PASS (AA Large)' : 'Dark Canvas'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
