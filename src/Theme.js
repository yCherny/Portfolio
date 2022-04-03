import { createTheme } from '@mui/material/styles';

export const mainColors = {
  main: '#00011D',
  dark: '#000000',
  light: '#FFFFFF',
  tint: '#4cc9f0',
};

// #BDB15F
export const colors = [
  '#7400b8',
  '#6930c3',
  '#5e60ce',
  '#5390d9',
  '#4ea8de',
  '#48bfe3',
  '#56cfe1',
  '#64dfdf',
  '#72efdd',
  '#80ffdb',
];

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    fontFamily: ['Quicksand'],
  },
  palette: {
    background: {
      default: mainColors.main,
    },
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#33B587',
    },
    text: {
      primary: 'rgba(255,255,255,0.87)',
    },
  },
  components: {
    MuiMenuItem: {
      variants: [
        {
          props: { variant: 'menuOption' },
          style: {
            padding: '8px 30px 8px 30px',
            color: '#000000',
            backgroundColor: '#FFFFFF',
            fontWeight: 'bold',
            borderRadius: '0px',
            textTransform: 'uppercase',
            '&:hover': {
              backgroundColor: mainColors.tint,
              fontWeight: '800',
              color: 'white',
            },
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            color: `${mainColors.tint}`,
            border: `3px solid ${mainColors.tint}`,
            borderRadius: '10px',
            fontWeight: 800,
            '&:hover': {
              color: 'white',
              border: `3px solid ${mainColors.tint}`,
              backgroundColor: mainColors.tint,
              fontWeight: '800',
            },
          },
        },
        {
          props: { variant: 'contained' },
          style: {
            borderRadius: '5px',
            fontWeight: 800,
            fontSize: '1rem',
          },
        },
        {
          props: { variant: 'pageSection' },
          style: {
            color: mainColors.light,
            backgroundColor: mainColors.tint,
            padding: '8px 30px 8px 30px',
            fontWeight: 'bold',
            borderRadius: '0px',
            textTransform: 'uppercase',
            '&:hover': {
              backgroundColor: mainColors.tint,
              fontWeight: '800',
              color: 'white',
            },
          },
        },
        {
          props: { variant: 'rounded' },
          style: {
            color: '#04AAB0',
            border: '2px solid #04AAB0',
            borderRadius: '50px',
            fontWeight: 800,
          },
        },
      ],
    },
  },
});

theme.typography.header = {
  fontWeight: 'bolder',
  fontSize: '1.2rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.0rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.6rem',
  },
};

theme.typography.content = {
  color: '#717171',
  fontSize: '1.2rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.25rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.50rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.75rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.0rem',
  },
};

theme.typography.subtitle = {
  fontSize: '1.2rem',
  // '@media (min-width:600px)': {
  //   fontSize: '1.5rem',
  // },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.4rem',
  },
};

theme.typography.sectionHeader = {
  color: '#000000',
  fontFamily: ['Roboto'],
  fontWeight: '600',
  fontSize: '1.2rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '2.0rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.6rem',
  },
};

theme.typography.sectionSubtitle = {
  color: mainColors.tint,
  fontFamily: ['Roboto'],
  fontWeight: '600',
  fontSize: '1.2rem',
  textTransform: 'uppercase',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.25rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.3rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '0.95rem',
  },
};

theme.typography.secondarySectionHeader = {
  fontSize: '1.2rem',
  textTransform: 'uppercase',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.6rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.8rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.0rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.2rem',
  },
};

theme.typography.secondarySectionSubtitle = {
  color: 'gray',
  fontSize: '1.2rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.3rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.4rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.6rem',
  },
};

theme.typography.accordion = {
  color: 'white',
  fontSize: '1.2rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.0rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.3rem',
  },
};

theme.typography.sectionContent = {
  color: mainColors.main,
  fontFamily: ['Quicksand'],
  fontWeight: '300',
  fontSize: '1.2rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.4rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.5rem',
  },
};

theme.typography.skillset = {
  color: 'white',
  fontSize: '1rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.1rem',
  },
};

theme.typography.footer = {
  color: 'gray',
  fontSize: '1rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.95rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.2rem',
  },
};
