import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
  
  * { margin:0; padding:0; box-sizing:border-box; }
  
  html { scroll-behavior:smooth; font-size:16px; }
  @media (max-width: 640px){ html { font-size:14px; } }
  
  body {
    font-family:${({theme}) => theme.fonts.primary};
    font-weight:${({theme}) => theme.fontWeights.normal};
    line-height:1.6;
    color:${({theme}) => theme.colors.textHigh};
    background:${({theme}) => theme.colors.background};
    background-image: none;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    overflow-x:hidden;
  }

  /* Vignette removed */
  
  @keyframes globalGradient { 0%{background-position:0% 50%;} 50%{background-position:100% 50%;} 100%{background-position:0% 50%;} }
  @media (prefers-reduced-motion:reduce){ body{animation:none; background-size:cover;} }
  
  /* Typography */
  h1,h2,h3,h4,h5,h6 { font-family:${({theme}) => theme.fonts.heading}; font-weight:700; line-height:1.15; color:${({theme}) => theme.colors.textHigh}; letter-spacing:-0.02em; }
  h1 { font-size:${({theme}) => theme.fontSizes['6xl']}; }
  h2 { font-size:${({theme}) => theme.fontSizes['5xl']}; }
  h3 { font-size:${({theme}) => theme.fontSizes['4xl']}; }
  h4 { font-size:${({theme}) => theme.fontSizes['3xl']}; }
  h5 { font-size:${({theme}) => theme.fontSizes['2xl']}; }
  h6 { font-size:${({theme}) => theme.fontSizes.xl}; }
  
  p { margin-bottom:${({theme}) => theme.spacing.md}; color:${({theme}) => theme.colors.textMid}; }
  small { font-size:0.8em; color:${({theme}) => theme.colors.textDim}; }
  strong { color:${({theme}) => theme.colors.textHigh}; font-weight:600; }
  
  a { color:${({theme}) => theme.colors.brand}; text-decoration:none; position:relative; transition:${({theme}) => theme.transitions.fast}; }
  a:hover { color:${({theme}) => theme.colors.accent}; }
  
  /* Links underline effect */
  a:not(.btn)::after { content:""; position:absolute; left:0; bottom:-2px; width:0; height:2px; background:${({theme}) => theme.colors.gradientPrimary}; transition:${({theme}) => theme.transitions.base}; border-radius:2px; }
  a:not(.btn):hover::after { width:100%; }
  
  /* Selection */
  ::selection { background:${({theme}) => theme.colors.gradientPrimary}; color:#fff; }
  
  /* Scrollbars */
  ::-webkit-scrollbar { width:10px; }
  ::-webkit-scrollbar-track { background:rgba(255,255,255,0.03); }
  ::-webkit-scrollbar-thumb { background:linear-gradient(${({theme}) => theme.colors.brandAlt}, ${({theme}) => theme.colors.brand}); border-radius:20px; border:2px solid #00000040; }
  ::-webkit-scrollbar-thumb:hover { box-shadow:${({theme}) => theme.colors.glowBrand}; }
  
  /* Utility layout */
  .container { width:100%; max-width:${({theme}) => theme.layout.contentMaxWidth}; margin:0 auto; padding:0 ${({theme}) => theme.spacing.lg}; }
  @media (max-width: 640px){ .container { padding:0 ${({theme}) => theme.spacing.md}; } }
  
  .section { padding:${({theme}) => theme.spacing['3xl']} 0; position:relative; }
  .section:not(:first-child)::before { content:''; position:absolute; top:0; left:50%; width:0; height:140px; border-left:1px dashed #FFFFFF10; transform:translateX(-50%); }
  
  /* Glass panel helper */
  .panel { position:relative; background:${({theme}) => theme.colors.surfaceBase}; border-radius:${({theme}) => theme.radii.xl}; padding:${({theme}) => theme.spacing.xl}; backdrop-filter:blur(18px) saturate(1.4); box-shadow:${({theme}) => theme.shadows.md}; border:1px solid #FFFFFF10; overflow:hidden; }
  .panel::before { content:""; position:absolute; inset:0; background:linear-gradient(140deg, #FFFFFF08, transparent 40%, #FFFFFF05); pointer-events:none; }
  
  /* Gradient ring utility */
  .ringed { position:relative; }
  .ringed::after { content:''; position:absolute; inset:-2px; border-radius:inherit; padding:2px; background:${({theme}) => theme.colors.surfaceBorder}; -webkit-mask:linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite:xor; mask-composite:exclude; }
  
  /* Buttons base */
  .btn { display:inline-flex; align-items:center; gap:0.6em; font-weight:600; letter-spacing:0.5px; border:none; cursor:pointer; border-radius:${({theme}) => theme.radii.pill}; position:relative; overflow:hidden; line-height:1; padding:${({theme}) => `${theme.spacing.sm} ${theme.spacing.lg}`}; font-size:${({theme}) => theme.fontSizes.sm}; text-transform:uppercase; }
  .btn-primary { background:${({theme}) => theme.colors.gradientPrimary}; color:#fff; box-shadow:${({theme}) => theme.colors.glowBrand}; }
  .btn-primary:hover { filter:brightness(1.1); transform:translateY(-2px); }
  .btn-accent { background:${({theme}) => theme.colors.gradientAccent}; color:#1B1F29; box-shadow:${({theme}) => theme.colors.glowAccent}; }
  .btn-outline { background:rgba(255,255,255,0.04); color:${({theme}) => theme.colors.textHigh}; border:1px solid #ffffff22; }
  .btn-outline:hover { background:rgba(255,255,255,0.08); }
  
  /* Code blocks */
  pre, code { font-family:${({theme}) => theme.fonts.mono}; }
  pre { background:${({theme}) => theme.colors.codeBg}; border:1px solid ${({theme}) => theme.colors.codeBorder}; border-radius:${({theme}) => theme.radii.lg}; padding:${({theme}) => theme.spacing.lg}; font-size:0.85rem; position:relative; }
  code { background:${({theme}) => theme.colors.codeBg}; padding:2px 6px; border-radius:6px; font-size:0.8rem; color:${({theme}) => theme.colors.accent}; }
  
  /* Lists */
  ul { padding-left:1.2rem; }
  li { margin-bottom:0.4rem; }
  
  /* Focus outline */
  :focus-visible { outline:2px solid ${({theme}) => theme.colors.brand}; outline-offset:2px; }
  
  /* Motion reduction variants */
  @media (prefers-reduced-motion:reduce){
    .btn, a, .panel { transition:none !important; }
  }

  /* Fade-in utility for scroll reveals (to be toggled via JS) */
  .reveal { opacity:0; transform:translateY(28px); transition:opacity .8s ease, transform .8s ease; }
  .reveal.visible { opacity:1; transform:translateY(0); }
`;