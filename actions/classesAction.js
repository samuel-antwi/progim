import graphcms from '../graphql/client';
import { GET_CLASSES } from '../graphql/queries';
import { FETCH_CLASSES } from '../types';

export const getClasses = () => async (dispatch) => {
  const { classes } = await graphcms.request(GET_CLASSES);

  dispatch({
    type: FETCH_CLASSES,
    payload: {
      classes,
    },
  });
};
