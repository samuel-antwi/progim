import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { MdShoppingBasket } from 'react-icons/md'
import { BsPlusCircleFill } from 'react-icons/bs'
import { useProductsContext } from 'context/ProductContextProvider'

const RelatedProducts = ({ products }) => {
  const { handleAddToCart, isInBasket } = useProductsContext()

  return products.length ? (
    <Styles className='py-20'>
      <div className='max-w-7xl mx-auto px-5 md:px-10'>
        <h1 className='capitalize mb-6 font-bold text-xl text-gray-700 tracking-wide'>
          You may also like
        </h1>
        <div className='md:grid grid-cols-3 gap-10'>
          {products.map((product) => (
            <div key={product.id} className='col-span-1 mb-10 md:mb-0'>
              <div>
                <div className='bg-white  wrapper relative'>
                  <Image src={product.media.source} width={900} height={900} alt={product.name} />
                  <div className='overlay flex justify-end px-10'>
                    <button
                      onClick={() => handleAddToCart(product.id, 1, product.name)}
                      className=' focus:outline-none flex flex-col items-center'
                      aria-label='add to cart'>
                      <MdShoppingBasket size={40} />
                      <BsPlusCircleFill className='-mt-1.5' />
                    </button>
                  </div>
                </div>
                <div className='flex flex-col pt-5 '>
                  <Link href={`/shop/${product.permalink}`}>
                    <a>
                      <h1 className='text-lg hover:text-primary font-semibold mb-3 capitalize'>
                        {product.name}
                      </h1>
                    </a>
                  </Link>
                  <p className='text-gray-700 text-xl'>{product.price.formatted_with_symbol}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Styles>
  ) : null
}

export default RelatedProducts

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
`
