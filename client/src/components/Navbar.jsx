import { LunchDining, Mail, Notifications } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

import { useMutation, useQuery } from "@apollo/client";
import { LOGOUT } from "../graphql/mutations/user.mutation";
import { GET_AUTHENTICATED_USER } from "../graphql/queries/user.query";

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
  })
  const Search = styled("div")(({theme}) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
  }))
  const Icons = styled(Box)(({theme}) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
  }))

  const UserBox = styled(Box)(({theme}) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.down("sm")]: {
        display: "flex"
    }
  }))

const Navbar = () => {

  const [open, setOpen] = useState(false)

  const { data: authUserData } = useQuery(GET_AUTHENTICATED_USER);

	const [logout, { loading, client }] = useMutation(LOGOUT, {
		refetchQueries: ["GetAuthenticatedUser"],
	});

    const handleLogout = async () => {
		try {
			await logout();
			// Clear the Apollo Client cache FROM THE DOCS
			// https://www.apollographql.com/docs/react/caching/advanced-topics/#:~:text=Resetting%20the%20cache,any%20of%20your%20active%20queries
			client.resetStore();
		} catch (error) {
			console.error("Error logging out:", error);
		}
	};
  return (
    <AppBar position='sticky'>
        <StyledToolbar >
            <Typography variant='6' sx={{display: {xs: "none", sm: "block"}}}>
                CS DEV
            </Typography>
            <LunchDining sx={{display: {xs: "block", sm: "none"}}}/>
            <Search><InputBase placeholder='Search..'/></Search>
            <Icons>
                <Avatar onClick={e => setOpen(true)} sx={{ width: 30, height: 30}} alt="avatar" src="https://images.pexels.com/photos/20393326/pexels-photo-20393326/free-photo-of-a-woman-with-red-hair-and-face-paint.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </Icons>
        </StyledToolbar>
        <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={e => setOpen(false)}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
        >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
    </AppBar>
  )
}

export default Navbar