import Link from 'next/link'
import { BsLink45Deg } from 'react-icons/bs'
import styled from 'styled-components'
import { GET_GROUPS, GET_GROUP_DETAIL } from 'graphql/queries'
import graphcms from 'graphql/client'
import Image from 'next/image'
import FitnessGroupCard from '@/components/FitnessGroupCard'
import ReactMarkdown from 'react-markdown'
import FitnessGroupTrainers from '@/components/FitnessGroupTrainers'
import clsx from 'clsx'

const Group = ({ group }) => {
  const { name, image, description, trainers } = group

  return (
    <div>
      <ClassBanner>
        <div className='absolute text-gray-200 overlay'>
          <div className='container flex h-full'>
            <div className='my-auto'>
              <h1 className='mb-5 font-extrabold tracking-wider uppercase md:text-4xl'>Class</h1>
              <div
                className={clsx(
                  'flex items-center text-sm md:text-lg ',
                  'px-3 py-2 bg-primary space-x-2'
                )}>
                <Link href='/'>
                  <a>Home</a>
                </Link>
                <BsLink45Deg size={23} />
                <p className='capitalize'>shop</p>
                <BsLink45Deg size={23} />
                <p className='capitalize'>{name}</p>
              </div>
            </div>
          </div>
        </div>
      </ClassBanner>
      <section className='py-20'>
        <div className='px-5 mx-auto max-w-7xl'>
          <div className='grid-cols-3 gap-10 lg:grid'>
            <div className='col-span-2'>
              <Image
                src={image.url}
                width={image.width}
                height={image.height}
                loading='eager'
                priority={true}
              />
              <div className='pt-5 mb-4 text-gray-600'>
                <ReactMarkdown>{description.markdown}</ReactMarkdown>
              </div>
              <hr className='my-10 bg-gray-200' />
              <FitnessGroupTrainers trainers={trainers} name={name} />
            </div>
            <div className='col-span-1 pt-10 lg:pt-0'>
              <FitnessGroupCard group={group} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Group

export const getStaticPaths = async () => {
  const { groups } = await graphcms.request(GET_GROUPS)
  return {
    paths: groups.map(({ slug }) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const { group } = await graphcms.request(GET_GROUP_DETAIL, {
    slug: params.slug,
  })
  return {
    props: {
      group,
    },
  }
}

const ClassBanner = styled.div`
  background: url('/images/classBg.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 25vh;
  position: relative;

  .overlay {
    width: 100%;
    height: 25vh;
    background: rgba(0, 0, 0, 0.8);
  }
`
