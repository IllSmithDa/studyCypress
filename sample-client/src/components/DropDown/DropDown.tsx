import {
  Box,
  FormControl,
  Select,
  InputLabel,
  FormLabel,
  MenuItem,
} from '@mui/material';
import React from 'react';
import { useState } from 'react';


export default function DropDown() {
  const [age, setAge] = useState<number | null>(null)
  return(
    <Box component="section" margin={1} >
      <Box component="h1" color="rgba(255, 255, 255, 0.7);">Dropdown for Ages</Box>
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel id="age-dropdown" >Age DropDown</InputLabel>
        <Select
          labelId="age-dropdown"
          id="age-select"
          value={age}
          label="Age DropDown"
          onChange={(event) => { 
            setAge(event.target.value as number);
           }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}