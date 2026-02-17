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
    aboutDescription: `Computer Science graduate and Junior Software Engineer at The ARK Networks with hands-on experience developing scalable web applications using React, Next.js, TypeScript, and PostgreSQL. Proven ability to mentor others and work across the full development stack. Passionate about clean, maintainable code and innovative software solutions.
    
    Currently focused on developing and maintaining user-facing features for production applications while collaborating with designers and backend engineers in an Agile environment. Beyond my professional work, I've had the privilege of mentoring 15+ students in web development fundamentals, achieving a 90%+ completion rate through personalized, project-based learning approaches. This diverse experience has strengthened my ability to communicate complex technical concepts clearly and work effectively in collaborative environments.`,
  };
  
  export const skills = {
    languages: [
      { name: "Java", level: 95 },
      { name: "C", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "PHP", level: 85 },
      { name: "Python", level: 80 },
    ],
    frontend: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "SCSS", level: 85 },
      { name: "Bootstrap", level: 85 },

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
      { name: "Firebase", level: 75 },
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
      liveUrl: "https://math-adventure-game.onrender.com/",
      image: "/images/MathAdventureGame.png",
      category: "Educational",
    },

    {
      id: 2,
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
      liveUrl: "https://youtools-br.com/",
      image: "/images/YouTools.png",
      category: "Productivity",
    },
    {
      id: 3,
      title: "CaniCat",
      description: "Premium pet services platform with modern UI/UX design and content management system for dynamic service showcases.",
      technologies: ["React", "Next.js", "Firebase", "SCSS"],
      features: [
        "Professional website for pet services",
        "Modern UI/UX design with responsive layout",
        "Content management system for dynamic service showcases",
        "Mobile and web app development capabilities"
      ],
      githubUrl: "",
      liveUrl: "https://canicat.clinic/",
      image: "/images/canicatimage.png",
      category: "Business",
    },
    
   
    
    {
      id: 4,
      title: "Share Space",
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
      image: "/images/ShareSpace.png",
      category: "Social Platform",
    },
   
    {
      id: 6,
      title: "Programming Languages Hangman",
      description: "Interactive React-based hangman game where wrong guesses kill programming languages, and Assembly wins in the end.",
      technologies: ["React", "JavaScript", "CSS3"],
      features: [
        "Interactive hangman gameplay with programming theme",
        "Visual representation of languages 'dying' with wrong guesses",
        "Assembly language emerges victorious at game end",
        "Responsive design with smooth animations"
      ],
      githubUrl: "https://github.com/karimmenem/ProgrammingLanguages-Hangman.git",
      liveUrl: "https://programming-languages-hangman-1o3whurzm.vercel.app",
      image: "/images/AssemblyEndgame.png",
      category: "Game",
    },
  ];
  
  export const experience = [
    {
      id: 1,
      title: "Junior Software Engineer",
      company: "The ARK Networks",
      period: "Sep 2025 – Present",
      location: "Hamra, Beirut, Lebanon",
      description: "Developed and maintained user-facing features for a production web application using React, Next, and TypeScript. Improved application performance and stability through bug fixes and component optimization while collaborating with designers and backend engineers in an Agile environment.",
      achievements: [
        "Developed and maintained user-facing features for a production web application using React, Next, and TypeScript",
        "Improved application performance and stability by fixing bugs and optimizing existing components",
        "Collaborated with designers and backend engineers in an Agile team environment to deliver end-to-end features"
      ],
      type: "work",
      logo: "/images/thearklogo.jpeg"
    },
    {
      id: 2,
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
      type: "internship",
      logo: "/images/IDS.png"
    },
    {
      id: 3,
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
      type: "teaching",
      logo: "/images/laulogosmall.png"
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