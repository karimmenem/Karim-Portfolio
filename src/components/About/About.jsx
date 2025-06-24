import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiUsers, FiAward, FiTarget, FiHeart, FiZap } from 'react-icons/fi';
import {
  AboutContainer,
  AboutContent,
  AboutHero,
  AboutImage,
  AboutText,
  AboutTitle,
  AboutDescription,
  AboutHighlight,
  MetricsGrid,
  MetricCard,
  MetricNumber,
  MetricLabel,
  ValuesSection,
  ValueItem,
  ValueIcon,
  ValueText,
  JourneySection,
  JourneyTitle,
  JourneySteps,
  JourneyStep,
  StepNumber,
  StepContent,
  StepTitle,
  StepDescription
} from './About.styles';
import { personalInfo } from '../../utils/constants';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
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

  const metrics = [
    { number: "15+", label: "Students Mentored", icon: FiUsers },
    { number: "90%", label: "Success Rate", icon: FiTarget },
    { number: "2+", label: "Years Experience", icon: FiCode },
    { number: "10+", label: "Projects Built", icon: FiZap }
  ];

  const values = [
    {
      icon: FiCode,
      text: "Clean, maintainable code that scales"
    },
    {
      icon: FiUsers,
      text: "Mentoring others and sharing knowledge"
    },
    {
      icon: FiHeart,
      text: "Passionate about innovative solutions"
    }
  ];

  const journeySteps = [
    {
      title: "Started Teaching",
      description: "Began mentoring students in web development, discovering my passion for education and communication."
    },
    {
      title: "Computer Science",
      description: "Pursued formal education at Lebanese American University, building strong technical foundations."
    },
    {
      title: "Industry Experience",
      description: "Completed internship at Integrated Digital Systems, applying skills in real-world projects."
    },
    {
      title: "Ready for Impact",
      description: "Now seeking to contribute to innovative teams and continue growing as a software engineer."
    }
  ];

  return (
    <AboutContainer id="about" className="section">
      <AboutContent className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <AboutHero>
            <AboutImage
              as={motion.div}
              variants={itemVariants}
            >
              <div className="image-container">
                <img 
                  src="/images/karim-profile.jpg" 
                  alt="Karim Menem"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="fallback-placeholder">
                  <FiCode size={80} />
                  <span>Karim Menem</span>
                </div>
              </div>
            </AboutImage>

            <AboutText>
              <motion.div variants={itemVariants}>
                <AboutTitle>About Me</AboutTitle>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <AboutDescription>
                  <p>
                    I'm a <AboutHighlight>Computer Science graduate</AboutHighlight> with a unique blend 
                    of technical expertise and teaching experience. My journey combines hands-on software 
                    development with a passion for mentoring others.
                  </p>
                  <p>
                    What sets me apart is my ability to <AboutHighlight>communicate complex technical concepts clearly</AboutHighlight> - 
                    a skill honed through successfully mentoring 15+ students with a 90%+ completion rate.
                  </p>
                  <p>
                    I specialize in full-stack development using modern technologies like React, Laravel, 
                    and PostgreSQL, always focusing on <AboutHighlight>clean, maintainable code</AboutHighlight> and 
                    innovative problem-solving approaches.
                  </p>
                </AboutDescription>
              </motion.div>
            </AboutText>
          </AboutHero>

          <motion.div variants={itemVariants}>
            <MetricsGrid>
              {metrics.map((metric, index) => (
                <MetricCard
                  key={index}
                  as={motion.div}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <metric.icon size={32} />
                  <MetricNumber>{metric.number}</MetricNumber>
                  <MetricLabel>{metric.label}</MetricLabel>
                </MetricCard>
              ))}
            </MetricsGrid>
          </motion.div>

          <ValuesSection>
            <motion.div variants={itemVariants}>
              <h3>What Drives Me</h3>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div>
                {values.map((value, index) => (
                  <ValueItem
                    key={index}
                    as={motion.div}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ValueIcon>
                      <value.icon />
                    </ValueIcon>
                    <ValueText>{value.text}</ValueText>
                  </ValueItem>
                ))}
              </div>
            </motion.div>
          </ValuesSection>

          <JourneySection>
            <motion.div variants={itemVariants}>
              <JourneyTitle>My Journey</JourneyTitle>
            </motion.div>
            <JourneySteps>
              {journeySteps.map((step, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <JourneyStep
                    as={motion.div}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <StepNumber>{index + 1}</StepNumber>
                    <StepContent>
                      <StepTitle>{step.title}</StepTitle>
                      <StepDescription>{step.description}</StepDescription>
                    </StepContent>
                  </JourneyStep>
                </motion.div>
              ))}
            </JourneySteps>
          </JourneySection>
        </motion.div>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;