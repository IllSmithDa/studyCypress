import { 
  Checkbox, 
  FormControlLabel, 
  FormGroup,
  Box,
  FormLabel
} from '@mui/material';
import React, { useState } from 'react';

export default function CheckBoxes() {
  const [checkedRed, setCheckedRed] = useState(false);
  const [checkedBlue, setCheckedBlue] = useState(false);
  return (
    <FormGroup
      style={{ padding: "10px" }}
    >
      <FormLabel
        style={{ fontWeight: "700", fontSize: "1.3em" }}
      >
        Pills CheckBoxes
        </FormLabel>
      <FormControlLabel 
        control={
        <Checkbox
          id="redCheck"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setCheckedRed(event.target.checked);
          }}
          checked={checkedRed} 
        />} 
        label={`Red Pill: ${checkedRed}`} 
      />
      <FormControlLabel 
        control={
        <Checkbox  
          id="blueCheck"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setCheckedBlue(event.target.checked);
          }}
          checked={checkedBlue} 
        />} 
        label={`Blue Pill: ${checkedBlue}`} 
      />
    </FormGroup>
  ) 
}