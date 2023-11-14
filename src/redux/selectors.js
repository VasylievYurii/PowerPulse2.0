export const selectUserAuthenticated = (state) => state.auth.authenticated;
export const selectUserData = (state) => state.auth.userData;
export const selectUserIsLoading = (state) => state.auth.isLoading;
export const selectUserError = (state) => state.auth.error;
export const selectUserToken = (state) => state.auth.token;

// =========== D I A R Y ==================

export const selectDiaryMealsExercise = (state) => state.diary.diaryMealsExercise;

// =========== M E A L S ==================

export const selectMeals = (state) => state.meals.meals;
export const selectMealsIsLoading = (state) => state.meals.isLoading;
export const selectMealsError = (state) => state.meals.error;

// =========== P R O D U C T S ==================

export const selectFilter = (state) => state.filters.filter;
export const selectProductsByCategories = (state) => state.filters.categories;
export const selectAllProductsList = (state) => state.filters.allProducts;
