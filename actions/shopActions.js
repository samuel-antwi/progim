import { ADD_TO_BASKET } from '../types';

export const addToBasket = (product) => async (dispatch) => {
  dispatch({
    type: ADD_TO_BASKET,
    payload: product,
  });
};
