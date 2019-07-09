import React from 'react';
import Box from '@material-ui/core/Box';

export default function Flex() {
  return (
    <div style={{ width: '100%' }}>
      <Box display="flex" p={1} bgcolor="background.paper" justifyContent="spaceBetween" alignItems="center">
        {"I'm a flexbox container!"}
      </Box>
    </div>
  );
}
