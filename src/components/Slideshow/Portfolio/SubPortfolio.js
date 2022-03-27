import * as React from 'react';
// import { Links } from '../Links/Links';
import { Grid, Stack, Typography } from '@mui/material/';
import { Skillset } from '../../Skillset/Skillset';
import { colors } from '../../../Theme';

export const SubPortfolio = (props) => {
  return (
    <Stack
      direction="row"
      sx={{
        minHeight: '100vh',
      }}
      alignItems={{ xs: 'flex-start', lg: 'center' }}
    >
      <Grid
        container
        direction="row"
        alignItems={'flex-start'}
        justifyContent={'center'}
        rowGap={2}
        spacing={{ xs: 0, md: 5 }}
      >
        <Grid item xs={12}>
          <Stack px={5}>
            <Typography variant="sectionHeader" className={'header'}>
              {props.page.data.title}
            </Typography>
          </Stack>
        </Grid>
        {props.page.data.projects.map((project) => (
          <Grid item xs={12} md={3}>
            <Stack rowGap={2} alignItems={{ xs: 'center', md: 'flex-start' }}>
              <img
                src={project.icon}
                alt="Project Icon"
                height={'130px'}
                style={{
                  marginTop: '6vh',
                  borderRadius: '10px',
                  zIndex: -1,
                }}
              />
              <Stack
                textAlign={{ xs: 'center', md: 'start' }}
                spacing={1}
                px={{ xs: 5, md: 0 }}
              >
                <Typography variant="sectionHeader" className={'header'}>
                  {project.title}
                </Typography>
                <Typography variant="sectionSubtitle">
                  {project.platform}
                </Typography>
                <Typography variant="sectionContent" fontWeight={'light'}>
                  {project.description}
                </Typography>
              </Stack>

              <Stack paddingLeft={{ xs: 2, md: 0 }}>
                <Stack
                  direction="row"
                  justifyContent={{ xs: 'center', md: 'flex-start' }}
                  rowGap={2}
                  sx={{ flexWrap: 'wrap' }}
                >
                  {project.apis.map((tech, index) => (
                    <Skillset title={tech} color={colors[index]} />
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
