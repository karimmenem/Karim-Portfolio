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
  StatText,
  FilterContainer,
  FilterButton
} from './Projects.styles';
import { projects } from '../../utils/constants';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

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

  // Personal projects - no interactions/users needed
  const getProjectStats = (projectId) => {
    const statsMap = {
      1: { commits: "150+", features: "12", tech: "3" },
      2: { commits: "120+", features: "8", tech: "3" },
      3: { commits: "80+", features: "6", tech: "2" },
      4: { commits: "90+", features: "5", tech: "3" }
    };
    return statsMap[projectId] || { commits: "50+", features: "4", tech: "2" };
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
            <motion.div variants={itemVariants}>
              <FilterContainer>
                {categories.map(cat => (
                  <FilterButton
                    key={cat}
                    className={selectedCategory === cat ? 'active' : ''}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </FilterButton>
                ))}
              </FilterContainer>
            </motion.div>
          </ProjectsHeader>

          <ProjectsGrid>
            {filteredProjects.map((project, index) => {
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
                      <ProjectImage $hasImage={project.image}>
                        {project.image ? (
                          <img 
                            src={project.image} 
                            alt={project.title}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div className="fallback-icon">
                          <FiCode size={60} />
                        </div>
                      </ProjectImage>
                      <ProjectOverlay $isVisible={hoveredProject === project.id}>
                        <ProjectStats>
                          <StatItem>
                            <StatIcon><FiTrendingUp /></StatIcon>
                            <StatText>{stats.commits}</StatText>
                            <span>Commits</span>
                          </StatItem>
                          <StatItem>
                            <StatIcon><FiStar /></StatIcon>
                            <StatText>{stats.features}</StatText>
                            <span>Features</span>
                          </StatItem>
                          <StatItem>
                            <StatIcon><FiCode /></StatIcon>
                            <StatText>{stats.tech}</StatText>
                            <span>Tech Stack</span>
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
                        {project.githubUrl ? (
                          <ProjectLink
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            $primary={false}
                          >
                            <FiGithub />
                            Code
                          </ProjectLink>
                        ) : (
                          <ProjectLink
                            $disabled={true}
                            title={project.isCoursework ? "Coursework - Repository not available" : "Repository not available"}
                          >
                            <FiGithub />
                            {project.isCoursework ? "Coursework" : "Private"}
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
                        ) : project.githubUrl ? (
                          <ProjectLink
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            $primary={true}
                          >
                            <FiGithub />
                            View Project
                          </ProjectLink>
                        ) : (
                          <ProjectLink
                            $disabled={true}
                            $primary={true}
                            title="This was a coursework project"
                          >
                            <FiCode />
                            Course Project
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