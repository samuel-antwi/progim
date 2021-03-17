import React from 'react';
import Image from 'next/image';

const WhatWeDo = () => {
  return (
    <div className='bg-light py-20 relative'>
      <div className='container max-w-7xl mx-auto'>
        <div className='lg:grid grid-cols-3'>
          <div className='col-span-2'>
            <div className='mb-10'>
              <h1 className='text-yellow-700 md:text-xl uppercase font-semibold'>what we do</h1>
              <h1 className='md:text-3xl text-gray-900 font-bold uppercase'>
                our featured services
              </h1>
              <img src='/images/arrow-dark.png' alt='Arrow' />
            </div>
            <div className='md:grid grid-cols-2 gap-5'>
              <ServicesCard
                image_url='/images/weightlifter.png'
                title='weight lifting'
                description='Gimnas apparatus such asin barbells, parallel bars, fencin tennis-balls jump.'
              />
              <ServicesCard
                title='running'
                image_url='/images/running.png'
                description='Gimnas apparatus such asin barbells, parallel bars, fencin tennis-balls jump.'
              />
              <ServicesCard
                title='yoga meditation'
                image_url='/images/padmasana.png'
                description='Gimnas apparatus such asin barbells, parallel bars, fencin tennis-balls jump.'
              />
              <ServicesCard
                title='body building'
                image_url='/images/body-building.png'
                description='Gimnas apparatus such asin barbells, parallel bars, fencin tennis-balls jump.'
              />
            </div>
          </div>
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
