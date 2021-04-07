import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from '../types';

export const sumItems = (basket) => {
  let itemCount = basket.reduce((total, product) => total + product.quantity, 0);
  let total = basket
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { itemCount, total };
};

const initialState = {
  basket: [],
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    // add to basket
    case ADD_TO_BASKET:
      if (!state.basket.find((item) => item.id === action.payload.id)) {
        state.basket.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return { ...state, ...sumItems(state.basket), basket: [...state.basket] };

    // Remove from Basket
    case REMOVE_FROM_BASKET:
      return {
        ...state,
        ...sumItems(state.basket.filter((item) => item.id !== action.payload)),
        basket: [...state.basket.filter((item) => item.id !== action.payload)],
      };
    default:
      return {
        ...state,
      };
  }
};

export default shopReducer;
