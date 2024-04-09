import React from 'react'
import { Box, Button, Stack } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import Navbar from "../components/Navbar";
import { GET_RECIPES } from '../graphql/queries/recipes.query';
import { useQuery } from '@apollo/client';


const HomePage = () => {
    const { data, loading } = useQuery(GET_RECIPES)

    console.log("card", data)
  return (
    <Box>
    {/* <Navbar/> */}
        <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar/>
            {data && <Feed recipes={data?.recipes}/>}
            {/* <Rightbar/> */}
        </Stack>
    </Box>
  )
}

export default HomePage