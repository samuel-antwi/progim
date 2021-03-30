import { useQuery } from 'react-query';
import graphcms from '../graphql/client';
import { ALL_PRODUCTS } from '../graphql/queries';

const useFetchAllProducts = () => {
  const { data, isLoading, isError, error } = useQuery(['allProducts'], async () => {
    const { products } = await graphcms.request(ALL_PRODUCTS);
    return products;
  });

  return { data, isError, isLoading, error };
};

export default useFetchAllProducts;
