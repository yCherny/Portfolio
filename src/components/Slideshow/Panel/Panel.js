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
      >
        <Grid
          container
          direction="row"
          alignItems={'flex-start'}
          justifyContent="flex-start"
          rowGap={{ xs: 5, xl: 0 }}
        >
          {props.page.data.map((data, index) => (
            <Grid item xs={12} md={8} lg={12}>
              <Stack spacing={3} alignItems="flex-start" px={{ xs: 5, md: 8 }}>
                <Typography variant="sectionSubtitle">
                  {data.subtitle}
                </Typography>
                <Typography variant="sectionHeader" className={'header'}>
                  {data.title}
                </Typography>
                <Typography variant="sectionContent" fontWeight={'light'}>
                  {data.description}
                </Typography>
                {data.skills !== undefined ? (
                  <Stack pt={3}>
                    <Stack
                      direction="row"
                      justifyContent={'flex-start'}
                      rowGap={2}
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
