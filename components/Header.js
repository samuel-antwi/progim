import { getFullPathName } from '../utils';

const Header = ({ title, subTitile, isCenter }) => {
  return (
    <div className={`mb-10 text-center ${isCenter && 'max-w-sm mx-auto'}`}>
      <h1 className='text-primary md:text-xl uppercase font-semibold'>{title}</h1>
      <h1 className='md:text-3xl text-gray-900 font-bold uppercase'>{subTitile}</h1>
      <div className='flex justify-center justify-items-center'>
        <img src='/images/arrow-dark.png' alt='Arrow' />
      </div>
    </div>
  );
};

export default Header;
