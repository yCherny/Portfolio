import * as React from 'react';

export const LinkIcon = ({ link, icon }) => {
  return (
    <a href={link}>
      <img
        src={icon}
        alt="Link"
        width={{ xs: 12, sm: 32 }}
        height={{ xs: 12, sm: 32 }}
      />
    </a>
  );
};
