import { useQuery } from 'react-query';
import graphcms from '../graphql/client';
import { TESTIMONIALS } from '../graphql/queries';

const useFetchTestimonials = () => {
  const { data, isLoading, isError, error } = useQuery(['testimonies'], async () => {
    const { testimonies } = await graphcms.request(TESTIMONIALS);
    return testimonies;
  });

  return { data, isError, isLoading, error };
};

export default useFetchTestimonials;
