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
import { profileReducer } from './userProfile/userProfileSlice';
import { exeReducer } from './exercises/exeSlice';
import { workoutsReducer } from './workouts/workoutsSlice';
import { mealsReducer } from './meals/mealsSlice';
import { productsReducer } from './products/productsSlice';
import { filtersReducer } from './products/filtersSlice';
import { indicatorsReducer } from './userIndicators/userIndicatorsSlice';
import { statReducer } from './statistics/statisticsSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const combinedReducers = combineReducers({
  products: productsReducer,
  filters: filtersReducer,
  profile: profileReducer,
  indicators: indicatorsReducer,
  exercises: exeReducer,
  workouts: workoutsReducer,
  meals: mealsReducer,
  auth: persistReducer(authPersistConfig, authReducer),
  statistics: statReducer,
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
