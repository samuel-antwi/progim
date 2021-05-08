import Link from 'next/link'
import { VscMenu } from 'react-icons/vsc'
import { useRouter } from 'next/router'
import SideNav from './SideNav'
import { useState } from 'react'
import ShoppingBag from './ShoppingBag'
import MiniNavBar from './MiniNavBar'
import { useAuthContextProvider } from 'context/AuthContextProvider'

const Navbar = () => {
  const [showSideMenu, setShowSideMenu] = useState(false)
  const { user, login, logout } = useAuthContextProvider()

  console.log(user)

  return (
    <>
      <SideNav showSideMenu={showSideMenu} setShowSideMenu={setShowSideMenu} />
      <nav className='md:fixed top-0 w-full bg-white z-10'>
        <MiniNavBar />
        <div className='max-w-7xl mx-auto md:px-8 px-5 py-6 flex justify-between items-center'>
          <Link href='/'>
            <a className='flex items-center'>
              <h1 className='text-black font-bold md:text-4xl text-xl tracking-wider'>PROGIM</h1>
              <img className='w-12 hidden sm:block' src='/images/body-building.png' alt='Logo' />
            </a>
          </Link>
          <div className='md:hidden'>
            <ShoppingBag />
          </div>
          <div className='hidden md:block'>
            <div className='space-x-8 flex items-center'>
              <NavLinks name='Home' url='/' />
              <NavLinks name='About' url='/about' />
              <NavLinks name='Class' url='/fitness-group' />
              <NavLinks name='Shop' url='/shop' />
              {/* <div>
                {user === null ? (
                  <button
                    onClick={login}
                    className='focus:outline-none tracking-wide font-semibold uppercase text-sm'>
                    Login
                  </button>
                ) : (
                  <button
                    onClick={logout}
                    className='focus:outline-none tracking-wide font-semibold uppercase text-sm'>
                    Logout
                  </button>
                )}
              </div> */}
              <ShoppingBag />
            </div>
          </div>
          <button
            onClick={() => setShowSideMenu(!showSideMenu)}
            aria-label='menu'
            className='md:hidden focus:outline-none py-3'>
            <VscMenu size={20} />
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar

export const NavLinks = ({ name, url }) => {
  const router = useRouter()

  // Get pathname to style the active route
  const getPathName = router.pathname

  return (
    <Link href={url}>
      <a
        className={`${
          getPathName === url && 'text-primary'
        } hover:text-primary  uppercase text-sm font-semibold tracking-wide`}>
        {name}
      </a>
    </Link>
  )
}
