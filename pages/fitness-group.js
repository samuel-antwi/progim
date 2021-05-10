import styled from 'styled-components'
import { BsLink45Deg } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'
import Bmi from '../components/bmi/Bmi'
import graphcms from '../graphql/client'
import { GET_GROUPS } from '../graphql/queries'

const FitnessGroup = ({ groups }) => {
  return (
    <div className='pt-10'>
      <ClassBanner>
        <div className='absolute text-gray-200 overlay'>
          <div className='container flex h-full'>
            <div className='my-auto'>
              <h1 className='mb-5 font-extrabold tracking-wider uppercase md:text-4xl'>Classes</h1>
              <div className='flex items-center px-3 py-2 space-x-2 text-lg bg-primary rounded-br-3xl'>
                <Link href='/'>
                  <a>Home</a>
                </Link>
                <BsLink45Deg size={23} />
                <p className='capitalize'>classes</p>
              </div>
            </div>
          </div>
        </div>
      </ClassBanner>
      <div className='px-5 py-20 mx-auto xl:px-10 xl:max-w-7xl'>
        <div className='grid-cols-2 gap-10 sm:grid lg:grid-cols-3'>
          {groups.map((session) => {
            const {
              slug,
              name,
              image: { url },
              id,
              price,
              classSize,
            } = session
            return (
              <div key={id} className='col-span-1 mb-10 bg-white'>
                <Link href={`/group/${slug}`}>
                  <a className='relative'>
                    <Image
                      className='object-cover transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
                      src={url}
                      width={600}
                      height={500}
                      alt={name}
                      priority
                    />
                  </a>
                </Link>
                <div className=''>
                  <Link href={`/group/${slug}`}>
                    <a>
                      <p className='py-5 font-semibold text-center uppercase hover:text-primary md:text-xl'>
                        {name}
                      </p>
                    </a>
                  </Link>
                  <div className='flex items-center justify-between px-5 py-2 text-sm text-center text-gray-100 capitalize xxm:px-10 bg-primary md:px-5 lg:px-16'>
                    <span>
                      <p>class size</p>
                      <p>{classSize} per shift</p>
                    </span>
                    <p>|</p>
                    <span>
                      <p>course price</p>
                      <p>£ {price}</p>
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Bmi />
    </div>
  )
}

export default FitnessGroup

export const getStaticProps = async () => {
  const { groups } = await graphcms.request(GET_GROUPS)

  return {
    props: {
      groups,
    },
  }
}

const ClassBanner = styled.div`
  background: url('/images/classBg.jpeg') no-repeat center;
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
`
