import { Box, styled } from '@mui/material'
import React from 'react'
import CardComponent from './CardComponent'

const Feed = ({recipes}) => {
  const UserBox = styled(Box)(({theme}) => ({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: "20px",

  }))
  return (
    <UserBox bgcolor="pink" flex="6" p={2} >
      {recipes && 
        recipes?.map(recipe => {
          return (
              <CardComponent recipe={recipe}/>
          )
        })
      }
    </UserBox>
  )
}

export default Feed