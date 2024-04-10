import { LunchDining, Mail, Notifications } from '@mui/icons-material'
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

import { useMutation, useQuery } from "@apollo/client";
import { LOGOUT } from "../graphql/mutations/user.mutation";
import { GET_AUTHENTICATED_USER } from "../graphql/queries/user.query";
import { Link } from 'react-router-dom';

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
    display: "flex",
    alignItems: "center",
    gap: "20px",
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
			client.resetStore();
		} catch (error) {
			console.error("Error logging out:", error);
		}
	};
  return (
    <AppBar position='sticky'>
        <StyledToolbar >
            <Link to="/">
              <Typography variant='6' component="p" sx={{display: {xs: "none", sm: "block"}}}>
                  RECIPE
              </Typography>
            </Link>
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