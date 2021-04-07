import { ADD_TO_BASKET } from '../types';

export const addToBasket = (product) => {
  window.scrollTo(0, 0);
  dispatch({
    type: ADD_TO_BASKET,
    payload: product,
  });
};
