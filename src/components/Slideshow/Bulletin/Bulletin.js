import * as React from 'react';
import { Grid, Stack, List, ListItem, Typography } from '@mui/material';
import { Skillset } from '../../Skillset/Skillset';
import { colors } from '../../../Theme';

const sections = [
  {
    header: 'Programming Languages',
    subsections: [
      {
        title: 'High Proficiency',
        items: ['JavaScript', 'ReactJS', 'Swift', 'C++'],
      },
      {
        title: 'Average Proficiency',
        items: ['Python', 'Redux', 'Java', 'SQL'],
      },
      { title: 'Lightly Dabbled In', items: ['C', 'Angular', 'Ruby'] },
    ],
  },
  {
    header: 'Design',
    subsections: [
      { title: '2D Design', items: ['Adobe XD', 'Illustrator', 'Procreate'] },
      { title: '3D Modeling', items: ['Autodesk Fusion', 'Blender'] },
    ],
  },
  {
    header: 'Certificates',
    subsections: [
      { title: 'NYU', items: ['Tandon Bridge Certificate'] },
      {
        title: 'Codecademy',
        items: [
          'Learn Java',
          'Learn SQL',
          'Learn React',
          'Learn JavaScript',
          'Learn Python 3',
          'Learn Git & GitHub',
          'Learn CLI',
          'Learn AngularJS 1.X',
          'Learn Responsive Design',
        ],
      },
    ],
  },
  {
    header: 'Operating Systems',
    subsections: [{ title: '', items: ['Mac OS', 'Windows', 'Linux Kali'] }],
  },
  {
    header: 'Languages',
    subsections: [{ title: '', items: ['English', 'Russian'] }],
  },
];

export const Bulletin = (props) => {
  return (
    <Grid
      container
      direction="row"
      alignItems={'flex-start'}
      rowGap={{ xs: 0, md: 0 }}
      pb={5}
    >
      <Grid item xs={12}>
        <Stack px={5}>
          <Typography variant="sectionHeader" className={'header'}>
            {props.page.title}
          </Typography>
        </Stack>
      </Grid>

      {sections.map((section) => (
        <Grid item xs={12} md={8} lg={4}>
          <Stack px={3}>
            <List>
              <ListItem>
                <Typography variant="secondarySectionHeader">
                  {section.header}
                </Typography>
              </ListItem>
              <List style={{ paddingLeft: '20px' }}>
                {section.subsections.map((subsection) => (
                  <>
                    <ListItem>
                      <Typography variant="secondarySectionSubtitle">
                        {subsection.title}
                      </Typography>
                    </ListItem>
                    <Stack
                      direction="row"
                      justifyContent={'flex-start'}
                      rowGap={2}
                      sx={{ flexWrap: 'wrap', paddingLeft: '40px' }}
                    >
                      {subsection.items !== undefined
                        ? subsection.items.map((element, index) => (
                            <Skillset title={element} color={colors[index]} />
                          ))
                        : null}
                    </Stack>
                  </>
                ))}
              </List>
            </List>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};
