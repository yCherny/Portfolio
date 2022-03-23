import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// import { Links } from '../Links/Links';
import rally from '../../../images/rally.png';
import rallyIcon from '../../../images/rallyIcon.png';
import ycLogo from '../../../images/ycLogo.png';
import portfolio from '../../../images/portfolio.png';
import Typography from '@mui/material/Typography';
import { Skillset } from '../../Skillset/Skillset';
import { colors } from '../../../Theme';

const projects = [
  {
    title: 'TBD',
    platform: 'PWA, React Native, iOS, Web, Android',
    icon: rallyIcon,
    showcase: rally,
    apis: [
      'Google Firebase',
      'React',
      'React Native',
      'Redux',
      'Mapbox',
      'XCode',
      'AdMob',
      'CocoaTouch',
      'Native',
      'PushNotifications',
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas accumsan lacus vel facilisis volutpat est velit egestas.',
  },
  // {
  //   title: 'Rally',
  //   platform: 'iOS',
  //   icon: rallyIcon,
  //   showcase: rally,
  //   apis: [
  //     'Google Firebase',
  //     'Apple Maps',
  //     'CryptoKit',
  //     'iCloud',
  //     'XCode',
  //     'AdMob',
  //     'CocoaTouch',
  //     'Native',
  //     'PushNotifications',
  //   ],
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas accumsan lacus vel facilisis volutpat est velit egestas.',
  // },
  // {
  //   title: 'This Site',
  //   platform: 'Web',
  //   icon: ycLogo,
  //   showcase: portfolio,
  //   apis: [
  //     'Google Firebase',
  //     'ReactJS',
  //     'Redux',
  //     'MUI',
  //     'TypeScript',
  //     'Tailwind CSS',
  //   ],
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas accumsan lacus vel facilisis volutpat est velit egestas.',
  // },
];

export const Portfolio = (props) => {
  return (
    <Grid
      container
      direction="row"
      alignItems={'flex-end'}
      justifyContent={'space-between'}
      rowGap={2}
    >
      <Grid item xs={12} md={5}>
        <Stack spacing={2} alignItems="center" px={5}>
          <Stack alignItems={'flex-start'} width={'100%'}>
            <Typography variant="sectionHeader" fontWeight={'800'}>
              {projects[0].title}
            </Typography>
            <Typography
              variant="sectionSubtitle"
              fontWeight={'600'}
              color={'gray'}
            >
              {projects[0].platform}
            </Typography>
          </Stack>
          <Stack alignItems={'center'}>
            <Stack direction={'row'} spacing={-8}>
              <img
                src={projects[0].showcase}
                alt="Project Showcase"
                height={'300vh'}
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
        <Stack rowGap={2}>
          <Stack textAlign={{ xs: 'center', md: 'start' }} px={5}>
            <Typography variant="sectionContent" fontWeight={'light'}>
              {projects[0].description}
            </Typography>
          </Stack>
          <Stack spacing={2}>
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
        </Stack>
      </Grid>
    </Grid>
  );
};
