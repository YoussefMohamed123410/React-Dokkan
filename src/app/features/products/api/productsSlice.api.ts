// // import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
// // import type { RootState } from "@/app/store";
// // import type { Product } from "@/types";
// // import { productsApi } from ".";

// // const productsAdapter = createEntityAdapter<Product>();

// // const initialState = productsAdapter.getInitialState();

// // const productsSlice = createSlice({
// //   name: "products",
// //   initialState,
// //   reducers: {},
// //   extraReducers: (builder) => {
// //     builder.addMatcher(
// //       productsApi.endpoints.getProducts.matchFulfilled,
// //       (state, action) => {
// //         productsAdapter.setAll(state, action.payload);
// //       },
// //     );
// //   },
// // });

// // export default productsSlice.reducer;

// // const selectProductsState = (state: RootState) => {
// //   const typedState = state as RootState & {
// //     products?: typeof initialState;
// //   };

// //   return typedState.product ?? typedState.products ?? initialState;
// // };

// // export const productsSelectors =
// //   productsAdapter.getSelectors(selectProductsState);

// // export const {
// //   selectAll: selectAllProducts,
// //   selectById: selectProductById,
// //   selectEntities: selectProductEntities,
// //   selectIds: selectProductIds,
// //   selectTotal: selectProductsTotal,
// // } = productsSelectors;

// import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
// import { productsApi } from ".";

// const productsAdapter = createEntityAdapter({
//   selectId: (product) => product.id,
// });

// const initialState = productsAdapter.getInitialState();

// const productsSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addMatcher(
//       productsApi.endpoints.getProducts.matchFulfilled,
//       (state, action) => {
//         productsAdapter.setAll(state, action.payload);
//       },
//     );
//   },
// });

// export const { selectEntities: selectProductEntities } =
//   productsAdapter.getSelectors((state) => state.products);
// export default productsSlice.reducer;
