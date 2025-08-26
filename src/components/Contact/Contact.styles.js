import styled from 'styled-components';

export const ContactContainer = styled.section`
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 20%;
    left: -10%;
    width: 400px;
    height: 400px;
    background: ${({ theme }) => `radial-gradient(circle, ${theme.colors.primary}06, transparent 70%)`};
    border-radius: 50%;
    pointer-events: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 10%;
    right: -10%;
    width: 300px;
    height: 300px;
    background: ${({ theme }) => `radial-gradient(circle, ${theme.colors.secondary}06, transparent 70%)`};
    border-radius: 50%;
    pointer-events: none;
  }
`;

export const ContactContent = styled.div`
  position: relative;
  z-index: 2;
`;

export const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
`;

export const ContactTitle = styled.h2`
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

export const ContactSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.gray};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['4xl']};
  align-items: start;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing['3xl']};
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 2;
  }
`;

export const LocationCard = styled.div`
  background: ${({ theme }) => theme.colors.backgroundCard};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid ${({ theme }) => theme.colors.lightGray}20;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  transition: all 0.3s ease;
  will-change: transform;
  
  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }
`;

export const LocationIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.colors.gradientPrimary};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  flex-shrink: 0;
`;

export const LocationDetails = styled.div`
  flex: 1;
`;

export const LocationTitle = styled.h3`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const LocationTime = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  
  svg {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const ResponseTime = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.secondary}10;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.secondary}20;
  
  svg {
    color: ${({ theme }) => theme.colors.secondary};
    flex-shrink: 0;
  }
  
  span {
    color: ${({ theme }) => theme.colors.dark};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  }
`;

export const ContactMethod = styled.a`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);
  border: 1px solid ${({ theme }) => theme.colors.lightGray}20;
  text-decoration: none;
  transition: all 0.3s ease;
  will-change: transform;
  
  &:hover {
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

export const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${({ $color }) => $color}15;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ $color }) => $color};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  flex-shrink: 0;
`;

export const ContactDetails = styled.div`
  flex: 1;
`;

export const ContactLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const ContactValue = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.base};
  color: ${({ theme }) => theme.colors.dark};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.lg} 0;
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightGray}30;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.gray};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    box-shadow: 0 8px 20px ${({ theme }) => theme.colors.primary}30;
  }
`;

export const ContactForm = styled.form`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  padding: ${({ theme }) => theme.spacing['2xl']};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid ${({ theme }) => theme.colors.lightGray}20;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: 1;
  }
`;

export const FormTitle = styled.h3`
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

export const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const FormLabel = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const FormInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ $hasError, theme }) => 
    $hasError ? theme.colors.error : theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-family: inherit;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.dark};
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ $hasError, theme }) => 
    $hasError ? theme.colors.error : theme.colors.lightGray};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-family: inherit;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.dark};
  transition: all 0.3s ease;
  resize: vertical;
  min-height: 120px;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const FormButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ $status, theme }) => {
    if ($status === 'success') return theme.colors.success;
    if ($status === 'error') return theme.colors.error;
    return theme.colors.gradientPrimary;
  }};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
  transition: all 0.3s ease;
  opacity: ${({ disabled }) => disabled ? 0.7 : 1};
  
  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
`;

export const FormStatus = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-align: center;
  
  ${({ $status, theme }) => {
    if ($status === 'success') {
      return `
        background: ${theme.colors.success}15;
        color: ${theme.colors.success};
        border: 1px solid ${theme.colors.success}30;
      `;
    }
    if ($status === 'error') {
      return `
        background: ${theme.colors.error}15;
        color: ${theme.colors.error};
        border: 1px solid ${theme.colors.error}30;
      `;
    }
    return `
      background: ${theme.colors.primary}15;
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary}30;
    `;
  }}
`;