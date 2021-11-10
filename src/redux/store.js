import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
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

import { contactsApi } from './contactsApi/contacts-slice';
import authReducer from 'redux/auth/auth-slice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),

  contactsApi.middleware,
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: combineReducers({
    [contactsApi.reducerPath]: contactsApi.reducer,
    auth: persistReducer(authPersistConfig, authReducer),
  }),
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };
