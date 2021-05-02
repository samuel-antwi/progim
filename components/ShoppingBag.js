import { useProductsContext } from 'context/ProductContextProvider'
import Link from 'next/link'
import { BsBag } from 'react-icons/bs'

const ShoppingBag = () => {
  const { cart } = useProductsContext()
  return (
    <div className='relative'>
      <Link href='/basket'>
        <a className='cursor-pointer'>
          <BsBag size={20} />
        </a>
      </Link>
      {Object.keys(cart).length !== 0 && (
        <p className='absolute h-4  w-4 -top-2 -right-3 text-gray-100  text-xs flex justify-center items-center justify-items-center bg-primary rounded-full'>
          {cart.total_items}
        </p>
      )}
    </div>
  )
}

export default ShoppingBag
