import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { colors, theme } from './Theme';

// Components
import { Landing } from './components/Landing/Landing';
import { Section } from './components/Section/Section';
import { Footer } from './components/Footer/Footer';

// Images
import rally from './images/rally.png';
import rallyIcon from './images/rallyIcon.png';
import ycLogo from './images/ycLogo.png';
import portfolio from './images/portfolio.png';
import underConstruction from './images/underConstruction.png';
import breakroom from './images/breakroom.png';

// Temporary Hard Coded Data
const sections = [
  {
    header: 'About',
    pages: [
      {
        title: 'About',
        type: 'Panel',
        data: [
          {
            title: 'About',
            subtitle: 'A Jack of all Trades',
            description:
              'My passion for entrepreneurship and disruption, coupled with my desire to be a lifelong learner, makes me ready to tackle any challenge. I enjoy working on the bleeding edge of innovation. Building software and products for tomorrow. A software engineer focused on building innovative products, with privacy, security and user experience in mind. Focused on building innovative products that solve global issues. Serious about user experience and privacy.',
          },
        ],
      },
    ],
  },
  {
    header: 'Development',
    pages: [
      {
        title: 'Development',
        type: 'Panel',
        data: [
          {
            title: 'Front-End Development',
            subtitle: '"Good design makes a product useful" - Dieter Rams',
            description:
              'Although I am capable of working in any environment,  I prefer to work on the front-end, having a direct impact on the user experience. I enjoy building beautiful user interfaces with accessibility in mind, ensuring my applications are accessible to all, regardless of background, language or disability.',
            skills: ['React', 'JavaScript'],
          },
          {
            title: 'Mobile Development',
            subtitle: 'A world constantly on the move.',
            description:
              "We live in a world constantly on the move. Highly dependent on technology, it increasingly becomes more a part of us as we move from desktops, to mobile devices, to AR lenses and virtual assistants. Therefore, I believe it is crucial to design 'mobile-first.'",
            skills: ['iOS', 'Swift'],
          },
        ],
      },
      {
        title: 'TBD',
        type: 'Portfolio',
        data: {
          title: 'TBD',
          platform: 'PWA, Web, iOS, Android',
          icon: underConstruction,
          showcase: breakroom,
          flipped: false,
          apis: [
            'React Native',
            'Google Firebase',
            'React',
            'JavaScript',
            'TypeScript',
            'Git',
            'Expo',
            'Redux',
            'Swift',
            'Java',
          ],
          description:
            "Geolocation based social media application focused on nearby chatting. Developed from the ground up to be inclusive and conversation provoking. Users are given options to either make accounts or utilize burner anonymous accounts. Designed to work with users' current moods, aligning them with others in the world who are feeling the same type of way. Future plans to apply machine learning to better fit users into the rooms where they will benefit most from the app. Currently in the process of transitioning into a Progressive Web App (PWA). Launching Summer 2022.",
        },
      },
      {
        title: 'Rally',
        type: 'Portfolio',
        data: {
          title: 'Rally',
          platform: 'iOS',
          icon: rallyIcon,
          showcase: rally,
          flipped: false,
          apis: [
            'Swift',
            'Objective-C',
            'UIKit',
            'MapKit',
            'CryptoKit',
            'iCloud',
            'XCode',
            'Google Firebase',
            'Git',
          ],
          description:
            'Native iOS geolocation based social media application surrounding users and their interests. Built with user privacy and application security in mind. Designed to connect individuals with similar interests together, no matter the distance or existing social circles. Has since been retired and existing code warped into the new react native application seen earlier.',
        },
      },
      {
        title: 'yegor.codes',
        type: 'Portfolio',
        data: {
          title: 'This Site',
          platform: 'Web',
          icon: ycLogo,
          showcase: portfolio,
          flipped: true,
          apis: [
            'Google Firebase',
            'ReactJS',
            'Redux',
            'MUI',
            'TypeScript',
            'Tailwind CSS',
          ],
          description: 'This site was built with ReactJS',
        },
      },
      {
        title: 'Development Hell',
        type: 'SubPortfolio',
        data: {
          title: 'Various Fun Projects Stuck in Development Hell',
          projects: [
            {
              title: 'Asimov',
              platform: 'Various',
              icon: underConstruction,
              showcase: portfolio,
              apis: ['Python', 'Machine Learning', 'Algorithmic Trading'],
              description:
                'More of an academic test than a formal portfolio piece. Applies machine learning to algorithmic trading in hopes of anticipating future trends in securities markets.',
            },
            {
              title: 'Quill',
              platform: 'Bot',
              icon: underConstruction,
              apis: ['JavaScript', 'Python', 'Machine Learning'],
              description:
                'A webscraping and purchasing bot that scours the web for a given product, purchases items automatically for the user and keeps track of price changes over time. Meant to handle the tedious nature of shopping for difficult to acquire products.',
            },
            {
              title: 'Jellyfish',
              platform: 'WatchOS',
              icon: underConstruction,
              apis: ['Swift', 'WatchKit'],
              description:
                "A single app tracker for tracking tasks, prioritizing daily to-dos and designed to build discipline in the wearer's lifestyle.",
            },
          ],
        },
      },
    ],
  },
  {
    header: 'Principles',
    pages: [
      {
        title: 'Design',
        type: 'Panel',
        data: [
          {
            title: 'Design',
            subtitle: '"Good design makes a product useful" - Dieter Rams',
            description:
              'Although I am capable of working in any environment,  I prefer to work on the front-end, having a direct impact on the user experience. I enjoy building beautiful user interfaces with accessibility in mind, ensuring my applications are accessible to all, regardless of background, language or disability.',
            skills: ['React', 'JavaScript'],
          },
          {
            title: 'Security & Privacy',
            subtitle: '"Hello, Friend"',
            description:
              'It is high time society stopped being naïve about the challenges facing our privacy and security, and started taking an active role in cybersecurity. At the core of everything I build, I plan with security from the ground up. Whether to protect business interests, intellectual property, or protecting the very users who entrust us with their data, everyone is better off when ethical security is incorporated into the products we build.',
          },
          {
            title: 'Accessibility',
            subtitle:
              '"The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect." — Tim Berners-Lee',
            description:
              'Everyone regardless of background, language or disability should be able to use and enjoy the products we build. It is a tall order to build applications that meet these needs, but they are essential and a core part of what the modern information age is all about. Not only does it make for a fair and just world, but for those companies more concerned about bottom lines and quarterly reports, implementation of accessibility opens new markets and expands the customer base. A win-win for all involved.',
          },
        ],
      },
    ],
  },
  {
    header: 'Résumé',
    pages: [
      {
        title: 'Education',
        type: 'Experience',
        experienceType: 'Academics',
        data: [
          {
            degree: 'Master of Science',
            specialization: 'Computer Science',
            college: 'New York University',
            school: 'Tandon School of Engineering',
            graduation: 'Expected Spring 2023',
            gpa: undefined,
            tint: `${colors[0]}`,
            coursework: [
              'Foundations of Computer Science',
              'Information Security and Privacy',
              'Machine Learning',
              'Algorithm Design and Analysis',
              'Computer Networking',
              'Operating Systems',
            ],
          },
          {
            degree: 'Bachelor of Arts',
            specialization: 'Economics',
            minors: ['Physics', 'Mathematics'],
            college: 'Baruch College',
            school: 'Weissman School of Arts and Sciences',
            graduation: 'Graduated Summer 2019',
            gpa: 'GPA: 3.81',
            tint: `${colors[1]}`,
            coursework: [
              'Logic & Moral Reasoning',
              'American Government Practice and Values',
              'Introduction to Business',
              'Micro-Economics Intermediate',
              'Macro-Economics Intermediate',
              'Fundamentals of Business Law',
              'Fundamentals of Experimental Physics',
              'Introduction to Information Systems',
              'International Economics and Finance',
              'Algorithms and Computer Programming',
              'Economic Analysis of Policy',
              'Advanced Micro and Macroeconomics',
              'Econometrics',
              'Business Statistics / Statistics',
              'International Economics and Finance',
              'Economic Analysis of Policy',
              'Political Economy',
              'Linear Algebra',
              'Applied Calculus with Matrix Applications',
              'Integral Calculus',
              'Analytical Geometry and Vector Calculus',
              'Algorithms and Programming',
              'Quantitative Physics I & II (General Relativity and Electromagnetism',
              'Astrophysics',
            ],
          },
        ],
      },
      {
        title: 'Work Experience',
        type: 'Experience',
        experienceType: 'Work Experience',
        data: [
          {
            degree: 'Haver Analytics',
            specialization: 'Computer Science',
            college: 'Economic Research Assistant',
            school: 'Haver Analytics',
            skills: [
              'Python',
              'BeautifulSoup',
              'Pandas',
              'Jupyter',
              'VBA',
              'CLI',
              'Automation',
              'QA',
            ],
            graduation: '09/2020 - 06/2021',
            gpa: undefined,
            tint: `${colors[2]}`,
            coursework: [
              'Developed Python scripts for batch automation to extract high frequency economic data from various sources.',
              'Built web scrapers using beautifulsoup and utilized Pandas and VBA macros in the automation pipeline to manipulate, clean and perform quality assurance on the data.',
              'Automated roughly 30% of the total workload assigned to the team.',
              'Assisted in training new team members on Python and internal development tools.',
              'Worked extensively with command line programs and batch files.',
            ],
          },
        ],
      },
      { title: 'Toolkit', type: 'Bulletin' },
    ],
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Landing />
      {sections.map((section) => (
        <Section section={section} />
      ))}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
