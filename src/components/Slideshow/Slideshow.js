import * as React from 'react';
import Box from '@mui/material/Box';
import { Panel } from './Panel/Panel';
import { Portfolio } from './Portfolio/Portfolio';
import { Bulletin } from './Bulletin/Bulletin';
import { Experience } from './Experience/Experience';

function getPage(identifier) {
  switch (identifier.type) {
    case 'Panel':
      return <Panel page={identifier} />;
    case 'Portfolio':
      return <Portfolio page={identifier} />;
    case 'Experience':
      return <Experience page={identifier} />;
    case 'Bulletin':
      return <Bulletin page={identifier} />;
    default:
      break;
  }
}

export const Slideshow = (props) => {
  return (
    <Box
      display="flex"
      flex={2}
      flexDirection={'row'}
      width={'100vw'}
      overflow={'hidden'}
    >
      {props.section.pages.map((page) => (
        <Box flexShrink={0} width={'100%'}>
          {getPage(page)}
        </Box>
      ))}
    </Box>
  );
};
