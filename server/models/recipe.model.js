import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ingredients : {
        type: Array,
        required: true,
    },
    instructions: {
        type: Array,
        required: true,
    },
    prepTimeMinutes: {
        type: Number,
        required: true,
    },
    cookTimeMinutes: {
        type: Number,
        required: true,
    },
    servings: {
        type: Number,
        required: true,
    },
    difficulty: {
        type: String,
        enum: ["Easy", "Medium", "Hard"],
        required: true,
    },
    cuisine: {
        type: String,
        required: true,
    },
    tags: {
        type: Array,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    reviewCount: {
        type: Number,
        required: true,
    },
    mealType: {
        type: Array,
        required: true,
    },

}, { timestamps: true })

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;