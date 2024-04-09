import { Group, Home, ModeNight, Pages, People, Person, Settings, Store } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'
import Lists from './Lists'

const Sidebar = () => {
  return (
    <Box flex="2" p={2} sx={{ display: { xs: "none", sm: "block"}}}>
        <List>
          <Lists component="a" src="#home" text="Homepage"/>
          <Lists component="a" src="#pages" text="Pages" />
          <Lists component="a" src="#groups" text="Groups" />
          <Lists component="a" src="#marketplace" text="Marketplace" />
          <Lists component="a" src="#friends" text="Friends" />
          <Lists component="a" src="#settings" text="Settings" />
          <Lists component="a" src="#profile" text="Profile" />
          <ListItem disablePadding>
            <ListItemButton component="a" href='#profile'>
              <ListItemIcon>
                <ModeNight/>
              </ListItemIcon>
              <Switch/>
            </ListItemButton>
          </ListItem>
        </List>
    </Box>
  )
}

export default Sidebar