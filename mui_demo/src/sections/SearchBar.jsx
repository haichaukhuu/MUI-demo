import React from 'react';
import { TextField, Button, Box } from '@mui/material';

function SearchBar() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 4 }}>
      <TextField
        variant="outlined"
        placeholder="Search"
        sx={{ width: '60%', marginRight: 2 }}
      />
      <Button variant="contained" color="primary">
        Search
      </Button>
    </Box>
  );
}

export default SearchBar;
