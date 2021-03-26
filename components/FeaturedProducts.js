import Header from './Header';
import { useQuery } from 'react-query';
import graphcms from '../graphql/client';
import { FEATURED_PRODUCTS } from '../graphql/queries';
import LoadingScreen from './LoadingScreen';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedProducts = () => {
  const { data, isError, isLoading } = useQuery(['featured'], async () => {
    const { products } = await graphcms.request(FEATURED_PRODUCTS);
    return products;
  });

  console.log(data);

  if (isLoading) return <LoadingScreen />;

  if (isError) return <p>Error loading products</p>;

  return (
    <div className='max-w-7xl mx-auto pb-20'>
      <Header title='choose your brand' subTitile='our featured products' />
      <div className='grid grid-cols-3 gap-10'>
        {data.map((product) => (
          <div className='shadow bg-white pb-10 relative' key={product.id}>
            {product.onSale && (
              <p className='flex justify-center items-center text-sm absolute top-5 text-gray-100 w-10 h-10 right-5 bg-primary rounded-full'>
                Sale
              </p>
            )}
            <Link href='/'>
              <a>
                <Image
                  src={product.image.url}
                  width={product.image.width}
                  height={product.image.height}
                  layout='responsive'
                  alt={product.name}
                />
                <div className='flex flex-col justify-center items-center justify-items-center space-y-5'>
                  <p className='md:text-xl font-semibold'>{product.name}</p>
                  <span className='flex items-center space-x-4 text-lg'>
                    {product.onSale && (
                      <p className='text-gray-800 line-through'>£{product.salePrice}</p>
                    )}
                    <p className='text-primary'>£{product.price}</p>
                  </span>
                  <button className='bg-primary py-3 rounded-full uppercase px-5 text-gray-100'>
                    add to cart
                  </button>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
