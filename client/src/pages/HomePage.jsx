import React from 'react'
import { Box, Button, Stack } from "@mui/material";
import Feed from "../components/Feed";
import Navbar from "../components/Navbar";
import { GET_RECIPES } from '../graphql/queries/recipes.query';
import { useQuery } from '@apollo/client';


const HomePage = () => {
    const { data, loading } = useQuery(GET_RECIPES)

  return (
    <Box>
    {/* <Navbar/> */}
        <Stack direction="row" spacing={2} justifyContent="space-between">
            {data && <Feed recipes={data?.recipes}/>}
        </Stack>
    </Box>
  )
}

export default HomePage