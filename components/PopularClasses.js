import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ellipsis } from '../utils'
import Header from './Header'

const PopularClasses = ({ groups }) => {
  return (
    <div>
      <div className='mx-auto max-w-7xl'>
        <Header title='our popular classes' subTitile='curated by our experts' />
        <div className='px-5 pt-10 mx-auto mb-20 xl:px-10 xl:max-w-7xl'>
          <div className='grid-cols-2 gap-10 xxm:grid lg:grid-cols-3'>
            {groups.map((session) => {
              const {
                name,
                slug,
                description,
                classCategory,
                image: { url },
                id,
                price,
                classSize,
              } = session
              return (
                <div
                  data-aos='zoom-in-up'
                  data-aos-duratin='1000'
                  key={id}
                  className='col-span-1 bg-white'>
                  <Link href={`/group/${slug}`}>
                    <a className='relative'>
                      <Image
                        className={clsx(
                          'object-cover transition duration-500 ease-in-out',
                          'transform hover:-translate-y-1 hover:scale-110'
                        )}
                        src={url}
                        width={600}
                        height={500}
                        alt={name}
                        priority
                      />
                    </a>
                  </Link>
                  <div>
                    <Link href={`/group/${slug}`}>
                      <a>
                        <p className='flex justify-center py-5 font-semibold text-center uppercase hover:text-primary md:text-xl'>
                          {name}
                        </p>
                      </a>
                    </Link>
                    <p className='px-8 mb-5 text-gray-700'>{ellipsis(description.text)}</p>
                    <div
                      className={clsx(
                        'flex items-center text-sm capitalize ',
                        'justify-between py-2 bg-primary lg:px-16 ',
                        'px-5 text-center text-gray-100'
                      )}>
                      <div>
                        <p>class size</p>
                        <p>{classSize} per shift</p>
                      </div>
                      {/* <div className='border-l-[1px] h-[50px] absolute left-1/2 border-gray-200'></div> */}
                      <p>|</p>
                      <div>
                        <p>course price</p>
                        <p>£{price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularClasses
