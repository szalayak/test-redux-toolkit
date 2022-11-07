import { combineReducers } from "@reduxjs/toolkit";
import { basketApi } from "./basket";
import { categoryApi } from "./categories";
import { productApi } from "./products";

export * from "./categories";
export * from "./products";
export * from "./basket"

export const rootReducer = combineReducers({
  [productApi.reducerPath]: productApi.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
  [basketApi.reducerPath]: basketApi.reducer
});

export type RootState = ReturnType<typeof rootReducer>;
