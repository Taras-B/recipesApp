import React from 'react'
import { render } from '@testing-library/react'
import Recipe from '../components/Recipe'

interface IRecipe {
  imageRecipe: string
  label: string
  ingredients: Array<string>
}

describe('render component', () => {
  let testProps: IRecipe
  beforeEach(() => {
    testProps = {
      label: 'cherry',
      imageRecipe: 'http://image1.png',
      ingredients: ['chicken 2gr.'],
    }
  })
  it('render component with props', () => {
    const { queryByText, queryByTestId } = render(
      <Recipe
        label={testProps.label}
        ingredients={testProps.ingredients}
        imageRecipe={testProps.imageRecipe}
      />
    )

    expect(queryByText(testProps.label)).toBeVisible()
    expect(queryByTestId('image-test')).toBeTruthy()

    expect(queryByText(testProps.ingredients[0])).toBeVisible()
  })
})
