import Layout from '../components/Layout';
import '../styles/globals.css';
import '../styles/tailwind.css';
import 'aos/dist/aos.css';
import { Provider } from 'react-redux';
import { store, persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useEffect } from 'react';
import AOS from 'aos';
import SnackbarProvider from 'react-simple-snackbar';

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
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SnackbarProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </SnackbarProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
