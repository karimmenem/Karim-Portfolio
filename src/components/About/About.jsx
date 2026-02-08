import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode} from 'react-icons/fi';
import {
  AboutContainer,
  AboutContent,
  AboutHero,
  AboutImage,
  AboutText,
  AboutTitle,
  AboutDescription,
  AboutHighlight,

  JourneySection,
  JourneyTitle,
  JourneySteps,
  JourneyStep,
  StepNumber,
  StepContent,
  StepTitle,
  StepDescription
} from './About.styles';


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
      title: "Junior Software Engineer",
      description: "Currently at The ARK Networks, developing and maintaining production web applications using React, Next.js, and TypeScript in an Agile environment."
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
                    I'm a <AboutHighlight>Junior Software Engineer at The ARK Networks</AboutHighlight>, where I develop and maintain user-facing features for production web applications using React, Next.js, and TypeScript. As a <AboutHighlight>Computer Science graduate</AboutHighlight>, I bring both technical depth and a unique perspective shaped by mentoring 15+ students in web development.
                  </p>
                  <p>
                    What truly sets me apart is my ability to <AboutHighlight>bridge the gap between technical excellence and clear communication</AboutHighlight>. In my current role, I collaborate seamlessly with designers and backend engineers in an Agile environment, delivering end-to-end features while continuously optimizing performance and stability. This collaborative mindset stems from my teaching experience, where I achieved a 90%+ student completion rate by breaking down complex concepts into actionable, project-based learning.
                  </p>
                  <p>
                    I'm passionate about building <AboutHighlight>scalable, maintainable solutions</AboutHighlight> that not only solve immediate problems but scale with growing demands. My full-stack expertise spans React, Next.js, Laravel, PostgreSQL, and modern development practices—all in service of creating software that makes an impact and can be understood, maintained, and improved by others.
                  </p>
                </AboutDescription>
              </motion.div>
            </AboutText>
          </AboutHero>

          {/* <motion.div variants={itemVariants}>
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
          </motion.div> */}

          {/* <ValuesSection>
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
          </ValuesSection> */}

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