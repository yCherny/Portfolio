import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Links } from '../Links/Links';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export const Footer = () => {
  return (
    <Stack direction={'row'} alignItems={{ xs: 'flex-start' }} id={'Contact'}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        p={{ xs: 5, md: 10 }}
        rowGap={{ xs: 5, md: 0 }}
      >
        <Grid item xs={12} md={6} lg={8} xl={4}>
          <Stack spacing={2} alignItems="flex-start">
            <Typography variant="header" style={{ fontWeight: '400' }}>
              INTERESTED?
            </Typography>
            <Stack spacing={3} alignItems="flex-start">
              <a href="mailto: yegorcherny@gmail.com">
                <Button variant="contained">REACH OUT *</Button>
              </a>
              <Links />
            </Stack>
            <Typography variant="footer" style={{ fontWeight: '400' }}>
              2022 © Yegor Chernyshev | All Rights Reserved
            </Typography>
            <Typography variant="footer" style={{ fontWeight: '400' }}>
              * Dynamic contact form coming soon, but you can email me in the
              meantime
            </Typography>
            <Typography variant="footer" style={{ fontWeight: '400' }}>
              ** The website in general is a work in constant progress so check
              back soon! :)
            </Typography>
          </Stack>
        </Grid>
        {/* TODO: - Fix */}
        <Grid item xs={12} md={6} lg={2}></Grid>
      </Grid>
    </Stack>
  );
};
