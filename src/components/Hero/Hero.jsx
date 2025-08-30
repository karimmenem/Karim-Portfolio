import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { 
  HeroContainer, 
  HeroContent, 
  HeroText, 
  HeroTitle, 
  HeroSubtitle, 
  HeroDescription,
  HeroButtons,
  PrimaryButton,
  SecondaryButton,
  SocialLinks,
  SocialLink,
  ScrollIndicator
} from './Hero.styles';
import { personalInfo } from '../../utils/constants';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const handleScrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // You'll add your CV file to the public folder later
    const link = document.createElement('a');
    link.href = '/karim-menem-cv.pdf'; // Add this file to public folder
    link.download = 'Karim-Menem-CV.pdf';
    link.click();
  };

  return (
    <HeroContainer id="hero">

      <HeroContent className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <HeroText>
            <motion.div variants={itemVariants}>
              <HeroSubtitle>Hello, I'm</HeroSubtitle>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <HeroTitle>{personalInfo.name}</HeroTitle>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <HeroSubtitle $large>{personalInfo.title}</HeroSubtitle>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <HeroDescription>
                {personalInfo.heroDescription}
              </HeroDescription>
            </motion.div>

            <motion.div variants={itemVariants}>
              <HeroButtons>
                <PrimaryButton
                  as={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work
                </PrimaryButton>
                
                <SecondaryButton
                  as={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownloadCV}
                >
                  <FiDownload />
                  Download CV
                </SecondaryButton>
              </HeroButtons>
            </motion.div>

            <motion.div variants={itemVariants}>
              <SocialLinks>
                <SocialLink
                  as={motion.a}
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiGithub />
                </SocialLink>
                
                <SocialLink
                  as={motion.a}
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiLinkedin />
                </SocialLink>
                
                <SocialLink
                  as={motion.a}
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FiMail />
                </SocialLink>
              </SocialLinks>
            </motion.div>
          </HeroText>
        </motion.div>

        <ScrollIndicator
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          onClick={handleScrollToNext}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiArrowDown />
          </motion.div>
          <span>Scroll to explore</span>
        </ScrollIndicator>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;