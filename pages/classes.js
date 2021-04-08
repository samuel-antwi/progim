import styled from 'styled-components';
import { BsLink45Deg } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
import { ellipsis } from '../utils';
import useFetchClasses from '../hooks/useFetchClasses';
import LoadingScreen from '../components/LoadingScreen';
import Bmi from '../components/Bmi';
import { useQuery } from 'react-query';
import graphcms from '../graphql/client';
import { GET_CLASSES } from '../graphql/queries';
import { useRouter } from 'next/router';

const GymClasses = () => {
  const { data, isLoading, isError, error } = useFetchClasses();

  const getPathName = () => {
    let router = useRouter();
    return (router = router.pathname.slice(1));
  };

  if (isError) return console.log(error.message);
  if (isLoading) return LoadingScreen;

  return (
    <div className=' pt-10'>
      <ClassBanner>
        <div className='overlay absolute text-gray-200'>
          <div className='flex h-full container'>
            <div className='my-auto px-5 max-w-6xl'>
              <h1 className='uppercase md:text-4xl font-extrabold mb-5 tracking-wider'>Classes</h1>
              <div className='flex items-center text-lg space-x-2 py-2 px-3 bg-primary rounded-br-3xl'>
                <Link href='/'>
                  <a>Home</a>
                </Link>
                <BsLink45Deg size={23} />
                <p className='capitalize'>classes</p>
              </div>
            </div>
          </div>
        </div>
      </ClassBanner>
      <div className='xl:max-w-7xl mx-auto py-20  px-5 xl:px-10'>
        <div className='xxm:grid grid-cols-2 lg:grid-cols-3  gap-10'>
          {data.map((session) => {
            const {
              slug,
              name,
              description,
              classCategory,
              image: { url },
              id,
              price,
              classSize,
            } = session;
            return (
              <div key={id} className='col-span-1 bg-white '>
                <Link href={`/our-classes/${slug}`}>
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
      <Bmi />
    </div>
  );
};

export default GymClasses;

const ClassBanner = styled.div`
  background: url('/images/classBg.jpeg') no-repeat center;
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
