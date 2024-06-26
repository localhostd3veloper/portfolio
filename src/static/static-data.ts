import {
  dashboardImg1,
  dashboardImg2,
  landingImg,
  landingImg2,
  loginImg,
  registerImg,
  macosXImg,
  paperGenImg,
  ticketlessImg,
  netflixImg,
  netflixImg2,
  macosXImg2,
} from '../assets/_index';
import { IProject } from '../components/ProjectCard';

export const socialMediaLinks = [
  {
    name: 'Github',
    link: 'https://github.com/localhostd3veloper',
    icon: 'fab fa-github',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/gautam-anand16/',
    icon: 'fab fa-linkedin',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/gautamm.exe/',
    icon: 'fab fa-instagram',
  },
  {
    name: 'Hackerrank',
    link: 'https://www.hackerrank.com/gautam_anand',
    icon: 'fab fa-hackerrank',
  },
  {
    name: 'Dev To',
    link: 'https://www.dev.to/localhostd3veloper',
    icon: 'fab fa-dev',
  },
];

export const typeWriterText = [
  'Tech Enthusiast',
  'Frontend Developer',
  'Full Stack Developer',
  'Guitarist',
  'Photographer',
  'Blogger',
];

export const sidebarOptions = [
  {
    name: 'Home',
    link: '#',
    icon: 'fas fa-crown',
  },
  {
    name: 'About',
    link: '#about',
    icon: 'fas fa-heart',
  },
  {
    name: 'Projects',
    link: '#projects',
    icon: 'fas fa-code',
  },
  {
    name: 'Blogs',
    link: '#blogs',
    icon: 'fab fa-dev',
  },
  {
    name: 'Experience',
    link: '#experience',
    icon: 'fas fa-briefcase',
  },
  {
    name: 'Contact',
    link: '#contact',
    icon: 'fas fa-envelope',
  },
];

export const projectsData: IProject[] = [
  {
    name: 'Institute Dashboard',
    description:
      'Institute Dashboard for DOT100 for scheduling, monitoring, evaluating and managing students and ongoing examinations',
    techStack: ['React', 'NodeJS', 'Express', 'MongoDB'],
    projectURL: 'http://dashboard.dot100.in',
    imageURLs: [loginImg, dashboardImg1, dashboardImg2],
  },
  {
    name: 'TicketLess',
    description:
      'A web application that allows users to book tickets for heritage sites.',
    techStack: ['React', 'Python', 'FastAPI', 'MongoDB'],
    projectURL: 'https://devcubes-ticketless-66427.web.app/',
    imageURLs: [ticketlessImg],
  },
  {
    name: 'Question Paper Generator',
    description:
      'A Question Paper Generator that generates Question Papers for institutes and universities using AI.',
    techStack: ['React', 'NodeJS', 'Express', 'MongoDB'],
    projectURL: 'http://generator.dot100.in',
    imageURLs: [registerImg, paperGenImg, landingImg2],
  },
  {
    name: 'Mac OS Clone',
    description: 'A clone of the Mac OS desktop. It is a static website',
    techStack: ['React', 'TailwindCSS', 'LottieFiles'],
    projectURL: 'https://mac-os-clone-ten.vercel.app/',
    imageURLs: [macosXImg, macosXImg2],
  },

  {
    name: 'Netflix Landing Page',
    description: 'A clone of the Netflix landing page. It is a static website',
    techStack: ['React', 'TailwindCSS'],
    projectURL: 'https://netflix-clone-2022-chi.vercel.app/',
    imageURLs: [netflixImg, netflixImg2],
  },
  {
    name: 'Coming Soon Page',
    description: 'A coming soon landing page. It is a static website',
    techStack: ['React', 'TailwindCSS'],
    projectURL: 'https://scan-ai.vercel.app/',
    imageURLs: [landingImg],
  },
];

export const experienceItems = [
  {
    title: 'Sep 2023 - Present', // Date
    cardTitle: 'Full Stack Engineer', // Job Title
    cardSubtitle: 'Freelance', // Company Name
    cardDetailedText: `Full Stack Engineer. I am currently working on the development of a web application using JS/TS, Node.js, and React for several clients. I am also working on my personal projects.`,
    url: 'https://www.upwork.com',
  },
  {
    title: 'Oct 2022 - Dec 2022', // Date
    cardTitle: 'Frontend Developer', // Job Title
    cardSubtitle: 'Treacle Tech.', // Company Name
    cardDetailedText: `
    Replicated complex Figma designs using various frameworks on react. Collaborating with cross-functional teams to define, design, and ship new features. Practiced various cyber security concepts and types of attacks on virtual
    machines and docker containers.`,
    url: 'https://www.treacletech.com/',
  },
  {
    title: 'July 2022 - Sep 2022', // Date
    cardTitle: 'Software Developer', // Job Title
    cardSubtitle: 'Listnr, Inc.', // Company Name
    cardDetailedText: `Replicating complex UI's from the wireframes and parallelly writing logic for the same. Improved the lighthouse score by reducing the overall bundle size of the webpack which made the platform 30% faster. Co-authored pull requests on GitHub with other engineers on the team`,
    url: 'https://www.listnr.tech/',
  },
  {
    title: 'Feb 2022 - Jul 2022', // Date
    cardTitle: 'Full Stack Developer & Chatbot Expert', // Job Title
    cardSubtitle: 'Botosynthesis®', // Company Name
    cardDetailedText: `Writing bug-free, modular and reusable code for developing Full Stack Applications. Supervising Interns in developing AI-based chatbots on various platforms like - WhatsApp, Facebook Messenger, Instagram, etc. Using the Botosynthesis.ai platform, I created rule-based chatbots with extra automation features`,
    url: 'https://www.botosynthesis.ai/',
  },
  {
    title: 'Oct 2020 - Jan 2022',
    cardTitle: 'Full Stack Web Developer Intern',
    cardSubtitle: 'Botosynthesis®',
    cardDetailedText: `Developed fully-fledged Full-Stack Applications collaborating with other
    engineers for various companies using MERN.
    Developed complex conversational APIs and Algorithms. I've also played a major
    role at the the backend of a few conventional AI platforms.
    Working on projects and simultaneously creating SDLC for the same`,
    url: 'https://www.botosynthesis.ai/',
  },
];

export const blogs = [
  {
    name: 'Javascript Essentials 👨🏼‍💻',
    description: 'A collection of Javascript Essentials',
    hashtags: ['#javascript', '#codenewbie', '#webdev', '#programming'],
    url: 'https://dev.to/localhostd3veloper/javascript-essentials-40he',
    imgURL:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--n9WDlzPs--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cikhxmaw2liabhjj4ojp.JPG',
  },
  {
    name: 'Map, Filter and Reduce in Javascript 👨🏼‍💻',
    description: 'A collection of Higher Order Functions',
    hashtags: ['#javascript', '#codenewbie', '#programming', '#tutorial'],
    url: 'https://dev.to/localhostd3veloper/map-filter-and-reduce-in-javascript-51fj',
    imgURL:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--Ss1S5NL4--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3ruql1kl0atctnan11sp.JPG',
  },
  {
    name: 'Javascript Sort: Simplified 👨🏼‍💻',
    description: 'From Basics to writing your own Compartor function',
    hashtags: ['#compartor', '#javascript', '#webdev', '#tutorial'],
    url: 'https://dev.to/localhostd3veloper/javascript-sort-simplified-akm',
    imgURL:
      'https://res.cloudinary.com/practicaldev/image/fetch/s--COZnqmKo--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pvtyjw1hku0xp7pfsfio.JPG',
  },
];
