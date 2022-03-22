import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Skillset = (props) => {
  return (
    <Box
      px={2}
      py={0.75}
      bgcolor={props.color ?? '#33B587'}
      sx={{ borderRadius: '5px' }}
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
