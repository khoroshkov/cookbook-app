export default (state, action) => {
  switch (action.type) {
    case "GET_RECIPES":
      return {
        ...state,
        loading: false,
        recipes: action.payload,
      };
    case "ADD_RECIPE":
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
      };

    case "DELETE_RECIPE":
      return {
        ...state,
        recipes: state.recipes.filter(
          (recipe) => recipe._id !== action.payload
        ),
      };

    case "EDIT_RECIPE":
      let newState = state.recipes.filter(
        (recipe) => recipe._id !== action.payload.id
      );
      return {
        ...state,
        recipes: [...newState],
      };

    case "RECIPES_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
