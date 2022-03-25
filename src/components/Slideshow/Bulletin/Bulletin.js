import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// import { Links } from '../Links/Links';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Skillset } from '../../Skillset/Skillset';
import { colors } from '../../../Theme';

const sections = [
  {
    header: 'Programming Languages',
    subsections: [
      { title: 'High Proficiency', items: ['JavaScript', 'Swift', 'C++'] },
      { title: 'Average Proficiency', items: ['Python', 'Java', 'SQL'] },
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
      { title: 'NYU Tandon Bridge', items: ['Certificate'] },
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
    subsections: [{ title: 'English' }, { title: 'Russian' }],
  },
];

export const Bulletin = (props) => {
  return sections.map((section) => (
    <List p={1}>
      <ListItem>
        <Typography variant="sectionHeader">{section.header}</Typography>
      </ListItem>
      <List style={{ paddingLeft: '20px' }}>
        {section.subsections.map((subsection) => (
          <>
            <ListItem>
              <Typography variant="sectionSubtitle">
                {subsection.title}
              </Typography>
            </ListItem>
            <Stack
              direction="row"
              justifyContent={'flex-start'}
              rowGap={2}
              spacing={2}
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
  ));
};
