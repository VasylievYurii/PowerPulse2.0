export const selectUserAuthenticated = (state) => state.auth.authenticated;
export const selectUserData = (state) => state.auth.userData;
export const selectUserIsLoading = (state) => state.auth.isLoading;
export const selectUserError = (state) => state.auth.error;
export const selectUserToken = (state) => state.auth.token;

export const selectDiaryMeals = (state) => state.diary.meals;
export const selectDiaryIsLoading = (state) => state.diary.isLoading;
export const selectDiaryError = (state) => state.diary.error;

// =========== P R O D U C T S ==================

export const selectFilter = (state) => state.filters.filter;

export const selectAllProductsList = (state) => state.filters.allProducts;

export const selectCategoriesProducts = (state) => state.filters.categories;

export const getIsLoading = (state) => state.filters.isLoading;

export const getError = (state) => state.filters.error;
