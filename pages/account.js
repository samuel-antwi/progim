import { useAuthContextProvider } from 'context/AuthContextProvider'

const Account = () => {
  const { user } = useAuthContextProvider()
  return (
    <main className='pt-20'>
      <div className='max-w-6xl mx-auto'>
        <div>
          <h1>welcome back {user?.user_metadata.full_name}</h1>
        </div>
      </div>
    </main>
  )
}

export default Account
