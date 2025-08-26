import React, { useState, useEffect } from 'react';
import { NavbarContainer, NavbarWrapper, Logo, NavMenu, NavItem, NavLink, MobileMenuButton, MobileMenu } from './Navbar.styles';
import { navItems, personalInfo } from '../../utils/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (href) => {
    setIsOpen(false);
    
   
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <NavbarContainer $scrolled={scrolled}>
      <NavbarWrapper className="container">
        <Logo href="#hero" onClick={(e) => {
          e.preventDefault();
          handleNavClick('#hero');
        }}>
          {personalInfo.name}
        </Logo>

       
        <NavMenu>
          {navItems.map((item, index) => (
            <NavItem key={index}>
              <NavLink 
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.name}
              </NavLink>
            </NavItem>
          ))}
        </NavMenu>

       
        <MobileMenuButton onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </MobileMenuButton>

        
        <MobileMenu $isOpen={isOpen}>
          {navItems.map((item, index) => (
            <NavItem key={index}>
              <NavLink 
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.name}
              </NavLink>
            </NavItem>
          ))}
        </MobileMenu>
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;