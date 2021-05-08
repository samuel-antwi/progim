import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ellipsis } from '../utils'
import Header from './Header'

const PopularClasses = ({ groups }) => {
  return (
    <div>
      <div className='max-w-7xl mx-auto'>
        <Header title='our popular classes' subTitile='curated by our experts' />
        <div className='xl:max-w-7xl mx-auto mb-20 pt-10  px-5 xl:px-10'>
          <div className='xxm:grid grid-cols-2 lg:grid-cols-3  gap-10'>
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
                  className='col-span-1 bg-white '>
                  <Link href={`/group/${slug}`}>
                    <a className='relative'>
                      <Image
                        className={clsx(
                          'transition object-cover duration-500 ease-in-out',
                          'transform hover:-translate-y-1 hover:scale-110'
                        )}
                        src={url}
                        width={600}
                        height={500}
                        alt={name}
                        priority
                      />
                      <p
                        className={clsx(
                          'bg-primary text-gray-200 text-sm py-2 w-44, mx-auto ',
                          'absolute bottom-2 px-3 rounded right-0 left-0  '
                        )}>
                        {classCategory.name}
                      </p>
                    </a>
                  </Link>
                  <div>
                    <Link href={`/group/${slug}`}>
                      <a>
                        <p className='text-center md:text-xl hover:text-primary font-semibold uppercase py-5'>
                          {name}
                        </p>
                      </a>
                    </Link>
                    <p className='text-gray-700 mb-5 px-8'>{ellipsis(description.text)}</p>
                    <div
                      className={clsx(
                        'flex items-center text-sm capitalize ',
                        'bg-primary justify-between py-2 lg:px-16 ',
                        'px-5 text-center text-gray-100'
                      )}>
                      <span>
                        <p>class student</p>
                        <p>{classSize} per shift</p>
                      </span>
                      <div className='border-l-[1px] border-gray-200 h-[50px] absolute left-1/2 '></div>
                      <span>
                        <p>course price</p>
                        <p>£{price}</p>
                      </span>
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
