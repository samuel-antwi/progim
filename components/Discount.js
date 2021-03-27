import styled from 'styled-components';
import { GrFormCheckmark } from 'react-icons/gr';

const Discount = () => {
  return (
    <Styles className='mb-20 min-h-[750px]'>
      <div className='overlay min-h-[750px]'>
        <div className='md:grid grid-cols-2 max-w-6xl mx-auto'>
          <img src='/images/discount2.png' alt='Gym member' />
          <div className='text-gray-100 flex h-full'>
            <div className='m-auto py-10 md:py-0'>
              <h1 className='md:text-3xl text-xl font-semibold uppercase mb-3 tracking-wider'>
                Join fitness class
              </h1>
              <h1 className='uppercase text-primary lg:text-5xl md:text-4xl text-3xl mb-5 font-bold'>
                get 30% discount
              </h1>
              <span className='flex items-center mb-3'>
                <GrFormCheckmark size={20} className='bg-primary mr-3 rounded-full' />
                <p className='md:text-xl capitalize'>Standard Personal Training</p>
              </span>
              <span className='flex items-center mb-3'>
                <GrFormCheckmark size={20} className='bg-primary mr-3 rounded-full' />
                <p className='md:text-xl capitalize'>Basic Personal Training</p>
              </span>
              <span className='flex items-center mb-3'>
                <GrFormCheckmark size={20} className='bg-primary mr-3 rounded-full' />
                <p className='md:text-xl capitalize'>unlimited personal training</p>
              </span>
              <span className='flex items-center mb-3'>
                <GrFormCheckmark size={20} className='bg-primary mr-3 rounded-full' />
                <p className='md:text-xl capitalize'>24/7 gym access</p>
              </span>
              <span className='flex items-center mb-3'>
                <GrFormCheckmark size={20} className='bg-primary mr-3 rounded-full' />
                <p className='md:text-xl capitalize'>Unlimited Fitness Classes</p>
              </span>
              <button className='bg-primary text-gray-100 uppercase py-3 w-full mt-5 rounded-full mx-auto'>
                join today
              </button>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
};

export default Discount;

const Styles = styled.div`
  width: 100%;
  background: url('/images/discountBg.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-attachment: fixed;

  .overlay {
    width: 100%;
    background: rgba(0, 0, 0, 0.92);
  }
`;
