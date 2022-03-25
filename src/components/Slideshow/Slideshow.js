import * as React from 'react';
import { animated, config, useSpring } from 'react-spring';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Panel } from './Panel/Panel';
import { Portfolio } from './Portfolio/Portfolio';
import { SubPortfolio } from './Portfolio/SubPortfolio';
import { Bulletin } from './Bulletin/Bulletin';
import { Experience } from './Experience/Experience';
import { useSelector } from 'react-redux';

function getPage(identifier) {
  switch (identifier.type) {
    case 'Panel':
      return <Panel page={identifier} />;
    case 'Portfolio':
      return <Portfolio page={identifier} />;
    case 'SubPortfolio':
      return <SubPortfolio page={identifier} />;
    case 'Experience':
      return <Experience page={identifier} />;
    case 'Bulletin':
      return <Bulletin page={identifier} />;
    default:
      break;
  }
}

export const Slideshow = (props) => {
  // const [style, setStyle] = useState({ backgroundColor: 'blue' });
  // const [style, set] = useSpring(() => ({
  //   backgroundColor: 'red',
  // }));

  // const storePage = useSelector((state) => state.pagination.value);

  // useEffect(() => {
  //   console.log(`Store Page: ${storePage}`);
  //   setStyle({ backgroundColor: 'green' });
  // }, [storePage]);

  const AnimatedBox = animated(Box);
  // const { scroll } = useSpring({
  //   scroll: 100,
  //   from: {
  //     scroll: 0,
  //   },
  //   delay: 300,
  //   config: config.molasses,
  // });

  return (
    <AnimatedBox
      id="slideshowBox"
      display="flex"
      flex={2}
      flexDirection={'row'}
      width={'100%'}
      // scrollLeft={scroll}
      style={{ overflowX: 'scroll' }}
      // style={style}
    >
      {props.section.pages.map((page) => (
        <Box flexShrink={0} width={'100%'}>
          {getPage(page)}
        </Box>
      ))}
    </AnimatedBox>
  );
};
