import { Box } from "@mui/material";

export default function IFrame() {
  return (
    <Box component="section" sx={{ m: 1 }}>
      <Box component="h1">I Frame Test</Box>
      <Box
        component="iframe"
        id="inlineFrameExample"
        title="Inline Frame Example"
        width="500px"
        height="400px"
        src="https://ironcodeman.com/git"
        >
      </Box>
    </Box>
  )
}