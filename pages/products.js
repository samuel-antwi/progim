import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import LoadingScreen from '../components/LoadingScreen';
import useFetchAllProducts from '../hooks/useFetchAllProducts';
import { BsLink45Deg } from 'react-icons/bs';
import SaleBadge from '../components/SaleBadge';
import Header from '../components/Header';

const products = () => {
  const { data, isLoading, error, isError } = useFetchAllProducts();

  if (isLoading) return <LoadingScreen />;

  return (
    <>
      <ProductBanner>
        <div className='overlay absolute text-gray-200'>
          <div className='flex h-full container'>
            <div className='my-auto'>
              <h1 className='uppercase md:text-4xl font-extrabold mb-5 tracking-wider'>Products</h1>
              <div className='flex items-center md:text-lg text-sm space-x-2 py-2 px-3 bg-primary'>
                <Link href='/'>
                  <a>Home</a>
                </Link>
                <BsLink45Deg size={23} />
                <p className='capitalize'>shop</p>
              </div>
            </div>
          </div>
        </div>
      </ProductBanner>
      <div className='max-w-7xl mx-auto py-20 md:px-20 px-5'>
        <Header title='choose your brand' subTitile='shop all products' />
        <div className='md:grid md:grid-cols-2 lg:grid-cols-3 pt-10  gap-10'>
          {data.map((product) => (
            <div className='shadow bg-white pb-10 relative mb-5 px-5' key={product.id}>
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
      </div>
    </>
  );
};

export default products;

const ProductBanner = styled.div`
  background: url('/images/bruce-mars-jY-GlbKeTDs-unsplash.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 30vh;
  position: relative;

  .overlay {
    width: 100%;
    height: 30vh;
    background: rgba(0, 0, 0, 0.8);
  }
`;
