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

const subtitle = 'Toolkit'; // Portfolio

export const Section = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: 'black',
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
        <Grid item xs={props.section === 'Résumé' ? 8 : 12}>
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
                {props.section}
              </p>
            </Box>
            <Stack direction="row" spacing={3} alignItems="center">
              <ChevronRightIcon
                style={{
                  height: '20px',
                  width: '20px',
                }}
              />
              <p style={{ fontWeight: 'bold', margin: 0 }}>{subtitle}</p>
            </Stack>
          </Stack>
        </Grid>
        {/* Section Data */}
        {props.section === 'Résumé' ? (
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

      <Stack spacing={2} alignItems="flex-start">
        <Root />
        {/* <Panel /> */}
        {/* <Toolkit /> */}
      </Stack>
      {/* <Fab
        variant="extended"
        style={{
          fontWeight: 'bold',
          position: 'absolute',
          left: '60px',
          bottom: '60px',
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
      </Fab> */}
      {/* <Fab
        variant="extended"
        className="right right-1"
        style={{
          fontWeight: 'bold',
          position: 'relative',
          right: '60px',
          bottom: '60px',
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
      </Fab> */}
    </Box>
  );
};
