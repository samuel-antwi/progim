import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { BsLink45Deg } from 'react-icons/bs'
import graphcms from '../graphql/client'
import { GET_ABOUT_PAGE } from '../graphql/queries'
import Image from 'next/image'
import { IoIosCheckmark } from 'react-icons/io'
import WhatWeDo from '../components/WhatWeDo'
import { useRouter } from 'next/router'
import Bmi from '@/components/bmi/Bmi'

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
    personalTrainers,
    equipment,
    expertTrainers,
    happyClient,
  } = page

  const getPathName = () => {
    let router = useRouter()
    return (router = router.pathname.slice(1))
  }

  return (
    <div className='pt-10'>
      <AboutBanner>
        <div className='absolute text-gray-200 overlay'>
          <div className='container flex h-full'>
            <div className='my-auto'>
              <h1 className='mb-5 font-extrabold tracking-wider uppercase md:text-4xl'>About</h1>
              <div className='flex items-center px-3 py-2 space-x-2 text-sm bg-primary md:text-lg'>
                <Link href='/'>
                  <a>Home</a>
                </Link>
                <BsLink45Deg size={23} />
                <p className='capitalize'>About</p>
              </div>
            </div>
          </div>
        </div>
      </AboutBanner>
      <section className='px-5 py-20'>
        <AboutSection
          title={title}
          subTitle={subTitle}
          description={description}
          list={list}
          aboutImage={aboutImage}
        />
      </section>
      <section>
        <div className='grid-cols-6 mb-20 md:grid'>
          <AboutGrid item={happyClient} item_des='Happy client' />
          <img className='object-cover w-full h-64' src={images[3].url} alt='Happy clients' />
          <AboutGrid item={equipment} item_des='Equipment' />
          <img className='object-cover w-full h-64' src={images[2].url} alt='Happy clients' />
          <AboutGrid item={expertTrainers} item_des='Expert trainers' />
          <img className='object-cover w-full h-64' src={images[4].url} alt='Expert trainers' />
          <img className='object-cover w-full h-64' src={images[1].url} alt='Trophy' />
          <AboutGrid item={award} item_des='Awards' />
          <img className='object-cover w-full h-64' src={images[5].url} alt='Personal trainers' />
          <AboutGrid item={personalTrainers} item_des='Personal trainers' />
          <img className='object-cover w-full h-64' src={images[6].url} alt='Classrooms' />
          <AboutGrid item={classRoom} item_des='class rooms' />
        </div>
      </section>
      <WhatWeDo />
      <Bmi />
    </div>
  )
}

export default About

export const AboutSection = ({ title, subTitle, description, list, aboutImage }) => {
  return (
    <div className='max-w-6xl mx-auto'>
      <div className='grid-cols-2 gap-10 md:grid'>
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
            <h1 className='mb-1 font-semibold text-primary md:text-xl'>{title}</h1>
            <h1 className='mb-3 font-bold md:text-3xl'>{subTitle}</h1>
            <img src='/images/arrow-dark.png' alt='Arrow dumbell' />
            <p className='pt-10 mb-5 text-gray-600'>{description}</p>
            <div className='space-y-3'>
              {list.map((item, index) => (
                <div className='flex items-center' key={index}>
                  <IoIosCheckmark size={20} className='mr-2 text-white rounded-full bg-primary' />
                  <p className='text-gray-600'>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const AboutGrid = ({ item, item_des }) => {
  return (
    <div className='flex flex-col items-center justify-center h-full font-bold text-gray-100 uppercase bg-primary'>
      <h1 className='text-xl lg:text-3xl'>{item} +</h1>
      <h1 className='text-lg lg:text-xl'>{item_des}</h1>
    </div>
  )
}

export const getStaticProps = async () => {
  const { page } = await graphcms.request(GET_ABOUT_PAGE, { slug: 'about-page' })
  return {
    props: {
      page,
    },
  }
}

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
`
