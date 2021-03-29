import { useQuery } from 'react-query';
import graphcms from '../../graphql/client';
import { FEATURED_PRODUCTS } from '../../graphql/queries';

const useFetchFeaturedProducts = () => {
  const { data, isLoading, isError, error } = useQuery(['fetchFeaturedProducts'], async () => {
    const { products } = await graphcms.request(FEATURED_PRODUCTS);
    return products;
  });

  return { data, isError, isLoading, error };
};

export default useFetchFeaturedProducts;
