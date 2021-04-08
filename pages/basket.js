import { BsHeart, BsBag, BsPlus, BsExclamationSquare } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { VscChromeClose } from 'react-icons/vsc';
import Image from 'next/image';
import { useSnackbar } from 'react-simple-snackbar';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromBasket } from 'actions/shopActions';
import Checkout from '@/components/Checkout';
import { FiMinus, FiPlus } from 'react-icons/fi';

const Basket = () => {
  const { basket } = useSelector((state) => state.shop);
  const { total } = useSelector((state) => state.shop);
  const { itemCount } = useSelector((state) => state.shop);
  const dispatch = useDispatch();

  return (
    <div className='md:pt-40 pt-20 min-h-screen'>
      {basket.length !== 0 ? (
        <div className='xl:max-w-7xl mx-auto md:px-8 px-4 mb-10'>
          <div className='lg:grid grid-cols-3 gap-4'>
            <div className='col-span-2 bg-white p-8'>
              <div className='flex justify-between items-center border-b'>
                <h1 className='font-semibold  md:text-lg md:tracking-wider p-5 text-gray-700'>
                  MY BAG
                </h1>
                {basket.length > 1 && (
                  <button className='text-gray-700 bg-gray-300 px-2 py-1 text-sm hover:text-red-500 hover:bg-white transition duration-300 uppercase font-medium tracking-wider'>
                    Clear all
                  </button>
                )}
                <h1 className='font-semibold  md:text-lg md:tracking-wider p-5 text-gray-700'>
                  Total items ({itemCount})
                </h1>
              </div>
              {basket.map((product) => {
                const { price, name, image, id, slug, quantity } = product;
                return (
                  <div className='flex py-5 border-b  relative' key={id}>
                    <div>
                      <Link href={`/shop/${slug}`}>
                        <a>
                          <Image src={image.url} alt={name} width={200} height={200} />
                        </a>
                      </Link>
                    </div>
                    <div className='flex flex-col space-y-5'>
                      <h2 className='font-semibold tracking-wider text-gray-800 text-lg'>
                        £ {price}. 00
                      </h2>
                      <Link href={`/shop/${slug}`}>
                        <a className='text-gray-600 xxs:text-sm text-base uppercase hover:text-blue-400'>
                          {name}
                        </a>
                      </Link>
                      <div className='flex items-center justify-center rounded-full border-2 justify-items-center space-x-4'>
                        <button
                          className='border-r px-4 focus:outline-none focus:rounded-l-full focus:bg-gray-300  py-1 md:py-2'
                          disabled={quantity === 1}
                          onClick={() => dispatch(decreaseQuantity(id))}>
                          <FiMinus />
                        </button>
                        <p className=''>{quantity}</p>
                        <button
                          className='border-l px-4 focus:outline-none focus:rounded-r-full focus:bg-gray-300  py-1 md:py-2'
                          onClick={() => dispatch(increaseQuantity(id))}>
                          <FiPlus />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => dispatch(removeFromBasket(id))}
                      className='absolute  -right-2 top-8'>
                      <VscChromeClose
                        className='hover:text-red-500 transition duration-200'
                        size={26}
                      />
                    </button>
                  </div>
                );
              })}
              <div className='flex justify-end py-10 px-8 space-x-6 font-semibold tracking-wider text-gray-800'>
                <span className=''>SUB-TOTAL</span>
                <span>£{total}</span>
              </div>
            </div>
            <div className='col-span-1 relative'>
              <Checkout />
            </div>
          </div>
        </div>
      ) : (
        // <EmptyBasket />
        <div className='container text-center'>
          <h1>Your basket is currently empty</h1>
          <div className='flex justify-center pt-10'>
            <Link href='/shop'>
              <a className='bg-primary transition duration-200 rounded-full text-gray-100 py-2 px-4 hover:bg-[#B84600]'>
                Continue shopping
              </a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
