import Recipe from "../models/recipe.model.js";
import User from "../models/user.model.js";

const recipeResolver = {
    Query: {
        recipes: async (_, __, context) => {
			try {
				// if (!context.getUser()) throw new Error("Unauthorized");
				// const userId = await context.getUser()._id;
				const recipes = await Recipe.find();
				// const recipesCount = await Recipe.countDocuments();
				return recipes;
			} catch (err) {
				console.error("Error getting recipes:", err);
				throw new Error("Error getting recipes");
			}
		},
		recipe: async (_, { recipeId }) => {
			try {
				const recipe = await Recipe.findById(recipeId);
				return recipe;
			} catch (err) {
				console.error("Error getting recipe:", err);
				throw new Error("Error getting recipe");
			}
		},
    },
    Mutation: {
        createRecipe: async (_, { input }, context) => {
			try {
				const newRecipe = new Recipe({
					...input,
					userId: context.getUser()._id,
				});
				await newRecipe.save();
				return newRecipe;
			} catch (err) {
				console.error("Error creating Recipe:", err);
				throw new Error("Error creating Recipe");
			}
		},
    }
}

export default recipeResolver;