import styled from 'styled-components';
import { BsChevronDown } from 'react-icons/bs';

const LandingPage = () => {
  return (
    <Styles className=''>
      <div className='overlay'>
        <div className=' container '>
          <div className='col-span-1 uppercase flex flex-col justify-center justify-items-center h-screen'>
            <h1 className='text-yellow-700 md:text-4xl font-extrabold'>step up your</h1>
            <div className='text-gray-300'>
              <h1 className='md:text-8xl font-extrabold'>fitness</h1>
              <h1 className='md:text-5xl flex items-center font-extrabold mb-10'>
                <span className='mr-3 text-gray-400'>with</span>
                <img className='w-60' src='/images/logo-1.png' alt='logo' />
              </h1>
            </div>
            <button className='text-gray-100 w-64 bg-yellow-800 hover:bg-primary rounded-full py-4 tracking-wide font-semibold uppercase'>
              become a member
            </button>
            <div className='absolute max-w-xs mx-auto inset-x-0 bottom-10 flex justify-center items-center bg-yellow-800 w-16 h-16 rounded-full'>
              <BsChevronDown size={20} className='text-gray-200' />
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default LandingPage;

const Styles = styled.div`
  /* position: relative;
  width: 100%;
  height: 100vh;
  background: url('/images/landingBg-03.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; */
  :before {
    content: '';
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100vh;
    background: url('/images/landingBg-03.jpeg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  :before {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }

  .overlay {
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.1);
  }
`;
