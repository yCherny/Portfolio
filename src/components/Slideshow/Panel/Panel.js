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

const projects = [
  {
    title: 'Rally',
    platform: 'iOS',
    icon: profilePic,
    apis: ['Google Firebase', 'Apple Maps', 'CryptoKit', 'iCloud'],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas accumsan lacus vel facilisis volutpat est velit egestas.',
  },
];

export const Panel = () => {
  return (
    <Stack spacing={0} alignItems="flex-start">
      <Stack direction="row" spacing={4}>
        <Stack spacing={2} alignItems="flex-start">
          <Box>
            <h1 style={{ fontWeight: '800', fontSize: '3vw', margin: 0 }}>
              {projects[0].title}
            </h1>
            <h3 style={{ fontWeight: '500', fontSize: '1.75vw', margin: 0 }}>
              {projects[0].platform}
            </h3>
            <img
              src={projects[0].icon}
              alt="Project Icon"
              height={'240px'}
              style={{ borderRadius: '10px' }}
            />
          </Box>
        </Stack>
        <Stack spacing={2}>
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
        </Stack>
      </Stack>
    </Stack>
  );
};
