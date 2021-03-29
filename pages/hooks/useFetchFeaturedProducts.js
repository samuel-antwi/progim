import { useState } from 'react';
import { useQuery } from 'react-query';
import graphcms from '../../graphql/client';
import { FEATURED_PRODUCTS } from '../../graphql/queries';

const useFetchFeaturedProducts = () => {
  const [size, setSize] = useState(3);

  const { data, isLoading, isError, error } = useQuery(
    ['fetchFeaturedProducts', size],
    async () => {
      const { products } = await graphcms.request(FEATURED_PRODUCTS, { size: size });
      return products;
    }
  );

  return { data, isError, isLoading, error };
};

export default useFetchFeaturedProducts;
