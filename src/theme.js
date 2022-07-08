import React from "react";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  root: {
    '& label.Mui-focused': {
     color: 'white',
      },
     '& .MuiInput-underline:after': {
      borderBottomColor: 'yellow',
     },
    '& .MuiOutlinedInput-root': {
      borderColor: 'yellow',
      
     },
    },
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#ffffff',
      darker: '#ffff',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});

export default theme;
