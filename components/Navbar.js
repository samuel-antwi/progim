import Link from 'next/link';
import { BsBag } from 'react-icons/bs';
import { VscMenu } from 'react-icons/vsc';
import { useRouter } from 'next/router';
import SideNav from './SideNav';
import { useState } from 'react';

const Navbar = () => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  return (
    <>
      <SideNav showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
      <div className='sticky top-0 p-8 bg-white z-10'>
        <div className='max-w-6xl mx-auto flex justify-between items-center'>
          <Link href='/'>
            <a>
              <img className='w-32' src='/images/logo-1.png' alt='Logo' />
            </a>
          </Link>
          <div className='space-x-8 flex items-center'>
            <NavLinks name='Home' url='/' />
            <NavLinks name='About' url='/about' />
            <NavLinks name='Classes' url='/classes' />
            <NavLinks name='Blog' url='/blog' />
            <NavLinks name='Contact' url='/contact' />
            <Link href='/'>
              <a className='cursor-pointer'>
                <BsBag size={25} />
              </a>
            </Link>
            <button
              onClick={() => setShowSideMenu(!showSideMenu)}
              aria-label='menu'
              className='md:hidden focus:outline-none p-3 focus:bg-gray-200'>
              <VscMenu size={25} />
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

  // Get pathname to style active links
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
