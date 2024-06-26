import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const CardComponent = ({recipe}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <Link to={`/recipe/${recipe.id}`}>
        <CardMedia
          sx={{ height: 140 }}
          image={recipe.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { recipe.name }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { recipe.instructions }
          </Typography>
        </CardContent>
      </Link>
    </Card>
  )
}

export default CardComponent