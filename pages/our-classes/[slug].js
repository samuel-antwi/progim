import Link from 'next/link';
import { getPathName } from '../../utils';
import { BsLink45Deg } from 'react-icons/bs';
import styled from 'styled-components';

const Class = () => {
  return (
    <ClassBanner>
      <div className='overlay absolute text-gray-200'>
        <div className='flex h-full container'>
          <div className='my-auto '>
            <h1 className='uppercase md:text-4xl font-extrabold mb-5 tracking-wider'>Class</h1>
            <div className='flex items-center md:text-lg text-sm space-x-2 py-2 px-3 bg-primary'>
              <Link href='/'>
                <a>Home</a>
              </Link>
              <BsLink45Deg size={23} />
              <p className='capitalize'>shop</p>
              <BsLink45Deg size={23} />
              {/* <p className='capitalize'>{name}</p> */}
            </div>
          </div>
        </div>
      </div>
    </ClassBanner>
  );
};

export default Class;

const ClassBanner = styled.div`
  background: url('/images/classBg.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 25vh;
  position: relative;

  .overlay {
    width: 100%;
    height: 25vh;
    background: rgba(0, 0, 0, 0.8);
  }
`;
