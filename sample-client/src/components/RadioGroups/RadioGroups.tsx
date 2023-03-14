import { 
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import React from "react";

// interface RadioValues {
//   [key: string]: string,
// }
// radio helper functions
export function createRadioButtons(values: string[]): {
  [key: string]: string
} {

  const radioObj:{[key: string]: string} = {};

  values.forEach((val:string) => {
    const upperCase = val[0].toUpperCase() + val.slice(1);
    radioObj[val] = upperCase
  })

  return radioObj;
}



// https://stackoverflow.com/questions/12710905/how-do-i-dynamically-assign-properties-to-an-object-in-typescript
export default function RadioGroups(
  props: {
    label: string
    radioVals: {[key: string]: string},
  }, 
) {
  const {label, radioVals} = props;
  // console.log(radioVals);
  return (
    <FormControl
      style={{ padding: "10px" }}
    >
      <FormLabel
        style={{ fontWeight: "700", fontSize: "1.3em" }}
        id="demo-radio-buttons-group-label"
      >
        {label}
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        {
          Object.keys(radioVals).map((keyLabel) => {
            return (
              <FormControlLabel
                key={keyLabel}
                value={keyLabel}
                control={<Radio />} 
                label={radioVals[keyLabel]} />
            )
          })
        }
      </RadioGroup>
    </FormControl>
  )
}