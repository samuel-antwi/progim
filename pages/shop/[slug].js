import graphcms from '../../graphql/client';
import { FEATURED_PRODUCTS, PRODUCT } from '../../graphql/queries';
import { BsLink45Deg } from 'react-icons/bs';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';
import { FiPlus, FiMinus } from 'react-icons/fi';

const Product = ({ product }) => {
  console.log(product);
  const {
    name,
    shortDescription,
    fullDescription,
    price,
    salePrice,
    productReviews,
    image,
  } = product;
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
                <p className='capitalize'>{name}</p>
              </div>
            </div>
          </div>
        </div>
      </ProductBanner>
      <div className='py-20 max-w-7xl mx-auto px-5'>
        <div className='md:grid grid-cols-2 gap-10 mb-10'>
          <div className=' bg-white col-span-1 mb-5 hover:shadow'>
            <Image width={900} height={900} src={image.url} alt={name} />
          </div>
          <div className='col-span-1'>
            <hr />
            <h1 className='text-2xl font-semibold mb-5 capitalize pt-10'>{name}</h1>
            <span className='flex items-center space-x-4 font-semibold mb-10'>
              {product.onSale && <p className='text-gray-600 line-through'>£{price}</p>}
              <p className='text-primary text-xl'>£{salePrice}</p>
            </span>
            <p className='text-gray-600 mb-10'>{shortDescription}</p>
            <div className=' flex items-center space-x-5 mb-10'>
              <div className='flex items-center justify-center justify-items-center space-x-4 border-2 rounded-full w-40 py-3'>
                <button>
                  <FiMinus />
                </button>
                <p className='border-r-2 border-l-2 px-3'>1</p>
                <button>
                  <FiPlus />
                </button>
              </div>
              <button className='border rounded-full bg-primary text-gray-50 w-40 py-3 uppercase'>
                add to basket
              </button>
            </div>
            <hr />
          </div>
        </div>
        <div>
          <div className='flex items-center space-x-1 mb-10'>
            <button className='bg-primary text-white md:py-4 py-3 md:w-40 w-32'>Description</button>
            <button className='bg-[#E4E4E4] md:py-4 py-3 w-32 md:w-40'>
              Reviews ({productReviews.length})
            </button>
          </div>
          <div>
            <h1 className='mb-10  md:text-xl font-semibold'>Description</h1>
            <div className='text-gray-700'>{fullDescription.markdown}</div>
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
