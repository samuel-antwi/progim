import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/tailwind.css'
import 'aos/dist/aos.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { useEffect } from 'react'
import AOS from 'aos'
import SnackbarProvider from 'react-simple-snackbar'
import { Provider } from 'react-redux'
import { store } from 'redux/store'
import { ProductContextProvider } from 'context/ProductContextProvider'
import { AuthContextProvider } from 'context/AuthContextProvider'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: function () {
        const maxWidth = 800
        return window.innerWidth < maxWidth
      },
    })
  })

  return (
    <SnackbarProvider>
      <AuthContextProvider>
        <ProductContextProvider>
          <Provider store={store}>
            <QueryClientProvider client={queryClient}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </QueryClientProvider>
          </Provider>
        </ProductContextProvider>
      </AuthContextProvider>
    </SnackbarProvider>
  )
}

export default MyApp
