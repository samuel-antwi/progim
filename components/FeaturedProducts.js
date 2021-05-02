import Header from './Header'
import Image from 'next/image'
import Link from 'next/link'
import { MdShoppingBasket } from 'react-icons/md'
import { BsPlusCircleFill } from 'react-icons/bs'
import { useSnackbar } from 'react-simple-snackbar'
import { snackbarOptions } from 'utils'
import { useProductsContext } from 'context/ProductContextProvider'

const FeaturedProducts = ({ products }) => {
  const [openSnackbar] = useSnackbar(snackbarOptions)
  const { handleAddToCart } = useProductsContext()

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
            <Link href={`/shop/${product.permalink}`}>
              <a>
                <Image
                  src={product.media.source}
                  width={900}
                  height={900}
                  layout='responsive'
                  alt={product.name}
                />
              </a>
            </Link>
            <div className='flex flex-col justify-center items-center justify-items-center space-y-5'>
              <Link href={`/shop/${product.permalink}`}>
                <a>
                  <p className='text-xl  font-semibold capitalize hover:text-primary'>
                    {product.name}
                  </p>
                </a>
              </Link>
              <span className='flex items-center space-x-4 text-lg'>
                <p className='text-primary'>£{product.price.formatted_with_symbol}</p>
              </span>
              <div className='overlay flex justify-end px-10'>
                <button
                  onClick={() => handleAddToCart(product.id, 1, product.name)}
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
  )
}

export default FeaturedProducts
