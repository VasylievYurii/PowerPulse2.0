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

// import { diaryReducer } from './diary/diarySlice';
// import { userReducer } from './user/userSlice';
import { exeReducer } from './exercises/exeSlice';
import { workoutsReducer } from './workouts/workoutsSlice';
import { mealsReducer } from './meals/mealsSlice';
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
  // diary: diaryReducer,
  // users: userReducer,
  exercises: exeReducer,
  workouts: workoutsReducer,
  meals: mealsReducer,
  auth: persistReducer(authPersistConfig, authReducer),
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
