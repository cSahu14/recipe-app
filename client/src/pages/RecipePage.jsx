import { useQuery } from '@apollo/client';
import React from 'react'
import { useParams } from 'react-router-dom';
import { GET_RECIPE } from '../graphql/queries/recipes.query';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';


const RecipePage = () => {
    const { id } = useParams();
	const { loading, data } = useQuery(GET_RECIPE, {
		variables: { id: id },
	});
  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={data?.recipe?.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { data?.recipe?.name }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { data?.recipe?.instructions }
          </Typography>
        </CardContent>
    </Card>
  )
}

export default RecipePage