import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getClasses } from '../actions/classesAction';
import { useRouter } from 'next/router';
import { BsLink45Deg } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';

const GymClasses = () => {
  const dispatch = useDispatch();

  const { classes } = useSelector((state) => state.classes);

  console.log(classes);

  // Get pathname of a current route and remove the slash infront.
  const getPathName = () => {
    let router = useRouter();
    return (router = router.pathname.slice(1));
  };

  const ellipsis = (description) => {
    if (description?.length > 10) {
      return description.substring(0, 70) + '...';
    } else {
      return description;
    }
  };

  useEffect(() => {
    dispatch(getClasses());
  }, [dispatch]);

  return (
    <Styles>
      <ClassBanner>
        <div className='overlay absolute text-gray-200'>
          <div className='flex h-full'>
            <div className='my-auto px-5'>
              <h1 className='uppercase md:text-4xl font-extrabold mb-5 tracking-wider'>Class</h1>
              <div className='flex items-center text-lg space-x-2 py-2 px-3 bg-primary rounded-br-3xl'>
                <Link href='/'>
                  <a>Home</a>
                </Link>
                <BsLink45Deg size={23} />
                <p>{getPathName()}</p>
              </div>
            </div>
          </div>
        </div>
      </ClassBanner>
      <div className='xl:max-w-7xl mx-auto py-20  px-5 xl:px-10'>
        <div className='xxm:grid grid-cols-2 lg:grid-cols-3  gap-10'>
          {classes.map((session) => {
            const {
              name,
              description,
              classCategory,
              image: { url, width, height },
              id,
              price,
              classSize,
            } = session;
            return (
              <div key={id} className='col-span-1 bg-white '>
                <Link href='/'>
                  <a className='relative'>
                    <Image
                      className='transition object-cover duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                      src={url}
                      width={600}
                      height={500}
                      alt={name}
                      priority
                    />
                    <p className='bg-primary text-gray-200 text-sm py-2 absolute bottom-2 px-3 rounded right-0 left-0 w-44 mx-auto '>
                      {classCategory.name}
                    </p>
                  </a>
                </Link>
                <div className=''>
                  <Link href='/'>
                    <a>
                      <p className='text-center md:text-xl hover:text-primary font-semibold uppercase py-5'>
                        {name}
                      </p>
                    </a>
                  </Link>
                  <p className='text-gray-700 mb-5 px-8'>{ellipsis(description.text)}</p>
                  <div className='flex items-center text-sm capitalize bg-primary justify-between py-2 lg:px-16 px-5 text-center text-gray-100'>
                    <span>
                      <p>class student</p>
                      <p>{classSize} per shift</p>
                    </span>
                    <p>|</p>
                    <span>
                      <p>course price</p>
                      <p>£{price}</p>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Styles>
  );
};

export default GymClasses;

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
  .vertical-center {
    margin: 0;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
`;

const Styles = styled.div``;

// export const getStaticProps = async () => {
//   const { classes } = await graphcms.request(GET_CLASSES);
//   console.log(classes);
//   return {
//     props: {
//       classes,
//     },
//   };
// };
