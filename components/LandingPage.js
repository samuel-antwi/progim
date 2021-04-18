import styled from 'styled-components';
import { BsChevronDown } from 'react-icons/bs';
import { useEffect } from 'react';
import AOS from 'aos';

const LandingPage = () => {
  return (
    <Styles className=''>
      <div className='overlay '>
        <div className=' container'>
          <div className=' col-span-1 uppercase flex flex-col justify-center h-screen'>
            <h1
              data-aos='slide-left'
              data-aos-duration='800'
              className='text-primary text-4xl font-extrabold'>
              step up your
            </h1>
            <div className='text-gray-300 '>
              <h1
                data-aos='slide-right'
                data-aos-duration='1000'
                className='md:text-8xl text-5xl font-extrabold'>
                fitness
              </h1>
              <h1
                data-aos='slide-left'
                data-aos-duration='1200'
                className='md:text-5xl flex items-center font-extrabold mb-10'>
                <span className='mr-3 text-gray-100'>with</span>
                <span className='text-primary'>ProGim</span>
              </h1>
            </div>
            <div data-aos='fade-up' data-aos-duration='1500'>
              <button className='text-gray-100 md:py-4 md:w-64 w-48 py-3 bg-primary transition duration-300 hover:bg-btn_hover rounded-full  tracking-wide font-semibold uppercase'>
                become a member
              </button>
            </div>
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
  background: url('/images/hero-bg-01.jpeg');
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
