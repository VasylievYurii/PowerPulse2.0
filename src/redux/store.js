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
import { diaryReducer } from './diary/diarySlice';
import { productFormReducer } from './productForm/productFormSlice';
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
  diary: diaryReducer,
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
