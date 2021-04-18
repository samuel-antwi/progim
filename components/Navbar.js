import Link from 'next/link';
import { VscMenu } from 'react-icons/vsc';
import { useRouter } from 'next/router';
import SideNav from './SideNav';
import { useState } from 'react';
import ShoppingBag from './ShoppingBag';
import MiniNavBar from './MiniNavBar';

const Navbar = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  return (
    <>
      <SideNav showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
      <div className='fixed top-0 w-full bg-white z-10'>
        <MiniNavBar />
        <div className='max-w-6xl mx-auto md:px-8 px-5 py-6 flex justify-between items-center'>
          <Link href='/'>
            <a className='flex items-center'>
              <h1 className='text-black font-bold md:text-4xl text-xl tracking-wider'>PROGIM</h1>
              <img className='w-12' src='/images/body-building.png' alt='Logo' />
            </a>
          </Link>
          <div className='space-x-8 flex items-center'>
            <NavLinks name='Home' url='/' />
            <NavLinks name='About' url='/about' />
            <NavLinks name='Classes' url='/fitness-group' />
            <NavLinks name='Shop' url='/shop' />
            <NavLinks name='Blog' url='/blog' />
            <ShoppingBag />
            <button
              onClick={() => setShowSideMenu(!showSideMenu)}
              aria-label='menu'
              className='md:hidden focus:outline-none py-3 focus:bg-gray-200'>
              <VscMenu size={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

export const NavLinks = ({ name, url }) => {
  const router = useRouter();

  // Get pathname to style the active route
  const getPathName = router.pathname;

  return (
    <Link href={url}>
      <a
        className={`${
          getPathName === url && 'text-primary'
        } hover:text-primary hidden md:block uppercase text-sm font-semibold tracking-wide`}>
        {name}
      </a>
    </Link>
  );
};
