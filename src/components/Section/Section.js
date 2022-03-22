import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import background from '../../images/background.svg';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DocumentDownloadIcon,
} from '@heroicons/react/outline';
import Fab from '@mui/material/Fab';
import './style.css';
import { Root } from '../Slideshow/Root/Root';
import { Panel } from '../Slideshow/Panel/Panel';
import { Toolkit } from '../Slideshow/Toolkit/Toolkit';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Education } from '../Slideshow/Education/Education';
import Container from '@mui/material/Container';
import { Pagination } from '@mui/material';

const subtitle = 'Toolkit'; // Portfolio

export const Section = (props) => {
  return (
    <Stack
      direction={'column'}
      minHeight={'100vh'}
      id={props.section.header}
      sx={{
        backgroundColor: 'pink',
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems={{ md: 'center' }}
        px={5}
        py={2.5}
      >
        {/* Section Header */}
        <Grid item xs={props.section.header === 'Résumé' ? 8 : 12}>
          <Stack direction="row" spacing={1} alignItems="center">
            <Box
              sx={{
                px: 4,
                py: 1,
                color: '#000000',
                backgroundColor: '#FFFFFF',
              }}
            >
              <p
                style={{
                  fontWeight: 'bold',
                  margin: 0,
                  textTransform: 'uppercase',
                }}
              >
                {props.section.header}
              </p>
            </Box>
            <Stack direction="row" spacing={3} alignItems="center">
              <ChevronRightIcon
                style={{
                  height: '20px',
                  width: '20px',
                }}
              />
              <p style={{ fontWeight: 'bold', margin: 0 }}>
                {props.section.subheaders[0]}
              </p>
            </Stack>
          </Stack>
        </Grid>
        {/* Section Data */}
        {props.section.header === 'Résumé' ? (
          <Grid item xs={4}>
            <Button
              variant="contained"
              startIcon={<DocumentDownloadIcon height={25} width={25} />}
            >
              DOWNLOAD
            </Button>
          </Grid>
        ) : null}
      </Grid>
      {props.section.header === 'Résumé' ? <Education /> : <Root />}
      {/* <Root /> */}
      {/* <Panel /> */}
      {/* <Toolkit /> */}
      <Stack alignItems={'center'} py={1.5}>
        <Pagination
          count={4}
          variant="outlined"
          size="large"
          color="secondary"
        />
      </Stack>
      {/* <Grid
        container
        direction="row"
        justifyContent={'space-between'}
        sx={{ backgroundColor: 'red' }}
        px={5}
      >
        <Grid item xs={3} sx={{ backgroundColor: 'green' }}>
          <Fab
            variant="extended"
            style={{
              fontWeight: 'bold',
              backgroundColor: 'transparent',
              color: 'gray',
              border: '1px solid gray',
              borderRadius: '10px',
            }}
          >
            <ChevronLeftIcon
              style={{
                height: '16px',
                width: '16px',
              }}
            />
            Back
          </Fab>
        </Grid>
        <Grid item xs={3} sx={{ backgroundColor: 'purple' }}>
          <Fab
            variant="extended"
            className="right right-1"
            style={{
              fontWeight: 'bold',
              borderRadius: '10px',
            }}
          >
            Next
            <ChevronRightIcon
              style={{
                height: '16px',
                width: '16px',
              }}
            />
          </Fab>
        </Grid>
      </Grid> */}
    </Stack>
  );
};
