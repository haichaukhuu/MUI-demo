import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const style = {
  py: 0,
  width: '100%',
  height: '100%',
  maxWidth: 360,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
};

export default function Filters() {
  return (
    <List sx={style} maxHeight = {false}>
      <Typography variant="h4">
        Filters:
      </Typography>

      <ListItem>
        <ListItemText primary="Location/Place:" />
      </ListItem>
      <Divider component="li" />


      <ListItem>
        <ListItemText primary="Objects:" />
      </ListItem>
      <Divider component="li" />


      <ListItem>
        <ListItemText primary="Colors:" />
      </ListItem>
      <Divider component="li" />

    </List>
  );
}
