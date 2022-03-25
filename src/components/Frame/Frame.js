import * as React from 'react';
import Box from '@mui/material/Box';
import background from '../../images/background.svg';

export const Frame = (props) => {
  return (
    <Box
      style={{ overflowY: 'scroll' }}
      sx={{
        height: '100vh',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      {/* Canvas */}
      <Box
        sx={{
          height: '500vh',
          position: 'relative',
        }}
      ></Box>
    </Box>
  );
};
