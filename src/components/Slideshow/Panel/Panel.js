import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Skillset } from '../../Skillset/Skillset';
import { colors } from '../../../Theme';

export const Panel = (props) => {
  return (
    <Box display="flex" flex={1} flexDirection={'column'}>
      <Box
        display={'flex'}
        flexDirection={'row'}
        overflowx="scroll"
        width={'100%'}
        // bgcolor={'green'}
      >
        <Grid
          container
          direction="row"
          alignItems={'flex-end'}
          justifyContent="center"
          // p={{ xs: 5, md: 10 }}
          rowGap={{ xs: 5, md: 0 }}
          bgcolor={'pink'}
        >
          <Grid item xs={12} md={8} lg={4}>
            <Stack spacing={2} alignItems="flex-start" px={5}>
              <Typography variant="sectionHeader">
                Security & Privacy
              </Typography>
              <Typography variant="sectionSubtitle">'Hello, Friend'</Typography>
              <Typography variant="sectionContent" fontWeight={'light'}>
                It is high time society stopped being naïve about the challenges
                facing our privacy and security, and started taking an active
                role in cybersecurity. At the core of everything I build, I plan
                with security from the ground up. Whether to protect business
                interests, intellectual property, or protecting the very users
                who entrust us with their data, everyone is better off when
                ethical security is incorporated into the products we build.
              </Typography>
            </Stack>
            <Stack spacing={0} px={5}>
              <h2>Supporting Skills</h2>
              <Stack
                direction="row"
                rowGap={2}
                spacing={2}
                sx={{ flexWrap: 'wrap' }}
              >
                <Skillset title="Machine Learning" color={colors[0]} />
                <Skillset title="Cybersecurity" color={colors[1]} />
                <Skillset title="AR/VR" color={colors[2]} />
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            {/* <Stack spacing={2} alignItems="flex-start" px={5}></Stack> */}
            <Stack px={5}>
              <Stack spacing={2} style={{ textAlign: 'end' }}>
                <Typography variant="sectionHeader">
                  Security & Privacy
                </Typography>
                <Typography variant="sectionSubtitle">
                  'Hello, Friend'
                </Typography>
                <Typography variant="sectionContent" fontWeight={'light'}>
                  It is high time society stopped being naïve about the
                  challenges facing our privacy and security, and started taking
                  an active role in cybersecurity. At the core of everything I
                  build, I plan with security from the ground up. Whether to
                  protect business interests, intellectual property, or
                  protecting the very users who entrust us with their data,
                  everyone is better off when ethical security is incorporated
                  into the products we build.
                </Typography>
              </Stack>
              <Stack spacing={0} px={5}>
                <h2>Supporting Skills</h2>
                <Stack
                  direction="row-reverse"
                  rowGap={2}
                  spacing={2}
                  sx={{ flexWrap: 'wrap' }}
                >
                  <Skillset title="Machine Learning" color={colors[0]} />
                  <Skillset title="Cybersecurity" color={colors[1]} />
                  <Skillset title="AR/VR" color={colors[2]} />
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
