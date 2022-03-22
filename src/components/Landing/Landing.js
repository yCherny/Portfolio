import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import profilePic from '../../images/profilePic.jpeg';
import background from '../../images/background.svg';
import { SearchIcon, ArrowDownIcon } from '@heroicons/react/solid';
import { Links } from '../Links/Links';
import Typography from '@mui/material/Typography';
import { Skillset } from '../Skillset/Skillset';
import './style.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

export const Landing = () => {
  return (
    <Stack
      direction="row"
      sx={{
        height: '100vh',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
      alignItems="flex-end"
    >
      <Grid
        container
        direction="row-reverse"
        justifyContent="flex-end"
        alignItems={{ xs: 'flex-end', md: 'center' }}
        p={{ xs: 5, md: 10 }}
        alignSelf={{ sm: 'flex-end', md: 'center' }}
        rowGap={{ xs: 5, md: 0 }}
      >
        {/* Profile Pic */}
        <Grid item xs={12} md={6}>
          <Stack spacing={2} alignItems={{ xs: 'flex-start', md: 'center' }}>
            <Avatar
              alt="Yegor Headshot"
              src={profilePic}
              sx={{
                width: { xs: 130, md: 240 },
                height: { xs: 130, md: 240 },
              }}
            />
          </Stack>
        </Grid>
        {/* Data */}
        <Grid item xs={12} md={6}>
          <Stack spacing={2} alignItems="flex-start">
            <Box
              sx={{
                px: 4,
                py: 1,
                color: '#000000',
                backgroundColor: '#FFFFFF',
              }}
            >
              <p style={{ fontWeight: 'bold', margin: 0 }}>YEGOR CHERNYSHEV</p>
            </Box>

            {/* style={{ fontWeight: '400', fontSize: { xs: 120, sm: '3.5vw' } */}
            <Typography variant="header" style={{ fontWeight: '400' }}>
              BRIDGING BUSINESS AND TECHNOLOGY
            </Typography>
            <Button
              variant="rounded"
              startIcon={<SearchIcon height={25} width={25} />}
            >
              Open to Work
            </Button>
            <Typography variant="content" style={{ fontWeight: '400' }}>
              Software engineer from New York City focused on building
              beautiful, innovative products.
            </Typography>

            <Stack spacing={3}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'flex-start' }}
                rowGap={{ xs: 0, sm: 2 }}
                spacing={2}
                sx={{ flexWrap: 'wrap' }}
              >
                {/* <Skillset title="Front-End Development" />
                <Skillset title="Mobile Development" />
                <Skillset title="Application Security" /> */}
                <AnchorLink href="#Development">
                  <Button variant="outlined">Development</Button>
                </AnchorLink>
                <AnchorLink href="#Principles">
                  <Button variant="outlined">Principles</Button>
                </AnchorLink>
                <AnchorLink href="#Résumé">
                  <Button variant="outlined">Résumé</Button>
                </AnchorLink>
              </Stack>
              <Links />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
      <ArrowDownIcon
        className="box bounce-1"
        height={20}
        width={20}
        style={{
          left: '50vw',
          position: 'absolute',
          bottom: '10px',
        }}
      />
    </Stack>
  );
};
