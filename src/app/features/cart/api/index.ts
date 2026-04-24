// import { api } from "@/app/api";

// export const cartApi = api.injectEndpoints({
//   endpoints: (builder) => ({
//     getCart: builder.query({
//       query: () => "/cart",
//       providesTags: ["Cart"],
//     }),

//     addToCart: builder.mutation({
//       query: (body) => ({
//         url: "/cart",
//         method: "POST",
//         body,
//       }),
//       invalidatesTags: ["Cart"],
//     }),
//   }),
// });

// export const { useGetCartQuery, useAddToCartMutation } = cartApi;
