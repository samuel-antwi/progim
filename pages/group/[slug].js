import Link from 'next/link';
import { getPathName } from '../../utils';
import { BsLink45Deg } from 'react-icons/bs';
import styled from 'styled-components';
import { GET_GROUPS, GET_GROUP_DETAIL } from 'graphql/queries';
import graphcms from 'graphql/client';
import Image from 'next/image';
import FitnessGroupCard from '@/components/FitnessGroupCard';
import ReactMarkdown from 'react-markdown';
import FitnessGroupTrainers from '@/components/FitnessGroupTrainers';

const Group = ({ group }) => {
  const { name, image, description, trainers } = group;

  console.log(group);

  return (
    <div>
      <ClassBanner>
        <div className='overlay absolute text-gray-200'>
          <div className='flex h-full container'>
            <div className='my-auto '>
              <h1 className='uppercase md:text-4xl font-extrabold mb-5 tracking-wider'>Class</h1>
              <div className='flex items-center md:text-lg text-sm space-x-2 py-2 px-3 bg-primary'>
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
        <div className='max-w-7xl mx-auto px-5'>
          <div className='lg:grid grid-cols-3 gap-10'>
            <div className='col-span-2'>
              <Image
                src={image.url}
                width={image.width}
                height={image.height}
                loading='eager'
                priority={true}
              />
              <div className='pt-5  text-gray-600 mb-4'>
                <ReactMarkdown>{description.markdown}</ReactMarkdown>
              </div>
              <FitnessGroupTrainers trainers={trainers} name={name} />
            </div>
            <div className='col-span-1 pt-10 lg:pt-0'>
              <FitnessGroupCard group={group} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Group;

export const getStaticPaths = async () => {
  const { groups } = await graphcms.request(GET_GROUPS);
  return {
    paths: groups.map(({ slug }) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { group } = await graphcms.request(GET_GROUP_DETAIL, {
    slug: params.slug,
  });
  return {
    props: {
      group,
    },
  };
};

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
`;
