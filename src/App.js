import { Footer } from './components/Footer/Footer';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Theme';
import { Landing } from './components/Landing/Landing';
import CssBaseline from '@mui/material/CssBaseline';
import { Section } from './components/Section/Section';

// Temporary Hard Coded Data
const sections = [
  { header: 'Development', subheaders: ['Stack', 'Portfolio', 'Skills'] },
  {
    header: 'Principles',
    subheaders: ['Design', 'Security & Privacy', 'Accessibility'],
  },
  {
    header: 'Résumé',
    subheaders: ['Education', 'Miscellaneous', 'Work Experience'],
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
      ;
      <Footer />
    </ThemeProvider>
  );
}

export default App;
