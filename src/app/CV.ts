import { ICompany, IContact, IWorkExperience } from '@curriculum-vitae/core';


const KnC: ICompany = {
  name: 'Krusche & Company'
};

const Sciforce: ICompany = {
  name: 'Sciforce',
  location: 'Lviv'
};

/**
 *
 */

interface CVModel {
  title: string;
  description: string;
  aboutMe: string;
  contacts: IContact[],
  workExperience: IWorkExperience[]
}

/**
 *
 */

export const CV: CVModel = {
  title: 'Roman Yanush',
  description: 'Angular Developer, Full stack developer',
  aboutMe: 'Web Developer specializing in full stack development. Experienced with all stages of the development cycle for dynamic web projects. Well-versed in numerous programming languages including HTML5, JavaScript (TypeScript), CSS (SCSS, SASS, LESS), Python 3 (Django, DRF), OOP, SOLID and utils like JIRA, Confluence, Agile, Git. Strong background in project management and deployment, customer relations.',
  contacts: [
    { title: 'roman.yanush7@gmail.com', url: 'mailto:roman.yanush7@gmail.com' },
    { title: 'https://www.linkedin.com/in/roman-yanush', url: 'https://www.linkedin.com/in/roman-yanush' }
  ],
  workExperience: [
    {
      company: 'Krusche & Company',
      dates: ['Jun 2023', 'Feb 2024'],
      project: {
        name: 'Shipsta',
        url: '#'
      },
      position: 'Angular developer',
      description: 'Worked on an enterprise system for searching and building logistics routes.',
      responsibilities: [
        'Integrated Angular into monolith Java app.',
        'New features designing and developing.',
        'App optimization, bugfixing.',
        'Participated in demo reviews and communicated with the stakeholders.',
        'Unit test development and management.',
        'Conducted code reviews to ensure adherence to coding standards and improve overall code quality.',
        'Mentored junior developers on best practices for Angular development, fostering a supportive team environment.',
        'Developed reusable UI components using Angular libraries, promoting code consistency across projects while reducing development time significantly.',
      ],
      stack: [
        {type: 'script', name: 'Typescript'},
        {type: 'angular', name: 'Angular (v14)'},
        {type: 'script', name: 'Nx'},
        {type: 'script', name: 'Jest'},
      ],
    },
    {
      company: 'Krusche & Company',
      dates: ['Jan 2022', 'Jun 2023'],
      project: {
        name: 'Ibau',
        url: '#'
      },
      position: 'Angular developer',
      description: 'Worked on an enterprise tender search system that connects different regions and countries of Europe.',
      responsibilities: [
        'Contributed towards streamlined teamwork through effective communication with developers, QA analysts, designers, and project managers.',
        'Collaborated with cross-functional teams to deliver high-quality software within tight deadlines.',
        'Integrated APIs with Angular applications, enhancing data accessibility and functionality for end users.',
        'Developed reusable UI components using Angular libraries, promoting code consistency across projects while reducing development time significantly.',
        'Implemented unit testing and end-to-end testing for Angular applications, ensuring software reliability and stability.',
        'Developed user-friendly interfaces for web applications, resulting in increased user satisfaction and engagement.',
        'Participated in demo reviews and communicated with the stakeholders',
        'Collected, defined and translated user requirements into project designs and implementation plans.',
      ],
      stack: [
        {type: 'script', name: 'Typescript'},
        {type: 'angular', name: 'Angular (v12-14)'},
        {type: 'util', name: 'AWS (Cognito user pools, AWS Amplify, SES, etc.)'},
        {type: 'util', name: 'GraphQL'},
        {type: 'util', name: 'Strapi'},
      ],
    },
    {
      company: 'Krusche & Company',
      dates: ['Sep 2021', 'Dec 2021'],
      project: {
        name: 'Vidar',
        url: '#'
      },
      position: 'Angular developer',
      description: 'Worked on an enterprise assets management system as a key developer.',
      responsibilities: [
        'Integrated APIs with Angular applications, enhancing data accessibility and functionality for end users.',
        'Developed reusable UI components using Angular libraries, promoting code consistency across projects while reducing development time significantly.',
        'Implemented unit testing and end-to-end testing for Angular applications, ensuring software reliability and stability.',
        'Developed user-friendly interfaces for web applications, resulting in increased user satisfaction and engagement.',
        'Participated in demo reviews and communicated with the stakeholders',
        'Collected, defined and translated user requirements into project designs and implementation plans.',
      ],
      stack: [
        {type: 'script', name: 'Typescript'},
        {type: 'angular', name: 'Angular (v12)'},
        {type: 'util', name: 'AWS (Cognito user pools, etc)'},
      ],
    },
    {
      company: 'Krusche & Company',
      dates: ['May 2021', 'Sep 2021'],
      project: {
        name: 'Reverso',
        url: '#'
      },
      position: 'Angular developer',
      description: 'Worked as a web developer on an enterprise translation system.',
      responsibilities: [
        'Designed intuitive graphical user interfaces to improve user experience.',
        'Conducted unit testing to deliver optimal browser functionality.',
        'Crafted SEO strategy and intuitive interface for site to achieve prominent rankings across top browser platforms.',
        'Performed unit testing of web applications and troubleshot issues.',
      ],
      stack: [
        {type: 'script', name: 'Typescript'},
        {type: 'angular', name: 'Angular (v11)'},
        {type: 'angular', name: 'Angular Universal'},
        {type: 'util', name: 'Webpack'},
        {type: 'style', name: 'SCSS'},
      ],
    },
    {
      company: 'Sciforce',
      dates: ['May 2018', 'May 2021'],
      project: {
        name: 'Transparent Language, Inc.',
        url: 'https://www.transparent.com/',
      },
      position: 'Angular developer',
      description: 'Worked as an outstaff developer in a customer’s team on an enterprise education system for language courses and managing interactive learning that is used in schools, libraries, military centers and as a free to-use service.',
      responsibilities: [
        'Remained up-to-date with industry trends in front-end technologies, adopting new strategies as needed to maintain cutting-edge skillset.',
        'Designed responsive web layouts using CSS frameworks, providing seamless user experience across devices.',
        'Reduced code complexity and improved maintainability by refactoring legacy Angular codebases.',
        'Developed software for desktop and mobile operating systems.',
        'Requirements clarification and communication with the stakeholders',
        'Collaborated with cross-functional teams to deliver high-quality software within tight deadlines.',
      ],
      stack: [
        {type: 'script', name: 'Typescript'},
        {type: 'angular', name: 'Angular (v4-11)'},
        {type: 'util', name: 'Webpack'},
        {type: 'style', name: 'SCSS'},
        {type: 'script', name: 'Node.js'},
      ],
    },
    {
      company: 'GoITeens',
      dates: ['May 2021', 'Jul 2021'],
      project: {
        name: 'GoITeens',
        url: '#',
      },
      position: 'Frontend teacher',
      description: 'Worked as a teacher for kids.',
      responsibilities: [
        `Managed classroom behavior effectively by establishing clear expectations, modeling appropriate conduct, and consistently enforcing established rules and consequences.`,
        `Supported students in developing social skills through structured activities and positive reinforcement techniques.`,
        `Enhanced classroom engagement through the use of interactive teaching methods, such as group projects and hands-on activities.`,
        `Provided one-on-one support for students with learning disabilities, enabling them to excel in their coursework.`,
        `Graded and evaluated student assignments, papers, and course work.`,
        `Kept students on-task with proactive behavior modification and positive reinforcement strategies.`,
        `Prepared quizzes, tests and examinations to gauge how well students were learning.`,
        `Scheduled conferences with parents to discuss students' progress and classroom behavior.`,
        `Completed student progress reports mid-term to notify students and parents of strengths and areas of improvement.`,
      ],
      stack: [
        {type: 'html', name: 'HTML 5'},
        {type: 'style', name: 'CSS'},
        {type: 'style', name: 'SCSS'},
      ],
    },
    {
      company: 'Nextgen',
      dates: ['Dec 2019', 'Jun 2021'],
      project: {
        name: 'Nextgen',
        url: 'https://nextgen.us.org/',
      },
      position: 'Key Full Stack Developer, TechLead',
      description: 'A US startup for an egg cell donation and surrogacy.',
      responsibilities: [
        'Developed scalable applications using modern JavaScript frameworks, resulting in increased efficiency and maintainability.',
        'Reviewed code, debugged problems, and corrected issues.',
        'Collaborated with fellow engineers to evaluate software and hardware interfaces.',
        'Analyzed existing software implementations to identify areas requiring improvement.',
        'Managed development milestones from initial steps through final delivery.',
        'Optimized web applications for speed, scalability and security.',
      ],
      stack: [
        {type: 'script', name: 'Typescript'},
        {type: 'angular', name: 'Angular (v9-11)'},
        {type: 'python', name: 'Python 3'},
        {type: 'django', name: 'Django 3'},
        {type: 'django', name: 'Django Rest Framework'},
        {type: 'util', name: 'JWT'},
      ],
    },
    {
      company: 'Sciforce',
      dates: ['Feb 2021', 'May 2021'],
      project: {
        name: 'ACCA Publishing House',
        url: 'https://www.acca.ua/',
      },
      position: 'Web developer',
      description: 'Redesigned ukrainian books E-store.',
      responsibilities: [
        'Resolved technical issues promptly, ensuring minimal disruption to website performance and user satisfaction.',
        'Established version control processes to facilitate collaborative development efforts among team members.',
        'Ensured cross-browser compatibility by utilizing progressive enhancement techniques that allowed for optimal display on a wide range of devices.',
        'Integrated third-party APIs to enhance website functionality and provide additional services to users.',
        'Implemented accessibility features to ensure compliance with ADA guidelines and improve user experience for all visitors.',
        'Enhanced user experience by implementing responsive web design and optimizing website performance.',
      ],
      stack: [
        {type: 'django', name: 'Django 1.1'},
        {type: 'script', name: 'jQuery'},
        {type: 'script', name: 'Ajax'},
        {type: 'style', name: 'SCSS'},
        {type: 'util', name: 'Gulp'},
      ],
    },
    {
      company: 'Freelance Web Developer',
      dates: ['Jan 2018', 'Present'],
      project: {
        name: 'Freelance',
        url: ''
      },
      position: 'Web developer',
      description: '',
      responsibilities: [],
      stack: [
        {type: 'html', name: 'HTML'},
        {type: 'style', name: 'CSS'},
        {type: 'style', name: 'SCSS'},
        {type: 'script', name: 'Javascript'},
        {type: 'script', name: 'Typescript'},
        {type: 'script', name: 'Node.js'},
        {type: 'angular', name: 'Angular'},
        {type: 'python', name: 'Python 3'},
        {type: 'django', name: 'Django 3'},
        {type: 'util', name: 'CI/CD'},
        {type: 'util', name: 'Nginx'},
        {type: 'util', name: 'Gulp'},
        {type: 'util', name: 'Webpack'},
      ]
    },
    {
      company: 'Own Project',
      dates: undefined,
      project: {
        name: 'Currency Tracker',
        url: 'https://currency-tracker.online/'
      },
      position: 'Full Stack developer',
      description: 'Free Ukraine popular banks currency tracking tool.',
      responsibilities: [],
      stack: [
        {type: 'script', name: 'Typescript'},
        {type: 'angular', name: 'Angular (v11-12)'},
        {type: 'python', name: 'Python 3'},
        {type: 'django', name: 'Django 3'},
        {type: 'django', name: 'Django Rest Framework'},
        {type: 'django', name: 'Beautiful Soup'},
      ]
    }
  ]
};
