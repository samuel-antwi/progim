import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/tailwind.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import SnackbarProvider from 'react-simple-snackbar'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import { ProductContextProvider } from 'context/ProductContextProvider'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (
    <SnackbarProvider>
      <ProductContextProvider>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </QueryClientProvider>
        </Provider>
      </ProductContextProvider>
    </SnackbarProvider>
  )
}

export default MyApp
