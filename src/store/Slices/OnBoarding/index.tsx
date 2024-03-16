import { emptySplitApi } from "../../Services";
export const extendedApi = emptySplitApi.injectEndpoints({
  endpoints: (builder: any) => ({
    getRequest: builder.query({
      query: (search: any) => ({
        url: `/products${search}`,
        method: "GET",
        keepUnusedDataFor: 1,
      }),

      providesTags: (result: any) =>
        result
          ? result.map(({ id }: any) => ({ type: "products", id }))
          : ["products"],
    }),
    getRequestById: builder.query({
      query: (id: any) => ({
        url: `/products${id}`,
        method: "GET",
      }),

      providesTags: (result: any) =>
        result
          ? result.map(({ id }: any) => ({ type: "products", id }))
          : ["products"],
    }),
    postRequest: builder.mutation({
      query: ({ payload }: any) => ({
        url: "products", // use the endpoint URL from the argument
        method: "post",
        body: payload,
      }),

      invalidatesTags: ["products"],
    }),
    deleteRequest: builder.mutation({
      query: (id: string) => ({
        url: `products/${id}`, // use the endpoint URL from the argument
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
    updateRequest: builder.mutation({
      query: ({ id, payload }: any) => ({
        
        url: `/products/${id}`,
        method: "PUT",
        body: payload,
      }),

      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetRequestQuery,
  useGetRequestByIdQuery,
  usePostRequestMutation,
  useDeleteRequestMutation,
  useUpdateRequestMutation,
} = extendedApi;
