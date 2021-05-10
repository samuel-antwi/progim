import { useAuthContextProvider } from 'context/AuthContextProvider'
import Link from 'next/link'
import { useRouter } from 'next/router'

const FitnessGroupCard = ({ group }) => {
  const { price, duration, shift, classSize, trainers, classCategory } = group

  const { login, user } = useAuthContextProvider()

  const router = useRouter()

  return (
    <div className='p-6 text-gray-200 bg-primary'>
      <h1 className='text-2xl font-semibold mb-7'>Group Fetaures</h1>
      <div>
        <div className='flex items-center justify-between mb-5 font-bold border-b border-gray-500'>
          <span>Category</span>
          <span className=''>{classCategory.name}</span>
        </div>
        <div className='flex items-center justify-between mb-5 border-b border-gray-500'>
          <span>Duration</span>
          <span>{duration} days</span>
        </div>
        <div className='flex items-center justify-between mb-5 border-b border-gray-500'>
          <span>Students</span>
          <span>{classSize}</span>
        </div>
        <div className='flex items-center justify-between mb-5 border-b border-gray-500'>
          <span>Shift</span>
          <span>{shift}</span>
        </div>
        <div className='flex items-center justify-between mb-5 border-b border-gray-500'>
          <span>Price</span>
          <span>£{price}</span>
        </div>
        <div className='flex items-center justify-center py-6 justify-items-center'>
          <Link href='/signup'>
            <a>
              <button
                onClick={() => {
                  if (user === null) {
                    login()
                  } else {
                    router.push('/account')
                  }
                }}
                className='px-8 py-2 font-bold tracking-wider uppercase transition duration-300 bg-white rounded-full hover:text-gray-100 text-primary hover:bg-black focus:outline-none'>
                Join now
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FitnessGroupCard
