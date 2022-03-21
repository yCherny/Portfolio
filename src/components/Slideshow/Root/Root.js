import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Skillset } from '../../Skillset/Skillset';

export const Root = () => {
  return (
    <Stack spacing={0} alignItems="flex-start">
      <Grid
        container
        direction="row"
        alignItems={'flex-end'}
        justifyContent={'space-between'}
      >
        <Grid item xs={12} md={5}>
          <Stack spacing={2} alignItems="flex-start" px={5}>
            <Typography variant="header" style={{ fontWeight: '400' }}>
              FRONT-END DEVELOPMENT
            </Typography>
            <Typography variant="subtitle" style={{ fontWeight: '400' }}>
              "Good design makes a product useful" - Dieter Rams
            </Typography>
            <Typography variant="content" style={{ fontWeight: '400' }}>
              Although I am capable of working in any environment, I prefer to
              work on the front-end, having a direct impact on the user
              experience. I enjoy building beautiful user interfaces with
              accessibility in mind, ensuring my applications are accessible to
              all, regardless of background, language or disability.
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={5}>
          <Stack direction={'row'} height={'100wh'} px={5}>
            <Stack spacing={2} style={{ textAlign: 'end' }}>
              <Typography variant="header" style={{ fontWeight: '400' }}>
                MOBILE DEVELOPMENT
              </Typography>
              <Typography variant="subtitle" style={{ fontWeight: '400' }}>
                A world constantly on the move.
              </Typography>
              <Typography variant="content" style={{ fontWeight: '400' }}>
                We live in a world constantly on the move. Highly dependent on
                technology, it increasingly becomes more a part of us as we move
                from desktops, to mobile devices, to AR lenses and virtual
                assistants. Therefore, I believe it is crucial to design
                'mobile-first.'
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <Stack spacing={0} px={5}>
        <h2>Supporting Skills</h2>
        <Stack direction="row" rowGap={2} spacing={2} sx={{ flexWrap: 'wrap' }}>
          <Skillset title="Machine Learning" />
          <Skillset title="Cybersecurity" />
          <Skillset title="AR/VR" />
        </Stack>
      </Stack>
    </Stack>
  );
};
