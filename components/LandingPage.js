import styled from 'styled-components'
import Typewriter from 'typewriter-effect'

const LandingPage = () => {
  return (
    <Styles>
      <div className='overlay '>
        <div className=' container'>
          <div className=' col-span-1 uppercase flex flex-col justify-center md:h-screen h-[600px]'>
            <h1
              data-aos='slide-right'
              data-aos-duration='1000'
              className='text-primary text-4xl font-extrabold'>
              set up your
            </h1>
            <div className='text-gray-300 md:text-7xl text-5xl font-extrabold '>
              <Typewriter
                options={{
                  cursor: '',
                  delay: 150,
                  deleteSpeed: 150,
                  autoStart: true,
                  loop: true,
                  strings: ['fitness', 'goals', 'dreams'],
                }}
                onInit={(typewriter) => {
                  typewriter.pauseFor(500).deleteAll().start()
                }}
              />
            </div>
            <h1
              data-aos='slide-left'
              data-aos-duration='1200'
              className='md:text-5xl text-3xl flex items-center font-extrabold mb-10'>
              <span className='mr-3 text-gray-100'>with</span>
              <span className='text-primary'>ProGim</span>
            </h1>
            <div data-aos='fade-up' data-aos-duration='1500'>
              <button className='text-gray-100 md:py-4 md:w-64 w-48 py-3 focus:outline-none bg-primary transition duration-300 hover:bg-btn_hover rounded-full  tracking-wide font-semibold uppercase'>
                become a member
              </button>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  )
}

export default LandingPage

const Styles = styled.div`
  width: 100%;
  height: 100vh;
  background: url('/images/hero-bg-01.jpeg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .overlay {
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
  }
`
