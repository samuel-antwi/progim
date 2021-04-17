import { useQuery } from 'react-query';
import graphcms from '../graphql/client';
import { GET_GROUPS } from '../graphql/queries';

const useFetchGroups = () => {
  const { data, isLoading, isError, error } = useQuery(['fetchGroups'], async () => {
    const { groups } = await graphcms.request(GET_GROUPS);
    return groups;
  });

  return { data, isLoading, isError, error };
};

export default useFetchGroups;
