import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { ProductSlice } from "./services/ProductSlice";
import { SearchSlice } from "./services/SearchSlice";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["Product"],
};

const rootReducer = combineReducers({
  [ProductSlice.name]: ProductSlice.reducer,
  [SearchSlice.name]: SearchSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});
export const persistor = persistStore(store);
export default store;
