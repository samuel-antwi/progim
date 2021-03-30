import { useQuery } from 'react-query';
import graphcms from '../graphql/client';
import { PRODUCT } from '../graphql/queries';
import { useRouter } from 'next/router';

const useFetchProductDetails = (slug) => {
  const { data, isLoading, isError, error } = useQuery(['productDetails'], async () => {
    const { products } = await graphcms.request(PRODUCT, { slug });
    return products;
  });

  return { data, isError, isLoading, error };
};

export default useFetchProductDetails;
