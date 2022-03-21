import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export const Skillset = (props) => {
  return (
    <Box
      px={2}
      py={0.75}
      sx={{ border: '3px solid white', borderRadius: '5px' }}
    >
      <Typography
        variant="skillset"
        textTransform={'uppercase'}
        style={{ fontWeight: '800' }}
      >
        {props.title}
      </Typography>
    </Box>
  );
};
