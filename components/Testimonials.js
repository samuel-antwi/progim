import useFetchTestimonials from 'hooks/useFetchTestimonials'
import Slider from 'react-slick'
import { testimonySettings } from 'utils'
import LoadingScreen from './LoadingScreen'
import Image from 'next/image'
import { FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
  const { data, isError, isLoading } = useFetchTestimonials()

  if (isLoading) return <LoadingScreen />
  if (isError) return <p>Error loading testimonials</p>

  return (
    <div className='py-20'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-10 text-center'>
          <h1 className='mb-3 text-primary font-bold tracking-wider uppercase md:text-2xl'>
            See what people are already saying
          </h1>
          <p>
            We're at the beginning of our journey and proud to share some of the comments of our
            members...
          </p>
        </div>
        <Slider {...testimonySettings}>
          {data.map((testimonial) => {
            const { name, testimony, media, id, group } = testimonial
            return (
              <div className='bg-white rounded-md md:py-20' key={id}>
                <div className='grid-cols-3 bg-gray-900 md:grid'>
                  <div className='relative col-span-1 md:ml-10'>
                    <img className='md:-mb-10 md:-mt-10 md:rounded-xl' src={media.url} />
                  </div>
                  <div className='flex flex-col col-span-2 py-5 text-gray-200'>
                    <div className='mx-10 my-auto'>
                      <FaQuoteLeft className='mb-5 text-gray-400' size={40} />
                      <div className='mb-5 text-gray-400 md:text-lg'>
                        <p>{testimony}</p>
                      </div>
                      <p className='mb-1 text-xl'>{name}</p>
                      <p className='mb-5 text-lg italic'>Member of the {group} class</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default Testimonials
