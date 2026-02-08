import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  background-color: ${({ $scrolled, theme }) => 
    $scrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(8px)' : 'none'};
  border-bottom: ${({ $scrolled, theme }) => 
    $scrolled ? `1px solid ${theme.colors.border}` : 'none'};
  transition: ${({ theme }) => theme.transitions.base};
  padding: 1rem 0;
`;

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Logo = styled.a`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ $scrolled, theme }) => $scrolled ? theme.colors.primary : "white"};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.fast};
  letter-spacing: -0.5px;
  
  &:hover {
    transform: translateY(-1px);
    color: ${({ $scrolled, theme }) => $scrolled ? theme.colors.primary : "white"} !important;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 3rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const NavItem = styled.li`
  margin: 0;
`;

export const NavLink = styled.a`
  color: ${({ $scrolled, theme }) => $scrolled ? theme.colors.primary : "white"};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.base};
  text-decoration: none;
  position: relative;
  transition: ${({ theme }) => theme.transitions.fast};
  padding: 0.5rem 0;
  
  &:hover {
    color: ${({ $scrolled, theme }) => $scrolled ? theme.colors.primary : "white"} !important;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.secondary});
    transition: width ${({ theme }) => theme.transitions.fast};
  }
  
  &:hover::after {
    width: 100%;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  width: 28px;
  height: 28px;
  cursor: pointer;
  position: relative;
  padding: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
  
  span {
    width: 100%;
    height: 2.5px;
    background-color: ${({ theme }) => theme.colors.textMid};
    margin: 3px 0;
    transition: ${({ theme }) => theme.transitions.fast};
    transform-origin: center;
    border-radius: 2px;
    
    &:first-child {
      margin-top: 0;
    }
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  &:hover span {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const MobileMenu = styled.div`
  display: none;
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 2rem;
  right: 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  padding: ${({ theme }) => theme.spacing.md};
  transform: ${({ $isOpen }) => $isOpen ? 'translateY(0)' : 'translateY(-12px)'};
  opacity: ${({ $isOpen }) => $isOpen ? 1 : 0};
  visibility: ${({ $isOpen }) => $isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s cubic-bezier(0.4, 0.2, 0.2, 1);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
  
  ${NavItem} {
    margin-bottom: 0;
    
    &:last-child {
      margin-bottom: 0;
  }
`;
