import { useAuthContextProvider } from 'context/AuthContextProvider'
import { useRouter } from 'next/router'

const FitnessGroupCard = ({ group }) => {
  const { price, duration, shift, classSize, trainers, classCategory } = group

  const { login, user } = useAuthContextProvider()

  const router = useRouter()

  return (
    <div className='bg-primary text-gray-200 p-6'>
      <h1 className='text-2xl font-semibold mb-7'>Group Fetaures</h1>
      <div>
        <div className='flex items-center font-bold mb-5 justify-between border-b border-gray-500'>
          <span>Category</span>
          <span className=''>{classCategory.name}</span>
        </div>
        <div className='flex items-center mb-5 justify-between border-b border-gray-500'>
          <span>Duration</span>
          <span>{duration} days</span>
        </div>
        <div className='flex items-center mb-5 justify-between border-b border-gray-500'>
          <span>Students</span>
          <span>{classSize}</span>
        </div>
        <div className='flex items-center mb-5 justify-between border-b border-gray-500'>
          <span>Shift</span>
          <span>{shift}</span>
        </div>
        <div className='flex items-center mb-5 justify-between border-b border-gray-500'>
          <span>Price</span>
          <span>£{price}</span>
        </div>
        <div className='py-6 flex justify-items-center items-center justify-center'>
          <button
            onClick={() => {
              if (user === null) {
                login()
              } else {
                router.push('/account')
              }
            }}
            className='focus:outline-none bg-white hover:bg-black hover:text-gray-100 transition duration-300 py-2 px-8 rounded-full text-primary font-bold tracking-wider uppercase'>
            Join now
          </button>
        </div>
      </div>
    </div>
  )
}

export default FitnessGroupCard
