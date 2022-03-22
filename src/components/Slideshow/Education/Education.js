import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import {
  LibraryIcon,
  PresentationChartLineIcon,
  TerminalIcon,
} from '@heroicons/react/solid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const data = [
  {
    degree: 'Master of Science',
    specialization: 'Computer Science',
    college: 'New York University',
    school: 'Tandon School of Engineering',
    graduation: 'Expected Spring 2023',
    gpa: undefined,
    tint: '#33B587',
    coursework: [
      'Infosec and Privacy',
      'Discrete Mathematics',
      'Introduction to Machine Learning',
      'Algorithms and Data Structures I',
      'Computer Networking',
      'Operating Systems',
    ],
  },
  {
    degree: 'Bachelor of Arts',
    specialization: 'Economics',
    college: 'Baruch College',
    school: 'Weissman School of Arts and Science',
    graduation: 'Graduated Summer 2019',
    gpa: 'GPA: 3.81',
    tint: '#33B587',
    coursework: [
      'Advanced Micro and Macroeconomics',
      'Econometrics',
      'Statistics',
      'International Economics and Finance',
      'Economic Analysis of Policy',
      'Political Economy',
      'Linear Algebra',
      'Calculus I, II, & III',
      'Algorithms and Programming',
      'Quantitative Physics I & II (General Relativity and Electromagnetism',
      'Astrophysics',
    ],
  },
];

export const Education = () => {
  return (
    <Stack spacing={0} alignItems="flex-start">
      <Grid
        container
        direction="row"
        alignItems={'flex-end'}
        justifyContent={'space-between'}
      >
        {data.map((education) => (
          <Grid item xs={12} md={5}>
            <Stack spacing={2} alignItems="flex-start" px={5}>
              <Stack direction={'row'} spacing={2}>
                <Button
                  variant={'contained'}
                  startIcon={<LibraryIcon height={18} width={18} />}
                  sx={{
                    color: 'white',
                    backgroundColor: `${education.tint}`,
                  }}
                >
                  {education.degree}
                </Button>
                <Button
                  variant={'contained'}
                  startIcon={
                    education.specialization === 'Computer Science' ? (
                      <TerminalIcon height={18} width={18} />
                    ) : (
                      <PresentationChartLineIcon height={18} width={18} />
                    )
                  }
                  sx={{
                    color: 'white',
                    backgroundColor: `${education.tint}`,
                  }}
                >
                  {education.specialization}
                </Button>
              </Stack>
              <Stack spacing={1}>
                <Typography variant="sectionHeader">
                  {education.college}
                </Typography>
                <Typography variant="sectionSubtitle" fontWeight={600}>
                  {education.school}
                </Typography>
                <Typography
                  variant="sectionSubtitle"
                  style={{ color: 'gray', fontWeight: 'lighter' }}
                >
                  {education.graduation}
                </Typography>
                {education.gpa !== undefined ? (
                  <Typography
                    variant="sectionSubtitle"
                    style={{ fontWeight: '400' }}
                  >
                    {education.gpa}
                  </Typography>
                ) : null}
                <Divider color={'#414141'} />
              </Stack>

              <Stack spacing={2}>
                <Typography
                  variant="sectionSubtitle"
                  style={{ fontWeight: '400' }}
                >
                  Relevant Coursework
                </Typography>
                <List spacing={0}>
                  {education.coursework.map((course) => (
                    <ListItem>
                      <ListItemText primary={course} />
                    </ListItem>
                  ))}
                </List>
              </Stack>
            </Stack>
          </Grid>
        ))}
        ;
      </Grid>
    </Stack>
  );
};
