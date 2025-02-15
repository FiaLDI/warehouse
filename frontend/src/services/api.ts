import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api",
        credentials: "include",
    }),
    endpoints: (builder) => ({
        currentProduct: builder.query({
            query: ({type}) => ({
                url: `/product?type=${type}`,
                method: "GET",
            }),
        }),
        allType: builder.query({
            query: () => ({
                url: `/product/type`,
                method: "GET",
            }),
        }),
        filterByType: builder.query({
            query: ({type}) => ({
                url: `/product/filters?type=${type}`,
                method: "GET",
            }),
        }),
    }),
});

export const {
    useCurrentProductQuery,
    useAllTypeQuery,
    useFilterByTypeQuery
} = productApi;
