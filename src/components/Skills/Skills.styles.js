import styled from 'styled-components';

export const SkillsContainer = styled.section`
  background: ${({ theme }) => theme.colors.backgroundPrimary};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -10%;
    width: 300px;
    height: 300px;
    background: ${({ theme }) => `radial-gradient(circle, ${theme.colors.secondary}08, transparent 70%)`};
    border-radius: 50%;
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -30%;
    right: -5%;
    width: 400px;
    height: 400px;
    background: ${({ theme }) => `radial-gradient(circle, ${theme.colors.primary}08, transparent 70%)`};
    border-radius: 50%;
    pointer-events: none;
  }
`;

export const SkillsContent = styled.div`
  position: relative;
  z-index: 2;
`;

export const SkillsHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
`;

export const SkillsTitle = styled.h2`
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 5px;
    background: ${({ theme }) => theme.colors.gradientPrimary};
    border-radius: ${({ theme }) => theme.borderRadius.full};
  }
`;

export const SkillsSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.gray};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const SkillCategory = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid ${({ theme }) => theme.colors.lightGray}20;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  will-change: transform;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ $color }) => $color || '#2563eb'};
    transform: ${({ $isActive }) => $isActive ? 'scaleX(1)' : 'scaleX(0)'};
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }
`;

export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  svg:last-child {
    margin-left: auto;
    color: ${({ theme }) => theme.colors.gray};
    transition: transform 0.3s ease;
  }
  
  ${SkillCategory}:hover & svg:last-child {
    transform: translateX(5px);
  }
`;

export const CategoryIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${({ $color }) => $color || '#2563eb'}15;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ $color }) => $color || '#2563eb'};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  flex-shrink: 0;
  
  svg {
    margin: auto;
  }
`;

export const CategoryTitle = styled.h3`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin: 0;
`;

export const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const SkillName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  span {
    font-weight: ${({ theme }) => theme.fontWeights.medium};
    color: ${({ theme }) => theme.colors.dark};
    font-size: ${({ theme }) => theme.fontSizes.base};
  }
`;

export const SkillPercentage = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm} !important;
  color: ${({ theme }) => theme.colors.gray} !important;
  font-weight: ${({ theme }) => theme.fontWeights.medium} !important;
`;

export const SkillLevel = styled.div`
  width: 100%;
`;

export const SkillBar = styled.div`
  width: 100%;
  height: 8px;
  background: ${({ theme }) => theme.colors.lightGray}30;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  overflow: hidden;
  position: relative;
`;

export const SkillProgress = styled.div`
  height: 100%;
  background: ${({ $color, theme }) => 
    $color ? `linear-gradient(90deg, ${$color}, ${$color}dd)` : theme.colors.gradientPrimary
  };
  border-radius: ${({ theme }) => theme.borderRadius.full};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${SkillCategory}:hover &::after {
    opacity: 1;
    animation: shimmer 1.5s ease-in-out;
  }
  
  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;