import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <div className='bg-[#272727] text-gray-400'>
      <div className=' max-w-[90rem] mx-auto py-10 sm:px-12  px-5'>
        <div className='md:grid lg:grid-cols-3 md:grid-cols-2 gap-10 lg:border-b border-gray-600 md:space-y-0 space-y-8'>
          <div className='col-span-1 mb-10'>
            <div className=' mb-5'>
              <h1 className='text-gray-100 font-bold uppercase text-lg tracking-wider'>Progym</h1>
              <Underline primary={true} />
            </div>
            <p className='mb-3'>
              Progym – Fitness Center is a professional fitness training center. We aim to take your
              fitness to the next level.
            </p>
            <div className='flex items-center space-x-3'>
              <a className='bg-primary rounded-full text-white p-2' href='/'>
                <FaFacebookF />
              </a>
              <a className='bg-primary rounded-full text-white p-2' href='/'>
                <FaTwitter />
              </a>
              <a className='bg-primary rounded-full text-white p-2' href='/'>
                <FaLinkedinIn />
              </a>
              <a className='bg-primary rounded-full text-white p-2' href='/'>
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className='col-span-1 space-y-4'>
            <div className='mb-5'>
              <h1 className='text-primary font-bold uppercase text-lg tracking-wider'>address</h1>
              <Underline />
            </div>
            <p>
              Gimnas - Fitness Center 2165 Aurora Rd, Bedford Heights, OH 6543 North London, USA
            </p>
            <span className='flex items-center'>
              <FaEnvelope className='mr-2' />
              <a href='mailto:support@progym.com'>Support@progym.com</a>
            </span>
            <span className='flex items-center'>
              <FaPhoneAlt className='mr-3' />
              <a href='callto:02056435111'>02056435111</a>
            </span>
          </div>
          <div className='col-span-1'>
            <div className='mb-5'>
              <h1 className='text-primary font-bold uppercase text-lg tracking-wider'>
                Join with us
              </h1>
              <Underline />
            </div>
            <p>
              Thank you for visting us. Please subscribe to our newsletter today for getting regular
              updates & offers.
            </p>
            <SubscribeForm />
          </div>
        </div>
        <div className='border-b border-gray-600 max-w-sm mx-auto'>
          <p className=' text-gray-400 text-sm text-center pt-10 mb-5 tracking-wider'>
            &#169; {getCurrentYear()} Progym Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const SubscribeForm = () => {
  return (
    <div>
      <form className=' mt-5 flex flex-grow items-center text-gray-800 '>
        <div className='text-gray-700 rounded-l-full bg-white py-4 px-3'>
          <FaEnvelope />
        </div>
        <input
          className='focus:outline-none py-3 px-2 w-full'
          type='text'
          placeholder='Your email'
        />
        <button className=' bg-primary p-3 rounded-r-full text-gray-100' type='submit'>
          Subscribe
        </button>
      </form>
    </div>
  );
};

export const Underline = ({ primary }) => {
  return <div className={`${primary ? 'bg-primary' : 'bg-white'} w-12 h-[4px]`}></div>;
};
