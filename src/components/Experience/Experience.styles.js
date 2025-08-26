import styled from 'styled-components';

export const ExperienceContainer = styled.section`
  background: ${({ theme }) => theme.colors.white};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 20%;
    right: -10%;
    width: 400px;
    height: 400px;
    background: ${({ theme }) => `radial-gradient(circle, ${theme.colors.secondary}06, transparent 70%)`};
    border-radius: 50%;
    pointer-events: none;
  }
`;

export const ExperienceContent = styled.div`
  position: relative;
  z-index: 2;
`;

export const ExperienceHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
`;

export const ExperienceTitle = styled.h2`
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

export const ExperienceSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.gray};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const StatCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid ${({ theme }) => theme.colors.lightGray}20;
  transition: all 0.3s ease;
  will-change: transform;
  
  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }
`;

export const StatIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: ${({ $color }) => $color}15;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  color: ${({ $color }) => $color};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin: 0 auto ${({ theme }) => theme.spacing.md};
`;

export const StatNumber = styled.div`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.extrabold};
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const StatLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const TimelineContainer = styled.div`
  position: relative;
  margin: ${({ theme }) => theme.spacing['4xl']} 0;
`;

export const TimelineItem = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const TimelineDot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: ${({ $isActive, theme }) => 
    $isActive ? theme.colors.gradientPrimary : theme.colors.white};
  border: 3px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  color: ${({ $isActive, theme }) => 
    $isActive ? theme.colors.white : theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  position: relative;
  z-index: 3;
  flex-shrink: 0;
  margin-right: ${({ theme }) => theme.spacing.xl};
  box-shadow: 0 4px 15px ${({ theme }) => theme.colors.primary}30;
`;

export const TimelineLine = styled.div`
  position: absolute;
  left: 29px;
  top: 60px;
  bottom: -48px;
  width: 2px;
  background: ${({ theme }) => theme.colors.lightGray};
  z-index: 1;
`;

export const ExperienceCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  padding: ${({ theme }) => theme.spacing['2xl']};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid ${({ theme }) => theme.colors.lightGray}20;
  flex: 1;
  transition: all 0.3s ease;
  will-change: transform;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${({ theme }) => theme.colors.gradientPrimary};
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.3s ease;
  }
  
  &:hover::before {
    transform: scaleY(1);
  }
  
  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }
`;

export const ExperienceIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${({ $type, theme }) => 
    $type === 'teaching' ? theme.colors.secondary : theme.colors.primary}15;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ $type, theme }) => 
    $type === 'teaching' ? theme.colors.secondary : theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ExperienceDetails = styled.div`
  position: relative;
  z-index: 2;
`;

export const ExperienceRole = styled.h3`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const ExperienceCompany = styled.h4`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ExperienceLocation = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const ExperiencePeriod = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const ExperienceDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.fontSizes.base};
`;

export const AchievementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 ${({ theme }) => theme.spacing.lg} 0;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const AchievementItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: 1.5;
  
  svg {
    color: ${({ theme }) => theme.colors.secondary};
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

export const SkillsUsed = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-top: ${({ theme }) => theme.spacing.md};
`;

export const SkillTag = styled.span`
  background: ${({ $type, theme }) => 
    $type === 'teaching' ? theme.colors.secondary : theme.colors.primary}10;
  color: ${({ $type, theme }) => 
    $type === 'teaching' ? theme.colors.secondary : theme.colors.primary};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.sm}`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: 1px solid ${({ $type, theme }) => 
    $type === 'teaching' ? theme.colors.secondary : theme.colors.primary}20;
`;

export const EducationSection = styled.div`
  margin: ${({ theme }) => theme.spacing['4xl']} 0 ${({ theme }) => theme.spacing['3xl']} 0;
  
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

export const EducationCard = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
  border: 1px solid ${({ theme }) => theme.colors.lightGray}20;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  transition: all 0.3s ease;
  will-change: transform;
  
  &:hover {
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

export const EducationIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: ${({ theme, $hasLogo }) => $hasLogo ? theme.colors.white : theme.colors.gradientSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  flex-shrink: 0;
  border: ${({ $hasLogo, theme }) => $hasLogo ? `2px solid ${theme.colors.lightGray}` : 'none'};
  box-shadow: ${({ theme }) => theme.shadows.md};
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: ${({ theme }) => theme.spacing.sm};
    display: block;
  }
  
  .fallback-icon {
    display: ${({ $hasLogo }) => $hasLogo ? 'none' : 'flex'};
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;

export const EducationDetails = styled.div`
  flex: 1;
`;

export const EducationDegree = styled.h4`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const EducationInstitution = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const CertificationsSection = styled.div`
  margin: ${({ theme }) => theme.spacing['2xl']} 0 0 0;
  
  h3 {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
    color: ${({ theme }) => theme.colors.dark};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
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
  }
`;

export const CertificationItem = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.05);
  border: 1px solid ${({ theme }) => theme.colors.lightGray}20;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  transition: all 0.3s ease;
  will-change: transform;
  
  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  }
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    flex-shrink: 0;
  }
  
  div {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xs};
    
    strong {
      color: ${({ theme }) => theme.colors.dark};
      font-weight: ${({ theme }) => theme.fontWeights.semibold};
    }
    
    span {
      color: ${({ theme }) => theme.colors.gray};
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }
`;