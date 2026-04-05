import { createContext, useContext, useState, useEffect } from "react"
import AxiosInstance from "../components/AxiosInstance"

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)
    const [token, setToken] = useState(localStorage.getItem("token"))

    const getUser = () => {
        AxiosInstance.get(`/user`)
        .then(result => {
            setUserData(result.data)
        }).catch(() => {
            setToken(null)
            setUserData(null)
        })
    }

    useEffect(() => {
        if (!token) {
            setUserData(null)
            return
        }

        getUser()
    }, [token])

    return (
        <AuthContext.Provider value={{ userData, setUserData, token, setToken }}>
        {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
