import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const basketApi = createApi({
  reducerPath: "basketApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["Basket"],
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: builder => ({
    getBasket: builder.query<Basket, void>({
      query: () => "basket",
      providesTags: ["Basket"],
    }),
    addToBasket: builder.mutation<Basket, BasketItem>({
      query: data => ({
        url: `basket`,
        method: `POST`,
        body: data,
      }),
      invalidatesTags: ["Basket"],
    }),
    clearBasket: builder.mutation<Basket, void>({
      query: () => ({
        url: `basket`,
        method: "DELETE",
      }),
      invalidatesTags: ["Basket"],
    }),
  }),
});

export const { useGetBasketQuery, useAddToBasketMutation, useClearBasketMutation } = basketApi;
