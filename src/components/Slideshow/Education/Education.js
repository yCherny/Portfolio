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
import { Skillset } from '../../Skillset/Skillset';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const data = [
  {
    degree: 'Master of Science',
    specialization: 'Computer Science',
    college: 'New York University',
    school: 'Tandon School of Engineering',
    graduation: 'Expected Spring 2023',
    gpa: undefined,
    // tint: '#790972',
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
    gpa: '3.81',
    tint: '#33B587',
    // tint: '#3545b3',#33B587
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
              <Typography variant="header" style={{ fontWeight: '400' }}>
                {education.college}
              </Typography>
              <Typography variant="subtitle" style={{ fontWeight: '400' }}>
                {education.school}
              </Typography>
              <Typography variant="subtitle" style={{ fontWeight: '400' }}>
                {education.graduation}
              </Typography>
              {education.gpa !== undefined ? (
                <Typography variant="subtitle" style={{ fontWeight: '400' }}>
                  {education.gpa}
                </Typography>
              ) : null}
              <Stack spacing={2}>
                <h2 style={{ fontWeight: '400', fontSize: '2vw', margin: 0 }}>
                  Technologies and APIs Involved
                </h2>
                <List dense={true}>
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
      <Stack spacing={0} px={5}>
        <h2>Supporting Skills</h2>
        <Stack direction="row" rowGap={2} spacing={2} sx={{ flexWrap: 'wrap' }}>
          <Skillset title="Machine Learning" />
          <Skillset title="Cybersecurity" />
          <Skillset title="AR/VR" />
        </Stack>
      </Stack>
    </Stack>
  );
};
