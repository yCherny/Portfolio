import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import {
  LibraryIcon,
  PresentationChartLineIcon,
  TerminalIcon,
  ChevronDownIcon,
} from '@heroicons/react/solid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { colors } from '../../../Theme';

const data = [
  {
    degree: 'Master of Science',
    specialization: 'Computer Science',
    college: 'New York University',
    school: 'Tandon School of Engineering',
    graduation: 'Expected Spring 2023',
    gpa: undefined,
    tint: `${colors[0]}`,
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
    tint: `${colors[1]}`,
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

export const Experience = (props) => {
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
              <Stack spacing={1}>
                <Typography variant="sectionHeader">
                  {education.college}
                </Typography>
                <Typography variant="sectionSubtitle" fontWeight={600}>
                  {education.school}
                </Typography>
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
                <Divider color={'#414141'} style={{ width: '100%' }} />
              </Stack>
              <Accordion style={{ width: '100%' }}>
                <AccordionSummary
                  expandIcon={
                    <ChevronDownIcon
                      color="white"
                      style={{ height: '30px', width: '30px' }}
                    />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  style={{ backgroundColor: '#1A1A1A' }}
                >
                  <Typography
                    variant="sectionSubtitle"
                    style={{ fontWeight: '400' }}
                  >
                    Relevant Coursework
                  </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: '#111111' }}>
                  <List spacing={0}>
                    {education.coursework.map((course) => (
                      <ListItem>
                        <ListItemText primary={course} />
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
