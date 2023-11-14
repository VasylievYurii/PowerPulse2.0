export const selectUserAuthenticated = (state) => state.auth.authenticated;
export const selectUserData = (state) => state.auth.userData;
export const selectUserIsLoading = (state) => state.auth.isLoading;
export const selectUserError = (state) => state.auth.error;
export const selectUserToken = (state) => state.auth.token;

// =========== W O R K O U T ==================

export const selectWorkouts = (state) => state.workouts.workouts;
export const selectWorkoutsIsLoading = (state) => state.workouts.isLoading;
export const selectWorkoutsError = (state) => state.workouts.error;

// =========== M E A L S ==================

export const selectMeals = (state) => state.meals.meals;
export const selectMealsIsLoading = (state) => state.meals.isLoading;
export const selectMealsError = (state) => state.meals.error;

// =========== P R O D U C T S ==================

export const selectFilter = (state) => state.filters.filter;

export const selectAllProductsList = (state) => state.filters.allProducts;

export const selectCategoriesProducts = (state) => state.filters.categories;

export const getIsLoading = (state) => state.filters.isLoading;

export const getError = (state) => state.filters.error;
