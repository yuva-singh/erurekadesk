import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { getRoleAPI } from '../../Components/api/api_base_url';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// const names = [
//   'Oliver Hansen',
//   'Van Henry',
//   'April Tucker',
//   'Ralph Hubbard',
//   'Omar Alexander',
//   'Carlos Abbott',
//   'Miriam Wagner',
//   'Bradley Wilkerson',
//   'Virginia Andrews',
//   'Kelly Snyder',
// ];

export default function MultipleSelectCheckmarks() {
  const token = sessionStorage.getItem("signature");
  const [personName, setPersonName] = React.useState([]);
  const [names, setnames] = useState([]);
  console.log('permissions1:' + names)

  const getnamesFunc = async () => {
     try {
       const getnamesdata = await axios.get(`${getRoleAPI}`, {
         headers: {
           Authorization: `Bearer ${token}`,
           "Content-Type": "application/json",
         },
       });
       setnames(getnamesdata.data.permissions);
       console.log('permissions2:' + getnamesdata.data.permissions)
       // alert("successful");
     } catch (error) {
       console.log(error);
       alert("invalid credentials");
     }
   };
   useEffect(() => {
    getnamesFunc();
   }, []);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 465 }}>
        <InputLabel id="demo-multiple-checkbox-label" color="warning">Select permissions</InputLabel>
        <Select
        color="warning"
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Select permissions" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox  color="warning" checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}