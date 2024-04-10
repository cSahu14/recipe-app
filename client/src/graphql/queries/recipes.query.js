import { gql } from "@apollo/client";

export const GET_RECIPES = gql`
	query GetRecipes {
		recipes {
			id
			name
            image
            instructions
		}
	}
`;

export const GET_RECIPE = gql`
	query GetRecipe($id: ID!) {
		recipe(recipeId: $id) {
			id
			name
			image
			instructions
		}
	}
`;