import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth/authSlice';
//import { diaryReducer } from './diary/diarySlice';
import { productFormReducer } from './productForm/productFormSlice';
// import { userReducer } from './user/userSlice';
import { profileReducer } from './userProfile/userProfileSlice';
import { exeReducer } from './exercises/exeSlice';
import { workoutsReducer } from './workouts/workoutsSlice';
import { mealsReducer } from './meals/mealsSlice';
import { productsReducer } from './products/productsSlice_var2';
import { indicatorsReducer } from './userIndicators/userIndicatorsSlice';
// import { contactsReducer } from './contacts/contactsSlice';
// import { filterReducer } from './contacts/filterSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const combinedReducers = combineReducers({
  //   contacts: contactsReducer,
  //   filter: filterReducer,
  // users: userReducer,
  products: productsReducer,
  profile: profileReducer,
  indicators: indicatorsReducer,
  exercises: exeReducer,
  workouts: workoutsReducer,
  meals: mealsReducer,
  auth: persistReducer(authPersistConfig, authReducer),
  productForm: productFormReducer,
});

export const store = configureStore({
  reducer: combinedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
