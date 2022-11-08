import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  productApi,
  categoryApi,
  basketApi
} from "./features";
import { createWrapper } from "next-redux-wrapper";
import app, { appSlice } from "./features/app";

// create a makeStore function
const makeStore = () => {
  const store = configureStore({
    reducer: {
      [appSlice.name]: appSlice.reducer,
      [productApi.reducerPath]: productApi.reducer,
      [categoryApi.reducerPath]: categoryApi.reducer,
      [basketApi.reducerPath]: basketApi.reducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(
        productApi.middleware,
        categoryApi.middleware,
        basketApi.middleware
      ),
    devTools: true
  });

  setupListeners(store.dispatch);

  return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

// export an assembled wrapper
export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });

export * from "./features";
