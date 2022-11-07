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
    getCategoryById: builder.query<Category, number>({
      query: id => `categories/${id}`,
    }),
    createCategory: builder.mutation<Category, Partial<Category>>({
      query: ({ id, ...data }) => ({
        url: `categories`,
        method: `POST`,
        body: data,
      }),
    }),
  }),
});

export const { useGetCategoriesQuery, useGetCategoryByIdQuery, useCreateCategoryMutation } = categoryApi;
