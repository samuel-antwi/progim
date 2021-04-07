import Link from 'next/link';
import { BsBag } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';

const ShoppingBag = () => {
  const { basket } = useSelector((state) => state.shop);
  return (
    <div className='relative'>
      <Link href='/'>
        <a className='cursor-pointer'>
          <BsBag size={20} />
        </a>
      </Link>
      <p className='absolute h-4  w-4 -top-3 -right-4 text-gray-100  text-xs flex justify-center items-center justify-items-center bg-primary rounded-full'>
        {basket.length}
      </p>
    </div>
  );
};

export default ShoppingBag;
