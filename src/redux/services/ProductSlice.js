import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productBuy: [],
  buy: false,
  productLike: [],
};

export const ProductSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    setProductBuyActions: (state, action) => {
      state.productBuy.push(action.payload);
      state.buy = false;
    },
    setProductUnBuyActions: (state, action) => {
      state.productBuy = state.productBuy.filter(
        (item) => item !== action.payload
      );
    },
    setProductLikeActions: (state, action) => {
      state.productLike.push(action.payload);
    },
    setProductUnLikeActions: (state, action) => {
      state.productLike = state.productLike.filter(
        (item) => item !== action.payload
      );
    },
    setProductClearActions: (state) => {
      state.productBuy = [];
      state.buy = true;
    },
  },
});

export const {
  setProductBuyActions,
  setProductUnBuyActions,
  setProductLikeActions,
  setProductUnLikeActions,
  setProductClearActions,
} = ProductSlice.actions;

export const ProductReducer = ProductSlice.reducer;

export const getProduct = (state) => state.Product;
