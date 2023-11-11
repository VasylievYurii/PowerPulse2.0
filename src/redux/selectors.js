
export const selectUserAuthenticated = state => state.auth.authenticated;
export const selectUserData = state => state.auth.userData;
export const selectUserIsLoading = state => state.auth.isLoading;
export const selectUserError = state => state.auth.error;
export const selectUserToken = state => state.auth.token;

export const selectDiaryMeals = state => state.diary.meals;
export const selectDiaryIsLoading = state => state.diary.isLoading;
export const selectDiaryError = state => state.diary.error;

