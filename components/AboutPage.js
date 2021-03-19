import { useState, useEffect } from 'react';
import graphcms from '../graphql/client';
import { GET_ABOUT_PAGE } from '../graphql/queries';
import { IoIosCheckmark } from 'react-icons/io';
import Image from 'next/image';

const AboutPage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState('');

  console.log(data);

  useEffect(() => {
    getAboutPage();
  }, []);

  const getAboutPage = async () => {
    setLoading(true);
    try {
      const { page } = await graphcms.request(GET_ABOUT_PAGE, { slug: 'about-page' });
      setData(page);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  if (loading) return <p>Loading...</p>;

  const {
    aboutImage,
    name,
    description,
    title,
    subTitle,
    list,
    images,
    award,
    classRoom,
    equipment,
    expertTrainers,
    happyClient,
  } = data;

  return (
    <div className='max-w-6xl mx-auto'>
      <div className='md:grid grid-cols-2 gap-10'>
        <div className='col-span-1'>
          <Image
            className='object-cover mb-10'
            src={aboutImage.url}
            width={500}
            height={500}
            layout='responsive'
          />
        </div>
        <div className='col-span-1 py-10 md:py-0'>
          <div className='xl:py-10'>
            <h1 className='text-primary md:text-xl mb-1 font-semibold'>{title}</h1>
            <h1 className='mb-3 md:text-3xl font-bold'>{subTitle}</h1>
            <img src='/images/arrow-dark.png' alt='Arrow dumbell' />
            <p className='mb-5 pt-10 text-gray-600'>{description}</p>
            <div className='space-y-3'>
              {list.map((item, index) => (
                <div className='flex items-center' key={index}>
                  <IoIosCheckmark size={20} className='bg-primary  mr-2 text-white rounded-full' />
                  <p className='text-gray-600'>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
