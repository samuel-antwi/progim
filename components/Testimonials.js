import useFetchTestimonials from 'hooks/useFetchTestimonials';
import Slider from 'react-slick';
import { testimonySettings } from 'utils';
import LoadingScreen from './LoadingScreen';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const { data, isError, isLoading, error } = useFetchTestimonials();

  if (isLoading) return <LoadingScreen />;

  return (
    <div className='py-20'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-10'>
          <h1 className='md:text-2xl text-primary uppercase mb-3 font-bold tracking-wider'>
            See what people are already saying
          </h1>
          <p>
            We're at the beginning of our journey and proud to share some of the comments of our
            members...
          </p>
        </div>
        <Slider {...testimonySettings}>
          {data.map((testimonial) => {
            const { name, testimony, media, id, group } = testimonial;
            return (
              <div className=' rounded-md bg-white py-20' key={id}>
                <div className='md:grid grid-cols-3  bg-gray-900'>
                  <div className='col-span-1 md:ml-10 relative'>
                    <img className='md:-mt-10 md:-mb-10 md:rounded-xl' src={media.url} />
                  </div>
                  <div className='col-span-2 flex flex-col text-gray-200 py-5'>
                    <div className='my-auto mx-10'>
                      <FaQuoteLeft className='text-gray-400 mb-5' size={40} />
                      <div className='md:text-lg text-gray-400 mb-5'>
                        <p>{testimony}</p>
                      </div>
                      <p className='mb-1 text-xl'>{name}</p>
                      <p className='mb-5 text-lg italic'>Member of the {group} class</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
