import React from "react"
import { Link, useNavigate } from "react-router"
import AxiosInstance from "./AxiosInstance"
import { useAuth } from "../AuthContext/AuthContext"

// Page Components
import Form from "./PageComponents/Form"
import TextField from "./PageComponents/Textfield"
import Logo from "./PageComponents/Logo"
import ForgotPassword from "./ForgotPassword"
import Checkbox from "./PageComponents/Checkbox"

// Controller
import { useForm, Controller } from "react-hook-form"


const Login = () =>{

    const navigate = useNavigate()
    const {setUserData, setToken} = useAuth()

    const{
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = (data) => {
        AxiosInstance.post(`login/`,{
            email: data.email,
            password: data.password,  
        })
        .then((response) => {
            console.log(response)
            localStorage.setItem('token', response.data.token)
            setUserData(response.data.user)
            setToken(response.data.token)
            navigate(`/`)
        })
        .catch((e) => {
            console.error('Error during login', e)
        })
    }

    // Required fields prompt
    const errorMessage = 
        errors.email?.message || errors.password?.message;


    return(
        <div className="min-h-dvh flex place-self-center">
            <Form className="gap-2" onSubmit={handleSubmit(onSubmit)}>
                <Logo className="place-self-center"/>
                <span className="text-black text-2xl font-bold">Welcome</span>
                <span className="text-gray-800 mb-10">Login to your account.</span>

                <Controller
                    name="email"
                    control={control}
                    rules={{ required: "Email is required" }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            placeholderText="Email"
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    rules={{ required: "Password is required" }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            placeholderText="Password"
                            type="password"
                        />
                    )}
                />
                
                {/* Validation Error */}
                
                <div className="mt-1">
                    {errorMessage && (
                        <p className="text-red-500 text-sm">{errorMessage}</p>
                    )}
                </div>

                <div className="flex gap-20 px-5">
                    <ForgotPassword/>
                    <Checkbox 
                        placeholderText={"Keep me Logged In"}
                    />
                </div>
                <button 
                    type="submit"
                    className="bg-gray-800 p-1 rounded-3xl mt-5
                                   hover:bg-gray-900 min-w-24 max-w-48
                                   place-self-center"
                >
                    Login
                </button>

                {/* Some Footer below */}
            </Form>
        </div>
    )
}

export default Login