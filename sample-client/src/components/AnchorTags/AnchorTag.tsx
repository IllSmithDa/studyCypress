import { Box, Link } from '@mui/material';
import React from 'react';

export default function AnchorTag() {
  return (
    <Box component="section" sx={{ m: "10px" }} aria-label="Anchor section">
      <Box component="h1">Anchor Tag Test</Box>
      <Link href="https://www.wikipedia.com" target="_blank">Test Link</Link>
    </Box>
  )
}