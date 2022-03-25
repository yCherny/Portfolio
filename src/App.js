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
        title: 'TBD',
        type: 'Portfolio',
        data: {
          title: 'TBD',
          platform: 'PWA, Web, iOS, Android',
          icon: underConstruction,
          showcase: breakroom,
          flipped: false,
          apis: [
            'Google Firebase',
            'React',
            'React Native',
            'Redux',
            'Swift',
            'Java',
          ],
          description:
            "Geolocation based social media application focused on nearby chatting. Developed from the ground up to be inclusive and conversation provoking. Users are given options to either make accounts or utilize burner anonymous accounts. Designed to work with users' current moods, aligning them with others in the world who are feeling the same type of way in the moment. Future plans to apply machine learning to better fit users into the rooms where they will benefit most from the app. Launching Summer 2022.",
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
          flipped: true,
          apis: [
            'Swift',
            'Apple Maps',
            'CryptoKit',
            'iCloud',
            'XCode',
            'Google Firebase',
            'PushNotifications',
          ],
          description:
            'Geolocation based social media application surrounding users and their interests. Developed from the ground up with user privacy and application security in mind. Was built to connect individuals with similar interests together, no matter the distance or existing social circles. Has since been retired and existing code warped into the new react native application seen on the previous slide.',
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
          flipped: false,
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
      { title: 'Design', type: 'Panel' },
      { title: 'Security & Privacy', type: 'Panel' },
      { title: 'Accessibility', type: 'Panel' },
    ],
  },
  {
    header: 'Résumé',
    pages: [
      { title: 'Education', type: 'Experience' },
      { title: 'Work Experience', type: 'Experience' },
      { title: 'Miscellaneous', type: 'Bulletin' },
    ],
  },
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Landing />
    </ThemeProvider>
  );
}

export default App;
