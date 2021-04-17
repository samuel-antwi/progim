import { useQuery } from 'react-query';
import graphcms from '../graphql/client';
import { GET_GROUP_DETAIL } from '../graphql/queries';

const useFetchGroupDetail = (slug) => {
  const { data, isLoading, isError, error } = useQuery(['fetchGroupDetail'], async () => {
    const { group } = await graphcms.request(GET_GROUP_DETAIL, { slug: slug });
    return group;
  });

  return { data, isLoading, isError, error };
};

export default useFetchGroupDetail;
