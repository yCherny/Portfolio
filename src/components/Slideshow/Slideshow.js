import * as React from 'react';
import Box from '@mui/material/Box';
import { Root } from './Root/Root';
import { Panel } from './Panel/Panel';
import { Education } from './Education/Education';
const panels = ['red', 'green', 'blue', 'purple'];
{
  /* {props.section.header === 'Résumé' ? <Education /> : <Root />} */
  /* <Root /> */
  /* <Panel /> */
  /* <Toolkit /> */
}

export const Slideshow = () => {
  return (
    // Container
    <Box
      display="flex"
      flex={2}
      flexDirection={'row'}
      width={'100vw'}
      overflow={'hidden'}
    >
      {panels.map((panel) => (
        <Box flexShrink={0} width={'100%'}>
          <Panel />
        </Box>
      ))}
      ;
    </Box>
  );
};
