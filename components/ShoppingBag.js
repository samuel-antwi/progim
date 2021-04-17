import Link from 'next/link';
import { BsBag } from 'react-icons/bs';

const ShoppingBag = () => {
  return (
    <div className='relative'>
      <Link href='/basket'>
        <a className='cursor-pointer'>
          <BsBag size={20} />
        </a>
      </Link>
      <p className='absolute h-4  w-4 -top-3 -right-4 text-gray-100  text-xs flex justify-center items-center justify-items-center bg-primary rounded-full'>
        0
      </p>
    </div>
  );
};

export default ShoppingBag;
