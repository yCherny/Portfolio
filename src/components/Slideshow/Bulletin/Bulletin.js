import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// import { Links } from '../Links/Links';
import profilePic from '../../../images/profilePic.jpeg';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const operatingSystems = [
  {
    os: 'Mac OS',
    languages: ['Visual Studio Code'],
  },
  {
    os: 'Windows',
    languages: ['XCode'],
  },
  {
    os: 'Linux Kali',
  },
];

const languages = [
  {
    proficiency: 'High Proficiency',
    languages: ['JavaScript', 'Swift', 'C++'],
  },
  {
    proficiency: 'Average Proficiency',
    languages: ['Python', 'Java', 'SQL'],
  },
  {
    proficiency: 'Newly Picked Up',
    languages: ['C', 'Angular'],
  },
];

export const Bulletin = (props) => {
  return (
    <Stack direction="row" spacing={4}>
      <Stack spacing={2}>
        <h2 style={{ fontWeight: '400', fontSize: '2vw', margin: 0 }}>
          Languages
        </h2>
        <List dense={true}>
          {languages.map((level) => (
            <ListItem>
              <ListItemText primary={level.proficiency} />
              {level.languages.map((language) => (
                <ListItem>
                  <ListItemText primary={language} />
                </ListItem>
              ))}
            </ListItem>
          ))}
        </List>
      </Stack>
      {/* <Stack spacing={2}>
        <h2 style={{ fontWeight: '400', fontSize: '2vw', margin: 0 }}>
          Technologies and APIs Involved
        </h2>
        <List dense={true}>
          {projects[0].apis.map((api) => (
            <ListItem>
              <ListItemText primary={api} />
            </ListItem>
          ))}
        </List>
        <p>{projects[0].description}</p>
      </Stack> */}
    </Stack>
  );
};
