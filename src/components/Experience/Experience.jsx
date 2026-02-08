import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiBriefcase, 
  FiUsers, 
  FiMapPin, 
  FiCalendar,
  FiAward,

} from 'react-icons/fi';
import {
  ExperienceContainer,
  ExperienceContent,
  ExperienceHeader,
  ExperienceTitle,
  ExperienceSubtitle,
  TimelineContainer,
  TimelineItem,
  TimelineDot,
  TimelineLine,
  ExperienceCard,
  ExperienceIcon,
  ExperienceDetails,
  ExperienceRole,
  ExperienceCompany,
  ExperienceLocation,
  ExperiencePeriod,
  ExperienceDescription,
  AchievementsList,
  AchievementItem,
  SkillsUsed,
  SkillTag,
  
  EducationSection,
  EducationCard,
  EducationIcon,
  EducationDetails,
  EducationDegree,
  EducationInstitution,
  CertificationsSection,
  CertificationItem
} from './Experience.styles';
import { experience, education, certifications } from '../../utils/constants';

const Experience = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };



  const getExperienceIcon = (type) => {
    return type === 'teaching' ? FiUsers : FiBriefcase;
  };

  const getSkillsFromExperience = (exp) => {
    if (exp.type === 'teaching') {
      return ['JavaScript', 'HTML', 'CSS', 'Teaching', 'Mentoring'];
    }
    return ['React', 'Laravel', 'PostgreSQL', 'APIs', 'Testing'];
  };

  return (
    <ExperienceContainer id="experience" className="section">
      <ExperienceContent className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <ExperienceHeader>
            <motion.div variants={itemVariants}>
              <ExperienceTitle>Professional Experience</ExperienceTitle>
            </motion.div>
            <motion.div variants={itemVariants}>
              <ExperienceSubtitle>
                My journey through software development and education
              </ExperienceSubtitle>
            </motion.div>
          </ExperienceHeader>

          {/* Stats Overview */}
          {/* <motion.div variants={itemVariants}>
            <StatsGrid>
              {experienceStats.map((stat, index) => (
                <StatCard
                  key={index}
                  as={motion.div}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <StatIcon $color={stat.color}>
                    <stat.icon />
                  </StatIcon>
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ))}
            </StatsGrid>
          </motion.div> */}

          {/* Experience Timeline */}
          <TimelineContainer>
            {experience.map((exp, index) => {
              const IconComponent = getExperienceIcon(exp.type);
              
              return (
                <TimelineItem key={exp.id}>
                  <TimelineDot
                    as={motion.div}
                    variants={itemVariants}
                    $isActive={index === 0}
                    $type={exp.type}
                  >
                    <IconComponent />
                  </TimelineDot>
                  
                  {index < experience.length - 1 && <TimelineLine />}
                  
                  <ExperienceCard
                    as={motion.div}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ExperienceIcon $type={exp.type} $hasLogo={exp.logo}>
                      {exp.logo ? (
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                      ) : null}
                      <div className="fallback-icon">
                        <IconComponent />
                      </div>
                    </ExperienceIcon>
                    
                    <ExperienceDetails>
                      <ExperienceRole>{exp.title}</ExperienceRole>
                      <ExperienceCompany>{exp.company}</ExperienceCompany>
                      
                      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                        <ExperienceLocation>
                          <FiMapPin />
                          {exp.location}
                        </ExperienceLocation>
                        <ExperiencePeriod>
                          <FiCalendar />
                          {exp.period}
                        </ExperiencePeriod>
                      </div>
                      
                      <ExperienceDescription>
                        {exp.description}
                      </ExperienceDescription>
                      
                      <AchievementsList>
                        {exp.achievements.map((achievement, achIndex) => (
                          <AchievementItem key={achIndex}>
                            <FiAward />
                            {achievement}
                          </AchievementItem>
                        ))}
                      </AchievementsList>
                      
                      <SkillsUsed>
                        {getSkillsFromExperience(exp).map((skill, skillIndex) => (
                          <SkillTag key={skillIndex} $type={exp.type}>
                            {skill}
                          </SkillTag>
                        ))}
                      </SkillsUsed>
                    </ExperienceDetails>
                  </ExperienceCard>
                </TimelineItem>
              );
            })}
          </TimelineContainer>

          {/* Education Section */}
          <EducationSection>
            <motion.div variants={itemVariants}>
              <h3>Education</h3>
            </motion.div>
            
            {education.map((edu, index) => (
              <motion.div key={index} variants={itemVariants}>
                <EducationCard
                  as={motion.div}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <EducationIcon $hasLogo={edu.logo}>
                    {edu.logo ? (
                      <img 
                        src={edu.logo} 
                        alt={`${edu.institution} logo`}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className="fallback-icon">
                      <FiAward />
                    </div>
                  </EducationIcon>
                  <EducationDetails>
                    <EducationDegree>{edu.degree}</EducationDegree>
                    <EducationInstitution>{edu.institution}</EducationInstitution>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6b7280' }}>
                        <FiMapPin size={14} />
                        {edu.location}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6b7280' }}>
                        <FiCalendar size={14} />
                        {edu.period}
                      </span>
                      <span style={{ 
                        backgroundColor: '#10b981', 
                        color: 'white', 
                        padding: '0.25rem 0.75rem', 
                        borderRadius: '9999px', 
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>
                        {edu.status}
                      </span>
                    </div>
                  </EducationDetails>
                </EducationCard>
              </motion.div>
            ))}
          </EducationSection>

          {/* Certifications */}
          <CertificationsSection>
            <motion.div variants={itemVariants}>
              <h3>Certifications</h3>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {certifications.map((cert, index) => (
                  <CertificationItem
                    key={index}
                    as={motion.div}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiAward />
                    <div>
                      <strong>{cert.name}</strong>
                      <span>{cert.issuer} • {cert.year}</span>
                    </div>
                  </CertificationItem>
                ))}
              </div>
            </motion.div>
          </CertificationsSection>
        </motion.div>
      </ExperienceContent>
    </ExperienceContainer>
  );
};

export default Experience;