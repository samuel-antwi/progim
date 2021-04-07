import { useQuery } from 'react-query';
import graphcms from '../graphql/client';
import { GET_CLASSES } from '../graphql/queries';

const useFetchClasses = () => {
  const { data, isLoading, isError, error } = useQuery(['fetchClasses'], async () => {
    const { classes } = await graphcms.request(GET_CLASSES);
    return classes;
  });

  return { data, isLoading, isError, error };
};

export default useFetchClasses;
