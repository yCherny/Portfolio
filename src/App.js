import { Footer } from './components/Footer/Footer';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Theme';
import { Landing } from './components/Landing/Landing';
import CssBaseline from '@mui/material/CssBaseline';
import { Section } from './components/Section/Section';

// Temporary Hard Coded Data
const sections = [
  {
    header: 'Development',
    pages: [
      { title: 'Portfolio',  type: 'Portfolio' },
      { title: 'Stack',  type: 'Panel' },
      { title: 'Skills',  type: 'Bulletin' },
    ],
  },
  {
    header: 'Principles',
    pages: [
      { title: 'Design',  type: 'Panel' },
      { title: 'Security & Privacy',  type: 'Panel' },
      { title: 'Accessibility',  type: 'Panel' },
    ],
  },
  {
    header: 'Résumé',
    pages: [
      { title: 'Education',  type: 'Experience' },
      { title: 'Work Experience',  type: 'Experience' },
      { title: 'Miscellaneous',  type: 'Bulletin' },
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
