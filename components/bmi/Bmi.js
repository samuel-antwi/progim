import Image from 'next/image'
import styled from 'styled-components'
import BmiCategories from './BmiCategories'
import BmiForm from './BmiForm'
import { useRouter } from 'next/router'

const Bmi = ({ variant }) => {
  const router = useRouter()
  const homePage = router.pathname === '/'
  return (
    <Styles className={`${variant ? 'my-20' : 'mt-20'} text-gray-100`}>
      <div className='overlay'>
        <div className='px-5 pt-20 mx-auto sm:px-20 lg:px-5 xl:max-w-7xl'>
          <div className='grid-cols-7 gap-5 lg:grid'>
            <div className='hidden col-span-2 bmi__image lg:block'>
              <img
                className='z-20 object-cover'
                src={homePage ? '/images/bmi-03.jpg' : '/images/bmi.png'}
              />
            </div>
            <div className='col-span-3'>
              <div className='mb-10'>
                <h1 className='mb-3 font-bold uppercase md:text-4xl'>calculate your bmi</h1>
                <img src='/images/arrow-dark.png' alt='' />
              </div>
              <BmiForm />
            </div>
            <div className='col-span-2'>
              <BmiCategories />
            </div>
          </div>
        </div>
      </div>
    </Styles>
  )
}

export default Bmi

const Styles = styled.div`
  width: 100%;
  background: url('/images/bmi-bg.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-attachment: fixed;

  .overlay {
    width: 100%;
    background: rgba(0, 0, 0, 0.85);
  }

  .bmi__image {
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
  }
`
