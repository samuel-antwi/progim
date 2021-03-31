import Image from 'next/image';
import styled from 'styled-components';
import BmiCategories from './BmiCategories';
import BmiForm from './BmiForm';
import { useRouter } from 'next/router';

const Bmi = () => {
  const router = useRouter();
  const homePage = router.pathname === '/';
  return (
    <Styles className='my-20 text-gray-100'>
      <div className='overlay'>
        <div className='xl:max-w-7xl mx-auto lg:px-5 sm:px-20 px-5 pt-20'>
          <div className='lg:grid grid-cols-7 gap-5'>
            <div className='bmi__image col-span-2 hidden lg:block'>
              <img
                className='object-cover z-20'
                src={homePage ? '/images/bmi-03.jpg' : '/images/bmi.png'}
              />
            </div>
            <div data-aos='fade-up' data-aos-duration='1000' className='col-span-3'>
              <div className='mb-10'>
                <h1 className='md:text-4xl mb-3 font-bold uppercase'>calculate your bmi</h1>
                <img src='/images/arrow-dark.png' alt='' />
              </div>
              <BmiForm />
            </div>
            <div data-aos='slide-left' data-aos-duration='1000' className='col-span-2'>
              <BmiCategories />
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default Bmi;

const Styles = styled.div`
  width: 100%;
  background: url('/images/bmi-bg-01.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-attachment: fixed;

  .overlay {
    width: 100%;
    background: rgba(0, 0, 0, 0.9);
  }

  .bmi__image {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
`;
