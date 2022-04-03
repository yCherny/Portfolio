import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Skillset } from '../../Skillset/Skillset';
import { mainColors, colors } from '../../../Theme';

export const Portfolio = (props) => {
  return (
    <Stack
      direction="row"
      alignItems={{ xs: 'flex-start', lg: 'center' }}
      id={'Landing'}
      px={{ xs: 0, md: 8 }}
    >
      <Grid
        container
        direction="row"
        alignItems={'center'}
        justifyContent={'center'}
        rowGap={2}
      >
        <Grid item xs={12} md={6}>
          <Box px={5} display={'block'}>
            <img
              src={props.page.data.showcase}
              alt="Project Showcase"
              style={{
                aspectRatio: 1,
                width: '100%',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack rowGap={2}>
            <Stack
              textAlign={{ xs: 'center', md: 'start' }}
              spacing={3}
              px={{ xs: 5, md: 0 }}
            >
              <Stack>
                <Typography
                  variant="sectionHeader"
                  style={{ color: mainColors.light }}
                >
                  {props.page.data.title}
                </Typography>
                <Typography variant="sectionSubtitle">
                  {props.page.data.platform}
                </Typography>
              </Stack>
              {props.page.data.cofounded ? (
                <Stack alignItems={{ xs: 'center', md: 'flex-start' }}>
                  <a href={'https://yulian.codes'}>
                    <Button variant="outlined">
                      Cofounded with Yulian Kraynyak
                    </Button>
                  </a>
                </Stack>
              ) : null}
              <Typography
                variant="sectionContent"
                style={{ color: mainColors.light }}
              >
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
