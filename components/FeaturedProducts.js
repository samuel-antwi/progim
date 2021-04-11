import Header from './Header';
import Image from 'next/image';
import Link from 'next/link';
import useFetchFeaturedProducts from '../hooks/useFetchFeaturedProducts';
import SaleBadge from './SaleBadge';
import { MdShoppingBasket } from 'react-icons/md';
import { BsPlusCircleFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket } from '../actions/shopActions';
import { useSnackbar } from 'react-simple-snackbar';
import { snackbarOptions } from 'utils';

const FeaturedProducts = ({ products }) => {
  const dispatch = useDispatch();
  const [openSnackbar] = useSnackbar(snackbarOptions);

  const handleAddToBasket = (product) => {
    dispatch(addToBasket(product));
    openSnackbar(`${product.name} added to bag`);
  };

  return (
    <div className='max-w-7xl mx-auto pb-20 md:px-20 px-5'>
      <Header title='choose your brand' subTitile='our featured products' />
      <div className='md:grid md:grid-cols-2 pt-10 lg:grid-cols-3  gap-10'>
        {products.map((product) => (
          <div
            data-aos='flip-right'
            data-aos-duration='1000'
            className='hover:shadow bg-white pb-10 relative mb-5 px-5'
            key={product.id}>
            <SaleBadge product={product} />
            <Link href={`/shop/${product.slug}`}>
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
              <Link href={`/shop/${product.slug}`}>
                <a>
                  <p className='text-xl  font-semibold capitalize hover:text-primary'>
                    {product.name}
                  </p>
                </a>
              </Link>
              <span className='flex items-center space-x-4 text-lg'>
                {product.onSale && <p className='text-gray-800 line-through'>£{product.price}</p>}
                <p className='text-primary'>£{product.salePrice}</p>
              </span>
              <div className='overlay flex justify-end px-10'>
                <button
                  onClick={() => handleAddToBasket(product)}
                  className='focus:outline-none focus:bg-gray-200 p-2 flex flex-col items-center'
                  aria-label='add to cart'>
                  <MdShoppingBasket size={35} />
                  <BsPlusCircleFill className='-mt-1.5' />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center justify-items-center mt-5'>
        <Link href='/shop'>
          <a className='uppercase tracking-widest hover:bg-btn_hover transition duration-300 bg-primary text-gray-100 py-3 px-12 rounded-md font-bold'>
            shop all
          </a>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProducts;
