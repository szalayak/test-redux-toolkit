import { Action, configureStore, Store, ThunkAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productApi, categoryApi, basketApi, rootReducer, RootState } from "./features";
import { Context, createWrapper } from "next-redux-wrapper";

const setupStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(
        productApi.middleware,
        categoryApi.middleware,
        basketApi.middleware
      ),
  });

  setupListeners(store.dispatch);

  return store;
};

// create a makeStore function
const makeStore = (context: Context) => setupStore()

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>;

// export an assembled wrapper
export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
