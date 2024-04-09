import { Home } from '@mui/icons-material'
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

const Lists = ({component, src, text, icon}) => {
  return (
    <ListItem disablePadding>
        <ListItemButton component={component} href={src}>
            <ListItemIcon>
                
            </ListItemIcon>
            <ListItemText primary={text} />
        </ListItemButton>
    </ListItem>
  )
}

export default Lists