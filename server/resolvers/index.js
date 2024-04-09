import { mergeResolvers } from "@graphql-tools/merge";

import recipeResolver from "./recipe.resolver.js";
import userResolver from "./user.resolver.js";

const mergedResolver = mergeResolvers([userResolver, recipeResolver]);

export default mergedResolver;