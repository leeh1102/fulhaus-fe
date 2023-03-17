import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Cart from './Cart';

export default function SideMenu({sidebarOpen, toggleDrawer, products}) {
  return (
    <SwipeableDrawer
      anchor="right"
      open={sidebarOpen}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <Box
        sx={{ width: 400 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <Cart products={products}/>
      </Box>
    </SwipeableDrawer>
  );
}