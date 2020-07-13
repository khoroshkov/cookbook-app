const express = require("express");
const router = express.Router();

const {
  getRecipes,
  addRecipe,
  deleteRecipe,
  editRecipe
} = require("../controllers/recipesControllers");

router.route("/").get(getRecipes).post(addRecipe);

router.route("/:id").delete(deleteRecipe).patch(editRecipe);

module.exports = router;