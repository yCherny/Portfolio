import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {
  ChevronRightIcon,
  DocumentDownloadIcon,
} from '@heroicons/react/outline';
import './style.css';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Pagination } from '@mui/material';
import { Slideshow } from '../Slideshow/Slideshow';
import { usePagination } from '@mui/material/Pagination';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Root } from '../Slideshow/Root/Root';
import { Panel } from '../Slideshow/Panel/Panel';
import { Toolkit } from '../Slideshow/Toolkit/Toolkit';
import { Education } from '../Slideshow/Education/Education';

export const Section = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    console.log(value);
    setPage(value);
  };

  return (
    <Stack direction={'column'} minHeight={'100vh'} id={props.section.header}>
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
              <AnchorLink href={'#Development'}>
                <MenuItem onClick={handleClose} variant="menuOption">
                  Development
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
            </Menu>
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
      <Slideshow />
      <Stack alignItems={'center'} py={1.5}>
        <Pagination
          count={props.section.subheaders.length}
          variant="outlined"
          size="large"
          color="secondary"
          onChange={handleChange}
        />
      </Stack>
    </Stack>
  );
};
