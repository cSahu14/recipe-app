const recipeTypeDef = `#graphql 
    type Recipe {
        id: ID!,
        name: String!,
        ingredients: [String!],
        instructions: [String!],
        prepTimeMinutes: Int!,
        cookTimeMinutes: Int!,
        servings: Int!,
        difficulty: String!,
        cuisine: String!,
        caloriesPerServing: Float!,
        tags: [String!],
        userId: String!,
        image: String!,
        rating: Float!,
        reviewCount: Float!,
        mealType: [String!]
    }

    type Query {
        recipes(limit: Int): [Recipe!],
        recipe(recipeId: ID!): Recipe 
    }

    type Mutation {
        createRecipe( input: createRecipeInput): Recipe
    }

    input createRecipeInput {
        id: ID!,
        name: String!,
        ingredients: [String!],
        instructions: [String!],
        prepTimeMinutes: Int!,
        cookTimeMinutes: Int!,
        servings: Int!, 
        difficulty: String!,
        cuisine: String!,
        caloriesPerServing: Float!,
        tags: [String!],
        userId: String!,
        image: String!,
        rating: Float!,
        reviewCount: Float!,
        mealType: [String!]
    }
`

export default recipeTypeDef;