import React, { useState } from 'react';
import { COLOR_TOKENS, calculateContrastRatio } from '../data/designTokens';
import { ColorToken } from '../types';
import { ShieldCheck, CheckCircle2, XCircle, AlertTriangle, Sparkles, SlidersHorizontal } from 'lucide-react';

export const ContrastAuditMatrix: React.FC = () => {
  const [fgToken, setFgToken] = useState<ColorToken>(
    COLOR_TOKENS.find((t) => t.id === 'black-ink') || COLOR_TOKENS[0]
  );
  const [bgToken, setBgToken] = useState<ColorToken>(
    COLOR_TOKENS.find((t) => t.id === 'white-subtle') || COLOR_TOKENS[1]
  );

  const ratio = calculateContrastRatio(fgToken.hex, bgToken.hex);
  
  // WCAG criteria
  const passAALarge = ratio >= 3.0; // Large text (18pt / 24px or 14pt / 18.5px bold)
  const passAANormal = ratio >= 4.5; // Normal body text (16px)
  const passAAALarge = ratio >= 4.5;
  const passAAANormal = ratio >= 7.0;
  const passUIComponents = ratio >= 3.0; // Input borders, active icons

  return (
    <section className="space-y-12">
      {/* Section Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-black uppercase tracking-wider bg-[#FF007F] text-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>WCAG 2.1 ACCESSIBILITY BENCHMARK</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase text-black">
          AA Contrast Matrix & Inspector
        </h2>
        <p className="text-base sm:text-lg font-bold text-black/80 max-w-3xl leading-relaxed">
          Verify real-time contrast ratios across every element. By calibrating our 3-color palette with high-density deep pinks (#FF007F, #D6006B) and rich blacks (#000000), all content satisfies strict AA compliance.
        </p>
      </div>

      {/* Interactive Live Pair Tester */}
      <div className="bg-white border-[4px] border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_#000] space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b-2 border-black">
          <div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-black">Live Color Pair Audit</h3>
            <p className="text-xs sm:text-sm font-bold text-black/70 mt-1">
              Select any foreground text color and background surface to test exact WCAG mathematical compliance.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-[#FFF0F6] p-3 border-2 border-black shadow-[3px_3px_0px_0px_#000]">
            <div className="text-right">
              <span className="text-[10px] uppercase font-black tracking-wider text-black/70">Calculated Ratio</span>
              <div className="text-2xl font-mono font-black text-black">
                {ratio} : 1
              </div>
            </div>
            <div className={`p-2.5 border-2 border-black flex items-center justify-center ${
              passAANormal ? 'bg-[#FF007F] text-white shadow-[2px_2px_0px_0px_#000]' : passAALarge ? 'bg-black text-white' : 'bg-white text-black'
            }`}>
              <ShieldCheck className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Color Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Foreground Selector */}
          <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-wider text-black flex items-center justify-between">
              <span>01 • Foreground / Text Color</span>
              <span className="font-mono font-black text-[#FF007F]">{fgToken.name} ({fgToken.hex})</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {COLOR_TOKENS.map((token) => (
                <button
                  key={`fg-${token.id}`}
                  onClick={() => setFgToken(token)}
                  className={`p-2.5 border-2 text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                    fgToken.id === token.id
                      ? 'border-black bg-[#FF007F] text-white shadow-[3px_3px_0px_0px_#000]'
                      : 'border-black bg-white text-black hover:bg-[#FFF0F6]'
                  }`}
                >
                  <span
                    className="w-4 h-4 border-2 border-black flex-shrink-0"
                    style={{ backgroundColor: token.hex }}
                  />
                  <span className="text-xs font-black uppercase truncate">
                    {token.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Background Selector */}
          <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-wider text-black flex items-center justify-between">
              <span>02 • Background / Surface Color</span>
              <span className="font-mono font-black text-[#FF007F]">{bgToken.name} ({bgToken.hex})</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {COLOR_TOKENS.map((token) => (
                <button
                  key={`bg-${token.id}`}
                  onClick={() => setBgToken(token)}
                  className={`p-2.5 border-2 text-left flex items-center gap-2.5 transition-all cursor-pointer ${
                    bgToken.id === token.id
                      ? 'border-black bg-[#FF007F] text-white shadow-[3px_3px_0px_0px_#000]'
                      : 'border-black bg-white text-black hover:bg-[#FFF0F6]'
                  }`}
                >
                  <span
                    className="w-4 h-4 border-2 border-black flex-shrink-0"
                    style={{ backgroundColor: token.hex }}
                  />
                  <span className="text-xs font-black uppercase truncate">
                    {token.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Live Visual Simulation Preview Box */}
        <div
          className="p-8 border-[3px] border-black shadow-[6px_6px_0px_0px_#000] transition-colors space-y-6"
          style={{ backgroundColor: bgToken.hex, color: fgToken.hex }}
        >
          <div className="flex items-center justify-between border-b-2 pb-4" style={{ borderColor: fgToken.hex }}>
            <span className="text-xs font-mono font-black tracking-wider uppercase opacity-90">
              Live Inter Typographic Contrast Sandbox
            </span>
            <span className="text-xs font-black uppercase px-3 py-1 border-2" style={{ borderColor: fgToken.hex }}>
              Inter 700 / 900
            </span>
          </div>

          <div className="space-y-3">
            <h4 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
              Bold, friendly & minimalist aesthetic in action.
            </h4>
            <p className="text-sm sm:text-base font-bold leading-relaxed opacity-90 max-w-3xl">
              Inter maintains distinct letter aperture and crisp x-height at this exact contrast ratio ({ratio}:1). This provides seamless visual readability across all viewport widths.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              className="px-5 py-2.5 font-black text-xs uppercase tracking-wider border-2 shadow-[2px_2px_0px_0px_#000] transition-all cursor-pointer"
              style={{
                backgroundColor: fgToken.hex,
                color: bgToken.hex,
                borderColor: fgToken.hex === '#000000' || fgToken.hex === '#09090B' ? '#000' : fgToken.hex,
              }}
            >
              Simulated Primary Button
            </button>

            <button
              className="px-5 py-2.5 font-black text-xs uppercase tracking-wider border-2 transition-all cursor-pointer"
              style={{
                backgroundColor: 'transparent',
                color: fgToken.hex,
                borderColor: fgToken.hex,
              }}
            >
              Simulated Outline Button
            </button>
          </div>
        </div>

        {/* WCAG Compliance Verdict Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {/* Normal Text AA */}
          <div className={`p-4 border-2 border-black shadow-[3px_3px_0px_0px_#000] ${
            passAANormal ? 'bg-[#FFF0F6]' : 'bg-white'
          }`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase text-black/70">Normal Text (16px)</span>
              {passAANormal ? (
                <CheckCircle2 className="w-4 h-4 text-[#FF007F]" />
              ) : (
                <XCircle className="w-4 h-4 text-black/40" />
              )}
            </div>
            <div className="mt-2 flex items-baseline gap-1.5">
              <span className="text-xl font-mono font-black text-black">
                {passAANormal ? 'PASS' : 'FAIL'}
              </span>
              <span className="text-[10px] font-bold text-black/60">(&ge; 4.5:1)</span>
            </div>
            <div className="text-[11px] font-bold text-black/60 mt-1 uppercase">WCAG Level AA</div>
          </div>

          {/* Large Text AA */}
          <div className={`p-4 border-2 border-black shadow-[3px_3px_0px_0px_#000] ${
            passAALarge ? 'bg-[#FFF0F6]' : 'bg-white'
          }`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase text-black/70">Large Text (18pt+)</span>
              {passAALarge ? (
                <CheckCircle2 className="w-4 h-4 text-[#FF007F]" />
              ) : (
                <XCircle className="w-4 h-4 text-black/40" />
              )}
            </div>
            <div className="mt-2 flex items-baseline gap-1.5">
              <span className="text-xl font-mono font-black text-black">
                {passAALarge ? 'PASS' : 'FAIL'}
              </span>
              <span className="text-[10px] font-bold text-black/60">(&ge; 3.0:1)</span>
            </div>
            <div className="text-[11px] font-bold text-black/60 mt-1 uppercase">Headings & Hero</div>
          </div>

          {/* UI Components & Controls */}
          <div className={`p-4 border-2 border-black shadow-[3px_3px_0px_0px_#000] ${
            passUIComponents ? 'bg-[#FFF0F6]' : 'bg-white'
          }`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase text-black/70">UI Controls / Borders</span>
              {passUIComponents ? (
                <CheckCircle2 className="w-4 h-4 text-[#FF007F]" />
              ) : (
                <XCircle className="w-4 h-4 text-black/40" />
              )}
            </div>
            <div className="mt-2 flex items-baseline gap-1.5">
              <span className="text-xl font-mono font-black text-black">
                {passUIComponents ? 'PASS' : 'FAIL'}
              </span>
              <span className="text-[10px] font-bold text-black/60">(&ge; 3.0:1)</span>
            </div>
            <div className="text-[11px] font-bold text-black/60 mt-1 uppercase">Outlines & Icons</div>
          </div>

          {/* AAA Enhanced */}
          <div className="p-4 border-2 border-black shadow-[3px_3px_0px_0px_#000] bg-white">
            <div className="flex items-center justify-between">
              <span className="text-xs font-black uppercase text-black/70">AAA Enhanced</span>
              {passAAANormal ? (
                <CheckCircle2 className="w-4 h-4 text-[#FF007F]" />
              ) : (
                <AlertTriangle className="w-4 h-4 text-black/40" />
              )}
            </div>
            <div className="mt-2 flex items-baseline gap-1.5">
              <span className="text-xl font-mono font-black text-black">
                {passAAANormal ? 'PASS' : 'N/A'}
              </span>
              <span className="text-[10px] font-bold text-black/60">(&ge; 7.0:1)</span>
            </div>
            <div className="text-[11px] font-bold text-black/60 mt-1 uppercase">Enhanced Level</div>
          </div>
        </div>
      </div>

      {/* Comprehensive Contrast Matrix Table */}
      <div className="bg-white border-[4px] border-black overflow-hidden shadow-[8px_8px_0px_0px_#000]">
        <div className="p-6 sm:p-8 border-b-2 border-black">
          <h3 className="text-2xl font-black uppercase tracking-tight text-black">Full Palette Accessibility Audit Table</h3>
          <p className="text-xs sm:text-sm font-bold text-black/70 mt-1">
            Certified contrast pairings across the entire 3-color and depth shade scale.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#FFF0F6] border-b-2 border-black text-[11px] font-black uppercase tracking-wider text-black">
                <th className="py-4 px-6">Color Token</th>
                <th className="py-4 px-4">Hex Code</th>
                <th className="py-4 px-4">vs Pure White (#FFF)</th>
                <th className="py-4 px-4">vs Jet Black (#000)</th>
                <th className="py-4 px-6">Certified Role</th>
              </tr>
            </thead>
            <tbody className="divide-y-2 divide-black text-xs">
              {COLOR_TOKENS.map((token) => (
                <tr key={`matrix-${token.id}`} className="hover:bg-[#FFF0F6]/50 transition-colors">
                  <td className="py-4 px-6 font-black uppercase text-black flex items-center gap-3">
                    <span
                      className="w-4 h-4 border-2 border-black flex-shrink-0"
                      style={{ backgroundColor: token.hex }}
                    />
                    <span>{token.name}</span>
                  </td>
                  <td className="py-4 px-4 font-mono font-bold text-black/80">
                    {token.hex}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-black text-black">
                        {token.contrastOnWhite}:1
                      </span>
                      {token.contrastOnWhite >= 4.5 ? (
                        <span className="px-2 py-0.5 text-[10px] font-black uppercase bg-[#FF007F] text-white border border-black shadow-[1px_1px_0px_0px_#000]">
                          AA Normal
                        </span>
                      ) : token.contrastOnWhite >= 3.0 ? (
                        <span className="px-2 py-0.5 text-[10px] font-black uppercase bg-white text-black border border-black shadow-[1px_1px_0px_0px_#000]">
                          AA Large/UI
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold text-black/50 uppercase">
                          Canvas Layer
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-black text-black">
                        {token.contrastOnBlack}:1
                      </span>
                      {token.contrastOnBlack >= 4.5 ? (
                        <span className="px-2 py-0.5 text-[10px] font-black uppercase bg-black text-white border border-black shadow-[1px_1px_0px_0px_#FF007F]">
                          AA Normal
                        </span>
                      ) : token.contrastOnBlack >= 3.0 ? (
                        <span className="px-2 py-0.5 text-[10px] font-black uppercase bg-[#FFF0F6] text-black border border-black">
                          AA Large/UI
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold text-black/50 uppercase">
                          Dark Surface
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-6 font-bold text-black/70 max-w-xs truncate">
                    {token.role}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
