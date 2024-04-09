import { gql } from "@apollo/client";

export const GET_AUTHENTICATED_USER = gql`
	query GetAuthenticatedUser {
		authUser {
			id
			name
            email
		}
	}
`;

export const GET_USER_AND_RECIPES = gql`
	query GetUserAndRecipes($userId: ID!) {
		user(userId: $userId) {
			_id
			name
            email
			# relationships
			recipe {
				_id
			}
		}
	}
`;