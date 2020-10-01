import React, { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'

import loginService from '../../services/loginService';
import { useRouter } from 'next/router'

interface User {
    name: string;
    authenticated: boolean;
}

type ContextProps = { 
    isAuthenticated: boolean;
    user: User;
    login: Function;
    logout: Function;
    loading: boolean;
}

const AuthContext = createContext<ContextProps>({ isAuthenticated: false, user: null, login: null, logout: null, loading: false });

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState<User>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const router = useRouter()

    useEffect(() => {
        async function loadUserFromCookies() {
            const token = Cookies.get('token')
            if (token) {
                console.log("Got a token in the cookies, let's see if it is valid")
                // loginService.defaults.headers.Authorization = `Bearer ${token}`
                // const { data: user } = await loginService.get('users/me')
                const user = { name: 'rafael', authenticated: true }
                if (user) setUser(user);
            }
            setLoading(false)
        }
        loadUserFromCookies()
    }, [])

    const login = async (username, password) => {

        if (username === 'rafael' && password === 'abc123') {
            Cookies.set('token', 'token', { expires: 60 })
            setUser({ name: 'rafael', authenticated: true })
        } else {
            console.log('Login deu erro')
        }
        /**
         const { data: token } = await loginService.post('auth/login', { username, password })
         if (token) {
             console.log("Got token")
             Cookies.set('token', token, { expires: 60 })
             loginService.defaults.headers.Authorization = `Bearer ${token.token}`
             const { data: user } = await loginService.get('users/me')
             setUser(user)
             console.log("Got user", user)
         }
         */
    }

    const logout = () => {
        Cookies.remove('token')
        setUser(null)
        delete loginService.defaults.headers.Authorization
        router.push('/login')
    }


    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

export default AuthContext