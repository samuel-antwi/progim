import { createSlice } from '@reduxjs/toolkit';

export const sumItems = (basket) => {
  let itemCount = basket.reduce((total, product) => total + product.quantity, 0);
  let total = basket
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemCount, total };
};

const initialState = [];

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state) => {
      if (!state.basket.find((item) => item.id === action.payload.id)) {
        state.basket.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        ...sumItems(state.basket),
        basket: [...state.basket],
      };
    },
  },
});

export const { addToBasket } = basketSlice.actions;

export const selectBasket = (state) => state.basket;

export default basketSlice.reducer;
