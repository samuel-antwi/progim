import Head from 'next/head';
import Navbar from './Navbar';

const Layout = ({ title, description, children }) => {
  return (
    <div className='font-poppins bg-light'>
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
      <div>{children}</div>
    </div>
  );
};

export default Layout;
