import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { BsLink45Deg } from 'react-icons/bs';
import { getPathName } from '../utils';
import graphcms from '../graphql/client';
import { GET_ABOUT_PAGE } from '../graphql/queries';
import Image from 'next/image';
import { IoIosCheckmark } from 'react-icons/io';

const About = ({ page }) => {
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
  } = page;
  console.log(page);
  return (
    <>
      <AboutBanner>
        <div className='overlay absolute text-gray-200'>
          <div className='flex h-full'>
            <div className='my-auto px-5'>
              <h1 className='uppercase md:text-4xl font-extrabold mb-5 tracking-wider'>Class</h1>
              <div className='flex items-center text-lg space-x-2 py-2 px-3 bg-primary rounded-br-3xl'>
                <Link href='/'>
                  <a>Home</a>
                </Link>
                <BsLink45Deg size={23} />
                <p className='capitalize'>{getPathName()}</p>
              </div>
            </div>
          </div>
        </div>
      </AboutBanner>
      <section className='py-20 px-5'>
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
                      <IoIosCheckmark
                        size={20}
                        className='bg-primary  mr-2 text-white rounded-full'
                      />
                      <p className='text-gray-600'>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

export const getStaticProps = async () => {
  const { page } = await graphcms.request(GET_ABOUT_PAGE, { slug: 'about-page' });
  return {
    props: {
      page,
    },
  };
};

const AboutBanner = styled.div`
  background: url('/images/about-bg.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 30vh;
  position: relative;

  .overlay {
    width: 100%;
    height: 30vh;
    background: rgba(0, 0, 0, 0.8);
  }
  .vertical-center {
    margin: 0;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
`;
