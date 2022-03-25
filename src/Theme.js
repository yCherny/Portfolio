import { createTheme } from '@mui/material/styles';

// export const colors = [
//   '#F72585',
//   '#B5179E',
//   '#7209B7',
//   '#560BAD',
//   '#480CA8',
//   '#3A0CA3',
//   '#3F37C9',
//   '#4361EE',
//   '#4895EF',
//   '#4CC9F0',
// ];

export const colors = [
  '#4CC9F0',
  '#4895EF',
  '#4361EE',
  '#3F37C9',
  '#3A0CA3',
  '#480CA8',
  '#560BAD',
  '#7209B7',
  '#B5179E',
  '#F72585',
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
            fontSize: '1rem',
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
  color: 'gray',
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
  color: '#33B587',
  fontSize: '1.2rem',
  textTransform: 'uppercase',
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
  color: 'white',
  fontSize: '1.2rem',
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
    fontSize: '1.4rem',
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
  color: 'white',
  fontSize: '1.2rem',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.25rem',
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
