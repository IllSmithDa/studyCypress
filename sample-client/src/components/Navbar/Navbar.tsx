import React from 'react';
import { 
  Stack, 
  Box,
  Link,
  InputBase,
  Paper,
  IconButton,
} from '@mui/material';
import "./Navbar.scss";


export default function Navbar() {
  return (
    <Stack
      component="header"
      sx={{ flexGrow: 1 }}
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      spacing={2}
      aria-label="top menu navigation" 
      className="topnav"
  >
      <Box
        component="nav"
        position="static"
      > 
        <Link 
          href="#" 
          role="link"
          padding="10px 15px 9px 15px !important"
          
        >
          Daily Deals
        </Link>
        <Link 
          href="#" 
          role="link"
          padding="10px 15px 9px 15px !important"
          
        >
          Daily Deals
        </Link>
        <Link 
          href="#" 
          role="link"
          padding="10px 15px 9px 15px !important"
          
        >
          Brand
        </Link>
        <Link 
          href="#" 
          role="link"
          padding="10px 15px 9px 15px !important"
          
        >
          Help
        </Link>
        <Link 
          href="#" 
          role="link"
          padding="10px 15px 9px 15px !important"
          
        >
          Sell
        </Link> 
      </Box>
      <Paper
        component="form"
        sx={{  display: 'flex', alignItems: 'center', width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Products"
          inputProps={{ 'aria-label': 'Search Prodects' }}
        />
      </Paper>
    </Stack>
  )
}