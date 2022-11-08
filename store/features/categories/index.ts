import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://northwind.vercel.app/api/" }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: builder => ({
    getCategories: builder.query<Category[], void>({
      query: () => "categories",
    }),
    getCategoryById: builder.query<Category, string>({
      query: id => `categories/${id}`,
    })
  }),
});

export const { useGetCategoriesQuery, useGetCategoryByIdQuery } = categoryApi;
