import React, { useState } from 'react';
import { Copy, Check, Code2, Sparkles, FileCode, Layers, FileJson } from 'lucide-react';
import { COLOR_TOKENS } from '../data/designTokens';

export const ExportTokenHub: React.FC = () => {
  const [selectedFormat, setSelectedFormat] = useState<'tailwind' | 'css' | 'json' | 'react'>('tailwind');
  const [copied, setCopied] = useState(false);

  const tailwindSnippet = `/**
 * Tailwind CSS Theme Configuration — Artistic Flair Design System
 * Strict 3-Color Palette (White #FFFFFF, Hot Pink #FF007F, Pure Black #000000)
 * Single Font: Inter
 */
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        canvas: {
          white: '#FFFFFF',
          subtle: '#FAFAFA',
          wash: '#FFF0F6',
          border: '#000000',
        },
        pink: {
          primary: '#FF007F', // Hot Pink (Hero accent)
          deep: '#C70062',    // AA Certified text on white (4.85:1)
          soft: '#FFE4EE',    // Soft badge / highlight
          wash: '#FFF0F6',    // Pastel wash container background
        },
        ink: {
          black: '#000000',   // Pure Black (21:1 on white)
          charcoal: '#18181B',// Dark cards / elevate
          muted: '#52525B',   // AA Subtitles on white (5.9:1)
          subtle: '#71717A',  // Secondary labels (4.5:1)
        },
      },
      boxShadow: {
        'neo-sm': '2px 2px 0px 0px #000000',
        'neo-md': '4px 4px 0px 0px #000000',
        'neo-lg': '6px 6px 0px 0px #000000',
        'neo-pink': '4px 4px 0px 0px #FF007F',
      },
    },
  },
};`;

  const cssSnippet = `/* ==========================================================
   ARTISTIC FLAIR DESIGN SYSTEM — CSS CUSTOM PROPERTIES
   Strict 3-Color Architecture: White, Hot Pink, Black + Depth Shades
   Font: 100% Inter (Global)
   ========================================================== */

:root {
  /* Typography */
  --font-family-base: 'Inter', system-ui, -apple-system, sans-serif;

  /* 01. White & Canvas Shades */
  --color-white: #FFFFFF;
  --color-white-subtle: #FAFAFA;
  --color-white-wash: #FFF0F6;
  --color-border: #000000;

  /* 02. Pink Accent Shades (AA Certified) */
  --color-pink-primary: #FF007F;  /* Hot Pink Hero Accent */
  --color-pink-deep: #C70062;     /* 4.85:1 contrast on white */
  --color-pink-soft: #FFE4EE;     /* Soft badge surface */
  --color-pink-wash: #FFF0F6;     /* Pastel wash */

  /* 03. Black & Neutral Shades (AA Certified) */
  --color-black: #000000;          /* 21.0:1 contrast on white */
  --color-black-charcoal: #18181B; /* Secondary dark surface */
  --color-black-muted: #52525B;    /* 5.9:1 contrast on white */
  --color-black-subtle: #71717A;   /* 4.5:1 contrast on white */

  /* Neo-Brutalist Depth */
  --shadow-neo-black: 4px 4px 0px 0px #000000;
  --shadow-neo-pink: 4px 4px 0px 0px #FF007F;
  --border-width-standard: 3px;
}

body {
  font-family: var(--font-family-base);
  color: var(--color-black);
  background-color: var(--color-white);
  -webkit-font-smoothing: antialiased;
}`;

  const jsonSnippet = JSON.stringify(
    {
      name: 'Artistic Flair Design Tokens',
      version: '2.0.0',
      accessibility: 'WCAG 2.1 AA Compliant',
      typography: {
        fontFamily: 'Inter',
        weights: [400, 500, 600, 700, 800, 900],
      },
      colorTokens: COLOR_TOKENS.map((t) => ({
        id: t.id,
        name: t.name,
        family: t.family,
        hex: t.hex,
        rgb: t.rgb,
        variable: t.variableName,
        contrastOnWhite: t.contrastOnWhite,
        contrastOnBlack: t.contrastOnBlack,
        aaNormalText: t.isAAOnWhiteNormal,
      })),
    },
    null,
    2
  );

  const reactSnippet = `// Reusable React Component Primitives — Artistic Flair Neo-Brutalist System
import React from 'react';

// 1. Primary Action Button
export const Button = ({ children, variant = 'primary', ...props }) => {
  const base = "h-12 px-6 font-black text-xs uppercase tracking-wider border-[3px] border-black transition-all flex items-center justify-center gap-2 cursor-pointer active:translate-x-0.5 active:translate-y-0.5 active:shadow-none";
  
  const variants = {
    primary: "bg-[#FF007F] hover:bg-[#E0006F] text-white shadow-[4px_4px_0px_0px_#000]",
    solid: "bg-black hover:bg-[#18181B] text-white shadow-[4px_4px_0px_0px_#FF007F]",
    outline: "bg-white hover:bg-[#FFF0F6] text-black shadow-[4px_4px_0px_0px_#000]",
    pinkWash: "bg-[#FFF0F6] hover:bg-[#FFE4EE] text-black shadow-[4px_4px_0px_0px_#000]",
  };

  return (
    <button className={\`\${base} \${variants[variant]}\`} {...props}>
      {children}
    </button>
  );
};

// 2. AA Certified Status Badge
export const Badge = ({ children, variant = 'pink' }) => {
  const styles = {
    pink: "bg-[#FF007F] text-white border-2 border-black shadow-[2px_2px_0px_0px_#000]",
    soft: "bg-[#FFF0F6] text-[#C70062] border-2 border-black",
    dark: "bg-black text-white border-2 border-black shadow-[2px_2px_0px_0px_#FF007F]",
    neutral: "bg-white text-black border-2 border-black shadow-[2px_2px_0px_0px_#000]",
  };

  return (
    <span className={\`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-black uppercase tracking-wider \${styles[variant]}\`}>
      {children}
    </span>
  );
};`;

  const getActiveCode = () => {
    switch (selectedFormat) {
      case 'tailwind':
        return tailwindSnippet;
      case 'css':
        return cssSnippet;
      case 'json':
        return jsonSnippet;
      case 'react':
        return reactSnippet;
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getActiveCode());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="space-y-12">
      {/* Section Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 text-xs font-black uppercase tracking-wider bg-[#FF007F] text-white border-2 border-black shadow-[2px_2px_0px_0px_#000]">
          <Code2 className="w-3.5 h-3.5" />
          <span>PRODUCTION CODE EXPORT</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase text-black">
          Export Design Tokens & Code
        </h2>
        <p className="text-base sm:text-lg font-bold text-black/70 max-w-3xl leading-relaxed">
          Instantly export the calibrated 3-color tokens, Inter font scales, and component definitions for your web app, Tailwind setup, or design token repository.
        </p>
      </div>

      {/* Code Viewer Card */}
      <div className="bg-black text-white border-[4px] border-black shadow-[8px_8px_0px_0px_#FF007F] overflow-hidden">
        {/* Top Control Bar */}
        <div className="p-4 sm:p-6 border-b-2 border-[#27272A] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Format Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setSelectedFormat('tailwind')}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-black uppercase tracking-wider border-2 border-white/30 transition-all cursor-pointer ${
                selectedFormat === 'tailwind'
                  ? 'bg-[#FF007F] text-white border-[#FF007F] shadow-[3px_3px_0px_0px_#FFF]'
                  : 'text-white/70 hover:text-white bg-[#18181B]'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              <span>Tailwind Config</span>
            </button>

            <button
              onClick={() => setSelectedFormat('css')}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-black uppercase tracking-wider border-2 border-white/30 transition-all cursor-pointer ${
                selectedFormat === 'css'
                  ? 'bg-[#FF007F] text-white border-[#FF007F] shadow-[3px_3px_0px_0px_#FFF]'
                  : 'text-white/70 hover:text-white bg-[#18181B]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>CSS Variables</span>
            </button>

            <button
              onClick={() => setSelectedFormat('json')}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-black uppercase tracking-wider border-2 border-white/30 transition-all cursor-pointer ${
                selectedFormat === 'json'
                  ? 'bg-[#FF007F] text-white border-[#FF007F] shadow-[3px_3px_0px_0px_#FFF]'
                  : 'text-white/70 hover:text-white bg-[#18181B]'
              }`}
            >
              <FileJson className="w-3.5 h-3.5" />
              <span>JSON Tokens</span>
            </button>

            <button
              onClick={() => setSelectedFormat('react')}
              className={`flex items-center gap-2 px-3.5 py-2 text-xs font-black uppercase tracking-wider border-2 border-white/30 transition-all cursor-pointer ${
                selectedFormat === 'react'
                  ? 'bg-[#FF007F] text-white border-[#FF007F] shadow-[3px_3px_0px_0px_#FFF]'
                  : 'text-white/70 hover:text-white bg-[#18181B]'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>React Primitives</span>
            </button>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            className="px-5 py-2.5 bg-[#FF007F] hover:bg-[#E0006F] text-white font-black text-xs uppercase tracking-wider border-2 border-white shadow-[3px_3px_0px_0px_#FFF] flex items-center gap-2 transition-all cursor-pointer active:translate-x-0.5 active:translate-y-0.5 active:shadow-none self-start sm:self-auto"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Code</span>
              </>
            )}
          </button>
        </div>

        {/* Code Content Box */}
        <div className="p-6 sm:p-8 overflow-x-auto font-mono text-xs sm:text-sm text-white/90 leading-relaxed max-h-[500px]">
          <pre className="selection:bg-[#FF007F] selection:text-white">
            <code>{getActiveCode()}</code>
          </pre>
        </div>
      </div>
    </section>
  );
};
