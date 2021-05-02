import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'
import ProgressBar from 'react-scroll-progress-bar'

const Layout = ({ title, description, children }) => {
  return (
    <div className='font-poppins bg-light'>
      <ProgressBar bgcolor='#EF5B5B' />
      <Navbar />
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta charSet='utf-8' />
        <meta property='og:title' content={title} key='ogtitle' />
        <meta property='og:description' content={description} key='ogdescription' />
        <meta name='description' content={description} />
        <meta property='og:title' content={title} key='ogtitle' />
        <meta property='og:description' content={description} key='ogdesc' />
        <title>{title}</title>
      </Head>
      <div className='md:pt-20 min-h-screen'>{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
