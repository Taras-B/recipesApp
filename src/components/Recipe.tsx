import React from 'react'
import { Card, CardHeader, CardMedia, Typography, CardContent } from '@material-ui/core'

interface IRecipeProps {
  imageRecipe: string
  label: string
  ingredients: Array<string>
}

const Recipe: React.FC<IRecipeProps> = ({ imageRecipe, label, ingredients }) => {
  return (
    <>
      <Card style={{ maxWidth: '600px' }}>
        <CardHeader title={label} />
        <CardMedia
          style={{ height: '350px' }}
          image={imageRecipe}
          title={label}
          data-testid='image-test'
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='ul'>
            {ingredients.map((recipe: string, id: number) => (
              <Typography key={id} style={{ listStyle: 'none' }} component='li'>
                {recipe}
              </Typography>
            ))}
          </Typography>
        </CardContent>
      </Card>
    </>
  )
}

export default Recipe
