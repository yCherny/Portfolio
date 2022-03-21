import { Footer } from './components/Footer/Footer';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './Theme';
import { Landing } from './components/Landing/Landing';
import CssBaseline from '@mui/material/CssBaseline';
import { Section } from './components/Section/Section';

const sections = ['Skills', 'Principles', 'Résumé'];

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
