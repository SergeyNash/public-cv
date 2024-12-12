import { Location, Road } from '../types/game';

export const locations: Location[] = [
  {
    id: 'junior-dev',
    x: 50,
    y: 50,
    title: 'Junior Developer',
    description: 'First steps into professional software development',
    sections: [
      {
        title: 'Role Overview',
        content: 'Started as a Junior Developer at TechCorp, focusing on front-end development and bug fixes. Worked closely with senior developers to understand best practices and coding standards.'
      },
      {
        title: 'Key Responsibilities',
        content: 'Maintained existing React applications, fixed UI bugs, and implemented new features under supervision. Participated in code reviews and daily stand-ups.'
      },
      {
        title: 'Learning & Growth',
        content: 'Mastered Git workflow, learned React ecosystem, and improved debugging skills. Completed multiple training courses on modern web development.'
      }
    ],
    techStack: ['React', 'JavaScript', 'HTML/CSS', 'Git'],
    achievements: [
      'Reduced bug backlog by 30%',
      'Implemented responsive design for main product',
      'Created reusable component library'
    ]
  },
  {
    id: 'mid-level',
    x: 250,
    y: 150,
    title: 'Mid-Level Developer',
    description: 'Growing into a more independent role',
    sections: [
      {
        title: 'Role Evolution',
        content: 'Promoted to Mid-Level Developer after demonstrating strong technical skills and initiative. Started leading smaller projects and mentoring junior developers.'
      },
      {
        title: 'Project Leadership',
        content: 'Led the development of a new customer portal, managing both technical implementation and coordination with stakeholders. Introduced automated testing practices.'
      },
      {
        title: 'Technical Growth',
        content: 'Deepened expertise in system architecture, performance optimization, and DevOps practices. Became the go-to person for React performance issues.'
      }
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Docker'],
    achievements: [
      'Reduced application load time by 40%',
      'Implemented CI/CD pipeline',
      'Led team of 3 junior developers'
    ]
  },
  {
    id: 'tech-lead',
    x: 450,
    y: 250,
    title: 'Technical Lead',
    description: 'Taking on technical leadership responsibilities',
    sections: [
      {
        title: 'Leadership Role',
        content: 'Transitioned to Technical Lead position, responsible for technical direction and team growth. Balanced coding with mentorship and architectural decisions.'
      },
      {
        title: 'System Architecture',
        content: 'Designed and implemented microservices architecture, improving system scalability and maintenance. Led migration from monolith to microservices.'
      },
      {
        title: 'Team Development',
        content: 'Established technical training program, coding standards, and review processes. Grew team from 5 to 12 developers while maintaining high code quality.'
      }
    ],
    techStack: ['Microservices', 'Kubernetes', 'AWS', 'System Design'],
    achievements: [
      'Successfully migrated to microservices',
      'Reduced deployment time by 70%',
      'Implemented scalable architecture'
    ]
  },
  {
    id: 'senior-dev',
    x: 450,
    y: 450,
    title: 'Senior Developer',
    description: 'Mastering the craft of software development',
    sections: [
      {
        title: 'Technical Excellence',
        content: 'Achieved Senior Developer position, focusing on complex system design and optimization. Led architectural decisions for next-generation products.'
      },
      {
        title: 'Innovation Leadership',
        content: 'Spearheaded adoption of new technologies and methodologies. Created framework for evaluating and integrating new tools and practices.'
      },
      {
        title: 'Knowledge Sharing',
        content: 'Established internal tech talks and documentation practices. Regular speaker at tech conferences and author of technical blog posts.'
      }
    ],
    techStack: ['System Architecture', 'Cloud Native', 'Performance Optimization', 'Team Leadership'],
    achievements: [
      'Architected cloud-native platform',
      'Published technical white papers',
      'Mentored 20+ developers'
    ]
  }
];

export const roads: Road[] = [
  {
    from: 'junior-dev',
    to: 'mid-level',
    points: [
      [50, 50],
      [250, 150]
    ]
  },
  {
    from: 'mid-level',
    to: 'tech-lead',
    points: [
      [250, 150],
      [450, 250]
    ]
  },
  {
    from: 'tech-lead',
    to: 'senior-dev',
    points: [
      [450, 250],
      [450, 450]
    ]
  }
];