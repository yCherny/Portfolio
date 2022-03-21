import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Links } from '../Links/Links';
import footerBackground from '../../images/footerBackground.svg';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export const Footer = () => {
  return (
    <Stack
      spacing={2}
      alignItems={{ xs: 'flex-start', md: 'center' }}
      p={{ xs: 5, md: 10 }}
      sx={{
        backgroundImage: `url(${footerBackground})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'center',
      }}
    >
      <Typography variant="header" style={{ fontWeight: '400' }}>
        INTERESTED?
      </Typography>

      <Button
        variant="contained"
        sx={{ fontWeight: 'bold', fontSize: '3.75vw' }}
      >
        REACH OUT
      </Button>
      <Links />
      <Typography variant="footer" style={{ fontWeight: '400' }}>
        2022 © Yegor Chernyshev | All Rights Reserved
      </Typography>
    </Stack>
  );
};
