import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import RoundedButton from './RoundedButton';
import SaleBadge from './SaleBadge';
import { MdShoppingBasket } from 'react-icons/md';
import { BsPlusCircleFill } from 'react-icons/bs';

const RelatedProducts = ({ products }) => {
  return (
    <Styles>
      <div className='max-w-7xl mx-auto px-5 md:px-10'>
        <h1 className='capitalize mb-6 font-bold text-xl text-gray-700 tracking-wide'>
          related products
        </h1>
        <div className='md:grid grid-cols-3 gap-10'>
          {products.map((product) => (
            <div key={product.id} className='  col-span-1 mb-5'>
              <div className='bg-white py-10  wrapper relative'>
                <Image width={900} height={900} src={product.image.url} alt={product.Imagename} />
                <SaleBadge product={product} />
                <div className='overlay flex justify-end px-10'>
                  <button
                    className='focus:outline-none flex flex-col items-center'
                    aria-label='add to cart'>
                    <MdShoppingBasket size={40} />
                    <BsPlusCircleFill className='-mt-1.5' />
                  </button>
                </div>
              </div>
              <div className='flex flex-col justify-center justify-items-center items-center'>
                <Link href={`/shop/${product.slug}`}>
                  <a>
                    <h1 className='text-2xl hover:text-primary font-semibold mb-5 capitalize pt-10'>
                      {product.name}
                    </h1>
                  </a>
                </Link>
                <span className='flex items-center space-x-4 font-semibold mb-10'>
                  {product.onSale && <p className='text-gray-600 line-through'>£{product.price}</p>}
                  <p className='text-primary text-xl'>£{product.salePrice}</p>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Styles>
  );
};

export default RelatedProducts;

const Styles = styled.div`
  .overlay {
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 0;
    overflow: hidden;
    transition: 0.5s ease;
  }

  .wrapper:hover .overlay {
    height: 12%;
  }
`;
