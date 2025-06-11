import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiGithub, 
  FiExternalLink, 
  FiCode, 
  FiStar,
  FiUsers,
  FiTrendingUp,
  FiPlay
} from 'react-icons/fi';
import {
  ProjectsContainer,
  ProjectsContent,
  ProjectsHeader,
  ProjectsTitle,
  ProjectsSubtitle,
  ProjectsGrid,
  ProjectCard,
  ProjectImageContainer,
  ProjectImage,
  ProjectOverlay,
  ProjectContent,
  ProjectCategory,
  ProjectTitle,
  ProjectDescription,
  ProjectTech,
  TechTag,
  ProjectFeatures,
  FeatureItem,
  ProjectLinks,
  ProjectLink,
  ProjectStats,
  StatItem,
  StatIcon,
  StatText
} from './Projects.styles';
import { projects } from '../../utils/constants';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [hoveredProject, setHoveredProject] = useState(null);

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

  // Mock project stats for visual appeal
  const getProjectStats = (projectId) => {
    const statsMap = {
      1: { stars: "2.3k", users: "500+", commits: "150+" },
      2: { stars: "1.8k", users: "300+", commits: "120+" },
      3: { stars: "1.2k", users: "200+", commits: "80+" }
    };
    return statsMap[projectId] || { stars: "1k+", users: "100+", commits: "50+" };
  };

  return (
    <ProjectsContainer id="projects" className="section">
      <ProjectsContent className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <ProjectsHeader>
            <motion.div variants={itemVariants}>
              <ProjectsTitle>Featured Projects</ProjectsTitle>
            </motion.div>
            <motion.div variants={itemVariants}>
              <ProjectsSubtitle>
                A showcase of my technical skills through real-world applications
              </ProjectsSubtitle>
            </motion.div>
          </ProjectsHeader>

          <ProjectsGrid>
            {projects.map((project, index) => {
              const stats = getProjectStats(project.id);
              
              return (
                <motion.div key={project.id} variants={itemVariants}>
                  <ProjectCard
                    as={motion.div}
                    onHoverStart={() => setHoveredProject(project.id)}
                    onHoverEnd={() => setHoveredProject(null)}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectImageContainer>
                      <ProjectImage>
                        <FiCode size={60} />
                      </ProjectImage>
                      <ProjectOverlay $isVisible={hoveredProject === project.id}>
                        <ProjectStats>
                          <StatItem>
                            <StatIcon><FiStar /></StatIcon>
                            <StatText>{stats.stars}</StatText>
                          </StatItem>
                          <StatItem>
                            <StatIcon><FiUsers /></StatIcon>
                            <StatText>{stats.users}</StatText>
                          </StatItem>
                          <StatItem>
                            <StatIcon><FiTrendingUp /></StatIcon>
                            <StatText>{stats.commits}</StatText>
                          </StatItem>
                        </ProjectStats>
                      </ProjectOverlay>
                    </ProjectImageContainer>

                    <ProjectContent>
                      <ProjectCategory>{project.category}</ProjectCategory>
                      <ProjectTitle>{project.title}</ProjectTitle>
                      <ProjectDescription>{project.description}</ProjectDescription>

                      <ProjectTech>
                        {project.technologies.map((tech, techIndex) => (
                          <TechTag key={techIndex}>{tech}</TechTag>
                        ))}
                      </ProjectTech>

                      <ProjectFeatures>
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <FeatureItem key={featureIndex}>
                            <FiPlay size={12} />
                            {feature}
                          </FeatureItem>
                        ))}
                      </ProjectFeatures>

                      <ProjectLinks>
                        {project.githubUrl && (
                          <ProjectLink
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            $primary={false}
                          >
                            <FiGithub />
                            Code
                          </ProjectLink>
                        )}
                        {project.liveUrl ? (
                          <ProjectLink
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            $primary={true}
                          >
                            <FiExternalLink />
                            Live Demo
                          </ProjectLink>
                        ) : (
                          <ProjectLink
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            $primary={true}
                          >
                            <FiGithub />
                            View Project
                          </ProjectLink>
                        )}
                      </ProjectLinks>
                    </ProjectContent>
                  </ProjectCard>
                </motion.div>
              );
            })}
          </ProjectsGrid>
        </motion.div>
      </ProjectsContent>
    </ProjectsContainer>
  );
};

export default Projects;