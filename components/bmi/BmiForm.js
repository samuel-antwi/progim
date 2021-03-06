import { useEffect, useState } from 'react'
import { BiReset } from 'react-icons/bi'
import clsx from 'clsx'
import LoadingScreen from '../LoadingScreen'

const BmiForm = () => {
  const [bmiResults, setBmiResults] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formState, setFormState] = useState({
    weight: '',
    height: '',
  })

  const underWeight = bmiResults < 18.5
  const normalWeight = bmiResults >= 18.5 && bmiResults <= 24.99
  const overWeight = bmiResults >= 25 && bmiResults <= 29.99
  const obese = bmiResults >= 30

  // Funtion to calculate bmi description based on bmi rsults
  const description = () => {
    return underWeight
      ? 'underweight'
      : normalWeight
      ? 'healthy weight'
      : overWeight
      ? 'over weight'
      : obese
      ? 'obese'
      : null
  }

  useEffect(() => {
    resetForm()
  }, [formState.height, formState.weight])

  // Function to calculate bmi
  const calculateBmiInKg = (weight, height) => {
    const newheight = height / 100
    return weight / (newheight * newheight)
  }

  // Handle Onchange
  const handleChange = (e) => {
    const value = e.target.value
    setFormState({
      ...formState,
      [e.target.name]: value,
    })
  }

  //   Handle bmi form input function
  const handleForm = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setBmiResults(calculateBmiInKg(formState.weight, formState.height).toFixed(1))
      setShowResults(true)
      setIsLoading(false)
    }, 2000)
  }

  // Reset bmi results when user delete input fields
  const resetForm = () => {
    if (formState.height === '' || formState.weight === '') {
      setBmiResults('')
      setShowResults(false)
    }
  }

  return (
    <div className='lg:mr-10'>
      <p className='mb-5'>
        Progim – Fitness Center provide all kinds of fitness training with modern instruments.
      </p>
      <form onSubmit={handleForm}>
        <div className='grid grid-cols-2 gap-5 mb-2'>
          <div className='col-span-1'>
            <label className='block mb-1 text-gray-300' htmlFor='feet'>
              Height (cms)
            </label>
            <input
              required
              className='block w-full p-2 bg-transparent border border-primary'
              name='height'
              value={formState.height}
              onChange={handleChange}
              type='text'
            />
          </div>
          <div className='col-span-1'>
            <label className='block mb-1 text-gray-300' htmlFor='weight'>
              Weight (kgs)
            </label>
            <input
              required
              className={clsx(
                'block mb-4 w-full border border-primary',
                'p-2 bg-transparent appearance-none'
              )}
              type='number'
              name='weight'
              value={formState.weight}
              onChange={handleChange}
            />
          </div>
        </div>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <button
            type='submit'
            className={clsx(
              'block font-semibold tracking-wide uppercase',
              'mb-10 w-full bg-primary border border-primary',
              'p-2 hover:bg-btn_hover transition duration-200'
            )}
            type='number'>
            {formState.height && formState.weight && bmiResults ? 'Recalculate' : 'Calculate'}
          </button>
        )}
      </form>
      <BmiResults
        setFormState={setFormState}
        showResults={showResults}
        isLoading={isLoading}
        description={description}
        bmiResults={bmiResults}
      />
    </div>
  )
}

const BmiResults = ({ showResults, isLoading, description, bmiResults, setFormState }) => {
  return (
    <div>
      {showResults && !isLoading && (
        <div className='mb-10 font-semibold'>
          <span className='flex items-center mb-5'>
            <h1>Your BMI results:</h1>
            <p className='w-1/2 px-4 py-2 ml-3 bg-primary'>{bmiResults}</p>
          </span>
          <p className={`py-3 px-4 bg-primary xs:text-base text-xs`}>
            Your BMI Category is <span className='capitalize'>{description()}</span>
          </p>
          <button
            onClick={() => setFormState({ weight: '', height: '' })}
            className='p-2 mt-5 text-gray-100 bg-primary'>
            <BiReset className='w-4 h-4 xs:w-8 xs:h-8' />
          </button>
        </div>
      )}
    </div>
  )
}

export default BmiForm
