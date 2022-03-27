import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
// import { Links } from '../Links/Links';
import Typography from '@mui/material/Typography';
import { Skillset } from '../../Skillset/Skillset';
import { colors } from '../../../Theme';

export const Portfolio = (props) => {
  return (
    <Stack
      direction="row"
      // sx={{
      //   minHeight: '100vh',
      // }}
      alignItems={{ xs: 'flex-start', lg: 'center' }}
      id={'Landing'}
    >
      <Grid
        container
        direction="row"
        alignItems={'center'}
        justifyContent={'center'}
        rowGap={2}
      >
        <Grid item xs={12} md={5}>
          <Stack spacing={2} alignItems="center" px={5}>
            <Stack alignItems={'center'}>
              {props.page.data.flipped ? (
                <Stack direction={'row'} spacing={-15}>
                  <img
                    src={props.page.data.icon}
                    alt="Project Icon"
                    height={'130px'}
                    style={{
                      marginTop: '6vh',
                      borderRadius: '10px',
                      zIndex: -1,
                    }}
                  />
                  <img
                    src={props.page.data.showcase}
                    alt="Project Showcase"
                    style={{
                      maxWidth: '50vw',
                    }}
                  />
                </Stack>
              ) : (
                <Stack direction={'row'} spacing={-15}>
                  <img
                    src={props.page.data.showcase}
                    alt="Project Showcase"
                    style={{
                      maxWidth: '50vw',
                    }}
                  />
                  <img
                    src={props.page.data.icon}
                    alt="Project Icon"
                    height={'130px'}
                    style={{
                      marginTop: '6vh',
                      borderRadius: '10px',
                      zIndex: -1,
                    }}
                  />
                </Stack>
              )}
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={5}>
          <Stack rowGap={2}>
            <Stack
              textAlign={{ xs: 'center', md: 'start' }}
              spacing={3}
              px={{ xs: 5, md: 0 }}
            >
              <Stack>
                <Typography variant="sectionHeader" className={'header'}>
                  {props.page.data.title}
                </Typography>
                <Typography variant="sectionSubtitle">
                  {props.page.data.platform}
                </Typography>
              </Stack>
              <Typography variant="sectionContent">
                {props.page.data.description}
              </Typography>
            </Stack>
            <Stack paddingLeft={{ xs: 2, md: 0 }}>
              <Stack
                direction="row"
                justifyContent={{ xs: 'center', md: 'flex-start' }}
                rowGap={2}
                sx={{ flexWrap: 'wrap' }}
              >
                {props.page.data.apis.map((tech, index) => (
                  <Skillset title={tech} color={colors[index]} />
                ))}
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};
