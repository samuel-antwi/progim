import Link from 'next/link';
import { useRouter } from 'next/router';
import { GrClose } from 'react-icons/gr';

const SideNav = ({ showSideMenu, setShowSideMenu }) => {
  return (
    <div
      className={` ${
        showSideMenu ? '-translate-x-0' : '-translate-x-full'
      }  bg-primary w-full p-8 text-blue-50  absolute inset-y-0 z-[20] md:relative md:hidden transition duration-500 left-0 transform  ease-in-out`}>
      <div onClick={() => setShowSideMenu(!showSideMenu)}>
        <div className='flex justify-between items-center'>
          <h1 className='mb-10 text-3xl font-semibold tracking-wide'>Progym</h1>
          <button onClick={() => setShowSideMenu(!showSideMenu)}>
            <GrClose size={25} />
          </button>
        </div>
        <div className='space-y-5'>
          <NavLinks name='Home' url='/' />
          <NavLinks name='About' url='/about' />
          <NavLinks name='Classes' url='/classes' />
          <NavLinks name='Shop' url='/shop' />
          <NavLinks name='Blog' url='/blog' />
          <NavLinks name='Contact' url='/contact' />
        </div>
      </div>
    </div>
  );
};

export default SideNav;

const NavLinks = ({ name, url }) => {
  const router = useRouter();

  // Get pathname to style active links
  const getPathName = () => {
    return router.pathname;
  };

  return (
    <div>
      <Link href={url}>
        <a>
          <p
            className={`${
              getPathName() === url && 'text-gray-900'
            } hover:text-gray-900 transition duration-500 text-xl uppercase font-semibold tracking-wide`}>
            {name}
          </p>
        </a>
      </Link>
    </div>
  );
};
