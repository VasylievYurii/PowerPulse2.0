export const selectUserAuthenticated = (state) => state.auth.authenticated;
export const selectUserData = (state) => state.auth.userData;
export const selectUserIsLoading = (state) => state.auth.isLoading;
export const selectUserError = (state) => state.auth.error;
export const selectUserToken = (state) => state.auth.token;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state) => state.auth.isRefreshing;

// =========== W O R K O U T ==================

export const selectWorkouts = (state) => state.workouts.workouts;
export const selectWorkoutsIsLoading = (state) => state.workouts.isLoading;
export const selectWorkoutsError = (state) => state.workouts.error;

// =========== M E A L S ==================

export const selectMeals = (state) => state.meals.meals;
export const selectMealsIsLoading = (state) => state.meals.isLoading;
export const selectMealsError = (state) => state.meals.error;

// =========== P R O D U C T S ==================

export const selectProducts = (state) => state.products.products;
export const selectCategoriesProducts = (state) => state.products.categories;
export const selectProductsIsLoading = (state) => state.products.isLoading;
export const selectProductsError = (state) => state.products.error;

// =========== U S E R  P R O F I L E ============

export const selectUserProfile = (state) => state.profile.userProfile;
export const selectUserProfileIsLoading = (state) => state.profile.isLoading;
export const selectUserProfileError = (state) => state.profile.Error;
export const selectUserTargets = (state) => state.profile.target;

//============= U S E R  T A R G E T S ==============

// export const selectUserCalories = (state) => state.targets.calories;
// export const selectUserCaloriesIsLoading = (state) => state.targets.isLoading;
// export const selectUserCaloriesError = (state) => state.targets.error;

// =========== I N D I C A T O R S ==================

export const selectIndicators = (state) => state.indicators.indicators;
