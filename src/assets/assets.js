// React Icons imports
import { 
  FaLightbulb, 
  FaPaintBrush, 
  FaCode, 
  FaReact, 
  FaServer, 
  FaMobileAlt, 
  FaTools, 
  FaNodeJs, 
  FaStripe, 
  FaVuejs, 
  FaFire, 
  FaDatabase, 
  FaCloud, 
  FaRobot 
} from 'react-icons/fa';

// Image imports
import profileImg from './profile.png';
import projectImg1 from './project1.png';
import projectImg2 from './project2.png';
import projectImg3 from './project3.png';
import projectImg4 from './project4.png';
// import projectImg5 from './project5.avif';
// import projectImg6 from './project6.avif';

// Assets object
export const assets = {
  profileImg,
};

// About information
export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: 'Innovative',
    description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
    color: 'text-purple'
  },
  {
    icon: FaPaintBrush,
    title: 'Design Oriented',
    description: 'Beautiful design and user experience are at the heart of everything I create.',
    color: 'text-pink'
  },
  {
    icon: FaCode,
    title: 'Clean Code',
    description: 'I write maintainable, efficient code following best practices and modern patterns.',
    color: 'text-blue'
  }
];

// Skills data
export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['React',  'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express',]
  },
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Figma', 'VS Code']
  }
];

// Projects data
export const projects = [
  {
    title: "AI Financial System",
    description: "A full-featured financial web platform integrating AI-driven insights, secure authentication, and real-time payment processing.",
    image: projectImg1,
    tech: ["React", "Node.js","Firebase", "MongoDB", "Tailwind CSS"],
    icons: [FaReact, FaNodeJs, FaDatabase,],
    demo: "#",
    code: "#",
  },
  {
    title: "Agency.Ai",
    description: "A modern productivity and task management tool with real-time collaboration and drag-and-drop workflow organization.",
    image: projectImg2,
    tech: ["Vue.js", "Tailwind CSS", "React", "Node.js"],
    icons: [FaVuejs, FaFire, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    title: "Anon- Ecommerce Website",
    description: "A responsive e-commerce platform offering seamless shopping experiences with cart management and secure checkout.",
    image: projectImg3,
    tech: ["React", "Node.js", "Firebase", "Tailwind CSS"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "AI Powered Stock Price Predictor",
    description: "An intelligent web app predicting stock prices using machine learning and historical market data visualization.",
    image: projectImg4,
    tech: ["Python (ML Model)","React", "Tailwind CSS", "Framer Motion",],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  // {
  //   title: "Chat App",
  //   description: "A real-time chat application with group messaging, emojis, and file sharing.",
  //   image: projectImg5,
  //   tech: ["Socket.IO", "React", "Node.js", "MongoDB"],
  //   icons: [FaReact, FaNodeJs, FaDatabase],
  //   demo: "#",
  //   code: "#",
  // },
  // {
  //   title: "AI Image Generator",
  //   description: "Generate images using AI prompts powered by OpenAI's DALL·E model and Cloudinary.",
  //   image: projectImg6,
  //   tech: ["React", "OpenAI API", "Cloudinary", "Tailwind CSS"],
  //   icons: [FaRobot, FaReact, FaCloud],
  //   demo: "#",
  //   code: "#",
  // }
];

// Work experience data
export const workData = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2020 - Present",
    description: "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    color: "purple"
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    duration: "2018 - 2020",
    description: "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink"
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description: "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue"
  }
];
