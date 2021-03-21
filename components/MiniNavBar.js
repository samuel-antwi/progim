import { useRouter } from 'next/router';
import { AiOutlineMail, AiOutlineFieldTime, AiFillInstagram } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const MiniNavBar = () => {
  const router = useRouter();

  const getPathName = () => {
    return router.pathname;
  };

  return getPathName() !== '/' ? (
    <div className='hidden md:block bg-primary py-3 text-gray-50'>
      <div className='max-w-6xl mx-auto flex justify-between items-center'>
        <div className='flex items-center space-x-5'>
          <a className='flex text-sm items-center' href='mailto: support@progim.com '>
            <AiOutlineMail size={20} />
            <p className='ml-2'>support@progym.com</p>
          </a>
          <a className='flex text-sm items-center' href='callto: 02067654349 '>
            <FiPhoneCall className='text-gray-300' size={17} />
            <p className='ml-2'>02067654349</p>
          </a>
          <span className='flex text-sm items-center'>
            <AiOutlineFieldTime size={20} />
            <p className='ml-2'>Mon - Fri 9:00 am - 17:00 pm</p>
          </span>
        </div>
        <SocialLinks />
      </div>
    </div>
  ) : null;
};

export const SocialLinks = () => {
  return (
    <div className='flex items-center space-x-4'>
      <a className='hover:text-gray-200' href='/'>
        <FaFacebookF />
      </a>
      <a className='hover:text-gray-200' href='/'>
        <FaLinkedinIn />
      </a>
      <a className='hover:text-gray-200' href='/'>
        <FaTwitter />
      </a>
      <a className='hover:text-gray-200' href='/'>
        <AiFillInstagram />
      </a>
    </div>
  );
};

export default MiniNavBar;
