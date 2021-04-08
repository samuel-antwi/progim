import { ADD_TO_BASKET, DECREASE_QTY, INCREASE_QTY, REMOVE_FROM_BASKET } from '../types';

export const addToBasket = (product) => (dispatch) => {
  dispatch({
    type: ADD_TO_BASKET,
    payload: product,
  });
};

export const removeFromBasket = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_BASKET,
    payload: id,
  });
};

// Increase item qty in basket
export const increaseQuantity = (id) => (dispatch) => {
  dispatch({
    type: INCREASE_QTY,
    payload: id,
  });
};
// Increase item qty in basket
export const decreaseQuantity = (id) => (dispatch) => {
  dispatch({
    type: DECREASE_QTY,
    payload: id,
  });
};
