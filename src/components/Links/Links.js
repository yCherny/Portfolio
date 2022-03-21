import * as React from 'react';
import Stack from '@mui/material/Stack';
import { LinkIcon } from '../LinkIcon/LinkIcon.js';
import githubLogo from '../../images/github.png';
import linkedInLogo from '../../images/linkedin.png';
import instagramLogo from '../../images/instagram.png';

const links = [
  { link: 'https://linkedin.com/in/yeg-ch', icon: linkedInLogo },
  { link: 'https://github.com/yCherny', icon: githubLogo },
  { link: 'https://www.instagram.com/yeg.ch/', icon: instagramLogo },
];

export const Links = () => {
  return (
    <Stack direction="row" spacing={2}>
      {links.map((link) => (
        <LinkIcon link={link.link} icon={link.icon} />
      ))}
    </Stack>
  );
};
