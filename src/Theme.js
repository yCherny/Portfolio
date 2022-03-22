import { createTheme } from '@mui/material/styles';

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
      default: '#000000',
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
              backgroundColor: '#33B587',
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
            border: '3px solid white',
            borderRadius: '10px',
            '&:hover': {
              border: '3px solid #33B587',
              backgroundColor: '#33B587',
              fontWeight: '800',
            },
          },
        },
        {
          props: { variant: 'contained' },
          style: {
            borderRadius: '5px',
            fontWeight: 800,
          },
        },
        {
          props: { variant: 'pageSection' },
          style: {
            padding: '8px 30px 8px 30px',
            color: '#000000',
            backgroundColor: '#FFFFFF',
            fontWeight: 'bold',
            borderRadius: '0px',
            textTransform: 'uppercase',
            '&:hover': {
              backgroundColor: '#33B587',
              fontWeight: '800',
              color: 'white',
            },
          },
        },
        {
          props: { variant: 'rounded' },
          style: {
            color: '#33B587',
            border: '2px solid #33B587',
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
  // '@media (min-width:600px)': {
  //   fontSize: '1.5rem',
  // },
  [theme.breakpoints.down('md')]: {
    fontSize: '2.4rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.4rem',
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
  color: '#33B587',
  fontSize: '1.2rem',
  // '@media (min-width:600px)': {
  //   fontSize: '1.5rem',
  // },
  [theme.breakpoints.down('md')]: {
    fontSize: '2.4rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.4rem',
  },
};

theme.typography.sectionSubtitle = {
  color: 'white',
  fontSize: '1.2rem',
  // '@media (min-width:600px)': {
  //   fontSize: '1.5rem',
  // },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.3rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.4rem',
  },
};

theme.typography.sectionContent = {
  color: 'white',
  fontSize: '1.2rem',
  // '@media (min-width:600px)': {
  //   fontSize: '1.5rem',
  // },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.25rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.4rem',
  },
};

theme.typography.content = {
  color: 'gray',
  fontSize: '1.2rem',
  // '@media (min-width:600px)': {
  //   fontSize: '1.5rem',
  // },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.25rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.4rem',
  },
};

theme.typography.skillset = {
  color: 'white',
  fontSize: '1rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.4rem',
  },
};

theme.typography.footer = {
  color: 'lightgray',
  fontSize: '1rem',
  // '@media (min-width:600px)': {
  //   fontSize: '1.5rem',
  // },
  [theme.breakpoints.down('md')]: {
    fontSize: '0.95rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.4rem',
  },
};
