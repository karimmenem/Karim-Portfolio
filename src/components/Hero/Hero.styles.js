import styled from 'styled-components';

export const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${({ theme }) => theme.colors.gradientHero};
  overflow: hidden;
  padding-top: 80px; // Account for fixed navbar
  padding-bottom: 100px; // Space for scroll indicator
`;

export const BackgroundElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
`;

export const FloatingElement = styled.div`
  position: absolute;
  width: ${({ $size = 100 }) => $size}px;
  height: ${({ $size = 100 }) => $size}px;
  border-radius: 50%;
  background: ${({ theme }) => `linear-gradient(45deg, ${theme.colors.primary}20, ${theme.colors.secondary}20)`};
  backdrop-filter: blur(10px);
  
  &:nth-child(1) {
    top: 20%;
    left: 10%;
    width: 120px;
    height: 120px;
    animation-delay: ${({ $delay }) => $delay || 0}s;
  }
  
  &:nth-child(2) {
    top: 60%;
    right: 15%;
    width: 80px;
    height: 80px;
    animation-delay: ${({ $delay }) => $delay || 1}s;
  }
  
  &:nth-child(3) {
    bottom: 20%;
    left: 20%;
    width: 60px;
    height: 60px;
    animation-delay: ${({ $delay }) => $delay || 2}s;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
  position: relative;
  z-index: 2;
`;

export const HeroText = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

export const HeroSubtitle = styled.p`
  font-size: ${({ $large, theme }) => $large ? theme.fontSizes['2xl'] : theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ $large, theme }) => $large ? theme.fontSizes.xl : theme.fontSizes.lg};
  }
`;

export const HeroTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['6xl']};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.white} 0%, ${({ theme }) => theme.colors.lightGray} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  line-height: 1.1;
  
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
  color: ${({ theme }) => theme.colors.lightGray};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  
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
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.base};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  
  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.xl};
    transform: translateY(-2px);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 200px;
  }
`;

export const SecondaryButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.base};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  
  &:hover {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.dark};
    transform: translateY(-2px);
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
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  transition: ${({ theme }) => theme.transitions.base};
  backdrop-filter: blur(10px);
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
  }
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: -10px;
  left: calc(50% - 78px);
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.lightGray};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.base};
  z-index: 10;
  
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    transform: translateX(-50%) translateY(-5px);
  }
  
  span {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  svg {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    bottom: -8px;
    left: calc(50% - 70px);
  }
`;