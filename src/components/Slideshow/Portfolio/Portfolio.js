import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// import { Links } from '../Links/Links';
import profilePic from '../../../images/profilePic.jpeg';
import rally from '../../../images/rally.png';
import portfolio from '../../../images/portfolio.png';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Skillset } from '../../Skillset/Skillset';

const colors = [
  '#F72585',
  '#B5179E',
  '#7209B7',
  '#560BAD',
  '#480CA8',
  '#3A0CA3',
  '#3F37C9',
  '#4361EE',
  '#4895EF',
  '#4CC9F0',
];

const projects = [
  {
    title: 'Rally',
    platform: 'iOS',
    icon: profilePic,
    showcase: rally,
    apis: [
      'Google Firebase',
      'Apple Maps',
      'CryptoKit',
      'iCloud',
      'XCode',
      'AdMob',
      'CocoaTouch',
      'Native',
      'PushNotifications',
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas accumsan lacus vel facilisis volutpat est velit egestas.',
  },
];

export const Portfolio = (props) => {
  return (
    <Grid
      container
      direction="row"
      alignItems={'flex-end'}
      justifyContent={'space-between'}
    >
      <Grid item xs={12} md={5}>
        <Stack spacing={2} alignItems="flex-start">
          <Typography variant="sectionHeader">{projects[0].title}</Typography>
          <Typography variant="sectionSubtitle">
            {projects[0].platform}
          </Typography>
          <Stack alignItems={'center'}>
            <Stack direction={'row'} spacing={-15}>
              <img
                src={projects[0].showcase}
                alt="Project Showcase"
                height={'400px'}
              />
              <img
                src={projects[0].icon}
                alt="Project Icon"
                height={'130px'}
                style={{
                  marginTop: '50px',
                  borderRadius: '10px',
                  zIndex: -1,
                }}
              />
            </Stack>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} md={5}>
        <Typography variant="sectionContent" fontWeight={'light'}></Typography>

        <p>{projects[0].description}</p>
        <Stack spacing={2}>
          <h2 style={{ fontWeight: '400', fontSize: '2vw', margin: 0 }}>
            Tech Stack
          </h2>
          <Stack
            direction="row"
            justifyContent={{ xs: 'center', md: 'flex-start' }}
            rowGap={2}
            spacing={2}
            sx={{ flexWrap: 'wrap' }}
          >
            {projects[0].apis.map((tech, index) => (
              <Skillset title={tech} color={colors[index]} />
            ))}
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};
