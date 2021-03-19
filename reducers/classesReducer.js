import { FETCH_POPULAR_CLASSES, FETCH_CLASSES } from '../types';

const initialState = {
  classes: [],
  popular_classes: [],
};

const classesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLASSES:
      return {
        ...state,
        classes: action.payload.classes,
        isLoading: false,
      };
    case FETCH_POPULAR_CLASSES:
      return { ...state };
    default:
      return { ...state };
  }
};

export default classesReducer;
