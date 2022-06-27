import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { ChangeEvent, useState } from "react";

const options = [
  {
    label: "Ubuntu 20.04",
    value: "Ubuntu 20.04",
  },
  {
    label: "Windows 10",
    value: "Windows 10",
  },
  {
    label: "Ubuntu Server",
    value: "Ubuntu Server",
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

export default function List_image() {
  const classes = useStyles();
  const [selectValue, setSelectValue] = useState("");
  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    setSelectValue(event.target.value as string);
  };

  return (
    <>
      <div>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">
            Imagens
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={selectValue}
            onChange={handleChange}
            label="Imagens"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {options.map((option) => (
              <MenuItem value={option.value}> {option.label} </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>{selectValue}</div>
    </>
  );
}

// modo sem o @materialUI

// function Create_network() {
//     const [selectValue, setSelectValue] = useState("");

//     return (
//       <>
//         <select onChange={(e) => setSelectValue(e.target.value)}>
//           {options.map((option) => (
//             <option value={option.value}>{option.label}</option>
//           ))}
//         </select>

//         <div>{selectValue}</div>
//       </>
//     );
//   }
//   export default Create_network;
