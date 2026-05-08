export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  jobType: string;
  salaryRange: string;
  experience: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
  postedDate: string;
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Remote",
    jobType: "Full-time",
    salaryRange: "$120,000 - $160,000",
    experience: "5+ years",
    description: "We are looking for an experienced Full-Stack Developer to join our growing engineering team. You'll work on cutting-edge technologies and mentor junior developers.",
    responsibilities: [
      "Design and develop scalable web applications using Node.js and React",
      "Collaborate with product and design teams to implement new features",
      "Write clean, maintainable code and perform code reviews",
      "Optimize application performance and ensure best practices",
      "Participate in architectural decisions and technical planning"
    ],
    qualifications: [
      "5+ years of professional development experience",
      "Strong proficiency in JavaScript/TypeScript",
      "Experience with React and Node.js",
      "Solid understanding of database design and SQL",
      "Experience with Git and CI/CD pipelines",
      "Excellent communication and teamwork skills"
    ],
    benefits: [
      "Competitive salary and stock options",
      "Health insurance and dental coverage",
      "Remote work flexibility",
      "Professional development budget",
      "Collaborative work environment"
    ],
    postedDate: "2026-04-15"
  },
  {
    id: "2",
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
    jobType: "Full-time",
    salaryRange: "$100,000 - $140,000",
    experience: "3+ years",
    description: "Lead the product strategy and development for our core platform. You'll work cross-functionally with engineering, design, and marketing teams.",
    responsibilities: [
      "Define product strategy and roadmap",
      "Conduct user research and gather market insights",
      "Work with engineering to scope and prioritize features",
      "Analyze metrics and drive data-informed decisions",
      "Present product updates to stakeholders and customers"
    ],
    qualifications: [
      "3+ years of product management experience",
      "Strong analytical and problem-solving skills",
      "Experience with B2B or SaaS products",
      "Familiarity with technical concepts",
      "Excellent written and verbal communication",
      "Project management expertise"
    ],
    benefits: [
      "Competitive salary and bonuses",
      "Health, dental, and vision insurance",
      "Office in NYC with flexible remote options",
      "Free lunch and snacks",
      "Learning and development opportunities"
    ],
    postedDate: "2026-04-10"
  },
  {
    id: "3",
    title: "UX/UI Designer",
    department: "Design",
    location: "San Francisco, CA",
    jobType: "Full-time",
    salaryRange: "$90,000 - $130,000",
    experience: "2+ years",
    description: "Join our design team to create beautiful and intuitive user experiences for our platform used by thousands of companies worldwide.",
    responsibilities: [
      "Design user interfaces for web and mobile applications",
      "Conduct user research and usability testing",
      "Create wireframes, prototypes, and high-fidelity designs",
      "Collaborate with product and engineering teams",
      "Maintain and evolve design systems"
    ],
    qualifications: [
      "2+ years of UX/UI design experience",
      "Proficiency in design tools like Figma or Sketch",
      "Strong portfolio demonstrating design thinking",
      "Understanding of user-centered design principles",
      "Experience with design systems",
      "Attention to detail and pixel-perfect design"
    ],
    benefits: [
      "Competitive salary",
      "Comprehensive health benefits",
      "Remote-friendly culture",
      "Creative freedom and autonomy",
      "Latest design tools and software"
    ],
    postedDate: "2026-04-05"
  },
  {
    id: "4",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    jobType: "Full-time",
    salaryRange: "$110,000 - $150,000",
    experience: "4+ years",
    description: "Build and maintain infrastructure that powers our platform. You'll work with containerization, cloud platforms, and automation tools.",
    responsibilities: [
      "Design and maintain cloud infrastructure on AWS/GCP",
      "Implement CI/CD pipelines and automation",
      "Monitor system performance and ensure reliability",
      "Implement security best practices",
      "Document infrastructure and processes"
    ],
    qualifications: [
      "4+ years of DevOps or systems engineering experience",
      "Proficiency with Kubernetes and Docker",
      "Experience with AWS or GCP",
      "Strong understanding of Linux systems",
      "Experience with Infrastructure as Code (Terraform, Ansible)",
      "Knowledge of security practices"
    ],
    benefits: [
      "Attractive salary and performance bonuses",
      "100% remote work",
      "Health and wellness benefits",
      "Technical conference attendance budget",
      "Sabbatical opportunities"
    ],
    postedDate: "2026-03-28"
  },
  {
    id: "5",
    title: "Data Analyst",
    department: "Analytics",
    location: "Boston, MA",
    jobType: "Full-time",
    salaryRange: "$80,000 - $120,000",
    experience: "2+ years",
    description: "Help us make data-driven decisions by analyzing complex datasets and creating actionable insights for business stakeholders.",
    responsibilities: [
      "Create dashboards and reports for key metrics",
      "Analyze data to identify trends and opportunities",
      "Work with SQL and analytics tools",
      "Present findings to non-technical stakeholders",
      "Optimize data collection and reporting processes"
    ],
    qualifications: [
      "2+ years of data analysis experience",
      "Strong SQL skills",
      "Proficiency with analytics tools (Tableau, Looker, etc.)",
      "Strong Excel skills",
      "Understanding of statistical concepts",
      "Excellent communication skills"
    ],
    benefits: [
      "Competitive salary",
      "Comprehensive benefits package",
      "Flexible work schedule",
      "Professional development allowance",
      "Collaborative team environment"
    ],
    postedDate: "2026-03-22"
  },
  {
    id: "6",
    title: "QA Engineer",
    department: "Quality Assurance",
    location: "Austin, TX",
    jobType: "Full-time",
    salaryRange: "$70,000 - $100,000",
    experience: "2+ years",
    description: "Ensure quality by developing and executing comprehensive test strategies. Build automated testing frameworks and ensure software excellence.",
    responsibilities: [
      "Develop and execute test plans and test cases",
      "Create and maintain automated test suites",
      "Identify and document software defects",
      "Collaborate with developers to resolve issues",
      "Test new features and enhancements"
    ],
    qualifications: [
      "2+ years of QA experience",
      "Experience with test automation tools",
      "Knowledge of testing methodologies",
      "Familiarity with JavaScript or Python for automation",
      "Understanding of CI/CD pipelines",
      "Attention to detail"
    ],
    benefits: [
      "Competitive salary",
      "Health and dental insurance",
      "Relocation assistance",
      "Team building events",
      "Career development opportunities"
    ],
    postedDate: "2026-03-15"
  }
];
