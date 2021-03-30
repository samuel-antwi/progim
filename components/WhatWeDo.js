import React from 'react';
import Image from 'next/image';
import { getFullPathName } from '../utils';
import Header from './Header';

const WhatWeDo = () => {
  const description =
    'Gimnas apparatus such asin barbells, parallel bars, fencin tennis-balls jump.';
  return (
    <div className='bg-light py-20 relative'>
      <div className='container max-w-7xl mx-auto'>
        <div className={`${getFullPathName() === '/' && 'lg:grid grid-cols-3'}`}>
          <div className='col-span-2'>
            <Header isCenter={false} title='what we do' subTitile='our featured services' />
            <div
              className={`md:grid gap-5 pt-10 ${
                getFullPathName().includes('/about') ? 'grid-cols-3' : 'grid-cols-2'
              }`}>
              <ServicesCard
                image_url='/images/weightlifter.png'
                title='weight lifting'
                description={description}
              />
              <ServicesCard
                title='running'
                image_url='/images/running.png'
                description={description}
              />
              <ServicesCard
                title='yoga meditation'
                image_url='/images/padmasana.png'
                description={description}
              />
              <ServicesCard
                title='body building'
                image_url='/images/body-building.png'
                description={description}
              />
              <>
                {getFullPathName() === '/about' && (
                  <ServicesCard
                    title='personal training'
                    image_url='/images/personal-training.png'
                    description={description}
                  />
                )}
                {getFullPathName() === '/about' && (
                  <ServicesCard
                    title='physical therapy'
                    image_url='/images/physical-therpy.png'
                    description={description}
                  />
                )}
              </>
            </div>
          </div>
          {getFullPathName() !== '/about' && (
            <div className='col-span-1 mt-10 lg:mt-0'>
              <Image
                className='object-cover'
                src='/images/bmi.png'
                width={600}
                height={830}
                loading='lazy'
                alt='gym member'
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ServicesCard = ({ title, description, image_url }) => {
  return (
    <div className='bg-white flex hover:shadow rounded-md px-6 py-10 mb-10 md:mb-0'>
      <div>
        <img className='w-40' src={image_url} alt={title} />
      </div>
      <div className='ml-10'>
        <h1 className='mb-5 font-semibold md:text-xl uppercase'>{title}</h1>
        <p className='text-gray-700'>{description}</p>
      </div>
    </div>
  );
};

export default WhatWeDo;
