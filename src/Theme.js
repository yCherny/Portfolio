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
      main: '#f50057',
    },
    text: {
      primary: 'rgba(255,255,255,0.87)',
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            border: '3px solid white',
            borderRadius: '10px',
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
