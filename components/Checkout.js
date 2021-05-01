import { useProductsContext } from 'context/ProductContextProvider'
import { useRouter } from 'next/router'
import { BsExclamationCircle } from 'react-icons/bs'
import { useSelector } from 'react-redux'

const Checkout = () => {
  const { cart } = useProductsContext()
  const router = useRouter()
  return (
    <div className=' px-8 right-5 h-96 bg-white'>
      <h1 className='font-bold text-gray-800 tracking-widest py-10'>TOTAL</h1>
      <hr />
      <div className='py-4'>
        <div className='flex items-center justify-between mb-3'>
          <h1 className='font-semibold tracking-widest'>Sub-total</h1>
          <p className='font-semibold tracking-wider'>{cart.subtotal.formatted_with_symbol}</p>
        </div>
        <div className='flex items-center justify-between mb-5'>
          <h1 className='font-semibold tracking-widest'>Delivery</h1>
          <BsExclamationCircle size={20} />
        </div>
        <select className='w-full py-3 bg-gray-100' name=''>
          <option value='next-day'>Next-Day Delivery (Free)</option>
          <option value='click and collect standard'>Click & Collect Standard (Free)</option>
          <option value='click and collect next-day'>Click & Collect Next-Day (Free)</option>
          <option value='standard delivery'>Standard Delivery (Free)</option>
          <option value='same-day delivery'>Same Day Delivery(Order before 2pm - Free)</option>
        </select>
      </div>
      <hr />
      <button
        onClick={() => router.push('/checkout')}
        className='bg-primary hover:bg-btn_hover transition duration-300 text-gray-100 w-full mt-5 py-3 mb-3 font-semibold tracking-widest md:text-lg'>
        CHECKOUT
      </button>
      <p className='text-sm'>Got a discount code? Add it in the next step.</p>
    </div>
  )
}

export default Checkout
