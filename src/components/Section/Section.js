import * as React from 'react';
import {
  Box,
  Stack,
  Grid,
  Button,
  Pagination,
  Menu,
  MenuItem,
} from '@mui/material';

import {
  ChevronRightIcon,
  DocumentDownloadIcon,
} from '@heroicons/react/outline';
import './style.css';

import resume from '../../assets/Chernyshev Yegor Resume.pdf';

import { Slideshow } from '../Slideshow/Slideshow';
import { usePagination } from '@mui/material/Pagination';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useSelector, useDispatch } from 'react-redux';
import { moveTo } from '../../features/pagination/paginationSlice';
import { colors } from '../../Theme';

export const Section = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid
      container
      direction="column"
      id={props.section.header}
      alignItems="flex-start"
      px={{ xs: 0, lg: 50 }}
      py={2.5}
    >
      <Grid item xs={12}>
        <Grid container direction="row" px={5} py={2.5}>
          {/* Section Header */}
          <Grid item xs={props.section.header === 'Résumé' ? 5 : 12}>
            <Stack direction="row" spacing={1} alignItems="center">
              <Button
                variant="pageSection"
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                {props.section.header}
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <AnchorLink href={'#Landing'}>
                  <MenuItem onClick={handleClose} variant="menuOption">
                    Landing
                  </MenuItem>
                </AnchorLink>
                <AnchorLink href={'#About'}>
                  <MenuItem onClick={handleClose} variant="menuOption">
                    About
                  </MenuItem>
                </AnchorLink>
                <AnchorLink href={'#Portfolio'}>
                  <MenuItem onClick={handleClose} variant="menuOption">
                    Portfolio
                  </MenuItem>
                </AnchorLink>
                <AnchorLink href={'#Principles'}>
                  <MenuItem onClick={handleClose} variant="menuOption">
                    Principles
                  </MenuItem>
                </AnchorLink>
                <AnchorLink href={'#Résumé'}>
                  <MenuItem onClick={handleClose} variant="menuOption">
                    Résumé
                  </MenuItem>
                </AnchorLink>
                <AnchorLink href={'#Contact'}>
                  <MenuItem onClick={handleClose} variant="menuOption">
                    Contact
                  </MenuItem>
                </AnchorLink>
              </Menu>
            </Stack>
          </Grid>
          {/* Section Data */}
          {props.section.header === 'Résumé' ? (
            <Grid item xs={7}>
              <Stack direction="row-reverse">
                <a href={resume} download>
                  <Button
                    variant="outlined"
                    style={{ border: `2px solid ${colors[0]}` }}
                    startIcon={<DocumentDownloadIcon height={25} width={25} />}
                  >
                    DOWNLOAD
                  </Button>
                </a>
              </Stack>
            </Grid>
          ) : null}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Slideshow section={props.section} />
      </Grid>
    </Grid>
  );
};
