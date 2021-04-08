import { BsHeart, BsBag, BsPlus, BsExclamationSquare } from 'react-icons/bs';
import { BiMinus } from 'react-icons/bi';
import { VscChromeClose } from 'react-icons/vsc';
import Image from 'next/image';
import { useSnackbar } from 'react-simple-snackbar';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Basket = () => {
  const { basket } = useSelector((state) => state.shop);

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
                  <button
                    // onClick={clearBasket}
                    className='text-gray-700 bg-gray-300 px-2 py-1 text-sm hover:text-red-500 hover:bg-white transition duration-300 uppercase font-medium tracking-wider'>
                    Clear all
                  </button>
                )}
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
                      <span className='inline-flex items center space-x-6'>
                        <button
                          onClick={() => {
                            decrease(id);
                            if (quantity < 2) {
                              removeFromBasket(id);
                            }
                          }}
                          className={`border px-2 hover:bg-gray-200 border-gray-400 rounded`}>
                          <BiMinus size={20} />
                        </button>
                        <p>{quantity}</p>
                        <button
                          onClick={() => increase(id)}
                          className='border px-2 hover:bg-gray-200 border-gray-400 rounded'>
                          <BsPlus size={20} />
                        </button>
                      </span>
                    </div>
                    <button
                      onClick={() => {
                        removeFromBasket(id);
                      }}
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
                {/* <span>£{total}</span> */}
              </div>
            </div>
            <div className='col-span-1 bg-white h-96 px-8'>{/* <Checkout /> */}</div>
          </div>
        </div>
      ) : (
        // <EmptyBasket />
        <div>
          <h1>Your basket is currently empty</h1>
        </div>
      )}
    </div>
  );
};

export default Basket;
