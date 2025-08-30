import styled from 'styled-components';
// Filter controls for project categories
export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const FilterButton = styled.button`
  background: transparent;
  border: 2px solid ${({ theme, className }) =>
    className?.includes('active') ? theme.colors.primary : theme.colors.gray};
  color: ${({ theme, className }) =>
    className?.includes('active') ? theme.colors.primary : theme.colors.gray};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.fast};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ProjectsContainer = styled.section`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.light} 0%, ${({ theme }) => theme.colors.white} 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 10%;
    left: -5%;
    width: 300px;
    height: 300px;
    background: ${({ theme }) => `radial-gradient(circle, ${theme.colors.primary}08, transparent 70%)`};
    border-radius: 50%;
    pointer-events: none;
  }
`;

export const ProjectsContent = styled.div`
  position: relative;
  z-index: 2;
`;

export const ProjectsHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
`;

export const ProjectsTitle = styled.h2`
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

export const ProjectsSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.gray};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${({ theme }) => theme.spacing['2xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const ProjectCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid ${({ theme }) => theme.colors.lightGray}20;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  will-change: transform;
  
  &:hover {
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  }
`;

export const ProjectImageContainer = styled.div`
  position: relative;
  height: 200px;
  background: ${({ theme }) => theme.colors.gradientPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ProjectImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  
  .fallback-icon {
    display: ${({ $hasImage }) => $hasImage ? 'none' : 'flex'};
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.3;
  }
`;

export const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ $isVisible }) => $isVisible ? 1 : 0};
  transition: opacity 0.3s ease;
`;

export const ProjectStats = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.white};
  
  span:last-child {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    opacity: 0.8;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

export const StatIcon = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const StatText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
`;

export const ProjectContent = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
`;

export const ProjectCategory = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

export const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const TechTag = styled.span`
  background: ${({ theme }) => theme.colors.primary}10;
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: 1px solid ${({ theme }) => theme.colors.primary}20;
`;

export const ProjectFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.spacing.lg} 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  
  svg {
    color: ${({ theme }) => theme.colors.secondary};
    flex-shrink: 0;
  }
`;

export const ProjectLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-decoration: none;
  transition: all 0.3s ease;
  justify-content: center;
  flex: 1;
  cursor: ${({ $disabled }) => $disabled ? 'not-allowed' : 'pointer'};
  
  ${({ $primary, $disabled, theme }) => {
    if ($disabled) {
      return `
        background: ${theme.colors.lightGray}30;
        color: ${theme.colors.gray}60;
        border: 1px solid ${theme.colors.lightGray}30;
        opacity: 0.6;
        
        &:hover {
          background: ${theme.colors.lightGray}30;
          color: ${theme.colors.gray}60;
        }
      `;
    }
    
    return $primary ? `
      background: ${theme.colors.gradientPrimary};
      color: ${theme.colors.white};
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: ${theme.shadows.lg};
      }
    ` : `
      background: transparent;
      color: ${theme.colors.gray};
      border: 1px solid ${theme.colors.lightGray};
      
      &:hover {
        background: ${theme.colors.light};
        color: ${theme.colors.dark};
        border-color: ${theme.colors.primary};
      }
    `;
  }}
`;