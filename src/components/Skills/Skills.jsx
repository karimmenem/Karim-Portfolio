import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCode, 
  FiMonitor, 
  FiServer, 
  FiDatabase, 
  FiTool,
  FiChevronRight 
} from 'react-icons/fi';
import {
  SkillsContainer,
  SkillsContent,
  SkillsHeader,
  SkillsTitle,
  SkillsSubtitle,
  SkillsGrid,
  SkillCategory,
  CategoryHeader,
  CategoryIcon,
  CategoryTitle,
  SkillsList,
  SkillItem,
  SkillName,
  SkillLevel,
  SkillBar,
  SkillProgress,
  SkillPercentage
} from './Skills.styles';
import { skills } from '../../utils/constants';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeCategory, setActiveCategory] = useState(0);

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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.3
      }
    })
  };

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: FiCode,
      skills: skills.languages,
      color: "#2563eb"
    },
    {
      title: "Frontend Development",
      icon: FiMonitor,
      skills: skills.frontend,
      color: "#10b981"
    },
    {
      title: "Backend Development",
      icon: FiServer,
      skills: skills.backend,
      color: "#f59e0b"
    },
    {
      title: "Databases",
      icon: FiDatabase,
      skills: skills.databases,
      color: "#ef4444"
    },
    {
      title: "Tools & Technologies",
      icon: FiTool,
      skills: skills.tools,
      color: "#8b5cf6"
    }
  ];

  return (
    <SkillsContainer id="skills" className="section">
      <SkillsContent className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <SkillsHeader>
            <motion.div variants={itemVariants}>
              <SkillsTitle>Technical Skills</SkillsTitle>
            </motion.div>
            <motion.div variants={itemVariants}>
              <SkillsSubtitle>
                A comprehensive overview of my technical expertise across different domains
              </SkillsSubtitle>
            </motion.div>
          </SkillsHeader>

          <SkillsGrid>
            {skillCategories.map((category, categoryIndex) => (
              <motion.div key={categoryIndex} variants={itemVariants}>
                <SkillCategory
                  as={motion.div}
                  $isActive={activeCategory === categoryIndex}
                  $color={category.color}
                  onHoverStart={() => setActiveCategory(categoryIndex)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <CategoryHeader>
                    <CategoryIcon $color={category.color}>
                      <category.icon />
                    </CategoryIcon>
                    <CategoryTitle>{category.title}</CategoryTitle>
                    <FiChevronRight />
                  </CategoryHeader>

                  <SkillsList>
                    {category.skills.map((skill, skillIndex) => (
                      <SkillItem key={skillIndex}>
                        <SkillName>
                          <span>{skill.name}</span>
                          <SkillPercentage>{skill.level}%</SkillPercentage>
                        </SkillName>
                        <SkillLevel>
                          <SkillBar>
                            <SkillProgress
                              as={motion.div}
                              $color={category.color}
                              custom={skill.level}
                              variants={progressVariants}
                              initial="hidden"
                              animate={inView ? "visible" : "hidden"}
                            />
                          </SkillBar>
                        </SkillLevel>
                      </SkillItem>
                    ))}
                  </SkillsList>
                </SkillCategory>
              </motion.div>
            ))}
          </SkillsGrid>
        </motion.div>
      </SkillsContent>
    </SkillsContainer>
  );
};

export default Skills;