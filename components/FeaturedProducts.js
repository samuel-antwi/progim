import Header from './Header';
import LoadingScreen from './LoadingScreen';
import Image from 'next/image';
import Link from 'next/link';
import useFetchFeaturedProducts from '../hooks/useFetchFeaturedProducts';
import SaleBadge from './SaleBadge';

const FeaturedProducts = ({ products }) => {
  // const { data, isError, isLoading, error } = useFetchFeaturedProducts();

  // if (isLoading) return <LoadingScreen />;

  // if (isError) return <p>{error.message}</p>;

  return (
    <div className='max-w-7xl mx-auto pb-20 md:px-20 px-5'>
      <Header title='choose your brand' subTitile='our featured products' />
      <div className='md:grid md:grid-cols-2 pt-10 lg:grid-cols-3  gap-10'>
        {products.map((product) => (
          <div
            data-aos='flip-right'
            data-aos-duration='1000'
            className='shadow bg-white pb-10 relative mb-5 px-5'
            key={product.id}>
            <SaleBadge product={product} />
            <Link href={`shop/${product.slug}`}>
              <a>
                <Image
                  src={product.image.url}
                  width={product.image.width}
                  height={product.image.height}
                  layout='responsive'
                  alt={product.name}
                />
              </a>
            </Link>
            <div className='flex flex-col justify-center items-center justify-items-center space-y-5'>
              <Link href={`shop/${product.slug}`}>
                <a>
                  <p className='text-xl  font-semibold capitalize hover:text-primary'>
                    {product.name}
                  </p>
                </a>
              </Link>
              <span className='flex items-center space-x-4 text-lg'>
                {product.onSale && (
                  <p className='text-gray-800 line-through'>£{product.salePrice}</p>
                )}
                <p className='text-primary'>£{product.price}</p>
              </span>
              <button className='bg-primary py-3 text-sm rounded-full uppercase px-5 text-gray-100'>
                add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center justify-items-center mt-5'>
        <Link href='/products'>
          <a className='uppercase bg-primary text-gray-100 py-3 px-12 rounded-md font-bold'>
            shop all
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProducts;
