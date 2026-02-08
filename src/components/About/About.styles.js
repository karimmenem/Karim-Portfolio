import styled from 'styled-components';

export const AboutContainer = styled.section`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: ${({ theme }) => theme.colors.gradientPrimary};
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 20%;
    right: -15%;
    width: 500px;
    height: 500px;
    background: ${({ theme }) => `radial-gradient(circle, ${theme.colors.primary}05, transparent 70%)`};
    border-radius: 50%;
    pointer-events: none;
  }
`;

export const AboutContent = styled.div`
  position: relative;
  z-index: 2;
`;

export const AboutHero = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: ${({ theme }) => theme.spacing['4xl']};
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing['2xl']};
    text-align: center;
  }
`;

export const AboutImage = styled.div`
  .image-container {
    width: 280px;
    height: 280px;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
    box-shadow: 0 20px 40px ${({ theme }) => theme.colors.primary}20;
    
    &::before {
      content: '';
      position: absolute;
      inset: -4px;
      background: ${({ theme }) => theme.colors.gradientPrimary};
      border-radius: 50%;
      z-index: -1;
      opacity: 0.3;
      filter: blur(8px);
    }
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      border-radius: 50%;
    }
    
    .fallback-placeholder {
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.colors.gradientPrimary};
      color: ${({ theme }) => theme.colors.white};
      border-radius: 50%;
      position: absolute;
      top: 0;
      left: 0;
      
      span {
        font-size: ${({ theme }) => theme.fontSizes.lg};
        font-weight: ${({ theme }) => theme.fontWeights.semibold};
        margin-top: ${({ theme }) => theme.spacing.sm};
      }
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-self: center;
    
    .image-container {
      width: 200px;
      height: 200px;
    }
  }
`;

export const AboutText = styled.div``;

export const AboutTitle = styled.h2`
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 80px;
    height: 5px;
    background: ${({ theme }) => theme.colors.gradientPrimary};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: center;
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const AboutDescription = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.gray};
  
  p {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const AboutHighlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 0;
    right: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary}30;
    border-radius: 1px;
  }
`;

export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
`;

export const MetricCard = styled.div`
  background: ${({ theme }) => theme.colors.backgroundCard};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  text-align: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
  border: 1px solid ${({ theme }) => theme.colors.lightGray}20;
  transition: all 0.3s ease;
  will-change: transform;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.colors.gradientPrimary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
  
  &:hover {
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const MetricNumber = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const MetricLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const ValuesSection = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
  
  h3 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    color: ${({ theme }) => theme.colors.dark};
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    text-align: center;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background: ${({ theme }) => theme.colors.gradientSecondary};
      border-radius: ${({ theme }) => theme.borderRadius.full};
    }
  }
`;

export const ValueItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.backgroundCard};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.lightGray}20;
  transition: all 0.3s ease;
  will-change: transform;
  
  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ValueIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.gradientSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  flex-shrink: 0;
`;

export const ValueText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.dark};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const JourneySection = styled.div`
  margin-top: ${({ theme }) => theme.spacing['4xl']};
`;

export const JourneyTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: ${({ theme }) => theme.colors.gradientPrimary};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }
`;

export const JourneySteps = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const JourneyStep = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.backgroundCard};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
  border: 1px solid ${({ theme }) => theme.colors.lightGray}20;
  transition: all 0.3s ease;
  will-change: transform;
  position: relative;
  overflow: hidden;
  height: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.colors.gradientPrimary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
  
  &:hover {
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

export const StepNumber = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.gradientPrimary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  flex-shrink: 0;
`;

export const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const StepTitle = styled.h4`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  margin: 0 0 ${({ theme }) => theme.spacing.sm} 0;
`;

export const StepDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  flex: 1;
`;