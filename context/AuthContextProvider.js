import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import netlifyidentity from 'netlify-identity-widget'
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    netlifyidentity.init()
  }, [])

  const login = () => {
    netlifyidentity.open()
  }

  return <AuthContext.Provider value={{ user, login }}>{children}</AuthContext.Provider>
}

export const useAuthContextProvider = () => useContext(AuthContext)
