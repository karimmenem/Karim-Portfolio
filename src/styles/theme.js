export const theme = {
    colors: {
      // Modern sophisticated palette
      primary: '#6366f1', // Indigo - sophisticated and modern
      primaryDark: '#4f46e5',
      primaryLight: '#818cf8',
      secondary: '#f59e0b', // Amber - warm accent
      secondaryDark: '#d97706',
      accent: '#ef4444', // Red accent for highlights
      
      // Rich neutrals with warmth - MUCH LESS WHITE
      dark: '#1e1b4b', // Deep indigo instead of pure black
      darkSecondary: '#312e81',
      charcoal: '#374151',
      gray: '#6b7280',
      lightGray: '#d1d5db',
      light: '#e2e8f0', // Much darker than before
      offWhite: '#f1f5f9', // Main background color - much darker
      white: '#ffffff', // Only for important cards
      cream: '#f8fafc', // Subtle warm alternative
      
      // Status colors
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      
      // Sophisticated gradients
      gradientPrimary: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
      gradientSecondary: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
      gradientHero: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 35%, #6366f1 100%)',
      gradientAccent: 'linear-gradient(135deg, #ec4899 0%, #ef4444 100%)',
      
      // Much darker, sophisticated background system
      backgroundPrimary: 'linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)', // Much darker
      backgroundSecondary: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)', // Darker alternate
      backgroundCard: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)', // Cards remain white for contrast
      backgroundGlass: 'rgba(255, 255, 255, 0.25)', // Glass morphism effect
      
      // Subtle texture overlays
      patternDots: 'radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.03) 1px, transparent 0)',
      patternGrid: `
        linear-gradient(rgba(99, 102, 241, 0.02) 1px, transparent 1px),
        linear-gradient(90deg, rgba(99, 102, 241, 0.02) 1px, transparent 1px)
      `,
    },
    
    fonts: {
      primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      heading: '"Space Grotesk", "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: '"JetBrains Mono", "Fira Code", "SF Mono", Monaco, Inconsolata, "Roboto Mono", monospace',
    },
    
    fontSizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
      '6xl': '3.75rem', // 60px
    },
    
    fontWeights: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    
    spacing: {
      xs: '0.5rem',   // 8px
      sm: '1rem',     // 16px
      md: '1.5rem',   // 24px
      lg: '2rem',     // 32px
      xl: '3rem',     // 48px
      '2xl': '4rem',  // 64px
      '3xl': '6rem',  // 96px
      '4xl': '8rem',  // 128px
    },
    
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    
    shadows: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      
      // Colored shadows for modern effect
      primaryShadow: '0 10px 30px rgba(99, 102, 241, 0.2)',
      secondaryShadow: '0 10px 30px rgba(245, 158, 11, 0.2)',
      
      // Glass morphism shadows
      glassShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    },
    
    borderRadius: {
      sm: '0.125rem',
      base: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      full: '9999px',
    },
    
    transitions: {
      fast: '0.15s ease-in-out',
      base: '0.2s ease-in-out',
      slow: '0.3s ease-in-out',
      elastic: '0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
    
    zIndex: {
      dropdown: 1000,
      sticky: 1020,
      fixed: 1030,
      modal: 1040,
      popover: 1050,
      tooltip: 1060,
    },
  };