import styled from 'styled-components';
import { BsChevronDown } from 'react-icons/bs';

const LandingPage = () => {
  return (
    <Styles className=''>
      <div className='overlay '>
        <div className=' container'>
          <div className=' col-span-1 uppercase flex flex-col justify-center h-screen'>
            <h1
              data-aos='slide-left'
              data-aos-duration='800'
              className='text-gray-800 md:text-4xl font-extrabold'>
              step up your
            </h1>
            <div className='text-gray-300 '>
              <h1
                data-aos='slide-right'
                data-aos-duration='1000'
                className='md:text-8xl font-extrabold'>
                fitness
              </h1>
              <h1
                data-aos='slide-left'
                data-aos-duration='1200'
                className='md:text-5xl flex items-center font-extrabold mb-10'>
                <span className='mr-3 text-gray-800'>with</span>
                <img className='w-60' src='/images/logo-1.png' alt='logo' />
              </h1>
            </div>
            <div data-aos='fade-up' data-aos-duration='1500'>
              <button className='text-gray-100 w-64 bg-primary hover:bg-primary rounded-full py-4 tracking-wide font-semibold uppercase'>
                become a member
              </button>
            </div>
            <button className='absolute max-w-xs mx-auto inset-x-0 bottom-10 flex justify-center items-center bg-primary w-16 h-16 rounded-full'>
              <BsChevronDown size={20} className='text-gray-200' />
            </button>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default LandingPage;

const Styles = styled.div`
  width: 100%;
  height: 100vh;
  background: url('/images/landingBg-01.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .overlay {
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
  }
`;
