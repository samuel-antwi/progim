import { FETCH_POPULAR_CLASSES, FETCH_CLASSES } from '../types';

const initialState = {
  classes: [],
  popular_classes: [],
};

const classesReducer = (state = initialState, actions) => {
  switch (actions) {
    case FETCH_CLASSES:
      return { ...state };
    case FETCH_POPULAR_CLASSES:
      return { ...state };
    default:
      return { ...state };
  }
};

export default classesReducer;
