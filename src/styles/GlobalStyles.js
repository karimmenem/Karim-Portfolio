import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  // Import Google Fonts - Modern sophisticated fonts
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600&display=swap');
  
  // CSS Reset and base styles
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
    font-size: 16px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: 14px;
    }
  }
  
  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.dark};
    background: ${({ theme }) => theme.colors.backgroundPrimary};
    background-size: 20px 20px;
    background-image: ${({ theme }) => theme.colors.patternDots};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
  
  // Headings
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    line-height: 1.2;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.dark};
  }
  
  h1 {
    font-size: ${({ theme }) => theme.fontSizes['5xl']};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes['4xl']};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: ${({ theme }) => theme.fontSizes['3xl']};
    }
  }
  
  h2 {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: ${({ theme }) => theme.fontSizes['3xl']};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: ${({ theme }) => theme.fontSizes['2xl']};
    }
  }
  
  h3 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      font-size: ${({ theme }) => theme.fontSizes.xl};
    }
  }
  
  h4 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
  
  h5 {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
  
  h6 {
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
  
  // Paragraphs and text
  p {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.colors.gray};
    line-height: 1.7;
  }
  
  // Links
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.fast};
    
    &:hover {
      color: ${({ theme }) => theme.colors.primaryDark};
    }
  }
  
  // Lists
  ul, ol {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    padding-left: ${({ theme }) => theme.spacing.md};
  }
  
  li {
    margin-bottom: ${({ theme }) => theme.spacing.xs};
    color: ${({ theme }) => theme.colors.gray};
  }
  
  // Code
  code {
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 0.875em;
    background-color: ${({ theme }) => theme.colors.light};
    padding: 0.125rem 0.25rem;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
    color: ${({ theme }) => theme.colors.primary};
  }
  
  pre {
    font-family: ${({ theme }) => theme.fonts.mono};
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.light};
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    overflow-x: auto;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
  
  // Form elements
  input, textarea, select {
    font-family: inherit;
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
  
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    outline: none;
    transition: ${({ theme }) => theme.transitions.base};
  }
  
  // Focus styles for accessibility  
  button:focus-visible,
  a:focus-visible,
  input:focus-visible,
  textarea:focus-visible,
  select:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
  
  // Scrollbar styling (webkit browsers)
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.light};
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.gray};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    
    &:hover {
      background: ${({ theme }) => theme.colors.primary};
    }
  }
  
  // Selection
  ::selection {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
  
  // Utility classes
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.md};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      padding: 0 ${({ theme }) => theme.spacing.sm};
    }
  }
  
  .section {
    padding: ${({ theme }) => theme.spacing['4xl']} 0;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      padding: ${({ theme }) => theme.spacing['3xl']} 0;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      padding: ${({ theme }) => theme.spacing['2xl']} 0;
    }
  }
  
  .text-center {
    text-align: center;
  }
  
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;