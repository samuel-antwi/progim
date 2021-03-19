import { FETCH_FEATURED_PRODUCTS, FETCH_PRODUCTS } from '../types';

const initialState = {
  products: [],
  featured_products: [],
};

const shopReducer = (state = initialState, actions) => {
  switch (actions) {
    case FETCH_PRODUCTS:
      return {
        ...state,
      };
    case FETCH_FEATURED_PRODUCTS:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default shopReducer;
