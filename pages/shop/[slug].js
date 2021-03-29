import { useQuery } from 'react-query';
import graphcms from '../../graphql/client';
import { FEATURED_PRODUCTS, PRODUCT } from '../../graphql/queries';
import { BsLink45Deg } from 'react-icons/bs';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';

const Product = ({ product }) => {
  console.log(product);
  return (
    <div>
      <ProductBanner>
        <div className='overlay absolute text-gray-200'>
          <div className='flex h-full container'>
            <div className='my-auto'>
              <h1 className='uppercase md:text-4xl font-extrabold mb-5 tracking-wider'>Product</h1>
              <div className='flex items-center md:text-lg text-sm space-x-2 py-2 px-3 bg-primary'>
                <Link href='/'>
                  <a>Home</a>
                </Link>
                <BsLink45Deg size={23} />
                <p className='capitalize'>shop</p>
                <BsLink45Deg size={23} />
                <p className='capitalize'>{product.name}</p>
              </div>
            </div>
          </div>
        </div>
      </ProductBanner>
      <div className='py-20 max-w-7xl mx-auto'>
        <div className='grid grid-cols-2 gap-10'>
          <div className=' bg-white col-span-1'>
            <Image width={900} height={900} src={product.image.url} alt={product.name} />
          </div>
          <div className='col-span-1'>
            <h1 className='md:text-2xl font-semibold mb-5'>{product.name}</h1>
            <span className='flex items-center space-x-4 font-semibold mb-10'>
              {product.onSale && <p className='text-gray-600 line-through'>£{product.price}</p>}
              <p className='text-primary  md:text-xl'>£{product.salePrice}</p>
            </span>
            <p className='text-gray-600'>{product.shortDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

export const getStaticPaths = async () => {
  const { products } = await graphcms.request(FEATURED_PRODUCTS);
  return {
    paths: products.map(({ slug }) => ({
      params: {
        slug: slug,
      },
    })),

    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { product } = await graphcms.request(PRODUCT, {
    slug: params.slug,
  });
  return {
    props: {
      product,
    },
  };
};

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
