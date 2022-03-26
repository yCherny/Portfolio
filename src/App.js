import { Footer } from './components/Footer/Footer';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Theme';
import { Landing } from './components/Landing/Landing';
import CssBaseline from '@mui/material/CssBaseline';
import { Section } from './components/Section/Section';
import { Frame } from './components/Frame/Frame';

import rally from './images/rally.png';
import rallyIcon from './images/rallyIcon.png';
import ycLogo from './images/ycLogo.png';
import portfolio from './images/portfolio.png';
import underConstruction from './images/underConstruction.png';
import breakroom from './images/breakroom.png';
import { mockComponent } from 'react-dom/test-utils';

// Temporary Hard Coded Data
const sections = [
  {
    header: 'Development',
    pages: [
      {
        title: 'Security & Privacy',
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
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas accumsan lacus vel facilisis volutpat est velit egestas.',
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
            subtitle: 'A world constantly on the move.',
            description:
              "We live in a world constantly on the move. Highly dependent on technology, it increasingly becomes more a part of us as we move from desktops, to mobile devices, to AR lenses and virtual assistants. Therefore, I believe it is crucial to design 'mobile-first.'",
            skills: ['iOS', 'Swift'],
          },
          {
            title: 'Accessibility',
            subtitle: '"Good design makes a product useful" - Dieter Rams',
            description:
              'Although I am capable of working in any environment,  I prefer to work on the front-end, having a direct impact on the user experience. I enjoy building beautiful user interfaces with accessibility in mind, ensuring my applications are accessible to all, regardless of background, language or disability.',
            skills: ['React', 'JavaScript'],
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
            tint: `green`,
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
            tint: `red`,
            coursework: [
              'Advanced Micro and Macroeconomics',
              'Econometrics',
              'Statistics',
              'International Economics and Finance',
              'Economic Analysis of Policy',
              'Political Economy',
              'Linear Algebra',
              'Calculus I, II, & III',
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
            college: 'Haver Analytics',
            school: 'Economic Research Assistant',
            graduation: '09/2020 - 06/2021',
            gpa: undefined,
            tint: `green`,
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
      { title: 'Miscellaneous', type: 'Bulletin' },
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
