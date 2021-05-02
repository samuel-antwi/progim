import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import netlifyidentity from 'netlify-identity-widget'
import { useRouter } from 'next/router'

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const router = useRouter()

  useEffect(() => {
    netlifyidentity.on('login', (user) => {
      setUser(user)
      netlifyidentity.close()
    })

    netlifyidentity.on('logout', () => {
      router.push('/')
      setUser(null)
    })

    netlifyidentity.init()

    return () => {
      netlifyidentity.off('login')
      netlifyidentity.off('logout')
    }
  }, [])

  const login = () => {
    netlifyidentity.open()
  }

  const logout = () => {
    netlifyidentity.logout()
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuthContextProvider = () => useContext(AuthContext)
