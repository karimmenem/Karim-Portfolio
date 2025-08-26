import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  background-color: ${({ $scrolled, theme }) => 
    $scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${({ $scrolled, theme }) => 
    $scrolled ? `1px solid ${theme.colors.lightGray}` : 'none'};
  transition: ${({ theme }) => theme.transitions.base};
  padding: ${({ theme }) => theme.spacing.sm} 0;
`;

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const Logo = styled.a`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.dark};
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

export const NavItem = styled.li`
  margin: 0;
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.gray};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.base};
  text-decoration: none;
  position: relative;
  transition: ${({ theme }) => theme.transitions.fast};
  padding: ${({ theme }) => theme.spacing.xs} 0;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: ${({ theme }) => theme.transitions.fast};
  }
  
  &:hover::after {
    width: 100%;
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  background: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: relative;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
  
  span {
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.dark};
    margin: 2px 0;
    transition: ${({ theme }) => theme.transitions.fast};
    transform-origin: center;
    
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
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  padding: ${({ theme }) => theme.spacing.md};
  transform: ${({ $isOpen }) => $isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  opacity: ${({ $isOpen }) => $isOpen ? 1 : 0};
  visibility: ${({ $isOpen }) => $isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
  
  ${NavItem} {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    
    &:last-child {
      margin-bottom: 0;
    }
  }
  
  ${NavLink} {
    display: block;
    padding: ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};
    
    &:last-child {
      border-bottom: none;
    }
  }
`;