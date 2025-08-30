export const theme = {
  colors: {
    // Core bright palette
    primary: '#1E90FF',        // Dodger blue
    secondary: '#FF8C00',      // Dark orange
    accent: '#FF4081',         // Vibrant pink
    background: '#F7FAFC',     // Light cool gray
    surface: '#FFFFFF',        // White surfaces
    border: '#E2E8F0',         // Gray border
    textHigh: '#1A202C',       // Dark slate
    textMid: '#4A5568',        // Medium slate
    textDim: '#A0AEC0',        // Light slate
    success: '#38A169',        // Green
    warning: '#DD6B20',        // Orange
    error: '#E53E3E',          // Red
    gradientPrimary: 'linear-gradient(135deg, #1E90FF 0%, #63B3ED 100%)',
    gradientSecondary: 'linear-gradient(135deg, #FF8C00 0%, #FFA726 100%)',
  },
  fonts: {
    primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    heading: '"Space Grotesk", "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: '"JetBrains Mono", "Fira Code", monospace'
  },
  fontSizes: {
    xs: '0.75rem', sm: '0.875rem', base: '1rem', lg: '1.125rem', xl: '1.25rem', '2xl': '1.5rem', '3xl': '1.875rem', '4xl': '2.25rem', '5xl': '3rem', '6xl': '3.5rem'
  },
  fontWeights: { light:300, normal:400, medium:500, semibold:600, bold:700, extrabold:800 },
  spacing: { xs:'0.5rem', sm:'0.875rem', md:'1.25rem', lg:'2rem', xl:'3rem', '2xl':'4.5rem', '3xl':'6.5rem', '4xl':'9rem' },
  // Breakpoint sizes for responsive design
  breakpoints: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1536px' },
  radii: { sm:'4px', md:'8px', lg:'14px', xl:'24px', pill:'999px' },
  // Backward compatible borderRadius API
  borderRadius: { sm:'4px', base:'4px', md:'8px', lg:'14px', xl:'24px', '2xl':'24px', '3xl':'32px', full:'999px' },
  shadows: { xs:'0 1px 2px rgba(0,0,0,0.4)', sm:'0 2px 4px -1px rgba(0,0,0,0.45), 0 1px 2px rgba(0,0,0,0.3)', md:'0 4px 18px -2px rgba(0,0,0,0.55)', lg:'0 10px 32px -4px rgba(0,0,0,0.6)', innerGlow:'inset 0 0 0 1px #FFFFFF05, 0 0 0 1px #FFFFFF05', xl:'0 20px 40px -8px rgba(0,0,0,0.65)', '2xl':'0 28px 64px -12px rgba(0,0,0,0.7)', primaryShadow:'0 10px 30px rgba(101,87,255,0.25)', secondaryShadow:'0 10px 30px rgba(255,179,71,0.25)', glassShadow:'0 8px 32px 0 rgba(31,38,135,0.37)' },
  transitions: { fast:'0.15s ease', base:'0.25s cubic-bezier(.4,.2,.2,1)', slow:'0.45s cubic-bezier(.4,.2,.2,1)', elastic:'0.4s cubic-bezier(0.68,-0.55,0.265,1.55)' },
  zIndex: { behind:-1, base:1, overlay:10, dropdown:1000, sticky:1020, modal:1050, popover:1060, tooltip:1070 },
  layout: { contentMaxWidth:'1240px' }
};