import Layout from '../components/Layout';
import '../styles/globals.css';
import '../styles/tailwind.css';
import 'aos/dist/aos.css';
import { Provider } from 'react-redux';
import store from '../redux/store';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useEffect } from 'react';
import AOS from 'aos';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   AOS.init({
  //     disable: function () {
  //       const maxWidth = 800;
  //       return window.innerWidth < maxWidth;
  //     },
  //   });
  // });

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
