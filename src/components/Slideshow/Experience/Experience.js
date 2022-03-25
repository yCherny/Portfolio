import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

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
      'Foundations of Computer Science',
      'Infosec and Privacy',
      'Machine Learning',
      'Design and Analysis of Algorithms',
      'Computer Networking',
      'Intro to Operating Systems',
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
        alignItems={'flex-start'}
        justifyContent="center"
        rowGap={{ xs: 5, md: 0 }}
      >
        {data.map((education) => (
          <Grid item xs={12} md={8} lg={4}>
            <Stack spacing={2} px={5}>
              <Stack spacing={1}>
                <Stack>
                  <Typography variant="sectionHeader">
                    {education.college}
                  </Typography>
                  <Typography variant="sectionSubtitle">
                    {education.school}
                  </Typography>
                </Stack>

                <Stack direction={'row'} spacing={2}>
                  <Typography
                    variant="sectionSubtitle"
                    style={{ color: 'gray', fontWeight: '400' }}
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
                </Stack>
                <Stack direction={'row'} spacing={1.5}>
                  <Box
                    px={1.5}
                    py={0.75}
                    bgcolor={education.tint}
                    sx={{ borderRadius: '5px' }}
                  >
                    <Stack direction={'row'} alignItems={'center'} spacing={1}>
                      <LibraryIcon height={18} width={18} />
                      <Typography
                        variant="skillset"
                        textTransform={'uppercase'}
                        style={{ fontWeight: '800' }}
                      >
                        {education.degree}
                      </Typography>
                    </Stack>
                  </Box>
                  <Box
                    px={1.5}
                    py={0.75}
                    bgcolor={education.tint}
                    sx={{ borderRadius: '5px' }}
                  >
                    <Stack direction={'row'} alignItems={'center'} spacing={1}>
                      {education.specialization === 'Computer Science' ? (
                        <TerminalIcon height={18} width={18} />
                      ) : (
                        <PresentationChartLineIcon height={18} width={18} />
                      )}
                      <Typography
                        variant="skillset"
                        textTransform={'uppercase'}
                        style={{ fontWeight: '800' }}
                      >
                        {education.specialization}
                      </Typography>
                    </Stack>
                  </Box>
                </Stack>
                <Divider color={'#414141'} style={{ width: '100%' }} />
              </Stack>
              <Accordion style={{ borderRadius: '10px' }}>
                <AccordionSummary
                  expandIcon={
                    <ChevronDownIcon
                      color="white"
                      style={{ height: '30px', width: '30px' }}
                    />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  style={{ backgroundColor: '#111111' }}
                >
                  <Typography variant="accordion" style={{ fontWeight: '600' }}>
                    Coursework
                  </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: '#111111' }}>
                  <List spacing={0}>
                    {education.coursework.map((course) => (
                      <ListItem>
                        <Typography variant="accordion">• {course}</Typography>
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
