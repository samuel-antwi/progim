import Link from 'next/link';
import { VscMenu } from 'react-icons/vsc';
import { useRouter } from 'next/router';
import SideNav from './SideNav';
import { useState } from 'react';
import ShoppingBag from './ShoppingBag';

const Navbar = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  return (
    <>
      <SideNav showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
      <div className='sticky top-0 p-8 bg-white z-10'>
        <div className='max-w-6xl mx-auto flex justify-between items-center'>
          <Link href='/'>
            <a>
              <h1 className='text-black font-bold md:text-4xl text-xl tracking-wider'>PROGIM</h1>
            </a>
          </Link>
          <div className='space-x-8 flex items-center'>
            <NavLinks name='Home' url='/' />
            <NavLinks name='About' url='/about' />
            <NavLinks name='Classes' url='/classes' />
            <NavLinks name='Shop' url='/products' />
            <NavLinks name='Blog' url='/blog' />
            <NavLinks name='Contact' url='/contact' />
            <ShoppingBag />
            <button
              onClick={() => setShowSideMenu(!showSideMenu)}
              aria-label='menu'
              className='md:hidden focus:outline-none p-3 focus:bg-gray-200'>
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
  const getPathName = () => {
    return router.pathname;
  };

  return (
    <Link href={url}>
      <a
        className={`${
          getPathName() === url && 'text-primary'
        } hover:text-primary hidden md:block uppercase text-sm font-semibold tracking-wide`}>
        {name}
      </a>
    </Link>
  );
};
