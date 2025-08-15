import axios from "axios";
import { createContext, useState } from "react";
import toast from "react-hot-toast"

const backendUrl = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL = backendUrl;

export const AuthContext = createContext();

export const AuthProvider = ({children})=>{

    // const [token, setToken] = useState(localStorage.getItem("token"))

    const senMail = async(credentials)=>{
        try {
            const {data} = await axios.post('/api/auth/sendMail',credentials)
            if(data.success){
                return true
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const value = {
        senMail
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
