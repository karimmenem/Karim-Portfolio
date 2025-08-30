export const personalInfo = {
    name: "Karim Menem",
    title: "Software & Full-Stack Developer",
    location: "Beirut, Lebanon",
    phone: "+961 71 254771",
    email: "karimmenem2@gmail.com",
    github: "https://github.com/karimmenem",
    linkedin: "http://linkedin.com/in/karim-menem-b49630290",
    
    // Hero section
    tagline: "Building scalable web applications with clean, maintainable code",
    heroDescription: "Computer Science graduate passionate about creating innovative software solutions. I specialize in full-stack development and love mentoring others in their coding journey.",
    
    // About section
    aboutDescription: `Computer Science graduate with hands-on experience in software development, developing scalable web applications using React, Laravel, and PostgreSQL. Proven ability to mentor others and work across the full development stack. Passionate about clean, maintainable code and innovative software solutions.
    
    Beyond coding, I've had the privilege of mentoring 15+ students in web development fundamentals, achieving a 90%+ completion rate through personalized, project-based learning approaches. This teaching experience has strengthened my ability to communicate complex technical concepts clearly and work effectively in collaborative environments.`,
  };
  
  export const skills = {
    languages: [
      { name: "Java", level: 95 },
      { name: "C", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "PHP", level: 85 },
      { name: "Python", level: 80 },
    ],
    frontend: [
      { name: "React", level: 90 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Bootstrap", level: 85 },
      { name: "EJS", level: 75 },
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "Laravel", level: 80 },
      { name: "RESTful APIs", level: 90 },
    ],
    databases: [
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "SQL Server", level: 80 },
    ],
    tools: [
      { name: "Git", level: 90 },
      { name: "AWS", level: 75 },
      { name: "Unit Testing", level: 80 },
      { name: "Debugging", level: 90 },
    ],
  };
  
  export const projects = [
    {
      id: 1,
      title: "Math Adventure Game",
      description: "Interactive educational platform gamifying math learning for children with dynamic level progression and achievement system.",
      technologies: ["React", "Node.js", "Express.js"],
      features: [
        "Dynamic level progression with player tracking",
        "Achievement system and progress analytics",
        "Responsive UI with adaptive difficulty algorithm",
        "Interactive math challenges for different age groups"
      ],
      githubUrl: "https://github.com/karimmenem/math_adventure_game",
      liveUrl: "https://math-adventure-game.onrender.com/", // Add if you have a deployed version
      image: "/images/MathAdventureGame.png", // Add your image to public/images/
      category: "Educational",
    },
    {
      id: 2,
      title: "Share Space Platform",
      description: "Full-stack social platform for content creation and sharing with secure authentication and real-time features.",
      technologies: ["Laravel", "PHP", "PostgreSQL"],
      features: [
        "Secure authentication with role-based access control",
        "Real-time content sharing and interactions",
        "Optimized database queries for performance",
        "Content moderation and user management system"
      ],
      githubUrl: "https://github.com/karimmenem/Community-Sharing",
      liveUrl: "",
      image: "/images/ShareSpace.png", // Add your image to public/images/
      category: "Social Platform",
    },
    {
      id: 3,
      title: "ChefMania Recipe Platform",
      description: "Recipe-sharing community with intelligent algorithms for monthly highlights and advanced search capabilities.",
      technologies: ["PHP", "React"],
      features: [
        "Voting and ranking system for recipes",
        "Intelligent algorithm for monthly highlights",
        "Advanced search and filtering system",
        "User profile tracking and contributor recognition"
      ],
      githubUrl: "", // No GitHub repository available
      liveUrl: "",
      image: "/images/ChefMania.png", // No image available - will show fallback
      category: "Community",
    },
    {
      id: 4,
      title: "Programming Languages Hangman",
      description: "Interactive React-based hangman game where wrong guesses kill programming languages, and Assembly wins in the end.",
      technologies: ["React", "JavaScript", "CSS3"],
      features: [
        "Interactive hangman gameplay with programming theme",
        "Visual representation of languages 'dying' with wrong guesses",
        "Assembly language emerges victorious at game end",
        "Responsive design with smooth animations"
      ],
      githubUrl: "https://github.com/karimmenem/ProgrammingLanguages-Hangman.git", // Add your GitHub link when ready
      liveUrl: "",
      image: "/images/AssemblyEndgame.png", // Add your image to public/images/
      category: "Game",
    },
    {
      id: 5,
      title: "YouTools",
      description: "E-commerce platform selling high-quality hardware tools (e.g., Ingco and other top brands), featuring a product catalog, secure checkout, order tracking, and user reviews.",
      technologies: ["Node.js", "Express.js", "YouTube API", "React"],
      features: [
        "Product catalog of Ingco and other top-brand tools",
        "Secure checkout with multiple payment options",
        "Order tracking dashboard",
        "Customer reviews and ratings"
      ],
      githubUrl: "https://github.com/karimmenem/YouTools",
      liveUrl: "",
      image: "/images/YouTools.png", // Add YourTools image to public/images/
      category: "Productivity",
    },
  ];
  
  export const experience = [
    {
      id: 1,
      title: "Full-Stack Developer (Intern)",
      company: "Integrated Digital Systems",
      period: "December 2024 – January 2025",
      location: "Beirut, Lebanon",
      description: "Developed scalable web applications using React, Laravel, and PostgreSQL in an agile environment.",
      achievements: [
        "Developed scalable web applications using React, Laravel, and PostgreSQL",
        "Built RESTful APIs following industry best practices",
        "Collaborated in agile environment with code reviews and sprint planning",
        "Implemented testing strategies and performance optimization"
      ],
      type: "internship"
    },
    {
      id: 2,
      title: "Web Development Instructor",
      company: "Freelance",
      period: "August 2022 – January 2024",
      location: "Remote",
      description: "Mentored 15+ students in web development fundamentals with personalized curricula and project-based learning.",
      achievements: [
        "Mentored 15+ students in HTML, CSS, and JavaScript fundamentals",
        "Designed custom curricula with hands-on projects adapted to individual learning styles",
        "Achieved 90%+ student completion rate through project-based learning approach",
        "Developed teaching materials and assessment strategies"
      ],
      type: "teaching"
    },
  ];
  
  export const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Lebanese American University",
      location: "Beirut, Lebanon",
      period: "2022 – 2025",
      status: "Graduated",
      logo: "/images/Lau.png", // Add LAU logo to public/images/
      gpa: "", // Add if you want to include
    },
  ];
  
  export const certifications = [
    {
      name: "Integrated Digital Systems Full-Stack Development Internship Certificate",
      issuer: "Integrated Digital Systems",
      year: "2025",
    },
    {
      name: "The Complete Full-Stack Web Development Bootcamp",
      issuer: "Udemy",
      year: "2025",
    },
    {
      name: "Advanced React Certificate",
      issuer: "Scrimba",
      year: "2025",
    },
  ];
  
  export const languages = [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Fluent" },
  ];
  
  // Navigation items
  export const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];