import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiUsers, FiAward, FiTrendingUp } from 'react-icons/fi';
import {
  AboutContainer,
  AboutContent,
  AboutGrid,
  AboutText,
  AboutTitle,
  AboutDescription,
  StatsGrid,
  StatCard,
  StatNumber,
  StatLabel,
  StatIcon,
  HighlightCards,
  HighlightCard,
  CardIcon,
  CardTitle,
  CardDescription
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

  const stats = [
    { number: "15+", label: "Students Mentored", icon: FiUsers },
    { number: "90%", label: "Completion Rate", icon: FiTrendingUp },
    { number: "3+", label: "Years Teaching", icon: FiAward },
    { number: "10+", label: "Projects Built", icon: FiCode }
  ];

  const highlights = [
    {
      icon: FiCode,
      title: "Full-Stack Developer",
      description: "Experienced in both frontend and backend development with modern technologies like React, Laravel, and PostgreSQL."
    },
    {
      icon: FiUsers,
      title: "Teaching & Mentoring",
      description: "Passionate about sharing knowledge, having successfully mentored 15+ students with a 90%+ completion rate."
    },
    {
      icon: FiAward,
      title: "Recent Graduate",
      description: "Fresh Computer Science graduate from Lebanese American University with hands-on industry experience."
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
          <AboutGrid>
            <AboutText>
              <motion.div variants={itemVariants}>
                <AboutTitle>About Me</AboutTitle>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <AboutDescription>
                  <p>
                    <strong>Computer Science graduate</strong> with hands-on experience in software development, 
                    developing scalable web applications using React, Laravel, and PostgreSQL. Proven ability to 
                    mentor others and work across the full development stack.
                  </p>
                  <p>
                    <strong>Passionate about clean, maintainable code</strong> and innovative software solutions. 
                    Beyond coding, I've had the privilege of mentoring 15+ students in web development fundamentals, 
                    achieving a 90%+ completion rate through personalized, project-based learning approaches.
                  </p>
                  <p>
                    This teaching experience has strengthened my ability to <strong>communicate complex technical concepts clearly</strong> 
                    and work effectively in collaborative environments, making me not just a developer, but a team player 
                    who can bridge the gap between technical and non-technical stakeholders.
                  </p>
                </AboutDescription>
              </motion.div>

              <motion.div variants={itemVariants}>
                <StatsGrid>
                  {stats.map((stat, index) => (
                    <StatCard
                      key={index}
                      as={motion.div}
                      variants={itemVariants}
                      whileHover={{ y: -5 }}
                    >
                      <StatIcon>
                        <stat.icon />
                      </StatIcon>
                      <StatNumber>{stat.number}</StatNumber>
                      <StatLabel>{stat.label}</StatLabel>
                    </StatCard>
                  ))}
                </StatsGrid>
              </motion.div>
            </AboutText>

            <HighlightCards>
              {highlights.map((highlight, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <HighlightCard
                    as={motion.div}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardIcon>
                      <highlight.icon />
                    </CardIcon>
                    <CardTitle>{highlight.title}</CardTitle>
                    <CardDescription>{highlight.description}</CardDescription>
                  </HighlightCard>
                </motion.div>
              ))}
            </HighlightCards>
          </AboutGrid>
        </motion.div>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;