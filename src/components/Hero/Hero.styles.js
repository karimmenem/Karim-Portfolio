import styled from 'styled-components';

export const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${({ theme }) => theme.colors.gradientPrimary};
  background-size: 400% 400%;
  animation: heroGradient 8s ease infinite;
  overflow: hidden;
  padding-top: 80px;
  padding-bottom: 100px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(30, 144, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 140, 0, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @keyframes heroGradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;


export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 80px);
  position: relative;
  z-index: 2;
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem;
  background: ${({ theme }) => theme.colors.surface};
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: 
    0 25px 50px rgba(30, 144, 255, 0.15),
    0 0 0 1px ${({ theme }) => theme.colors.border};
  border: 1px solid ${({ theme }) => theme.colors.border};
  
  @media (max-width: 768px) {
    margin: 1rem;
    padding: 2rem;
  }
`;

export const HeroText = styled.div`
  text-align: center;
  max-width: 100%;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: ${({ theme }) => theme.colors.gradientPrimary};
    border-radius: 2px;
    animation: shimmer 2s ease-in-out infinite;
  }
  
  @keyframes shimmer {
    0%, 100% { opacity: 0.7; transform: translateX(-50%) scale(1); }
    50% { opacity: 1; transform: translateX(-50%) scale(1.1); }
  }
`;

export const HeroSubtitle = styled.p`
  font-size: ${({ $large, theme }) => $large ? theme.fontSizes['2xl'] : theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  position: relative;
  
  ${({ $large }) => $large && `
    background: ${({ theme }) => theme.colors.gradientSecondary};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 600;
  `}
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ $large, theme }) => $large ? theme.fontSizes.xl : theme.fontSizes.lg};
  }
`;

export const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['6xl']};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  background: ${({ theme }) => theme.colors.gradientPrimary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.1;
  letter-spacing: -0.02em;
  animation: textFloat 3s ease-in-out infinite;
  
  @keyframes textFloat {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['4xl']};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
  }
`;

export const HeroDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textMid};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fontSizes.base};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.sm};
    align-items: center;
  }
`;

export const PrimaryButton = styled.button`
  background: ${({ theme }) => theme.colors.gradientPrimary};
  color: white;
  border: none;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(30, 144, 255, 0.3);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(30, 144, 255, 0.4);
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 200px;
  }
`;

export const SecondaryButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.textHigh};
  border: 2px solid ${({ theme }) => theme.colors.textHigh};
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: ${({ theme }) => theme.colors.gradientPrimary};
    transition: width 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    color: white;
    border-color: transparent;
    transform: translateY(-3px);
    
    &::before {
      width: 100%;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 200px;
    justify-content: center;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.textHigh};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.gradientPrimary};
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-5px) scale(1.1);
    box-shadow: 0 10px 25px rgba(30, 144, 255, 0.3);
    color: white;
    
    &::before {
      opacity: 1;
    }
    
    svg {
      position: relative;
      z-index: 1;
    }
  }
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 30px;
  left: calc(50% - 80px);
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.textMid};
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateX(-50%) translateY(-5px);
  }
  
  span {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    text-transform: uppercase;
    letter-spacing: 1px;
    white-space: nowrap;
  }
  
  svg {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    bottom: 20px;
  }
`;