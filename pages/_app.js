import Layout from '../components/Layout';
import '../styles/globals.css';
import '../styles/tailwind.css';
import 'aos/dist/aos.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useEffect } from 'react';
import AOS from 'aos';
import SnackbarProvider from 'react-simple-snackbar';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: function () {
        const maxWidth = 800;
        return window.innerWidth < maxWidth;
      },
    });
  });

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SnackbarProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SnackbarProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
