import { VscChromeClose } from 'react-icons/vsc'
import Image from 'next/image'
import Link from 'next/link'
import Checkout from '@/components/Checkout'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { useSnackbar } from 'react-simple-snackbar'
import { snackbarOptions } from 'utils'
import { useProductsContext } from 'context/ProductContextProvider'
import { MdRemoveShoppingCart } from 'react-icons/md'
import commerce from 'lib/commerce'
import RelatedProducts from '@/components/RelatedProducts'

const Basket = ({ data }) => {
  const { cart, handleUpdateQty, handleRemoveFromCart, handleEmptyBasket } = useProductsContext()
  const [openSnacbar] = useSnackbar(snackbarOptions)

  const { line_items } = cart

  if (Object.keys(cart).length === 0) return null

  console.log(cart)

  return (
    <div className='md:pt-40 pt-20 min-h-screen'>
      {line_items?.length ? (
        <div className='xl:max-w-7xl mx-auto md:px-8 px-4 mb-10'>
          <div className='lg:grid grid-cols-3 gap-4'>
            <div className='col-span-2 bg-white p-8'>
              <div className='flex justify-between items-center border-b'>
                <h1 className='font-semibold  md:text-lg md:tracking-wider p-5 text-gray-700'>
                  MY BAG
                </h1>
                <h1 className='font-semibold  md:text-lg md:tracking-wider p-5 text-gray-700'>
                  Total items ({cart.total_items})
                </h1>
              </div>
              {line_items.map((product) => {
                const { price, name, id, media, assets, permalink, quantity } = product
                return (
                  <div className='flex py-5 border-b  relative' key={id}>
                    <div>
                      <Link href={`/shop/${permalink}`}>
                        <a>
                          <Image src={media.source} alt={name} width={200} height={200} />
                        </a>
                      </Link>
                    </div>
                    <div className='flex flex-col space-y-5'>
                      <h2 className='font-semibold tracking-wider text-gray-800 text-lg'>
                        {price.formatted_with_symbol}
                      </h2>
                      <Link href={`/shop/${permalink}`}>
                        <a className='text-gray-600 xxs:text-sm text-base uppercase hover:text-blue-400'>
                          {name}
                        </a>
                      </Link>
                      <div className='flex items-center justify-center rounded-full border-2 justify-items-center space-x-4'>
                        <button
                          onClick={async () => {
                            await handleUpdateQty(id, quantity - 1)
                            quantity === 1 ? openSnacbar(`${name} deleted`) : null
                          }}
                          className='border-r hover:bg-gray-500 hover:text-gray-100 px-4 focus:outline-none hover:rounded-l-full focus:rounded-l-full focus:bg-gray-300  py-1 md:py-2'>
                          <FiMinus />
                        </button>
                        <p className=''>{quantity}</p>
                        <button
                          onClick={() => handleUpdateQty(id, quantity + 1)}
                          className='border-l px-4 hover:bg-gray-500 hover:text-gray-100 hover:rounded-r-full focus:outline-none focus:rounded-r-full focus:bg-gray-300  py-1 md:py-2'>
                          <FiPlus />
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(id, name)}
                      className='absolute  -right-2 top-8'>
                      <VscChromeClose
                        className='hover:text-red-500 transition duration-200'
                        size={26}
                      />
                    </button>
                  </div>
                )
              })}
              <div className='flex justify-between items-center py-10 px-8 space-x-6 font-semibold tracking-wider text-gray-800'>
                <button
                  onClick={() => handleEmptyBasket()}
                  className='bg-primary text-gray-100 py-3 px-5'>
                  Clear basket
                </button>
                <div>
                  <span className='mr-3'>SUB-TOTAL</span>
                  <span>{cart.subtotal.formatted_with_symbol}</span>
                </div>
              </div>
            </div>
            <div className='col-span-1 relative'>
              <Checkout />
            </div>
          </div>
        </div>
      ) : (
        <div className='container flex flex-col justify-center items-center justify-items-center '>
          <MdRemoveShoppingCart className='mb-3' size={30} />
          <h1>Your basket is currently empty</h1>
          <div className=' pt-10'>
            <Link href='/shop'>
              <a className='bg-primary tracking-wide transition duration-200 rounded-full text-gray-100 py-2 px-4 hover:bg-[#B84600]'>
                Start shopping
              </a>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default Basket

export const getStaticProps = async () => {
  const { data } = await commerce.products.list({ limit: 3 })

  return {
    props: { data },
  }
}
