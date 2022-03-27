import * as React from 'react';
import {
  Button,
  Stack,
  Avatar,
  Grid,
  Typography,
  Snackbar,
} from '@mui/material';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import MuiAlert from '@mui/material/Alert';
import { Links } from '../Links/Links';
import './style.css';

// Assets
import profilePic from '../../images/profilePic.jpeg';
import background from '../../images/background.svg';
import { ArrowDownIcon } from '@heroicons/react/solid';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Landing = () => {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

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
      id={'Landing'}
    >
      <Grid
        container
        direction="row-reverse"
        justifyContent="center"
        alignItems={{ xs: 'flex-end', md: 'center' }}
        p={{ xs: 5, md: 10 }}
        alignSelf={{ sm: 'flex-end', md: 'center' }}
        rowGap={{ xs: 5, md: 0 }}
      >
        {/* Profile Pic */}
        <Grid item xs={12} md={6} lg={4}>
          <Stack spacing={2} alignItems={{ xs: 'flex-start', md: 'center' }}>
            <Avatar
              alt="Yegor Headshot"
              src={profilePic}
              sx={{
                width: { xs: 130, md: 300 },
                height: { xs: 130, md: 300 },
              }}
            />
          </Stack>
        </Grid>
        {/* Data */}
        <Grid item xs={12} md={6} lg={4}>
          <Stack spacing={4} alignItems="flex-start">
            <Stack spacing={2} alignItems="flex-start">
              <Button variant="rounded">Open to Work</Button>
              <AnchorLink href={'#Landing'}>
                <Button variant="pageSection">YEGOR CHERNYSHEV</Button>
              </AnchorLink>
            </Stack>

            <Stack spacing={1} alignItems="flex-start">
              <Typography variant="header" style={{ fontWeight: '400' }}>
                BRIDGING BUSINESS AND TECHNOLOGY
              </Typography>
              <Typography variant="content" style={{ fontWeight: '400' }}>
                Software engineer from New York City focused on building
                beautiful, innovative products.
              </Typography>
            </Stack>

            <Stack spacing={3}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                alignItems={{ xs: 'flex-start' }}
                rowGap={{ xs: 0, sm: 2 }}
                spacing={2}
                sx={{ flexWrap: 'wrap' }}
              >
                <AnchorLink href="#About">
                  <Button variant="outlined">About</Button>
                </AnchorLink>
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
            </Stack>
            <Links />
          </Stack>
        </Grid>
      </Grid>
      <Snackbar open={open} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="info"
          style={{ marginLeft: '30px', marginRight: '30px' }}
        >
          This portfolio is undergoing an update. Please check back soon! Should
          be up again in 24 hours.
        </Alert>
      </Snackbar>
      {/* <ArrowDownIcon
        className="box bounce-1"
        height={20}
        width={20}
        style={{
          left: '50vw',
          position: 'absolute',
          bottom: '10px',
        }}
      /> */}
    </Stack>
  );
};
