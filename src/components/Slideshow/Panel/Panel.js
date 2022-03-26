import * as React from 'react';
import { Grid, Box, Stack, Typography } from '@mui/material';
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
        >
          {props.page.data.map((data, index) => (
            <Grid item xs={12} md={8} lg={4}>
              <Stack spacing={2} alignItems="flex-start" px={5}>
                <Typography variant="sectionHeader">{data.title}</Typography>
                <Typography variant="sectionSubtitle">
                  {data.subtitle}
                </Typography>
                <Typography variant="sectionContent" fontWeight={'light'}>
                  {data.description}
                </Typography>
                {data.skills !== undefined ? (
                  <Stack spacing={0}>
                    <Stack
                      direction="row"
                      rowGap={2}
                      spacing={2}
                      sx={{ flexWrap: 'wrap' }}
                    >
                      {data.skills.map((skill, index) => (
                        <Skillset title={skill} color={colors[index]} />
                      ))}
                    </Stack>
                  </Stack>
                ) : null}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
