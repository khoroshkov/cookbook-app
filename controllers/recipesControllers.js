const recipeModel = require("../models/RecipeModel"); //????

// @desc Get all recipes
// @route GET /recipes
// @access Public

exports.getRecipes = async (req, res, next) => {
  try {
    const recipes = await recipeModel.find();

    return res.status(200).json({
      success: true,
      count: recipes.length,
      data: recipes,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc Add recipe
// @route POST /recipes
// @access Public

exports.addRecipe = async (req, res, next) => {
  try {
    const recipe = await recipeModel.create(req.body);

    return res.status(201).json({
      success: true,
      data: recipe,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

// @desc Delete recipe
// @route DELETE /recipes/:id
// @access Public

exports.deleteRecipe = async (req, res, next) => {
  try {
    const recipe = await recipeModel.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        success: false,
        error: "No recipe found",
      });
    }

    await recipe.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// @desc Edit recipe
// @route PATCH  /recipes/:id
// @access Public

exports.editRecipe = async (req, res, next) => {
  try {
    const recipe = await recipeModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    if (!recipe) {
      return res.status(404).json({
        success: false,
        error: "No recipe found",
      });
    }

    return res.status(200).json({
      success: true,
      data: recipe,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
